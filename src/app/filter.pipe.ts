import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function (search){
      if(!searchTerm){
        return value;
      }
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
