const cursorFollower = document.getElementById("cursorFollower");
const allTags = document.querySelectorAll("h1,h2,h3,h4,p,a,span");
const observingBoxes = document.querySelectorAll("#skillsBox");
const percentages = document.querySelectorAll(".percentage");
const percentageBars = document.querySelectorAll(".percentage_red_colunm");
const nav = document.getElementsByTagName("nav");
const navbar = document.getElementsByClassName("navbar");
const nav_links = document.getElementById("nav_links");
const nav_links_a = document.querySelector(".nav_links").querySelectorAll("a");
const nav_links_closeButton = document.querySelector(".nav_links_closeButton");
const modal = document.querySelector(".modal");
const projects = document.querySelectorAll(".project_wrapper");
const bars = document.querySelector(".bars");
const scrollToTop = document.getElementById("scrollToTop");

const modalData = [
  {
    id: "1",
    modalTitle: "Weather Application",
    project: "Portfolio project",
    startDate: "09/2021",
    endDate: "10/2021",
    texnologies: "HTML,CSS,JavaScript,React",
    link: "https://weather-app-em2.pages.dev/",
    projectImages: [
      "weather-app/weather-app.png",
      "weather-app/weather-app-2.png",
      "weather-app/weather-app-3.png",
      "weather-app/weather-app-4.png",
    ],
    modalContent:
      "Daily weather information for cities can be obtained through the application.The application features are as follows:",
    modalContentAddInfo: [
      "- The daily weather conditions of more than 200 cities around the world can be viewed.",
      "- Beautiful pictures of the searched city are displayed in the background.",
      "- The project was developed via React.",
    ],
  },

  {
    id: "2",
    modalTitle: "Online-shop Concept",
    project: "Portfolio project",
    startDate: "10/2021",
    endDate: "11/2021",
    texnologies: "HTML,CSS,JavaScript,React,Redux Toolkit",
    link: "https://github.com/shamilvasiyev/Shop-concept",
    projectImages: ["shop-concept/shop-concept.png"],
    modalContent: "Responsive, online shopping website developed with React.",
  },

  {
    id: "3",
    modalTitle: "Online Toy Store",
    project: "Website",
    startDate: "09/2022",
    endDate: "12/2022",
    texnologies: "HTML,CSS,JavaScript,React,Node.js,Express.js,MongoDB",
    link: "www.oyuncaqli.az",
    projectImages: [
      "oyuncaqli/oyuncaqli-1.png",
      "oyuncaqli/oyuncaqli-2.png",
      "oyuncaqli/oyuncaqli-3.png",
      "oyuncaqli/oyuncaqli-4.png",
    ],
    modalContent:
      "Website developed with the MERN stack for an online store that sells toys.",
    modalContentAddInfo: [
      "- A website developed for online toy sales.",
      "- Front-end side is developed with React.",
      "- Node js(Express.js) and Mongo DB(Mongoose) are used in the development of the back-end and database part.",
    ],
  },
];

// Navbar Scrolling animation

window.addEventListener(
  "scroll",
  () => {
    const scrollY = Math.round(this.scrollY);

    // observeBox(scrollY);

    scrollY > 0
      ? (scrollToTop.style.display = "flex")
      : (scrollToTop.style.display = "none");

    nav[0].classList.toggle("nav-scrolling", scrollY > 200);

    navbar[0].classList.toggle("navbar-scrolling", scrollY > 200);
  },
  false
);

// Cursor Pointer

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursorFollower.style.left = x + "px";
  cursorFollower.style.top = y + "px";
});

// Cursor pointer hover effect

allTags.forEach((p) => {
  p.addEventListener("mouseover", () => {
    cursorFollower.childNodes[1].classList.add("cursorFollower-body-hovered");
  });

  p.addEventListener("mouseleave", () => {
    cursorFollower.childNodes[1].classList.remove(
      "cursorFollower-body-hovered"
    );
  });
});

