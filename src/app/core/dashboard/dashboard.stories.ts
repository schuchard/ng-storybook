import { storiesOf } from '@storybook/angular';
import { CoreModule } from '../core.module';
import { DashboardComponent } from './dashboard.component';

storiesOf(`Core/dashboard`, module).add(
  'Default',
  () => ({
    component: DashboardComponent,
    moduleMetadata: {imports: [CoreModule]}
  }),
  { notes: 'My notes on a button with emojis' }
);
