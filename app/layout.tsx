import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anurag Dubey | Portfolio",
  description: "Personal portfolio of Anurag Dubey - AI/ML Engineer, Data Analyst, and Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen relative`}>
        {/* Background Mesh/Gradient effect */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-slate-900 dark:from-slate-900 dark:via-[#0f172a] dark:to-[#0f172a] transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        {children}
      </body>
    </html>
  );
}
