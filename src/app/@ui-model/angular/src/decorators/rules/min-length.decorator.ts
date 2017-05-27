import { Validators } from '@angular/forms';
import { addFieldType, addValidator } from '../reflect-utils';

export function MinLength(minLength: number = 0): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, Validators.minLength(minLength));
  };
}