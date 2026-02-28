import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
    children: ReactNode;
    className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
            <main className={cn("grow pt-4 lg:pt-8 pb-24 lg:pb-12 px-4", className)}>
                <div className="container mx-auto max-w-6xl space-y-8 lg:space-y-12">
                    {children}
                </div>
            </main>
        </div>
    );
}
