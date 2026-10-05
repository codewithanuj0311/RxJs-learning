import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDetail();
  }

  fetchDetail() {
    this.http.get(
      'https://my-learning-project-da6f3-default-rtdb.firebaseio.com/products.json'
    ).pipe(
      retry(3)
    ).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

}
