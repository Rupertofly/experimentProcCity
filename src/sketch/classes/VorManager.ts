import { quadtree } from 'd3';
import * as wv from 'd3-weighted-voronoi';
import * as _ from 'lodash';
import CellTypes from '../enums';
import Queue from '../lib/priority-queue';
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
    this.quadtree = quadtree<LCell>()
      .x( c => c.x )
      .y( c => c.y )
      .extent( [[0, 0], [this.width, this.height]] );
    this.vDiagram = this.vLayout( this.sites );
    this.vDiagram.map( poly => poly.site.originalObject.setPolygon( poly ) );
    this.quadtree.addAll( this.sites );
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
    // @ts-ignore
    this.graphicsBuffer.clear();
    this.sites.map( s => s.drawSimple( this.graphicsBuffer as any ) );
  }
  public getCell( x: number, y: number ) {
    return this.quadtree.find( x, y );
  }
  public getPath( start: LCell, end: LCell ) {
    const heuristic = ( a: LCell, b: LCell ) => {
      return abs( a.x - b.x ) + abs( a.y - b.y );
    };
    const frontier = new Queue<LCell>();
    frontier.enqueue( start, 0 );
    const cameFrom = {};
    const costSoFar = {};
    cameFrom[start.index] = null;
    costSoFar[start.index] = 0;
    while ( !frontier.isEmpty() ) {
      const current = frontier.dequeue().element;
      if ( current === end ) break;
      for ( const next of current.getNeighbours() ) {
        const newCost = ( costSoFar[current.index] || 0 ) + 1;
        if (
          costSoFar[next.index] === undefined ||
          newCost < costSoFar[next.index]
        ) {
          costSoFar[next.index] = newCost;
          const priority = heuristic( end, next );
          frontier.enqueue( next, priority );
          cameFrom[next.index] = current;
        }
      }
    }
    return cameFrom;
  }

  public updateNeighbours() {
    this.sites.map( site => site.updateNeighbours() );
  }
}
