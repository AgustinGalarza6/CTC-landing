import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const BNA_PERSONAS_URL = "https://www.bna.com.ar/Personas";

function parseArNumber(value: string): number {
    return Number(value.replace(/\./g, "").replace(",", "."));
}

function extractUsdRates(html: string): { buy: number; sell: number; updateTime: string | null } {
    const rowMatch = html.match(
        /D[oó]lar\s*U\.S\.A\s*<\/td>\s*<td[^>]*>\s*([\d.,]+)\s*<\/td>\s*<td[^>]*>\s*([\d.,]+)\s*<\/td>/i
    );

    if (!rowMatch) {
        throw new Error("No se pudo parsear la cotizacion Dolar U.S.A en BNA");
    }

    const buy = parseArNumber(rowMatch[1]);
    const sell = parseArNumber(rowMatch[2]);

    const updateMatch = html.match(/Hora\s+Actualizaci[oó]n:\s*([^<\n\r]+)/i);
    const updateTime = updateMatch?.[1]?.trim() ?? null;

    return { buy, sell, updateTime };
    }

    export async function GET() {
    try {
        const response = await fetch(BNA_PERSONAS_URL, {
        cache: "no-store",
        headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                    Accept:
                        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                    "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
                    "Cache-Control": "no-cache",
                    Pragma: "no-cache",
                    "Upgrade-Insecure-Requests": "1",
        },
        });

        if (!response.ok) {
        throw new Error(`BNA devolvio status ${response.status}`);
        }

        const html = await response.text();
        const { buy, sell, updateTime } = extractUsdRates(html);

        return NextResponse.json(
        {
            source: "BNA",
            currency: "USD/ARS",
            buy,
            sell,
            updateTime,
            fetchedAt: new Date().toISOString(),
        },
        { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
        {
            source: "BNA",
            error: "No se pudo obtener cotizacion del dia",
            details: error instanceof Error ? error.message : "Error desconocido",
        },
        { status: 502 }
        );
    }
}
