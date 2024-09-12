import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '../styles/global.css'

export const metadata = {
  title: "Basit Portfolio",
  description: "devbasit-portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
