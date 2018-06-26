// @ts-ignore
import interpolate from 'b-spline';
import { polygonCentroid, voronoi } from 'd3';
import * as _ from 'lodash';
// @ts-ignore
import Offset from 'polygon-offset';
import { getC } from './pallete';

type pointTup = [number, number];
let vFunc: d3.VoronoiLayout<pointTup>;
let vDiag: d3.VoronoiDiagram<pointTup>;
let sites: Array<[number, number]>;
export function setup() {
  const w = ( n => {
    let res = 2;
    while ( res < n ) {
      res *= 2;
    }
    return res / 2;
  } )( _.min( [ window.innerHeight, window.innerWidth ] ) );
  const c = createCanvas( w, w );
  c.parent( select( '#canvas' ) );
  const bg = getC( 1, 6 ).hex;
  background( bg );
  const amtPerRow = w / 30;
  const count = Math.pow( amtPerRow, 2 );
  sites = _.range( count ).map( i => {
    let x = ( i % amtPerRow ) * 30;
    let y = _.floor( i / amtPerRow ) * 30;
    x = x + _.random( -30, 30 );
    y = y + _.random( -30, 30 );
    return [ x, y ] as pointTup;
  } );
  vFunc = voronoi<pointTup>().size( [ w, w ] );
  vDiag = vFunc( sites );
}

export function draw() {
  const bg = getC( 1, 6 ).hex;
  background( bg );
  stroke( getC( 1, 3 ).hex );
  strokeWeight( 3 );
  noFill();
  const off = new Offset();
  vDiag.polygons().map( polygon => {
    const pts = polygon;
    const length = pts.length;
    const min = _.min( [ 12, length ] );
    pts.push( ...pts.slice( 0, min ) );
    beginShape();
    for ( let t = 0; t <= 1.0; t += 0.01 ) {
      const pt = interpolate( t, min, pts );
      vertex( pt[0], pt[1] );
    }
    endShape();
  } );
  // filter(BLUR, 1);
  vDiag.polygons().map( polygon => {
    polygon.data[0] = polygonCentroid( polygon )[0];
    polygon.data[1] = polygonCentroid( polygon )[1];
  } );
  vDiag = vFunc( sites );
}

export function mousePressed() {}
