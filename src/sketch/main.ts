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
export function setup() {
  c = createCanvas( window.innerWidth - 20, window.innerWidth );

  c.parent( '#canvas' );
  background( getC( 2, 5 ).hex );
  voronoi = new VM( width, height, 60 );
}
export function draw() {
  voronoi.sites.map( s => {
    s.drawSimple();
    s.drawWeight();
  } );
}

export function mousePressed() {}
