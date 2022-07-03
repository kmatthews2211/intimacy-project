function topFunction() {
    window.scrollTo(0,0)
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//FORM

// const form  = document.getElementById('messageForm');

// const name = form.elements['name'];
// const email = form.elements['email'];
// const subject = form.elements['subject'];
// const message = form.elements['message'];

// let fullName = name.value;
// let emailAddress = email.value;
// let messageSubject = subject.value;
// let message = message.value;

// form.addEventListener('submit', (event) => {
//     // handle the form data
// });

// form.addEventListener('submit', (event) => {
//     // stop form submission
//     event.preventDefault();
// });

// form.submit ();
