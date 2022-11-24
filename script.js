// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


       const burger = document.querySelector("#burger-menu");
        const ul = document.querySelector("nav ul");
        const nav = document.querySelector("nav");

       burger.addEventListener("click", () => {
           ul.classList.toggle("show");
          });


  // Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


<script src="https://smtpjs.com/v3/smtp.js"></script>
  
    const sendButton = document.getElementById('send-email');
    function sendEmail(event) {
      event.preventDefault();
      console.log("hello")
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "examlemailvv@gmail.com",
        Password: "23DA95962FFEBE24A42DDAB891A7D749E6AC",
        To: 'devilsuraj9641@gmail.com',
        From: "examlemailvv@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
      }).then(
        message => alert(message)
      );
    }
    sendButton.addEventListener('click', sendEmail);

  
