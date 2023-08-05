import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catgories',
  templateUrl: './catgories.component.html',
  styleUrls: ['./catgories.component.css']
})
export class CatgoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  onSubmit(formData: any) {

    let categoryData = {
      category: formData.value.category
    }
    console.log(categoryData);
  }

}
