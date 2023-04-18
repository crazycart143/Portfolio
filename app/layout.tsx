import "../styles/globals.css";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Keanu John Lariosa",
  description: "Welcome to my web portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black font-germalt">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
