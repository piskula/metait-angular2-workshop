import { Component, OnInit } from '@angular/core';
import { Session } from '../../session/session';
import { SessionDataService } from '../session-data.service';
import { Observable } from 'rxjs';

const sessions = require('../../../data/sessions-preview.json');

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit {

  sessions: Session[] = sessions;

  // TODO Injektněte potřebné služby
  constructor() {
  }

  ngOnInit(): void {
    // TODO načtěte seznam
  }

}
