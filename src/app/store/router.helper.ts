import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface MyRouterState{
    url:string;
    params:Params;
    queryParams:Params;
}

export class MyRouterStateSerializer implements RouterStateSerializer<MyRouterState> {
serialize(routerState:RouterStateSnapshot):MyRouterState{
    const { url } = routerState;// { url } droite de l'operateur == tu récupère la key url 
    // == const url = routerState.url regarder clic droti go to definition
    const { queryParams } = routerState.root

    let routeState:ActivatedRouteSnapshot = routerState.root; // on est sur le activatedRoot le plus en haut la racine correspond au premier router-outlet
    // ensuite on parcour tout les router outlet les child
    while(routeState.firstChild){
        //tant que state à un enfant  on parcour à l'issue de la route on sera tout en bas .on parcourt toute les routes 
        routeState = routeState.firstChild;
    }
    const {params}= routeState;
    return { url , params ,queryParams}
}
}