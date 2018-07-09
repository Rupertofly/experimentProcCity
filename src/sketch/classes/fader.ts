// tslint:disable max-classes-per-file
import * as _ from 'lodash';
export default class Fader {
  protected faders: FadeObject[];
  constructor() {
    this.faders = [];
  }
  public fadeIn = ( object: {}, key: string, time: number ) => {
    this.faders.push( new FadeObject( object, key, time, true ) );
  };
  public fadeOut = ( object: {}, key: string, time: number ) => {
    this.faders.push( new FadeObject( object, key, time, false ) );
  };
  public update = () => {
    this.faders.map( ( val, ind, arr ) => {
      if ( val.update() ) {
        arr.splice( ind, 1 );
      }
    } );
  };
}

class FadeObject {
  private currentTime: number;
  private time: number;
  private editObj: {};
  private key: string;
  private inc: boolean;
  private rate: number;

  constructor( object: {}, key: string, time: number, increasing: boolean ) {
    this.time = time;
    this.currentTime = 0;
    this.editObj = object;
    this.key = key;
    this.inc = increasing;
    this.editObj[key] = this.inc ? 0 : 255;
    this.rate = 255 / time;
  }
  public update() {
    this.currentTime++;
    if ( this.inc ) {
      this.editObj[key] += this.rate;
    } else {
      this.editObj[key] -= this.rate;
    }
    return this.currentTime > this.time ? true : false;
  }
}
