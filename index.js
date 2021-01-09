const s = ( sketch ) => {
  
let snowFlakesX = []
let snowFlakesY = []
let snowFlakesR = []
let snowFlakesO = []

sketch.setup = () => {
  sketch.createCanvas(800, 800)
  sketch.noStroke()
  sketch.random()
  sketch.background("#14192C")
  let counter = 0
  while(counter < 600){
    snowFlakesX[counter] = sketch.width*sketch.random()
    snowFlakesY[counter] = sketch.height*sketch.random()
    snowFlakesR[counter] = 8*sketch.random()
    snowFlakesO[counter] = sketch.random()
    counter += 1
  }
}

sketch.draw = function() {
  
  sketch.background("#14192C")
  let counter = 0
  while(counter < 400){
    let o = snowFlakesO[counter] 
    let x = snowFlakesX[counter] % sketch.height
    let y = snowFlakesY[counter] % sketch.width
    let r = snowFlakesR[counter]
    sketch.fill(`rgba(255,255,255,${o})`)
    sketch.circle(x,y,r)
    snowFlakesY[counter] += o + o * sin(sketch.frameCount/60+counter)
    snowFlakesX[counter] += sin(sketch.frameCount/60+counter) + o*10*sin(sketch.frameCount/600)
    
    counter += 1
  
  }
}
}
let myp5 = new p5(s);
