import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function BlogDetails() {
  const { slug } = useParams();
  //datani contentsden goturmusem
  const [content, setContent] = useState({});
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch(
        `http://127.0.0.1:8000/BlogSingleView/${slug}`
      ).then((a) => a.json());
      setContent(data);
    };
    getInfo();
  }, []);
  // console.log(slug)
  console.log(content, "bizim data");
  return (
    <section>
      <div className="blogdetail">
        <div className="container">
          <div className="content">
            <div className="content-image">
              <img src={content?.image} />
            </div>
            <div className="content-details">
              <h2 className="t-t">#{content?.title}</h2>
              <hr />
              <p className="pcontent">{content?.content}</p>
              <p className="italic"> ({content?.content?.length}söz)</p>
            </div>
            <h2 className="t-t">#Tövsiyə</h2>
            <hr />
            <p className="pcontent">
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem
            </p>
          </div>
        </div>
      </div>
      <div className="container sh">
        <h1>Bloqu paylaş</h1>
        <div className="share-icons">
          <div className="share-icon">
            <i className="fa-brands fa-pinterest share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-twitter share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-facebook share"></i>
          </div>
          <div className="share-icon">
            <i className="fa-brands fa-instagram share"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogDetails;
