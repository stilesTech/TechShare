(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{464:function(e,a,t){e.exports=t.p+"assets/img/576582101.f066ce27.png"},465:function(e,a,t){e.exports=t.p+"assets/img/1803910136.a75853a0.png"},466:function(e,a,t){e.exports=t.p+"assets/img/4131192128.b92e9dfb.png"},467:function(e,a,t){e.exports=t.p+"assets/img/2144574114.da464976.png"},468:function(e,a,t){e.exports=t.p+"assets/img/4041782526.cc8f8ae3.png"},578:function(e,a,t){"use strict";t.r(a);var n=t(10),s=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"使用kubewatch监控k8s资源变更"}},[e._v("使用kubewatch监控k8s资源变更")]),e._v(" "),a("h2",{attrs:{id:"kubewatch"}},[a("strong",[e._v("kubewatch")])]),e._v(" "),a("p",[e._v("kubewatch是一个用 Go 编写并由 Bitnami Labs 开发的开源 Kubernetes 资源监控观察器。它监视指定的 Kubernetes 资源的更改，再通过handler 将这些变化以通知的形式发布到可用的渠道，例如Slack、Hipchat 等。也可以在应用程序中通过Webhook 的方式来收听kubewatch 发出的状态变化通知。")]),e._v(" "),a("p",[a("img",{attrs:{src:t(464),alt:"../uploads/2021/06/576582101.png"}})]),e._v(" "),a("p",[e._v("您可以通过 kubectl 或使用 helm charts 安装 Kubewatch。它易于理解并且具有非常易于使用的界面。除了 slack，它还支持 HipChat、Mattermost、Flock、webhook 和 SMTP。")]),e._v(" "),a("p",[e._v("根据您要监控的 Kubernetes，您可以在 ConfigMap 文件中为这些资源设置 true 或 false。设置 kubewatch 配置并运行 pod 后，您将开始接收有关 Kubernetes 事件的通知.")]),e._v(" "),a("p",[e._v("基于kubectl的安装方式如下,其它方式可参考 github地址：https://github.com/bitnami-labs/kubewatch具体配置如下,添加资源权限创建文件rbac.yaml,内容如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  labels:\n    kubernetes.io/bootstrapping: rbac-defaults\n  name: system:kubewatch\n  namespace: monitoring\nrules:\n  - apiGroups:\n      - ""\n      - "apps"\n    resources:\n      - endpoints\n      - services\n      - pods\n      - namespaces\n      - replicationcontrollers\n      - configmaps\n      - replicasets\n      - secrets\n      - deployments\n      - daemonsets\n    verbs:\n      - list\n      - watch\n      - get\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "true"\n  labels:\n    kubernetes.io/bootstrapping: rbac-defaults\n  name: system:kubewatch\n  namespace: monitoring\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:kubewatch\nsubjects:\n  - kind: ServiceAccount\n    name: kubewatch\n    namespace: monitoring\n')])])]),a("p",[e._v("执行以下命令创建资源:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f rbac.yaml\n")])])]),a("p",[e._v("部署kubewatch, 创建如下文件kubewatch-deploy.yaml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: kubewatch\n  namespace: monitoring\ndata:\n  .kubewatch.yaml: |\n    handler:\n      webhook:\n        url: "<http://xxx.xxx>"\n        enable: true\n    resource:\n      deployment: true\n      replicationcontroller: true\n      replicaset: false\n      daemonset: true\n      services: true\n      pod: false\n      secret: false\n      configmap: false\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: kubewatch\n  name: kubewatch\n  namespace: monitoring\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: kubewatch\n  template:\n    metadata:\n      labels:\n        app: kubewatch\n    spec:\n      containers:\n        - image: bitnami/kubewatch #using this image, its more stable and active\n          imagePullPolicy: Always\n          name: kubewatch\n          volumeMounts:\n            - name: config-volume\n              # mountPath: /root\n              mountPath: /opt/bitnami/kubewatch/.kubewatch.yaml\n              subPath: .kubewatch.yaml\n      restartPolicy: Always\n      serviceAccount: kubewatch\n      serviceAccountName: kubewatch\n      volumes:\n        - name: config-volume\n          configMap:\n            name: kubewatch\n')])])]),a("p",[a("strong",[e._v("执行以下命令创建资源:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f kubewatch-deploy.yaml\n")])])]),a("p",[e._v("其它安装方式请参考：https://github.com/bitnami-labs/kubewatch")]),e._v(" "),a("h2",{attrs:{id:"基于飞书配置webhook"}},[a("strong",[e._v("基于飞书配置webhook")])]),e._v(" "),a("p",[e._v("地址：")]),e._v(" "),a("p",[e._v("https://www.feishu.cn/hc/zh-CN/articles/360024984973")]),e._v(" "),a("p",[a("img",{attrs:{src:t(465),alt:"../uploads/2021/06/1803910136.png"}})]),e._v(" "),a("p",[a("img",{attrs:{src:t(466),alt:"../uploads/2021/06/4131192128.png"}})]),e._v(" "),a("p",[e._v("配置 webhook。你会获取该机器人的 webhook 地址，格式如下：")]),e._v(" "),a("p",[e._v("https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxxxxxxxxxxx")]),e._v(" "),a("p",[e._v("复制此地址，在相关外部系统中进行配置，以向本群发送消息。请妥善保存好此地址，避免地址泄露后被恶意调用发送垃圾消息。")]),e._v(" "),a("p",[a("img",{attrs:{src:t(467),alt:"../uploads/2021/06/2144574114.png"}})]),e._v(" "),a("ul",[a("li",[e._v("飞书需要使用post方式，真正对接过程中需要用接口中转下真正的请求。")])]),e._v(" "),a("p",[e._v("具体可自行实现。")]),e._v(" "),a("p",[e._v("最后kubernetes资源变更时会收到如下通知,结果如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(468),alt:"../uploads/2021/06/4041782526.png"}})]),e._v(" "),a("h2",{attrs:{id:"webhook对接细节"}},[a("strong",[e._v("webhook对接细节")])]),e._v(" "),a("p",[e._v("kubewatch触发webhook监控后，发送的内容通过body里面的二进制传输，这个比较坑，文档不够齐全，找了半天才发现，具体可查看源码。")]),e._v(" "),a("p",[e._v("body内容解析后格式如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "eventmeta": {\n        "kind": "pod",\n        "name": "monitoring/kubewatch",\n        "namespace": "",\n        "reason": "updated"\n    },\n    "text": "A `pod` in namespace `` has been `updated`:\\\\n`monitoring/kubewatch`",\n    "time": "2021-06-03T05:42:16.7812141Z"\n}\n')])])]),a("p",[e._v("**参考资料：**https://medium.com/@harsh.manvar111/kubernetes-event-notifications-1b2fb12a30ce")])])}),[],!1,null,null,null);a.default=s.exports}}]);