"use client";

import { motion } from "framer-motion";
import { Logs, ShieldCheck, UserCheck } from "lucide-react";

const features = [
    {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Instant User / Server Backup",
        description: "You can recover and restore them in just one click",
    },
    {
        icon: <Logs className="h-6 w-6" />,
        title: "Advanced Logging",
        description: "You can log user's email, gps, ip, device info and more",
    },
    {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Security",
        description: "VPN / Proxy blocking, ip range based blocking, captcha, and more powerful security features",
    },
];

export function Features() {
    return (
        <section id="features" className="py-15 bg-black">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Powerful Features
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Everything you need to manage your Discord community effectively
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-6 rounded-lg bg-gray-900/50 border border-gray-800"
                        >
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}