"use client";

import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";
import { BookOpen, ShieldCheck, Waves, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function GuidePage() {
    const guides = [
        {
            title: "Optimasi SDG 6",
            desc: "Akses air bersih dan sanitasi layak untuk masyarakat desa berkelanjutan.",
            icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />,
        },
        {
            title: "Standar Layak Minum",
            desc: "Batas aman TDS < 500 mg/L dan pH antara 6.5 sampai 8.5 sesuai aturan Kemenkes.",
            icon: <Waves className="w-6 h-6 text-brand-primary" />,
        },
        {
            title: "Prosedur Mitigasi",
            desc: "Jika air berwarna keruh, hubungi tim Teknis AQUASEN melalui menu lapor kendala.",
            icon: <Info className="w-6 h-6 text-brand-primary" />,
        },
    ];

    return (
        <>
            <Header />
            <MainLayout>
                <div className="space-y-8 pb-20">
                    <section className="flex items-center gap-3">
                        <div className="bg-brand-primary/10 p-3 rounded-2xl">
                            <BookOpen className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Panduan Masyarakat
                            </h1>
                            <p className="text-sm text-slate-500 font-medium">Literasi air & standar kualitas AQUASEN</p>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {guides.map((guide, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-5 items-start"
                            >
                                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl shrink-0">
                                    {guide.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{guide.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                        {guide.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <section className="bg-brand-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-brand-primary/20">
                        <div className="relative z-10 space-y-4">
                            <h2 className="text-xl font-bold">Butuh Bantuan Teknis?</h2>
                            <p className="text-white/80 font-medium text-sm leading-relaxed">
                                Tim Guardians AQUASEN siap membantu menangani masalah distribusi air di wilayah Anda.
                            </p>
                            <button className="bg-white text-brand-primary px-6 py-3 rounded-2xl font-bold text-sm hover:scale-105 transition-transform">
                                Hubungi Petugas
                            </button>
                        </div>
                        <BookOpen className="absolute -right-10 -bottom-10 w-48 h-48 text-white/10 -rotate-12" />
                    </section>
                </div>
            </MainLayout>
        </>
    );
}
