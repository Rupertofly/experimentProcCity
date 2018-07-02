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
let c: p5.Renderer;
export function setup() {
  c = createCanvas( 300, 300 );
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
    strokeWeight( 1 + Math.sin( frameCount / 100 ) );
    drawingContext.filter = 'blur(0.5px)';
    cell.drawBasic( window );
    if ( framesSinceSitesChanged < 12 ) {
      cell.smooth();
    }
  } );
  framesSinceSitesChanged++;
  drawingContext.filter = 'none';
  const x = drawingContext.getImageData( 0, 0, width, height );
  ellipse( 30, 30, 50, 50 );
  drawingContext.filter = 'blur(12px)';
  const y = createImageBitmap( x ).then( b => drawingContext.drawImage( b, 0, 0 ) );

  fill( 0 );
  textFont( 'Nunito', 500 );
  textStyle( '700' );
  textSize( 50 );
  text( 'Ruby Quail', 50, 50 );

  textFont( 'Nunito' );
  textSize( 50 );
  drawingContext.font = '700 30px quicksand';
  text( 'Ruby Quail', 50, 100 );
}

export function mousePressed() {
  sites.push( new LCell( mouseX, mouseY, 0 ) );
  framesSinceSitesChanged = 0;
}
