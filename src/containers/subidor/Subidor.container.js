import React, { Component } from "react";
import Header2 from "../../shared/layout/HeaderSesion/Header2";
import axios from "axios";

/*
 class Subidor extends Component {
  state={
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.sestState({
      selectedFile: event.target.files[0]
  });
}

  fileUploadHandler()=>{
    axios.post('');
  }
  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Subir</button>
      </div>
    );
  }
} */

class Subidor extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-4">
          <form
            action=""
            id="uploadForm"
            method="POST"
            style="margin-top: 45px;"
          >
            <div class="input-group">
              <span class="input-group-btn">
                <span class="btn btn-primary btn-file">
                  Browse&hellip;{" "}
                  <input type="file" id="target">
                    {" "}
                  </input>
                </span>
              </span>
              <input type="text" class="form-control" readonly>
                {" "}
              </input>
            </div>
            <span class="help-block">Select the image to watermark</span>
            <div class="input-group">
              <span class="input-group-btn">
                <span
                  id="watermark-button"
                  type="button"
                  class="btn btn-primary btn-file"
                  disabled
                >
                  Browse&hellip;{" "}
                  <input type="file" id="watermark">
                    {" "}
                  </input>
                </span>
              </span>
              <input
                type="text"
                class="form-control"
                id="watermark-name"
                readonly
              >
                {" "}
              </input>
            </div>
            <span class="help-block">Select the watermark image</span>
            <div class="input-group">
              <h3>Position</h3>
              <div class="row">
                <div class="col-xs-6">
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="lowerRight"
                        checked
                        disabled
                      >
                        {" "}
                      </input>
                      Lower Right
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="lowerLeft"
                        disabled
                      >
                        {" "}
                      </input>
                      Lower Left
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="upperRight"
                        disabled
                      >
                        {" "}
                      </input>
                      Upper Right
                    </label>
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="upperLeft"
                        disabled
                      >
                        {" "}
                      </input>{" "}
                      Upper Left
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="center"
                        disabled
                      />
                      Center
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Subidor;
