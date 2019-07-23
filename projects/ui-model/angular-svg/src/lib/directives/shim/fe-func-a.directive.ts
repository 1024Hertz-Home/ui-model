import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'feFuncA',
})
export class SvgFeFuncADirective {
  constructor(private elementRef: ElementRef<Element>) {
  }

    get amplitude(): string {
    return getAttr(this.elementRef, 'amplitude');
  }

  @Input('amplitude')
  set amplitude(value: string) {
    setAttr(this.elementRef, 'amplitude', value);
  }


  get exponent(): string {
    return getAttr(this.elementRef, 'exponent');
  }

  @Input('exponent')
  set exponent(value: string) {
    setAttr(this.elementRef, 'exponent', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get intercept(): string {
    return getAttr(this.elementRef, 'intercept');
  }

  @Input('intercept')
  set intercept(value: string) {
    setAttr(this.elementRef, 'intercept', value);
  }


  get offset(): string {
    return getAttr(this.elementRef, 'offset');
  }

  @Input('offset')
  set offset(value: string) {
    setAttr(this.elementRef, 'offset', value);
  }


  get slope(): string {
    return getAttr(this.elementRef, 'slope');
  }

  @Input('slope')
  set slope(value: string) {
    setAttr(this.elementRef, 'slope', value);
  }


  get tabindex(): string {
    return getAttr(this.elementRef, 'tabindex');
  }

  @Input('tabindex')
  set tabindex(value: string) {
    setAttr(this.elementRef, 'tabindex', value);
  }


  get tableValues(): string {
    return getAttr(this.elementRef, 'tableValues');
  }

  @Input('tableValues')
  set tableValues(value: string) {
    setAttr(this.elementRef, 'tableValues', value);
  }


  get type(): string {
    return getAttr(this.elementRef, 'type');
  }

  @Input('type')
  set type(value: string) {
    setAttr(this.elementRef, 'type', value);
  }


  get xmlBase(): string {
    return getAttr(this.elementRef, 'xml:base');
  }

  @Input('xml:base')
  set xmlBase(value: string) {
    setAttr(this.elementRef, 'xml:base', value);
  }


  get xmlLang(): string {
    return getAttr(this.elementRef, 'xml:lang');
  }

  @Input('xml:lang')
  set xmlLang(value: string) {
    setAttr(this.elementRef, 'xml:lang', value);
  }


  get xmlSpace(): string {
    return getAttr(this.elementRef, 'xml:space');
  }

  @Input('xml:space')
  set xmlSpace(value: string) {
    setAttr(this.elementRef, 'xml:space', value);
  }


}