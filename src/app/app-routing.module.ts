import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CoursePageComponent } from './components/pages/course-page/course-page.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
