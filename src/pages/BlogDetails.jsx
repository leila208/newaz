import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RatedBlog from "./RatedBlog";
function BlogDetails() {
  const { slug } = useParams();
  //datani contentsden goturmusem

  const [content, setContent] = useState({});
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch(
        `https://admin.azgpen.com/blog/BlogSingleView/${slug}`
      ).then((a) => a.json());
      setContent(data);
    };
    getInfo();
  }, []);
  let a = content.created_at?.substring(0, 10);
  return (


    <section id="home1">
      <div id="home2">
        <p>{content.title}</p>
      </div>
      <div className="container">
        <div className="details-content">
          <p>{content.content}</p>
        </div>
        <div className="details-img over">
          <div className="absdate">
            <p id="tarix">{a}</p>
          </div>
          <div className="abscontainer">
            <div className="abscontent">
              <h1>{content.title}</h1>
            </div>
          </div>
          <img className="img" src={content.image} alt="" />
        </div>
        <div className="content-long">
          <p className="one">{content.longcontent}</p>
        </div>
        <div></div>

        <RatedBlog />
      </div>
    </section>
  );
}
export default BlogDetails;
