"use client";

import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { BarChart3, Activity, Waves, Droplets } from "lucide-react";
import { motion } from "framer-motion";

export default function StatisticsPage() {
    return (
        <>
            <Header />
            <MainLayout>
                <div className="space-y-8">
                    <section className="flex items-center gap-3">
                        <div className="bg-brand-primary/10 p-3 rounded-2xl">
                            <BarChart3 className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Analisis Kualitas Air
                            </h1>
                            <p className="text-sm text-slate-500 font-medium">Data harian & rincian historis 24 jam</p>
                        </div>
                    </section>

                    <TrendChart />

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
                        >
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <Droplets className="w-4 h-4 text-brand-primary" /> Detail pH
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                                    <span className="text-slate-500">Rata-rata 24 Jam</span>
                                    <span className="font-bold">7.3 pH</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                                    <span className="text-slate-500">Nilai Tertinggi</span>
                                    <span className="font-bold text-brand-safe">7.8 pH</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Nilai Terendah</span>
                                    <span className="font-bold text-brand-warning">7.1 pH</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
                        >
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <Waves className="w-4 h-4 text-brand-primary" /> Detail TDS
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                                    <span className="text-slate-500">Rata-rata 24 Jam</span>
                                    <span className="font-bold">345 mg/L</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                                    <span className="text-slate-500">Nilai Tertinggi</span>
                                    <span className="font-bold text-brand-warning">420 mg/L</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Nilai Terendah</span>
                                    <span className="font-bold text-brand-safe">300 mg/L</span>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </MainLayout>
        </>
    );
}
