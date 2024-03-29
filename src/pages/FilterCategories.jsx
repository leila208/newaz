import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "../Components/Pagination";
import { connect } from "react-redux";
function FilterCategories(props) {
  const { slug } = useParams();
//blogs istifade etmisem
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`https://admin.azgpen.com/blog/NewsSingleView/${slug}`).then(
        (a) => a.json()
      );
      setProduct(data);

    };
    getData();
    
  }, []);
  return (
    <>
      <div className="k" key={product.id}>
        <p>{product.name}</p>
      </div>
      <div className="blogdetail">
        <div className="container">
          <div className="contentBlog">
            <div className="contentBlogİmage">
              <img src={product.image} />
            </div>
            <div className="contentBlogDetails">
              <h2 className="t-t">#{product.title}</h2>
              <p>{product.content}</p>
            </div>
          </div>
          <hr />
          <div className="aboutBloq">
            <p> {product.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
let t = (a) => a;
export default connect(t)(FilterCategories);
