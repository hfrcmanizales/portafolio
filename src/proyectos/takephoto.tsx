import React,{useEffect,useState,useRef} from "react";
import {useModo} from "../context/modoOscuro"
import "../css/pages.css"



function TakePhoto() {

    const {modoDark,togleModoDark}=useModo()


  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [foto, setFoto] = useState<string | null>(null);

  const encenderCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      alert("Ocurrió un error al intentar acceder a la cámara.");
      console.error("No se pudo encender la cámara:", error);
    }
  };

  const apagarCamara = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;

      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  const tomarFoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");
      if (!context) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL("image/png");
      setFoto(dataUrl);
    }
  };

  return (
    <div className={modoDark?"dark-mode":"light-mode"}>
      <h2>Cámara de video</h2>
      <div>
        <div>
          <video ref={videoRef} autoPlay style={{ width: "100%", maxWidth: "600px" }} />
        </div>
        <div>
          <button onClick={encenderCamara}>Encender</button>
          <button onClick={apagarCamara} style={{ marginLeft: 10 }}>Apagar</button>
          <button onClick={tomarFoto} style={{ marginLeft: 10 }}>Tomar foto</button>
        </div>
        <div>
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
        <div>
          <h3>Foto</h3>
          {foto && (
            <div style={{ marginTop: "20px" }}>
              <img src={foto} alt="foto" style={{ maxWidth: "100%" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TakePhoto;



  



  