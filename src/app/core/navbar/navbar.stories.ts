import { storiesOf } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { CoreModule } from '../core.module';

storiesOf(`Core/navbar`, module).add(
  'Default',
  () => ({
    component: NavbarComponent,
    moduleMetadata: {imports: [CoreModule]}
  }),
  { notes: 'My notes on a button with emojis' }
);