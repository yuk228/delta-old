"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for small communities",
        features: [
            "Unlimited Restorable Members",
            "EMail Logging using Webhook",
            "Global Ban",
            "Anti Bot",
            "1 Server Support",
            "Standard Support",
        ],
    },
    {
        name: "Standard",
        price: "$3",
        description: "For growing communities",
        features: [
            "Unlimited Restorable Members",
            "Server Backup",
            "EMail, IP Address Logging using Webhook",
            "Anti Bot",
            "5 Server Support",
            "Fast Support",
        ],
    },
    {
        name: "Pro",
        price: "10$",
        description: "For large organizations",
        features: [
            "Unlimited Restorable Members",
            "Server Backup",
            "EMail, IP Address, GPS, Device Information Logging using Webhook",
            "Anti Bot",
            "10 Server Support",
            "Advanced Support",
        ],
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Most 
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose the plan that best fits your community&apos;s needs
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-8 rounded-lg bg-gray-900/50 border border-gray-800 flex flex-col h-full"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {plan.name}
                                </h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-gray-400">/month</span>
                                    )}
                                </div>
                                <p className="text-gray-400 mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center text-gray-300"
                                        >
                                            <Check className="h-5 w-5 text-indigo-400 mr-2 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button
                                className="w-full bg-indigo-600 hover:bg-indigo-700 mt-auto"
                                variant="default"
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}