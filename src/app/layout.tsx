import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medha",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          <div className="bg-white grid grid-cols-6 h-full">
            <div className="col-span-1 flex flex-col h-full">
              <div className="flex pt-2">
              <img className="pl-6" src="/Codepen.svg" alt="" />
              <div className="p-4 text-black">Medha</div>
              </div>
              <div className="flex-1 flex flex-col overflow-hidden">
                <Sidebar />
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-5 flex flex-col h-full">
              <div className="p-4 bg-gray-200">
                <Navbar />
              </div>
              <div className="flex-1 overflow-auto bg-gray-200">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
