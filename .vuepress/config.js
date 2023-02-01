module.exports = {
  base: "/",
  title: "stiles 的技术分享",
  description: "🌟 分享效率方法 🪄、优质文章 📑、编程知识 🎹、实用工具 🛠️ 和有趣内容 😄。",
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
      { text: "博客", link: "http://stiles.cc/" },
      // { text: "推特", link: "https://twitter.com/stiles" },
      // { text: "邮箱订阅", link: "http://weekly.stiles.cc" },
      { text: "RSS 订阅", link: "http://stiles.cc/rss.xml" },
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
          "/docs/java/分布式理论基础",
          "/docs/java/HTTP协议发展历程",
          "/docs/java/mongodb-入门到使用",
          "/docs/java/Prometheus监控介绍",
          "/docs/java/Redis详解",
        ],
      },
      {
        title: "队列",
        collapsable: false,
        children: [
          "/docs/rabbitmq/RabbitMQ介绍",
          "/docs/rabbitmq/Rabbitmq核心协议AMQP详解",
        ],
      },
      {
        title: "软件工程",
        collapsable: false,
        children: [
          "/docs/engineering/ELK监控搭建",
          "/docs/engineering/ELK-Windows环境搭建",
          "/docs/engineering/Liquibase简单介绍与使用",
          "/docs/engineering/在docker环境下运行PHP",
          "/docs/engineering/NET Core on K8S入门演示",
          "/docs/engineering/基于Jenkins+tfs+msbuild实现自动发布",
          "/docs/engineering/使用kubewatch监控k8s资源变更",
          "/docs/engineering/kubernetes-Dashboard账号",
          "/docs/engineering/kubernetes上部署.NetCore程序",
          "/docs/engineering/centos上搭建redis集群",
          "/docs/engineering/SqlServer-AlwaysOn搭建",
          "/docs/engineering/SqlServer上亿数据迁移到redis",
          "/docs/engineering/Upsource实践指南",
        ],
      },
      {
        title: "代码精进",
        collapsable: false,
        children: [
          "/docs/coding/代码精进之路",
          "/docs/coding/恰如其分的代码",
          "/docs/coding/代码审查指南",
        ],
      },
      {
        title: "工具",
        collapsable: false,
        children: [
          "/docs/tools/使用n8n订阅网站rss消息推送到Telegram",
          "/docs/tools/wx-hub微信公众号文章同步工具",
        ],
      },
      {
        title: "其它",
        collapsable: false,
        children: [
          "/docs/other/小程序开发介绍",
        ],
      },
      {
        title: "思考",
        collapsable: false,
        children: [
          "/docs/thinking/喜欢一个人的感觉有多美好",
        ],
      },
    ],
  },
};
