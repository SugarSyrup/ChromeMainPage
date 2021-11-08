const shortcut_list = document.getElementsByClassName("shortcut--icons--list");
const shortcut__addicon = document.getElementById("shortcut--icon--add");
const shortcut__dialog = document.getElementById("shortcut__dialog");


// “Update details” button opens the <dialog> modally
shortcut__addicon.addEventListener('click', function onOpen() {
    if (typeof shortcut__dialog.showModal === "function") {
        shortcut__dialog.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
  });


