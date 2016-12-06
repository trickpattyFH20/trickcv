import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent {

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */

  public sendEmail() {
      window.location.href = 'mailto:patricktlawler@gmail.com';
  }
  /**
   * Handle the nameListService observable
   */

}
