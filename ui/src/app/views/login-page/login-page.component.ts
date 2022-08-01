import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formValues = {
    userName: '',
    pass: ''
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.apiService.login(this.formValues).subscribe(resp => {
      localStorage.setItem('userData', JSON.stringify(resp))
      this.router.navigate(['/dashboard'])
    })
  }
}
