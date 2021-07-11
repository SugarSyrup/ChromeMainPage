const images = ["1.jpg","2.jpg","3.jpg"];

const chosenImage = "img/" + images[Math.floor(Math.random() * images.length)]

document.querySelector("body").style.backgroundRepeat="no-repeat";
document.querySelector("body").style.backgroundImage=`url(\"${chosenImage}\")`;
document.querySelector("body").style.backgroundSize="cover";