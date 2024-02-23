import data from "../data/main.json" assert { type: "json" };

const pages = [
  { name: "about", id: "page__about-me" },
  { name: "licenses", id: "page__licenses" },
  { name: "impossibleList", id: "page__impossible-list" },
  { name: "timeLine", id: "page__timeline" },
  { name: "contact", id: "page__contact-me" },
];

document.title = data.name;

pages.forEach(({ name, id }) => {
  fetch(`/pages/${name}.ejs`)
    .then((response) => response.text())
    .then((template) => {
      document.getElementById(id).innerHTML = ejs.render(template, data);
    });
});