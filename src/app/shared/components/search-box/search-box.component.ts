import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @ViewChild('searchByCapital')
  searchByCapital!: ElementRef<HTMLInputElement>;

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string ='Search';

  public searchByTerm(): void {
    const value = this.searchByCapital.nativeElement.value;

    this.onSearch.emit(value);

  }
}
