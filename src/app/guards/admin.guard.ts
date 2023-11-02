import { CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core'

export const adminGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const etat=localStorage.getItem('state');
  if (etat=="connected"){
  return true;
}
else{
  router.navigate(['/login'])
  return false;
}
};