import { Component, HostListener, Input } from '@angular/core';
import { footer } from 'src/app/demoData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  courses: any = footer.courses;
  searchQuery: string = '';
  showDropdown: boolean = false;

  searchItems: string[] = [
    'Angular Tutorial',
    'Responsive Design',
    'TypeScript Basics',
    'Bootstrap Mega Menu',
    'JavaScript Best Practices',
    'Frontend Development'
  ];

  filteredItems: string[] = [...this.searchItems];
  recommendations: string[] = ['History 1', 'History 2', 'Recommendation 1'];

  private lastScrollTop = 0;
  public isNavbarVisible = true;
  public hasShadow = false; 

  constructor() {
    console.log(footer, 'footer');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
   
      this.isNavbarVisible = false;
    } else {
   
      this.isNavbarVisible = true;
    }


    this.hasShadow = currentScrollTop > 50;

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
  }

  selectRecommendation(item: string) {
    this.searchQuery = item;
    console.warn('clicked', item);
  }

  filterResults(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.searchItems.filter(item =>
      item.toLowerCase().includes(input)
    );
  }

  hideDropdown(): void {
    setTimeout(() => {
      this.showDropdown = false;
    }, 150);
  }
}
