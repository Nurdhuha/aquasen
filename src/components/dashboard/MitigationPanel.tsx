import { AlertCircle, MessageSquareWarning } from "lucide-react";
import { motion } from "framer-motion";

export function MitigationPanel() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4"
        >
            <div className="bg-brand-warning/10 border border-brand-warning/20 rounded-2xl p-4 flex gap-4 items-start">
                <div className="bg-white/50 dark:bg-slate-900/50 p-2 rounded-xl shrink-0">
                    <AlertCircle className="w-5 h-5 text-brand-warning" />
                </div>
                <div>
                    <h4 className="font-semibold text-brand-warning text-sm mb-1">Peringatan Sistem</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Kadar TDS terpantau meningkat dalam 4 jam terakhir. Persiapkan jadwal backwashing filter dalam waktu dekat jika tren berlanjut.
                    </p>
                </div>
            </div>

            <button className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-2xl p-4 flex items-center justify-between group shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="bg-brand-primary/10 p-2.5 rounded-xl text-brand-primary group-hover:scale-110 transition-transform">
                        <MessageSquareWarning className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Lapor Kendala Air</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Pipa bocor atau air macet?</p>
                    </div>
                </div>
                <div className="text-brand-primary font-medium text-sm px-3 py-1 bg-brand-primary/10 rounded-full text-center">
                    Lapor
                </div>
            </button>
        </motion.div>
    );
}
