"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
    const formVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const inputVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

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
                    {/* 1. Left Column: Authority & Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col gap-12"
                    >
                        {/* Direct Inquiries */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-letters-muted text-[10px] uppercase tracking-[0.3em] font-bold">
                                Direct Inquiries
                            </h3>
                            <a
                                href="mailto:jonathan@vancearts.com"
                                className="text-xl font-heading text-letters-primary hover:text-gold transition-colors inline-block"
                            >
                                jonathan@vancearts.com
                            </a>
                        </div>

                        {/* Talent Representation */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-letters-muted text-[10px] uppercase tracking-[0.3em] font-bold">
                                Talent Representation
                            </h3>
                            <p className="text-xl font-heading text-letters-primary">
                                The Vanguard Agency
                            </p>
                            <a
                                href="mailto:contact@vanguard.com"
                                className="text-letters-muted hover:text-gold transition-colors"
                            >
                                contact@vanguard.com
                            </a>
                            <p className="text-letters-muted">
                                +1 (555) 019-8273
                            </p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-letters-muted text-[10px] uppercase tracking-[0.3em] font-bold">
                                Location
                            </h3>
                            <p className="text-xl font-heading text-letters-primary">
                                Los Angeles, CA
                            </p>
                            <p className="text-letters-muted">
                                Available for global travel.
                            </p>
                        </div>
                    </motion.div>

                    {/* 2. Right Column: The High-Ticket Form */}
                    <motion.div
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form
                            className="flex flex-col gap-6"
                            onSubmit={e => e.preventDefault()}
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
                                    placeholder="Enter your full name"
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
                                    placeholder="Enter your email address"
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
                                    defaultValue=""
                                    aria-label="inquiry type"
                                    className="w-full bg-secondary/50 border border-white/5 rounded-sm px-6 py-5 text-letters-muted appearance-none focus:outline-none focus:border-gold focus:bg-secondary transition-all duration-300 cursor-pointer"
                                >
                                    <option value="" disabled>
                                        Select inquiry type
                                    </option>{" "}
                                    {/* Removed 'selected' */}
                                    <option value="booking">
                                        Project Booking
                                    </option>
                                    <option value="press">Press / Media</option>
                                    <option value="other">
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
                                    placeholder="Write your message here..."
                                    className="w-full bg-secondary/50 border border-white/5 rounded-sm px-6 py-5 text-letters-primary placeholder:text-letters-muted/30 focus:outline-none focus:border-gold focus:bg-secondary transition-all duration-300 resize-none"
                                />
                            </motion.div>

                            <motion.div
                                variants={inputVariants}
                                className="mt-4"
                            >
                                <button
                                    type="submit"
                                    className="group w-full flex items-center justify-center gap-4 bg-letters-primary text-primary px-8 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold transition-colors duration-500 rounded-sm"
                                >
                                    Send Message
                                    <ArrowRight
                                        size={14}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
