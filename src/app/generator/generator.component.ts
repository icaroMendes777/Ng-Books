import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';





@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {



  constructor(
    private formBuilder: FormBuilder
    ) {}

  description = new FormGroup({
    ano: new FormControl(''),
    uso: new FormControl('Livro Usado'),
    estado: new FormControl('Boas condições'),
    anotacoes: new FormControl('Sem anotações ou grifos'),
    capa: new FormControl('Bem conservada'),
    folhas: new FormControl(''),
    nome: new FormControl(''),
    obs: new FormControl(''),
    codigo:new FormControl((''),
        [Validators.required,Validators.minLength(5)]),
    bolinha: new FormControl('',
        [Validators.required]),
  });

  bookDescription = '';

  log()
  {
    console.log(this.description);
  }

  clean()
  {
    window.location.reload();
  }


  setBookDescription()
  {
    let description ='';
    let breakLine='\n';
    let ponto='. ';

    let error = '';

    if(! this.description.controls.codigo.value) error+='insira o código de barras! \n'

    if(! this.description.controls.bolinha.value) error+='insira a cor da bolinha!';

    if(error){
      alert(error);
      return;
    }



    description +=breakLine;

    if(this.description.controls.ano.value) {
      description += 'Ano:'+this.description.controls.ano.value;
      description +=breakLine;
    }


    if(this.description.controls.uso.value) {
      description += this.description.controls.uso.value;

      description +=ponto;
    }


    if(this.description.controls.estado.value) {
      description += this.description.controls.estado.value;

      description +=ponto;
    }


    if(this.description.controls.anotacoes.value) {
      description += this.description.controls.anotacoes.value;

      description +=ponto;
    }


    if(this.description.controls.capa.value) {
      description += 'Capa e lombada:'+this.description.controls.capa.value;

      description +=breakLine;
    }


    if(this.description.controls.folhas.value) {
      description += 'Folhas:'+this.description.controls.folhas.value;

      description +=ponto;
    }


    if(this.description.controls.nome.value) {
      description += this.description.controls.nome.value;
      description +=breakLine;
    }


    if(this.description.controls.obs.value) {
      description += 'Obs:'+this.description.controls.obs.value;
      description +=breakLine;
    }

    description += '-------------';
    description +=breakLine;

    description +=breakLine;

    if(this.description.controls.codigo.value) {
      description += 'Cod. '+this.description.controls.codigo.value;
      description +=breakLine;
    }

    if(this.description.controls.bolinha.value) {
      description += 'Bolinha:'+this.description.controls.bolinha.value;
      description +=breakLine;
    }




    this.bookDescription = description;
  }

}
