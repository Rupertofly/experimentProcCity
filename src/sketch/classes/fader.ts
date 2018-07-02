// tslint:disable max-classes-per-file
import * as _ from 'lodash';
export default class Fader {
  protected faders: FadeObject[];
  public fadeIn = ( object: {}, key: string, time: number ) => {
    this.faders.push( new FadeObject( object, key, time, true ) );
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
  }
}
