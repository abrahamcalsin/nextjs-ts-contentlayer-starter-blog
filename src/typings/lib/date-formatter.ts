import dayjs from 'dayjs'

interface dateFormatterOptions {
  date?: Parameters<typeof dayjs>['0']
  locale: 'en' | 'es'
  dateFormat?: string
}

export type { dateFormatterOptions }
