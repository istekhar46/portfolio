import Navbar from "../components/Navbar";
import Routers from "../routes/Routers";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routers />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
