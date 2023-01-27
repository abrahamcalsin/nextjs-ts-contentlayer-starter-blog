import { dateFormatter } from '~/lib/date-formatter'
import { dateFormatterOptions as DateFormatProps } from '~/typings/lib/date-formatter'

export default function DateFormat(props: DateFormatProps) {
  const { date, locale, dateFormat } = props

  return <span>{dateFormatter(date, locale, dateFormat)}</span>
}

DateFormat.defaultProps = {
  locale: 'EN',
}
