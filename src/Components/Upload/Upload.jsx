import { useState, useEffect } from "react";

import "./Upload.css";

function DataLoader() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    if (!file) return;

    const fr = new FileReader();

    fr.readAsText(file);

    fr.addEventListener("load", () => {
      const data = JSON.parse(fr.result);

      for (let key of Object.keys(data)) {
        console.log(typeof data[key]);
      }
    });
  }, [file]);

  return (
    <div className="c-jsonfile">
      <label htmlFor="json">Upload your json file</label>
      <input
        id="json"
        name="json"
        type="file"
        accept=".json"
        hidden
        onChange={handleFileChange}
      />
    </div>
  );
}

export default DataLoader;
