import { Brick } from './device';
export class Volume {
    constructor(
        name: string,
        id: string,
        size: number,
        durability: any,
        snapshot: any,
        mount: any,
        bricks: Array<Brick>
    ){}
}