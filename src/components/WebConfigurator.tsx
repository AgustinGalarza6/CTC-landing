"use client";

import { useState, useMemo, useEffect } from "react";
import { Check, Globe, Server, ShieldCheck, ArrowRight } from "lucide-react";
import { WEB_PLANS, ADD_ONS, CURRENCY } from "@/constants/web-plans";

const WHATSAPP_NUMBER = "5491138923268";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const FALLBACK_EXCHANGE_RATE = 1000;

const PLAN_TIER: Record<string, string> = {
    silver: "Plan Base",
    gold: "Crecimiento",
    platinum: "Empresarial",
};

const ADDON_ICON: Record<string, React.ReactNode> = {
    domain: <Globe className="w-4 h-4" />,
    hosting: <Server className="w-4 h-4" />,
    ssl: <ShieldCheck className="w-4 h-4" />,
};

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={onChange}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                checked ? "bg-[#003d7a]" : "bg-gray-200"
            }`}
        >
            <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ${
                    checked ? "translate-x-5" : "translate-x-0"
                }`}
            />
        </button>
    );
}

interface BnaRateResponse {
    buy: number;
    sell: number;
    updateTime: string | null;
}


export default function WebConfigurator() {
    const [selectedPlan, setSelectedPlan] = useState<string>("gold");
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
    const [exchangeRate, setExchangeRate] = useState<number>(FALLBACK_EXCHANGE_RATE);
    const [loadingExchange, setLoadingExchange] = useState<boolean>(true);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch("/api/bna-rate", { cache: "no-store" });
                if (response.ok) {
                    const data = (await response.json()) as BnaRateResponse;
                    if (data.sell) setExchangeRate(data.sell);
                }
            } catch {
                console.log("No se pudo obtener el tipo de cambio BNA actual");
            } finally {
                setLoadingExchange(false);
            }
        };
        fetchExchangeRate();
        const intervalId = window.setInterval(fetchExchangeRate, 15 * 60 * 1000);
        return () => window.clearInterval(intervalId);
    }, []);

    const basePlanPrice = useMemo(
        () => WEB_PLANS.find((p) => p.id === selectedPlan)?.price ?? 0,
        [selectedPlan]
    );

    const addOnsTotal = useMemo(
        () => selectedAddOns.reduce((acc, id) => acc + (ADD_ONS.find((a) => a.id === id)?.price ?? 0), 0),
        [selectedAddOns]
    );

    const totalPrice = basePlanPrice + addOnsTotal;

    const toggleAddOn = (id: string) =>
        setSelectedAddOns((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

    const currentPlan = WEB_PLANS.find((p) => p.id === selectedPlan);

    const handleFinishOrder = () => {
        const planName = currentPlan?.name ?? "Plan no seleccionado";
        const addOnsDetail = selectedAddOns
            .map((id) => {
                const a = ADD_ONS.find((x) => x.id === id);
                return `   • ${a?.name}: +${CURRENCY}${a?.price.toLocaleString("en-US")}`;
            })
            .join("\n");
        const addOnsNames = selectedAddOns
            .map((id) => ADD_ONS.find((a) => a.id === id)?.name)
            .filter(Boolean)
            .join(", ");

        const message = `*SOLICITUD DE DESARROLLO WEB - CTC SISTEMAS*

═══════════════════════════════════════════
*RESUMEN DE PEDIDO*
═══════════════════════════════════════════

*Plan Seleccionado:* ${planName}
*Precio Base:* ${CURRENCY}${basePlanPrice.toLocaleString("en-US")}
${addOnsNames ? `\n*Servicios Adicionales:*
${addOnsDetail}` : ""}

*TOTAL A INVERTIR:* ${CURRENCY}${totalPrice.toLocaleString("en-US")}
(Equivalente aprox. ARS $${(totalPrice * exchangeRate).toLocaleString("es-AR", { maximumFractionDigits: 0 })})

═══════════════════════════════════════════
*FORMULARIO DE RELEVAMIENTO ESTRATÉGICO*
═══════════════════════════════════════════

Por favor, completá los siguientes campos para que nuestro equipo comience con la arquitectura de tu sitio:

*1. ADN DEL NEGOCIO*
• Nombre Comercial: (Nombre de la marca o empresa).
• Rubro/Industria: (Ej: Gastronomía, Construcción, Salud, etc.).
• ¿Qué vendés exactamente?: (Describí tus 3 productos o servicios principales).
• Diferencial: (¿Por qué elegirte a vos? Ej: "Atención 24hs", "Precio de fábrica", "Experiencia comprobada").
• Público Objetivo: (¿A quién le hablás? Ej: "Empresas", "Familias", "Público joven").

*2. IDENTIDAD VISUAL*
• ¿Tenés logotipo?: (Si tenés, adjuntalo. Si no, podemos definir una estética tipográfica).
• Colores o Sensación: (Ej: "Azul y blanco", o sensaciones como "Seriedad" o "Innovación").
• Estilo Visual: (Elegí uno: Minimalista / Moderno / Clásico / Rústico / Tecnológico).
• Webs de referencia: (Links de sitios que te gusten estéticamente).

*3. ESTRUCTURA Y CONTENIDO*
• Secciones del Menú: (Ej: Inicio / Nosotros / Servicios / Galería / Contacto).
• Info "Nosotros": (Breve historia de la empresa o visión del equipo).
• Preguntas Frecuentes: (Ej: "¿Tienen envío?", "¿Qué medios de pago aceptan?", "¿Tienen garantía?").

*4. RECURSOS MULTIMEDIA*
• Fotos disponibles: (¿Tenés fotos propias? Si no, seleccionaremos imágenes profesionales de banco).
• Testimonios: (Copiá y pegá comentarios positivos de clientes reales).

*5. DATOS TÉCNICOS Y CONVERSIÓN (CTA)*
• WhatsApp de contacto: (Número directo para el botón de chat en la web).
• Redes Sociales: (Links de Instagram, Facebook, LinkedIn o TikTok).
• Ubicación: (Dirección física para el mapa o "Atención Online").
• Horarios: (Ej: "Lunes a Viernes de 9 a 18hs").
• Acción Principal (CTA): (¿Qué es lo más importante que haga el usuario? Ej: "Que me mande WhatsApp" o "Que reserve").

═══════════════════════════════════════════

Una vez recibidos estos datos, nuestro departamento de desarrollo comenzará a estructurar tu sitio web a medida.`;

        window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <div
            id="desarrollo-web"
            className="py-24 px-4"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-normal leading-tight" style={{ color: "#003d7a" }}>
                        ¿Tu web anda lenta o su diseño quedó en el tiempo?<br />
                        <span className="font-extrabold">Tenemos la solución para vos</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Columna izquierda */}
                    <div className="lg:w-2/3 space-y-8">

                        {/* Plan cards — blancas por defecto, oscuras al seleccionar */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {WEB_PLANS.map((plan) => {
                                const isSelected = selectedPlan === plan.id;
                                const isPopular = plan.id === "gold";
                                return (
                                    <button
                                        key={plan.id}
                                        onClick={() => setSelectedPlan(plan.id)}
                                        className={`relative flex flex-col text-left rounded-[2rem] p-8 transition-all duration-200 border-2 ${
                                            isSelected
                                                ? "border-transparent shadow-2xl scale-[1.03] z-10"
                                                : "bg-white border-transparent hover:border-[#003d7a]/10 shadow-sm"
                                        }`}
                                        style={isSelected ? { background: "#003d7a", boxShadow: "0 20px 60px rgba(0,61,122,0.25)" } : {}}
                                    >
                                        {isPopular && (
                                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg">
                                                MÁS POPULAR
                                            </span>
                                        )}

                                        <p
                                            className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3"
                                            style={{ color: isSelected ? "rgba(255,255,255,0.6)" : "#4b7ab5" }}
                                        >
                                            {PLAN_TIER[plan.id]}
                                        </p>

                                        <h3
                                            className="text-2xl font-black mb-3 leading-none"
                                            style={{ color: isSelected ? "#ffffff" : "#003d7a" }}
                                        >
                                            {plan.name.replace("WEB PLAN ", "").replace(" + PIL CLOUD", "")}
                                        </h3>

                                        <div className="flex items-baseline gap-1 mt-8 mb-8">
                                            <span
                                                className="text-4xl font-bold leading-none"
                                                style={{ color: isSelected ? "#ffffff" : "#003d7a" }}
                                            >
                                                ${plan.price}
                                            </span>
                                            <span
                                                className="text-lg ml-1"
                                                style={{ color: isSelected ? "rgba(255,255,255,0.55)" : "rgba(0,61,122,0.5)" }}
                                            >
                                                USD
                                            </span>
                                        </div>

                                        <ul className="space-y-3 mt-auto">
                                            {plan.features.slice(0, 3).map((f, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2 text-xs"
                                                    style={{ color: isSelected ? "rgba(255,255,255,0.75)" : "#5a7a9c" }}
                                                >
                                                    <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: isSelected ? "rgba(255,255,255,0.8)" : "#003d7a" }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Add-ons */}
                        <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold mb-8" style={{ color: "#003d7a" }}>
                                Servicios Adicionales
                            </h3>
                            <div className="space-y-1">
                                {ADD_ONS.map((addon) => {
                                    const isOn = selectedAddOns.includes(addon.id);
                                    return (
                                        <div
                                            key={addon.id}
                                            className="flex items-center justify-between py-6 border-b border-gray-100 last:border-0"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                                                    style={{ background: "#f0f5fb" }}
                                                >
                                                    <span style={{ color: "#003d7a" }}>{ADDON_ICON[addon.id]}</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm" style={{ color: "#003d7a" }}>{addon.name}</p>
                                                    <p className="text-xs mt-0.5" style={{ color: "#8fafc8" }}>{addon.description}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="font-bold text-sm whitespace-nowrap" style={{ color: "#003d7a" }}>
                                                    ${addon.price.toLocaleString("en-US")} USD
                                                </span>
                                                <ToggleSwitch checked={isOn} onChange={() => toggleAddOn(addon.id)} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar — gradiente azul oscuro */}
                    <div className="lg:w-1/3 lg:sticky lg:top-8">
                        <div
                            className="rounded-[2.5rem] p-10 shadow-2xl"
                            style={{ background: "linear-gradient(135deg, #003d7a 0%, #0f2d54 100%)" }}
                        >
                            <h3 className="text-2xl font-bold mb-8" style={{ color: "#ffffff" }}>
                                Resumen del Pedido
                            </h3>

                            <div className="space-y-5 mb-10 pb-10 border-b border-white/10">
                                {/* Plan row */}
                                <div className="flex justify-between items-center">
                                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                                        Plan {currentPlan?.name.replace("WEB PLAN ", "").split(" ")[0]}
                                    </span>
                                    <span className="text-sm font-bold" style={{ color: "#ffffff" }}>
                                        ${basePlanPrice.toLocaleString("en-US")} USD
                                    </span>
                                </div>

                                {/* Addon rows */}
                                {selectedAddOns.map((aid) => {
                                    const a = ADD_ONS.find((x) => x.id === aid);
                                    return (
                                        <div key={aid} className="flex justify-between items-center">
                                            <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                                                {a?.name.split(" (")[0]}
                                            </span>
                                            <span className="text-sm font-bold" style={{ color: "#ffffff" }}>
                                                +${a?.price.toLocaleString("en-US")} USD
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Total */}
                            <div className="space-y-2 mb-10">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Total estimado</span>
                                    <span className="text-4xl font-black" style={{ color: "#ffffff" }}>
                                        ${totalPrice.toLocaleString("en-US")} USD
                                    </span>
                                </div>
                                <p className="text-xs text-right" style={{ color: "rgba(255,255,255,0.45)" }}>
                                    ≈ ${(totalPrice * exchangeRate).toLocaleString("es-AR", { maximumFractionDigits: 0 })} ARS
                                    {!loadingExchange && " (T.C. referencial)"}
                                </p>
                            </div>

                            <button
                                onClick={handleFinishOrder}
                                className="w-full flex items-center justify-center gap-2 font-black text-lg py-5 rounded-full transition-all duration-200 hover:shadow-xl active:scale-95"
                                style={{ background: "#ffffff", color: "#003d7a" }}
                            >
                                Finalizar Pedido
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}