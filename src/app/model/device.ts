export class Device {
    constructor(
        name: string,
        id: string,
        storage: Storage,
        bricks: Array<Brick>
    ){}
}

export class Brick {
    constructor(
        path: string,
        id: string,
        size: number,
        node?: string,
        device?: string
    ){}
}

export class Storage {
    constructor(
        total: number,
        free: number,
        used: number
    ){}
}