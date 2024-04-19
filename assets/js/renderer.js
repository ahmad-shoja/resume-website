const data = await fetch("./assets/data/main.json").then((res) => res.json());

const pages = [
  { name: "about", id: "page__about-me" },
  { name: "licenses", id: "page__licenses" },
  { name: "impossibleList", id: "page__impossible-list" },
  { name: "timeLine", id: "page__timeline" },
  { name: "contact", id: "page__contact-me" },
];

const components = [
  { name: "navigation", id: "container__navigation" },
  { name: "skills", id: "container__about-page__skills" }
]
document.title = data.name;

function loadNavigationScript() {
  const navigationScript = document.createElement('script');
  navigationScript.src = "/assets/js/navigation.js";
  document.body.appendChild(navigationScript);
}

function loadSkillsScript() {
  const skillsScript = document.createElement('script');
  skillsScript.src = "/assets/js/skills.js";
  document.body.appendChild(skillsScript);
}


await Promise.all(pages.map(({ name, id }) => {
  return new Promise((resolve, reject) => {
    fetch(`./pages/${name}.html`)
      .then((response) => response.text())
      .then((template) => {
        document.getElementById(id).innerHTML = ejs.render(template, data);
        resolve()
      });
  })
}))

await Promise.all(components.map(({ name, id }) => {
  return new Promise((resolve, reject) => {
    fetch(`./components/${name}.html`)
      .then((response) => response.text())
      .then((template) => {
        document.getElementById(id).innerHTML = ejs.render(template, data);
        resolve()
      });
  })
}))


loadNavigationScript()
loadSkillsScript()



