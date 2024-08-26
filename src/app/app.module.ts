import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { OffcanvasComponent } from './components/nav/offcanvas/offcanvas.component';
import { CourseCardComponent } from './components/cards/course-card/course-card.component';
import { UserCardComponent } from './components/cards/user-card/user-card.component';
import { StartedSectionComponent } from './components/pages/started-section/started-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { CourseCardSmallComponent } from './components/cards/course-card-small/course-card-small.component';
import { CoursePageComponent } from './components/pages/course-page/course-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    OffcanvasComponent,
    CourseCardComponent,
    UserCardComponent,
    StartedSectionComponent,
    SkillsSectionComponent,
    CourseCardSmallComponent,
    CoursePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
