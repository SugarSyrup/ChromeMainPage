const routineAdd = document.getElementById("routine_add");
const routineDialog = document.getElementById("routine--dialog")


routineAdd.addEventListener("click",function onOpen(){
    if (typeof routineDialog.showModal === "function") {
      routineDialog.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
});