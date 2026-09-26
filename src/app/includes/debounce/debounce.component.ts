import { UtilityService } from './../utility.service';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private utility: UtilityService) { }
  @ViewChild('search') search!: ElementRef;
  msg:string ='';

  ngOnInit() {
    this.utility.msg.next('Subject');
    this.utility.asyncVideo.subscribe((res)=> {
      this.msg = res;
    })
  }

  ngAfterViewInit() {

    fromEvent<any>(this.search.nativeElement, 'keyup').pipe(
      debounceTime(2000),
      map(event => event.target.value),
      distinctUntilChanged()
    ).subscribe((value) => {
      console.log(value);
    });

      
  }

  ngOnDestroy() {
      this.utility.msg.next('false')
  }

  addVideo(val:string) {
    this.utility.asyncVideo.next(val);
  }

  onComplete() {
    this.utility.asyncVideo.complete();
  }
 
}
