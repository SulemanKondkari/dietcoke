"use client";

import { motion } from "framer-motion";

const flavors = [
  {
    name: "Classic",
    color: "#F2F2F2",
    tag: "Original",
    image: "/frames/frame_000.jpg", // Using frames as placeholders if dedicated images aren't available
  },
  {
    name: "Twisted Strawberry",
    color: "#FFF0F4",
    tag: "Zero Sugar",
    image: "/frames/frame_000.jpg",
  },
  {
    name: "Exotic Mango",
    color: "#FFF9E6",
    tag: "Zero Sugar",
    image: "/frames/frame_000.jpg",
  },
  {
    name: "Zesty Blood Orange",
    color: "#FFF2E6",
    tag: "Zero Sugar",
    image: "/frames/frame_000.jpg",
  },
  {
    name: "Cherry",
    color: "#FDE8E8",
    tag: "Zero Sugar",
    image: "/frames/frame_000.jpg",
  },
  {
    name: "Lime",
    color: "#F0FDE8",
    tag: "Zero Sugar",
    image: "/frames/frame_000.jpg",
  },
];

export default function FlavorSection() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl lg:text-8xl font-display font-extrabold text-text-primary mb-4">
            One icon.<br />Eight reasons.
          </h2>
          <p className="text-xl font-body text-text-secondary">
            Discover the full range of zero-sugar refreshment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-card overflow-hidden p-12 flex flex-col items-center text-center transition-all duration-300"
              style={{ backgroundColor: flavor.color }}
            >
              <div className="relative w-48 h-64 mb-8 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-full object-contain mix-blend-multiply opacity-80"
                />
              </div>
              
              <span className="inline-block px-4 py-1.5 bg-red text-white text-[10px] font-display font-bold uppercase tracking-wider rounded-tag mb-4 shadow-sm">
                {flavor.tag}
              </span>
              
              <h3 className="text-3xl font-display font-extrabold text-text-primary">
                {flavor.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
