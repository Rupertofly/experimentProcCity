import weightedVoronoi from 'd3-weighted-voronoi';
import * as _ from 'lodash';
import Fader from './classes/fader';
import LCell from './classes/LCell';
import VM from './classes/VorManager';
import CellTypes from './enums';
// import Offset from 'polygon-offset';
import { getC } from './lib/pallete';

const sites = [];
const framesSinceSitesChanged = 1000;
let c: p5.Renderer;
let voronoi: VM;
let F: Fader;
export function setup() {
  c = createCanvas( 500, 500 );

  c.parent( '#canvas' );
  frameRate( 12 );
  background( getC( 2, 5 ).hex );
  voronoi = new VM( width, height, 50 );
  F = new Fader();
}
export function draw() {
  background( 55 );
  F.update();

  voronoi.sites.map( s => {
    // s.drawSimple();
    // s.drawPadded();
    // s.drawWeight();
    s.drawPaddedRound();
    if ( frameCount < 30 ) { s.smooth(); }
  } );
  const mSite = voronoi.sites[voronoi.sites.length - 5];
  mSite.x = mouseX < 0 ? 0 : mouseX > width ? width : mouseX;

  mSite.y = mouseY < 0 ? 0 : mouseY > height ? height : mouseY;
  mSite.weight = 1;
  voronoi.updateD();
}

export function mousePressed() {
  F.fadeIn( voronoi.sites[_.random( 0, 16, false )], 'weight', 180, 120 );
  console.log( 'fader created' );
}
