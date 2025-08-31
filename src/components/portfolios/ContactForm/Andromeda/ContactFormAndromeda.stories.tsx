import type { Meta, StoryObj } from '@storybook/react';
import { ContactFormAndromeda } from './index';

const meta: Meta<typeof ContactFormAndromeda> = {
  title: 'Components/ContactForm/Andromeda',
  component: ContactFormAndromeda,
};
export default meta;

type Story = StoryObj<typeof ContactFormAndromeda>;

export const Default: Story = {
  args: {},
};
