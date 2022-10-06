import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  valor1: number;
  valor2: number;
  resultado: any;
  operacao: string;

  constructor( private alertController: AlertController ) {}

  verificarValor(){
    return this.valor1 && this.valor2;
  }
  soma(){
    if (this.verificarValor()){
    this.resultado = this.valor1 + this.valor2;
    this.operacao = `${this.valor1} + ${this.valor2}`;
  }else{
    this.presentAlert('somar');
  }
  }

  div(){
    if (this.verificarValor()){
    this.resultado = this.valor1 / this.valor2;
    this.operacao = `${this.valor1} / ${this.valor2}`;
  }else{
    this.presentAlert('dividir');
  }
  }

  mult(){
    if (this.verificarValor()){
    this.resultado = this.valor1 * this.valor2;
    this.operacao = `${this.valor1} * ${this.valor2}`;
  }else{
    this.presentAlert('multiplicar');
  }
  }

  subt(){
    if (this.verificarValor()){
    this.resultado = this.valor1 - this.valor2;
    this.operacao = `${this.valor1} - ${this.valor2}`;
  }else{
    this.presentAlert('subtrair');
  }
  }

  menor(){
    if (this.verificarValor()){
      if(this.valor1 < this.valor2){
        this.resultado = `Verdadeiro`;
        this.operacao = `${this.valor1} < ${this.valor2}`;
      }else{
        this.resultado = `Falso`;
        this.operacao = `${this.valor1} < ${this.valor2}`;
      }
     }
    else{
      this.presentAlert('verificar');
    }
  }

  maior(){
    if (this.verificarValor()){
      if(this.valor1 > this.valor2){
        this.resultado = `Verdadeiro`;
        this.operacao = `${this.valor1} > ${this.valor2}`;
      }else{
        this.resultado = `Falso`;
        this.operacao = `${this.valor1} > ${this.valor2}`;
      }
     }
    else{
      this.presentAlert('verificar');
    }
  }

  async presentAlert(operacao) {
    const alert = await this.alertController.create({
      header: 'ERRO',
      subHeader: `impossivel ${operacao}`,
      message: `um ou mais valores nulos`,
      buttons: ['entendi, não serei burro'],
    });

    await alert.present();
  }

}
