"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus, Minus, Trash2, Package, Truck, Wrench, Calculator, Check, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Product categories with items and prices
const categories = [
    {
        id: "tmt-bars",
        name: "TMT Bars",
        icon: Package,
        items: [
            { id: "tmt-8mm", name: "TMT Bars 8mm", unit: "per ton", price: 52000, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "tmt-10mm", name: "TMT Bars 10mm", unit: "per ton", price: 51500, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "tmt-12mm", name: "TMT Bars 12mm", unit: "per ton", price: 51000, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "tmt-16mm", name: "TMT Bars 16mm", unit: "per ton", price: 50500, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "tmt-20mm", name: "TMT Bars 20mm", unit: "per ton", price: 50000, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "tmt-25mm", name: "TMT Bars 25mm", unit: "per ton", price: 49500, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "tmt-32mm", name: "TMT Bars 32mm", unit: "per ton", price: 49000, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
        ]
    },
    {
        id: "structural-steel",
        name: "Structural Steel",
        icon: Wrench,
        items: [
            { id: "i-beam-150", name: "I-Beam 150mm", unit: "per ton", price: 58000, image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=400" },
            { id: "i-beam-200", name: "I-Beam 200mm", unit: "per ton", price: 59000, image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=400" },
            { id: "i-beam-250", name: "I-Beam 250mm", unit: "per ton", price: 60000, image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=400" },
            { id: "h-beam-150", name: "H-Beam 150mm", unit: "per ton", price: 61000, image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=400" },
            { id: "h-beam-200", name: "H-Beam 200mm", unit: "per ton", price: 62000, image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=400" },
            { id: "channel-100", name: "Channel 100mm", unit: "per ton", price: 57000, image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=400" },
            { id: "angle-50", name: "Angle Steel 50x50", unit: "per ton", price: 55000, image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=400" },
            { id: "angle-75", name: "Angle Steel 75x75", unit: "per ton", price: 56000, image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=400" },
        ]
    },
    {
        id: "plates-sheets",
        name: "MS Plates & Sheets",
        icon: Package,
        items: [
            { id: "ms-plate-3mm", name: "MS Plate 3mm", unit: "per ton", price: 54000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400" },
            { id: "ms-plate-6mm", name: "MS Plate 6mm", unit: "per ton", price: 53500, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400" },
            { id: "ms-plate-10mm", name: "MS Plate 10mm", unit: "per ton", price: 53000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400" },
            { id: "ms-plate-16mm", name: "MS Plate 16mm", unit: "per ton", price: 52500, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400" },
            { id: "ms-plate-25mm", name: "MS Plate 25mm", unit: "per ton", price: 52000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400" },
            { id: "chequered-3mm", name: "Chequered Plate 3mm", unit: "per ton", price: 56000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400" },
        ]
    },
    {
        id: "pipes-tubes",
        name: "Pipes & Hollow Sections",
        icon: Package,
        items: [
            { id: "round-pipe-2", name: "Round Pipe 2\"", unit: "per ton", price: 60000, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400" },
            { id: "round-pipe-3", name: "Round Pipe 3\"", unit: "per ton", price: 61000, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400" },
            { id: "round-pipe-4", name: "Round Pipe 4\"", unit: "per ton", price: 62000, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400" },
            { id: "square-50", name: "Square Section 50x50", unit: "per ton", price: 63000, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400" },
            { id: "square-75", name: "Square Section 75x75", unit: "per ton", price: 64000, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400" },
            { id: "rect-50x100", name: "Rectangular 50x100", unit: "per ton", price: 63500, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400" },
        ]
    },
    {
        id: "fabrication",
        name: "Fabrication Services",
        icon: Wrench,
        items: [
            { id: "cutting", name: "Steel Cutting Service", unit: "per cut", price: 500, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "bending", name: "Steel Bending Service", unit: "per piece", price: 800, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "welding", name: "Welding Service", unit: "per joint", price: 350, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "drilling", name: "Drilling Service", unit: "per hole", price: 150, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
            { id: "galvanizing", name: "Galvanizing", unit: "per kg", price: 25, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
        ]
    }
];

// Delivery options
const deliveryOptions = [
    { id: "pickup", name: "Self Pickup", price: 0, description: "Pick up from our warehouse" },
    { id: "local", name: "Local Delivery (Within City)", price: 2500, description: "Delivery within Visakhapatnam" },
    { id: "regional", name: "Regional Delivery", price: 5000, description: "Delivery within AP State" },
    { id: "express", name: "Express Delivery", price: 8000, description: "Priority delivery within 24 hours" },
];

type CartItem = {
    id: string;
    name: string;
    unit: string;
    price: number;
    quantity: number;
};

export default function QuotePage() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
    const [showSummary, setShowSummary] = useState(false);

    const currentCategory = categories.find(c => c.id === selectedCategory);

    const addToCart = (item: typeof categories[0]["items"][0]) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart(prev => {
            return prev.map(item => {
                if (item.id === id) {
                    const newQty = Math.max(0, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            }).filter(item => item.quantity > 0);
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gst = subtotal * 0.18;
    const deliveryCharge = selectedDelivery.price;
    const total = subtotal + gst + deliveryCharge;

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    <h1 className="text-xl md:text-2xl font-display font-bold">Get a Quote</h1>
                    <button 
                        onClick={() => setShowSummary(!showSummary)}
                        className="relative flex items-center gap-2 bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded-sm transition-colors"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        <span className="hidden md:inline">Cart</span>
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </button>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Categories Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-zinc-900/50 border border-white/10 rounded-sm p-4">
                            <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                                <Package className="h-5 w-5 text-primary" />
                                Categories
                            </h2>
                            <nav className="space-y-2">
                                {categories.map(cat => {
                                    const Icon = cat.icon;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className={`w-full text-left px-4 py-3 rounded-sm flex items-center gap-3 transition-all ${
                                                selectedCategory === cat.id
                                                    ? "bg-primary text-white"
                                                    : "bg-zinc-800/50 hover:bg-zinc-800 text-gray-300"
                                            }`}
                                        >
                                            <Icon className="h-4 w-4" />
                                            {cat.name}
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* Delivery Options */}
                            <div className="mt-8">
                                <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                                    <Truck className="h-5 w-5 text-primary" />
                                    Delivery Options
                                </h2>
                                <div className="space-y-2">
                                    {deliveryOptions.map(option => (
                                        <button
                                            key={option.id}
                                            onClick={() => setSelectedDelivery(option)}
                                            className={`w-full text-left px-4 py-3 rounded-sm transition-all ${
                                                selectedDelivery.id === option.id
                                                    ? "bg-primary/20 border border-primary text-white"
                                                    : "bg-zinc-800/50 hover:bg-zinc-800 text-gray-300 border border-transparent"
                                            }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">{option.name}</span>
                                                {selectedDelivery.id === option.id && <Check className="h-4 w-4 text-primary" />}
                                            </div>
                                            <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                                            <div className="text-primary font-semibold mt-1">
                                                {option.price === 0 ? "FREE" : formatPrice(option.price)}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="lg:col-span-2">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-2xl font-display font-bold mb-6">{currentCategory?.name}</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {currentCategory?.items.map(item => {
                                    const inCart = cart.find(c => c.id === item.id);
                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-zinc-900/50 border border-white/10 rounded-sm overflow-hidden hover:border-primary/50 transition-all group"
                                        >
                                            <div className="relative h-32 bg-zinc-800">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                                                <div className="text-sm text-gray-500 mb-2">{item.unit}</div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xl font-bold text-primary">{formatPrice(item.price)}</span>
                                                    {inCart ? (
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="bg-zinc-700 hover:bg-zinc-600 p-1 rounded-sm transition-colors"
                                                            >
                                                                <Minus className="h-4 w-4" />
                                                            </button>
                                                            <span className="w-8 text-center font-semibold">{inCart.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="bg-zinc-700 hover:bg-zinc-600 p-1 rounded-sm transition-colors"
                                                            >
                                                                <Plus className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button
                                                            onClick={() => addToCart(item)}
                                                            className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-sm font-medium transition-colors flex items-center gap-2"
                                                        >
                                                            <Plus className="h-4 w-4" />
                                                            Add
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Quote Summary Sidebar */}
                    <div className={`lg:col-span-1 ${showSummary ? 'block' : 'hidden lg:block'}`}>
                        <div className="sticky top-24 bg-zinc-900/50 border border-white/10 rounded-sm p-4">
                            <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                                <Calculator className="h-5 w-5 text-primary" />
                                Quote Summary
                            </h2>

                            {cart.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p>Your cart is empty</p>
                                    <p className="text-sm mt-2">Add items to get a quote</p>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-3 max-h-64 overflow-y-auto">
                                        <AnimatePresence>
                                            {cart.map(item => (
                                                <motion.div
                                                    key={item.id}
                                                    layout
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="bg-zinc-800/50 p-3 rounded-sm"
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex-1">
                                                            <h4 className="font-medium text-sm">{item.name}</h4>
                                                            <p className="text-xs text-gray-500">{item.unit}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-gray-500 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="bg-zinc-700 hover:bg-zinc-600 p-1 rounded-sm transition-colors"
                                                            >
                                                                <Minus className="h-3 w-3" />
                                                            </button>
                                                            <span className="w-6 text-center text-sm">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="bg-zinc-700 hover:bg-zinc-600 p-1 rounded-sm transition-colors"
                                                            >
                                                                <Plus className="h-3 w-3" />
                                                            </button>
                                                        </div>
                                                        <span className="font-semibold text-primary">{formatPrice(item.price * item.quantity)}</span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </div>

                                    <div className="border-t border-white/10 mt-4 pt-4 space-y-2">
                                        <div className="flex justify-between text-gray-400">
                                            <span>Subtotal</span>
                                            <span>{formatPrice(subtotal)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-400">
                                            <span>GST (18%)</span>
                                            <span>{formatPrice(gst)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-400">
                                            <span>Delivery ({selectedDelivery.name})</span>
                                            <span>{deliveryCharge === 0 ? "FREE" : formatPrice(deliveryCharge)}</span>
                                        </div>
                                        <div className="border-t border-white/10 pt-2 flex justify-between text-xl font-bold">
                                            <span>Total</span>
                                            <span className="text-primary">{formatPrice(total)}</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-6 bg-primary hover:bg-orange-600 text-white py-4 rounded-sm font-semibold transition-colors flex items-center justify-center gap-2">
                                        Request Quote
                                        <ArrowRight className="h-5 w-5" />
                                    </button>

                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        * Prices are indicative. Final quote will be confirmed by our team.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
