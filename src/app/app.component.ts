import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Home', url: 'home', icon: 'paper-plane' },
    { title: 'Agendamento', url: 'agendamento', icon: 'heart' },
    { title: 'Shopping', url: 'shopping', icon: 'archive' },
    { title: 'Historico', url: 'menu', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
