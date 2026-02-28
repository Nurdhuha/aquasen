import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MetricCardProps {
    title: string;
    value: string | number;
    unit?: string;
    description?: string;
    icon?: ReactNode;
    trend?: "up" | "down" | "neutral";
    status?: "normal" | "warning" | "danger";
    className?: string;
    delay?: number;
}

export function MetricCard({
    title,
    value,
    unit,
    description,
    icon,
    trend,
    status = "normal",
    className,
    delay = 0,
}: MetricCardProps) {
    const statusColors = {
        normal: "text-brand-safe bg-brand-safe/10 border-brand-safe/20",
        warning: "text-brand-warning bg-brand-warning/10 border-brand-warning/20",
        danger: "text-brand-danger bg-brand-danger/10 border-brand-danger/20",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay * 0.1, duration: 0.4 }}
            className={cn(
                "relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all",
                className
            )}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-slate-500 dark:text-slate-400 text-sm">{title}</h3>
                {icon && (
                    <div className="text-slate-400 dark:text-slate-500">
                        {icon}
                    </div>
                )}
            </div>

            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {value}
                </span>
                {unit && (
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {unit}
                    </span>
                )}
            </div>

            {(description || status !== "normal") && (
                <div className="mt-4 flex items-center justify-between">
                    {description && (
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {description}
                        </p>
                    )}
                    {status !== "normal" && (
                        <span className={cn(
                            "text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border",
                            statusColors[status]
                        )}>
                            {status}
                        </span>
                    )}
                </div>
            )}
        </motion.div>
    );
}
