const json = document.querySelector("#json");

function getSelectedFile() {
  const input = document.getElementById("json");
  input.addEventListener("change", (e) => console.log(e.target.files[0]));
}

function main() {
  const file = getSelectedFile();
  if (!file) return;
  console.log("File picked:", file);
}
main();
