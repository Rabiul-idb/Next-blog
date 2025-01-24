import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./AuthProvider";


export const metadata = {
  title: "NB || Next Blog",
  description: "Next js blog site",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body >
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </AuthProvider>
  );
}
