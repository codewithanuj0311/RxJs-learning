import { Component, OnInit, AfterViewInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    const obs1 = of('Anuj', 'Kapil', 'Rahul');
    obs1.subscribe((res)=> {
      console.log(res);
      this.print(res, 'elContainer3')
    })

    const obs2 = from(['ABC', 'BCD', 'DEF']);
    obs2.subscribe((res)=> {
      this.print(res, 'elContainer5')
    })

    const obs3 = interval(1000);
    obs3.pipe(
      take(5),
      toArray()
    ).subscribe((res)=> {
      console.log('toArray Operator => ', res)
    })
  }

  ngAfterViewInit() {
    
  }

  print(val:string, id:string) {
    const el = document.createElement('li');
    el.textContent = val;
    document.getElementById(id)?.appendChild(el);
  }

}
