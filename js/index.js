document
          .querySelector(".hamburger")
          .addEventListener("click", function () {
            document.querySelector(".nav-items").classList.toggle("show");
            document
              .querySelectorAll(".nav-item")
              .forEach((item) => item.classList.toggle("fade"));
          });