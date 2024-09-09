import { useState, useEffect } from "react";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";

export default function App() {
  const [scanResult, setScanResult] = useState("");
  const [show, setShow] = useState('none');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: "100%",
        height: "auto",
      },
      fps: 5,
    });


    scanner.render(success, error);

    function success(result) {
      /* scanner.clear(); */
      setScanResult((scanResult) => result);
      setShow(show=>'block')
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">QR-Code Scanner</h1>
      <div
        style={{
          maxWidth: "18rem",
          display: "block",
          margin: "auto",
        }}
        id="reader"
      ></div>
      <br />
      <div style={{display:show}}>
        <h3 className="text-center ">Results</h3>
        <a  href={scanResult}><h3 className="text-center">{scanResult}</h3></a>
      </div>
      <p style={{position:'relative',top:'100vh'}}>&#169;2024 Rojo's Ltd | All Rights Are Reserved</p>
    </div>
  );
}
