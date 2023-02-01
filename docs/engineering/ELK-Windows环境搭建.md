---
layout: post
title: "ELK-Windows环境搭建"
date: 2020-06-04T11:12:08+08:00
comments: true
tags: ["ELK","监控"]
categories: ["软件工程"]
---

# ELK-Windows环境搭建

ELK是Elasticsearch、Logstash、Kibana的简称，这三者是核心组件。

Elasticsearch:是数据存储、搜索、分析引擎，功能非常强大；

Logstash:是日志的收集、过滤工具；

Kibana:可以为 Logstash 和 ElasticSearch 提供的日志分析友好的 Web 界面，可以帮助您汇总、分析和搜索重要数据日志。

![../uploads/2020/10/2639035886.jpg](../uploads/2020/10/2639035886.jpg)

1:安装步骤

官网：https://www.elastic.co/cn/downloads/

下载：elasticsearch，Logstash， Kibana

(windows选择zip格式下载)

elasticsearch：

G:\soft\ELK\elasticsearch-7.7.0\config\slasticsearch.yml，修改配置

network.host:127.0.0.1 #ES的网络IP

http.port: 9200 #ES服务端口

进入G:\soft\ELK\elasticsearch-7.7.0\bin 目录执行

elasticsearch.bat 启动服务,浏览器打开http://127.0.0.1:9200 展示如下表示启动成功

![../uploads/2020/10/3463548271.png](../uploads/2020/10/3463548271.png)

kibana：

调整配置文件：\config\kibana.yml修改如下配置

server.port: 5601

server.host: "127.0.0.1"

elasticsearch.hosts: ["http://127.0.0.1:9200"]

启动kibana

\bin目录下执行:kibana.bat

访问：

http://127.0.0.1:5601

![../uploads/2020/10/511248373.png](../uploads/2020/10/511248373.png)

logstash

config目录下添加logstash.conf

```
input {
    file {
        path => "file:/var/log/messages"
        type => "systemlog"
        start_position => "beginning"
        stat_interval => "3"
    }
}
output {
    if [type] == "systemlog" {
        elasticsearch {
            hosts => ["127.0.0.1:9200"]
            index => "system-log-%{+YYYY.MM.dd}"
            user => "elastic"
            password => "changme"
        }
    }
}
```

bin目录下执行命令：logstash -f ../config/logstash.conf