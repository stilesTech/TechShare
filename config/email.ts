export const emailConfig = {
  from: 'stilesting@gmail.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://stiles.cc`
      : 'http://localhost:3000',
}
