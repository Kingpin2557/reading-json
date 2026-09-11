import { type JSX } from "react";
import { useState, useEffect } from "react";

type MarkupProp = {
  file: Blob;
};

function recursionData(result: string): JSX.Element {
  return (
    <ul className="c-jsonviewer">
      {Object.entries(result).map(([key, value], index) => {
        const type = typeof value;
        switch (type) {
          case "object":
            if (value !== null) {
              console.log(`Nested Object Key: "${key}"`, value);

              const nestedHtml = recursionData(value);
              return (
                <li key={index} className="c-jsonviewer c-jsonviewer__item">
                  <strong className="c-jsonviewer c-jsonviewer--object">
                    {key}
                  </strong>
                  : {nestedHtml} ,
                </li>
              );
            }
            break;
          case "string":
          case "number":
          case "boolean":
            console.log(
              `${key} has a type of ${typeof key} with value: ${value}`,
            );
            return (
              <li key={index} className="c-jsonviewer c-jsonviewer__item">
                {key}:
                <span className={`c-jsonviewer c-jsonviewer--${type}`}>
                  {String(value)},
                </span>
              </li>
            );
          default:
            break;
        }
      })}
    </ul>
  );
}

function MarkupData({ file }: MarkupProp) {
  const [data, setData] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (!file) return;
    const fr = new FileReader();
    fr.readAsText(file);
    fr.addEventListener("load", () => {
      try {
        const parsedResult = JSON.parse(fr.result as string);
        const result = recursionData(parsedResult);
        setData(result);
      } catch (err) {
        console.error("Error parsing JSON:", err);
      }
    });
  }, [file]);
  return <>{data}</>;
}

export default MarkupData;
