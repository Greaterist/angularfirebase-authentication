import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [

  ],
})

export class SignInComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
