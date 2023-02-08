class Circle {
  ctx;
  x;
  y;
  r;
  u;
  ms = 0;

  constructor(ctx, x, y, r, u = 0.4) {
    this.ctx = ctx;
    this.r = r;
    this.x = x;
    this.y = y;
    this.u = u;

    this.draw();
  }

  draw() {
    this.ctx.arc(
      this.x + this.r,
      this.y + this.r,
      this.r,
      0,
      Math.PI * 2,
      false
    );
    this.ctx.stroke();
  }

  update() {}

  accel() {
    this.ms += 0.01;
    this.x += this.ms;
    this.draw();
  }
}

export { Circle };
