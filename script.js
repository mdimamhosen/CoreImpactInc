  document.addEventListener("DOMContentLoaded", function () {
        const btn = document.getElementById("menu-btn");
        const menu = document.getElementById("mobile-menu");

        console.log("Button:", btn, "Menu:", menu);

        if (btn && menu) {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("Button clicked");
            menu.classList.toggle("hidden");
          });

          // Close menu when clicking on a link
          const links = menu.querySelectorAll("a");
          links.forEach((link) => {
            link.addEventListener("click", function () {
              menu.classList.add("hidden");
            });
          });

          // Close menu when clicking outside
          document.addEventListener("click", function (e) {
            if (
              !menu.contains(e.target) &&
              !btn.contains(e.target) &&
              !btn.parentElement.contains(e.target)
            ) {
              menu.classList.add("hidden");
            }
          });
        } else {
          console.error("Menu button or mobile menu not found");
        }
      });