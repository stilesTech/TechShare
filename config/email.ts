export const emailConfig = {
  from: 'hi@stiles.cc',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://stiles.cc`
      : 'http://localhost:3000',
}
