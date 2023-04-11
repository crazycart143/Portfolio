import "../styles/globals.css";
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
    <html lang="en">
      <body className="bg-black font-germalt">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
