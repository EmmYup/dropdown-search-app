import type { Meta, StoryObj } from '@storybook/react';
import DropdownInput from '../../components/DropdownInput';

const meta = {
  title: 'Components/DropdownInput',
  component: DropdownInput,
} satisfies Meta<typeof DropdownInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
