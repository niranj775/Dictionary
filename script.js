const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

async function fetchValue() {
  let value = document.querySelector("input").value;
  const apiUrl = url + value;
  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data);
  let ans = [];
  data[0].meanings[0].definitions.forEach((ele) => ans.push(ele.definition));
  console.log(ans);

  let input = document.querySelector("input");
  input.value = "";

  let meaning = document.getElementById("meaning");
  meaning.innerHTML = "";

  ans.forEach((ele) => {
    let meanRow = document.createElement("li");
    meanRow.innerHTML = ele;

    let newRow = document.getElementById("meaning");
    newRow.append(meanRow);
  });
}
