---
layout: post
title: "Upsource实践指南"
date: 2022-05-10T20:36:01+08:00
comments: true
tags: ["代码","代码审查"]
categories: ["软件工程"]
---

## 简介

Upsource是一款由Jetbrains公司出品的代码审查工具，具有社交属性，将代码予以团队成员或其他人分享，讨论。浏览代码视觉效果美观，可以与IDEA无缝集成，完成代码审查工作。

官方文档：[点击查看](https://link.juejin.cn/?target=https%3A%2F%2Fwww.jetbrains.com%2Fhelp%2Fupsource%2Fgetting-started.html)

## 一：代码审查中的角色

在 Upsource 中，典型的代码审查过程涉及两个或多个参与者，可分为以下角色：

- **Author** 是一个提交者，代码审查即是来检查他/她所提交的更改。
- **Reviewer** 应检查作者提交的更改并留下反馈。他还可以完成审查、提出对更改的关注,也可以关闭这次审查。
- **Watcher** 预计不会参与审核过程。不太需要去关心代码的细节修改，关注重点是项目的状态以及团队成员的讨论。

![Snipaste_2022-05-10_11-33-47.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f2a0b9027cf4163b7ced60bbed5a3cd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)
如何邀请别人审查代码，作为Review的发起者，你可以点击左侧Overview 模块下对应的+符号， 邀请团队成员或者其他人作为`reviewer`或者`watcher`，同时，你可以将`鼠标悬停在头像之上`，看到该成员本次review的进度,如下所示

![Snipaste_2022-05-10_11-36-08.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9c577f6db284a34b777f2637115d633~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## **二：审查流程**

代码的修改者一般作为审查流程的发起者，如果要邀请团队成员其他成员进行代码审查，需要进行以下操作：

- 将更改内容提交到版本管理系统（Gitlab/Github）。
- 创建一个审查流程（可以设置为系统自动发起）。
- 邀请审查参与者（Reviewer和可选的Watcher）。
- 讨论代码的问题，审查流程参与者交换意见。
- Author解决问题，提交版本修订，并将新的修订添加到现有的评审中。（IDEA的Upsource插件支持自动添加）
- 当Reviewer接受你的修改后，便可以关闭审查流程。

以下详细讲解如何创建Upsource代码审查。

## 三：案例演示

### 发起评论

创建了2个developer角色的账号，developer1和developer2.

使用developer1账号进行评论，点击红色的铅笔icon进行评论，在评论框中可以使用@符号来通知到对应的开发人员。

如下所示发送了：@developer2 是否有添加单元测试？

![Snipaste_2022-05-10_11-44-20.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6c175b895c24335b1349537b7e5bdb8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

切换到developer2账号，点击review视图，可以查看到对应的的评论信息，如下图

![Snipaste_2022-05-07_18-14-22.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4bc942e10337487c95fa862dd0d8fc30~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

点击#符号可以跳转到具体评论位置，进行回复

![Snipaste_2022-05-07_18-07-50.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f05c64cf8e6f4d60bbe75427f2d2e618~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

developer1评论发起者可以通过点击右侧的resolve按钮表示处理已解决，

也可以点击添加对应标签，标注这个问题是功能性的BUG还是代码的样式问题等。也可以自定义标签在全局项目中使用。

![Snipaste_2022-05-10_11-50-45.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05bf5aa2078041b583f102136bd81e8b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

![Snipaste_2022-05-07_18-21-09.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a7e555b36f44ffdbfddee60dd4bd232~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 取消消息推送

如果想停止对评论的监视，停止接收消息通知，可以从观察者列表中删除你自己。

![Snipaste_2022-05-10_11-53-52.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44662a477f9941e2b3a4969e2e54e512~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

如果不想删除自己，可以设置为Mute review（消息免打扰），这样这个评审后续的讨论信息就不会出现在你的News Feed中了。不过链接到评审中还是可以看到的。

### 通过审查

如果你对作者的修改感到满意，那你就可以点击Accept。如果你觉得这些问题值得怀疑，那就点击`Raise concern`

![Snipaste_2022-05-10_11-55-50.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c7f524127b643c2848b10ec43ac9744~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

如果最初提交的修订没有得到Reviewer的Accept，可以按照Reviewer的要求处理这些问题并提交代码的修订到gitlab，然后可以将一个或几个新的修订附加到原始审核中以获得Accept。

### 发起修订

使用idea提交代码的时候可以勾选Amend(修订)，勾选review with upsource选择对应的审查记录。完成一次修订提交。

![Snipaste_2022-05-09_16-56-28.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75c953e9527f43bf846c31dbe9f1c4d3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

![Snipaste_2022-05-09_17-04-42.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96f03c89c20f46bbb8991b7d0b42c0d6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

![Snipaste_2022-05-10_11-58-01.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b4d08a6b3b64bfa960e391676269071~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 完成审查

当达到所有审查者的要求后，审查者都Accept/raise concern这个 Review的修改结果后，表示接受此次修订，此次审查被视为完成。

### 关闭审查

审查者和代码作者都可以关闭 Review，可以在项目属性设置中代码作者是否有关闭Review的权限。

### 审核状态

审查可以经历三个不同的阶段：

1. **待定**— 已创建审阅并分配审阅者。
2. **已完成**——所有审阅者通过接受（accept ）或关注（raise concern）变更的时候。
3. **已关闭**— 由作者关闭，因为不需要或期望所有参与者采取进一步行动。

## 四：其它实践

upource允许自动添加工作流程，例如：可以通过添加对应触发器，自动添加对应的代码审查者

![Snipaste_2022-05-10_17-11-09.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cac8ccc251fc431c8d9bcf2eaac20b36~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

也可以通过webhook完成整个自动构建流程和消息通知等

![Snipaste_2022-05-10_17-11-43.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09f322c20fb049b3a6e022f956d6f8e1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

比如通过upsource webhook 发送对应通知消息，或者触发对应jenkins任务。