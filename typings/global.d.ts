declare module 'ccapture.js' {
  export default class CCapture {
    constructor( {} );
    public start();
  }
}

declare const fBufffer: p5.Graphics;
declare const bBufffer: p5.Graphics;

declare module 'polygon-offset' {
  export default function Offset(): OffsetObj;
  export interface OffsetObj {
    data( sites: any[] ): this;
    padding( dist: number ): any[][];
  }
}
