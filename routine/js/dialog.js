//Create New Icon
const dialog__button = document.getElementById("routine--dialog__button");
const dialog__name = document.getElementById("routine--dialog__name");
const dialog__url = document.getElementById("routine--dialog__url");
const dialog__start_time = document.getElementById("routine--dialog__start_time");
const dialog__end_time = document.getElementById("routine--dialog__end_time");
const list = document.getElementById("routine__list");

const routine__dialog = document.getElementById("routine--dialog");
var number = 1;

var div_List = [];

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

        const values = {};
        const Icon_div = document.createElement("div");
        Icon_div.classList.add('routine-icon');
        Icon_div.id = "test";
        Icon_div.classList.add('routine__block');

        const img = document.createElement("img");
        const link = document.createElement("a");
        values[img] = "https://www.google.com/s2/favicons?domain_url=" + dialog__url.value;
        img.src = values[img];
        if(img.src == null){
            
        }
        values[link] = dialog__url.value;
        link.innerText = values[link];
        link.href = "http://" + values[link];
        Icon_div.appendChild(link);
        Icon_div.appendChild(img);

        const Name_div = document.createElement("div");
        const name = document.createElement("span");
        values[name] = dialog__name.value;
        name.innerText = values[name];
        name.className = "routine__name";
        Name_div.appendChild(name);

        const menudot = document.createElement("i");
        menudot.className = "fas fa-ellipsis-h dot";
        menudot.id = "setting-dot";
        Name_div.appendChild(menudot);

        Name_div.className="routin-icon_top";
        Icon_div.appendChild(Name_div);

        const time = document.createElement("span");
        values[time] = dialog__start_time.value + " ~ " + dialog__end_time.value;
        time.innerText = values[time];
        time.className = "routine__time";
        Icon_div.appendChild(time);


        //console.log(dialog__start_time.value + " ~ " + dialog__end_time.value);

        list.appendChild(Icon_div);

        values[id] = number;
        localStorage.setItem(number + "div", values);
        number = number + 1;
        values = {};

        resetValue();
    }
});




