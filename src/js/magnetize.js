// utilities 

const lerp = (current, target, factor) => {
  return current * (1-factor) + target * factor;
}

let mousePosition = {x: 0, y: 0};
window.addEventListener('mousemove', (e) => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});

const calculateDistance = (x1, y1, x2, y2) => {
  return Math.hypot(x1 - x2, y1 - y2);
};

export class MagneticObject{
  constructor(domElement, interpolationfactor){
    this.domElement = domElement;
    // distance from top and left
    this.boundingClientRect = this.domElement.getBoundingClientRect();
    // Distance from object to trigger magnet
    this.triggerArea = 300;
    this.interpolationfactor = interpolationfactor

    this.lerpingData = {
      x: {current: 0, target: 0},
      y: {current: 0, target: 0},
    };
    this.resize();
    this.render();
  }

  resize(){
    window.addEventListener('resize', () => {
      // recalculate bounding box dimensions
      this.boundingClientRect = this.domElement.getBoundingClientRect();
    });
  }

  render(){
    const distanceFromMouseToCenter = calculateDistance(
      mousePosition.x,
      mousePosition.y,
      this.boundingClientRect.left + this.boundingClientRect.width / 2,
      this.boundingClientRect.top + this.boundingClientRect.height / 2
    );

    let targetHolder = {x: 0 ,y: 0};

    if(distanceFromMouseToCenter < this.triggerArea){
      this.domElement.classList.add('focus');

      targetHolder.x = (mousePosition.x - (this.boundingClientRect.left + this.boundingClientRect.width / 2)) * 0.3
      targetHolder.y = (mousePosition.y - (this.boundingClientRect.top + this.boundingClientRect.height / 2)) * 0.3
    } else {
      this.domElement.classList.remove('focus');
    }

    this.lerpingData["x"].target = targetHolder.x;
    this.lerpingData["y"].target = targetHolder.y;

    for(const item in this.lerpingData) {
      this.lerpingData[item].current = lerp(
        this.lerpingData[item].current, 
        this.lerpingData[item].target, 
        this.interpolationfactor
      );
    };

    this.domElement.style.transform = `translate(${this.lerpingData['x'].current}px, ${this.lerpingData['y'].current}px`

    window.requestAnimationFrame(()=> this.render())
  }
}