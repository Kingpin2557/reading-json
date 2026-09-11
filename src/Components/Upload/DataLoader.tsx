import "./DataLoader.css";
type DataLoaderProp = {
  onFileSelect: (file: File) => void;
};

function DataLoader({ onFileSelect }: DataLoaderProp) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

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
