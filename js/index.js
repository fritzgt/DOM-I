const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Nav anchors
let navAnchor = document.querySelectorAll("a");
navAnchor[0].textContent = siteContent["nav"]["nav-item-1"];
navAnchor[1].textContent = siteContent["nav"]["nav-item-2"];
navAnchor[2].textContent = siteContent["nav"]["nav-item-3"];
navAnchor[3].textContent = siteContent["nav"]["nav-item-4"];
navAnchor[4].textContent = siteContent["nav"]["nav-item-5"];
navAnchor[5].textContent = siteContent["nav"]["nav-item-6"];

//H1
let heading = document.querySelector("h1");
heading.textContent = siteContent["cta"]["h1"];

//button
let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

//Top content
let topContent = document.querySelectorAll(".top-content h4");
let topContentP = document.querySelectorAll(".top-content p");

//features
topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContentP[0].textContent = siteContent["main-content"]["features-content"];

//About
topContent[1].textContent = siteContent["main-content"]["about-h4"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

//Middle img
let middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Bottom content
let bottomContent = document.querySelectorAll(".bottom-content h4");
let bottomContentP = document.querySelectorAll(".bottom-content p");

//Service
bottomContent[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];

//Product
bottomContent[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];

//Vision
bottomContent[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

//Contact h4
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

//Contact p
let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//Footer

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

/*
Task 3 adding new content
*/

//Changing the color of the nav text

navAnchor.forEach(element => (element.style.color = "green"));

//Adding new element to the nav
const nav = document.querySelector("nav");

//prepend
const home = document.createElement("a");
home.textContent = "Home";
nav.prepend(home);

//appendChild
const cart = document.createElement("a");
cart.textContent = "Cart";
nav.appendChild(cart);
