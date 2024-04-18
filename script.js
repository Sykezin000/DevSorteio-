function generateNumber(){


const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)

 const result = Math.floor(Math.random() * (max - min + 1)) + min;

 

showAlert(result)


}


function showAlert(message) {
    document.getElementById("alert-message").textContent = message;
    document.getElementById("custom-alert").style.display = "block";
  }
  
  document.getElementById("alert-button").addEventListener("click", function() {
    document.getElementById("custom-alert").style.display = "none";
  
    function function1() {
        console.log("Função 1");
      }
    
      function function2() {
        console.log("Função 2");
      }
    
      const button = document.getElementById("myButton");
      button.addEventListener("click", function1);
      button.addEventListener("click", function2);

     // showAlert()

});
  

 