(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{168:function(a,t,s){a.exports=s.p+"assets/img/2446934443.33563c79.png"},169:function(a,t,s){a.exports=s.p+"assets/img/1030161887.5500f94b.png"},170:function(a,t,s){a.exports=s.p+"assets/img/3816535471.c2a9a6bc.png"},171:function(a,t,s){a.exports=s.p+"assets/img/1089567996.07329fdb.png"},287:function(a,t,s){"use strict";s.r(t);var n=s(4),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("实践世界上最好的语言PHP，打包部署到docker。")]),a._v(" "),n("h1",{attrs:{id:"在docker环境下运行php"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在docker环境下运行php"}},[a._v("#")]),a._v(" 在docker环境下运行PHP")]),a._v(" "),n("p",[a._v("Nginx是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。")]),a._v(" "),n("p",[a._v("官网：https://www.nginx.com/")]),a._v(" "),n("p",[a._v('PHP（全称：Hypertext Preprocessor，即: 超文本预处理器"）是一种通用开源脚本语言。')]),a._v(" "),n("p",[a._v("官网：https://www.php.net/")]),a._v(" "),n("p",[n("strong",[a._v("1.部署PHP环境")])]),a._v(" "),n("p",[a._v("1.1:拉取PHP")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("docker pull php:7.3.5-fpm\n")])])]),n("p",[a._v("2.1:创建/etc/nginx/www 文件夹用于挂载PHP工作目录")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mkdir /etc/nginx\nmkdir /etc/nginx/www\n")])])]),n("p",[a._v("3.1:运行PHP容器")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("docker run --name myphp-fpm -v /etc/nginx/www:/www -d php:7.3.5-fpm\n")])])]),n("p",[n("strong",[a._v("2:部署nginx环境")])]),a._v(" "),n("p",[a._v("2.1:拉取nginx镜像")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("docker pull nginx\n")])])]),n("p",[a._v("2.2运行容器")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("docker run -p 80:80 --name nginx -d nginx\n")])])]),n("p",[a._v("2.3:第二步运行的Nginx的配置文件是在容器内部的，不方便修改，所以我们可以先把容器内的配置文件复制到宿主机")]),a._v(" "),n("p",[n("img",{attrs:{src:s(168),alt:"../uploads/2020/10/2446934443.png"}})]),a._v(" "),n("p",[a._v("2.4:复制容器内的配置文件到宿主机，或者仅复制conf.d文件夹内的配置文件，运行时挂载相应文件即可")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("docker cp -a nginx:/etc/nginx/ /etc/nginx/conf\n")])])]),n("p",[a._v("2.5:停止Nginx容器并删除")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("docker stop nginx\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" nginx\n")])])]),n("p",[a._v("2.6:重新运行容器，并挂载我们在第三步复制出来的配置文件目录")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /etc/nginx/logs\ndocker run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 --restart always --link myphp-fpm:php --name nginx -v /etc/nginx/www:/usr/share/nginx/html -v /etc/nginx/conf/:/etc/nginx/ -v /etc/nginx/logs:/var/log/nginx nginx\n")])])]),n("p",[a._v("2.7:添加测试文件")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mkdir vi /etc/nginx/index.html\n内容：ok nginx\n")])])]),n("p",[a._v("访问localhost:80(我是部署在虚拟机，8080是宿主机和docker虚拟机端口80的映射端口)")]),a._v(" "),n("p",[n("img",{attrs:{src:s(169),alt:"../uploads/2020/10/1030161887.png"}})]),a._v(" "),n("p",[a._v("2.8:修改nginx配置")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("vi /etc/nginx/conf/conf.d/default.conf\n")])])]),n("p",[a._v("如下图")]),a._v(" "),n("p",[n("img",{attrs:{src:s(170),alt:"../uploads/2020/10/3816535471.png"}})]),a._v(" "),n("p",[a._v("fastcgi_pass myphp-fpm:9000; #将请求代理到容器myphp-fpm到9000端口")]),a._v(" "),n("h1",{attrs:{id:"这个命令是指定将http代理到哪个fastcgi服务端接口。fastcgi-pass后面是填写fastcgi服务端地址的，这个地址可以是域地址，也可以是uninx-域套接字。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这个命令是指定将http代理到哪个fastcgi服务端接口。fastcgi-pass后面是填写fastcgi服务端地址的，这个地址可以是域地址，也可以是uninx-域套接字。"}},[a._v("#")]),a._v(" "),n("strong",[a._v("这个命令是指定将http代理到哪个fastcgi服务端接口。fastcgi_pass后面是填写fastcgi服务端地址的，这个地址可以是域地址，也可以是Uninx-域套接字。")])]),a._v(" "),n("p",[a._v("fastcgi_param SCRIPT_FILENAME $/www/$fastcgi_script_name;")]),a._v(" "),n("h1",{attrs:{id:"脚本文件请求的路径-www-映射宿主机挂载的-etc-nginx-www目录，这里是个大坑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#脚本文件请求的路径-www-映射宿主机挂载的-etc-nginx-www目录，这里是个大坑"}},[a._v("#")]),a._v(" "),n("strong",[a._v("脚本文件请求的路径 (/www/ 映射宿主机挂载的/etc/nginx/www目录，这里是个大坑)")])]),a._v(" "),n("p",[a._v("2.9:创建index.php文件测试结果")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("vi /etc/nginx/www/index.php\n")])])]),n("p",[a._v("内容如下")]),a._v(" "),n("p",[n("img",{attrs:{src:s(171),alt:"../uploads/2020/10/1089567996.png"}})]),a._v(" "),n("p",[a._v("重启nginx容器使配置生效")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("docker restart nginx\n")])])]),n("p",[a._v("如无意外访问localhost:80/index.php 可看到如下界面")])])}),[],!1,null,null,null);t.default=e.exports}}]);