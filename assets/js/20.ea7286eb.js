(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{545:function(t,e,s){t.exports=s.p+"assets/img/2185062312.f1fe985b.png"},546:function(t,e,s){t.exports=s.p+"assets/img/3081734508.a37c9a78.png"},547:function(t,e,s){t.exports=s.p+"assets/img/4157468633.58bf7230.png"},548:function(t,e,s){t.exports=s.p+"assets/img/1293486863.46ad1b3c.png"},590:function(t,e,s){"use strict";s.r(e);var p=s(10),r=Object(p.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"一、简介"}},[e("strong",[t._v("一、简介")])]),t._v(" "),e("p",[e("strong",[t._v("wx-hub")]),t._v(" 是一个 微信公众号内容半自动同步工具，可以快速通过微信链接同步其它公众号的文章信息。主要通过微信公众号的素材管理和草稿箱Api"),e("strong",[t._v("wx-hub")]),t._v(" github地址:https://github.com/stilesTech/wx-hub"),e("strong",[t._v("wx-operate-api")]),t._v(" github地址:https://github.com/stilesTech/wx-operate-api相关公众号接口文档：https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html")]),t._v(" "),e("p",[t._v("wx-operate-api 是wx-hub站点的后台支撑服务，需要添加对应的微信公众号配置才可以正常提供服务。相关配置如下图所示。")]),t._v(" "),e("p",[t._v("微信后台配置：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(545),alt:"../uploads/2022/04/2185062312.png"}})]),t._v(" "),e("p",[t._v("wx-hub控制台配置:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(546),alt:"../uploads/2022/04/3081734508.png"}})]),t._v(" "),e("h2",{attrs:{id:"二、注意事项"}},[e("strong",[t._v("二、注意事项")])]),t._v(" "),e("p",[t._v("注意1：两个服务都依赖数据库进行信息交换和传输，具体地址：https://github.com/stilesTech/wx-hub/blob/main/wx-hub-db.sql")]),t._v(" "),e("p",[t._v("注意2：注意修改对应服务的数据库配置账号和密码。")]),t._v(" "),e("p",[t._v("注意3：数据库默认后台登录账号admin,密码123456")]),t._v(" "),e("h2",{attrs:{id:"三、如何部署"}},[e("strong",[t._v("三、如何部署")])]),t._v(" "),e("p",[t._v("wx-hub:是.net core项目，wx-operate-api:是java spring boot项目，都支持容器化部署。")]),t._v(" "),e("p",[t._v("对应步骤参考如下:")]),t._v(" "),e("p",[t._v("wx-hub")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#构建docker image\ndocker build -t wx-hub:1.0.0 .\n#登录docker仓库\ndocker login ip:port\n#推送到对应镜像仓库\ndocker push ip:port/wx-hub:1.0.0\n#docker部署\ndocker run -d -p 5001:80 --restart=always --name wx-hub wx-hub:1.0.0\n")])])]),e("p",[t._v("wx-operate-api")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#需要先修改pom里面的docker仓库地址\nmvn dockerfile:build -Pdev\nmvn dockerfile:push -Pdev\n")])])]),e("h3",{attrs:{id:"四、演示效果"}},[e("strong",[t._v("四、演示效果")])]),t._v(" "),e("p",[t._v("输入地址： "),e("a",{attrs:{href:"http://ip:port/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ip:port"),e("OutboundLink")],1),t._v(" 访问,不同公众号需要自己调整公众号配置，具体效果如下：")]),t._v(" "),e("p",[t._v("链接为对应需要同步的公众号文章链接。点击提交后即可同步对应文章内容到新的公众号。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(547),alt:"../uploads/2022/04/4157468633.png"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(548),alt:"../uploads/2022/04/1293486863.png"}})]),t._v(" "),e("h2",{attrs:{id:"五、其它问题"}},[e("strong",[t._v("五、其它问题")])]),t._v(" "),e("p",[t._v("同步的图文封面地址怎么修改？")]),t._v(" "),e("p",[t._v("一般情况用默认配置即可，有些特殊情况需要自定义设置，可以做如下配置：公众号的同步的图文的文章地址需要在公众号配置里面配置，如果没有配置默认走后台配置列表里面的default_article_cover的值。")]),t._v(" "),e("p",[t._v("是否可以配置多个公众号？")]),t._v(" "),e("p",[t._v("是可以的，不同公众号是需要在对应的微信公众号后台配置相同的配置信息。")]),t._v(" "),e("p",[t._v("wx-hub是怎么指定wx-operate-api地址的？")]),t._v(" "),e("p",[t._v("这个是在后台默认配置列表里面的service_url地址指定的。")]),t._v(" "),e("p",[t._v("为何使用两个不同的技术来实现？")]),t._v(" "),e("p",[t._v("个人即兴的开发同步工具，没有投入太多的时间，所以有个人的原因。")]),t._v(" "),e("p",[t._v("其它问题可以联系我进行询问，如回复不及时还请谅解。")])])}),[],!1,null,null,null);e.default=r.exports}}]);