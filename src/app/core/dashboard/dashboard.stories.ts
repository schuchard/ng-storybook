import { storiesOf } from '@storybook/angular';
import { CoreModule } from '../core.module';
import { DashboardComponent } from './dashboard.component';
import { action, configureActions } from '@storybook/addon-actions';

storiesOf(`Core/dashboard`, module)
  .add('Default', () => ({
    component: DashboardComponent,
    moduleMetadata: { imports: [CoreModule] },
  }))
  .add('Add Card', () => ({
    component: DashboardComponent,
    props: {
      addCard: { title: 'Card 5', cols: 2, rows: 1 }
    },
    moduleMetadata: { imports: [CoreModule] },
  }));
