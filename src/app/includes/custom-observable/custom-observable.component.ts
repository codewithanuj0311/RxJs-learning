import { Component, OnInit } from '@angular/core';
import { Observable, interval, map, Subscription, from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  constructor() { }

  arr = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert'];
  arr2 = from([
    {
      name: 'Anup',
      details: {
        surname: 'Shekhar'
      }
    },
    {
      name: 'Sharma',
      details: {
        surname: 'Uxtrendz'
      }
    },
    {
      name: 'John',
      details: {
        surname: 'Alex'
      }
    },
    {
      name: 'Robert',
      details: {
        surname: 'David'
      }
    }
  ]);
  randomName:string = '';
  sub1!: Subscription;
  NameVal:string[] = []

  ngOnInit(): void {

    // const custObs = new Observable<string>((observer)=> {
    //   setTimeout(()=> {
    //     observer.next('Angular')
    //   }, 1000);
    //   setTimeout(()=> {
    //     observer.next('js')
    //   }, 2000);
    //   setTimeout(()=> {
    //     observer.next('HTML')
    //   }, 3000);
    //   setTimeout(()=> {
    //     observer.next('CSS')
    //   }, 4000)
    // })

    // const custObs2 = new Observable<string>((observer)=> {
    //   let count = 1;
      
    //   setInterval(()=> {
    //     observer.next('video' + count);
    //     if(count>=5){
    //       observer.complete()
    //     }
    //     count++;
        
    //   },1000)
      
      
    // })

    // const custObs3 = new Observable<string>((observer)=> {
    //   let count = 0;
    //   setInterval(()=> {
    //     observer.next(this.arr[count])
    //     if(count>=6)
    //     observer.complete()
    //     count++
    //   },1000)
    // })

   
    // custObs.subscribe((res)=> {
    //   this.print(res, 'el1')
    // })

    // custObs2.subscribe((res)=> {
    //   console.log(res)
    // })
    // custObs3.subscribe((res)=> {
    //   this.randomName = res;
    // })

    let data = from([
      {
        id: 1,
        name: 'Anuj'
      },
      {
        id: 2,
        name: 'Rahul'
      },
      {
        id: 3,
        name: 'Amit'
      },
      {
        id: 4,
        name: 'Rohit'
      },
      {
        id: 5,
        name: 'Vikas'
      },
      {
        id: 6,
        name: 'Karan'
      },
      {
        id: 7,
        name: 'Nikhil'
      },
      {
        id: 8,
        name: 'Arjun'
      },
      {
        id: 9,
        name: 'Varun'
      },
      {
        id: 10,
        name: 'Aditya'
      }
    ]);

    data.pipe(
      map((data)=> {
        return data.name
      })
    ).subscribe(res => console.log(res))


    const obs4 = interval(1000);

    this.sub1 = obs4.pipe(map((data)=> {
      return 'video ' + data*10;
    })).subscribe((res)=> {
      console.log(res)
    })

    setTimeout(()=> {
      this.sub1.unsubscribe();
    }, 10000)

    
    this.arr2.pipe(
      map(item => item.details.surname), //used inplace of pluck which is deprecated now
      toArray()
      ).subscribe((res)=> {
      console.log(res);
      this.NameVal = res;
    })

    
  }



  print(val:string, id:string) {
    const el = document.createElement('div');
    el.classList.add('border', 'border-danger', 'rounded', 'p-2', 'mb-2', 'text-danger', 'bg-danger-subtle')
    el.textContent = val;
    document.getElementById(id)?.appendChild(el);
  }



}

