// ****************  Toggle Navbar ******************

let menu_icon = document.getElementById("menu_icon");
let navbar = document.querySelector(".navbar");

menu_icon.onclick = () =>{
    menu_icon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}

// ****************  active menu on scroll  ******************

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

function activeMenu(){
    let len = sections.length;
    while(--len && window.scrollY + 97 < sections[len].offsetTop){}
    navlinks.forEach(sec => sec.classList.remove("active"));
    navlinks[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);



//**********************   scroll revel*********** */

ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 150,
    reset:true,
});

ScrollReveal().reveal('.home_content , .heading', { origin:"top" });
ScrollReveal().reveal('#Message', { origin:"bottom" });
ScrollReveal().reveal('.home_img ,.services_box, .project1', { origin:"buttom" });
ScrollReveal().reveal('.home_content h1, .about_img, #name, #mobile_number', { origin:"left" });
ScrollReveal().reveal('.home_content p, .about_content, #email, #email_subject', { origin:"right" });

ScrollReveal().reveal('.project2', { origin:"buttom",delay:"250",distance: "110px"});
ScrollReveal().reveal('.project3', { origin:"buttom",delay:"350",distance: "130px" });
ScrollReveal().reveal('.project4', { origin:"buttom",delay:"450",distance: "150px" });


//*******************   Typing effect ************ */

const typed = new Typed(".skills_typping",{
    strings: ["Frontend Developer","Web Designer","Software Developer"],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
})

let send_message_button = document.getElementById("send_message_button");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const mobile_number = document.getElementById("mobile_number");
const email_subject = document.getElementById("email_subject");
const message = document.getElementById("Message");

const form = document.querySelector("form");

function sendEmail(){ 
    Email.send({
        SecureToken : "6db66f63-5680-4fce-bd72-f67bce5cfba5",
        To : "yroshan504@gmail.com",
        From : "yroshan504@gmail.com",
        Subject : email_subject.value,
        Body : "Name : " + Name.value + "<br>Email : " + email.value
                + "<br>Mobile No. : " + mobile_number.value + "<br>Message : " + message.value,
    }).then(
      window.alert("Message sent successfully")
    );
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    sendEmail();
})