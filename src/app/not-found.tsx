"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";
import { useTheme } from "next-themes";
import Lightning from "@/components/Lightning";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";

export default function NotFound() {
    const { resolvedTheme } = useTheme();

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background - Matched from HeroSection */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10" />

            {/* Lightning Effect Background */}
            <div className="absolute inset-0 opacity-30 dark:mix-blend-screen pointer-events-none">
                <Lightning
                    hue={resolvedTheme === "dark" ? 210 : 40}
                    xOffset={1.2}
                    speed={0.5}
                    intensity={0.4}
                    size={0.9}
                />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(to right, #1e3a5f 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-sm font-medium mb-8"
                    >
                        <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                        <span>Página no encontrada</span>
                    </motion.div>

                    {/* Big 404 */}
                    <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-slate-900 to-slate-200 dark:from-white dark:to-slate-800 select-none">
                        <NumberTicker value={404} className="text-slate-900 dark:text-white" />
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        ¡Ups! Esta página se ha <span className="text-yellow-400">cortocircuitado</span>
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-lg mx-auto">
                        La URL que intentas visitar no existe o ha sido movida.
                        Verifica la conexión y vuelve a intentarlo.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/" className="w-full sm:w-auto">
                            <Button
                                variant="default"
                                size="lg"
                                className="group ring ring-white hover:ring-2 w-full sm:w-40 hover:w-44 hover:ring-yellow-400 transition-all duration-300s"
                            >
                                <Home className="w-4 h-4 mr-2" />
                                Ir al Inicio
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
