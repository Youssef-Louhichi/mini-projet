import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numtel'
})
export class NumtelPipe implements PipeTransform {

  transform(num : string): string {
    return num[0]+num[1]+" "+num[2]+num[3]+num[4]+" "+num[5]+num[6]+num[7]
  }

}
