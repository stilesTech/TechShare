export const seo = {
  title: 'Stiles Castle | 开发者、架构师、细节控',
  description:
    '我叫 Stiles，一名开发者，JAVA架构师，全栈开发工程师，带着对行业的热情梳理一些自己的工作经验和开发感悟',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://stiles.cc'
      : 'http://localhost:3000'
  ),
} as const
