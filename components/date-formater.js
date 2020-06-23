import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

export default function DateFormater({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'PPP p', { locale: ko} )}</time>
}
