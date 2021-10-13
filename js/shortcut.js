const shortcut_list = document.getElementsByClassName("shortcut--icons--list");
const shorcut__addicon = document.getElementById("shorcut--icon--add");
const shorcut__dialog = document.getElementById("shorcut__dialog")

// “Update details” button opens the <dialog> modally
shorcut__addicon.addEventListener('click', function onOpen() {
    if (typeof shorcut__dialog.showModal === "function") {
        shorcut__dialog.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
  });


