import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export class AppConstants {
    public static get baseUrl(): string {
        return  'https://api.covid19api.com/'; 
    }
}