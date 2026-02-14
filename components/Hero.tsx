"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
    onEarlyAccess: () => void;
}

const stats = [
    { value: "50+", label: "Industries Covered" },
    { value: "99.2%", label: "Data Accuracy" },
    { value: "10M+", label: "Verified Contacts" },
    { value: "₹0", label: "Setup Cost" },
];

export default function Hero({ onEarlyAccess }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 grid-pattern fade-mask-bottom opacity-40" />

            {/* Radial glow */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
                style={{
                    background: "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-20 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 inline-block"
                >
                    <Badge
                        variant="outline"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                        style={{
                            background: "var(--accent-subtle)",
                            border: "1px solid rgba(16, 185, 129, 0.2)",
                        }}
                    >
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ background: "var(--accent)" }}
                        />
                        <span
                            className="text-xs font-medium tracking-wide uppercase"
                            style={{ color: "var(--accent)", fontFamily: "var(--font-sora)" }}
                        >
                            Now accepting early access
                        </span>
                    </Badge>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
                    style={{ fontFamily: "var(--font-sora)" }}
                >
                    Validated Data.
                    <br />
                    <span className="text-gradient">Every Indian Industry.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-xl mx-auto text-lg md:text-xl mb-10 leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                >
                    Emails, phone numbers, and company data — verified and enriched across
                    every industry. Built for Indian SMBs and startups who refuse to pay
                    Apollo prices.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Button
                        size="lg"
                        onClick={onEarlyAccess}
                        className="group px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_var(--accent-glow)] hover:-translate-y-0.5"
                        style={{
                            background: "var(--accent)",
                            color: "var(--bg-primary)",
                            fontFamily: "var(--font-sora)",
                        }}
                    >
                        Get Early Access — It&apos;s Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="px-8 py-4 rounded-xl text-base font-medium transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                        style={{
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border-medium)",
                            fontFamily: "var(--font-sora)",
                            background: "transparent",
                        }}
                    >
                        <a href="#features">See How It Works</a>
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                            className="text-center"
                        >
                            <div
                                className="text-3xl md:text-4xl font-bold mb-1"
                                style={{ fontFamily: "var(--font-sora)", color: "var(--accent)" }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-xs uppercase tracking-widest"
                                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sora)" }}
                            >
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
