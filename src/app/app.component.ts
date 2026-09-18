import { UtilityService } from './includes/utility.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-anuj';
  Subject: string = 'false';

  constructor(private utility: UtilityService) {
    this.utility.msg.subscribe((res)=> {
      this.Subject = res;
    })
  }
}
