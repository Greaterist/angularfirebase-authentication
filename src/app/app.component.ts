import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[
    RouterModule
  ]
})
export class AppComponent {
  title = 'angularfiebase-authentication';
}
