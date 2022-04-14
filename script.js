"use strict";

const btnHeader = document.getElementById("btnPortfolio");
const sectionPortfolio = document.querySelector(".portfolio");
const allSections = document.querySelectorAll(".section");

// Button smooth scroll
btnHeader.addEventListener("click", function () {
  sectionPortfolio.scrollIntoView({ behavior: "smooth" });
});

// RevealSections

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  // If Intersecting is false
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// Set observe for all section and add hidden class

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

console.log("hello");
