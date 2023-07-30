import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function AboutUs() {
  //datani aboutdan goturmusem
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`https://admin.azgpen.com/blog/EmployeeView/`).then(
        (a) => a.json()
      );
      setAbout(data);
    };
    getData();
  }, []);
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`https://admin.azgpen.com/blog/EmployeeView/`).then(
        (a) => a.json()
      );
      setAbout(data);
    };
    getData();
  }, []);
  return (
    <>
      <section>
        <div className="k">
          <p>Haqqımızda</p>
        </div>
        <div className="container">
          <div className="content-long">
            <div className="titleone">
              <h1>Başlıq</h1>
            </div>
            <p className="one">
              loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut
            </p>
          </div>
        </div>
        <div className="our_artists">
          <div className="container">
            <h1>Komandamız</h1>
            <div className="artists">
              {about.map((a) => (
                <div className="artist">
                  <div
                    className="artistimg"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <img src={a?.image} />
                  </div>
                  <div className="artisttext">
                    <p>
                      {a?.first_name} {a?.last_name} / {a?.job_title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-flowers">
          <div className="about-flowers-details">
            <p className="bolder">Komandamız indi daha böyükdür.</p>
            <p className="pstyle">Sizlər üçün ən keyfiyyətli iş görürük.</p>
          </div>
        </div>
        <div className="friends">
          <div className="container">
            <div className="collobs">
              {partners.map((a) => (
                <div
                  className="collob"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img src={a.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="area">
          <div className="container">
            <div className="clients">
              <div className="client">
                <div className="client-image">
                  <i className="fa-regular fa-user-hair-long client-icon"></i>
                </div>
                <div className="client-text">
                  
                  <p>Müştəri</p>
                </div>
              </div>
              <div className="client">
                <div className="client-image">
                  <i className="fa-regular fa-manat-sign client-icon"></i>
                </div>
                <div className="client-text">
               
                  <p>Gəlir</p>
                </div>
              </div>
              <div className="client">
                <div className="client-image">
                  <i className="fa-regular fa-file-chart-column client-icon"></i>
                </div>
                <div className="client-text">
                 
                  <p>Proyekt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="terri">
          <div className="container">
            <div className="teams">
              <div className="team">
                <div className="team-image">
                  <i className="fa-regular fa-laptop-mobile client-icon" />
                </div>
                <div className="team-text">
                  <h1>Texniki Dəstək</h1>
                  <p>Müştərilərimizə tam texniki dəstək göstərilir</p>
                </div>
              </div>
              <div className="team">
                <div className="team-image">
                  <i className="fa-regular fa-file-certificate client-icon" />
                </div>
                <div className="team-text">
                  <h1>Sertifikat</h1>
                  <p>Tam sertifikatlaşdırılmış müəssisəmiz xidmətinizdədir</p>
                </div>
              </div>
              <div className="team">
                <div className="team-image">
                  <i className="fa-regular fa-seedling client-icon" />
                </div>
                <div className="team-text">
                  <h1>Təbii məhsullar</h1>
                  <p>Məhsullar heç bir canlıya zərər vermədən hazırlanır </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;
