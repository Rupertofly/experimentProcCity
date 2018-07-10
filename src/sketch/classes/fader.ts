// tslint:disable max-classes-per-file
import * as _ from 'lodash';
export default class Fader {
  protected faders: FadeObject[];
  constructor() {
    this.faders = [];
  }
  public fadeIn = (
    object: {},
    key: string,
    time: number,
    end: number,
    start: number = 0
  ) => {
    this.faders.push( new FadeObject( object, key, time, true, start, end ) );
  };
  public fadeOut = (
    object: {},
    key: string,
    time: number,
    end: number,
    start: number = 255
  ) => {
    this.faders.push( new FadeObject( object, key, time, false, start, end ) );
  };
  public update = () => {
    this.faders.map( ( val, ind, arr ) => {
      if ( val.update() ) {
        arr.splice( ind, 1 );
      }
    } );
  };
  public isAnimating( object: {} ) {
    return this.faders.some( f => f.getObj() === object ) as boolean;
  }
}

class FadeObject {
  private currentTime: number;
  private time: number;
  private editObj: {};
  private key: string;
  private inc: boolean;
  private rate: number;

  constructor(
    object: {},
    key: string,
    time: number,
    increasing: boolean = false,
    start: number = 0,
    end: number = 255
  ) {
    this.time = time;
    this.currentTime = 0;
    this.editObj = object;
    this.key = key;
    this.inc = increasing;
    this.editObj[key] = this.inc ? start : end;
    this.rate = end / time;
  }
  public update() {
    this.currentTime++;
    if ( this.inc ) {
      this.editObj[this.key] += this.rate;
    } else {
      this.editObj[this.key] -= this.rate;
    }
    return this.currentTime > this.time ? true : false;
  }
  public getObj() {
    return this.editObj;
  }
}
