import Slider from "../Components/Slider";
// import Rating from "../Components/Rating";
import RatedBlog from "./RatedBlog";
import Faq from "react-faq-component";
import { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
function Homepage() {
  let { id } = useParams();
  const data = {
    rows: [
      {
        title: "Dərimizi necə nəmləndirmək olar?",
        content:
          "Xoşbəxtlikdən, dərini nəmləndirmək üçün ciddi tədbirlər tələb etməyən bir sıra yollar var. Nəmləndirici kremdən və yaxşı üz nəmləndiricilərindən tutmuş zərərli maddələri kəsməyə və daha çox su içməyə qədər, bunlar ən təsirli dərini nəmləndirmə üsullarıdır.",
      },
      {
        title: "Məhsullar dəriyə uyğunluq baxımından sınaqdan keçirilirmi?",
        content: `Bütün düsturlar dəriyə uyğunluğu üçün dermatoloji cəhətdən sınaqdan keçirilir. `,
      },
      {
        title: "Həssas dəriyə qulluq zamanı xüsusilə nə vacibdir?",
        content: `
Həssas dəri irsi və ya qazanılmış ola bilər. Həssas dəri müəyyən məhsullara və ətraf mühitin təsirlərinə reaksiya verə bilər. `,
      },
    ],
  };
  const [rated, setRated] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:7700/contents").then((a) =>
        a.json()
      );

      setRated(data);
    };
    getData();
  }, []);


  //industry ve blogs istifade etmisem
  const [industry, setIndustry] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch("http://localhost:7700/industry").then((a) =>
        a.json()
      );
      setIndustry(data);
    };
    getInfo();
  }, []);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch("http://localhost:7700/blogs").then((a) =>
        a.json()
      );
      setBlogs(data);
    };
    getInfo();
  }, []);
  console.log(blogs.map((a) => a));
  return (
    <>
      <Slider />
      <div className="container">
        <div className="navshops">
          {industry.map((a) => (
            <div className="navshop">
              <div className="navshop-image">
                <img src={a.image} />
              </div>
              <div className="navshop-details">
                <h1>{a.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="organic">
        <div className="organic-image">
          <i className="fa-solid fa-industry"></i>
        </div>
        <div className="organic-text">
          <h1>Biz Aparıcı Mühəndislik Sənayesiyik</h1>
        </div>
      </div>
      <div className="container">
        <div className="navshops">
          {blogs.map((blog) => (
            <div className="navshop">
              <div className="navshop-image">
                <img src={blog.image} />
              </div>
              <div className="navshop-details">
                <div className="navshop-toptext">
                  <h1>{blog.name}</h1>
                </div>
                <Link to={`/blogs/${blog.id}`}>
                  {" "}
                  <button className="Btn"> Daha ətraflı</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RatedBlog />
      <div className="heading">
        <h1>Tez-tez verilən suallar</h1>
      </div>
      <div className="container">
        <div className="faq">
          <Faq data={data} />
        </div>
      </div>
    </>
  );
}
export default Homepage;
