"use client";

import { Home, BarChart3, BookOpen, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Beranda", href: "/", icon: <Home className="w-5 h-5" /> },
        { name: "Statistik", href: "/statistics", icon: <BarChart3 className="w-5 h-5" /> },
        { name: "Panduan", href: "/guide", icon: <BookOpen className="w-5 h-5" /> },
        { name: "Admin", href: "/admin", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-slate-200 dark:border-slate-800 lg:hidden px-2 pb-safe">
            <div className="container mx-auto h-16 flex items-center justify-around">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center gap-1 transition-all duration-300",
                                isActive
                                    ? "text-brand-primary scale-110"
                                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                            )}
                        >
                            <div className={cn(
                                "p-1.5 rounded-xl transition-all",
                                isActive && "bg-brand-primary/10"
                            )}>
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-bold tracking-wide uppercase">
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
