//Create New Icon
const dialog__button = document.getElementById("dialog__button");
const dialog__name = document.getElementsByClassName("shorcut--dialog__name_value").value;
const dialog__url = document.getElementsByClassName("shorcut--dialog__url_value").value;

const list = document.getElementById("icons--list");

dialog__button.addEventListener('submit', function createIcon() {
  const img = document.createElement("img");
  img.src = "https://www.google.com/s2/favicons?domain_url=" + dialog__url;

  const name = document.createElement("span");
  name.innerText = dialog__name;

  const Icon_div = document.createElement("div");
  Icon_div.classList.add('shorcut-icon');
  Icon_div.appendChild(img);
  Icon_div.appendChild(name);

  list.appendChild(Icon_div);
});