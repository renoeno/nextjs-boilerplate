import { Story, Meta } from '@storybook/react/types-6-0';
import { BaseComponent, BaseComponentProps } from '.';

export default {
  title: 'BaseComponent',
  component: BaseComponent,
} as Meta;

export const Template: Story<BaseComponentProps> = (args) => <BaseComponent {...args} />;
