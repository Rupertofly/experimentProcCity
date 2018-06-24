import { getC } from './pallete';
import { voronoi, polygonCentroid } from 'd3';
import * as _ from 'lodash';
//@ts-ignore
import interpolate from 'b-spline';
//@ts-ignore
import Offset from 'polygon-offset';
// @ts-ignore
// @ts-ignore
let vFunc: d3.VoronoiLayout;
let vDiag: d3.VoronoiDiagram<[number, number]>;
let sites: [number, number][];
export function setup() {
  let w = (n => {
    let res = 2;
    while (res < n) res *= 2;
    return res / 2;
  })(_.min([window.innerHeight, window.innerWidth]));
  let c = createCanvas(w, w);
  c.parent(select('#canvas'));
  let bg = getC(1, 6).hex;
  background(bg);
  let amtPerRow = w / 30;
  let count = Math.pow(amtPerRow, 2);
  sites = _.range(count).map(i => {
    let x = (i % amtPerRow) * 30;
    let y = _.floor(i / amtPerRow) * 30;
    x = x + _.random(-30, 30);
    y = y + _.random(-30, 30);
    return [x, y] as [number, number];
  });
  vFunc = voronoi<[number, number]>().size([w, w]);
  vDiag = vFunc(sites);
}

export function draw() {
  let bg = getC(1, 6).hex;
  background(bg);
  stroke(getC(1, 3).hex);
  strokeWeight(3);
  noFill();
  let off = new Offset();
  vDiag.polygons().map(polygon => {
    let pts = polygon;
    let length = pts.length;
    let min = _.min([12, length]);
    pts.push(...pts.slice(0, min));
    beginShape();
    for (let t = 0; t <= 1.0; t += 0.01) {
      let pt = interpolate(t, min, pts);
      vertex(pt[0], pt[1]);
    }
    endShape();
  });
  //filter(BLUR, 1);
  vDiag.polygons().map(polygon => {
    polygon.data[0] = polygonCentroid(polygon)[0];
    polygon.data[1] = polygonCentroid(polygon)[1];
  });
  vDiag = vFunc(sites);
}

export function mousePressed() {}
