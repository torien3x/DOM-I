const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// const querymainNav = document.querySelectorAll(".mainNav");
// Get the element with the class name "h1"
const ctaTextElement = document.querySelector("h1");
ctaTextElement.textContent = siteContent.cta['h1'];

const navLinks = document.querySelectorAll('header nav a');
const navLinksTexts = Object.values(siteContent.nav);
navLinks.forEach((link, idx) => {
  link.textContent = navLinksTexts[idx];
  link.classList.add('italic');
})


const ctaButtonElement = document.querySelector("button");
ctaButtonElement.textContent = siteContent.cta['button'];

const featuresTextContent = document.querySelector(".main-content .top-content .text-content:first-child");
featuresTextContent.querySelector("h4").textContent = siteContent["main-content"]["features-h4"]
featuresTextContent.querySelector("p").textContent = siteContent["main-content"]["features-content"];

const aboutTextContent = document.querySelector(".main-content .top-content .text-content:nth-child(2)");
aboutTextContent.querySelector("h4").textContent = siteContent["main-content"]["about-h4"]
aboutTextContent.querySelector("p").textContent = siteContent["main-content"]["about-content"];

const servicesTextContent = document.querySelector(".main-content .bottom-content .text-content:first-child");
servicesTextContent.querySelector("h4").textContent = siteContent["main-content"]["services-h4"]
servicesTextContent.querySelector("p").textContent = siteContent["main-content"]["services-content"];

const productTextContent = document.querySelector(".main-content .bottom-content .text-content:nth-child(2)");
productTextContent.querySelector("h4").textContent = siteContent["main-content"]["product-h4"]
productTextContent.querySelector("p").textContent = siteContent["main-content"]["product-content"];

const visionTextContent = document.querySelector(".main-content .bottom-content .text-content:nth-child(3)");
visionTextContent.querySelector("h4").textContent = siteContent["main-content"]["vision-h4"]
visionTextContent.querySelector("p").textContent = siteContent["main-content"]["vision-content"];

const contactSection = document.querySelector(".contact");

contactSection.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
const contactParagraphs = contactSection.querySelectorAll("p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];




const images = document.getElementById('logo-img');
images.src = siteContent.images["logo-img"];

const img = document.getElementById('cta-img');
img.src = siteContent.images["cta-img"];

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent.images["accent-img"];

const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');




