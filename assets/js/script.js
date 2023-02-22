"use strict";

/**
 * PRELOAD
 *
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navbarLink = document.getElementById("navbar-items");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
  document.querySelector("[data-back-top-btn]").classList.remove("active");
};

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);
navbarLink.addEventListener("click", closeNavbar);

/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
};

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
};

window.addEventListener("load", autoSlide);

/**
 * MENU
 */

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./assets/images/menu-1.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./assets/images/menu-2.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "drinks",
    price: 6.99,
    img: "./assets/images/menu-3.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./assets/images/menu-4.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./assets/images/menu-5.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "drinks",
    price: 18.99,
    img: "./assets/images/menu-6.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./assets/images/menu-5.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./assets/images/menu-5.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "drinks",
    price: 16.99,
    img: "./assets/images/menu-5.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./assets/images/menu-5.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
  {
    id: 11,
    title: "Chicken Wings",
    category: "dinner",
    price: 19.99,
    img: "./assets/images/menu-5.png",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo adipisci repudianda.`,
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayCategoryItems();
});

const sectionElement = document.querySelector(".menu .grid-list");
const categoryElement = document.querySelector(".btn-container");

function displayMenuItems(menuList) {
  let sectionContent = "";

  // map ile ?
  menuList.forEach((item) => {
    sectionContent += `<li>
      <div class="menu-card hover:card">
        <figure
          class="card-banner img-holder"
          style="--width: 100; --height: 100"
        >
          <img
            src=${item.img}
            width="100"
            height="100"
            loading="lazy"
            alt=${item.title}
            class="img-cover"
          />
        </figure>

        <div>
          <div class="title-wrapper">
            <h3 class="title-3">
              <a href="#" class="card-title">${item.title}</a>
            </h3>

            <span class="span title-2">$${item.price}</span>
          </div>

          <p class="card-text label-1">${item.desc}</p>
        </div>
      </div>
    </li>`;
  });
  sectionElement.innerHTML = sectionContent;
}

function displayCategoryItems() {
  let categories = [];
  let categoryContent = `<button type="button" class="filter-btn" data-id="all">all</button>`;

  menu.forEach((item) => {
    const foodIndex = categories.indexOf(item.category);
    if (foodIndex === -1) {
      categories.push(item.category);
    }
  });

  categories.forEach((category) => {
    categoryContent += `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
  });

  categoryElement.innerHTML = categoryContent;

  // =============

  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    // event
    button.addEventListener("click", function (e) {
      const selectedCategoryName = e.target.getAttribute("data-id");
      const filteredMenu = menu.filter(
        (item) => item.category === selectedCategoryName
      );

      console.log("selectedCategoryName: " + selectedCategoryName);

      if (selectedCategoryName == "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filteredMenu);
      }
    });
  });
}

/**
 * FORM VALIDATION
 */

const inputFields = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="tel"]'
);

for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("blur", function () {
    if (inputFields[i].value.trim() === "") {
      inputFields[i].setCustomValidity(
        "Input cannot be empty or just contain spaces"
      );
    } else {
      inputFields[i].setCustomValidity("");
    }
  });

  inputFields[i].addEventListener("input", function () {
    inputFields[i].setCustomValidity("");
  });
}

// Date Validation:

const dateInput = document.getElementById("date");

// Set minimum date to today
const now = new Date();

const day = ("0" + now.getDate()).slice(-2);
const month = ("0" + (now.getMonth() + 1)).slice(-2);

const today = now.getFullYear() + "-" + month + "-" + day;
const minDate = today;
dateInput.setAttribute("min", minDate);

// Set maximum date to 10 days from today
const maxDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];
dateInput.setAttribute("max", maxDate);

// Set default date to today
dateInput.setAttribute("value", minDate);

// Time Validation:

const timeInput = document.getElementById("time");

// Set the initial min and max time values based on the current date
const currentDate = new Date();
const currentDateString = currentDate.toISOString().slice(0, 10);
if (dateInput.value === currentDateString) {
  timeInput.min = "09:00";
  timeInput.max = "22:00";
} else if (
  dateInput.value > currentDateString &&
  timeInput.value > timeInput.min &&
  timeInput.value < timeInput.max
) {
  timeInput.min = "09:00";
  timeInput.max = "22:00";
}

dateInput.addEventListener("change", function () {
  const selectedDate = new Date(this.value);
  const selectedDateString = selectedDate.toISOString().slice(0, 10);

  if (selectedDateString === currentDateString) {
    timeInput.min = "09:00";
    timeInput.max = "22:00";
  } else if (
    selectedDateString > currentDateString &&
    timeInput.value > timeInput.min &&
    timeInput.value < timeInput.max
  ) {
    timeInput.min = "09:00";
    timeInput.max = "22:00";
  }
});

timeInput.addEventListener("input", function () {
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().slice(0, 10);

  // Get the current time
  let currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  // Get the entered time
  const enteredTime = timeInput.value;
  const enteredHours = parseInt(enteredTime.split(":")[0]);
  const enteredMinutes = parseInt(enteredTime.split(":")[1]);

  const enteredDate = dateInput.value;
  const currDate = formatDate(new Date());

  function formatDate(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return year + "-" + month + "-" + day;
  }

  // Check if the entered time is within the valid range and is not less than the current time
  if (enteredTime < timeInput.min || enteredTime > timeInput.max) {
    // Set a custom validation message
    timeInput.setCustomValidity(
      "Please enter a time between 9:00 AM and 10:00 PM."
    );
  } else if (enteredDate > currDate) {
    timeInput.setCustomValidity("");
    console.log("Hi");
  } else if (
    enteredDate === currDate ||
    enteredHours < currentHours ||
    (enteredHours === currentHours && enteredMinutes < currentMinutes)
  ) {
    // Set a custom validation message
    timeInput.setCustomValidity(
      "Please enter a time greater than the current time."
    );
  } else {
    // Clear the validation message
    timeInput.setCustomValidity("");
  }
});

// get full year for footer
const footerYear = document.getElementById("year");
footerYear.style.display = "inline";
footerYear.innerHTML = new Date().getFullYear();
