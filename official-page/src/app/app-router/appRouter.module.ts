import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainContentsComponent} from "../main-contents/main-contents.component";


const routes = [
  {path: '', redirectTo: '/dawn-team', pathMatch: 'full'},
  {path: "dawn-team", component: MainContentsComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule {
}
