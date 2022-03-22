import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { EditComponent } from '../edit/edit.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
            path: 'details/:id',
            component: DetailsComponent
        },
        {
          path: 'details/:username',
          component: DetailsComponent
        },
        {
          path: 'edit/:id',
          component: EditComponent
      },
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }
