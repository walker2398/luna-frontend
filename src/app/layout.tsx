import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luna",
  description: "luna controller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <div className="w-screen fixed">
          <div className="lg:px-8 lg:py-3">
            <div className="flex items-center">
              <a href="/" className="justify-self-start">Luna</a>
              <div className="lg:ml-auto">
                <div className="flex space-x-8">
                  <a>Download</a>
                  <a href="/console">控制台</a>
                  <a>Login</a>
                </div>
                </div>
            </div>  
          </div>
        </div>
        <AntdRegistry>{children}</AntdRegistry>
        <div></div>
      </body>

    </html>
  );
}
