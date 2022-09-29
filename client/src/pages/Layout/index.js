import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Layout = ( {children}) => {
    return(
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    )
};

export default Layout;