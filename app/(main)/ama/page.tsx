import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'
import { SocialLink } from '~/components/links/SocialLink'
import { PeekabooLink } from '~/components/links/PeekabooLink'

const title = 'AMA 一对一咨询'
const description =
  'Stiles 提供一对一的咨询服务（Ask Me Anything）。我有服务端开发、全栈开发、大规模分布式集群实践建议、处理过千万级用户和上亿级数据存储解决方案，可以为你解答相关的问题。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>咨询内容</h2>
        <p>我可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b>后端/全栈开发</b>
            ：工作难找，或是寻求职场建议？想提升自己的工程师水平？
            Java vs Net？
          </li>
          <li>
            <b>开发瓶颈/架构难题</b>：不知道如何解决棘手问题？想提升自己的开发水平？
          </li>
          {/* <li>
            <b>创业经验</b>
            ：我是
            <RichLink href="https://zolplay.com" target="_blank">
              佐玩
            </RichLink>
            的创始人，现在带领着团队帮助游戏开发者打造协同平台。
          </li> */}
          {/* <li>
            <b>英语技能</b>：英语能力不足，想提高自己的英语水平？想跟 Stiles
            一样可以{' '}
            <RichLink
              href="https://y.qq.com/n/ryqq/songDetail/003c0O9B3firAU"
              favicon={false}
              target="_blank"
            >
              英文说唱
            </RichLink>
            ？
          </li> */}
          <li>
            <b>其他</b>
            ：我就职于深圳一家互联网企业，热爱技术喜欢研究各种“疑难杂症”，代码洁癖症，这是个互联网蓬勃发展的年度，短短几十年就发展到如今的高度，为时代的见证者和亲历者。
          </li>
        </ul>
        <p>
          座右铭：stay hungry stay foolish
        </p>

        <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥150 - 30分钟</strong>
          </li>
          <li>
            <strong>¥300 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">支付宝二维码</span>
          </span>
        </p>
        <p>
          <div>
          一旦你完成支付，通过电子邮箱：{''}
          <PeekabooLink
            href="mailto:stilesting@gmail.com"
            aria-label="我的邮箱"
            platform="mail">stilesting@gmail.com</PeekabooLink>
            来跟我预约一个合适你的时间。
        </div>
        </p>
        {/* <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p> */}
      </article>
    </Container>
  )
}
