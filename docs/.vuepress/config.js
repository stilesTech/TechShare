const path = require('path')

module.exports = {
  title: 'Stiles 的技术分享',

  description: '🌟 分享效率方法 🪄、优质文章 📑、编程知识 🎹、实用工具 🛠️ 和有趣内容 😄。',

  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
    ['link', { rel: "feed", href: "/rss.xml", type: "application/rss+xml", title: "stiles 的技术分享" }],
    ['link', { rel: "alternate", href: "/rss.xml", type: "application/rss+xml", title: "stiles 的技术分享" }],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-132770851-2',
    }],
    // 网站地图插件 npm install vuepress-plugin-sitemap
    ["sitemap",
    {
      hostname: 'https://stiles.cc',
      exclude: ['/404.html'],
    }
  ],
  [
    require('./plugins/rss-feed'),
    {
      username: 'stiles',
      hostname: 'https://stiles.cc',
      selector: '.content__default', // extract content to content:encoded
      count: 50,
      filter: (page) =>
      page._content
      && page.frontmatter.title,
    }
  ],
  ],

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: 'zh-CN',

    personalInfo: {
      nickname: 'Stiles',
      description: '一个梦想成为优秀架构师的程序员。座右铭：stay hungry stay foolish',
      email: 'stilesting@gmail.com',
      location: 'Shenzhen, China',
      organization: 'YoYo',

      avatar: '/assets/img/avatar.jpg',

      sns: {
        github: {
          account: 'stiles',
          link: 'https://github.com/stilesTech',
        },
        // facebook: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.facebook.com/meteorlxy.cn',
        // },
        // linkedin: {
        //   account: 'meteorlxy',
        //   link: 'http://www.linkedin.com/in/meteorlxy',
        // },
        twitter: {
          account: 'tiingou',
          link: 'https://twitter.com/tiingou',
        },
        // weibo: {
        //   account: '@焦炭君_Meteor',
        //   link: 'https://weibo.com/u/2039655434',
        // },
        // zhihu: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.zhihu.com/people/meteorlxy.cn',
        // },
        // douban: {
        //   account: '159342708',
        //   link: 'https://www.douban.com/people/159342708',
        // },
        // reddit: {
        //   account: 'meteorlxy',
        //   link: 'https://www.reddit.com/user/meteorlxy',
        // },
        // medium: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://medium.com/@meteorlxy.cn',
        // },
        // instagram: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.instagram.com/meteorlxy.cn',
        // },
        // gitlab: {
        //   account: 'meteorlxy',
        //   link: 'https://gitlab.com/meteorlxy',
        // },
        docker: {
          account: 'stiles',
          link: 'https://hub.docker.com/u/stilesboy',
        },
        juejin: {
          account: 'stiles',
          link: 'https://juejin.im/user/4103806975222104',
        },
      },
    },

    header: {
      background: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2023-present <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2021014324号-1</a> | MIT License',
    },

    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Projects', link: '/projects/', exact: false },
      { text: "RSS 订阅", link: "http://stiles.cc/rss.xml" },
      { text: 'Github', link: 'https://github.com/stilesTech/TechShare' },
    ],


    // Enable smooth scrolling or not
    smoothScroll: false,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    comments: {
      platform: 'github',
      owner: 'stilesTech',
      repo: 'TechShare',
      clientId: '5e8eb41444effdecf5f0',
      clientSecret: 'a7b667880ccaabd5a58495a02b566bb3b36cc5bb',
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 5,
    },
  },
}
