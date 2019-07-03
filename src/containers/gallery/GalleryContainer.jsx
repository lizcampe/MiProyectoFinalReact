import React from "react";
import Slider from "react-slick";
import imagen5 from "../../shared/media/imagen5.png";
import imagen6 from "../../shared/media/imagen6.png";
import imagen1 from "../../shared/media/imagen1.png";
import imagen2 from "../../shared/media/imagen2.png";
import imagen3 from "../../shared/media/imagen3.png";
import imagen4 from "../../shared/media/imagen4.png";
import amarillo from "../../shared/media/amarillo.png";
import circuito from "../../shared/media/circuito.png";
import cascada from "../../shared/media/cascada.png";
import bosque from "../../shared/media/bosque.png";
import mar from "../../shared/media/mar.png";
import reballon from "../../shared/media/reballon.png";

// Components
//? Estilos
import "./gallery.css";
/*import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
/*import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;
const Page = styled.div`
  width: 100%;
`;
*/
class GalleryContainer extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div>
        <h2> Fotos de otros usuarios</h2>
        <Slider {...settings}>
          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <h3>
              {" "}
              <img src={imagen1} class="img-responsive" />
            </h3>
          </div>
          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <h3>
              {" "}
              <img src={imagen2} class="img-responsive" />
            </h3>
          </div>
          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <h3>
              {" "}
              <img src={imagen3} class="img-responsive" />
            </h3>
          </div>
          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <h3>
              {" "}
              <img src={imagen4} class="img-responsive" />
            </h3>
          </div>
          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <h3 class="foto">
              {" "}
              <img src={imagen5} class="img-responsive" />
            </h3>
          </div>
          <div>
            <h3 class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
              {" "}
              <img src={imagen6} class="img-responsive" />
            </h3>
          </div>
          <div>
            <h3 class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
              {" "}
              <img src={amarillo} class="img-responsive" />
            </h3>
          </div>
          <div>
            <h3 class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
              {" "}
              <img src={mar} class="img-responsive" />
            </h3>
          </div>
          <div>
            <h3 class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
              {" "}
              <img src={bosque} class="img-responsive" />
            </h3>
          </div>
          <div>
            <h3 class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
              {" "}
              <img src={reballon} class="img-responsive" />
            </h3>
          </div>
          <div>
            <h3 class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
              {" "}
              <img src={cascada} class="img-responsive" />
            </h3>
          </div>
          <div>
            <h3 class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
              {" "}
              <img src={circuito} class="img-responsive" />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default GalleryContainer;
