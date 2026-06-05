import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umama Wahab — Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Umama Wahab, Software Engineering student at NUST and Full-Stack Developer Intern at NexSoft Solutions. Specializing in modern web applications, UI/UX design, and scalable software solutions.",
  keywords: [
    "Umama Wahab",
    "Software Engineer",
    "Full Stack Developer",
    "NUST",
    "React",
    "Next.js",
    "Portfolio",
    "NexSoft",
  ],
  authors: [{ name: "Umama Wahab" }],
  creator: "Umama Wahab",
  openGraph: {
    title: "Umama Wahab — Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Umama Wahab, Software Engineering student at NUST and Full-Stack Developer Intern at NexSoft Solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umama Wahab — Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Umama Wahab, Software Engineering student at NUST and Full-Stack Developer Intern.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
