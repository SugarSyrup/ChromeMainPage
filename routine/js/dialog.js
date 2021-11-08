//Create New Icon
const dialog__button = document.getElementById("routine--dialog__button");
const dialog__name = document.getElementById("routine--dialog__name");
const dialog__url = document.getElementById("routine--dialog__url");
const dialog__start_time = document.getElementById("routine--dialog__start_time");
const dialog__end_time = document.getElementById("routine--dialog__end_time");
const list = document.getElementById("routine__list");

const routine__dialog = document.getElementById("routine--dialog");

function ValueCheck(){
    if (dialog__name === null && dialog__start_time === null && dialog__end_time === null){
        return true;
    }
    else{
        return false;
    }
}

function resetValue(){
    dialog__name.value = null;
    dialog__start_time.value = "00:00";
    dialog__end_time.value = "23:59";
    dialog__url.value = null;
}

dialog__button.addEventListener('click', function createIcon() {
    if (ValueCheck()){
        alert("Something wrong");
    }
    else{
        routine__dialog.close("Not");

        const Icon_div = document.createElement("div");
        Icon_div.classList.add('routine-icon');

        const img = document.createElement("img");
        img.src = "https://www.google.com/s2/favicons?domain_url=" + dialog__url.value;
        if(img.src == null){

        }
        Icon_div.appendChild(img);

        const name = document.createElement("span");
        name.innerText = dialog__name.value;
        name.className = "routine__name";
        Icon_div.appendChild(name);

        const time = document.createElement("span");
        time.innerText = dialog__start_time.value + " ~ " + dialog__end_time.value;
        time.className = "routie__time";
        Icon_div.appendChild(time);

        //console.log(dialog__start_time.value + " ~ " + dialog__end_time.value);

        list.appendChild(Icon_div);

        resetValue();
    }
});
