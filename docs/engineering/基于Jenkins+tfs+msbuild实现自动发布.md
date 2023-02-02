---
layout: post
title: "基于Jenkins+tfs+msbuild实现自动发布"
date: 2019-07-15T14:22:08+08:00
comments: true
tags: ["Jenkins","DevOps"]
categories: ["软件工程"]
---

# 基于Jenkins+tfs+msbuild实现自动发布

Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件.

官网地址:Jenkins, 默认端口8080

**初始化jenkins**

1.浏览器输入：

http://localhost:8080

解锁jenkins

![../uploads/2020/10/251376409.jpg](../uploads/2020/10/251376409.jpg)

在如图所示的路径下面打开initialAdminPassword文件，复制密码输入即可

2.自定义Jenkins ，选择安装推荐的插件

![../uploads/2020/10/2557773529.jpg](../uploads/2020/10/2557773529.jpg)

1. 安装MSBuild和TFS插件安装

在Manage Jenkins 的 Manage Plugin 里面我们找到 MSBuild 和 Team Foundation Server Plug-in 插件，勾选，点击 Download now and install after restart 按钮，勾选 Restart Jenkins when installation is complete and no jobs are running 。

![../uploads/2020/10/3462620899.jpg](../uploads/2020/10/3462620899.jpg)

![../uploads/2020/10/4037582657.jpg](../uploads/2020/10/4037582657.jpg)

![../uploads/2020/10/3869712054.jpg](../uploads/2020/10/3869712054.jpg)

安装完成之后 Jenkins 会重启，等待重启完毕之后，来到 Jenkins>>Global Tool Configuration 查看 MSBuild配置msbuild的路径，我这边是安装了vs2017在安装目录下面可以找到MSBuild路径，如下图：

![../uploads/2020/10/1621096654.jpg](../uploads/2020/10/1621096654.jpg)

**项目构建**

选择FreeStyle Project(自由风格的构建)，相关配置如下图

![../uploads/2020/10/2719988944.jpg](../uploads/2020/10/2719988944.jpg)

![../uploads/2020/10/3790967767.jpg](../uploads/2020/10/3790967767.jpg)

![../uploads/2020/10/1900698993.jpg](../uploads/2020/10/1900698993.jpg)

MSBuild参数说明如下：

/t:Rebuild (每次都是重新构建)/p:Configuration=Release （构建的是发布版本）/p:VisualStudioVersion=15.0 （vs的版本,使用的是2017填写的是15.0）/p:WebProjectOutputDir=D:\wwwroot\test （发布路径）/p:OutputPath=D:\wwwroot\test\bin (输出路径)/p:DeployOnBuild=True （表示启用编译并发布）

msbuild文档：![点击查看文档](https://learn.microsoft.com/zh-cn/visualstudio/msbuild/msbuild?view=vs-2022)

msbuild15版本离线下载文件：![点击下载](https://www.microsoft.com/zh-CN/download/details.aspx?id=48159)

执行windows批处理命令复制目录文件到对应站点下面

![../uploads/2020/10/1638465169.jpg](../uploads/2020/10/1638465169.jpg)

xcope source [destination] [命令参数]

source 指定要复制的文件

destination 指定新文件的位置和/或名称。

/s 复制目录和子目录，除了空的

/e 复制目录和子目录，包括空的

/y 禁止提示以确认改写一个现存目标文件

/s /e /y 表示完成拷贝； exclude

exclude 指定含有字符串的文件列表。每个字符串在文件中应位于单独的一行。如果任何字符串与复制文件的绝对路径的任何部分相符，则排除复制该文件。例如，指定如 \obj\ 或 .obj 的字符串会分别排除目录 obj 下面的所有文件或带有.obj 扩展名的所有文件。

![../uploads/2020/10/75287297.jpg](../uploads/2020/10/75287297.jpg)

手动构建项目,完成构建-发布的流程

![../uploads/2020/10/1217804723.jpg](../uploads/2020/10/1217804723.jpg)

![../uploads/2020/10/1404944688.jpg](../uploads/2020/10/1404944688.jpg)

**总结**

整个流程通过tfs 拉取项目到jenkins安装目录的workspace目录下面，再通过msbuild编译和预发布到指定的目录，确保无误之后再通过windows xcopy命令覆盖到指定站点路径下面（此处根据需要还可以添加站点的备份）完成整个自动编译到发布的流程。

**参考资料**

[jekins+TFS+MsBuild实现.net的持续集成，自动化部署](https://www.cnblogs.com/tianyang1027/p/10333454.html)

[.NET Core微服务之基于Jenkins+Docker实现持续部署（Part 1）](https://www.cnblogs.com/edisonchou/p/CD_foundation_based_on_jenkins_and_docker.html)