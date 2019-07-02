import React from "react";
import Slider from "react-slick";
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
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
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
