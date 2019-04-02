import { storiesOf } from '@storybook/angular';
import { CoreModule } from '../core.module';
import { DashboardComponent } from './dashboard.component';
import { action, configureActions } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';

const label = 'Cards';
const options = {
  '2X1 Narrow': { title: '2X1 Narrow', cols: 2, rows: 1 },
  '1X1 Square': { title: '1X1 Square', cols: 1, rows: 1 },
  '2X2 Wide': { title: '2X2 Wide', cols: 2, rows: 2 },
  '1X2 Tall': { title: '1X2 Tall', cols: 1, rows: 2 },
};
const defaultValue = { title: '2X1 Narrow', cols: 2, rows: 1 };
const groupId = 'GROUP-ID1';

const stories = storiesOf(`Core/dashboard`, module);

stories.addDecorator(withKnobs);
stories
  .add('Default', () => ({
    component: DashboardComponent,
    moduleMetadata: { imports: [CoreModule] },
  }))
  .add('Add Card', () => ({
    component: DashboardComponent,
    props: {
      addCard: select(label, options, defaultValue, groupId),
    },
    moduleMetadata: { imports: [CoreModule] },
  }));
