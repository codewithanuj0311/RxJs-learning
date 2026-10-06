import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { delay, map, of, switchAll, switchMap, fromEvent, exhaustMap, from } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient) { }
  @ViewChild('btn') btn !: ElementRef;
  url:string = 'https://jsonplaceholder.typicode.com/users'

  ngOnInit(): void {
    const source = from(['Anuj', 'Kapil', 'Rahul']);

    //Example -01 Map
    source.pipe(
      map((res)=> {
        return this.getData(res);
      })
    ).subscribe((res)=> {
      console.log(res);
      this.print(res, 'container1')
    })

    //Example -02 map+switchAll()
    source.pipe(
      map((res)=> {
        return this.getData(res)
      }),
      switchAll()
    ).subscribe((res)=> {
      console.log('SwitchAll + Map', res);
      this.print(res, 'container2')
    })

    //Example -03 SwitchMap
    source.pipe(
      switchMap((res)=> {
        return this.getData(res)
      })
    ).subscribe((res)=> {
      console.log('SwitchAll + Map', res);
      this.print(res, 'container3')
    })
  }

  ngAfterViewInit() {
      fromEvent(this.btn.nativeElement, 'click').pipe(
        exhaustMap(()=>{
          return this.http.get(this.url).pipe(delay(2000))
        })
      ).subscribe((res)=> {
        console.log(res);
      })
  }



  getData(val:string) {
    return of('Name: ' + val).pipe(delay(1000))
  }

  print(val:any, id:string) {
    const el = document.createElement('li');
    el.textContent = val;
    document.getElementById(id)?.appendChild(el);
  }

}
