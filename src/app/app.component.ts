import { Component } from '@angular/core';
import { ApiProviderService } from './api-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public service: ApiProviderService) {}
  title = 'angular-test-ajackus';
}
