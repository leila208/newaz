import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
function Product({ product, dispatch, basket, fav }) {
  return (
    <>
      <div className="sambal" data-aos="fade-up" data-aos-duration="3000">
        <Link to={`/details/${product.id}`}>
          <div className="sambal-image">
            <img src={product.image} />
          </div>
        </Link>
      </div>
    </>
  );
}
let t = (a) => a;
export default connect(t)(Product);
