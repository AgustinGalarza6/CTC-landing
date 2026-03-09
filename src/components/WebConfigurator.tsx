"use client";

import { useState, useMemo, useEffect } from "react";
import { WEB_PLANS, ADD_ONS, CURRENCY } from "@/constants/web-plans";

const WHATSAPP_NUMBER = "5491138923268";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const FALLBACK_EXCHANGE_RATE = 1000;

interface BnaRateResponse {
    buy: number;
    sell: number;
    updateTime: string | null;
}

export default function WebConfigurator() {
    const [selectedPlan, setSelectedPlan] = useState<string>("silver");
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
            } catch (error) {
                console.log("No se pudo obtener el tipo de cambio BNA actual");
            } finally {
                setLoadingExchange(false);
            }
        };
        fetchExchangeRate();
        const intervalId = window.setInterval(fetchExchangeRate, 15 * 60 * 1000);
        return () => window.clearInterval(intervalId);
    }, []);

    const basePlanPrice = useMemo(() => {
        const plan = WEB_PLANS.find((p) => p.id === selectedPlan);
        return plan?.price || 0;
    }, [selectedPlan]);

    const addOnsTotal = useMemo(() => {
        return selectedAddOns.reduce((total, addOnId) => {
            const addOn = ADD_ONS.find((a) => a.id === addOnId);
            return total + (addOn?.price || 0);
        }, 0);
    }, [selectedAddOns]);

    const totalPrice = basePlanPrice + addOnsTotal;

    const toggleAddOn = (addOnId: string) => {
        setSelectedAddOns((prev) =>
            prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]
        );
    };

    const currentPlan = WEB_PLANS.find((p) => p.id === selectedPlan);

    const handleFinishOrder = () => {
        const planName = currentPlan?.name || "Plan no seleccionado";
        const addOnsNames = selectedAddOns
            .map((id) => ADD_ONS.find((a) => a.id === id)?.name)
            .filter(Boolean)
            .join(", ");

        const addOnsDetail = selectedAddOns.map((id) => {
            const addon = ADD_ONS.find((a) => a.id === id);
            return `   • ${addon?.name}: +${CURRENCY}${addon?.price.toLocaleString("en-US")}`;
        }).join("\n");

        // NUEVO MENSAJE PROFESIONAL (Sin mención a IA)
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

        const encodedMessage = encodeURIComponent(message);
        window.open(`${WHATSAPP_URL}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-6" style={{ color: '#003d7a' }}>
                        ¿Tu web anda lenta o su diseño quedó en el tiempo? <br />
                        <span className="font-bold">Tenemos la solución para vos</span>
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                        En CTC Sistemas transformamos tu presencia digital con infraestructura de alto rendimiento y diseño de vanguardia. Personalizá tu plan a medida y recibí un presupuesto técnico al instante para llevar tu empresa al siguiente nivel.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Selecciona tu Plan Base</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {WEB_PLANS.map((plan) => (
                                    <button
                                        key={plan.id}
                                        onClick={() => setSelectedPlan(plan.id)}
                                        className={`p-6 rounded-[2.5rem] transition-all duration-300 text-left border-2 flex flex-col ${
                                            selectedPlan === plan.id ? "border-[#003d7a] bg-white shadow-xl scale-105" : "border-gray-200 bg-white hover:border-[#003d7a] hover:shadow-lg"
                                        }`}
                                    >
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                                            <p className="text-xs font-semibold text-[#003d7a] leading-relaxed mb-2">{plan.copy}</p>
                                            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">{plan.description}</p>
                                            <p className="text-[11px] italic font-semibold text-gray-800 leading-relaxed">"{plan.hook}"</p>
                                        </div>
                                        <div className="mb-3 pt-2 border-t border-gray-100">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-2xl font-bold text-[#003d7a]">{CURRENCY}</span>
                                                <span className="text-2xl font-bold text-[#003d7a]">{plan.price.toLocaleString("es-AR")}</span>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="text-xs text-gray-700 flex items-start">
                                                    <span className="mr-2 text-[#003d7a] font-bold flex-shrink-0">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Servicios Adicionales</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {ADD_ONS.map((addon) => (
                                    <label
                                        key={addon.id}
                                        className="flex flex-col p-5 rounded-2xl border-2 border-gray-200 hover:border-[#003d7a] cursor-pointer transition-all bg-white hover:bg-blue-50 group"
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedAddOns.includes(addon.id)}
                                                onChange={() => toggleAddOn(addon.id)}
                                                className="w-5 h-5 text-[#003d7a] rounded focus:ring-2 focus:ring-[#003d7a] accent-[#003d7a] flex-shrink-0 mt-1"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-bold text-gray-900 text-sm">{addon.name}</h3>
                                                <p className="text-xs text-gray-600 mt-1">{addon.salesCopy}</p>
                                            </div>
                                        </div>
                                        <div className="text-base font-bold text-[#003d7a] text-right mt-2">
                                            +{CURRENCY}{addon.price.toLocaleString("es-AR")}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8 text-white rounded-3xl p-8 shadow-2xl border border-white/10" style={{background: "linear-gradient(145deg, rgba(0,61,122,0.92) 0%, rgba(0,30,70,0.97) 60%, rgba(0,15,40,1) 100%)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)"}}>
                            <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-white">Resumen</h3>
                            <div className="mb-6 pb-6 border-b border-blue-400/30">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-blue-100 text-xs font-semibold uppercase tracking-wider">Plan Base:</span>
                                    <span className="font-bold text-sm">{currentPlan?.name || "Selecciona un plan"}</span>
                                </div>
                                <div className="flex justify-end text-lg font-bold text-blue-200">
                                    <span>{CURRENCY}</span>
                                    <span className="ml-1">{basePlanPrice.toLocaleString("en-US")}</span>
                                </div>
                            </div>

                            {selectedAddOns.length > 0 && (
                                <div className="mb-8 pb-6 border-b border-blue-400/30">
                                    <h4 className="text-xs font-semibold text-blue-100 mb-4 uppercase tracking-wider">Servicios Adicionales</h4>
                                    <div className="space-y-3">
                                        {selectedAddOns.map((addOnId) => {
                                            const addon = ADD_ONS.find((a) => a.id === addOnId);
                                            return (
                                                <div key={addOnId} className="flex justify-between items-center text-sm">
                                                    <span className="text-blue-100">{addon?.name}</span>
                                                    <span className="font-semibold text-blue-200">+{CURRENCY}{addon?.price.toLocaleString("en-US")}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="pt-6">
                                    <p className="text-xs text-blue-100 font-semibold uppercase tracking-wider mb-4">Total a Invertir</p>
                                    <div className="mb-4">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-2xl font-black text-white">{CURRENCY}</span>
                                            <span className="text-3xl font-black text-white">{totalPrice.toLocaleString("en-US")}</span>
                                        </div>
                                    </div>
                                    <div className="bg-blue-500/20 rounded-xl p-3 border border-blue-400/30">
                                        <p className="text-xs text-blue-100 font-medium mb-2">Equivalente en ARS</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm font-bold text-blue-200">$</span>
                                            <span className="text-2xl font-black text-white">{(totalPrice * exchangeRate).toLocaleString("es-AR", { maximumFractionDigits: 0 })}</span>
                                        </div>
                                        <p className="text-xs text-blue-200 mt-2 font-medium">
                                            {loadingExchange ? "Cargando..." : `Cotización BNA: USD $1 = $${exchangeRate.toLocaleString("es-AR", { maximumFractionDigits: 2 })}`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleFinishOrder}
                                className="w-full bg-white text-[#003d7a] font-black py-4 rounded-[2.5rem] hover:bg-blue-50 transition-all duration-300 shadow-lg tracking-widest uppercase text-sm hover:shadow-xl hover:scale-105"
                            >
                                Finalizar Pedido
                            </button>
                            <p className="text-xs text-blue-200 mt-5 text-center font-medium">Precios en dólares estadounidenses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}