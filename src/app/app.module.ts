import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { OfFromComponent } from './includes/of-from/of-from.component';
import { CustomObservableComponent } from './includes/custom-observable/custom-observable.component';
import { FilterComponent } from './includes/filter/filter.component';
import { RetryComponent } from './includes/retry/retry.component';
import { DebounceComponent } from './includes/debounce/debounce.component';
import { ConcatMergeComponent } from './includes/concat-merge/concat-merge.component';
import { SwitchMapComponent } from './includes/switch-map/switch-map.component';
;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfFromComponent,
    CustomObservableComponent,
    FilterComponent,
    RetryComponent,
    DebounceComponent,
    ConcatMergeComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
