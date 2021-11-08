
//Create New Icon
const dialog__button = document.getElementById("dialog__button");
const dialog__name = document.getElementById("dialog_name");
const dialog__url = document.getElementById("dialog_url");

const cshortcut__dialog = document.getElementById("shortcut__dialog");

const list = document.getElementById("icons--list");

dialog__button.addEventListener('click', function createIcon() {
  console.log("createIcon");
  cshortcut__dialog.close("Not");

  const img = document.createElement("img");
  img.src = "https://www.google.com/s2/favicons?domain_url=" + dialog__url.value;
  console.log(img.src);

  const name = document.createElement("span");
  name.innerText = dialog__name.value;
  console.log(dialog__name);

  const Icon_div = document.createElement("div");
  Icon_div.classList.add('shortcut-icon');
  Icon_div.appendChild(img);
  Icon_div.appendChild(name);

  list.appendChild(Icon_div);
});