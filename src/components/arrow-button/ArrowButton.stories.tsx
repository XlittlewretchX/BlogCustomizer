import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
  title: 'Components/ArrowButton',
  component: ArrowButton,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Состояние открыто/закрыто',
    },
    onClick: {
      action: 'clicked',
      description: 'Обработчик клика',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArrowButton>;

export const Default: Story = {
  args: {
    isOpen: false,
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};