import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import Prediction from "./Prediction";

const Detection = () => {
  const [model, setModel] = useState(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [predictions, setPredictions] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const newModel = await cocoSsd.load({ base: "lite_mobilenet_v2" });
      setModel(newModel);
    };
    loadModel().then(setIsModelLoaded(true));
  }, []);

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
  };

  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
      setImageSrc(webcamRef.current.getScreenshot());
    }, [webcamRef]);

    return (
      <>
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
          id={"webcamFeed"}
        />
        <br />
        <Button onClick={capture}>Capture photo</Button>
      </>
    );
  };

  return (
    <React.Fragment>
      <Typography>
        {!isModelLoaded ? "Loading Model... ⌛" : "Model Loaded! ✅"}
      </Typography>
      <WebcamCapture />
      <Button
        onClick={() =>
          model
            .detect(document.getElementById("webcamFeed"))
            .then(predictions => {
              setPredictions(predictions);
            })
        }
      >
        Predict
      </Button>
      <Prediction imageSrc={imageSrc} predictions={predictions} />
    </React.Fragment>
  );
};

export default Detection;
