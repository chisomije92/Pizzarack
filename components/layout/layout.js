import { Fragment } from "react/cjs/react.production.min";
import Footer from "./footer";
import NavBar from "./nav-bar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
