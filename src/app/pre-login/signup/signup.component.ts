import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiProviderService } from 'src/app/api-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  requestForm = this.fb.group({
    name: ['John Doe'],
    email: ['john@requantive.com'],
    phone: ['', Validators.compose([Validators.required])],
  });
  constructor(private fb: FormBuilder, private service: ApiProviderService, private router: Router) { }

  ngOnInit() {
  }

  signUp(formData) {
    console.log(formData);
    this.service.signUp(formData).subscribe(res => {
      console.log(res);
      this.router.navigate(['thank-you']);
    }, err => console.error(err));
  }

}
