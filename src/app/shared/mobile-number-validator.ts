import { ValidatorFn, AbstractControl } from '@angular/forms';

export function mobileNoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      const nameRe = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const forbidden = nameRe.test(control.value);
    // console.log(nameRe.test(control.value));
    return forbidden ? null : { invalidPattern: { value: control.value } };
  };
}
