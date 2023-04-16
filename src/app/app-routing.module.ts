import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GeneratorComponent } from './generator/generator.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'generator', component: GeneratorComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
