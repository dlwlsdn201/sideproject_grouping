import React from "react";
import Footer from "./Footer";
import Background from "./Background";
import Header from "./Header";

const Template = ({ children }) => {
    return (
        <>
            <Header login={false} />
            <Background />
            {children}
            <Footer />
        </>
    );
};

export default Template;
