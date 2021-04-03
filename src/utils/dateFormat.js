import dayjs from "dayjs"

export function formatDate(date) {
  return dayjs(date).format("dddd, MMMM D, YYYY")
}
