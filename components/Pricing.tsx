"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingProps {
    onEarlyAccess: () => void;
}

export default function Pricing({ onEarlyAccess }: PricingProps) {
    return (
        <section id="pricing" className="relative py-24 md:py-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <Card
                        className="relative rounded-3xl overflow-hidden p-0"
                        style={{
                            background: "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)",
                            border: "1px solid var(--border-subtle)",
                        }}
                    >
                        {/* Glow */}
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px]"
                            style={{
                                background: "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
                                filter: "blur(80px)",
                            }}
                        />

                        <CardContent className="relative z-10 p-10 md:p-16 text-center">
                            <span
                                className="text-xs font-semibold uppercase tracking-[0.2em] block mb-4"
                                style={{ color: "var(--accent)", fontFamily: "var(--font-sora)" }}
                            >
                                Pricing
                            </span>

                            <h2
                                className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                                style={{ fontFamily: "var(--font-sora)" }}
                            >
                                Built for teams that{" "}
                                <span className="text-gradient">can&apos;t afford waste</span>
                            </h2>

                            <p
                                className="max-w-xl mx-auto text-base md:text-lg mb-4 leading-relaxed"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                Apollo charges ₹80,000+/year. ZoomInfo? ₹15,00,000+.
                                We believe Indian SMBs deserve verified data without the enterprise tax.
                            </p>

                            {/* Price comparison */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-10">
                                <Card
                                    className="px-6 py-4 rounded-xl text-center p-0"
                                    style={{
                                        background: "rgba(239, 68, 68, 0.08)",
                                        border: "1px solid rgba(239, 68, 68, 0.15)",
                                    }}
                                >
                                    <CardContent className="p-0 px-6 py-4">
                                        <div className="text-sm line-through" style={{ color: "var(--text-muted)" }}>
                                            Apollo / ZoomInfo
                                        </div>
                                        <div
                                            className="text-2xl font-bold mt-1"
                                            style={{ color: "#ef4444", fontFamily: "var(--font-sora)" }}
                                        >
                                            ₹80,000+/yr
                                        </div>
                                    </CardContent>
                                </Card>

                                <div
                                    className="text-2xl font-bold"
                                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-sora)" }}
                                >
                                    vs
                                </div>

                                <Card
                                    className="rounded-xl text-center glow-accent p-0"
                                    style={{
                                        background: "var(--accent-subtle)",
                                        border: "1px solid rgba(16, 185, 129, 0.3)",
                                    }}
                                >
                                    <CardContent className="p-0 px-6 py-4">
                                        <div className="text-sm" style={{ color: "var(--accent)" }}>
                                            Validy for SMBs
                                        </div>
                                        <div
                                            className="text-2xl font-bold mt-1"
                                            style={{ color: "var(--accent)", fontFamily: "var(--font-sora)" }}
                                        >
                                            Starting ₹999/mo
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
                                Early access members get 3 months free. No credit card required.
                            </p>

                            <Button
                                size="lg"
                                onClick={onEarlyAccess}
                                className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_var(--accent-glow)] hover:-translate-y-0.5"
                                style={{
                                    background: "var(--accent)",
                                    color: "var(--bg-primary)",
                                    fontFamily: "var(--font-sora)",
                                }}
                            >
                                Lock In Early Access Pricing →
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
