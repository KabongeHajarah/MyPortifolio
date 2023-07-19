
var sidemenu =document.getElementById("side-menu");
function openmenu() {
    sidemenu.style.right="0";
}
function closemenu() {
    sidemenu.style.right="-200px";
}






const scriptURL = 'https://script.google.com/macros/s/AKfycbzPsaMMIi_vHbGvIP2854C-fInzOkDGZ5bi7CIfpFM_PWTBZUmjEUWlnjsULn-h93jeVg/exec'
const form = document.forms['submit-to-google-sheet']
const span=document.getElementById("span")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
     span.innerHTML="Message sent successfully"
    setTimeout(function(){
        span.innerHTML=""
     ,5000})
    form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})