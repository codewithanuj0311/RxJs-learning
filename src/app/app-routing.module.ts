import { SwitchMapComponent } from './includes/switch-map/switch-map.component';

import { ConcatMergeComponent } from './includes/concat-merge/concat-merge.component';
import { DebounceComponent } from './includes/debounce/debounce.component';
import { RetryComponent } from './includes/retry/retry.component';
import { FilterComponent } from './includes/filter/filter.component';
import { OfFromComponent } from './includes/of-from/of-from.component';
import { HeaderComponent } from './includes/header/header.component';
import { CustomObservableComponent } from './includes/custom-observable/custom-observable.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customObservable',
    component: CustomObservableComponent
  },
  {
    path: 'fromEvent',
    component: HeaderComponent
  },
  {
    path: 'ofFrom',
    component: OfFromComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'retry',
    component: RetryComponent
  },
  {
    path: 'debounce',
    component: DebounceComponent
  },
  {
    path: 'concat',
    component: ConcatMergeComponent
  },
  {
    path: 'switch',
    component: SwitchMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
