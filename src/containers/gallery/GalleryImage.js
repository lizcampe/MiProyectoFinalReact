import React, { Component } from "react";

class GalleryImage extends Component {
  render() {
    return (
      <img
        className={this.props.className}
        alt={this.props.alt}
        src={this.props.src}
      />
    );
  }
}

export default GalleryImage;
