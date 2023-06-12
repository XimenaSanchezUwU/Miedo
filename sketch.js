let img;
let myFont;
function preload() {
  img = loadImage('assets/Miedito.png');
  myFont = loadFont('assets/Letters for Learners Lined.ttf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  for (let i = 0; 9 > i; i++){
  noStroke();
  textSize(90);
  fill(255, 20, 20)
  text('Eres un adulto', 340, 58);
  textSize(105);
  fill(191*i, 20*i, 0*i);
  text('No deberias tener miedo', 230, 450+i*35);
  }
}