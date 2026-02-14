import mongoose, { Schema, Document } from "mongoose";

export interface IEarlyAccess extends Document {
    name: string;
    email: string;
    company: string;
    role: string;
    industry: string;
    teamSize: string;
    useCase: string;
    createdAt: Date;
}

const EarlyAccessSchema = new Schema<IEarlyAccess>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    company: { type: String, required: true, trim: true },
    role: { type: String, trim: true, default: "" },
    industry: { type: String, required: true },
    teamSize: { type: String, default: "" },
    useCase: { type: String, trim: true, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.EarlyAccess ||
    mongoose.model<IEarlyAccess>("EarlyAccess", EarlyAccessSchema);
