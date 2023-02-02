---
layout: post
title: "使用n8n订阅网站rss消息推送到Telegram"
date: 2022-07-28T19:42:06+08:00
comments: true
tags: ["opensource", "自动化"]
categories: ["工具"]
---

# 使用n8n订阅网站rss消息推送到Telegram

n8n 是一个免费且开放的、公平代码许可的基于节点的工作流自动化工具。它可以自托管、易于扩展。可帮助您将任何具有 API 的应用程序与任何其他应用程序连接起来，并使用很少或无需代码来操作其数据。

> n8n is a free and open [fair-code](https://link.juejin.cn/?target=http%3A%2F%2Ffaircode.io%2F) licensed node based Workflow Automation Tool. It can be self-hosted, easily extended. helps you to connect any app with an API with any other, and manipulate its data with little or no code.

# 关于n8n

简单点来讲，n8n就是一个能够链接多个API应用程序，基于自定义工作流进行协作的开源工具。
接下来演示下如何通过n8n实现网站rss更新通知到telegram.

1:创建telegram机器人

2:获取chat id

3:构建n8n事件流

**1.如何为Telegram创建机器人**

首先是第一件事。您需要注册Telegram。

打开Telegram应用程序，搜索@BotFather并开始聊天。发送/newbot命令并按照说明进行操作。完成初始步骤后，您将获得：

- 您自己的令牌
- Telegram api URL - api.telegram.org/
- 链接到文档

![Snipaste_2022-07-29_14-11-33.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f59ca61b6f0d40e1ba0ed04e609ddab5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

[api.telegram.org/bot54719033…](https://link.juejin.cn/?target=https%3A%2F%2Fapi.telegram.org%2Fbot5471903376%3AAAF7XmoadmlkFiLKgRA1SnQKcP23MkrKN7I%2FgetUpdates)

**2.获取 chatId**

观察这个 url `https://api.telegram.org/bot{token}/getUpdates`

使用第一步获得的 `token` 替换上述 url 中的 `{token}` 然后得到新的 url，复制粘贴到浏览器地址栏，回车请求。不出意外你会得到如下 response

```json
{
    "ok": true,
    "result": []
}
复制代码
```

回到telegram进入到你创建的机器人会话，随便和它说一句话，比如给它发一句 "Hello World"，然后重新请求一遍上述的 url `https://api.telegram.org/bot{token}/getUpdates`，不出意外你收到的 response 类似是这样了

```json
{
  "ok": true,
  "result": [
    {
        ...
        "chat": {
          "id": 5210226195,
          "first_name": "摩根",
          "last_name": "侦探",
          "type": "private"
        },
      }
    }
  ]
}
复制代码
```

其中的 result[0].message.chat.id 的值就是 `chatId` 也就是 5210226195
知道了 token 和 chatId 就可以使用 bot 了。

# curl 测试

```bash
curl -s -X POST https://api.telegram.org/bot{token}/sendMessage -d chat_id={chatId} -d text="Hello World"
复制代码
```

这是发送 post 请求。使用实际的 `token` 和 `chatId` 替换 shell command 中的 `{token}` 和 `{chatId}`
不出意外，你的 bot 会收到 "Hello World"，恭喜，这已经成功了！

**3.搭建n8n流水线**

![Snipaste_2022-07-29_11-36-56.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a29f493f9ef41bcb716aa3087ee27c2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

我是参考: **[Setting up an Automated Blog using n8n & Tiny Tiny RSS](https://link.juejin.cn/?target=https%3A%2F%2Fforum.cloudron.io%2Ftopic%2F5736%2Fsetting-up-an-automated-blog-using-n8n-tiny-tiny-rss)**

1：选择一个支持rss的网站，比如：([stiles.cc/feed/](https://link.juejin.cn/?target=http%3A%2F%2Fstiles.cc%2Ffeed%2F))

2：使用[rss-stiles-workflow](https://link.juejin.cn/?target=https%3A%2F%2Fwww.notion.so%2F7b02a7745abf4350ba2e5839800fe039)地址，导入对应的工作流

3：替换RSS Feed Read模块成想要订阅的RSS地址

4：替换Telegram模块成之前获取到的token和chatid

![Snipaste_2022-07-29_13-59-03.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eabfd220952d47fd93ce7edca2125e72~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

![Snipaste_2022-07-29_14-01-23.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66885be7c504413a8cf268c51c9ca028~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

执行该workflow，但rss站点有新的文章发布的时候，telegram就能相应的发送消息通知，如下图：
![Snipaste_2022-07-29_14-45-02.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61b8d3e869db449586de213447029898~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

实际上n8n可以实现很多场景，你可以通过[n8n.io/workflows](https://link.juejin.cn/?target=https%3A%2F%2Fn8n.io%2Fworkflows%2F) 去搜索需要的工作流。比较容易想到的，devops流水线，多端消息互通，自动通信telegram机器人等

参考资料

[hellodk.cn/post/743](https://link.juejin.cn/?target=https%3A%2F%2Fhellodk.cn%2Fpost%2F743)

[forum.cloudron.io/topic/5736/…](https://link.juejin.cn/?target=https%3A%2F%2Fforum.cloudron.io%2Ftopic%2F5736%2Fsetting-up-an-automated-blog-using-n8n-tiny-tiny-rss)