import type { Meta, StoryObj } from '@storybook/react';
import AppCard from '../../components/AppCard';

const meta = {
  title: 'Components/AppCard',
  component: AppCard,
} satisfies Meta<typeof AppCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Active: Story = {
  args: {
    app: {
      id: 'atlassian',
      name: 'Atlassian',
      domains: ['atlassian.com'],
    },
    isActive: true,
    loading: false,
  },
};

export const NotActive: Story = {
  args: {
    app: {
      id: 'atlassian',
      name: 'Atlassian',
      domains: ['atlassian.com'],
    },
    isActive: false,
    loading: false,
  },
};

export const Clickable: Story = {
  args: {
    app: {
      id: 'atlassian',
      name: 'Atlassian',
      domains: ['atlassian.com'],
    },
    isActive: false,
    onClick: () => alert('Card clicked!'),
    loading: false,
  },
};
