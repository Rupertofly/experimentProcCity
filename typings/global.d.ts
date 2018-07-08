declare module 'ccapture.js' {
  export default class CCapture {
    constructor( {} );
    public start();
  }
}

declare const fBufffer: p5.Graphics;
declare const bBufffer: p5.Graphics;
declare const drawingContext: CanvasRenderingContext2D;
declare interface CanvasRenderingContext2D {
  filter: string;
}
declare module 'polygon-offset' {
  export default function Offset(): OffsetObj;
  export interface OffsetObj {
    data( sites: any[] ): this;
    padding( dist: number ): any[][];
  }
}
declare interface Window extends p5 {
  qw: () => void;
}
