function preload() {
    img_lipstick = loadImage('1.png');
    img_moustache = loadImage('2.png');
    img_rabbit = loadImage('3.png');
    img_dog = loadImage('4.png');
    img_blush = loadImage('5.png');
    img_parrot = loadImage('6.png');
    img_bouquet = loadImage('7.png');
    img_bracelet = loadImage('8.png');
    img_earring = loadImage('9.png');
    img_shoes = loadImage('10.png');
}
function setup() {
    canvas = createCanvas(600, 475);
    canvas.position(350, 175);
    background(255, 255, 255);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 25, 25, 550, 425);
}
function take_snapshot() {
    save('filter_selfie.png');
}
function lipstick() {
    document.getElementById("lipstick").style.border = "5px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function moustache() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "5px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function rabbit() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "5px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function dog() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "5px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function blush() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "5px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function parrot() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "5px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function bouquet() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "5px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function bracelet() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "5px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function earring() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "5px solid white";
    document.getElementById("shoes").style.border = "2px solid white";
}
function shoes() {
    document.getElementById("lipstick").style.border = "2px solid white";
    document.getElementById("moustache").style.border = "2px solid white";
    document.getElementById("rabbit").style.border = "2px solid white";
    document.getElementById("dog").style.border = "2px solid white";
    document.getElementById("blush").style.border = "2px solid white";
    document.getElementById("parrot").style.border = "2px solid white";
    document.getElementById("bouquet").style.border = "2px solid white";
    document.getElementById("bracelet").style.border = "2px solid white";
    document.getElementById("earring").style.border = "2px solid white";
    document.getElementById("shoes").style.border = "5px solid white";
}
