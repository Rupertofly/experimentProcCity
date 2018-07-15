import bSpline from 'b-spline';
import * as _ from 'lodash';
import { CellTypes, pt, RoadTypes } from '../enums';
import { toP5Col } from '../helperFuncs';
import * as pal from '../lib/pallete';
import LCell from './LCell';
import VorManager from './VorManager';

export default class Road {
  public start: LCell;
  public end: LCell;
  public alpha;
  public type: RoadTypes;
  private sourceVor: VorManager;
  private path: LCell[];
  private coords: pt[];

  constructor(
    sourceVor: VorManager,
    start: LCell,
    end: LCell,
    type: RoadTypes,
    alpha: number = 255
  ) {
    this.sourceVor = sourceVor;
    this.start = start;
    this.end = end;
    this.type = type;
    this.alpha = alpha;
    this.path = sourceVor.getPath( this.start, this.end );
    this.path.map( cell => ( cell.type = CellTypes.ROAD ) );
  }
  public draw( ds: p5 | Window = window ) {
    if ( !this.coords ) this.calculate();
    ds.push();
    ds.noFill();
    ds.stroke( toP5Col( pal.getC( pal.hues.warms, pal.shades.light ) ) );
    ds.strokeWeight( 3 );
    ds.beginShape();
    this.coords.map( p => vertex( p[0], p[1] ) );
    ds.endShape();
  }
  public calculate() {
    let c = this.path.map( cell => [cell.x, cell.y] as pt );
    c = [c[0], ...c, c[c.length - 1]];
    const path = _.range( 0, 1, 0.01 ).map( t => bSpline( t, 2, c ) );
    this.coords = path;
  }
}
