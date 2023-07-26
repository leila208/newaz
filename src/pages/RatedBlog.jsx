import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function RatedBlog() {
  //datani contentsden goturmusem bu umumisidi
  const [rated, setRated] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://localhost:8000/blog/BlogView/").then((a) =>
        a.json()
      );

      setRated(data);
    };
    getData();
  }, []);
  console.log(rated)
  console.log('22222222')
  
  return (
    <>
      <div className="ratedblog">
        <div className="container">
          <div className="heading">
            <h1>Ən çox oxunanlar</h1>
          </div>
          <div className="rateblogs">
            {rated.results?.slice(0, 3).map((a) => (
              <div
                className="rateblog"
                // data-aos="fade-up"
                // data-aos-duration="3000"
              >
                <div className="rateblog-img">
                  <img src={a.image} />
                </div>
                <div className="rated-details">
                  <div className="rated-icons">
                    <i className="fa-solid fa-right-long " id="brown"></i>
                    <ul>
                      <li>
                        <i className="fa-brands fa-facebook-f"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-twitter"></i>
                      </li>
                    </ul>
                  </div>

                  <p className="rated-h1 pcontent" id="brown">
                    {a.name}
                  </p>
                  <Link to={`/blogdetails/${a.slug}`} key={a.slug}>
                    Daha ətraflı<i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default RatedBlog;
