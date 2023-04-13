window.onscroll = function() {stickyHeaderJS()};
window.onload = function() {showProjects()};

function stickyHeaderJS() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".main-nav-menu").classList.add("scrolled");
  } else {
    document.querySelector(".main-nav-menu").classList.remove("scrolled");
  }
}

const showProjects = () => {
  var projectContainer = document.getElementById("my-projects-container");
  var projectsList = [
    {
      projectTitle: "My Favorite Anime List",
      projectIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      srcImage: "assets/project-images/project-1.png"
    },
    {
      projectTitle: "My FreeCodeCamp Survey Form",
      projectIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      srcImage: "assets/project-images/project-2.png"
    },
    {
      projectTitle: "My Password Generator",
      projectIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      srcImage: "assets/project-images/project-3.png"
    }
  ];

  var projects = ``;

  projectsList.forEach(element => {
    projects += `
      <div class="single-project-container">
        <a href="#">
          <img src="${element.srcImage}" />
          <h4 class="project-title">${element.projectTitle}</h4>
          <h5 class="project-intro">${element.projectIntro}</h5>
        </a>
      </div>
    `;
  });

  projectContainer.innerHTML = projects;
}