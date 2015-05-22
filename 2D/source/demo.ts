/// <reference path="../typings/tsd.d.ts" />

class Demo {
     private _canvas: HTMLCanvasElement;
     private _context: CanvasRenderingContext2D;
     private _width: number;
     private _height: number;

     private _x: number = 200;
     private _y: number = 200;
     private _vx: number = 10;
     private _vy: number = 10;
     private _canBounce: boolean = true;

     constructor(canvas: HTMLCanvasElement) {
          this._canvas = canvas;
          this._context = <CanvasRenderingContext2D> canvas.getContext('2d');

          this._width = canvas.width;
          this._height = canvas.height;

          //this.adjustForRetina();
          this.assignEvents();
          this.startAnimation();
     }

     private adjustForRetina(): void {
          if (window.devicePixelRatio && window.devicePixelRatio > 1) {
               var factor = window.devicePixelRatio;

               this._canvas.width = this._width * factor;
               this._canvas.height = this._height * factor;

               this._canvas.style.width = this._width + 'px';
               this._canvas.style.height = this._height + 'px';

               this._context.scale(factor, factor);
          }

     }

     private assignEvents(): void {
          var that = this;
          // todo
     }

     private startAnimation(): void {
          var that = this;
          // todo
     }

     private calculateNewPosition(): void {
          if (this._x > this._width || this._x < 0) {
               this._vx *= -1;
          }

          if (this._y > this._height || this._y < 0) {
               this._vy *= -1;
          }

          this._x += this._vx;
          this._y += this._vy;
     }

     public draw(): void {
          var c: CanvasRenderingContext2D = this._context;
          
          // todo: draw nice rectangles!
     }
}