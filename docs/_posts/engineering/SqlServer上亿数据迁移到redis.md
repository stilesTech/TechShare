---
layout: post
title: "SqlServer上亿数据迁移到redis"
date: 2020-11-09T15:54:08+08:00
comments: true
tags: ["Sql Server","redis","数据迁移"]
category: 软件工程
---

记录下工作上最近遇到的一次sqlserver数据迁移到redis上面的一些经验

<!-- more -->

方案一:redis2.6之后使用redis-cli支持pipe模式进行批量插入数据生成file.txt 文件，内容 SET key value（空格隔开）每行一条数据linux环境下使用-cat命令

```
cat file.txt | D:\\redis\\redis-cli -h 192.168.1.x -a password -p 6379 --pipe
```

windows 环境下使用-type命令

```
type file.txt | D:\\redis\\redis-cli -h 192.168.1.x -a password -p 6379 --pipe
```

方案二:使用sqlcmd（sql自带）管道导入到redis-cli这里稍微解释一下sqlcmd命令行参数：-S：服务器-U：用户名-P：密码-d：数据库名称-h：当为-1时，运行结果中不输出字段名称-i：要运行sql文件file.sql文件查询格式类似如下

```
select concat('set ','key',' value')
```

sqlcmd示例如下:

```
sqlcmd -S 192.168.1.x -U sql_username -P sql_password -d
database -h -1 -i C:\\Users\\Administrator\\Desktop\\file.sql | D:\\redis\\redis-cli -h
192.168.1.x -a redis_password -p 6379
```

方案三:自写工具实现迁移...

总结：

1.方案1和比方案二效率要高些，不过需要生成确定格式的file文件

2.在实际操作中方案二在数据量较大的情况下，在跑到300多万数据的时候经常会发生异常中断的情况

3.通过自写个程序批量处理批量插入数据是比较合适的方式而且后期可以复用，性能也有保障