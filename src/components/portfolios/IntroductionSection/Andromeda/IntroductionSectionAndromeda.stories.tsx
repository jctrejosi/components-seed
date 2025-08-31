import type { Meta, StoryObj } from '@storybook/react';
import { IntroductionSectionAndromeda } from './index';

const meta: Meta<typeof IntroductionSectionAndromeda> = {
  title: 'Components/IntroductionSection/Andromeda',
  component: IntroductionSectionAndromeda,
};
export default meta;

type Story = StoryObj<typeof IntroductionSectionAndromeda>;

export const Default: Story = {
  args: {},
};
