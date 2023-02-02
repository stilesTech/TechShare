---
layout: post
title: "Liquibase简单介绍与使用"
date: 2021-04-05T10:30:26+08:00
comments: true
tags: ["数据库","DevOps"]
categories: ["软件工程"]
---

# Liquibase简单介绍与使用

## Liquibase还是Flyway
 Flyway和Liquibase都支持专业数据库重构和版本控制所需的所有功能，因此您将始终知道要处理的数据库模式的版本以及它是否与软件版本匹配。两种工具都集成在Maven或Gradle构建脚本中以及Spring Boot生态系统中，您可以完全自动化数据库重构。

Flyway使用SQL定义数据库更改，因此您可以定制SQL脚本，使其与基础数据库技术（例如Oracle或PostgreSQL）良好地配合使用。另一方面，使用Liquibase，您可以通过使用XML，YAML或JSON来定义数据库更改来引入抽象层。因此，Liquibase更适合在具有不同基础数据库技术的不同环境中安装的软件产品中使用。但是，如果您想完全控制SQL，Flyway是首选工具，因为您可以使用完全定制的SQL甚至Java代码来更改数据库。

多种数据源的情况下使用Liquibase会更加合适，不需要维护多种数据库脚本，和学习多种数据库语言，Liquibase对于大型项目更加友好。

## 什么是Liquibase
 Liquibase是一个用于跟踪、管理和应用数据库变化的开源的数据库重构工具。它将所有数据库的变化（包括结构和数据）都保存在 changelog 文件中，便于版本控制，它的目标是提供一种数据库类型无关的解决方案，通过执行 schema 类型的文件来达到迁移。

