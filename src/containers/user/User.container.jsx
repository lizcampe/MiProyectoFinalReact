import React, { Component } from "react";
import Perfil from "../../shared/media/Profile.jpg";
import SlideView from "../../components/user/SlideView";
//!Interacción con el api
import { getData } from "../../api/users.api";

//? Estilos
import "./user.css";

class UserContainer extends Component {
  state = {
    name: "Liz",
    email: "lizcampe@gmail.com",
    descripcion: "Me gustan los perritos",
    url_img: Perfil
  };

  // *este método se ejecuta cuando mi componente se renderiza por primera vez
  async componentDidMount() {
    const userData = await getData();
    this.setState({
      name: userData.name,
      email: userData.email
    });
    console.log(userData);
  }
  render() {
    return (
      <div>
        <div className="user-container">
          <div className="user-img">
            <img src={this.state.url_img} alt="Imagen de perfil" />
          </div>

          <div className="user-info">
            <strong> Sección de perfil</strong>
            <p> {this.state.name}</p>
            <p>{this.state.email}</p>
            <p> {this.state.descripcion} </p>
          </div>
        </div>
        <SlideView />
      </div>
    );
  }
}

/*
var carousel = React.createClass({
  render: function() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}); */
export default UserContainer;
