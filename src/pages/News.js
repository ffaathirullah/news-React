import React from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import NewsList from "../components/organisms/News/NewsList";

function News() {
  return (
    <>
      <Header registrasi news />
      <NewsList />
      <Footer />
    </>
  );
}

export default News;
