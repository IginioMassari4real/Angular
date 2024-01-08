import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorld3Component } from './hello-world-3/hello-world-3.component';
import { HelloWorld2Component } from './hello-world-2/hello-world-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HelloWorld3Component, HelloWorld2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hello-world';
  text= "app"
}
