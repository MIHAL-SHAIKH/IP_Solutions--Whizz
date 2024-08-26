import { Component, Input } from '@angular/core';
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
  // searchQuery


  searchItems: string[] = [
    'Angular Tutorial',
    'Responsive Design',
    'TypeScript Basics',
    'Bootstrap Mega Menu',
    'JavaScript Best Practices',
    'Frontend Development'
  ];

  filteredItems: string[] = [...this.searchItems];

// searchQuery: string = '';
recommendations: string[] = ['History 1', 'History 2', 'Recommendation 1'];

selectRecommendation(item: string) {
  this.searchQuery = item;
  console.warn('clicked',item)
}

  constructor() {
    console.log(footer, 'footer');
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
