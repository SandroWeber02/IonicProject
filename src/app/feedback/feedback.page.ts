import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  // Adicione a propriedade appPages aqui
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // Adicione outras páginas conforme necessário
  ];

  constructor() { }

  ngOnInit() {
  }
}
