import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function BlogDetails() {
  const { slug } = useParams();
  //datani contentsden goturmusem
  const [content, setContent] = useState({});
  useEffect(() => {
    const getInfo = async () => {
      let data = await fetch(
        `http://127.0.0.1:8000/blog/BlogSingleView/${slug}`
      ).then((a) => a.json());
      setContent(data);
    };
    getInfo();
  }, []);
  console.log(slug)
  console.log(content, "bizim data");
  let a = content.created_at?.substring(0,10)
  return (
  // (
    // <section>
    //   <div className="blogdetail">
    //     <div className="container">
    //       <div className="content">
    //         <div className="content-image">
    //           <img src={content?.image} />
    //         </div>
    //         <div className="content-details">
    //           <h2 className="t-t">#{content?.title}</h2>
    //           <hr />
    //           <p className="pcontent">{content?.content}</p>
    //           <p className="italic"> ({content?.content?.length}söz)</p>
    //         </div>
    //         <h2 className="t-t">#Tövsiyə</h2>
    //         <hr />
    //         <p className="pcontent">
    //           lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    //           lorem
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container sh">
    //     <h1>Bloqu paylaş</h1>
    //     <div className="share-icons">
    //       <div className="share-icon">
    //         <i className="fa-brands fa-pinterest share"></i>
    //       </div>
    //       <div className="share-icon">
    //         <i className="fa-brands fa-twitter share"></i>
    //       </div>
    //       <div className="share-icon">
    //         <i className="fa-brands fa-facebook share"></i>
    //       </div>
    //       <div className="share-icon">
    //         <i className="fa-brands fa-instagram share"></i>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  // );
  
  
  <section id="home1">
      <div id="home2"></div>
      <div className="details-content">
        <h1>{content.title}</h1>
        <p>{content.content}</p>
      </div>
      <div className="details-img">
        <img src={content.image} alt="" />
      </div>
      <div className="content-long">
      <p className="one">{content.longcontent}</p>
      <p id='tarix'>{a}</p>
      </div>
  </section>
  
  );
}
export default BlogDetails;
