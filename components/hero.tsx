"use client";
import { User } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607799632518-da91dd151b38?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  // state pour stocker les rotations aléatoires
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    // généré une seule fois côté client
    setRotations(images.map(() => Math.random() * 20 - 10));
  }, []);

  return (
    <div className="w-full px-4 md:px-12 py-8 md:py-14 flex items-center justify-between">
      <div className="flex flex-col items-start space-y-10 w-3xl">
        <div className="bg-zinc-800 dark:bg-zinc-200 rounded-full p-2 inline-block">
          <User className="text-white dark:text-black" />
        </div>
        <h2 className="text-5xl font-bold text-start">
          Developpeur fullstack & fondateur d&apos;agence
        </h2>
        <p className="text-zinc-600 dark:text-zinc-200 text-lg text-start">
          Je suis Bassirou Fofana, un développeur de logiciels passionné et le
          fondateur de ma propre agence. Avec une expertise en création de
          solutions numériques innovantes, je m&apos;efforce de transformer les
          idées en réalité.
        </p>
        <div className="flex justify-center items-center relative w-full">
          {images.map((image, idx) => (
            <motion.div
              key={"images" + idx}
              style={{
                rotate: rotations[idx] ?? 0
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100
              }}
              whileTap={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100
              }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
