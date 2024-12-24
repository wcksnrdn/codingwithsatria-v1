"use client";

import React from "react";
import { certificatesData } from "@/components/data/certificates";
import Link from "next/link";
import Image from "next/image"; // Import Image dari Next.js

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-[80rem] mx-auto py-16 px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-white">All Certificates</h1>
          <Link 
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div 
              key={cert.id} 
              className="group bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={cert.image} // Menggunakan Next.js Image
                  alt={cert.title}
                  layout="fill" // Memastikan gambar memenuhi container
                  objectFit="cover" // Sama seperti `object-cover` di CSS
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-gray-400">2024</span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
