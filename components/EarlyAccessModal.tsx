"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface EarlyAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const INDUSTRIES = [
    "IT / SaaS",
    "BFSI (Banking & Finance)",
    "Healthcare & Pharma",
    "Manufacturing",
    "D2C & E-commerce",
    "EdTech & Education",
    "Real Estate",
    "Recruiting & HR",
    "Marketing & Advertising",
    "AgriTech",
    "Logistics & Supply Chain",
    "FMCG",
    "Legal & Compliance",
    "Media & Entertainment",
    "Other",
];

const TEAM_SIZES = ["Solo", "2–5", "6–20", "21–50", "50+"];

type FormState = "idle" | "submitting" | "success" | "error";

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [selectedTeamSize, setSelectedTeamSize] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        role: "",
        industry: "",
        useCase: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setErrorMsg("");

        try {
            const res = await fetch("/api/early-access", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, teamSize: selectedTeamSize }),
            });

            const data = await res.json();

            if (!res.ok) {
                setFormState("error");
                setErrorMsg(data.error || "Something went wrong.");
                return;
            }

            setFormState("success");
        } catch {
            setFormState("error");
            setErrorMsg("Network error. Please try again.");
        }
    };

    const resetAndClose = () => {
        setFormState("idle");
        setErrorMsg("");
        setFormData({ name: "", email: "", company: "", role: "", industry: "", useCase: "" });
        setSelectedTeamSize("");
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
            <DialogContent
                className="max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-8"
                style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                }}
            >
                {formState === "success" ? (
                    <SuccessView onClose={resetAndClose} />
                ) : (
                    <FormView
                        formData={formData}
                        selectedTeamSize={selectedTeamSize}
                        formState={formState}
                        errorMsg={errorMsg}
                        onChange={handleChange}
                        onIndustryChange={(val) => setFormData({ ...formData, industry: val })}
                        onTeamSizeChange={setSelectedTeamSize}
                        onSubmit={handleSubmit}
                    />
                )}
            </DialogContent>
        </Dialog>
    );
}

/* ---- Success View ---- */
function SuccessView({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
        >
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
            >
                <CheckCircle className="h-8 w-8" />
            </div>
            <DialogHeader className="items-center mb-3">
                <DialogTitle
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-sora)" }}
                >
                    You&apos;re on the list!
                </DialogTitle>
                <DialogDescription className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    We&apos;ll reach out soon with your early access invite.
                    <br />
                    Get ready to unlock clean, verified Indian B2B data.
                </DialogDescription>
            </DialogHeader>
            <Button
                onClick={onClose}
                className="px-6 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all"
                style={{
                    background: "var(--accent)",
                    color: "var(--bg-primary)",
                    fontFamily: "var(--font-sora)",
                }}
            >
                Done
            </Button>
        </motion.div>
    );
}

/* ---- Form View ---- */
interface FormViewProps {
    formData: { name: string; email: string; company: string; role: string; industry: string; useCase: string };
    selectedTeamSize: string;
    formState: FormState;
    errorMsg: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onIndustryChange: (value: string) => void;
    onTeamSizeChange: (size: string) => void;
    onSubmit: (e: FormEvent) => void;
}

