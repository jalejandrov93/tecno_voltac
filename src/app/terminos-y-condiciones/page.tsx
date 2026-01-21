import { type Metadata } from "next";
import TermsPage from "./terminos-condiciones";
export const metadata: Metadata = {
    title: "Términos y Condiciones",
    description: "Términos y condiciones de uso de los servicios de TecnoVoltac.",
};

export default function page() {
    return (
        <TermsPage />
    );
}
