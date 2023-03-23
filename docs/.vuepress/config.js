const path = require('path')

module.exports = {
  title: 'Stiles 的技术分享',

  description: '🌟 分享效率方法 🪄、优质文章 📑、编程知识 🎹、实用工具 🛠️ 和有趣内容 😄。',

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
      { text: 'Github', link: 'https://github.com/stilesTech/TechShare' },
    ],


    // Enable smooth scrolling or not
    smoothScroll: false,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    comments: {
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
