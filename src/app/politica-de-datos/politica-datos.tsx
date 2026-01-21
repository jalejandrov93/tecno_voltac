'use client';
import { useState, useEffect } from "react";

export default function PrivacyPage() {
    const [currentDate, setCurrentDate] = useState<string | null>(null);

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString("es-CO"));
    }, []);
    return (
        <section className="py-24 md:py-32 bg-white dark:bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                    Política de Tratamiento de Datos Personales
                </h1>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p>
                        En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013,
                        <strong> TecnoVoltac</strong> informa a sus clientes, proveedores y
                        usuarios sobre su política de tratamiento de datos personales.
                    </p>

                    <h3>1. Responsable del Tratamiento</h3>
                    <p>
                        <strong>Nombre:</strong> TecnoVoltac
                        <br />
                        <strong>Domicilio:</strong> Pereira, Risaralda
                        <br />
                        <strong>Sitio Web:</strong> www.tecnovoltac.com
                    </p>

                    <h3>2. Finalidad del Tratamiento</h3>
                    <p>
                        Los datos personales recolectados por TecnoVoltac serán utilizados
                        para las siguientes finalidades:
                    </p>
                    <ul>
                        <li>Proveer los servicios requeridos por el cliente.</li>
                        <li>Enviar cotizaciones, facturas y documentos relacionados.</li>
                        <li>Informar sobre cambios en nuestros servicios.</li>
                        <li>Evaluar la calidad del servicio.</li>
                        <li>Dar cumplimiento a obligaciones legales y contractuales.</li>
                    </ul>

                    <h3>3. Derechos de los Titulares</h3>
                    <p>
                        El titular de los datos personales tiene los siguientes derechos:
                    </p>
                    <ul>
                        <li>
                            Conocer, actualizar y rectificar sus datos personales frente a
                            TecnoVoltac.
                        </li>
                        <li>
                            Solicitar prueba de la autorización otorgada para el tratamiento
                            de datos.
                        </li>
                        <li>
                            Ser informado sobre el uso que se ha dado a sus datos personales.
                        </li>
                        <li>
                            Presentar quejas ante la Superintendencia de Industria y Comercio
                            (SIC).
                        </li>
                        <li>
                            Revocar la autorización y/o solicitar la supresión de sus datos.
                        </li>
                    </ul>

                    <h3>4. Seguridad de la Información</h3>
                    <p>
                        TecnoVoltac implementa medidas de seguridad técnicas, humanas y
                        administrativas para proteger los datos personales contra acceso no
                        autorizado, pérdida, adulteración o uso fraudulento.
                    </p>

                    <h3>5. Canales de Atención</h3>
                    <p>
                        Para ejercer sus derechos de Habeas Data, los titulares pueden
                        contactarnos a través de los canales de atención dispuestos en
                        nuestro sitio web (sección de contacto) o mediante el correo
                        electrónico corporativo.
                    </p>

                    <h3>6. Vigencia</h3>
                    <p>
                        Esta política entra en vigencia a partir de su publicación y los
                        datos se conservarán mientras se mantenga la relación comercial o
                        legal que dio origen a su recolección.
                    </p>

                    <p className="mt-8 text-sm text-slate-500">
                        Última actualización: {currentDate}
                    </p>
                </div>
            </div>
        </section>
    );
}
