import type { Meta, StoryObj } from '@storybook/react';

import { Image, Switching } from './Image';

const meta = {
  title: 'catarizea/react-cloudinary-image-lite/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Density: Story = {
  args: {
    src: 'blog/jedi-knight-3-v6_grl6fe.png',
    width: 1823,
    height: 1660,
    alt: 'jedi khight',
    switching: Switching.Density,
    quality: 90,
    sizes: '480px',
    cloudName: 'catalinworks',
    apiVersion: '1',
  },
};

export const Resolution: Story = {
  args: {
    src: 'blog/rabbitmq_rctwjf.png',
    width: 850,
    height: 882,
    aspectRatio: 0.9,
    alt: 'rabbitmq',
    switching: Switching.Resolution,
    quality: 90,
    priority: true,
    sizes:
      '(min-width: 1536px) 500px, (min-width: 1280px) 400px, (min-width: 1024px) 400px, (min-width: 768px) 450px, 360px',
    cloudName: 'catalinworks',
    apiVersion: '1',
  },
};
