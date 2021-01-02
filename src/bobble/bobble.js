let colors = {
  red: "#f0f",
};

class Bobble {
  constructor({ sizeRatio, hasBorder, color }) {
    this.bobble = document.createElement("div");
    // console.log("created ");
    let right = Math.round(Math.random() * window.screen.availWidth);
    const position = "fixed";
    
    this.bobble.style.mixBlendMode="screen"
    this.bobble.style.right = `${right * sizeRatio}px`;
    this.bobble.style.position = position;
    this.bobble.style.width = `${sizeRatio * 10}px`;
    this.bobble.style.opacity = `${sizeRatio + 2 / 10}`; // this will be animated some how
    this.bobble.style.height = `${sizeRatio * 10}px`;
    this.bobble.style.borderRadius = "30px";
    // this.bobble.style.zIndex=-1;
    this.bobble.style.left = `${Math.round(
      Math.random() * Screen.width - 100
    )}px`;

    if (hasBorder) {
      this.bobble.style.border = `${sizeRatio}px solid`;
      this.bobble.style.borderColor = color;
    } else {
      this.bobble.style.backgroundColor = color;
    }

    this.bobble.setAttribute("class", "bobble");
    // document.getElementById("root").appendChild(this.bobble)

    document.body.appendChild(this.bobble);
   
    this.changePosition(sizeRatio);
  }

  changePosition(sizeRatio) {
    var x = 0;
    animate({
      duration: 20,
      draw: (val,frame) => {
        x = val / sizeRatio;
        if (x > Screen.height - 100) {
          cancelAnimationFrame(frame)
          this.bobble.remove();
          
        } else {

          this.bobble.style.bottom = `${x}px`;
        }
      },
      timing(val) {
        return val;
      },
    });
  }
  disposeBobble() {}
}

export default class BobbleCreator {
  constructor() {
    // this.canvas=canvas;
  }
  //* this class will create bobbles per every seconds
  //* it will give it random values in every create
 canvas;
  generate() {
    this.interval = setInterval(this.createBobblesRandomly, 3000);
  }

  stopGenerating(){
    clearInterval(this.interval);
  }
  createBobblesRandomly() {
    colors = ["#00EEFF", "#00646B", "#000000", "#707070"];

    let numberOfBobble = Math.round(Math.random() * 4);

    for (let i = 0; i < numberOfBobble; i++) {
      let colorIndex = Math.round(Math.random() * 4);
      let sizeRatio = Math.round(Math.random() * 4);
      let hasBorder = Math.round(Math.random() * 4) > 2;

      const Color = colors[colorIndex];

      setTimeout(function timer() {
        new Bobble({
          sizeRatio,
          hasBorder,
          color: Color,
        });
      }, i * 1000);
    }
  }
}

function animate({ timing, draw, duration }) {
  let start = performance.now();
  const myDraw = draw;
  let progress;
let frame=requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    // if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    progress = timing(timeFraction);
    // console.log(progress);
    //*  here is where the all the animation will take place
    //* from the creation of the bobble to it animation and it delition

    myDraw(progress,frame); // draw it

    requestAnimationFrame(animate);
  });
}


// 'https://web.whatsapp.com/send?phone='+phone_no+'&text='+message