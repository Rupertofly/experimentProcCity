import * as wv from 'd3-weighted-voronoi';
import * as _ from 'lodash';
import CellTypes from '../enums';
import LCell from './LCell';
export default class VorManager {
  public vLayout: wv.WeightedVoronoi<LCell>;
  public vDiagram: Array<wv.WVpoly<LCell>>;
  public siteCount: number;
  public sites: LCell[];
  private width: number;
  private height: number;

  constructor( width: number, height: number, spacing?: number ) {
    this.width = width;
    this.height = height;
    const space = spacing || 30;
    const dis = _.min( [ width, height ] );
    const v = dis / space;
    this.siteCount = _.floor( Math.pow( v, 2 ) );
    this.sites = _.range( this.siteCount ).map( () => {
      const x = _.random( dis, true );
      const y = _.random( dis, true );
      return new LCell( x, y, CellTypes.BASIC );
    } );
    this.vLayout = wv
      .weightedVoronoi<LCell>()
      .x( c => c.x )
      .y( c => c.y )
      .weights( c => ( c.type ? 100 : 1 ) )
      .size( [ this.width, this.height ] );
    this.vDiagram = this.vLayout( this.sites );
  }
}
