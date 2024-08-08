"use strict"

const spanName = document.body.querySelector("#name"),
      spanJob = document.body.querySelector("#job");

spanName.addEventListener("mouseenter", () => {
    spanName.classList.add("about_me__text__hovered");
    spanName.classList.remove("about_me__text__unhovered", "purple_font");
});

spanName.addEventListener("mouseleave", () => {
    spanName.classList.add("about_me__text__unhovered");
    spanName.classList.remove("about_me__text__hovered");
});

spanJob.addEventListener("mouseenter", () => {
    spanJob.classList.add("about_me__text__hovered");
    spanJob.classList.remove("about_me__text__unhovered", "purple_font");
});

spanJob.addEventListener("mouseleave", () => {
    spanJob.classList.add("about_me__text__unhovered");
    spanJob.classList.remove("about_me__text__hovered");
});