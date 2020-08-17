import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Store';
  products = [
    {
        id:1,
        title: 'Camiseta',
        price: 30000,
        category: 'Publicidad',
        description: 'Camiseta con el logo de la empresa, en algodón ...',
        image: 'https://via.placeholder.com/100'
    },
    {
        id:2,
        title: 'Llavero',
        price: 10000,
        category: 'Publicidad',
        description: 'Llavero del logo de la empresa ...',
        image: 'https://via.placeholder.com/100'
    }
  ];
  cart = [];
  itemsToBuy: boolean = false;
  message: string = '';

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  buy(){
    if(this.cart.length > 0){
      this.itemsToBuy = true;
      this.message = "Elements to buy";
    }else{
      this.itemsToBuy = false;
    }
  }
}
