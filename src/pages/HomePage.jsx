import Slider from "../Components/Slider";
// import Rating from "../Components/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles


import RatedBlog from "./RatedBlog";
import Faq from "react-faq-component";
import { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
function Homepage() {
  let { id } = useParams();
  const data = {
    rows: [
      {
        title: "Bizim hansı xidmətlərimiz var?",
        content:
          "Ərazilərin geofiziki araşdırılması, qiymətli daş yataqlarının ən müasir qurğu və cihazlarla ölçülməsi və s. xidmətlərimiz var.",
      },
      {
        title: "Bu xidmətlər hasnı region və bölgələrdə həyata keçirilir?",
        content: `Artıq illərdiki öz kefyiyyəti ilə fəaliyyət göstərən AzGP istər ölkədaxili istərsə də ölkəxarici fəaliyyətləri ilə xidmətinizdədir. `,
      },
      {
        title: "Niyə biz?",
        content: "Xidmətinin keyfiyyəti ilə sizlərin güvənini qazanan AzGP şirkəti öz təcrübəsi və peşəkarlığı ilə sahəsində öz sözünü deyir.",
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
      let data = await fetch("http://localhost:8000/blog/GalleryView/").then(
        (a) => a.json()
      );
      setIndustry(data);
    };
    getInfo();
  }, []);
  console.log(industry)
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch("http://localhost:8000/blog/NewsView/").then((a) =>
        a.json()
      );
      setBlogs(data);
    };
    getInfo();
  }, []);
  // console.log(blogs.map((a) => a));
  return (
    <>
      <Slider />
      <div className="container">
        <div className="navshops">
          <Swiper
            loop="true"
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay, Navigation]}
            navigation={true}
            slidesPerView={3}
          >
            {" "}
            {industry.map((a) => (
              <SwiperSlide>
                <div className="navshop">
                  <div className="navshop-image">
                    <img src={a.image} />
                  </div>
                  <div className="navshop-details">
                    <p>{a.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="organic">
        <div className="organic-image">
          <i className="fa-solid fa-industry"></i>
        </div>
        <div className="organic-text">
          <p>Biz Aparıcı Mühəndislik Sənayesiyik</p>
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
                  <p>{blog.name}</p>
                </div>
                <Link to={`/blogs/${blog.slug}`}>
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
