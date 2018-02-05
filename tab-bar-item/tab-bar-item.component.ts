import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

/**
 * Tab bar item
 *
 * @export
 * @class TabBarItemComponent
 */
@Component({
  selector: 'sw-tab-bar-item',
  templateUrl: './tab-bar-item.component.html',
  styleUrls: ['./tab-bar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TabBarItemComponent {

  /**
   * The route
   *
   * @type {string[]}
   * @memberof TabBarItemComponent
   */
  @Input()
  route: string[];

  /**
   * Should match routes exactly?
   *
   * @memberof TabBarItemComponent
   */
  @Input()
  exact = false;

  /**
   * Enables or disables routing functionality for current navigation bar item
   *
   * @memberof TabBarItemComponent
   */
  @Input()
  enableNavigation = true;

  /**
   * Flag which indicates that current navigation bar item is active one
   *
   * @memberof TabBarItemComponent
   */
  @Input()
  isActive = false;

  /**
   * Flag indicates that current navigation bar item is disabled.
   * Affects only styling, URL click should be handled at parent component.
   *
   * @memberof TabBarItemComponent
   */
  @Input()
  isDisabled = false;

}
