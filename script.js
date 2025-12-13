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

          const links = menu.querySelectorAll("a");
          links.forEach((link) => {
            link.addEventListener("click", function () {
              menu.classList.add("hidden");
            });
          });

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

function fitText(el) {
  if (!el || !el.parentElement) return;

  const parentWidth = el.parentElement.clientWidth;

  let min = 1;
  let max = 1200;
  let mid;

  while (min <= max) {
    mid = (min + max) >> 1;
    el.style.fontSize = mid + "px";

    if (el.scrollWidth <= parentWidth) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  el.style.fontSize = max + "px";
}

const el = document.getElementById("fitText");

window.addEventListener("load", () => fitText(el));
window.addEventListener("resize", () => fitText(el));

function showToast(title, message, type = 'success', duration = 4000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  };

  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || icons.success}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <div class="toast-close" onclick="removeToast(this.parentElement)">×</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    removeToast(toast);
  }, duration);
}

function removeToast(toast) {
  if (!toast || !toast.parentElement) return;
  
  toast.classList.add('removing');
  setTimeout(() => {
    if (toast.parentElement) {
      toast.parentElement.removeChild(toast);
    }
  }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
  const productButtons = document.querySelectorAll('.product-button');
  
  productButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const buttonText = this.textContent.trim();
      
      if (buttonText === 'ADD TO CART') {
        showToast('Added to Cart', 'Product successfully added to your cart', 'success');
      } else if (buttonText === 'VIEW PRODUCT') {
        showToast('Product Details', 'Loading product information...', 'info');
      } else if (buttonText === 'NOTIFY ME') {
        showToast('Notification Set', 'We\'ll notify you when this product is available', 'success');
      }
    });
  });
});
