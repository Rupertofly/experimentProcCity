import { voronoi, VoronoiDiagram } from 'd3-voronoi';
import weightedVoronoi from 'd3-weighted-voronoi';
import * as _ from 'lodash';
import LCell from './classes/LCell';
import CellTypes from './enums';
// import Offset from 'polygon-offset';
import { getC } from './lib/pallete';
let vFunc;
let vDiag: VoronoiDiagram<LCell>;
const sites = [];
let framesSinceSitesChanged = 1000;

export function setup() {
  const c = createCanvas( 300, 300 );
  c.parent( '#canvas' );
  background( 55 );
  vFunc = voronoi<LCell>()
    .size( [ width, height ] )
    .x( d => d.x )
    .y( d => d.y );
  _.range( 24 ).map( i => {
    const s = new LCell( _.random( width ), _.random( height ), CellTypes.BASIC );
    s.index = i;
    s.colour = getC( _.random( 12 ), _.random( 4 ) );
    sites.push( s );
  } );
  framesSinceSitesChanged = 0;
}

export function draw() {
  background( 155 );
  vDiag = vFunc( sites );
  vDiag.polygons().map( pgon => {
    const cell = pgon.data;
    cell.setPolygon = pgon;
    strokeWeight( 2 + Math.sin( frameCount / 100 ) );
    cell.drawBasic( window );
    if ( framesSinceSitesChanged < 12 ) {
      cell.smooth();
    }
  } );
  framesSinceSitesChanged++;
}

export function mousePressed() {
  sites.push( new LCell( mouseX, mouseY, 0 ) );
  framesSinceSitesChanged = 0;
}
