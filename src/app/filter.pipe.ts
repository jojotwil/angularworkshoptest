import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], filterText: string): any[] {
    if (!values || !filterText) {
      return values;
    }
    
    
    filterText = filterText.toLowerCase();
    
    
    return values.filter(value => 
      JSON.stringify(value).toLowerCase().includes(filterText)
    );
  }
}

