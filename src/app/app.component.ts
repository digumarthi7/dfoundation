import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digumarti Foundation';
  imageObject: Array<object> = [{
    image: 'assets/CSlider1.jpg',
    thumbImage: 'assets/CSlider1.jpg'
}, {
  image: 'assets/CSlider2.jpg',
  thumbImage: 'assets/CSlider2.jpg'
},
{
  image: 'assets/CSlider3.jpg',
  thumbImage: 'assets/CSlider3.jpg'
},
{
  image: 'assets/CSlider4.jpg',
  thumbImage: 'assets/CSlider4.jpg'
},
{
  image: 'assets/CSlider53.jpg',
  thumbImage: 'assets/CSlider53.jpg'
}
];
}
