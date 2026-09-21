import { concat, interval, map, take, of, mergeMap, mergeAll, tap, Subscription, concatMap, delay } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.scss']
})
export class ConcatMergeComponent implements OnInit {

  constructor() { }
  subs !: Subscription;

  ngOnInit(): void {

    const src1 = interval(1000).pipe(
      map((res)=> 'Tech Videos '+ (res+1)),
      take(5)
    )
    const src2 = interval(1000).pipe(
      map((res)=> 'Comedy Videos '+ (res+1)),
      take(3)
    )
    const src3 = interval(1000).pipe(
      map((res)=> 'News Videos '+ (res+1)),
      take(4)
    )

    const finalObs = concat(src1,src2,src3).subscribe((res)=> {
      this.print(res, 'concatMerge')
    })

    //MergeMap
    const obs4 = interval(1000);

    // this.subs = obs4.pipe(
    //   mergeMap((res)=> {
    //     return this.obs5(res)
    //   }),
    //   tap((res)=> {
    //     if(res == 'video 10')
    //     this.subs.unsubscribe()
    //   })
    // )
    // .subscribe((res)=> {
    //   console.log(res);
    // })


    //ConcatMap
    this.subs = obs4.pipe(
      concatMap((res)=> {
        return this.obs5(res);
      }),
      tap((res)=> {
        if(res == 'video 2')
        this.subs.unsubscribe()
      })
    ).subscribe((res)=> {
      console.log(res)
    })
  }

  print(val:string, id:string) {
    const el = document.createElement('li');
    el.textContent = val;
    document.getElementById(id)?.appendChild(el);
  }

  obs5(val:any) {
    return of('video ' + val).pipe(delay(3000))
  }

}
