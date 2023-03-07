import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
    <!-- <p>
      {{rando}}
    </p> -->
  `,
  styles: [`
    button {
        height: 100%;
        width: 100%;
        font-size: 5em;
    }`]
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  // rando = Math.random();

  // constructor(){
  //   setInterval(()=>this.rando = Math.random(),500)
  // }
}
