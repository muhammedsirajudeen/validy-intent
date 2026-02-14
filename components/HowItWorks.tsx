"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const steps = [
    {
        step: "01",
        title: "Search",
        description:
            "Find contacts by industry, location, company size, designation, or technology stack. Filter across 50+ Indian verticals.",
    },
    {
        step: "02",
        title: "Validate",
        description:
            "Every email and phone number passes through multi-layer verification. We catch invalid, disposable, and catch-all addresses before they burn your sender reputation.",
    },
    {
        step: "03",
        title: "Enrich",
        description:
            "Missing company revenue? No designation? We auto-fill gaps with firmographic and technographic data from Indian business registries and public sources.",
    },
    {
        step: "04",
        title: "Export & Use",
        description:
            "Download clean CSV files or push data directly to your CRM. Works with HubSpot, Zoho, Salesforce, and Google Sheets.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 md:py-32">
            {/* Divider line */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
                style={{
                    background: "linear-gradient(to bottom, transparent, var(--accent), transparent)",
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span
                        className="text-xs font-semibold uppercase tracking-[0.2em] block mb-4"
                        style={{ color: "var(--accent)", fontFamily: "var(--font-sora)" }}
                    >
                        How It Works
                    </span>
                    <h2
                        className="text-3xl md:text-5xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-sora)" }}
                    >
                        Four steps to <span className="text-gradient">clean data</span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="relative max-w-2xl mx-auto">
                    {/* Vertical line */}
                    <div
                        className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                        style={{
                            background: "linear-gradient(to bottom, var(--accent), var(--border-subtle))",
                        }}
                    />

                    <div className="space-y-12">
                        {steps.map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex gap-6 md:gap-8"
                            >
                                {/* Step number badge */}
                                <div className="relative flex-shrink-0">
                                    <Badge
                                        variant="outline"
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-sm md:text-base font-bold z-10 relative"
                                        style={{
                                            background: "var(--bg-card)",
                                            border: "1px solid var(--accent)",
                                            color: "var(--accent)",
                                            fontFamily: "var(--font-sora)",
                                        }}
                                    >
                                        {item.step}
                                    </Badge>
                                </div>

                                {/* Content */}
                                <div className="pt-2 md:pt-4">
                                    <h3
                                        className="text-xl md:text-2xl font-semibold mb-2"
                                        style={{ fontFamily: "var(--font-sora)" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-sm md:text-base leading-relaxed"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
