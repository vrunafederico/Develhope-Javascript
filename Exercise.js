async function takeValue(){
  let id = 4;
  let todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  let json = await todo.json();
  return json;
}


async function checkbox(){
  try{
    let object = await takeValue();
    let h2 = document.createElement("h2");
    h2.innerHTML = object.title;
    document.body.appendChild(h2);
  
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    object.completed ? checkbox.checked = true : checkbox.checked = false; 
    document.body.appendChild(checkbox);
  }catch(err){
    console.err(err);
  }
}

checkbox();
