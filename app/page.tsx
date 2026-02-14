"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import EarlyAccessModal from "@/components/EarlyAccessModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onEarlyAccess={() => setModalOpen(true)} />
      <main>
        <Hero onEarlyAccess={() => setModalOpen(true)} />
        <Features />
        <HowItWorks />
        <Pricing onEarlyAccess={() => setModalOpen(true)} />
      </main>
      <Footer />
      <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
