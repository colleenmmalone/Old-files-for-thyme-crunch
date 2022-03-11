import React from "react";
import { Button } from "../buttons/Button";
import "./VideoSection.css";

export default function VideoSection() {
  return (
    <>
      <video src="videos/video.mp4" autoPlay loop muted></video>

      <div id="textOverlay">

        <center>

          <h1 id="vsH1">ThymeCrunch</h1>
          <p id="vsP">
            No Thyme for complicated recipes?
            <br />
            No worries; we'll make it easy!
          </p>

          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            btnID="vsBtn"
          >
            Thyme to Cook!
          </Button>

        </center>

      </div>

    </>
  );
}
