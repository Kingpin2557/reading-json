import "./Upload.css";

function DataLoader() {
  return (
    <div className="c-jsonfile">
      <label htmlFor="json">Upload your json file</label>
      <input id="json" name="json" type="file" accept=".json" hidden />
    </div>
  );
}

export default DataLoader;
