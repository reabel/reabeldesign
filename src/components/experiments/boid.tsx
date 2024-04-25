// JavaScript code for boids simulation goes here
const canvas = document.getElementById('boidsCanvas') as HTMLCanvasElement;
const ctx = canvas?.getContext('2d');
//document.body.appendChild(canvas);

interface Boid {
    position: any,
    velocity: any,
    speed: number,
    maxForce: number,
    perceptionRadius: number
}


function mult(vector: any, scalar: any) {
    vector.x *= scalar;
    vector.y *= scalar;
}
// Boid class
class Boid {
  constructor() {
      this.position = {
      x: Math.random() * canvas?.width,
      y: Math.random() * canvas?.height
      };
      this.velocity = {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
      };
      this.speed = 3;
      this.maxForce = 0.05;
      this.perceptionRadius = 50;
  }

  // Update boid position
  update(boids: Array<Boid>) {
    if (!canvas) return;
    // Compute alignment, cohesion, and separation
    let alignment = this.align(boids);
    let cohesion = this.cohere(boids);
    let separation = this.separate(boids);

    // Combine the forces
    mult(alignment, 1.0);
    mult(cohesion, 1.0);
    mult(separation, 1.5);

    // Apply forces
    this.velocity.x += alignment.x + cohesion.x + separation.x;
    this.velocity.y += alignment.y + cohesion.y + separation.y;
    this.limit(this.velocity, this.speed);

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Wrap around edges
    if (this.position.x < 0) this.position.x = canvas?.width;
    if (this.position.y < 0) this.position.y = canvas?.height;
    if (this.position.x > canvas.width) this.position.x = 0;
    if (this.position.y > canvas.height) this.position.y = 0;
  }

  // Draw boid
  draw() {
    if(ctx) {
      ctx.beginPath();
      ctx.save();
      ctx.translate(this.position.x, this.position.y);
      ctx.rotate(Math.atan2(this.velocity.y, this.velocity.x) + Math.PI / 2);
      ctx.moveTo(0, -7);
      ctx.lineTo(5, 10);
      ctx.lineTo(-5, 10);
      ctx.closePath();
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.restore();
    }   
  }

  // Compute alignment
  align(boids: Array<Boid>) {
      let steering = { x: 0, y: 0 };
      let total = 0;
      for (let other of boids) {
      let distance = Math.sqrt(
          (this.position.x - other.position.x) ** 2 + 
          (this.position.y - other.position.y) ** 2
      );
      if (other !== this && distance < this.perceptionRadius) {
          steering.x += other.velocity.x;
          steering.y += other.velocity.y;
          total++;
      }
      }
      if (total > 0) {
      steering.x /= total;
      steering.y /= total;
      this.limit(steering, this.maxForce);
      }
      return steering;
  }

  // Compute cohesion
  cohere(boids: Array<Boid>) {
      let steering = { x: 0, y: 0 };
      let total = 0;
      for (let other of boids) {
      let distance = Math.sqrt(
          (this.position.x - other.position.x) ** 2 + 
          (this.position.y - other.position.y) ** 2
      );
      if (other !== this && distance < this.perceptionRadius) {
          steering.x += other.position.x;
          steering.y += other.position.y;
          total++;
      }
      }
      if (total > 0) {
      steering.x /= total;
      steering.y /= total;
      steering.x -= this.position.x;
      steering.y -= this.position.y;
      this.limit(steering, this.maxForce);
      }
      return steering;
  }

  // Compute separation
  separate(boids: Array<Boid>) {
      let steering = { x: 0, y: 0 };
      let total = 0;
      for (let other of boids) {
      let distance = Math.sqrt(
          (this.position.x - other.position.x) ** 2 + 
          (this.position.y - other.position.y) ** 2
      );
      if (other !== this && distance < this.perceptionRadius) {
          let diffX = this.position.x - other.position.x;
          let diffY = this.position.y - other.position.y;
          steering.x += diffX / distance;
          steering.y += diffY / distance;
          total++;
      }
      }
      if (total > 0) {
      steering.x /= total;
      steering.y /= total;
      this.limit(steering, this.maxForce);
      }
      return steering;
  }

  // Limit vector magnitude
  limit(vector: any, max: any) {
      let magnitude = Math.sqrt(vector.x ** 2 + vector.y ** 2);
      if (magnitude > max) {
      vector.x /= magnitude;
      vector.y /= magnitude;
      vector.x *= max;
      vector.y *= max;
      }
  }
}

// Create boids
let boids: Array<Boid> = [];

// Animation loop
export function animate() {
    if (!canvas) {
        console.log('no animation');
        return;
    }

    console.log('animating');
    requestAnimationFrame(animate);
    ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
    for (let boid of boids) {
        boid.update(boids);
        boid.draw();
    }
}
animate()

export function init() {
    for (let i = 0; i < 50; i++) {
        boids.push(new Boid());
    }
}