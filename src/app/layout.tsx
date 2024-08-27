"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";  // Correctly import useRouter
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Medha",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter(); // Move useRouter inside the component
  const pathname = usePathname();
  const showNavbar = pathname !== "/login" && pathname !== "/signup";;

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          <div className="bg-white grid grid-cols-6 h-full">
            <div className="col-span-1 flex flex-col h-full">
            {showNavbar && ( // Conditionally render the logo and text
                <div className="flex p-2">
                  <Image className="pl-6" src="/Codepen.svg" width={62} height={32} alt="Logo" />
                  <div className="p-4">Medha</div>
                </div>
              )}
              <div className="flex-1 flex flex-col overflow-hidden">
               {showNavbar && <Sidebar />}
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-5 flex flex-col h-full">
          { showNavbar && <div className="p-4 bg-gray-200">
                {showNavbar && <Navbar />}
              </div>}
              <div className="flex-1 overflow-auto bg-gray-200">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
