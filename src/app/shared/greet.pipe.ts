import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(name: string): string {
    let greeting;
    let time = new Date().getHours();
    if (time < 12) {
        greeting = "Good morning";
    } else if (time < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    return name ? greeting + ' ' + name + '!' : '';
  }

}
