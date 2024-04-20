import {defineType} from 'sanity'
import {Rule} from '@sanity/types'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
      hidden: ({document}) => !document || document.mediaType !== 'image',
      validation: (Rule: Rule) =>
        Rule.custom((url, context) => {
          const {mediaType}: any = context.document
          if (mediaType === 'image' && !url) {
            return 'Image URL is required for media type "Image"'
          }
          if (mediaType === 'video' && url) {
            return 'Image URL must be empty when media type is "Video"'
          }
          return true
        }),
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      hidden: ({document}) => !document || document.mediaType !== 'video',
      validation: (Rule: Rule) =>
        Rule.custom((url, context) => {
          const {mediaType}: any = context.document
          if (mediaType === 'video' && !url) {
            return 'Video URL is required for media type "Video"'
          }
          if (mediaType === 'image' && url) {
            return 'Video URL must be empty when media type is "Image"'
          }
          return true
        }),
    },
  ],
})
