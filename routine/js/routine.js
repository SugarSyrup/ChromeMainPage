const routineAdd = document.getElementById("routine_add");
const routineDialog = document.getElementById("routine--dialog");

const setting_dot = document.getElementById("setting-dot");
const setting_dialog = document.getElementById("routine--setting");


routineAdd.addEventListener("click",function onOpen(){
    if (typeof routineDialog.showModal === "function") {
      routineDialog.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
});


setting_dot.addEventListener("click",function onOpen(){
  if (typeof setting_dialog.showModal === "function") {
    setting_dialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});