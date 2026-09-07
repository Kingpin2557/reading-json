const json = document.querySelector("#json");

function getSelectedFile() {
  const input = document.getElementById("json");
  input.addEventListener("change", (e) => console.log(e.target.files[0]));
}

function fetchData(data) {
  console.log(data);
}

function main() {
  const file = getSelectedFile();
  if (!file) return;

  fetchData(file);
}
main();
