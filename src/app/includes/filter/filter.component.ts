import { filter, toArray, map, interval,Subscription, from, tap, fromEvent, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

   users = [
    { id: 1, name: 'Anup', gender: 'Male' },
    { id: 2, name: 'Priyanka', gender: 'Female' },
    { id: 3, name: 'Ashish', gender: 'Male' },
    { id: 4, name: 'Vivek', gender: 'Male' },
    { id: 5, name: 'Janet', gender: 'Female' },
    { id: 6, name: 'Mounika', gender: 'Female' },
    { id: 7, name: 'Rahul', gender: 'Male' },
    { id: 8, name: 'Sanjana', gender: 'Female' },
    { id: 9, name: 'Neha', gender: 'Female' },
    { id: 10, name: 'Sakshi', gender: 'Female' },
    { id: 11, name: 'Karan', gender: 'Male' },
    { id: 12, name: 'Pradeep', gender: 'Male' }
  ];
  source1:any[] = [];
  sub1!: Subscription

  ngOnInit(): void {
    const source = from(this.users);

    // source.pipe(
    //   filter((item)=> {
    //     return item.name.length > 6;
    //   }),
    //   toArray()
    // ).subscribe((res)=> {
    //   console.log(res);
    //   this.source1 = res;
    // })

    const obs1 = interval(1000);
    

    this.sub1 = obs1.pipe(
      tap((res)=> {
        if(res ==4)
        this.sub1.unsubscribe();
      }),
      map((item)=> {
        return this.users[item]
      })
    ).subscribe((res)=> {
      console.log(res);
    })


    const obs2 = interval(1000);

    let condition = fromEvent(document, 'click');

    obs2.pipe(
      takeUntil(condition)
    ).subscribe((res)=> {
      console.log(res);
    })

  
  }

}
