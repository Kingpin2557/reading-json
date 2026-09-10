import "./App.css";
import { useState } from "react";
import DataLoader from "./Components/Upload/Upload";
import { useRecursedData } from "./hooks/useRecursedData";

function App() {
  const [file, setFile] = useState(null);
  const data = useRecursedData(file);

  console.log(data);
  return (
    <>
      <main>
        <DataLoader onFileSelect={(selectedFile) => setFile(selectedFile)} />

        <section className="c-jsoncontainer">
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Upload a JSON file to view its content.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
