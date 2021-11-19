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
        Icon_div.id = "test";
        Icon_div.classList.add('routine__block');

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
        dragElement(Icon_div);

        resetValue();
    }
});


function dragElement(elmnt) { 
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; // 해당 기능 전체에서 사용할 변수를 초기화 합니다. 
    elmnt.onmousedown = dragMouseDown; // 요소를 마우스로 눌렀을 경우 dragMouseDown()을 실행 시키게 됩니다 

    function dragMouseDown(e) {
        console.log("drageMouseDown");
        e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음) 
        e.preventDefault(); // 일단 e의 기본 수행을 막습니다. 
        pos3 = e.clientX; // 마우스 이벤트가 발생할 떄 마다 당시의 마우스 x좌표를 pos3에 저장합니다. 
        pos4 = e.clientY; // 마우스 이벤트가 발생할 떄 마다 당시의 마우스 y좌표를 pos4에 저장합니다. 
        document.onmouseup = closeDragElement; // 마우스 클릭을 해제 했을 떄 closeDragElement()을 호출합니다 
        document.onmousemove = elementDrag; // 마우스를 움직일때 elementDrag()을 호출합니다.
    }

    function elementDrag(e) {
        e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음) 
        e.preventDefault(); // 일단 e의 기본 수행을 막습니다. 
        pos1 = pos3 - e.clientX; // 기존의 마우스 위치값을 비교하여 움직인 새로운 x좌표를 구하여 pos1에 저장합니다. 
        pos2 = pos4 - e.clientY; // 기존의 마우스 위치값을 비교하여 움직인 새로운 y좌표를 구하여 pos2에 저장합니다. 
        pos3 = e.clientX; // 다시 새로운 x좌표를 pos3에 저장합니다. 
        pos4 = e.clientY; // 다시 새로운 y좌표를 pos3에 저장합니다. 
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; // 요소의 y위치를 변경합니다. (마우스에 따라 요소가 y방향으로 움직입니다) 
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; // 요소의 x위치를 변경합니다. (마우스에 따라 요소가 x방향으로 움직입니다)
        
        console.log("elementDrag : pos1 :" + pos1 + " pos2 :" + pos2 + " pos3 :" + pos3 + " pos4 :" + pos4);
    } 

    function closeDragElement() {
        console.log("closeDragElement");
        document.onmouseup = null; // onmouseup을 초기화 시킴니다. 
        document.onmousemove = null; // onmousemove을 초기화 시킴니다. 
        console.log("현재 요소의 위치 y는 " + elmnt.top +", x는" + elmnt.left + "입니다.");
    } 
}


//출처: https://ux.stories.pe.kr/155 [UX 공작소(Tistory)]