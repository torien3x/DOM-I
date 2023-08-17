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

// Wait for the DOM to fully load
  // Get the header element
  const headerElement = document.querySelector("header");

  // Create a navigation element
  const navElement = document.createElement("nav");

  // Get the keys of the siteContent.nav object
  const navContent = [
      siteContent.nav['nav-item-1'],
      siteContent.nav['nav-item-2'],
      siteContent.nav['nav-item-3'],
      siteContent.nav['nav-item-4'],
      siteContent.nav['nav-item-5'],
      siteContent.nav['nav-item-6']
  ];

  // Loop through the navigation keys
  for (const navText of navContent) {
      const anchorElement = document.createElement("a");
      anchorElement.href = "#"; // Set the href attribute
      anchorElement.textContent = navText; // Set the link text
      anchorElement.classList.add("italic"); // Add the class "italic"
      navElement.appendChild(anchorElement); // Append the anchor element to the navigation

      console.log("Added link:", anchorElement.textContent);
  }

  // Append the navigation element to the header
  headerElement.insertBefore(navElement, headerElement.firstChild);










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

// Create a <footer> element
const footerElement = document.createElement("footer");

// Create an <a> element
const anchorElement = document.createElement("a");

// Set the href attribute for the <a> element
anchorElement.href = "#";

// Add the "bold" class to the <a> element
anchorElement.classList.add("bold");

// Create a text node for the text "Great Idea! 2021"
const textNode = document.createTextNode("Copyright Great Idea! 2021");

// Append the copyright symbol and text nodes to the <a> element
anchorElement.appendChild(textNode);

// Append the <a> element to the <footer> element
footerElement.appendChild(anchorElement);

// Append the <footer> element to the document body or a specific container
document.body.appendChild(footerElement);




