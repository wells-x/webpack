import { isArray } from "./utils";
import "./assets/css/index.css"
import image from "./assets/image/test.png";

let img = new Image();
img.src = image;
document.querySelector('.box').appendChild(img)


console.log(isArray(this));