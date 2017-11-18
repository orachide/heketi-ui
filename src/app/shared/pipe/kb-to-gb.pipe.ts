import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kbToGb'
})
export class KbToGbPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value ? value / 1024 / 1024 : 0).toFixed(2) + ' Gb';
  }

}
