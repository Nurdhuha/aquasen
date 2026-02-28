"use client";

import { Activity } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const data = [
    { time: "00:00", tds: 300, ph: 7.1 },
    { time: "04:00", tds: 310, ph: 7.2 },
    { time: "08:00", tds: 350, ph: 7.5 },
    { time: "12:00", tds: 420, ph: 7.8 }, // Peak usage
    { time: "16:00", tds: 380, ph: 7.6 },
    { time: "20:00", tds: 330, ph: 7.3 },
    { time: "24:00", tds: 310, ph: 7.2 },
];

export function TrendChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-brand-primary" />
                    <h2 className="text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-200">
                        Grafik Tren 24 Jam
                    </h2>
                </div>
                <select className="text-sm border-none bg-slate-50 dark:bg-slate-800 rounded-full px-4 py-1.5 outline-none focus:ring-2 focus:ring-brand-primary/20 text-slate-600 dark:text-slate-300 font-medium">
                    <option>TDS & pH</option>
                    <option>Kekeruhan</option>
                    <option>Debit Air</option>
                </select>
            </div>

            <div className="h-[250px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorTds" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="time"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#64748b' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#64748b' }}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '16px',
                                border: 'none',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="tds"
                            stroke="#0EA5E9"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorTds)"
                            activeDot={{ r: 6, strokeWidth: 0 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
