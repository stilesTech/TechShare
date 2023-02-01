(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{574:function(p,t,e){"use strict";e.r(t);var v=e(10),c=Object(v.a)({},(function(){var p=this,t=p._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[p._v("简介")]),p._v(" "),t("p",[p._v("Upsource是一款由Jetbrains公司出品的代码审查工具，具有社交属性，将代码予以团队成员或其他人分享，讨论。浏览代码视觉效果美观，可以与IDEA无缝集成，完成代码审查工作。")]),p._v(" "),t("p",[p._v("官方文档："),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.jetbrains.com%2Fhelp%2Fupsource%2Fgetting-started.html",target:"_blank",rel:"noopener noreferrer"}},[p._v("点击查看"),t("OutboundLink")],1)]),p._v(" "),t("h2",{attrs:{id:"一-代码审查中的角色"}},[p._v("一：代码审查中的角色")]),p._v(" "),t("p",[p._v("在 Upsource 中，典型的代码审查过程涉及两个或多个参与者，可分为以下角色：")]),p._v(" "),t("ul",[t("li",[t("strong",[p._v("Author")]),p._v(" 是一个提交者，代码审查即是来检查他/她所提交的更改。")]),p._v(" "),t("li",[t("strong",[p._v("Reviewer")]),p._v(" 应检查作者提交的更改并留下反馈。他还可以完成审查、提出对更改的关注,也可以关闭这次审查。")]),p._v(" "),t("li",[t("strong",[p._v("Watcher")]),p._v(" 预计不会参与审核过程。不太需要去关心代码的细节修改，关注重点是项目的状态以及团队成员的讨论。")])]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f2a0b9027cf4163b7ced60bbed5a3cd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_11-33-47.png"}}),p._v("\n如何邀请别人审查代码，作为Review的发起者，你可以点击左侧Overview 模块下对应的+符号， 邀请团队成员或者其他人作为"),t("code",[p._v("reviewer")]),p._v("或者"),t("code",[p._v("watcher")]),p._v("，同时，你可以将"),t("code",[p._v("鼠标悬停在头像之上")]),p._v("，看到该成员本次review的进度,如下所示")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9c577f6db284a34b777f2637115d633~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_11-36-08.png"}})]),p._v(" "),t("h2",{attrs:{id:"二-审查流程"}},[t("strong",[p._v("二：审查流程")])]),p._v(" "),t("p",[p._v("代码的修改者一般作为审查流程的发起者，如果要邀请团队成员其他成员进行代码审查，需要进行以下操作：")]),p._v(" "),t("ul",[t("li",[p._v("将更改内容提交到版本管理系统（Gitlab/Github）。")]),p._v(" "),t("li",[p._v("创建一个审查流程（可以设置为系统自动发起）。")]),p._v(" "),t("li",[p._v("邀请审查参与者（Reviewer和可选的Watcher）。")]),p._v(" "),t("li",[p._v("讨论代码的问题，审查流程参与者交换意见。")]),p._v(" "),t("li",[p._v("Author解决问题，提交版本修订，并将新的修订添加到现有的评审中。（IDEA的Upsource插件支持自动添加）")]),p._v(" "),t("li",[p._v("当Reviewer接受你的修改后，便可以关闭审查流程。")])]),p._v(" "),t("p",[p._v("以下详细讲解如何创建Upsource代码审查。")]),p._v(" "),t("h2",{attrs:{id:"三-案例演示"}},[p._v("三：案例演示")]),p._v(" "),t("h3",{attrs:{id:"发起评论"}},[p._v("发起评论")]),p._v(" "),t("p",[p._v("创建了2个developer角色的账号，developer1和developer2.")]),p._v(" "),t("p",[p._v("使用developer1账号进行评论，点击红色的铅笔icon进行评论，在评论框中可以使用@符号来通知到对应的开发人员。")]),p._v(" "),t("p",[p._v("如下所示发送了：@developer2 是否有添加单元测试？")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6c175b895c24335b1349537b7e5bdb8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_11-44-20.png"}})]),p._v(" "),t("p",[p._v("切换到developer2账号，点击review视图，可以查看到对应的的评论信息，如下图")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4bc942e10337487c95fa862dd0d8fc30~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-07_18-14-22.png"}})]),p._v(" "),t("p",[p._v("点击#符号可以跳转到具体评论位置，进行回复")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f05c64cf8e6f4d60bbe75427f2d2e618~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-07_18-07-50.png"}})]),p._v(" "),t("p",[p._v("developer1评论发起者可以通过点击右侧的resolve按钮表示处理已解决，")]),p._v(" "),t("p",[p._v("也可以点击添加对应标签，标注这个问题是功能性的BUG还是代码的样式问题等。也可以自定义标签在全局项目中使用。")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05bf5aa2078041b583f102136bd81e8b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_11-50-45.png"}})]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a7e555b36f44ffdbfddee60dd4bd232~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-07_18-21-09.png"}})]),p._v(" "),t("h3",{attrs:{id:"取消消息推送"}},[p._v("取消消息推送")]),p._v(" "),t("p",[p._v("如果想停止对评论的监视，停止接收消息通知，可以从观察者列表中删除你自己。")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44662a477f9941e2b3a4969e2e54e512~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_11-53-52.png"}})]),p._v(" "),t("p",[p._v("如果不想删除自己，可以设置为Mute review（消息免打扰），这样这个评审后续的讨论信息就不会出现在你的News Feed中了。不过链接到评审中还是可以看到的。")]),p._v(" "),t("h3",{attrs:{id:"通过审查"}},[p._v("通过审查")]),p._v(" "),t("p",[p._v("如果你对作者的修改感到满意，那你就可以点击Accept。如果你觉得这些问题值得怀疑，那就点击"),t("code",[p._v("Raise concern")])]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c7f524127b643c2848b10ec43ac9744~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_11-55-50.png"}})]),p._v(" "),t("p",[p._v("如果最初提交的修订没有得到Reviewer的Accept，可以按照Reviewer的要求处理这些问题并提交代码的修订到gitlab，然后可以将一个或几个新的修订附加到原始审核中以获得Accept。")]),p._v(" "),t("h3",{attrs:{id:"发起修订"}},[p._v("发起修订")]),p._v(" "),t("p",[p._v("使用idea提交代码的时候可以勾选Amend(修订)，勾选review with upsource选择对应的审查记录。完成一次修订提交。")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75c953e9527f43bf846c31dbe9f1c4d3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-09_16-56-28.png"}})]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96f03c89c20f46bbb8991b7d0b42c0d6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-09_17-04-42.png"}})]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b4d08a6b3b64bfa960e391676269071~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_11-58-01.png"}})]),p._v(" "),t("h3",{attrs:{id:"完成审查"}},[p._v("完成审查")]),p._v(" "),t("p",[p._v("当达到所有审查者的要求后，审查者都Accept/raise concern这个 Review的修改结果后，表示接受此次修订，此次审查被视为完成。")]),p._v(" "),t("h3",{attrs:{id:"关闭审查"}},[p._v("关闭审查")]),p._v(" "),t("p",[p._v("审查者和代码作者都可以关闭 Review，可以在项目属性设置中代码作者是否有关闭Review的权限。")]),p._v(" "),t("h3",{attrs:{id:"审核状态"}},[p._v("审核状态")]),p._v(" "),t("p",[p._v("审查可以经历三个不同的阶段：")]),p._v(" "),t("ol",[t("li",[t("strong",[p._v("待定")]),p._v("— 已创建审阅并分配审阅者。")]),p._v(" "),t("li",[t("strong",[p._v("已完成")]),p._v("——所有审阅者通过接受（accept ）或关注（raise concern）变更的时候。")]),p._v(" "),t("li",[t("strong",[p._v("已关闭")]),p._v("— 由作者关闭，因为不需要或期望所有参与者采取进一步行动。")])]),p._v(" "),t("h2",{attrs:{id:"四-其它实践"}},[p._v("四：其它实践")]),p._v(" "),t("p",[p._v("upource允许自动添加工作流程，例如：可以通过添加对应触发器，自动添加对应的代码审查者")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cac8ccc251fc431c8d9bcf2eaac20b36~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_17-11-09.png"}})]),p._v(" "),t("p",[p._v("也可以通过webhook完成整个自动构建流程和消息通知等")]),p._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09f322c20fb049b3a6e022f956d6f8e1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"Snipaste_2022-05-10_17-11-43.png"}})]),p._v(" "),t("p",[p._v("比如通过upsource webhook 发送对应通知消息，或者触发对应jenkins任务。")])])}),[],!1,null,null,null);t.default=c.exports}}]);