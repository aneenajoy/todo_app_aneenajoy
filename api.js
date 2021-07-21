function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
      })
      .then((data) => {
        const html = data
          .map((todos) => {
            return `
              <tr>
                  <td>
                  <center>
                  <input type="checkbox" name="check" onclick="return counter()" ${todos.completed ? "checked" : ""}  ${todos.completed ? "disabled" : ""}>
                  </center>
                  </td>
                  <td class="${todos.completed? "task-done" : ""}" id="title">${todos.title}</td>
              <tr>`;
          })
          .join("");
  
        document.querySelector("#todos").insertAdjacentHTML("afterbegin", html);
  
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function ajax(){
    var tablehead = document.getElementById("tablehead");
    fetchData();
    tablehead1.style.visibility="visible";
    tablehead2.style.visibility="visible";
    
}


function counter(){               
  var a= document.getElementsByName('check');
  var i= 0;
  var j=0;
  var count;
  for(count=0; count<a.length; count++){
  if(a[count].checked==true){
  i= i+1;
  j=i-90;
  }
  }

  var promise=new Promise(function(resolve,reject){
    if(j==5){
      resolve("Congrats!! You have completed 5 tasks");
    }
    else{
      reject();
    }
  });

  promise
  .then(function(s){
    alert(s);
    location.reload();
  });
}
  
  