const typedText = new Typed("#dinamicTyping", {
  strings: [
    "love coding",
    "develop cool websites",
    "am eager to work on new challenging projects",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

//Open modal

projects.forEach((p) => {
  p.addEventListener("click", function () {
    const currentMOdalContent = modalData.find((md) => md.id === p.id);

    document.body.style.overflow = "hidden";
    modal.style.visibility = "visible";
    modal.style.opacity = 1;

    let html = `
      <div class="close_btn">
        <span>&times;</span>
      </div>
  
      <div class="modal_content">
        <div class="modal_carousel">
          ${currentMOdalContent.projectImages
            .map(
              (image) =>
                `<div class="modal_image_wrapper">
                <img src="images/${image}" alt=${currentMOdalContent.modalTitle}></img>
              </div>`
            )
            .join("<br/>")}

            <div class="modal_leftArrow arrow">
              <i class="fa-solid fa-chevron-left "></i>
            </div>

            <div class="modal_rightArrow arrow">
              <i class="fa-solid fa-chevron-right "></i>
            </div>
        </div>

        <div class="modal_description_box">
          <h1>${currentMOdalContent.modalTitle}</h1>

          <p class="modal_desciption">
            ${currentMOdalContent.modalContent}
          </p>

          <div class="modal_extra_info">
            ${
              currentMOdalContent.modalContentAddInfo
                ? currentMOdalContent.modalContentAddInfo
                    .map(
                      (info) =>
                        `<p>
                          ${info}
                        </p>`
                    )
                    .join("<br/>")
                : ""
            }
          </div>

          <div class="modal_info" style="color:#fff">
            <div class="modal_info_row">
              <div class="modal_info_iconWrapper">
                <i class="fa-solid fa-file-lines"></i>
              </div>

              <p>Project : <span class="strong">${
                currentMOdalContent.project
              }</span></p>
            </div>
           
            <div class="modal_info_row"></span>
              <div class="modal_info_iconWrapper">
                <i class="fa-regular fa-calendar"></i>
              </div>

              <p>Started Date : <span class="strong">${
                currentMOdalContent.startDate
              }</span></p>
            </div>

            <div class="modal_info_row">
              <div class="modal_info_iconWrapper">
                <i class="fa-regular fa-calendar-check"></i>
              </div>

              <p>End Date : <span class="strong">${
                currentMOdalContent.endDate
              }</span></p>
            </div>

            <div class="modal_info_row">
              <div class="modal_info_iconWrapper">
                <i class="fa-solid fa-code"></i>
              </div>

              <p>Texnologies : <span class="strong">${
                currentMOdalContent.texnologies
              }</span></p>
            </div>

            <div class="modal_info_row">
              <div class="modal_info_iconWrapper">
                <i class="fa-solid fa-link"></i>
              </div>

              <p>Preview : <a href="${
                currentMOdalContent.link
              }" target="_blanc" class="strong">${
      currentMOdalContent.link
    }</a></p>
            </div>
          </div>
        </div>
      </div>
  `;

    modal.innerHTML = html;

    modalOpenActions();

    closeModal();
  });
});

// Close Modal

const closeModal = () => {
  document.querySelector(".close_btn").addEventListener("click", () => {
    document.body.style.overflow = "auto";
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  });
};

// Smooth Scroll

for (let i = 0; i < nav_links_a.length; i++) {
  nav_links_a[i].addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();

  if (bars.clientHeight > 0) {
    closeBar();
  }

  const targetId = event.currentTarget.getAttribute("href");

  if (targetId.includes("#")) {
    window.scrollTo({
      top:
        targetId === "#" ? 0 : document.querySelector(targetId).offsetTop - 90,
      behavior: "smooth",
    });
  }
  window.open(targetId, "_self");
}

// Observer

const observerOptions = {
  threshold: 0.33,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) entry.target.classList.add("skillsBox-active");

    if (entry.isIntersecting) {
      percentages.forEach((percentage) => {
        const percentageText = percentage.textContent.trim();
        const value = percentageText.slice(0, 2);

        animateHandler(percentage, 0, value, 2500);
        barAnimationHandler(entry.isIntersecting);
      });

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const barAnimationHandler = (isIntersecting) => {
  const [first, second, third, last] = percentageBars;

  if (isIntersecting) {
    first.classList.add("html_css_colunm-active");
    second.classList.add("js_react_colunm-active");
    third.classList.add("js_react_colunm-active");
    last.classList.add("node_colunm--active");
  }
};

observingBoxes.forEach((box) => {
  observer.observe(box);
});

function animateHandler(obj, start, end, duration) {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);

    obj.innerText = `${Math.floor(progress * (end - start) + start)}%`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);

  obj.innerText = end;
}

// Mobile view menu open / close

bars.addEventListener("click", openBar);

function openBar() {
  nav_links.classList.add("nav_links-active");

  window.addEventListener("click", closeBarOutsideClick);
}

nav_links_closeButton.addEventListener("click", () => {
  closeBar();
});

function closeBarOutsideClick(e) {
  if (
    !e.target.classList.contains("bars") &&
    !e.target.classList.contains("fa-bars") &&
    e.target !== nav_links
  ) {
    closeBar();
  }
}

function closeBar() {
  nav_links.classList.remove("nav_links-active");
}

let slides;
let index;

function modalOpenActions() {
  slides = document.querySelectorAll(".modal_image_wrapper");
  const prevArrow = document.querySelectorAll(".arrow")[0];
  const nextArrow = document.querySelectorAll(".arrow")[1];
  index = 0 + 100 * slides.length;

  for (let i = 0; i < slides.length; i++) {
    const element = slides[i];
    element.style.transform = "translateX(" + 100 * i + "%)";
  }

  prevArrow.addEventListener("click", prevSlide);
  nextArrow.addEventListener("click", nextSlide);
}

function showSlides(index) {
  for (let i = 0; i < slides.length; i++) {
    const element = slides[i];

    element.style.transform =
      "translateX(" + 100 * (i - (index % slides.length)) + "%)";
  }
}

function prevSlide() {
  index--;

  showSlides(index);
}

function nextSlide() {
  index++;

  showSlides(index);
}

const message = prompt("Enter Message");
console.log(message);
