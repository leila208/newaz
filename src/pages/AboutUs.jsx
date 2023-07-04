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
      let data = await fetch(`http://localhost:7700/contents`).then((a) =>
        a.json()
      );
      setAbout(data);
    };
    getData();
  }, []);
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`http://localhost:8000/blog/PartnerView/`).then(
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
        {/* <div className="us">
          <div className="container">
            <div className="us-details">
              <div className="us-text">
                <h1>
                  Müştərilərin <i className="orange">AZGP</i> haqqında fikirləri
                </h1>
                <p className="pcontent">
                  Siz də müştərilərimiz sırasına daxil olun
                </p>
                <i className="fa-solid fa-right-long" />
              </div>
              <div className="us-swiper">
                <Swiper
                  loop="true"
                  // autoplay={{
                  //   delay: 1500,
                  // }}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  // navigation={true}
                  modules={[Autoplay, Navigation, Pagination]}
                  slidesPerView={1}
                  className="swiper-about"
                >
                  <SwiperSlide>
                    <div className="us-right-text">
                      <div className="us-up-text">
                        <p>
                          Buradan alış-veriş etdiyimə görə çox məmnunam.Hər kəsə
                          buradan alış-veriş etməyi tövsiyə edirəm.Məhsullar çox
                          keyfiyyətlidir və qiymətlər çox sərfəlidir.Məhsullar
                          təbiətə heç bir zərər vermədən hazırlanır və tamamilə
                          orqanikdir.Ən əsası isə komanda çox gülərüzdür və daim
                          müştəri ilə maraqlanırlar.
                        </p>
                      </div>
                      <div className="us-bottom-text">
                        <div className="us-image">
                          <img src="https://shtheme.org/demosd/betty/wp-content/uploads/2022/02/t1.png" />
                        </div>
                        <div className="us-bottom">
                          <p className="pcontent">Nuray İsgəndərli</p>
                          <p>müştəri</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="us-right-text">
                      <div className="us-up-text">
                        <p>
                          Buradan alış-veriş etdiyimə görə çox məmnunam.Hər kəsə
                          buradan alış-veriş etməyi tövsiyə edirəm.Məhsullar çox
                          keyfiyyətlidir və qiymətlər çox sərfəlidir.Məhsullar
                          təbiətə heç bir zərər vermədən hazırlanır və tamamilə
                          orqanikdir.Ən əsası isə komanda çox gülərüzdür və daim
                          müştəri ilə maraqlanırlar.
                        </p>
                      </div>
                      <div className="us-bottom-text">
                        <div className="us-image">
                          <img src="https://shtheme.org/demosd/betty/wp-content/uploads/2022/02/t3.png" />
                        </div>
                        <div className="us-bottom">
                          <p className="pcontent">Aysu Əhmədli</p>
                          <p>müştəri</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="us-right-text">
                      <div className="us-up-text">
                        <p>
                          Buradan alış-veriş etdiyimə görə çox məmnunam.Hər kəsə
                          buradan alış-veriş etməyi tövsiyə edirəm.Məhsullar çox
                          keyfiyyətlidir və qiymətlər çox sərfəlidir.Məhsullar
                          təbiətə heç bir zərər vermədən hazırlanır və tamamilə
                          orqanikdir.Ən əsası isə komanda çox gülərüzdür və daim
                          müştəri ilə maraqlanırlar.
                        </p>
                      </div>
                      <div className="us-bottom-text">
                        <div className="us-image">
                          <img src="https://avenue-sandbox.mybigcommerce.com/product_images/uploaded_images/newsletter-right.jpg" />
                        </div>
                        <div className="us-bottom">
                          <p className="pcontent">Aysu Əhmədli</p>
                          <p>müştəri</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div> */}
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
                  <CountUp end={500} start={0} duration={6.75} separator=" " />
                  <p>Müştəri</p>
                </div>
              </div>
              <div className="client">
                <div className="client-image">
                  <i className="fa-regular fa-manat-sign client-icon"></i>
                </div>
                <div className="client-text">
                  <CountUp
                    end={15}
                    start={0}
                    duration={6.75}
                    separator=" "
                    decimals={3}
                    decimal=","
                  />
                  <p>Gəlir</p>
                </div>
              </div>
              <div className="client">
                <div className="client-image">
                  <i className="fa-regular fa-file-chart-column client-icon"></i>
                </div>
                <div className="client-text">
                  <CountUp end={250} start={0} duration={6.75} separator=" " />
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
