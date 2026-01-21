'use client';
import { useState, useEffect } from "react";

export default function TermsPage() {
    const [currentDate, setCurrentDate] = useState<string | null>(null);

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString("es-CO"));
    }, []);

    return (
        <section className="py-24 md:py-32 bg-white dark:bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                    Términos y Condiciones
                </h1>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p>
                        Bienvenido a TecnoVoltac. Al acceder a nuestro sitio web y utilizar
                        nuestros servicios, usted acepta cumplir con los siguientes términos
                        y condiciones. Por favor, léalos atentamente.
                    </p>

                    <h3>1. Introducción</h3>
                    <p>
                        Estos términos y condiciones rigen el uso de este sitio web y la
                        prestación de nuestros servicios técnicos en instalaciones
                        eléctricas, gas y acabados. Al contratar nuestros servicios, usted
                        acepta estar legalmente vinculado por estos términos.
                    </p>

                    <h3>2. Servicios</h3>
                    <p>
                        TecnoVoltac ofrece servicios profesionales de instalaciones
                        eléctricas certificadas (RETIE), instalaciones de gas y obras de
                        acabados (drywall, pintura, obra blanca) en Pereira y sus
                        alrededores. Nos esforzamos por garantizar la máxima calidad y
                        seguridad en cada proyecto.
                    </p>

                    <h3>3. Presupuestos y Pagos</h3>
                    <p>
                        Todos los presupuestos se realizan previa visita técnica o análisis
                        detallado de los requerimientos. Los precios pueden variar según la
                        complejidad del trabajo y los materiales necesarios. Las condiciones
                        de pago se acordarán específicamente para cada contrato o servicio.
                    </p>

                    <h3>4. Garantías</h3>
                    <p>
                        Garantizamos la calidad de nuestra mano de obra. Las garantías sobre
                        materiales dependerán de los fabricantes de los mismos. Cualquier
                        reclamo debe ser notificado dentro de los plazos establecidos en el
                        contrato de servicio o factura.
                    </p>

                    <h3>5. Responsabilidades del Cliente</h3>
                    <p>
                        El cliente es responsable de proporcionar acceso seguro a las áreas
                        de trabajo y de suministrar información veraz y completa sobre sus
                        necesidades y las condiciones del sitio.
                    </p>

                    <h3>6. Propiedad Intelectual</h3>
                    <p>
                        Todo el contenido de este sitio web, incluyendo textos, gráficos,
                        logos e imágenes, es propiedad de TecnoVoltac o de sus licenciantes
                        y está protegido por las leyes de propiedad intelectual de Colombia.
                    </p>

                    <h3>7. Modificaciones</h3>
                    <p>
                        Nos reservamos el derecho de modificar estos términos y condiciones
                        en cualquier momento. Los cambios entrarán en vigor tan pronto como
                        se publiquen en este sitio web.
                    </p>

                    <h3>8. Ley Aplicable</h3>
                    <p>
                        Estos términos se rigen por las leyes de la República de Colombia.
                        Cualquier disputa relacionada con estos términos será sometida a la
                        jurisdicción exclusiva de los tribunales de Pereira, Risaralda.
                    </p>

                    <p className="mt-8 text-sm text-slate-500">
                        Última actualización: {currentDate}
                    </p>
                </div>
            </div>
        </section>
    );
}
