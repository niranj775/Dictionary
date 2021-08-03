const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

async function fetchValue() {
  let value = document.querySelector("input").value;
  const apiUrl = url + value;
  let response = await fetch(apiUrl);
  let data = await response.json();
  let meaning = data[0].meanings[0].definitions[0].definition;

  let meanRow = document.createElement("div");
  meanRow.innerHTML = meaning;
  document.body.append(meanRow);
}
