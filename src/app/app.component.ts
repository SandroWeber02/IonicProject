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

    { title: 'Home', url: 'home', icon: 'person' },
    { title: 'Agendamento', url: 'agendamento', icon: 'chatbox' },
    { title: 'Shopping', url: 'shopping', icon: 'cash' },
    { title: 'Historico', url: 'menu', icon: 'folder' },
    { title: 'Feedback', url: 'feedback', icon: 'folder' }

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
