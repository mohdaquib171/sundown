// loader
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}
//smooth scroll
(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

var fixedE = document.getElementById("fixed");
var projectList = document.getElementById("project-list");

function showProjectAnimation() {
  projectList.addEventListener("mouseenter", () => {
    fixedE.style.display = "block";
  });
  projectList.addEventListener("mouseleave", () => {
    fixedE.style.display = "none";
  });

  let elems = document.querySelectorAll(".project-item");

  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var image = e.getAttribute("data-image");
      fixedE.style.backgroundImage = `url(${image})`;
    });
  });
}

function handleMenuItemClick(item) {
  const menuItems = document.querySelectorAll(".menu-item");
  const textSections = document.querySelectorAll(".page5left p");
  const imageSections = document.querySelectorAll(".page5right");

  // Remove 'active' class from all menu items and headings
  menuItems.forEach((menuItem) => {
    menuItem.classList.remove("active");
  });
  textSections.forEach((textSection) => {
    textSection.classList.remove("active");
  });

  // Add 'active' class to the clicked menu item
  item.classList.add("active");

  // Get the section corresponding to the clicked menu item
  const section = item.getAttribute("data-section");

  // Fade out all text sections and image sections
  textSections.forEach((textSection) => {
    textSection.style.opacity = 0;
    textSection.style.transition = "opacity 0.25s ease-in-out";
  });
  imageSections.forEach((imageSection) => {
    imageSection.style.opacity = 0;
    imageSection.style.transition = "opacity 0.25s ease-in-out";
  });

  // Wait for fade-out animation to complete before changing content
  setTimeout(() => {
    // Hide all text sections and image sections
    textSections.forEach((textSection) => {
      textSection.style.display = "none";
    });
    imageSections.forEach((imageSection) => {
      imageSection.style.display = "none";
    });

    // Display the text and image section corresponding to the clicked menu item
    document.getElementById(`${section}-text`).style.display = "block";
    document.getElementById(`${section}-image`).style.display = "block";

    // Fade in the text and image sections
    setTimeout(() => {
      textSections.forEach((textSection) => {
        textSection.style.opacity = 1;
      });
      imageSections.forEach((imageSection) => {
        imageSection.style.opacity = 1;
      });
    }, 50);

    currentSection = section;
  }, 500);
}

// Design Project Execution section
// Get all menu items
const menuItems = document.querySelectorAll(".menu-item");

// Add click event listener to each menu item
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    handleMenuItemClick(item);
  });
});

// swiper Animation
function swiper() {
  var swiper = new Swiper(".mySwiper", {
    // slidesPerView: "auto",
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 30,
  });
}

/*CURSOR FUNCTIONALITY*/
function setupCustomCursor() {
  const cursor = document.querySelector(".cursor");
  const body = document.body;
  const toggleClass = "show-custom-cursor";

  function pointermoveHandler(e) {
    const target = e.target;
    if (
      e.target.closest(".mySwiper") &&
      window.matchMedia("(hover: hover)").matches
    ) {
      body.classList.add(toggleClass);
      cursor.style.setProperty("--cursor-x", `${e.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${e.clientY}px`);
    } else {
      body.classList.remove(toggleClass);
    }
  }

  document.addEventListener("pointermove", pointermoveHandler);
}

loaderAnimation();
showProjectAnimation();
swiper();
setupCustomCursor();
