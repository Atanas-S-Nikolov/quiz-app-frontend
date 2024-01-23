import Footer from "./footer/Footer";
import NavigationBar from "./navigation/NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  )
}
