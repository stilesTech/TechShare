import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import { BriefcaseIcon } from '~/assets'
import shzzLogo from '~/assets/company/shzz.jpg'
import hsjLogo from '~/assets/company/hsj.png'
import aggLogo from '~/assets/company/agg.png'
import yoyoLogo from '~/assets/company/yoyo.jpg'

type Resume = {
  company: string
  title: string
  start: string | { label: string; dateTime: number }
  end: string | { label: string; dateTime: number }
  logo: StaticImageData
}
const resume: Resume[] = [
  {
    company: 'YOYO互联',
    title: '技术Leader',
    logo: yoyoLogo,
    start: '2022',
    end: {
      label: '至今',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: '华世界',
    title: '后端开发工程师',
    logo: hsjLogo,
    start: '2022',
    end: '2022',
  },
  {
    company: '上海移卓科技网络有限公司深圳分公司',
    title: '后端开发工程师',
    logo: aggLogo,
    start: '2016',
    end: '2022',
  },
  {
    company: '上海掌甄网络科技有限公司',
    title: '后端开发工程师',
    logo: shzzLogo,
    start: '2015',
    end: '2016',
  },
]

function getRoleDate(date: Resume['start'] | Resume['end'], label = true) {
  if (typeof date === 'string') {
    return date
  }

  if (label) {
    return date.label
  } else {
    return String(date.dateTime)
  }
}

export function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        <span className="ml-2">工作经历</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={role.company}
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">公司</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">职位</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">日期</dt>
              <dd
                className="ml-auto text-xs text-zinc-500/80 dark:text-zinc-400/80"
                aria-label={`${getRoleDate(role.start)} 到 ${getRoleDate(
                  role.end
                )}`}
              >
                <time dateTime={getRoleDate(role.start, false)}>
                  {getRoleDate(role.start)}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={getRoleDate(role.end, false)}>
                  {getRoleDate(role.end)}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}
