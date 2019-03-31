import { storiesOf } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { CoreModule } from '../core.module';
import { RouterModule } from '@angular/router';

storiesOf(`Core/navbar`, module).add(
  'Default',
  () => ({
    component: NavbarComponent,
    moduleMetadata: {imports: [CoreModule, RouterModule.forRoot([])]}
  }),
  { notes: 'My notes on a button with emojis' }
);
