"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

const sectionVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const blockVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const formVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
};

const inputVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || "Something went wrong.");
                setStatus("error");
                return;
            }

            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setErrorMsg("Network error. Please try again.");
            setStatus("error");
        }
    }

    return (
        <section
            id="contact"
            className="py-32 lg:py-52 bg-primary relative border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-heading font-medium text-letters-primary"
                    >
                        Contact & Booking
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col gap-12"
                    >
                        <motion.div
                            variants={blockVariants}
                            className="flex flex-col gap-2"
                        >
                            <h3 className="text-letters-muted text-[10px] uppercase tracking-[0.3em] font-bold">
                                Direct Inquiries
                            </h3>
                            <a
                                href="mailto:paulinus@softent.com"
                                className="text-xl font-heading text-letters-primary hover:text-gold transition-colors inline-block"
                            >
                                paulinus@softent.com
                            </a>
                        </motion.div>

                        <motion.div
                            variants={blockVariants}
                            className="flex flex-col gap-2"
                        >
                            <h3 className="text-letters-muted text-[10px] uppercase tracking-[0.3em] font-bold">
                                Talent Representation
                            </h3>
                            <p className="text-xl font-heading text-letters-primary">
                                The Soft Entertainment
                            </p>
                            <a
                                href="mailto:contact@softent.com"
                                className="text-letters-muted hover:text-gold transition-colors"
                            >
                                contact@softent.com
                            </a>
                            <p className="text-letters-muted">
                                +234 906 6016 591
                            </p>
                        </motion.div>

                        <motion.div
                            variants={blockVariants}
                            className="flex flex-col gap-2"
                        >
                            <h3 className="text-letters-muted text-[10px] uppercase tracking-[0.3em] font-bold">
                                Location
                            </h3>
                            <p className="text-xl font-heading text-letters-primary">
                                Abuja, NIG.
                            </p>
                            <p className="text-letters-muted">
                                Available for global travel.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="flex flex-col gap-4 py-16"
                            >
                                <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                                    Message Sent
                                </p>
                                <p className="text-3xl font-heading text-letters-primary">
                                    Thank you for reaching out.
                                </p>
                                <p className="text-letters-muted">
                                    We'll be in touch shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-[10px] uppercase tracking-widest text-letters-muted hover:text-letters-primary transition-colors self-start"
                                >
                                    ← Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form
                                className="flex flex-col gap-6"
                                onSubmit={handleSubmit}
                            >
                                <motion.div
                                    variants={inputVariants}
                                    className="flex flex-col gap-2"
                                >
                                    <label
                                        htmlFor="name"
                                        className="text-[10px] uppercase tracking-widest text-letters-muted pl-4"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full bg-secondary/50 border border-white/5 rounded-sm px-6 py-5 text-letters-primary placeholder:text-letters-muted/30 focus:outline-none focus:border-gold focus:bg-secondary transition-all duration-300"
                                    />
                                </motion.div>

                                <motion.div
                                    variants={inputVariants}
                                    className="flex flex-col gap-2"
                                >
                                    <label
                                        htmlFor="email"
                                        className="text-[10px] uppercase tracking-widest text-letters-muted pl-4"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full bg-secondary/50 border border-white/5 rounded-sm px-6 py-5 text-letters-primary placeholder:text-letters-muted/30 focus:outline-none focus:border-gold focus:bg-secondary transition-all duration-300"
                                    />
                                </motion.div>

                                <motion.div
                                    variants={inputVariants}
                                    className="flex flex-col gap-2"
                                >
                                    <label
                                        htmlFor="subject"
                                        className="text-[10px] uppercase tracking-widest text-letters-muted pl-4"
                                    >
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        aria-label="inquiry type"
                                        className="w-full bg-secondary/50 border border-white/5 rounded-sm px-6 py-5 text-letters-muted appearance-none focus:outline-none focus:border-gold focus:bg-secondary transition-all duration-300 cursor-pointer"
                                    >
                                        <option value="" disabled>
                                            Select inquiry type
                                        </option>
                                        <option value="Project Booking">
                                            Project Booking
                                        </option>
                                        <option value="Press / Media">
                                            Press / Media
                                        </option>
                                        <option value="General Inquiry">
                                            General Inquiry
                                        </option>
                                    </select>
                                </motion.div>

                                <motion.div
                                    variants={inputVariants}
                                    className="flex flex-col gap-2"
                                >
                                    <label
                                        htmlFor="message"
                                        className="text-[10px] uppercase tracking-widest text-letters-muted pl-4"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        required
                                        className="w-full bg-secondary/50 border border-white/5 rounded-sm px-6 py-5 text-letters-primary placeholder:text-letters-muted/30 focus:outline-none focus:border-gold focus:bg-secondary transition-all duration-300 resize-none"
                                    />
                                </motion.div>

                                {status === "error" && (
                                    <p className="text-red-400 text-[11px] pl-4">
                                        {errorMsg}
                                    </p>
                                )}

                                <motion.div
                                    variants={inputVariants}
                                    className="mt-4"
                                >
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="group w-full flex items-center justify-center gap-4 bg-letters-primary text-primary px-8 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold transition-colors duration-500 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2
                                                    size={14}
                                                    className="animate-spin"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <ArrowRight
                                                    size={14}
                                                    className="group-hover:translate-x-1 transition-transform"
                                                />
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
