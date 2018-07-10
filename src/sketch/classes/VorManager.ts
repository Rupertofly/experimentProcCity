import { quadtree } from 'd3';
import * as wv from 'd3-weighted-voronoi';
import * as _ from 'lodash';
import CellTypes from '../enums';
import LCell from './LCell';
export default class VorManager {
  public vLayout: wv.WeightedVoronoi<LCell>;
  public vDiagram: Array<wv.WVpoly<LCell>>;
  public siteCount: number;
  public sites: LCell[];
  public graphicsBuffer: p5.Graphics;
  private width: number;
  private height: number;
  private quadtree: d3.Quadtree<LCell>;

  constructor( width: number, height: number, spacing?: number ) {
    this.width = width;
    this.height = height;
    const space = spacing || 30;
    const dis = _.min( [width, height] );
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
      .weight( c => 30 * c.weight )
      .size( [this.width, this.height] );
    this.vDiagram = this.vLayout( this.sites );
    this.vDiagram.map( poly => poly.site.originalObject.setPolygon( poly ) );
  }
  public updateD() {
    this.vDiagram = this.vLayout( this.sites );
    this.vDiagram.map( poly => poly.site.originalObject.setPolygon( poly ) );
  }
  public createGraphic() {
    this.graphicsBuffer = createGraphics( this.width, this.height );
    // @ts-ignore
    return this.graphicsBuffer;
  }
  public redrawSimple() {
    if ( !this.graphicsBuffer ) {
      this.createGraphic();
    }
    this.sites.map( s => s.drawSimple( this.graphicsBuffer as any ) );
  }
}
