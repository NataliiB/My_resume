document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".navbar").classList.toggle("open");
  });
const contentHiding = () => {
  document.querySelector(".content").classList.toggle("close");
  document.querySelector(".row").classList.toggle("blurred");
};
document
  .querySelector(".hard-skills-btn")
  .addEventListener("click", function () {
    document.querySelector(".hard-skills").classList.toggle("active");
    contentHiding();
  });
document
  .querySelector(".soft-skills-btn")
  .addEventListener("click", function () {
    document.querySelector(".soft-skills").classList.toggle("active");
    contentHiding();
  });
document
  .querySelector(".projects-btn")
  .addEventListener("click", function () {
    document.querySelector(".projects").classList.toggle("active");
    contentHiding();
  });
document
  .querySelector(".contacts-btn")
  .addEventListener("click", function () {
    document.querySelector(".contacts").classList.toggle("active");
    contentHiding();
  });
