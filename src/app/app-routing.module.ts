import { ValliComponent } from './valli/valli.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VennilaComponent } from './vennila/vennila.component';

const routes: Routes = [
  {path:"", redirectTo:"/", pathMatch:"full"},
  {path:"valli", component:ValliComponent},
  {path:"vennila", component:VennilaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allRoutes =[
                            ValliComponent,
                            VennilaComponent
]