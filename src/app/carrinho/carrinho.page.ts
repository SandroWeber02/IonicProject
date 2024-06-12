import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  items = [
    {
      servico: 'Corte Clássico',
      barbeiro: 'Carlos',
      data: '15/04/2024',
      pagamento: 'Cartão',
      foto: './assets/fadeway.jpg'
    },
    {
      servico: 'Kit Premium',
      data: 'R$ 150',
      pagamento: 'Kit completo Noruegues',
      foto: './assets/kit01.webp'
    }
  ];

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Retire na Loja',
      message: 'Pedido Realizado basta ir a loja para retirar em até 3 dias',
      buttons: ['OK']
    });

    await alert.present();
  }

}
