export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://stiles.cc'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
