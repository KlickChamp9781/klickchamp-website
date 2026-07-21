import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-[12rem] md:text-[16rem] font-bold leading-none text-[rgb(var(--primary))]/10 mb-8">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button size="lg" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
