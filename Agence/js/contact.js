function get_contact(){

    // To set name
    var myname = document.getElementById("fname").value;
    var myemail = document.getElementById("eemail").value;
    var mysujet = document.getElementById("ssujet").value;
    var mymessage = document.getElementById("message").value;

    document.getElementById("ModalContact").innerHTML = "<p>Name : "+ myname+ "</p>"+"<p>Email: "+myemail+"</p>"+"<p>Sujet : "+ mysujet + "</p>"+"<p>Message: "+mymessage+"<br></p>"+"<p>votre message a ete beine envoie</p>";


    //  To display name

}

let modal = document.querySelector(".modal");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

show.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);