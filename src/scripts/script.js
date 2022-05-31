(function () {
  const nav = document.querySelector(".nav");
  const tabButtons = document.querySelectorAll(".tab__btn");
  const scheduleData = [...document.querySelectorAll(".schedule__data")];

  nav.addEventListener("click", function (e) {
    const toggleBtn = e.target.closest(".nav__toggle");
    const menuIcon = this.querySelector(".nav__toggle").children[0];
    const navLink = e.target.closest(".nav__link");
    const navList = this.querySelector(".nav__list");

    if (!toggleBtn && !navLink) return;

    if (toggleBtn) {
      navList.classList.toggle("nav__sm");
    }

    if (navLink) {
      if (navList.classList.contains("nav__sm")) {
        navList.classList.remove("nav__sm");
      }
    }

    if (navList.classList.contains("nav__sm")) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
    }

    menuIcon.classList.contains("fa-bars")
      ? menuIcon.classList.replace("fa-bars", "fa-times")
      : menuIcon.classList.replace("fa-times", "fa-bars");
  });

  tabButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      scheduleData.forEach((data) =>
        data.classList.remove("schedule__data--active")
      );

      tabButtons.forEach((btn) => btn.classList.remove("tab__btn--active"));

      scheduleData[i].classList.add("schedule__data--active");
      btn.classList.add("tab__btn--active");
    });
  });
})();
