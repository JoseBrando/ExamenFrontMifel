import { Injectable } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";



@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    constructor() {}

    // campo requerido y solo letras
    getRequiredLetters(data: {}): FormControl {
        return new FormControl(data, [
            Validators.required,
            Validators.pattern('[a-zA-ZÁÉÍÚÓñÑáéíóú. ]+')
        ]);
    }

    // solo letras
    getLetters(data: {}): FormControl {
        return new FormControl(data, [
            Validators.pattern('[a-zA-ZÁÉÍÚÓñÑáéíóú. ]+')
        ]);
    }

    // campo requerido
    getRequired(data: {}): FormControl {
        return new FormControl(data, [
            Validators.required
        ]);
    }

    // campo requerido para validar la curp
    getRequiredCurp(data: {}): FormControl {
        const expresion = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/

        return new FormControl(data, [
            Validators.required,
            Validators.pattern(expresion)
        ]);
    }

    // campo requerido para validar rfc persona fisica
    getRequiredRfcPersonaFisica(data: {}): FormControl {

        const expresion = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/

        return new FormControl(data, [
            Validators.required,
            Validators.pattern(expresion)
        ]);
    }

    // campo requerido para validar rfc persona fisica
    getRequiredCodigoPostal(data: {}, min: number, max: number): FormControl {

        return new FormControl(data, [
            Validators.required,
            Validators.minLength(min),
            Validators.maxLength(max),
            Validators.pattern("^[0-9]{5}")
        ]);
    }

    getRequiredNumeroExterior(data: {}, min: number, max: number): FormControl {

        return new FormControl(data, [
            Validators.required,
            Validators.minLength(min),
            Validators.maxLength(max),
            Validators.pattern("^[0-9]*$")
        ]);
    }

    getNumeroInterior(data: {}, min: number, max: number): FormControl {

        const expresion = /^([a-zA-Z0-9]){1,10}$/

        return new FormControl(data, [
            Validators.minLength(min),
            Validators.maxLength(max),
            Validators.pattern(expresion)
        ]);
    }
}