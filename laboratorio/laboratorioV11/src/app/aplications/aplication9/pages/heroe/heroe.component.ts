import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faSmileWink, faFrown, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HeroeModel } from '../../../../models/heroe-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeCrudComponent implements OnInit {

  public faArrowLeft: IconDefinition;
  public faSmileWink: IconDefinition;
  public faFrown: IconDefinition;
  public faSave: IconDefinition;
  public heroe: HeroeModel;
  public frm!: FormGroup;

  constructor(private FormBuilder: FormBuilder, private heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
    this.faArrowLeft = faArrowLeft;
    this.faSmileWink = faSmileWink;
    this.faFrown = faFrown;
    this.faSave = faSave;
    this.heroe = new HeroeModel();
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.inicializarFormulario(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private inicializarFormulario(id: string | null): void {
    if(id !== null && id !== 'nuevo'){
        this.heroesService.getHeroe(id).subscribe(
          resp => {
            this.heroe.update(resp);
            this.frm.setValue(this.heroe);
          }
        );
    }
  }

  public crearFormulario(): void {
    this.frm = this.FormBuilder.group({
      id:[{value: '', disabled:true}],
      nombre:['',Validators.required],
      poder:['',Validators.required],
      vivo:[]
    });
  }

  public guardar(): void {
    if(this.frm.invalid){
      console.log('Formulario no válido');
      return;
    }
    this.frm.controls['vivo'].setValue(this.heroe.vivo);
    this.heroe.update(this.frm.value);

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    if(this.heroe.id && this.heroe.id.length > 0){
      this.heroesService.actualizarHeroe(this.heroe).subscribe(
        resp => {
          this.msgHeroeActualizado(resp);
        }
      );
    }else{
      this.heroesService.crearHeroe(this.heroe).subscribe(
        resp => {
          this.heroe.id = resp.id;
          this.frm.setValue(this.heroe);
          this.msgHeroeActualizado(resp);
        }
      );
    }

  }

  private msgHeroeActualizado(heroe: HeroeModel): void {
    Swal.fire({
      title: this.heroe.nombre,
      text: 'Se actualizó correctamente',
      icon: 'success'
    })
  }

}
