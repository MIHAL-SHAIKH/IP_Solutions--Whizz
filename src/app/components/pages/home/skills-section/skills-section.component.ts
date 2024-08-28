import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tabsApi } from 'src/app/demoData';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit{
  tabs = tabsApi;
  tabsData : any;
  isMobile : boolean = false;

  selectedTitle : any = this.tabs[0].title;

  constructor(){
    console.warn('mihal',this.isMobile);
    this.checkScreenSize();
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.isMobile = window.innerWidth <= 768;
  // }
  ngOnInit(): void {
    // this.isMobile = window.innerWidth <= 768;
    console.warn('mihal',this.isMobile);
  }
  
  // changeView(){
  //   this.isMobile = window.innerWidth <= 1768;
  // }

  setActiveTab(tabId: any) {
    this.selectedTitle = tabId.title;
    
    this.tabs.forEach(tab => {
      
      tab.active = (tab.id === tabId.id)
      // this.tabs.filter(()=>{
        
    // this.tabsData = this.tabs.find(tab => tab.id === tabId)?.content.slice(0, this.isMobile == true ? 3 : 5) || [];
    
  // })
});
console.warn('mihal',...this.tabsData);
  }
  
}
