import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PropTypes from "prop-types";

function RootLayout({ screenSize }) {
  return (
    <>
      <Header screenSize={screenSize} />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

RootLayout.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default RootLayout;
