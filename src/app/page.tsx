"use client";

import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";
import { HeroStatus } from "@/components/dashboard/HeroStatus";
import { SensorGrid } from "@/components/dashboard/SensorGrid";
import { MitigationPanel } from "@/components/dashboard/MitigationPanel";
import dynamic from "next/dynamic";

const TrendChart = dynamic(
  () => import("@/components/dashboard/TrendChart").then((mod) => mod.TrendChart),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] w-full bg-slate-100 dark:bg-slate-800 animate-pulse rounded-3xl" />
    ),
  }
);

export default function Home() {
  return (
    <>
      <Header />
      <MainLayout>
        <div className="space-y-8">
          {/* Main Status */}
          <section>
            <HeroStatus status="aman" />
          </section>

          {/* Core Telemetry Data */}
          <section>
            <SensorGrid />
          </section>

          {/* Analytics & Community Action */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TrendChart />
            </div>
            <div>
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm h-full">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4 px-1">
                  Pusat Mitigasi
                </h3>
                <MitigationPanel />
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
}
