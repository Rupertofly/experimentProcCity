// @ts-ignore
import bs from 'b-spline';
import { polygonCentroid } from 'd3-polygon';
import { WVpoly } from 'd3-weighted-voronoi';
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
  public weight: number;

  public centroid: [number, number];

  public type: CellTypes;

  public colour: ColourObj;
  public opacity: number;
  protected clipper: OffsetObj;
  protected polygon: WVpoly<LCell>;
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
    this.colour = getC( floor( 3 + random( 4 ) ), floor( 2 + random( 4 ) ) );
    // @ts-ignore
    this.clipper = new Offset();
    this.weight = 3;
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

  public getNeighbours() {
    return this.neighbours;
  }
  public setPolygon( poly: WVpoly<LCell> ) {
    this.polygon = poly;
  }

  public drawSimple( drawSurface: p5 | Window = window ) {
    const ds = drawSurface;
    ds.fill( toCol( this.colour, this.opacity ) );
    ds.noStroke();
    ds.beginShape();
    this.polygon.map( v => ds.vertex( v[0], v[1] ) );
    ds.endShape();
    const f = new Fader();
  }
  public drawWeight( drawSurface: p5 | Window = window ) {
    const ds = drawSurface;
    ds.push();
    ds.translate( this.x, this.y );
    ds.noFill();
    ds.stroke( 0, 255, 255 );
    ds.ellipse( 0, 0, this.weight, this.weight );
    ds.pop();
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
