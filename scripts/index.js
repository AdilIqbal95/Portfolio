let aboutLink = document.querySelector('#aboutLink');
let skillsLink = document.querySelector('#skillsLink');
let projectsLink = document.querySelector('#projectsLink');
let contactsLink = document.querySelector('#contactLink');

let about = document.querySelector('#About_me');
let Skills = document.querySelector('#Skills');
let Projects = document.querySelector('#Projects');
let Contact = document.querySelector('#Contact');

aboutLink.addEventListener('click', function () {
  about.scrollIntoView(true);
});

skillsLink.addEventListener('click', function () {
  Skills.scrollIntoView(true);
});

projectsLink.addEventListener('click', function () {
  Projects.scrollIntoView(true);
});

contactsLink.addEventListener('click', function () {
  Contact.scrollIntoView(true);
});

$(".slider").slick({
  centreMode: true,
  slidesToShow: 1
});
