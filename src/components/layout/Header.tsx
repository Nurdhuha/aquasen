"use client";

import { Droplets, Activity, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
    const [isOnline, setIsOnline] = useState(true);
    const [lastUpdated, setLastUpdated] = useState("");

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Simulate real-time logic
        setLastUpdated(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
        const interval = setInterval(() => {
            setLastUpdated(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full glass">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <div className="bg-brand-primary/10 p-2 rounded-xl">
                        <Droplets className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                            AQUASEN
                        </h1>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                            Monitoring Platform
                        </span>
                    </div>
                </div>

                {/* Status Area */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Update: {mounted ? lastUpdated : '--:--'}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm px-3 py-1.5 rounded-full">
                        <div className="relative flex h-2.5 w-2.5">
                            {isOnline && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-safe opacity-75"></span>
                            )}
                            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOnline ? 'bg-brand-safe' : 'bg-brand-danger'}`}></span>
                        </div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                            {isOnline ? 'Online' : 'Offline'}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
