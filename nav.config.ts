import { IConfig } from './src/types'

const c: IConfig = {
  // Deployment language - 部署语言
  // zh-CN | en
  language: 'zh-CN',

  // [Mondatory], Please replace following Github url with your own Github address which you forked in.
  // [必填], 请填写您的仓库地址
  gitRepoUrl: 'https://github.com/webshijie/nav',

  // Deployment branch name
  // 部署分支
  branch: 'main',

  // Page Loading: loading1 | loading2 | loading3 | random
  // If you have a good-looking Loading, please contact us!
  // 页面Loading: loading1 | loading2 | loading3 | random
  // 如果您有好看的加载Loading请联系我们！
  loading: 'random', // 随机加载

  // Whether the route is in Hash mode, if it is deployed on github pages, it must be set to true
  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,

  // Whether to show the Github icon in the upper right corner
  // 是否显示右上角的 Github 图标
  showGithub: false,

  // Your website address is good for SEO
  // 您的网站地址，有利于SEO
  homeUrl: 'https://wweebb.cn',

  // Site title
  // 网站标题
  title: 'WEB世界 - 发现你的世界',

  // Site description
  // 网站描述
  description: 'WEB世界 - 发现你的世界',

  // Site keywords
  // 网站关键字
  keywords: '导航主页,前端资源,社区站点,设计师,实用工具,学习资源,运营,网络安全,WEB世界',

  // Default theme: Light | Sim | Side | App | Shortcut
  // 默认主题: Light | Sim | Side | App | Shortcut
  theme: 'Side',

  // The content at the bottom of the website, copyright information, record number, can be HTML
  // 网站底部内容, 版权信息、备案号, 可以是 HTML
  footerContent: `
    <div style="font-weight: bold;">共收录\${total}个网站</div>
    <div>Copyright © 2021-2022 WEB世界, All Rights Reserved</div>
  `,

  // Alibaba Vector Gallery https://www.iconfont.cn/
  // Used in side theme level 1 and level 2 menu icon display
  // 阿里巴巴矢量图库 https://www.iconfont.cn/
  // 用在 Side 主题一级、二级菜单图标展示
  iconfontUrl: '//at.alicdn.com/t/font_2522843_wl70o31sy6.js',

  // Baidu Statistics Address
  // 百度统计地址
  // https://tongji.baidu.com/web/welcome/login
  baiduStatisticsUrl: 'https://hm.baidu.com/hm.js?660a2c2f9aaa4b882e8c6ed3c3b29285',

  // CNZZ Statistics address
  // CNZZ 统计地址
  // https://www.cnzz.com/o_index.php
  cnzzStatisticsUrl: '',

  // Sim Theme configuration
  // Sim 主题配置
  simThemeConfig: {
    // Poster illustration - 海报图
    posterImageUrls: [
      '#'
    ],
    description: 'WEB世界收录多达 <b>${total}</b> 个优质网站， 助您工作、学习和生活'
  }
}

export default c
