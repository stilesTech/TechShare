(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{177:function(t,e,r){t.exports=r.p+"assets/img/1242166858.c3b01180.png"},178:function(t,e,r){t.exports=r.p+"assets/img/4103234509.4de619d2.jpg"},179:function(t,e,r){t.exports=r.p+"assets/img/3067361075.e528b31e.jpg"},180:function(t,e,r){t.exports=r.p+"assets/img/3331097472.d3467703.jpg"},181:function(t,e,r){t.exports=r.p+"assets/img/3904546546.1a6ec46e.jpg"},182:function(t,e,r){t.exports=r.p+"assets/img/2010636137.d922ad52.jpg"},183:function(t,e,r){t.exports=r.p+"assets/img/2873103260.666dc5c9.jpg"},184:function(t,e,r){t.exports=r.p+"assets/img/4089696677.7ef911c2.jpg"},289:function(t,e,r){"use strict";r.r(e);var _=r(4),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("HTTP代表(Hyper Text Transfer Protocol)超文本传输协议,比较了下Http1.0, Http1.1, Http2.0 的技术发展历程.")])]),t._v(" "),_("h1",{attrs:{id:"http协议发展历程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议发展历程"}},[t._v("#")]),t._v(" HTTP协议发展历程")]),t._v(" "),_("p",[t._v("HTTP代表(Hyper Text Transfer Protocol)超文本传输协议。是一种用于分布式、协作式和超媒体信息系统的应用层协议。网络协议很多种,HTTP是万维网的数据通信的基础。")]),t._v(" "),_("p",[t._v("1996年,HTTP1.0协议规范"),_("a",{attrs:{href:"http://www.ietf.org/rfc/rfc1945.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC1945"),_("OutboundLink")],1),t._v("发布.")]),t._v(" "),_("p",[t._v("1999年,HTTP1.1协议规范"),_("a",{attrs:{href:"http://www.ietf.org/rfc/rfc2616.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC2616"),_("OutboundLink")],1),t._v("发布.")]),t._v(" "),_("p",[t._v("2015年,HTTP/2协议规范"),_("a",{attrs:{href:"http://www.ietf.org/rfc/rfc7540.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC7540"),_("OutboundLink")],1),t._v("/"),_("a",{attrs:{href:"http://www.ietf.org/rfc/rfc7541.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("7541"),_("OutboundLink")],1),t._v("发布.")]),t._v(" "),_("ul",[_("li",[t._v("HTTP/2还没达到普及的程度,目前主流的协议还是HTTP1.1.")])]),t._v(" "),_("h2",{attrs:{id:"http1-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-0"}},[t._v("#")]),t._v(" "),_("strong",[t._v("HTTP1.0")])]),t._v(" "),_("p",[t._v("HTTP1.0:无状态,无连接的应用层协议,客户端和服务端的通信每次请求都是“一来一回“的短链接,每发起一个请求时都会创建一个新的连接，并在收到应答时立即关闭。")]),t._v(" "),_("p",[t._v("1:每次请求都是独立的(无状态)")]),t._v(" "),_("p",[t._v("2:每次都创建一个新的TCP请求(无法复用)")]),t._v(" "),_("p",[t._v("3:下个请求需要等待上个请求响应关闭完毕才能发送(队头阻塞)")]),t._v(" "),_("p",[_("img",{attrs:{src:r(177),alt:"../uploads/2021/02/1242166858.png"}})]),t._v(" "),_("p",[t._v("为了解决这些问题，")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("HTTP1.1\n")])])]),_("p",[t._v("出现了。")]),t._v(" "),_("h2",{attrs:{id:"http1-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-1"}},[t._v("#")]),t._v(" "),_("strong",[t._v("HTTP1.1")])]),t._v(" "),_("p",[t._v("对于"),_("code",[t._v("HTTP1.1")]),t._v("，不仅继承了"),_("code",[t._v("HTTP1.0")]),t._v("简单的特点，还克服了诸多"),_("code",[t._v("HTTP1.0")]),t._v("性能上的问题。")]),t._v(" "),_("p",[t._v("连接复用("),_("strong",[t._v("长连接")]),t._v(")")]),t._v(" "),_("p",[t._v("HTTP1.1增加了一个Connection字段，通过设置"),_("code",[t._v("Keep-Alive")]),t._v("可以保持"),_("code",[t._v("HTTP")]),t._v("连接不断开，避免了每次客户端与服务器请求都要重复建立TCP连接，提高了网络的利用率。如果客户端想关闭HTTP连接，可以在请求头中携带"),_("code",[t._v("Connection: false")]),t._v(" 来告知服务器关闭请求。")]),t._v(" "),_("ul",[_("li",[t._v("减少了建立和关闭连接的开销")])]),t._v(" "),_("p",[t._v("管道化")]),t._v(" "),_("p",[_("strong",[t._v("Pipeline机制")])]),t._v(" "),_("p",[t._v("在同一个Tcp连接上面,可以在请求发出去之后,响应没有回来之前,就可以发送下一个,再下一个请求,提高了在同一个Tcp连接上面的处理请求的效率,下图展示了串行和Pipeline对比.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(178),alt:"../uploads/2021/02/4103234509.jpg"}})]),t._v(" "),_("ul",[_("li",[t._v("提高单个TCP连接请求并发")])]),t._v(" "),_("p",[t._v("需要注意的是，"),_("strong",[t._v("服务器必须按照客户端请求的先后顺序依次回送相应的结果，以保证客户端能够区分出每次请求的响应内容。")])]),t._v(" "),_("p",[t._v("基于需要保证响应请求的顺序,故和HTTP1.0一样会有队头阻塞(Head-of-line Blocking)问题")]),t._v(" "),_("p",[t._v("如上图如果请求1发生了延迟,那么请求2和请求3的响应会被阻塞,知道服务器返回请求1的响应")]),t._v(" "),_("p",[t._v("也正因为如此,为了避免Pipeline机制的副作用,很多浏览器默认把Pipeline关闭了.")]),t._v(" "),_("p",[_("strong",[t._v("缓存处理（强缓存和协商缓存["),_("a",{attrs:{href:"http://www.yangzicong.com/article/12",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),_("OutboundLink")],1),t._v("]）*"),_("em",[t._v("新的字段如"),_("code",[t._v("cache-control")]),t._v("，支持*"),_("em",[t._v("断点传输")])]),t._v("，以及增加了")]),t._v("Host字段**（使得一个服务器能够用来创建多个Web站点）。")]),t._v(" "),_("h2",{attrs:{id:"http-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" "),_("strong",[t._v("HTTP/2")])]),t._v(" "),_("p",[_("strong",[t._v("SPDY")])]),t._v(" "),_("p",[t._v("SPDY是谷歌开发的一个实验性协议，于2009年年中发布，其主要目标是通过解决HTTP1.1中广为人知的一些性能限制，来减少网页的加载延迟。SPDY引入了一个新的二进制分帧数据层，以实现多向请求和响应、优先次序、最小化及消除不必要的网络延迟，目的是更有效利用底层TCP连接。")]),t._v(" "),_("p",[t._v("几年后的2012年，这个新的实验性协议得到了Chrome、Firefox和Opera的支持，很多大型网站都对兼容客户端提供SPDY会话。最终，HTTP-WG在2012年吸取了SPDY的经验教训，并在此基础上制定了HTTP/2官方标准。")]),t._v(" "),_("p",[_("img",{attrs:{src:r(179),alt:"../uploads/2021/02/3067361075.jpg"}})]),t._v(" "),_("p",[_("strong",[t._v("二进制分帧")]),t._v("(解决队头阻塞问题)")]),t._v(" "),_("p",[t._v("HTTP2.0通过在应用层和传输层之间增加一个二进制分帧层，突破了"),_("code",[t._v("HTTP1.1")]),t._v("的性能限制、改进传输性能")]),t._v(" "),_("p",[t._v("HTTP1.1本身是明文的字符格式,所谓的二进制分帧,是指在把这个字符格式的报文给TCP之前转换成二进制,并且分成多个帧(多个数据块)来发送.")]),t._v(" "),_("p",[t._v("帧是最小的通信单位，承载着特定类型的数据，例如 HTTP 标头、消息负载等等。 来自不同数据流的帧可以交错发送，然后再根据每个帧头的数据流标识符重新组装。")]),t._v(" "),_("p",[_("img",{attrs:{src:r(180),alt:"../uploads/2021/02/3331097472.jpg"}})]),t._v(" "),_("p",[_("img",{attrs:{src:r(181),alt:"../uploads/2021/02/3904546546.jpg"}})]),t._v(" "),_("p",[t._v("HTTP/2 把请求和响应通过")]),t._v(" "),_("p",[_("strong",[t._v("分帧")])]),t._v(" "),_("p",[t._v("并且给每个帧打上流的 ID 去避免依次响应的问题，对方接收到帧之后根据 ID 拼接出流，这样就可以做到乱序响应从而避免请求时的队首阻塞问题。")]),t._v(" "),_("ul",[_("li",[t._v("并行交错地发送多个请求，请求之间互不影响。")]),t._v(" "),_("li",[t._v("并行交错地发送多个响应，响应之间互不干扰。")]),t._v(" "),_("li",[t._v("使用一个连接并行发送多个请求和响应。")]),t._v(" "),_("li",[t._v("不必再为绕过 HTTP/1.x 限制而做很多工作（请参阅"),_("a",{attrs:{href:"https://hpbn.co/optimizing-application-delivery/#optimizing-for-http1x",target:"_blank",rel:"noopener noreferrer"}},[t._v("针对 HTTP/1.x 进行优化"),_("OutboundLink")],1),t._v("，例如级联文件、image sprites 和域名分片。")]),t._v(" "),_("li",[t._v("消除不必要的延迟和提高现有网络容量的利用率，从而减少页面加载时间。")]),t._v(" "),_("li",[t._v("等等...")])]),t._v(" "),_("p",[t._v("有了二进制分帧,在HTTP层面请求和响应都是并发进行的")]),t._v(" "),_("p",[_("img",{attrs:{src:r(182),alt:"../uploads/2021/02/2010636137.jpg"}})]),t._v(" "),_("p",[t._v("更多细节:")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("strong",[t._v("HTTP发展历程")])]),t._v(" "),_("p",[_("img",{attrs:{src:r(183),alt:"../uploads/2021/02/2873103260.jpg"}})]),t._v(" "),_("h2",{attrs:{id:"对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" "),_("strong",[t._v("对比")])]),t._v(" "),_("p",[t._v("HTTP 2.0 对 HTTP 的延迟问题起到了可以说是一个巨大的优化。下面的链接是网上的一个直观网站，它展示了同样是 300 多张图片，分别在 HTTP 1.1 和 HTTP 2.0 协议下加载的耗时。HTTP 2.0 的速度差不多是 HTTP 1.1 的6倍。")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://http2.akamai.com/demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("演示"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("img",{attrs:{src:r(184),alt:"../uploads/2021/02/4089696677.jpg"}})]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" "),_("strong",[t._v("总结")])]),t._v(" "),_("p",[t._v("总结了下http的发展脉络希望对你有帮助")]),t._v(" "),_("blockquote",[_("p",[t._v("以上内容采集于网络由个人汇总整理,如有侵权请告知后及时删除.")])]),t._v(" "),_("p",[_("strong",[t._v("参考资料")])]),t._v(" "),_("p",[t._v("https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn")]),t._v(" "),_("p",[t._v("https://juejin.cn/post/6844903796225785870")]),t._v(" "),_("p",[t._v("https://book.douban.com/subject/30443578/")]),t._v(" "),_("p",[t._v("https://segmentfault.com/a/1190000020042105")])])}),[],!1,null,null,null);e.default=v.exports}}]);