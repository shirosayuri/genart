let snowFlakesX = []
let snowFlakesY = []
let snowFlakesR = []
let snowFlakesO = []

function setup() {
  createCanvas(800, 800)
  noStroke()
  random()
  background("#14192C")
  let counter = 0
  while(counter < 600){
    snowFlakesX[counter] = width*random()
    snowFlakesY[counter] = height*random()
    snowFlakesR[counter] = 8*random()
    snowFlakesO[counter] = random()
    counter += 1
  }
}

function draw() {
  
  background("#14192C")
  let counter = 0
  while(counter < 400){
    let o = snowFlakesO[counter] 
    let x = snowFlakesX[counter] % height
    let y = snowFlakesY[counter] % width
    let r = snowFlakesR[counter]
    fill(`rgba(255,255,255,${o})`)
    circle(x,y,r)
    snowFlakesY[counter] += o + o * sin(frameCount/60+counter)
    snowFlakesX[counter] += sin(frameCount/60+counter) + o*10*sin(frameCount/600)
    
    counter += 1
  
  }
}
