import { Injectable } from "@angular/core";

import { Almanac } from "./almanac";

@Injectable()
export class AlmanacService {
    private _almanac:Almanac;
    constructor(){
        this._almanac = new Almanac();
    }
    getCalendar(year:number,month:number){
        return this._almanac.calendar(year,month);
    }
    getJcr(jc:string){
        return this._almanac.jcr(jc);
    }
    formatLunarDay(lDay:number){
        return this._almanac.formatLunarDay(lDay);
    }
    formatLunarMonth(lMonth:number){
        return this._almanac.formatLunarMonth(lMonth);
    }
}
