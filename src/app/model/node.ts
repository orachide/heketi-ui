import { Hostname } from './hostname';
import { Device } from './device';
export class Node {
    constructor(
        id: string,
        zone: number,
        cluster: string,
        hostnames: Array<Hostname>,
        devices: Array<Device>
    ){}
}
