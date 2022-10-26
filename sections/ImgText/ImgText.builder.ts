import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'

const LazyTextImg = dynamic(async () => {
  return (await import('./ImgText')).default
})

Builder.registerComponent(LazyTextImg, {
  name: 'Textimage',
  inputs: [
    {
      name: 'headline',
      type: 'string',
      defaultValue: 'The simplest way to build Ecommerce sites with Next.js',
    },
    {
      name: 'description',
      type: 'string',
      defaultValue:
        'Stop waiting on development release cycles. Start dragging and dropping to build and optimize digital experiences for your website, app, or ecommerce store.',
    },
    {
      name: 'ctaLink',
      type: 'string',
      defaultValue: '/shop',
    },
    {
      name: 'ctaText',
      type: 'string',
      defaultValue: 'read more',
    },
  ],
})
