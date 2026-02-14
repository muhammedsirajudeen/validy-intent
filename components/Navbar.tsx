"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

interface NavbarProps {
    onEarlyAccess: () => void;
}

const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
];

export default function Navbar({ onEarlyAccess }: NavbarProps) {
    const [sheetOpen, setSheetOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                background: "rgba(7, 8, 10, 0.8)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid var(--border-subtle)",
            }}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2" style={{ fontFamily: "var(--font-sora)" }}>
                    <img src="/icon.png" alt="Validy Logo" className="w-8 h-8 rounded-lg" />
                    <span className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                        Validy
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm transition-colors duration-200 hover:text-[var(--text-primary)]"
                            style={{
                                color: "var(--text-secondary)",
                                fontFamily: "var(--font-body)",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button
                        onClick={onEarlyAccess}
                        className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_var(--accent-glow)]"
                        style={{
                            background: "var(--accent)",
                            color: "var(--bg-primary)",
                            fontFamily: "var(--font-sora)",
                        }}
                    >
                        Get Early Access
                    </Button>
                </div>

                {/* Mobile Sheet */}
                <div className="md:hidden">
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="cursor-pointer">
                                <Menu className="h-5 w-5" style={{ color: "var(--text-primary)" }} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="top"
                            className="border-b p-6"
                            style={{
                                background: "var(--bg-secondary)",
                                borderColor: "var(--border-subtle)",
                            }}
                        >
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-4 pt-4">
                                {links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm"
                                        style={{ color: "var(--text-secondary)" }}
                                        onClick={() => setSheetOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <Button
                                    onClick={() => {
                                        setSheetOpen(false);
                                        onEarlyAccess();
                                    }}
                                    className="px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer"
                                    style={{
                                        background: "var(--accent)",
                                        color: "var(--bg-primary)",
                                        fontFamily: "var(--font-sora)",
                                    }}
                                >
                                    Get Early Access
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
}
