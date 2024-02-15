import { Component } from '@angular/core';


interface products{
  imgPath:string,
  title:string,
  describtion:string,
  price:number,
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  allProduct :products[]=[
    {imgPath:"assets/image/photo home03.jpeg"   ,title:"Hoodie" ,describtion:"Classic Heather Gray"  , price:55},
    {imgPath:"assets/image/photo home04.jpeg"  ,title:"Sweatshirt"   , describtion:"Classic Grey Hooded" , price:20},
    {imgPath:"assets/image/photo home05.jpeg"   ,title:"Hoodie"  ,describtion:"Classic Black Hooded"  , price:555},
    {imgPath:"assets/image/photo home06.jpeg"   ,title:"Joggers" ,describtion:"Classic Comfort Fit Joggers"  , price:55},
    {imgPath:"assets/image/photo home07.jpeg"   ,title:"Joggers"   , describtion:"Classic Comfort Drawstring" , price:20},
    {imgPath:"assets/image/photo home08.jpeg"   ,title:"Sweatpants"  ,describtion:"Classic Red Jogger"  , price:555},
    {imgPath:"assets/image/photo home09.jpeg"   ,title:"Cap" ,describtion:"Classic Navy Blue Baseball"  , price:55},
    {imgPath:"assets/image/photo home10.jpeg"   ,title:"Cap"   , describtion:"Classic Blue Baseball Cap" , price:20},
  ]

  
}
