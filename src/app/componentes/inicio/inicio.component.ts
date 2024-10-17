import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  formularioForm;
  datos_formulario: any;
  constructor(private formBuild: FormBuilder){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      edad: '',
      email: ''
    });
  }
  ngOnInit(){
    console.log("Hola");
    console.log(this.formularioForm);
  }
  enviarDatos(){
    console.log("Enviar datos")
    this.datos_formulario = this.formularioForm.value;
    console.log(this.formularioForm.value);
    console.log("Hola "+this.formularioForm.value.nombre, this.formularioForm.value.apellido);
  }
}
