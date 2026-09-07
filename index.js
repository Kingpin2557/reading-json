const json = document.querySelector("#json");
const preview = document.querySelector(".c-jsoncontainer");

json.addEventListener("change", () => {
  const fr = new FileReader();

  fr.readAsText(json.files[0]);

  fr.addEventListener("load", () => {
    const data = JSON.parse(fr.result);

    for (let key of Object.keys(data)) {
      console.log(typeof data[key]);
    }
  });
});
