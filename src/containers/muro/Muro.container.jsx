import React from "react";
import GalleryImage from "../gallery/GalleryImage";
import GalleryModal from "../gallery/GalleryModal";

class Muro extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      showModal: false,
      url: ""
    };
  }
  render() {
    return (
      <div
        refs="gallery-container"
        className="container-fluid gallery-container"
      >
        <div className="row">
          {this.props.data.map((url, index) => {
            return (
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="gallery-card">
                  <GalleryImage
                    className="gallery-thumbnail"
                    src={url}
                    alt={"Img number" + (index + 1)}
                    key={index}
                  />
                  <span
                    className="card-icon-open fa fa-expand"
                    onClick={e => this.openModal(url)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <GalleryModal
          isOpen={this.props.showModal}
          src={this.props.url}
          closeModal={this.closeModal}
          imgUrls={this.props.data}
        />
      </div>
    );
  }

  openModal = url => {
    this.setState({
      showModal: true,
      url: url
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      url: ""
    });
  };
}

export default Muro;
