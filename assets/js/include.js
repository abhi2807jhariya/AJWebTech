function includeHTML(file, elementId, callback) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Include file not found");
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback();
    })
    .catch(err => console.error("Error loading include file:", err));
}

function setActiveMenu() {
  const path = window.location.pathname.toLowerCase();

  document.querySelectorAll(".list a").forEach(link => {
    const href = link.getAttribute("href").toLowerCase();

    if (
      (path.endsWith("/") && (href === "/" || href === "./" || href === "index.html")) ||
      (path.includes("about") && href.includes("about")) ||
      (path.includes("services") && href.includes("services")) ||
      (path.includes("contact") && href.includes("contact"))
    ) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // 🔥 auto base path detect
  const depth = window.location.pathname.split("/").filter(p => p).length - 1;
  const base = "../".repeat(depth);

  includeHTML(base + "assets/include/header.html", "header", setActiveMenu);
  includeHTML(base + "assets/include/footer.html", "footer");
});



// Active btn js start
function setActiveMenu() {
  const currentUrl = window.location.href;

  const navLinks = document.querySelectorAll('.list li a');

  navLinks.forEach(link => {
    const linkUrl = link.href;

    if (currentUrl === linkUrl || currentUrl === linkUrl + '/') {
      link.classList.add('menu_actve');
    } else if (link.getAttribute('href') !== '/' && currentUrl.includes(link.getAttribute('href'))) {
      link.classList.add('menu_actve');
    } else {
      link.classList.remove('menu_actve');
    }
  });
}
window.addEventListener('load', setActiveMenu);


// Active btn js end
