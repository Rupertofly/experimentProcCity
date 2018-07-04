import { voronoi, VoronoiDiagram } from 'd3-voronoi';
import weightedVoronoi from 'd3-weighted-voronoi';
import * as _ from 'lodash';
import LCell from './classes/LCell';
import CellTypes from './enums';
// import Offset from 'polygon-offset';
import getC from './lib/pallete';

let vFunc;
let vDiag: VoronoiDiagram<LCell>;
const sites = [];
const framesSinceSitesChanged = 1000;
let c: p5.Renderer;

export function setup() {
  createCanvas( window.innerHeight, window.innerHeight );
  background( getC( 3, 5 ).hex );
}

export function draw() {}

export function mousePressed() {}
