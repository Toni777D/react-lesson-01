import { formatDistanceToNow } from 'date-fns';
export default function formatDate(props) {
  return formatDistanceToNow(new Date(props), { addSuffix: true });
}
