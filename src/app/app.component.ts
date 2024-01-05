import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Services
import { UsersService } from './service/users.service';
import { ValidatorService } from './service/validators/validator.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isSubmit = false;
  arrUsers:any = null;
  public formUsers: FormGroup;

  constructor(private usersService: UsersService, private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.getUsers();
    this.iniciarFormulario();
  }

  private iniciarFormulario(): void {
    this.formUsers = new FormGroup({
      nombre: this.validatorService.getRequiredLetters({value: '', disabled: false}),
      primerApellido: this.validatorService.getRequiredLetters({value: '', disabled: false}),
      segundoApellido: this.validatorService.getLetters({value: '', disabled: false}),
      estado: this.validatorService.getRequiredLetters({value: '', disabled: false}),
      delegacion: this.validatorService.getRequiredLetters({value: '', disabled: false}),
      colonia: this.validatorService.getRequiredLetters({value: '', disabled: false}),
      calle: this.validatorService.getRequired({value: '', disabled: false}),
      curp: this.validatorService.getRequiredCurp({value: '', disabled: false}),
      rfc: this.validatorService.getRequiredRfcPersonaFisica({value: '', disabled: false}),
      codigoPostal: this.validatorService.getRequiredCodigoPostal({value: '', disabled: false}, 5, 5),
      numExterior: this.validatorService.getRequiredNumeroExterior({value: '', disabled: false}, 1, 5),
      numInterior: this.validatorService.getNumeroInterior({value: '', disabled: false}, 1, 10),
    });
  }

  saveUser() {
    this.isSubmit = true;

    if (this.formUsers.valid) {
      window.alert("Campos validados correctamente.");
      const user: any = this.formUsers.controls;

      const data = {
        infoUsuario: {
          nombre: user.nombre.value,
          primerApellido: user.primerApellido.value,
          segundoApellido: user.segundoApellido.value,
          curp: user.curp.value,
          rfc: user.rfc.value
        },
        domicilio: {
          calle: user.calle.value,
          colonia: user.colonia.value,
          delegacion: user.delegacion.value,
          estado: user.estado.value,
          codigoPostal: user.codigoPostal.value,
          numExterior: user.numExterior.value,
          numInterior: user.numInterior.value
        }
      }

      console.log(data);

      this.usersService.saveUser(data)
      .then((response: any) => {
        console.log(response);
        window.alert("Datos guardados con éxito.");
        this.getUsers();
      })
      .catch((error: any) => {
        console.error("Error al guardar.");
      });
    } else {
      window.alert("Existen campos por validar.");
    }
  }

  getUsers() {
    this.usersService.getUsers().subscribe(response => {
      this.arrUsers = response;     
    });
  }
}
