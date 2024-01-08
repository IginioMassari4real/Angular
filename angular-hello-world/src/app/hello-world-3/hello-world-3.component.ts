import { Component } from '@angular/core';
import { HelloWorld4Component } from '../hello-world-4/hello-world-4.component';

@Component({
  selector: 'app-hello-world-3',
  standalone: true,
  imports: [HelloWorld4Component],
  templateUrl: './hello-world-3.component.html',
  styleUrl: './hello-world-3.component.css'
})
export class HelloWorld3Component {
  text : string ="quarto";
}
