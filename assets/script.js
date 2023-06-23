// Navbar
let navclass = document.querySelector(".mobile-navbar");
let scrollstop = document.querySelector("body");
let CorePlatform = document.querySelector(" .CorePlatform");
let Resources = document.querySelector(".Resources");
let company = document.querySelector(".company");
let svg1 = document.querySelector(" .svg-1");
let svg2 = document.querySelector(" .svg-2");
let svg3 = document.querySelector(" .svg-3");
let textc = document.querySelector(" .text-c");
let textC = document.querySelector(" .text-C");
let textR = document.querySelector(" .text-R");
let header = document.querySelector(".header");

classgen = (x) => {
  navclass.classList.toggle("display-nav");
  navclass.classList.toggle("hidden");
  x.classList.toggle("change");
  scrollstop.classList.toggle("overflow-hidden");
  header.classList.remove("backdrop-blur-md");
};

Coregen = () => {
  CorePlatform.classList.toggle("h-full");
  company.classList.remove("h-full");
  Resources.classList.remove("h-full");
  svg1.classList.toggle("rotate-180");
  svg2.classList.remove("rotate-180");
  svg3.classList.remove("rotate-180");
  textc.classList.toggle("text-[#bb99ff]");
  textC.classList.remove("text-[#bb99ff]");
  textR.classList.remove("text-[#bb99ff]");
};
compygen = () => {
  company.classList.toggle("h-full");
  CorePlatform.classList.remove("h-full");
  Resources.classList.remove("h-full");
  svg2.classList.toggle("rotate-180");
  svg3.classList.remove("rotate-180");
  svg1.classList.remove("rotate-180");
  textC.classList.toggle("text-[#bb99ff]");
  textc.classList.remove("text-[#bb99ff]");
  textR.classList.remove("text-[#bb99ff]");
};

resgen = () => {
  Resources.classList.toggle("h-full");
  CorePlatform.classList.remove("h-full");
  company.classList.remove("h-full");
  svg3.classList.toggle("rotate-180");
  svg2.classList.remove("rotate-180");
  svg1.classList.remove("rotate-180");
  textR.classList.toggle("text-[#bb99ff]");
  textc.classList.remove("text-[#bb99ff]");
  textC.classList.remove("text-[#bb99ff]");
};
