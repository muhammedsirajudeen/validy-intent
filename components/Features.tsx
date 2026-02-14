"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
    {
        icon: "🏭",
        title: "Every Indian Industry",
        description:
            "From IT/ITES and BFSI to Pharma, Manufacturing, D2C, and AgriTech — we cover verticals that global platforms ignore.",
        highlights: ["IT & SaaS", "BFSI", "Healthcare", "Manufacturing", "D2C & E-commerce", "EdTech"],
    },
    {
        icon: "✓",
        title: "Validated & Verified",
        description:
            "Every email and phone number is verified in real-time. No bounces, no dead ends. We guarantee data quality so you can focus on selling.",
        highlights: ["Email verification", "Phone validation", "Bounce-free guarantee", "Real-time checks"],
    },
    {
        icon: "⚡",
        title: "Enriched & Complete",
        description:
            "Missing a designation? Need the company size? We fill in the gaps automatically — firmographics, technographics, and contact details.",
        highlights: ["Auto-fill missing fields", "Company firmographics", "Designation mapping", "LinkedIn enrichment"],
    },
];

export default function Features() {
    return (
        <section id="features" className="relative py-24 md:py-32">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span
                        className="text-xs font-semibold uppercase tracking-[0.2em] block mb-4"
                        style={{ color: "var(--accent)", fontFamily: "var(--font-sora)" }}
                    >
                        Why Validy
                    </span>
                    <h2
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                        style={{ fontFamily: "var(--font-sora)" }}
                    >
                        Data that works for
                        <span className="text-gradient"> Indian businesses</span>
                    </h2>
                    <p
                        className="max-w-lg mx-auto text-base md:text-lg"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Apollo and ZoomInfo weren&apos;t built for India. We are.
                    </p>
                </motion.div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <Card
                                className="group relative rounded-2xl p-0 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:border-[rgba(16,185,129,0.3)]"
                                style={{
                                    background: "var(--bg-card)",
                                    border: "1px solid var(--border-subtle)",
                                }}
                            >
                                <CardHeader className="p-8 pb-0">
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                                        style={{ background: "var(--accent-subtle)" }}
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-semibold"
                                        style={{ fontFamily: "var(--font-sora)", color: "var(--text-primary)" }}
                                    >
                                        {feature.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-8 pt-3">
                                    <p
                                        className="text-sm leading-relaxed mb-6"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Highlight tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {feature.highlights.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="text-xs px-2.5 py-1 rounded-md"
                                                style={{
                                                    background: "var(--accent-subtle)",
                                                    color: "var(--accent)",
                                                    fontFamily: "var(--font-sora)",
                                                }}
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
