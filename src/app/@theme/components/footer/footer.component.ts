import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Aragorn Plataform 2020
    </span>
    <div class="socials">
      <a href="https://github.com/felipefrancischetto/aragorn" target="_blank" class="ion ion-social-github"></a>
    <div>
  `,
})
export class FooterComponent {
}

// <div class="socials">
//   <a href="https://github.com/felipefrancischetto/aragorn" target="_blank" class="ion ion-social-github"></a>
//   <a href="#" target="_blank" class="ion ion-social-facebook"></a>
//   <a href="#" target="_blank" class="ion ion-social-twitter"></a>
//   <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
// </div>
