const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");
const slide1 = document.querySelector('.slide1');
const slide0 = document.querySelector('.slide0');
const slide2 = document.querySelector('.slide-1');
const imagebg = document.getElementById('imagebg');
const skills = document.querySelector('.skills');
const lamp = document.getElementById('lamp');
const skillname = document.getElementById('skillname');
const mail = document.getElementById('mail');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const mailimage = document.getElementById('mailimage');
const linkedinimage = document.getElementById('linkedinimage');
const githubimage = document.getElementById('githubimage');
leftbtn.addEventListener('mouseenter', slideleft);
rightbtn.addEventListener('mouseenter', slideright);
leftbtn.addEventListener('click', slideleft);
rightbtn.addEventListener('click', slideright);

var centerslide = 0;
var initial_slide1X = -100;
var initial_slide0Y = -100;
var initial_slide0X = 0;
var initial_slidemin1X = 100;
var initial_slidemin1Y = -200;
var windowWidth = window.innerWidth;
var iamgebgpos = -(windowWidth);
var count = 0;
var mov = windowWidth / 25;
var mov2 = mov * 2;
var lamptoggle = 'on';
console.log(windowWidth);
imagebg.style.position = 'absolute';
imagebg.style.top = '0';
imagebg.style.left = `${iamgebgpos}px`;
imagebg.style.width = `${windowWidth*3}px`;
leftbtn.innerHTML = '<';
rightbtn.innerHTML = '>'


const imgskills = [];
var img = [];

for (let i = 1; i < 17; i++) {
    imgskills[i] = document.createElement('img');
    skills.appendChild(imgskills[i]);
    img[i] = new Image();
    img[i].src = `langsframes/${i}.png`;
    console.log(img[i].naturalWidth / 10);
    imgskills[i].style.width = `${(img[i].naturalWidth)/10}px`;
    imgskills[i].style.height = `${(img[i].naturalHeight)/10}px`;
    imgskills[i].src = `langsframes/${i}.png`;
    imgskills[i].addEventListener('mouseover',programs);
}   

function slideleft() {
    if (centerslide == 0) {

        if (initial_slide1X < 0) {

            initial_slide1X += 4;
            initial_slide0X += 4;

            slide1.style.transitionTimingFunction = 'ease';
            slide1.style.transform = `translateX(${initial_slide1X}%)`;
            slide0.style.transitionTimingFunction = 'ease';
            slide0.style.transform = `translate(${initial_slide0X}%,-100%)`;

            iamgebgpos += mov;
            imagebg.style.left = `${iamgebgpos}px`;

            requestAnimationFrame(slideleft);
            console.log(count++);
            // console.log(`1:${initial_slide1X},0:${initial_slide0X}`);
        } else {
            centerslide = 1;
        }
    }
    if (centerslide == -1) {

        if (initial_slide0X < 0) {
            initial_slide0X += 4;
            initial_slidemin1X += 4;
            slide0.style.transitionTimingFunction = 'ease';
            slide0.style.transform = `translate(${initial_slide0X}%,-100%)`;
            slide2.style.transitionTimingFunction = 'ease';
            slide2.style.transform = `translate(${initial_slidemin1X}%,${initial_slidemin1Y}%)`;
            console.log(`0X:${initial_slide0X},-1:${initial_slidemin1X}`);

            iamgebgpos += mov;
            imagebg.style.left = `${iamgebgpos}px`;

            requestAnimationFrame(slideleft);

        } else {
            centerslide = 0;
        }
    }

}

function slideright() {
    if (centerslide == 0) {

        if (initial_slide0X > -100) {
            initial_slide0X -= 4;
            initial_slidemin1X -= 4;
            slide0.style.transitionTimingFunction = 'ease';
            slide0.style.transform = `translate(${initial_slide0X}%,-100%)`;
            slide2.style.transitionTimingFunction = 'ease';
            slide2.style.transform = `translate(${initial_slidemin1X}%,${initial_slidemin1Y}%)`;
            console.log(`0X:${initial_slide0X},-1:${initial_slidemin1X}`);

            iamgebgpos -= mov;
            imagebg.style.left = `${iamgebgpos}px`;
            requestAnimationFrame(slideright);

        } else {
            centerslide = -1;
        }
    }
    if (centerslide == 1) {

        if (initial_slide1X > -100) {

            initial_slide1X -= 4;
            initial_slide0X -= 4;
            slide1.style.transitionTimingFunction = 'ease';
            slide1.style.transform = `translateX(${initial_slide1X}%)`;
            slide0.style.transitionTimingFunction = 'ease';

            slide0.style.transform = `translate(${initial_slide0X}%,-100%)`;


            iamgebgpos -= mov;
            imagebg.style.left = `${iamgebgpos}px`;

            requestAnimationFrame(slideright);
            console.log(`1:${initial_slide1X},0:${initial_slide0X}`);
        } else {
            centerslide = 0;
        }
    }
}
function programs(){
    skillname.innerHTML = "Prgramming Languages /n c++";
}

lamp.addEventListener('click', togglelamp);

function togglelamp() {
    if (lamptoggle == 'on') {
        lamp.src = 'lamp - Copy.svg';
        lamptoggle = 'off';
        console.log('off');
        skillname.style.color = 'rgb(84, 80, 80)';

    } else if (lamptoggle == 'off') {
        lamp.src = 'lamp.svg';
        lamptoggle = 'on';
        console.log('on');
        skillname.style.color = 'white';

    }
}

mailimage.addEventListener("mouseenter",()=>{
    mail.innerHTML='scratchagkkoi@gmailcom';
});
mailimage.addEventListener("mouseleave",()=>{
    mail.innerHTML='';
});

linkedinimage.addEventListener("mouseenter",()=>{
    linkedin.innerHTML='abdulgani-khan';
});
linkedinimage.addEventListener("mouseleave",()=>{
    linkedin.innerHTML='';
});

githubimage.addEventListener("mouseenter",()=>{
    github.innerHTML='github.com/Agkhan625';
});
githubimage.addEventListener("mouseleave",()=>{
    github.innerHTML='';
});