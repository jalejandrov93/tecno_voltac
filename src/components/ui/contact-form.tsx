"use client";

import { Send, Loader2 } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; // Import zod
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { toast } from "sonner";
import { COMPANY_INFO } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Ingrese un correo electrónico válido.",
  }),
  phone: z.string().min(7, {
    message: "El teléfono debe tener al menos 7 dígitos.",
  }),
  service: z.string().min(1, "Por favor seleccione un servicio."),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setValue,
  } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Construir mensaje de WhatsApp
      const whatsappMessage = encodeURIComponent(
        `¡Hola! Me gustaría solicitar información.\n\n` +
        `*Nombre:* ${values.name}\n` +
        `*Correo:* ${values.email}\n` +
        `*Teléfono:* ${values.phone}\n` +
        `*Servicio de interés:* ${values.service}\n\n` +
        `*Mensaje:*\n${values.message}`
      );

      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const whatsappUrl = `${COMPANY_INFO.whatsappLink}?text=${whatsappMessage}`;
      window.open(whatsappUrl, "_blank");

      toast.success("¡Mensaje enviado correctamente!", {
        description: "Serás redirigido a WhatsApp para continuar.",
      });

      form.reset();
    } catch (error) {
      toast.error("Hubo un error al enviar el mensaje", {
        description: "Por favor intente nuevamente.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Nombre */}
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo *</Label>
        <Input
          id="name"
          placeholder="Su nombre"
          className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-red-500 font-medium">{errors.name.message}</p>
        )}
      </div>

      {/* Email y Teléfono */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input
            type="email"
            id="email"
            placeholder="correo@ejemplo.com"
            className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input
            type="tel"
            id="phone"
            placeholder="+57 300 000 0000"
            className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
            {...register("phone", {
              onChange: (e) => {
                // Solo permitir números, espacios, +, - y paréntesis
                const value = e.target.value.replace(/[^0-9+\s()-]/g, "");
                setValue("phone", value);
              },
            })}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 font-medium">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Servicio */}
      <div className="space-y-2">
        <Label htmlFor="service">Servicio de interés</Label>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full bg-white dark:bg-slate-950">
                <SelectValue placeholder="Seleccione un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Instalaciones Eléctricas">
                  Instalaciones Eléctricas (RETIE)
                </SelectItem>
                <SelectItem value="Instalaciones de Gas">
                  Instalaciones de Gas
                </SelectItem>
                <SelectItem value="Obra Blanca y Acabados">
                  Drywall, Obra Blanca y Acabados
                </SelectItem>
                <SelectItem value="Varios">Varios servicios</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.service && (
          <p className="text-sm text-red-500 font-medium">{errors.service.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje *</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Describa su proyecto o consulta..."
          className={`resize-none bg-white dark:bg-slate-950 ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-red-500 font-medium">{errors.message.message}</p>
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
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
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
