async function Responce(){
  let val = await fetch("https://jsonplaceholder.typicode.com/todos");
  let json = await val.json();
  json.forEach(element => {
      let ul = document.querySelector("ul");
      let li = document.createElement("li")
      li.innerText = element.title;
      ul.appendChild(li);
  });
}

Responce();