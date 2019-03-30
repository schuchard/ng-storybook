import { storiesOf } from '@storybook/angular';
import { CoreModule } from '../core.module';
import { TableComponent } from './table.component';

storiesOf(`Core/table`, module).add(
  'Default',
  () => ({
    component: TableComponent,
    moduleMetadata: {imports: [CoreModule]}
  }),
  { notes: 'My notes on a button with emojis' }
);
