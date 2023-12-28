const btnShare = document.querySelector(".section__user-share");
const divSectionUserClick = document.querySelector(".section__user-share_click");
const sectionUserUser = document.querySelector(".section__user-user");
const sectionUser = document.querySelector(".section__user");
const divSectionUserIcons = document.querySelector(".section__user-icons");
const triangle = document.querySelector(".triangle");
const h2 = document.querySelector(".section__user-share_h2");
const desktopDesgin = window.matchMedia("(min-width: 1440px)");
const mobileDesgin = window.matchMedia("(max-width: 400px)");

function desktopDesignBtnClick(e) {
  if (e.matches && divSectionUserClick.classList.contains("hidden")) {
    divSectionUserClick.classList.remove("hidden");
    divSectionUserClick.classList.add("show");

    divSectionUserClick.style.backgroundColor = "hsl(217, 19%, 35%)";
    divSectionUserClick.style.padding = "1rem 3rem";
    divSectionUserClick.style.display = "flex";
    divSectionUserClick.style.borderRadius = "1rem";
    divSectionUserClick.style.alignItems = "center";
    divSectionUserClick.style.gap = "2rem";
    divSectionUserClick.style.marginTop = "-8rem";
    divSectionUserClick.style.marginRight = "-10rem";

    h2.style.color = "hsl(210, 46%, 95%)";
    h2.style.fontSize = ".8rem";
    h2.style.letterSpacing = ".4rem";
    h2.style.fontWeight = "200";

    divSectionUserIcons.style.display = "flex";
    divSectionUserIcons.style.gap = "1rem";

    triangle.style.width = "0";
    triangle.style.height = "0";
    triangle.style.borderLeft = "20px solid transparent";
    triangle.style.borderRight = "20px solid transparent";
    triangle.style.borderTop = "20px solid hsl(217, 19%, 35%)";
    triangle.style.margin = "-4.5rem -2.2rem 0 0";
    triangle.style.display = "block";
  } else if (e.matches && divSectionUserClick.classList.contains("show")) {
    divSectionUserClick.classList.add("hidden");
    divSectionUserClick.classList.remove("show");

    divSectionUserClick.style.display = "none";
    triangle.style.display = "none";
  }
}

btnShare.addEventListener("click", () => {
  desktopDesignBtnClick(desktopDesgin);

  if (
    mobileDesgin.matches &&
    divSectionUserClick.classList.contains("hidden")
  ) {
    divSectionUserClick.classList.remove("hidden");
    sectionUserUser.classList.add("hidden");
    divSectionUserClick.style.display = "flex";
    divSectionUserClick.style.gap = "2.5rem";
    divSectionUserClick.style.alignItems = "center";
    divSectionUserClick.style.justifyContent = "space-between";

    divSectionUserIcons.style.display = "flex";
    divSectionUserIcons.style.gap = "1rem";

    sectionUser.style.backgroundColor = "hsl(217, 19%, 35%)";
    sectionUser.style.borderBottomLeftRadius = "1rem";
    sectionUser.style.borderBottomRightRadius = "1rem";
    sectionUser.style.display = "flex";
    sectionUser.style.color = "hsl(210, 46%, 95%)";
    sectionUser.style.fontSize = ".8rem";
    sectionUser.style.letterSpacing = ".4rem";
    sectionUser.style.fontWeight = "200";
    sectionUser.style.marginTop = "1.5rem";
  } else if (sectionUserUser.classList.contains("hidden")) {
    divSectionUserClick.style.display = "none";
    divSectionUserClick.classList.add("hidden");
    sectionUserUser.classList.remove("hidden");

    sectionUser.style.backgroundColor = "";
    sectionUser.style.borderBottomLeftRadius = "";
    sectionUser.style.borderBottomRightRadius = "";
    sectionUser.style.display = "";
    sectionUser.style.color = "";
    sectionUser.style.fontSize = "";
    sectionUser.style.letterSpacing = "";
    sectionUser.style.fontWeight = "";
    sectionUser.style.marginTop = "";
  }
});
