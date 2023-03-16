import { Component } from '@angular/core';

@Component({
  selector: 'app-editboard',
  templateUrl: './editboard.component.html',
  styleUrls: ['./editboard.component.css']
})
export class EditboardComponent {
  triangle:string = "./assets/image/tryangle.png";
  rectangle:string = "./assets/image/rectangle_img.png";
  circle:string = "./assets/image/circle-img.png";
  brush:string = "./assets/image/brush_img.png";
  paintbrush:string = "./assets/image/paintbrush.png";
  eraser:string = "./assets/image/eraser-img.png";
}
