import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/app/contact/contact.component';
import { HomeComponent } from 'src/app/home/home.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { ProductComponent } from 'src/app/product/product.component';
import { DetailsComponent } from '../details/details.component';
import { ListComponent } from './list.component';


const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        children: [
            {
                path: 'details/:id',
                component: DetailsComponent
            },
            {
                path: 'details/:id',
                component: DetailsComponent
            }
        ]

    },
    // {
    //     path: '',
    //     component: ListComponent
    // },
    // {
    //     path: 'contact',
    //     component: ContactComponent
    // },
    // {
    //     path: 'details',
    //     component: DetailsComponent
    // },
    // {
    //     path: 'details/:id',
    //     component: DetailsComponent
    // },
    // {
    //     path: 'home',
    //     component: HomeComponent
    // },
    // {
    //     path: 'product',
    //     component: ProductComponent
    // },
    // {
    //     path: '**',
    //     component: NotFoundComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }
