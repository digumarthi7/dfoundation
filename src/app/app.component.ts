import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digumarti Foundation';
  imageObject: Array<object> = [
{
  image: 'assets/CSlider3.jpg',
  thumbImage: 'assets/CSlider3.jpg'
},
{
  image: 'assets/CSlider4.jpg',
  thumbImage: 'assets/CSlider4.jpg'
}
];
}
