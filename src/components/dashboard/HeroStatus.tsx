"use client";

import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { motion } from "framer-motion";

type StatusType = "aman" | "waspada" | "bahaya";

interface HeroStatusProps {
    status?: StatusType;
}

export function HeroStatus({ status = "aman" }: HeroStatusProps) {
    const config = {
        aman: {
            title: "AIR LAYAK",
            description: "Kualitas air dalam kondisi optimal dan aman untuk didistribusikan.",
            color: "bg-brand-safe text-white",
            icon: <CheckCircle2 className="w-12 h-12" />,
            glow: "shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)]",
        },
        waspada: {
            title: "BUTUH FILTRASI",
            description: "Sensor mendeteksi kekeruhan atau sedimentasi ringan. Direkomendasikan backwash.",
            color: "bg-brand-warning text-white",
            icon: <Info className="w-12 h-12" />,
            glow: "shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)]",
        },
        bahaya: {
            title: "BAHAYA!",
            description: "Parameter air melewati batas kritis. Distribusi harus dihentikan segera.",
            color: "bg-brand-danger text-white",
            icon: <AlertTriangle className="w-12 h-12" />,
            glow: "shadow-[0_0_40px_-10px_rgba(239,68,68,0.4)]",
        }
    };

    const activeConfig = config[status];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative w-full rounded-[2.5rem] overflow-hidden p-8 sm:p-10 lg:p-14 ${activeConfig.color} ${activeConfig.glow} transition-all duration-500`}
        >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl mix-blend-overlay pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12">
                <div className="bg-white/20 p-5 lg:p-6 rounded-3xl backdrop-blur-sm">
                    {activeConfig.icon}
                </div>
                <div>
                    <h2 className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-white/70 mb-2">
                        Status Keseluruhan
                    </h2>
                    <div className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-4">
                        {activeConfig.title}
                    </div>
                    <p className="text-white/90 font-medium text-lg lg:text-xl max-w-2xl leading-relaxed">
                        {activeConfig.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
