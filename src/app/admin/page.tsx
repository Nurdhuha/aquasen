"use client";

import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";
import { Lock, User, ShieldCheck, LogOut, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsLoggedIn(true);
        }
    };

    return (
        <>
            <Header />
            <MainLayout>
                <div className="flex flex-col items-center justify-center min-h-[70vh] pb-20">
                    <AnimatePresence mode="wait">
                        {!isLoggedIn ? (
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full max-w-sm bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
                            >
                                <div className="flex flex-col items-center text-center mb-8">
                                    <div className="bg-brand-primary/10 p-4 rounded-[24px] mb-4">
                                        <Lock className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Panel Guardians</h1>
                                    <p className="text-slate-500 text-sm font-medium mt-1">Khusus Divisi Teknis AQUASEN</p>
                                </div>

                                <form onSubmit={handleLogin} className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Passcode</label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                    >
                                        Masuk Sekarang
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="dashboard"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full space-y-8"
                            >
                                <section className="flex items-center justify-between gap-3 bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-brand-safe/10 p-3 rounded-2xl">
                                            <ShieldCheck className="w-6 h-6 text-brand-safe" />
                                        </div>
                                        <div>
                                            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Guardians</h1>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Akses Penuh Terverifikasi</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsLoggedIn(false)}
                                        className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-brand-danger transition-colors"
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </section>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
                                        <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 px-1 text-sm uppercase tracking-widest">Kontrol Sensor</h3>
                                        <div className="space-y-3">
                                            <button className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-left font-bold text-sm flex items-center justify-between">
                                                Kalibrasi Sensor RS485
                                                <ChevronRight className="w-4 h-4 text-slate-300" />
                                            </button>
                                            <button className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-left font-bold text-sm flex items-center justify-between text-brand-danger">
                                                Reset Totalizer Harian
                                                <ChevronRight className="w-4 h-4 text-slate-300" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
                                        <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 px-1 text-sm uppercase tracking-widest">Sistem Peringatan</h3>
                                        <div className="flex items-center justify-between p-4 bg-brand-warning/10 rounded-2xl border border-brand-warning/20">
                                            <span className="text-sm font-bold text-brand-warning">Auto Backwash Mode</span>
                                            <div className="w-12 h-6 bg-brand-warning rounded-full relative p-1 cursor-pointer">
                                                <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </MainLayout>
        </>
    );
}
