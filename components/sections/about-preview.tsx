"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
    { icon: Shield, text: "Verified Quality" },
    { icon: Award, text: "15+ Years Experience" },
    { icon: Users, text: "500+ Clients Served" },
];

export function AboutPreview() {
    return (
        <section className="py-20 bg-zinc-950/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-grid-pattern" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                                alt="Suryava Steel - Our Story"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/80 via-transparent to-transparent" />
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-sm shadow-xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <div className="text-3xl font-display font-bold">2009</div>
                            <div className="text-sm opacity-90">Established</div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                            Our Story
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Forged in <span className="text-primary">Strength</span> & Trust
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            For over 15 years, Suryava Steel & Infra Supplies has been the trusted backbone
                            of Visakhapatnam's most ambitious construction projects. From a small stockyard
                            to the region's leading steel partner, our journey is built on one simple promise:
                            <span className="text-white font-medium"> every kilogram verified, every delivery on time.</span>
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-6 pt-2">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-2 text-gray-300"
                                >
                                    <item.icon className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pt-4"
                        >
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all group btn-depth"
                            >
                                Discover Our Story
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
