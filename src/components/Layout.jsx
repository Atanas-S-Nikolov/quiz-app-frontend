import '@/styles/Layout.css';

import Footer from "./footer/Footer";
import NavigationBar from "./navigation/NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </>
  )
}
