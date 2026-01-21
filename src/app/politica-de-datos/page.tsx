import { type Metadata } from "next";
import PoliticaDatos from "./politica-datos";

export const metadata: Metadata = {
    title: "Política de Tratamiento de Datos Personales",
    description:
        "Política de tratamiento de datos personales de TecnoVoltac, en cumplimiento de la Ley 1581 de 2012.",
};

export default function Page() {
    return <PoliticaDatos />;
}