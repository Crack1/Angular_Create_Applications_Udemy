import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(image: any[]): any {
    let noImage = 'assets/img/noimage.png'
    if (!image) {
      return noImage
    }
    return (image.length > 0) ? image[1].url : noImage
  }

}
