import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albin Varghese | Full Stack Developer",
  description:
    "Portfolio of Albin Varghese, a Full Stack Developer with over 6 years of experience from Kerala, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
