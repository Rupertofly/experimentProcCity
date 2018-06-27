import { polygonCentroid } from 'd3';
import CellTypes from '../enums';
import { ColourObj, getC } from '../lib/pallete';
/**
 * Class For Individual Voronoi Cells
 * @author Rupert
 *
 */
export default class LCell {
  public x: number;
  public y: number;

  /** Index in voronoi array */
  public index: number;

  public centroid: [number, number];

  public type: CellTypes;

  public colour: ColourObj;
  protected polygon: d3.VoronoiPolygon<LCell>;
  protected neighbours: LCell[];
  protected closestCity: LCell;
  protected distanceToCity: number;

  /**
   * Creates an instance of LCell.
   * @param {number} X
   * @param {number} Y
   * @param {CellTypes} [TYPE=CellTypes.BASIC] Type to use for cell
   * @memberof LCell
   */
  constructor( X: number, Y: number, TYPE: CellTypes = CellTypes.BASIC ) {
    [ this.x, this.y, this.type ] = [ X, Y, TYPE ];
    this.colour = getC( 0, 6 );
  }

  /**
   * Sets the position of this cell's site from a tuple
   *
   * @param {[number, number]} pos length 2 array to use for position
   * @memberof LCell
   */
  public posFromTuple( pos: [number, number] ) {
    [ this.x, this.y ] = pos;
  }

  public addNeighbour( n: LCell ) {
    this.neighbours.push( n );
  }

  public isNeighbour( n: LCell ) {
    return this.neighbours.includes( n );
  }

  get getNeighbours() {
    return this.neighbours;
  }
  set setPolygon( poly: d3.VoronoiPolygon<LCell> ) {
    this.polygon = poly;
  }

  public drawBasic( p: p5 | Window ) {
    if ( !this.polygon ) {
      throw new Error( 'no polygon linked to this site' );
    }
    if ( p instanceof p5 ) {
      p.fill( this.colour.hex );
      p.beginShape();
      this.polygon.map( pt => p.vertex( pt[0], pt[1] ) );
      p.endShape( CLOSE );
    }
    if ( p instanceof Window ) {
      fill( this.colour.hex );
      beginShape();
      this.polygon.map( pt => vertex( pt[0], pt[1] ) );
      endShape( CLOSE );
    }
  }
  /** Runs Lloyd Smoothing on this cell */
  public smooth() {
    if ( !this.polygon ) {
      throw new Error( 'no polygon found' );
    }
    this.centroid = polygonCentroid( this.polygon );
    this.posFromTuple( this.centroid );
  }
}
