"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

// Replace with actual Google Drive File ID. Ensure the file sharing is set to "Anyone with the link"
const RESUME_DRIVE_FILE_ID = "1wvD1oRx-pNHidAyvawrjsIIfgIvXlBt4";
const PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_FILE_ID}`;

export default function Resume() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-dark to-accent">Resume</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/70"
        >
          View or download my full professional history.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-4 md:p-8 border border-glass-border shadow-2xl relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 w-full aspect-[1/1.4] md:aspect-[16/11] rounded-xl overflow-hidden border border-foreground/10 bg-background/50 flex flex-col items-center justify-center">

          {/* Fallback/Loader while iframe loads */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-foreground/40 space-y-4 -z-10">
            <FileText size={48} className="animate-pulse" />
            <p>Loading document from Google Drive...</p>
          </div>

          <iframe
            src={PREVIEW_URL}
            className="w-full h-full border-0"
            allow="autoplay"
            title="Resume Preview"
          ></iframe>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download size={20} className="group-hover:-translate-y-1 group-hover:opacity-0 transition-all absolute" />
              <Download size={20} className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all relative" />
              Download PDF
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light via-accent to-accent-dark opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
