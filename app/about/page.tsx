"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import {
    Award,
    Target,
    Users,
    TrendingUp,
    Shield,
    Heart,
    Flame,
    Building2,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const milestones = [
    {
        year: "2009",
        title: "The Foundation",
        description: "Suryava Steel was founded with a bold vision: to transform how steel is supplied in Visakhapatnam. Starting with a small stockyard and a commitment to quality, we began serving local builders with verified materials."
    },
    {
        year: "2012",
        title: "Expanding Horizons",
        description: "We inaugurated our first custom fabrication workshop, enabling us to offer precision cutting, bending, and welding services. Our team grew from 12 to 50+ skilled professionals."
    },
    {
        year: "2016",
        title: "Industrial Excellence",
        description: "Secured our first major defense contract, supplying specialized steel for naval dockyard projects. This milestone established us as a trusted partner for critical infrastructure."
    },
    {
        year: "2020",
        title: "Digital Transformation",
        description: "Launched GPS-tracked fleet logistics and digital inventory systems. Clients could now track shipments in real-time and receive instant quotations online."
    },
    {
        year: "2024",
        title: "15 Years of Trust",
        description: "Today, we've delivered over 50,000+ MT of steel, served 500+ clients, and completed projects across construction, shipbuilding, infrastructure, and manufacturing sectors."
    }
];

const values = [
    {
        icon: Shield,
        title: "Integrity First",
        description: "Every weighbridge slip is transparent. Every grade is certified. We never compromise on honesty."
    },
    {
        icon: Award,
        title: "Quality Obsession",
        description: "From mill to site, every piece of steel undergoes rigorous quality checks to ensure IS standard compliance."
    },
    {
        icon: Users,
        title: "Customer Partnership",
        description: "We don't just supply steel—we partner with you to optimize costs, reduce wastage, and meet deadlines."
    },
    {
        icon: Heart,
        title: "Community Commitment",
        description: "Supporting local employment and contributing to Visakhapatnam's growth is at the heart of everything we do."
    }
];

const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "500+", label: "Clients Served" },
    { value: "50,000+", label: "MT Steel Delivered" },
    { value: "100+", label: "Major Projects" }
];

export default function AboutPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
                {/* Background Image with Overlay */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop"
                        alt="Steel Manufacturing"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
                </motion.div>

                {/* Hero Content */}
                <motion.div
                    style={{ opacity }}
                    className="relative z-10 container mx-auto px-4 md:px-6 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                            <Flame className="h-4 w-4" />
                            Our Story
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                            FORGED IN<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary">
                                STRENGTH & TRUST
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            For over 15 years, Suryava Steel has been the backbone of
                            Visakhapatnam's most ambitious construction projects.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest">Discover Our Journey</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
                    />
                </motion.div>
            </section>

            {/* The Beginning Story */}
            <section className="py-24 bg-zinc-950/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                                Where It All <span className="text-primary">Began</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    In 2009, amidst the bustling industrial landscape of Visakhapatnam,
                                    <span className="text-white font-semibold"> Suryava Steel & Infra Supplies</span> was
                                    born from a simple yet powerful belief: that every builder, every contractor, and
                                    every dreamer deserves steel they can trust.
                                </p>
                                <p>
                                    Our founder witnessed firsthand the challenges that plagued the industry—weight
                                    discrepancies, delayed deliveries, and compromised quality. This wasn't just a
                                    business opportunity; it was a calling to set things right.
                                </p>
                                <p>
                                    Starting with a modest stockyard and a small but dedicated team, we made a
                                    promise: <span className="text-primary font-semibold italic">"Every kilogram verified. Every delivery on time.
                                        Every commitment honored."</span>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop"
                                    alt="Steel Structure"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                            </div>
                            {/* Floating stat card */}
                            <motion.div
                                className="absolute -bottom-8 -left-8 bg-zinc-900/90 backdrop-blur-md p-6 border-l-4 border-primary shadow-xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <div className="text-4xl font-display font-bold text-white">2009</div>
                                <div className="text-sm text-gray-400">Year Founded</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-primary/5 border-y border-primary/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                            Our <span className="text-primary">Journey</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            From a small stockyard to Visakhapatnam's trusted steel partner—every milestone reflects our commitment to excellence.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />

                                <div className={`bg-zinc-900/50 border border-white/10 rounded-sm p-8 hover:border-primary/50 transition-colors ${index % 2 === 0 ? 'md:text-right' : ''
                                    }`}>
                                    <div className="text-primary font-display font-bold text-3xl mb-2">
                                        {milestone.year}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 bg-zinc-950/50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            What We <span className="text-primary">Stand For</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Our values aren't just words on a wall—they're the principles that guide every decision we make.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group bg-zinc-900/50 border border-white/10 rounded-sm p-8 hover:border-primary/50 hover:bg-zinc-900 transition-all"
                            >
                                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <value.icon className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-gradient-to-b from-background to-zinc-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square"
                        >
                            <div className="absolute inset-4 border-2 border-primary/30 rounded-sm" />
                            <div className="relative h-full w-full rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop"
                                    alt="Future Vision"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Target className="h-6 w-6 text-primary" />
                                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Mission</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white">
                                    Building Dreams with Trusted Steel
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    To be the most trusted steel partner for builders and industries across Andhra Pradesh,
                                    delivering verified quality, transparent pricing, and unwavering reliability in every kilogram we supply.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Vision</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white">
                                    Shaping Tomorrow's Infrastructure
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    To become South India's leading integrated steel supply and fabrication company,
                                    setting new standards for quality, sustainability, and customer service in the industry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary/5 border-y border-primary/20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto space-y-8"
                    >
                        <Building2 className="h-16 w-16 text-primary mx-auto" />
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                            Ready to Build with <span className="text-primary">Trust</span>?
                        </h2>
                        <p className="text-gray-400 text-xl">
                            Join the 500+ clients who rely on Suryava Steel for their most ambitious projects.
                            Let's discuss how we can support your next venture.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/quote"
                                className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all flex items-center gap-2 group"
                            >
                                Get a Quote
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/#contact"
                                className="border border-white/20 hover:bg-white/5 text-foreground px-8 py-4 rounded-sm font-semibold text-lg transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