function FormView({
    formData, selectedTeamSize, formState, errorMsg,
    onChange, onIndustryChange, onTeamSizeChange, onSubmit,
}: FormViewProps) {
    return (
        <>
            <DialogHeader>
                <DialogTitle
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-sora)" }}
                >
                    Get Early Access
                </DialogTitle>
                <DialogDescription className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Join the waitlist. Early members get 3 months free.
                </DialogDescription>
            </DialogHeader>

            {errorMsg && (
                <div
                    className="text-sm px-4 py-3 rounded-lg"
                    style={{
                        background: "rgba(239, 68, 68, 0.08)",
                        border: "1px solid rgba(239, 68, 68, 0.2)",
                        color: "#ef4444",
                    }}
                >
                    {errorMsg}
                </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label
                            htmlFor="name"
                            className="block mb-1.5 text-xs font-medium uppercase tracking-wider"
                            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sora)" }}
                        >
                            Name *
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            required
                            placeholder="Rahul Sharma"
                            className="rounded-lg text-sm focus:border-[#10b981]"
                            style={{
                                background: "var(--bg-primary)",
                                border: "1px solid var(--border-medium)",
                                color: "var(--text-primary)",
                                fontFamily: "var(--font-body)",
                            }}
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="email"
                            className="block mb-1.5 text-xs font-medium uppercase tracking-wider"
                            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sora)" }}
                        >
                            Email *
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={onChange}
                            required
                            placeholder="rahul@company.in"
                            className="rounded-lg text-sm focus:border-[#10b981]"
                            style={{
                                background: "var(--bg-primary)",
                                border: "1px solid var(--border-medium)",
                                color: "var(--text-primary)",
                                fontFamily: "var(--font-body)",
                            }}
                        />
                    </div>
                </div>

                {/* Company + Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label
                            htmlFor="company"
                            className="block mb-1.5 text-xs font-medium uppercase tracking-wider"
                            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sora)" }}
                        >
                            Company *
                        </Label>
                        <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={onChange}
                            required
                            placeholder="Acme Pvt Ltd"
                            className="rounded-lg text-sm focus:border-[#10b981]"
                            style={{
                                background: "var(--bg-primary)",
                                border: "1px solid var(--border-medium)",
                                color: "var(--text-primary)",
                                fontFamily: "var(--font-body)",
                            }}
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="role"
                            className="block mb-1.5 text-xs font-medium uppercase tracking-wider"
                            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sora)" }}
                        >
                            Your Role
                        </Label>
                        <Input
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={onChange}
                            placeholder="Founder / Sales Lead"
                            className="rounded-lg text-sm focus:border-[#10b981]"
                            style={{
                                background: "var(--bg-primary)",
                                border: "1px solid var(--border-medium)",
                                color: "var(--text-primary)",
                                fontFamily: "var(--font-body)",
                            }}
                        />
                    </div>
                </div>

                {/* Industry */}
                <div>
                    <Label
                        className="block mb-1.5 text-xs font-medium uppercase tracking-wider"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sora)" }}
                    >
                        Industry *
                    </Label>
                    <Select value={formData.industry} onValueChange={onIndustryChange} required>
                        <SelectTrigger
                            className="w-full rounded-lg text-sm cursor-pointer"
                            style={{
                                background: "var(--bg-primary)",
                                border: "1px solid var(--border-medium)",
                                color: formData.industry ? "var(--text-primary)" : "var(--text-muted)",
                                fontFamily: "var(--font-body)",
                            }}
                        >
                            <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border-medium)",
                            }}
                        >
                            {INDUSTRIES.map((ind) => (
                                <SelectItem
                                    key={ind}
                                    value={ind}
                                    className="cursor-pointer text-sm"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {ind}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Team Size */}
                <div>
                    <Label
                        className="block mb-2 text-xs font-medium uppercase tracking-wider"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sora)" }}
                    >
                        Team Size
                    </Label>
                    <div className="flex flex-wrap gap-2">
                        {TEAM_SIZES.map((size) => (
                            <Button
                                key={size}
                                type="button"
                                variant={selectedTeamSize === size ? "default" : "outline"}
                                size="sm"
                                onClick={() => onTeamSizeChange(size)}
                                className="px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all"
                                style={{
                                    background: selectedTeamSize === size ? "var(--accent-subtle)" : "var(--bg-primary)",
                                    border: `1px solid ${selectedTeamSize === size ? "var(--accent)" : "var(--border-medium)"}`,
                                    color: selectedTeamSize === size ? "var(--accent)" : "var(--text-secondary)",
                                    fontFamily: "var(--font-sora)",
                                }}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Use Case */}
                <div>
                    <Label
                        htmlFor="useCase"
                        className="block mb-1.5 text-xs font-medium uppercase tracking-wider"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sora)" }}
                    >
                        What will you use Validy for?
                    </Label>
                    <Textarea
                        id="useCase"
                        name="useCase"
                        value={formData.useCase}
                        onChange={onChange}
                        placeholder="e.g. Finding decision makers in D2C brands for our SaaS product"
                        rows={3}
                        className="rounded-lg text-sm resize-none focus:border-[#10b981]"
                        style={{
                            background: "var(--bg-primary)",
                            border: "1px solid var(--border-medium)",
                            color: "var(--text-primary)",
                            fontFamily: "var(--font-body)",
                        }}
                    />
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer disabled:opacity-60 hover:shadow-[0_0_30px_var(--accent-glow)]"
                    style={{
                        background: "var(--accent)",
                        color: "var(--bg-primary)",
                        fontFamily: "var(--font-sora)",
                    }}
                >
                    {formState === "submitting" ? "Joining..." : "Join the Waitlist"}
                </Button>

                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    No spam. We&apos;ll only email you about your early access.
                </p>
            </form>
        </>
    );
}
