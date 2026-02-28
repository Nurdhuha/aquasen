import {
    Activity,
    Droplets,
    Thermometer,
    Waves,
    Gauge,
    Container,
    TrendingUp
} from "lucide-react";
import { MetricCard } from "./MetricCard";

export function SensorGrid() {
    // Simulated data
    const data = {
        tds: { value: 320, unit: "mg/L", status: "normal", desc: "Mineral Terlarut" },
        ph: { value: 7.2, unit: "pH", status: "normal", desc: "Tingkat Keasaman" },
        turbidity: { value: 1.5, unit: "NTU", status: "normal", desc: "Kejernihan" },
        temp: { value: 24.5, unit: "°C", status: "normal", desc: "Suhu Air" },
        tank: { value: 85, unit: "%", status: "normal", desc: "Kapasitas Sendang" },
        volume: { value: "4,250", unit: "L", status: "normal", desc: "Estimasi Volume" },
        flow: { value: 12.5, unit: "L/min", status: "normal", desc: "Laju Aliran" },
        total: { value: "1,420", unit: "L", status: "normal", desc: "Digunakan Hari Ini" },
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-8">

                {/* Quality Sensors (RS485) */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                        <Activity className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-200">
                            Kualitas Air
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 shadow-sm bg-white dark:bg-slate-900 rounded-3xl p-1 gap-1 border border-slate-100 dark:border-slate-800">
                        <MetricCard
                            title="TDS"
                            value={data.tds.value}
                            unit={data.tds.unit}
                            description={data.tds.desc}
                            status={data.tds.status as any}
                            icon={<Activity className="w-4 h-4" />}
                            className="border-none shadow-none rounded-[20px]"
                            delay={1}
                        />
                        <MetricCard
                            title="pH"
                            value={data.ph.value}
                            unit={data.ph.unit}
                            description={data.ph.desc}
                            status={data.ph.status as any}
                            icon={<Droplets className="w-4 h-4" />}
                            className="border-none shadow-none rounded-[20px]"
                            delay={2}
                        />
                        <MetricCard
                            title="Turbidity"
                            value={data.turbidity.value}
                            unit={data.turbidity.unit}
                            description={data.turbidity.desc}
                            status={data.turbidity.status as any}
                            icon={<Waves className="w-4 h-4" />}
                            className="border-none shadow-none rounded-[20px]"
                            delay={3}
                        />
                        <MetricCard
                            title="Suhu"
                            value={data.temp.value}
                            unit={data.temp.unit}
                            description={data.temp.desc}
                            status={data.temp.status as any}
                            icon={<Thermometer className="w-4 h-4" />}
                            className="border-none shadow-none rounded-[20px]"
                            delay={4}
                        />
                    </div>
                </div>

                {/* Quantity & Flow Sensors */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                        <Container className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-200">
                            Ketersediaan & Distribusi
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 shadow-sm bg-white dark:bg-slate-900 rounded-3xl p-1 gap-1 border border-slate-100 dark:border-slate-800">
                        <MetricCard
                            title="Level Air"
                            value={data.tank.value}
                            unit={data.tank.unit}
                            description={data.tank.desc}
                            status={data.tank.status as any}
                            icon={<Container className="w-4 h-4" />}
                            className="border-none shadow-none rounded-[20px]"
                            delay={1}
                        />
                        <MetricCard
                            title="Estimasi"
                            value={data.volume.value}
                            unit={data.volume.unit}
                            description={data.volume.desc}
                            status={data.volume.status as any}
                            icon={<Activity className="w-4 h-4" />}
                            className="border-none shadow-none rounded-[20px]"
                            delay={2}
                        />
                        <MetricCard
                            title="Debit Aliran"
                            value={data.flow.value}
                            unit={data.flow.unit}
                            description={data.flow.desc}
                            status={data.flow.status as any}
                            icon={<Gauge className="w-4 h-4" />}
                            className="border-none shadow-none rounded-[20px]"
                            delay={3}
                        />
                        <MetricCard
                            title="Totalizer"
                            value={data.total.value}
                            unit={data.total.unit}
                            description={data.total.desc}
                            status={data.total.status as any}
                            icon={<TrendingUp className="w-4 h-4" />}
                            className="border-none shadow-none rounded-[20px]"
                            delay={4}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
