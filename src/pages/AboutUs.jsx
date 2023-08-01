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
          <div className="content-longg">
            <div className="titleone">
              <h1>Haqqımızda</h1>
            </div>
            <p className="one">
              AzGP şirkəti artıq 2020-ci ildən fəaliyyətə başlayıb və artıq
              illərdiki öz müştərilərinə yüksək keyfiyyətlə xidmət edir. Biz
              Geofizika, Qrunt Suları və Ətraf Mühit Xidmətlərində aparıcı elm
              və təcrübə ilə problemləri həll edirik. Məqsədimiz müştərilərimiz
              üçün gördüyümüz işin keyfiyyətini qorumaq və ən yeni
              texnologiyalarla hər zaman xidmətinizdə olmaqdır.
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
                    <p className="Ayxaninadi">
                      {a?.first_name} {a?.last_name} / {a?.job_title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content-longg">
            <div className="titleone">
              <h1>Gördüyümüz işlər</h1>
            </div>
            <p id="services" className="one">
 
• Mədən kəşfiyyatı (Au-Ag-Cu porfir
depozitlər), Gədəbəy, Azərbaycan 2020-2022 <br/>
• Mədən kəşfiyyatı (Au-Ag-Cu porfir
əmanətlər), Zəfər, Azərbaycan 2020-2022 <br/>
• Mədən Kəşfiyyatı (Pb-Zn-Au
mineralizasiya), Həftsavaran, İran 2021-2022 <br/>
• Mədən Kəşfiyyatı (Qızıl
Minerallaşdırma), Esfahan, İran 2020-2021 <br/>
• Mədən Kəşfiyyatı (Pb-Zn-Au minerallaşması),
Kohandan, İran 2021 <br/>
• Mədən Kəşfiyyatı (Pb-Zn-Au minerallaşması),
Besri, İran 2021 <br/>
• Mədən Kəşfiyyatı (Au, Ag və Cu
minerallaşma), Cənubi Xorasan, İran 2021 <br/>
• Mədən Kəşfiyyatı (porfir və epitermal
polimetal yataqları), Sistan və Bəlucistan,
İran 2021 <br/>
• Mədən Kəşfiyyatı (porfir Au-Cu yatağı),
Zərgan çayı sahəsi 2020.
            </p>
          </div>
        </div>
        <div className="about-flowers">
          <div className="about-flowers-details">
            <p className="bolder">Komandamız indi daha böyükdür.</p>

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
