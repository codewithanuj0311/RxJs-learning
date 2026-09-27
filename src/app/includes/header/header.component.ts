import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  @ViewChild('addBtn') addBtn !: ElementRef;
  videoSubscription !:Subscription;
  count:number = 1;

  ngOnInit(): void {
    let videoStream = interval(1000); //timer is similar to this just take one more parameter for delaying the start process
    this.videoSubscription = videoStream.subscribe((res)=> {
      this.print(res, 'elContainer2');
      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
    })
    
  }

  ngAfterViewInit() {
    //fromEvent operator for creating Observable stream 
      fromEvent(this.addBtn.nativeElement, 'click').subscribe((res)=> {
        this.print(this.count++, 'elContainer1');
      })
  }

  print(val:number, id:string) {
    const el = document.createElement('li');
    el.textContent = 'Video' + val;
    document.getElementById(id)?.appendChild(el);
  }

  navToCustom() {
    this.router.navigate(['/customObservable'])
  }

}
