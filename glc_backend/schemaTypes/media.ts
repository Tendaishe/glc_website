import {ValidationContext, defineType} from 'sanity'
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
      name: 'imageFile',
      title: 'Image File',
      type: 'image',
      hidden: ({document}) => document?.mediaType !== 'image',
      validation: (Rule) =>
        Rule.custom((file, context: ValidationContext) => {
          if (context.document?.mediaType === 'image' && !file) {
            return 'Image file is required for media type "Image"'
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
          return true
        }),
    },
  ],
})
