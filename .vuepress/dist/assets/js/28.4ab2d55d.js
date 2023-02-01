(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{511:function(a,e,t){a.exports=t.p+"assets/img/100498012.9ef78152.jpg"},512:function(a,e,t){a.exports=t.p+"assets/img/2780905707.b60e80d2.jpg"},584:function(a,e,t){"use strict";t.r(e);var s=t(10),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("19年最后一天梳理了下部署.net core 到腾讯云kubernetes集群上面")]),a._v(" "),e("p",[a._v("流程如下：")]),a._v(" "),e("p",[a._v("1:打包镜像(使用Dockerfile)")]),a._v(" "),e("p",[a._v("2:上传镜像到腾讯云私有仓库")]),a._v(" "),e("p",[a._v("3:使用yaml文件创建Deployment,Service使容器run起来")]),a._v(" "),e("p",[a._v("流程很简单，让我们开始吧")]),a._v(" "),e("p",[a._v("1:打包镜像，在项目发布目录下，创建Dockerfile文件，内容如下")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base\n#设定工作目录\nWORKDIR /app\n#在容器中程序使用的端口，一定要和程序启动使用的端口对应上\nEXPOSE 80\n#复制文件到工作目录\nCOPY . .\n\nENTRYPOINT ["dotnet", "Hobby_api.dll"]\n')])])]),e("p",[a._v("使用docker build构建镜像")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker build -t 127.0.0.1:5000/hobby-api:v1.1 .\n")])])]),e("p",[a._v("如无意外，docker images 可查看到镜像")]),a._v(" "),e("p",[a._v("2:创建私有仓库push镜像到腾讯云服务器")]),a._v(" "),e("p",[a._v("要先创建好宿主机/data/registry目录")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir /data/registry\ndocker run -itd  -p  5000:5000 -v /data/registry:/var/lib/registry  docker.io/registry\n")])])]),e("p",[a._v("登录，ip可以相应改成对应ip")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker login 127.0.0.1:5000\n")])])]),e("p",[a._v("首次使用输入登录名和密码(第一次输入对账号和密码会自动生成对应账号)")]),a._v(" "),e("p",[a._v("推送镜像到私有仓库")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker push 127.0.0.1:5000/hobby-api:v1.1\n")])])]),e("p",[a._v("3:创建hobby-api.yaml文件创建Deployment,Service使容器run起来mkdir hobby-api.yaml创建命名空间")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("kubectl create namespace hobby\n")])])]),e("p",[a._v("创建yaml文件apiVersion: apps/v1beta1kind: Deploymentmetadata:name: hobby-apinamespace: hobbyspec:replicas: 1selector:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("matchLabels:\n  name: hobby-api\n")])])]),e("p",[a._v("template:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("metadata:\n  labels:\n    name: hobby-api\nspec:\n  containers:\n  - name: hobby-api\n    image: 127.0.0.1:5000/hobby-api:v1.1\n    ports:\n    - containerPort: 80\n")])])]),e("hr"),a._v(" "),e("p",[a._v("apiVersion: v1kind: Servicemetadata:name: hobby-apinamespace: ho")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("bby\nspec:\n  selector:\n    name: hobby-api\n  type: NodePort\n  ports:\n    - nodePort: 30091\n      port: 80\n      protocol: TCP\n      targetPort: 80\n")])])]),e("p",[a._v("执行yaml")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("kubectl create -f hobby-api.yaml\n")])])]),e("p",[e("img",{attrs:{src:t(511),alt:"../uploads/2020/10/100498012.jpg"}})]),a._v(" "),e("p",[e("img",{attrs:{src:t(512),alt:"../uploads/2020/10/2780905707.jpg"}})]),a._v(" "),e("p",[a._v("总结了下这段时间的研究，为19年拉下序幕，感谢关注@stiles 2019-12-31")])])}),[],!1,null,null,null);e.default=r.exports}}]);