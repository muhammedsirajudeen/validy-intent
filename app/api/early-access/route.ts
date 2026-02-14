import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EarlyAccess from "@/models/EarlyAccess";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, role, industry, teamSize, useCase } = body;

        if (!name || !email || !company || !industry) {
            return NextResponse.json(
                { error: "Name, email, company, and industry are required." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        await connectDB();

        const existing = await EarlyAccess.findOne({ email: email.toLowerCase() });
        if (existing) {
            return NextResponse.json(
                { error: "This email is already on our early access list!" },
                { status: 409 }
            );
        }

        await EarlyAccess.create({
            name,
            email: email.toLowerCase(),
            company,
            role,
            industry,
            teamSize,
            useCase,
        });

        return NextResponse.json(
            { message: "You're on the list! We'll be in touch soon." },
            { status: 201 }
        );
    } catch (error) {
        console.error("Early access signup error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
