import "./App.css";
import { useState } from "react";
import DataLoader from "./Components/Upload/DataLoader";
import MarkupData from "./Components/MarkupData/MarkupData";

function App() {
  const [file, setFile] = useState(null);

  return (
    <>
      <main>
        <DataLoader onFileSelect={(selectedFile) => setFile(selectedFile)} />

        <section className="c-jsoncontainer">
          {file ? (
            <MarkupData file={file} />
          ) : (
            <p>Upload a JSON file to view its content.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
