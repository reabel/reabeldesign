const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Boid class
class Boid {
  constructor() {
    this.position = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height
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
  update(boids) {
    // Compute alignment, cohesion, and separation
    let alignment = this.align(boids);
    let cohesion = this.cohere(boids);
    let separation = this.separate(boids);

    // Combine the forces
    alignment.mult(1.0);
    cohesion.mult(1.0);
    separation.mult(1.5);

    // Apply forces
    this.velocity.x += alignment.x + cohesion.x + separation.x;
    this.velocity.y += alignment.y + cohesion.y + separation.y;
    this.limit(this.velocity, this.speed);

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Wrap around edges
    if (this.position.x < 0) this.position.x = canvas.width;
    if (this.position.y < 0) this.position.y = canvas.height;
    if (this.position.x > canvas.width) this.position.x = 0;
    if (this.position.y > canvas.height) this.position.y = 0;
  }

  // Draw boid
  draw() {
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

  // Compute alignment
  align(boids) {
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
  cohere(boids) {
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
  separate(boids) {
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
  limit(vector, max) {
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
const boids = [];
for (let i = 0; i < 50; i++) {
  boids.push(new Boid());
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let boid of boids) {
    boid.update(boids);
    boid.draw();
  }
}

// Start animation
animate();
