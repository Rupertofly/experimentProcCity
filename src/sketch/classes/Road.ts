import { CellTypes, pt, RoadTypes } from '../enums';
import * as pal from '../lib/pallete';
import LCell from './LCell';
import VorManager from './VorManager';

class Road {
  public readonly start: LCell;
  public readonly end: LCell;
  public type: RoadTypes;
  private sourceVor: VorManager;
  private path: LCell[];
  private coords: pt[];

  constructor(
    sourceVor: VorManager,
    start: LCell,
    end: LCell,
    type: RoadTypes
  ) {
    Object.apply( this, arguments );
    this.path = sourceVor.getPath( this.start, this.end );
    this.path.map( cell => ( cell.type = CellTypes.ROAD ) );
  }
  public draw( ds: p5 | Window = window ) {
    ds.push();
    ds.noFill();
    

  }
}
