import { useEffect, useRef, useState } from "react";
import "./App.css";
import { uploadFile } from "./services/api";

function App() {
  const fileInputRef = useRef();

  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const copyText = document.createElement('textarea');
    copyText.value = {result}; // Replace with your content or link
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand('copy');
    document.body.removeChild(copyText);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500); // Reset the "Copied!" message after 1.5 seconds
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <img src="/assets/download.png" alt="share" />
      <div className="wrapper">
        <h1>Wafa's File Sharing </h1>
        <h3>Upload and share the download link</h3>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />

        <div className="download">
          <a href={result} target="_blank">
            {result}
          </a>
          <button 
           onClick={handleCopy}
           style={{ cursor: 'pointer', textDecoration: 'underline' }}>   {isCopied ? 'Copied!' : 'Copy'} </button>
        </div>
      </div>
    </div>
  );
}

export default App;
