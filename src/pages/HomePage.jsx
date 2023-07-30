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
        content:
          "Xidmətinin keyfiyyəti ilə sizlərin güvənini qazanan AzGP şirkəti öz təcrübəsi və peşəkarlığı ilə sahəsində öz sözünü deyir.",
      },
    ],
  };
  const [rated, setRated] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("https://admin.azgpen.com/contents").then((a) =>
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
      let data = await fetch("https://admin.azgpen.com/blog/GalleryView/").then(
        (a) => a.json()
      );
      setIndustry(data);
    };
    getInfo();
  }, []);
 
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch("https://admin.azgpen.com/blog/NewsView/").then((a) =>
        a.json()
      );
      setBlogs(data);
    };
    getInfo();
  }, []);

  return (
    <>
      <Slider />

      <div className="navshops">
        <div className="container">
          <Swiper
            breakpoints={{
              120: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
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

      <RatedBlog />
      <div className="container">
        <div className="heading">
          <h1>Tərəfdaşlar</h1>
        </div>
        <div className="navshops">
          <Swiper
            breakpoints={{
              120: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            loop="true"
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay, Navigation]}
            navigation={true}
            slidesPerView={3}
          >
            {" "}
            {blogs.map((blog) => (
              <SwiperSlide>
                {" "}
                <div className="navshopp">
                  <div className="navshopp-image">
                    <img src={blog.image} />
                  </div>
                  <div className="navshop-details">
                    <div className="navshop-toptext">
                      <p>{blog.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
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
