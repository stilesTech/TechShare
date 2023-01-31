module.exports = {
  base: "/",
  title: "stiles 的技术分享",
  description:
    "🌟 分享效率方法 🪄、优质文章 📑、编程知识 🎹、实用工具 🛠️ 和有趣内容 😄。",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
    ['link', { rel: "feed", href: "/rss.xml", type: "application/rss+xml", title: "stiles 的技术分享" }],
    ['link', { rel: "alternate", href: "/rss.xml", type: "application/rss+xml", title: "stiles 的技术分享" }],
  ],
  plugins: [
    ['@vuepress/back-to-top'],
    [require('./plugins/read-time')],
    [
      require('./plugins/rss-feed'),
      {
        username: 'stiles',
        hostname: 'http://stiles.cc',
        selector: '.content__default', // extract content to content:encoded
        count: 50,
        filter: (page) => /^docs/.test(page.relativePath) && page.frontmatter.title,
      }
    ],
    // [ 'feed', feed_options ]
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [2, 3] },
    extendMarkdown: md => {
      // md.use(require('markdown-it-mermaid').default);
      // md.use(require('markdown-it-sub'));
      // md.use(require('markdown-it-sup'));
      // md.use(require('markdown-it-abbr'));
      // md.use(require('markdown-it-ins'));
      // md.use(require('markdown-it-figure'));
      // md.use(require('markdown-it-smartarrows'));
      // md.use(require('markdown-it-fontawesome'));
    }
  },
  // 其它配置
  themeConfig: {
    // repo: 'stilesTech/TechShare',
    nav: [
      { text: "关于", link: "/about/" },
      { text: "博客", link: "http://stiles.com/" },
      // { text: "推特", link: "https://twitter.com/stiles" },
      { text: "邮箱订阅", link: "http://weekly.codelc.com" },
      // { text: "RSS 订阅", link: "https://tech.stiles.com/rss.xml" },
      { text: "GitHub", link: "https://github.com/stilesTech/TechShare" },
    ],
    lastUpdated: '最后更新',
    sidebar: [
      {
        title: "目录",
        collapsable: false,
        path: "/SUMMARY.md",
      },
      {
        title: "技术",
        collapsable: false,
        children: [
          "/docs/tools/使用n8n订阅网站rss消息推送到Telegram",
        ],
      },
      {
        title: "软件工程",
        collapsable: false,
        children: [
          "/docs/engineering/Liquibase简单介绍与使用",
          "/docs/engineering/恰如其分的代码",
          "/docs/engineering/代码审查指南",
          "/docs/engineering/Upsource实践指南",
        ],
      },
    ],
  },
};
