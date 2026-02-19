"use client";
import React from 'react';
import { useProductImage } from "@/context/ProductImageContext";

function Menu() {
    const { menuContainerRef } = useProductImage();

    return (
        <section
            ref={menuContainerRef}
            className="relative min-h-screen bg-gray-50 py-20 px-6 flex items-center justify-center"
        >
            <div className="w-full max-w-6xl flex items-center justify-between gap-24">
                {/* Image Placeholder */}
                <div className="shrink-0 w-1/3 h-80" />

                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Our Fresh Menu
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Best Egyptian Juice is a premium beverage brand that delivers a
                        refreshing and flavorful experience in every sip. Crafted with
                        high-quality ingredients and carefully selected flavors, Best
                        combines great taste with consistent quality standards.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Whether you&apos;re enjoying it during a busy day, with friends, or at
                        special moments, Best Juice offers the perfect balance of freshness
                        and energy. More than just a drink, it represents vitality,
                        enjoyment, and authentic Egyptian refreshment.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Menu;