import { useEffect, useState } from "react";

export function useRecursedData(file) {
  const [data, setData] = useState(null);
  function recursionData(data) {
    if (data === null) return;

    for (let key of Object.keys(data)) {
      switch (typeof data[key]) {
        case "object":
          recursionData(data[key]);
          break;
        default:
          break;
      }
    }
    setData(data);
  }

  useEffect(() => {
    if (!file) return;

    const fr = new FileReader();
    fr.readAsText(file);
    fr.addEventListener("load", () => {
      const data = JSON.parse(fr.result);
      recursionData(data);
    });
  });

  return data;
}
