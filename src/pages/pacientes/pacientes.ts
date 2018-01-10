import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {PacientesProvider} from "../../providers/api/pacientesProvider";

@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
  providers:[
    PacientesProvider
  ]
})
export class PacientesPage {
  public list_patients:any[] = [];
  public loader;
  public refresher;
  public isRefreshing:boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private pacientesProvider:PacientesProvider,
              public loadingCtrl: LoadingController
  ) {}

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.initializeItems();
  }
  abrirCarregandoPacientes() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Pacientes..."
    });
    this.loader.present();
  }

  fecharCarregandoPacientes(){
    this.loader.dismiss();
  }

  initializeItems() {
    this.abrirCarregandoPacientes();
    this.pacientesProvider.getListPatients().subscribe(
      res=>{
        const response = (res as any);
        const objeto = JSON.parse(response._body);
        this.list_patients = objeto;

        this.fecharCarregandoPacientes();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      err=>{
        console.log(err);
        this.fecharCarregandoPacientes();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    );
  }

  ionViewDidLoad() {
    this.initializeItems();
  }
}
