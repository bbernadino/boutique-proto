import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const MainLayout = (props) => {
  return (
    <div className="full-height">
      <Header {...props} />
      <div className="main">
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
