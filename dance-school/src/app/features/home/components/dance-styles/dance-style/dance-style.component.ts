import { Component, Input, OnInit } from '@angular/core';
import { bachata, homeDanceStyle, salsa, zouk } from 'src/app/core/utilities/home-dance-styles';

@Component({
  selector: 'app-dance-style',
  templateUrl: './dance-style.component.html',
  styleUrls: ['./dance-style.component.scss']
})
export class DanceStyleComponent implements OnInit {


  @Input('position') position: string = 'left';
  @Input('dance-name') danceName: string = 'bachata';

  danceInfo: homeDanceStyle;

  imgShow: boolean = false;
  imgUrls: string [] = [];
  imgPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
    switch(this.danceName){
      case 'bachata':
        this.danceInfo = bachata;
        break;
      case 'zouk':
        this.danceInfo = zouk;
        break;
      case 'salsa':
        this.danceInfo = salsa;
        break;
    }
    this.imgUrls.push(this.danceInfo.imgMain.split("\"")[1]);
    this.imgUrls.push(this.danceInfo.img1);
    this.imgUrls.push(this.danceInfo.img2);
    this.imgUrls.push(this.danceInfo.img3);
  }

  showImage(element: string): void {
    element = element.replace("http://localhost:4200", "");

    this.imgUrls.forEach((el, i) => {
      if(el.includes(element)){
        this.imgPosition = i;
      }
    })
    this.imgShow = true;
  }

  imgToLeft(): void {
    if(this.imgPosition == 0){
      this.imgPosition = this.imgUrls.length-1;
    }else{
      this.imgPosition--;
    }
  }

  imgToRight(): void {
    if(this.imgPosition == this.imgUrls.length-1){
      this.imgPosition = 0;
    }else{
      this.imgPosition++;
    }
  }

  closeImgShow(){
    this.imgShow = false;
  }


}
