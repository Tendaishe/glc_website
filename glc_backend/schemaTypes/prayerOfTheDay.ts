import {defineType} from 'sanity'

export default defineType({
  name: 'prayerOfTheDay',
  title: 'Prayer of the Day',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Prayer Text',
      type: 'text',
      description: 'Enter the prayer for the day',
      validation: (Rule) =>
        Rule.max(1000).warning('Prayer text should be no more than 1000 characters long'),
    },
    {
      name: 'citation',
      title: 'Bible Citation',
      type: 'string',
      description: 'Enter the Bible citation for the prayer (e.g., Romans 8:38-39)',
      validation: (Rule) =>
        Rule.max(50).warning('Citation text should be no more than 50 characters long'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload an image',
      validation: (Rule) => Rule.required(),
    },
  ],
})
