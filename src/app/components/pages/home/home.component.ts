import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
    selector: "page-home",
    templateUrl: './home.component.html',
    styleUrls: ["./home.component.scss"]
})

export class HomePageComponent {
    private dataPage: string = "home";
    constructor(private http: HttpService){

    }

    sendRequest(){
        debugger;
        this.http.sendHttpRequest({});
    }
}