/* tslint:disable max-classes-per-file */
declare module 'd3-weighted-voronoi' {
  interface WVpoly extends Array<[number, number]> {
    site: Vertex;
  }
  interface Vertex {
    x: number;
    y: number;
    weight: number;
    index: number;
    conflicts: {};
    neighbours: Vertex[];
    polygon: WVpoly;
    originalObject: {};
  }
  interface WeightedVoronoi {
    ( sites: any[] ): WVpoly[];
    x(): ( d: any ) => number;
    x( x: ( d: any ) => number ): this;
    y(): ( d: any ) => number;
    y( y: ( d: any ) => number ): this;
    size(): [number, number] | null;
    size( size: [number, number] ): this;
    weights(): ( d: any ) => number;
    weights( weights: ( d: any ) => number ): this;
  }
  export default function weightedVoronoi(): WeightedVoronoi;
}
