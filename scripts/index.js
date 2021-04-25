let aboutLink = document.querySelector('#aboutLink');
let skillsLink = document.querySelector('#skillsLink');
let projectsLink = document.querySelector('#projectsLink');

let about = document.querySelector('#About_me');
let Skills = document.querySelector('#Skills');
let Projects = document.querySelector('#Projects');

aboutLink.addEventListener('click', function () {
  about.scrollIntoView(true);
});

skillsLink.addEventListener('click', function () {
  Skills.scrollIntoView(true);
});

projectsLink.addEventListener('click', function () {
  Projects.scrollIntoView(true);
});

$(".slider").slick({
  centreMode: true,
  slidesToShow: 1
});
