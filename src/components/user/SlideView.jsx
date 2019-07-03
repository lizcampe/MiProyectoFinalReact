import React from "react";
import Slider from "react-slick";
import perrito1 from "../../shared/media/perrito1.png";
import perrito2 from "../../shared/media/perrito2.png";
import perrito3 from "../../shared/media/perrito3.png";
import perrito4 from "../../shared/media/perrito4.png";
import storage from "../../utils/storage.utils";
// Components
import { Link } from "react-router-dom/";
//? Estilos
import "./slide.css";
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
class SlideView extends React.Component {
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
        <h2> Tus fotos</h2>
        <Slider {...settings}>
          <div>
            <h3>
              {" "}
              <Link to="/" onClick={() => storage.store("user", {})}>
                <img src={perrito1} />
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              {" "}
              <Link to="/" onClick={() => storage.store("user", {})}>
                <img src={perrito2} />
              </Link>{" "}
            </h3>
          </div>
          <div>
            <h3>
              {" "}
              <Link to="/" onClick={() => storage.store("user", {})}>
                <img src={perrito3} />
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              {" "}
              <Link to="/" onClick={() => storage.store("user", {})}>
                <img src={perrito4} />
              </Link>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
/*
      <Wrapper>
        <Slider speed={500} slidesToShow={3}>
          slidesToScroll={3}
          infinite={false}><Page>Primera página></Page>
          <Page>Segunda página></Page>
          <Page>Tercera página></Page>
        </Slider>
      </Wrapper>
    );
  }
}
*/
export default SlideView;
