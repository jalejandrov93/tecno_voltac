"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "./button";
import { COMPANY_INFO } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingrese un correo válido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^[\d\s+()-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Ingrese un teléfono válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Construir mensaje de WhatsApp
    const whatsappMessage = encodeURIComponent(
      `¡Hola! Me gustaría solicitar información.\n\n` +
        `*Nombre:* ${formData.name}\n` +
        `*Correo:* ${formData.email}\n` +
        `*Teléfono:* ${formData.phone}\n` +
        `*Servicio de interés:* ${formData.service || "No especificado"}\n\n` +
        `*Mensaje:*\n${formData.message}`
    );

    // Simular envío y redirigir a WhatsApp
    await new Promise((resolve) => setTimeout(resolve, 500));

    const whatsappUrl = `${COMPANY_INFO.whatsappLink}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);

    // Reset estado después de 5 segundos
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-accent/10 border border-accent/20 p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-accent" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Serás redirigido a WhatsApp para completar tu solicitud. Nos pondremos
          en contacto contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Nombre */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Nombre completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-slate-200 dark:border-slate-600 focus:ring-primary"
          } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
          placeholder="Su nombre"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email y Teléfono */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-200 dark:border-slate-600 focus:ring-primary"
            } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
            placeholder="correo@ejemplo.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-200 dark:border-slate-600 focus:ring-primary"
            } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
            placeholder="+57 300 000 0000"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Servicio */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Servicio de interés
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        >
          <option value="">Seleccione un servicio</option>
          <option value="Instalaciones Eléctricas">
            Instalaciones Eléctricas (RETIE)
          </option>
          <option value="Instalaciones de Gas">Instalaciones de Gas</option>
          <option value="Obra Blanca y Acabados">
            Drywall, Obra Blanca y Acabados
          </option>
          <option value="Varios">Varios servicios</option>
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-slate-200 dark:border-slate-600 focus:ring-primary"
          } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none`}
          placeholder="Describa su proyecto o consulta..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1 text-sm text-red-500"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </Button>

      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
        Al enviar, serás redirigido a WhatsApp para completar tu solicitud.
      </p>
    </form>
  );
};

export default ContactForm;
