import CellTypes from '../enums';
import { ColourObj, getC } from '../lib/pallete';

export default class LCell {
  public x: number;
  public y: number;
  public index: number;
  public centroid: [number, number];
  public type: CellTypes;

  public colour: ColourObj;
  protected polygon: d3.VoronoiPolygon<LCell>;
  protected neighbours: LCell[];
  protected closestCity: LCell;
  protected distanceToCity: number;
  constructor( X: number, Y: number, TYPE: CellTypes = CellTypes.BASIC ) {
    [ this.x, this.y, this.type ] = [ X, Y, TYPE ];
    this.colour = getC( 0, 6 );
  }
  public posFromArray( pos: [number, number] ) {
    [ this.x, this.y ] = pos;
  }
  public addNeighbour( n: LCell ) {
    this.neighbours.push( n );
  }
  public isNeighbour( n: LCell ) {
    return this.neighbours.includes( n );
  }
  public drawBasic( p: p5 | Window ) {
    if ( p instanceof p5 ) {
      p.fill( this.colour.hex );
      p.beginShape();
      this.polygon.map( pt => p.vertex( pt[0], pt[1] ) );
      p.endShape();
    }
    if ( p instanceof Window ) {
      fill( this.colour.hex );
      beginShape();
      this.polygon.map( pt => vertex( pt[0], pt[1] ) );
      endShape();
    }
  }
}
