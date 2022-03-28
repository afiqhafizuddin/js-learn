"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  //   btnsOpenModal[i].addEventListener("click", function () {
  //     console.log("Button Clicked");
  //     modal.classList.remove("hidden"); // Display the modal
  //     overlay.classList.remove("hidden"); // Blurring the background
  //   });
  //   btnsCloseModal.addEventListener("click", function () {
  //     modal.classList.add("hidden");
  //     overlay.classList.add("hidden");
  //   });
  //   overlay.addEventListener("click", function () {
  //     modal.classList.add("hidden");
  //     overlay.classList.add("hidden");
  //   });

  btnsOpenModal[i].addEventListener("click", openModal);
  overlay.addEventListener("click", openModal);

  btnsCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}
