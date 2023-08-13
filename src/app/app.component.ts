import { Component } from '@angular/core';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memoria';
  arraySimbolo = [{id:"🦝", name: "🦝", disabled: true},
  {id:"🦝", name:"🦝", disabled: true},
  {id:"🐮", name: "🐮", disabled: true},
  {id:"🐮", name:"🐮", disabled: true},
  {id:"🦍", name: "🦍", disabled: true},
  {id:"🦍", name:"🦍", disabled: true},
  {id:"🐬", name: "🐬", disabled: true},
  {id:"🐬", name:"🐬", disabled: true},
  {id:"💣", name:"💣", disabled: true}
  ];
ra = "new game"


test = "false"

newGame(){
  setTimeout(() => {
    
    this.arraySimbolo.forEach(element => {
      element.name = element.id;
    });
  }, 1000);
  
    for(let i = this.arraySimbolo.length -1; i>0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [this.arraySimbolo[i], this.arraySimbolo[j]] = [this.arraySimbolo[j], this.arraySimbolo[i]];
    } 
  
    setTimeout(() => {
      this.arraySimbolo.forEach(element => {
        element.name = "";
        element.disabled = false;
      });
    }, 5000);
  console.log(this.arraySimbolo)

  this.arrR = [];
}



palavra = "";
pontos = 0;
arrR: string[] = [];
teste(teste: any) : void{ 
    console.log("teste")
    if(this.palavra != undefined){
    this.palavra = teste.id;
    console.log(teste.id);
    this.arrR.push(teste.id)
    if(this.arrR.length % 2 === 0 && (this.arrR[this.arrR.length - 1] === this.arrR[this.arrR.length - 2])){
      this.pontos += 20;
      console.log("pontos:" + this.pontos);
    }else if(this.arrR.length % 2 === 0 && (this.arrR[this.arrR.length - 1] !== this.arrR[this.arrR.length - 2] )){
      this.pontos -= 5;
      console.log("perdeu 20 pontos")
      this.arrR = [];
    }
    console.log(this.arrR)
    teste.name = teste.id 
    teste.disabled = true;
  }

}
 
}

