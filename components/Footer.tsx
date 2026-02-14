import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="py-12">
            <Separator
                className="mb-12"
                style={{ background: "var(--border-subtle)" }}
            />
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2" style={{ fontFamily: "var(--font-sora)" }}>
                        <div
                            className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
                            style={{ background: "var(--accent)", color: "var(--bg-primary)" }}
                        >
                            V
                        </div>
                        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                            Validy
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="link"
                            asChild
                            className="text-xs px-2 hover:text-[var(--text-secondary)]"
                            style={{ color: "var(--text-muted)" }}
                        >
                            <a href="#features">Features</a>
                        </Button>
                        <Button
                            variant="link"
                            asChild
                            className="text-xs px-2 hover:text-[var(--text-secondary)]"
                            style={{ color: "var(--text-muted)" }}
                        >
                            <a href="#how-it-works">How It Works</a>
                        </Button>
                        <Button
                            variant="link"
                            asChild
                            className="text-xs px-2 hover:text-[var(--text-secondary)]"
                            style={{ color: "var(--text-muted)" }}
                        >
                            <a href="#pricing">Pricing</a>
                        </Button>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        © {new Date().getFullYear()} Validy. Made in India 🇮🇳
                    </p>
                </div>
            </div>
        </footer>
    );
}
