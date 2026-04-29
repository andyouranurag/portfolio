"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: "1",
    name: "Cloud Computing (Elite)",
    organization: "NPTEL / IIT Kharagpur",
    date: "Oct 2024",
    imageUrl: "/certificates/cloud-computing.png",
    link: "#" // Replace with actual verification link if available
  },
  {
    id: "2",
    name: "Decode, Design, Develop",
    organization: "Google Student Ambassador Program",
    date: "Oct 2025",
    imageUrl: "/certificates/google-student.png",
    link: "#"
  },
  {
    id: "3",
    name: "DesignSphere Quiz (4th Place)",
    organization: "Amity University (Cascade Club)",
    date: "Sep 2025",
    imageUrl: "/certificates/designsphere.png",
    link: "#"
  },
  {
    id: "4",
    name: "Cyber Threat Detection Workshop",
    organization: "IEEE ICRITO 2025",
    date: "Sep 2025",
    imageUrl: "/certificates/ieee-icrito.png",
    link: "#"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Certifications</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer glass"
            onClick={() => setSelectedCert(cert)}
          >
            {/* Image Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${cert.imageUrl})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <Award className="w-8 h-8 text-accent-light mb-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              <h3 className="text-xl font-bold text-white mb-1">{cert.name}</h3>
              <div className="flex justify-between items-center text-white/70 text-sm">
                <span>{cert.organization}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl glass bg-background/90 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="aspect-[1.414/1] md:aspect-[16/9] relative">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.name}
                  className="w-full h-full object-contain bg-black/10"
                />
              </div>

              <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedCert.name}</h3>
                  <p className="text-foreground/70">{selectedCert.organization} • {selectedCert.date}</p>
                </div>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform"
                >
                  Verify <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
