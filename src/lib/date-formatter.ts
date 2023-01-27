import dayjs from 'dayjs'

import { dateFormatterOptions } from '~/typings/lib/date-formatter'

export const dateFormatter = (
  date: dateFormatterOptions['date'],
  locale: dateFormatterOptions['locale'],
  dateFormat: dateFormatterOptions['dateFormat'],
) => {
  const formattedDae = dayjs(date).locale(locale).format(dateFormat)

  return formattedDae
}
