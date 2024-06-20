import {defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Event Name',
      type: 'string',
      description: 'Name of the event',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Event Description',
      type: 'text',
      description: 'Provide a brief description of the event (optional, max 500 characters)',
      validation: (Rule) => [
        Rule.max(500).warning('Description should be no more than 500 characters long'),
        Rule.optional(),
      ],
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      description: 'Start Time of the Event, For Example (10am)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      description: 'End Time of the Event, For Rxample (12pm)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
})
