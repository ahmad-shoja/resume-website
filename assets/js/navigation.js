document.addEventListener("DOMContentLoaded", (ev) => {
  const pageAbout = document.querySelector("#page__about-me");
  const pageLicence = document.querySelector("#page__licences");
  const pageImpossibles = document.querySelector("#page__impossible-list");
  const pageTimeLine = document.querySelector("#page__timeline");
  const pageContact = document.querySelector("#page__contact-me");
  let jumpingTo = false;

  const navButtonProfile = document.querySelector(
    "#button__navigation__menu--profile"
  );
  const navButtonLicence = document.querySelector(
    "#button__navigation__menu--licenses"
  );
  const navButtonImpossibles = document.querySelector(
    "#button__navigation__menu--impossible-list"
  );
  const navButtonTimeline = document.querySelector(
    "#button__navigation__menu--timeline"
  );
  const navButtonContact = document.querySelector(
    "#button__navigation__menu--contact"
  );

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const id = entries[0].target.id;
        if (!jumpingTo || id === jumpingTo) {
          jumpingTo = false;
          highlightNavButton(id);
          snipToPage(id);
        }
      }
    },
    { threshold: [0.05] }
  );

  const getNavBtnCorrespondingPage = (id) => {
    let selectedPage = pageAbout;
    switch (id) {
      case "button__navigation__menu--profile":
        selectedPage = pageAbout;
        break;
      case "button__navigation__menu--licenses":
        selectedPage = pageLicence;
        break;
      case "button__navigation__menu--impossible-list":
        selectedPage = pageImpossibles;
        break;
      case "button__navigation__menu--timeline":
        selectedPage = pageTimeLine;
        break;
      case "button__navigation__menu--contact":
        selectedPage = pageContact;
        break;
    }
    return selectedPage;
  };

  const navButtonClick = (evt) => {
    const selectedPage = getNavBtnCorrespondingPage(evt.target.id);
    highlightNavButton(selectedPage.id);
    jumpingTo = selectedPage.id;
    selectedPage.scrollIntoView();
  };
  const highlightNavButton = (pageId) => {
    document
      .querySelectorAll(".button__navigation-menu")
      .forEach((navButton) => navButton.classList.remove("selected"));
    switch (pageId) {
      case "page__about-me":
        navButtonProfile.classList.add("selected");
        break;
      case "page__licences":
        navButtonLicence.classList.add("selected");
        break;
      case "page__impossible-list":
        navButtonImpossibles.classList.add("selected");
        break;
      case "page__timeline":
        navButtonTimeline.classList.add("selected");
        break;
      case "page__contact-me":
        navButtonContact.classList.add("selected");
        break;
    }
  };
  const snipToPage = (pageId) => {
    window.scrollTo(0, document.getElementById(pageId).offsetTop);
  };

  document
    .querySelectorAll(".button__navigation-menu")
    .forEach((navButton) =>
      navButton.addEventListener("click", navButtonClick)
    );

  intersectionObserver.observe(pageAbout);
  intersectionObserver.observe(pageLicence);
  intersectionObserver.observe(pageImpossibles);
  intersectionObserver.observe(pageTimeLine);
  intersectionObserver.observe(pageContact);
});
