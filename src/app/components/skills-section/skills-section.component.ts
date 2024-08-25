import { Component } from '@angular/core';
import { tabsApi } from 'src/app/demoData';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  tabs = tabsApi;
  tabsData : any;

  constructor(){
    console.warn('mihal',this.tabsData);

  }

  setActiveTab(tabId: string) {
    this.tabs.forEach(tab => {
      
      tab.active = (tab.id === tabId)
      this.tabs.filter(()=>{
        
    this.tabsData = this.tabs.find(tab => tab.id === tabId)?.content.slice(0,6) || [];
    
  })
});
console.warn('mihal',...this.tabsData);
  }
  
}
