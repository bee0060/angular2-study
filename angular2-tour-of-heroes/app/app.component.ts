import { Component, Input } from '@angular/core';
import './rxjs-extensions';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
}