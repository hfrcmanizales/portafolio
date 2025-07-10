import React,{useEffect,useState,useRef} from "react";
import {useModo} from "../context/modoOscuro"
import "../css/pages.css"






function TomarFoto(){

      const {modoDark,togleModoDark}=useModo()


   const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState(false);

    const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (error) {
      console.error("No se pudo acceder a la cámara:", error);
    }
  };

  const takePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, 640, 480);
        const imageData = canvas.toDataURL('image/png');
        setPhoto(imageData);
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
    }
  };


  
	return(
     <div className={modoDark?"dark-mode":"light-mode"}>
     	 <div className="container">
      <h2>Captura de Rostro</h2>

      {!photo && (
        <div>
          <video ref={videoRef} width="640" height="480" autoPlay playsInline />
          <br />
          <button onClick={takePhoto}>📸 Tomar Foto</button>
        </div>
      )}

      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        style={{ display: 'none' }}
      />

      {photo && (
        <div>
          <h3>Foto Capturada:</h3>
          <img src={photo} alt="Captura" />
          <br />
          <button onClick={() => setPhoto(null)}>📷 Tomar Otra</button>
        </div>
      )}
    </div>
     </div>
		)
}

export default TomarFoto;