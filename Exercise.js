
function sendData(){
  let text = document.getElementById('title');
  let checkbox = document.getElementById('checkbox');
  let button = document.getElementById('button');
  
  button.addEventListener("click", async () =>{
    const rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: text.value, Flag: checkbox.checked})
    });
    const content = await rawResponse.json();
    console.log(content);
  })  
}

window.onload = sendData();
