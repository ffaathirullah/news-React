import React, { useState, useEffect } from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailsBlogs from "../components/organisms/Detail/DetailsBlogs";

function DetailNews() {
  let params = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${params.id}&apiKey=8e6778eef74d4e3da39e430ce3cd0899`
      );
      setArticles(response.data.articles[0]);
    };

    getArticles();
  }, []);

  return (
    <>
      <Header registrasi news />
      <DetailsBlogs
        title={articles.title}
        time={articles.publishedAt}
        urlToImage={articles.urlToImage}
        description={articles.description}
        content={articles.content}
      />
      <Footer />
    </>
  );
}

export default DetailNews;
