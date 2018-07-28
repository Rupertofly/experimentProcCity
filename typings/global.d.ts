// tslint:disable max-classes-per-file no-internal-module no-namespace

declare module 'ccapture.js' {
  export default class CCapture {
    constructor( {} );
    public start();
  }
}
declare const CCapture: any;
declare module 'd3plus-shape' {
  function largestRect(
    polygon: Array<[number, number]>,
    options?: LRecOptions
  ): LRec;
  interface LRecOptions {
    angle?: number;
    aspectRatio?: number;
    maxAspectRatio?: number;
    minAspectRatio?: number;
    nTries?: number;
    origin?: [number, number];
    cache?: boolean;
  }
  interface LRec {
    angle: number;
    area: number;
    cx: number;
    cy: number;
    height: number;
    points: Array<[number, number]>;
    width: number;
  }
}
declare const fBufffer: p5.Graphics;
declare const bBufffer: p5.Graphics;
declare const drawingContext: CanvasRenderingContext2D;
declare interface CanvasRenderingContext2D {
  filter: string;
}
declare module 'dat.gui' {
  interface Controller {
  onChange( func: ( value ) => void );
  onFinishChange( func: ( value ) => void );
  listen(): void;
  getValue(): any;
  setValue( value: any ): void;
  updateDisplay(): this;
  options( options: {} ): this;
  name( name:string ): this;
}
class GUI {
  constructor();
  public add( object: object, prop: string ): Controller;
  public add( object: object, prop: string, min: number, max: number ): Controller;
  public add( object: object, prop: string, min: number, max: number, step: number ): Controller;
  public add( object: object, prop: string, choices: any[] ): Controller;
  public add( object: object, prop: string, choices: object ): Controller;
}}
declare module 'polygon-offset' {
  export default class Offset {
    constructor( vert?: any[], arc?: number );

    public data( sites: any[] ): this;
    public padding( dist: number ): any[][];
    public offsetLine( dist: number ): any[][];
  }
}
declare interface Window extends p5 {
  qw: () => void;
}
declare namespace p5 {
  // tslint:disable no-empty-interface
  interface Graphics extends p5.Renderer {}
}
