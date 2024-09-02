function setup() {//configuração
  createCanvas(900, 900);//altura,largura
}

function draw() {//desenhar
  background(220);//não sei oque faz
}function setup() {
  createCanvas(800, 800);//altura,largura
  background("cyan")
}

function draw() {//desenhar
  stroke("purple");//cor do quadrado
  fill("purple");//peencher cor do quadrado
  
  
  if (mouseIsPressed) {//presionação do mouse
    rect(mouseX, mouseY, 20, 35);//localização do mouse
  }
}