官网：[docs.liquibase.com/](https://link.juejin.cn?target=https%3A%2F%2Fdocs.liquibase.com%2F)
 ![1617546202(1).jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f1605123da94acdb4a7a9a7b7907c1e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)
## 使用Liquibase的数据库的CI / CD
 实施端到端CI / CD要求将所有代码（包括数据库代码）检入版本控制系统，并作为软件发布过程的一部分进行部署。Liquibase可以帮助您实现这一目标。
 您使用Liquibase进行的每个数据库架构更改都称为一个changeset。Liquibase使用changelogs跟踪所有变更集。Liquibase允许您创建一个触发器，该触发器通过指向更改日志文件来自动更新数据库。从这里，可以轻松地将流程集成到您的整个CI / CD流程中：

 1.将变更集文件推送到要素存储库

 2.针对Dev分支创建拉取请求

 3.在同行评审和批准之后，将功能分支与开发分支合并

 4.在Dev服务器上配置的CI / CD实现触发Liquibase进行数据库更新

 5.Liquibase会自动执行任何新的变更日志文件（而且足以记住已经运行了哪些脚本）

## Liquibase原理
 liquibase支持XML、YAML和JSON格式的迁移脚本。
 默认情况下，Bean会在/db/changelog（相对于Classpath根目录）里查找db.changelog-master.yaml文件。
 Liquibase变更集都集中在一个文件里。changeset命令后的那行有一个id属性，要对数据库进行后续变更。可以添加一个新的changeset，只要id不一样就行。此外，id属性也不一定是数字，可以包含任意内容。
 应用程序启动时，Liquibase会读取db.changelog-master.yaml里的变更集指令集，与之前写入databaseChangeLog表里的内容做对比，随后执行未运行过的变更集。

## Liquibase 特性

- 支持几乎所有主流的数据库，如 MySQL, PostgreSQL, Oracle, Sql Server, DB2 等；
- 支持多开发者的协作维护；
- 日志文件支持多种格式，如 XML, YAML, JSON, SQL等；
- 支持上下文相关逻辑
- 生成数据库变更文档
- 支持多种运行方式，如命令行、Spring 集成、Maven 插件、Gradle 插件等。

## SpringBoot 整合 liquibase

**一、引入依赖先在 pom 文件里引入依赖**

```xml
<dependency>
  <groupId>org.liquibase</groupId>
  <artifactId>liquibase-core</artifactId>
</dependency>
```

**二、指定配置文件位置**

 在代码中新建一个 LiquibaseConfig 类，用于配置 Liquibase，指定配置文件的位置。

```kotlin
import javax.sql.DataSource;
import liquibase.integration.spring.SpringLiquibase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LiquibaseConfig {

  @Bean
  public SpringLiquibase liquibase(DataSource dataSource) {
    SpringLiquibase liquibase = new SpringLiquibase();
    liquibase.setDataSource(dataSource);
    //指定changelog的位置，这里使用的一个master文件引用其他文件的方式
    liquibase.setChangeLog("classpath:liquibase/master.xml");
    liquibase.setContexts("development,test,production");
    liquibase.setShouldRun(true);
    return liquibase;
  }

}
```

**三、编写配置文件**

 目录结构：
 ![liquibase.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4459593b38fd481ca7ccc76c13d61f45~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)
 src/main/resources 下新建一个文件夹：liquibase，用来存放跟 liquibase 相关的文件。
 然后在 liquibase 文件夹下新建 master.xml 作为主文件。

```ini
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd">

    <includeAll path="liquibase/changelogs/" relativeToChangelogFile="false"/>

</databaseChangeLog>
```

includeAll 标签可以把一个文件夹下的所有 changelog 都加载进来。如果单个加载可以用 include。
 includeAll 标签里有两个属性：path 和 relativeToChangelogFile。

| Attribute               | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| file                    | 指定要加载的文件或文件夹位置（在 include 标签里是 file）     |
| relativeToChangelogFile | 文件位置的路径是否相对于 root changelog 是相对路径，默认 false，即相对于 classpath 是相对路径。 |

**四、编写配置文件 changelog 介绍**

```ini
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd">

    <changeSet author="stiles" id="20210330-1" >
        <createTable tableName="department" remarks="部门表">
            <column name="id" type="int" autoIncrement="true" >
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column name="name" type="varchar(50)">
                <constraints nullable="false"/>
            </column>
            <column name="active" type="boolean" defaultValueBoolean="true"/>
        </createTable>
    </changeSet>
    <changeSet author="stiles" id="20210330-2" >
        <addColumn  tableName="department">
            <column name="company"  type="VARCHAR(100)"></column>
        </addColumn>
    </changeSet>
    
    <changeSet author="stiles"  id="20210330-3">
        <insert tableName="department">
            <column name="id" valueNumeric="1"/>
            <column name="name" value="stiles_1"/>
            <column name="active" valueNumeric="1"/>
        </insert>
        <insert tableName="department">
            <column name="id" valueNumeric="2"/>
            <column name="name" value="stiles_2"/>
            <column name="active" valueNumeric="1"/>
        </insert>
        <insert tableName="department">
            <column name="id" valueNumeric="3"/>
            <column name="name" value="stiles_3"/>
            <column name="active" valueNumeric="0"/>
        </insert>
    </changeSet>
    <changeSet author="stiles" id="20210330-4" >
        <update tableName="department">
            <column name="name" value="stiles_33"/>
            <where>name='stiles_3'</where>
        </update>
    </changeSet>
</databaseChangeLog>
```

SQL 格式的 changelogs 文件

 变更集 changeset 是通过 author + id 的方式来保证唯一性

 变更集提供以下属性：

 stripComments:设置为 true 可在执行之前删除 SQL 中的任何注释, 否则为 false。如果未设置, 则默认值为 true

 splitStatements:设置为false时，在“s”和“go”上不会使用Liquibase 拆分语句，默认为true。

 endDelimiter:应用于语句结尾的分隔符。默认为“；”，也可以设置为“”

 runAlways:在每次运行时执行变更集, 即使之前已运行

 runOnChange:在首次看到更改并每次更改变更集时执行更改
 
 context:如果在运行时传递了特定上下文, 则执行更改。任何字符串都可以用于上下文名称, 并且大小写不敏感。

 logicalFilePath:用于在创建变更集的唯一标识符时重写文件名和路径。移动或重命名更改日志时所必需。

 labels:标签是对变更集进行分类的通用方法集类似上下文, 但工作方式正好相反。如果不是在运行时定义一组上下文, 然后在变更集中定义一个匹配表达式, 而是在上下文中定义一组标签, 在运行时定义一个匹配表达式。

 runInTransaction:变更集是否应作为单个事务运行 (如果可能)，默认值为 true。请注意此属性，如果设置为 false, 并且通过运行包含多个语句的变更集部分发生错误, 则 liquibase 数据库的 databasechangeloglock 表将处于无效状态

 failOnError:如果在执行变更集时发生错误, 迁移是否应返回失败

 dbms:要用于该变更集的数据库的类型。当迁移步骤运行时, 它将根据此属性检查数据库类型，如：oracle、mysql
 
 logicalFilePath:在数据库 databasechangeloglock 中设置逻辑文件路径, 而不是在执行 liquibase 的 sql 物理文件位置。

**五、Liquibase最佳实践**

 changelog管理建议：

 **一个变更集只设置一次更改**

 尽可能地避免对一个变更集进行多次更改，以避免自动提交 SQL 语句而可能使数据库处于非预期状态。 如 --changeset stiles:1 变更集，只新建一张 department 表，后面不再修改该变更集，如果需要变更，可以新增一条变更集。
 变更集的 ID
 选择适合您的方法。有的人是使用从 1 开始的序列号, 并且在更改日志中是唯一的，也有些人选择一个描述性的名称（例如：new-address-table）

 **总是考虑回滚**

 尽量尝试以可以回滚的方式编写变更集，如 --changeset stiles:1 变更集新建一个 department 表，在后面跟上回滚的 SQL， --rollback drop table department;

 **为变更集添加注释**

 尽量为每一个变更集条目增加注释

演示案例：
 [github.com/stilesBoy/l…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FstilesBoy%2Fliquibase_example)

参考资料：
 [thorben-janssen.com/liquibase-u…](https://link.juejin.cn?target=https%3A%2F%2Fthorben-janssen.com%2Fliquibase-update-existing-database%2F)
 [blog.csdn.net/cenxuu/arti…](https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fcenxuu%2Farticle%2Fdetails%2F86685662)
 [www.it610.com/article/117…](https://link.juejin.cn?target=https%3A%2F%2Fwww.it610.com%2Farticle%2F1176477856620949504.htm)