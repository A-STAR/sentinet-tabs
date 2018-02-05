import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TAB_BAR_ALT_CLASS } from '../../sentinet-core/constants';

/**
 * Tab bar component
 *
 * @export
 * @class TabBarComponent
 */
@Component({
  selector: 'sw-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TabBarComponent {

  /**
   * The alternate state
   *
   * @private
   * @type {boolean}
   * @memberof TabBarComponent
   */
  private _isAlternate: boolean;

  /**
   * Gets or sets the alternate state and applies a class
   * to the host based on this state
   *
   * @readonly
   * @memberof TabBarComponent
   */
  @Input()
  get alternate() { return this._isAlternate };
  set alternate(isAlternate: boolean) {
    if (isAlternate) {
      this._renderer.addClass(this._el.nativeElement, TAB_BAR_ALT_CLASS);
    }

    if (this._isAlternate && !isAlternate) {
      this._renderer.removeClass(this._el.nativeElement, TAB_BAR_ALT_CLASS);
    }

    this._isAlternate = isAlternate;
  }

  /**
   * Creates an instance of TabBarComponent.
   * @param {ElementRef} _el
   * @param {Renderer2} _renderer
   * @memberof TabBarComponent
   */
  constructor(
    private readonly _el: ElementRef,
    private readonly _renderer: Renderer2
  ) {
    this.alternate = false;
  }

}
