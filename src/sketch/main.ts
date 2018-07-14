import weightedVoronoi from 'd3-weighted-voronoi';
import * as _ from 'lodash';
import Fader from './classes/fader';
import LCell from './classes/LCell';
import VM from './classes/VorManager';
import CellTypes from './enums';
// import Offset from 'polygon-offset';
import { getC } from './lib/pallete';
const frameR = [].fill( 0, 0, 4 );
const sites = [];
const framesSinceSitesChanged = 1000;
let c: p5.Renderer;
let voronoi: VM;
let F: Fader;
let selectedCell: LCell;
export function setup() {
  c = createCanvas( 500, 500 );

  c.parent( '#canvas' );
  const e = select( '#canvas' ) as p5.Element;
  e.child( ( createDiv() as p5.Element ).id( 'fr' ).class( 'container-fluid' ) );
  frameRate( 60 );
  pixelDensity( 1 );
  background( getC( 2, 5 ).hex );
  voronoi = new VM( width, height, 20 );
  voronoi.redrawSimple();
  F = new Fader();
}
export function draw() {
  background( 55, 255 );

  select( '#fr' ).html( frCalc().toPrecision( 3 ) );

  voronoi.sites.map( s => {
    if ( !( frameCount % 10 ) ) {
      s.smooth();
    }
    if ( !F.isAnimating( s ) ) {
      s.opacity = 100;
    }
  } );

  F.update();
  const mCell = voronoi.getCell( mouseX, mouseY );
  if ( mCell !== selectedCell ) {
    F.fadeIn( mCell, 'opacity', 60, 255, 100 );
  }
  selectedCell = mCell;
  if ( !( frameCount % 3 ) ) {
    voronoi.redrawSimple();
    voronoi.updateD();
    voronoi.updateNeighbours();
  }
  image( voronoi.graphicsBuffer, 0, 0 );
  const mSite = voronoi.sites[voronoi.sites.length - 5];
  mSite.weight = 1;
}

export function mousePressed() {
  F.fadeIn( voronoi.sites[_.random( 0, 16, false )], 'weight', 180, 120 );
  console.log( 'fader created' );
  console.log(
    voronoi.getPath( voronoi.getCell( mouseX, mouseY ), voronoi.sites[12] )
  );
}
function frCalc() {
  const id = frameCount % 10;
  frameR[id] = frameRate();
  return _.mean( frameR );
}
