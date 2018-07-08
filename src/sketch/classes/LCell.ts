// @ts-ignore
import bs from 'b-spline';
import { polygonCentroid } from 'd3-polygon';
import * as _ from 'lodash';
import Offset, { OffsetObj } from 'polygon-offset';
import CellTypes from '../enums';
import { toCol } from '../lib/helperFuncs';
import { ColourObj, getC } from '../lib/pallete';
import Fader from './fader';
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
  public width: number;

  public centroid: [number, number];

  public type: CellTypes;

  public colour: ColourObj;
  public opacity: number;
  protected clipper: OffsetObj;
  protected polygon: d3.VoronoiPolygon<LCell>;
  protected neighbours: LCell[];
  protected closestCity: LCell;
  protected distanceToCity: number;
  protected clippedPoly: Array<[number, number]>;

  /**
   * Creates an instance of LCell.
   * @param {number} X
   * @param {number} Y
   * @param {CellTypes} [TYPE=CellTypes.BASIC] Type to use for cell
   * @memberof LCell
   */
  constructor( X: number, Y: number, TYPE: CellTypes = CellTypes.BASIC ) {
    [this.x, this.y, this.type] = [X, Y, TYPE];
    this.colour = getC( 0, 6 );
    // @ts-ignore
    this.clipper = new Offset();
    this.width = 30;
    const pg = bs( 0.2, 1, [[0, 0], [1, 1], [2, 1]] );
    console.log( pg );
  }

  /**
   * Sets the position of this cell's site from a tuple
   *
   * @param {[number, number]} pos length 2 array to use for position
   * @memberof LCell
   */
  public posFromTuple( pos: [number, number] ) {
    [this.x, this.y] = pos;
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

  public drawSimple( drawSurface: p5 | Window = window ) {
    const ds = drawSurface;
    const v = new LCell( 32, 32, 0 );
    ds.fill( toCol( this.colour, this.opacity ) );

    const f = new Fader();
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
