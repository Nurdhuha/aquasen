import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
    children: ReactNode;
    className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
            <main className={cn("flex-grow pt-6 pb-20 px-4", className)}>
                <div className="container mx-auto max-w-5xl space-y-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
