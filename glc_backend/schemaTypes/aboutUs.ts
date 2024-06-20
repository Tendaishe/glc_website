import {defineType} from 'sanity'

export default defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'banner',
      title: 'Banner Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
})
