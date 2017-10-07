import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ListarComponent } from './listar/listar.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdicionarComponent, ListarComponent, IndexComponent]
})
export class TecnicoModule { }
