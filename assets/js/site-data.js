/**
 * ============================================================================
 * Personal Homepage Configuration (Single Source of Truth)
 * 陈卿雯 (Qingwen Chen) — https://qingwenchen0212.github.io/
 * ============================================================================
 */

window.SITE_DATA = {
  meta: {
    defaultLang: "en",
    title: {
      zh: "陈卿雯 — 灵巧智能品牌负责人 / AI 硬科技公关传播",
      en: "Qingwen Chen — Head of Brand at DexRobot · AI & Deep-Tech PR"
    },
    brand: {
      zh: "陈卿雯",
      en: "QINGWEN CHEN"
    },
    utilityNote: {
      zh: "灵巧智能（DexRobot）品牌负责人 · 中国传媒大学 MBA",
      en: "Head of Brand at DexRobot · MBA, Communication Univ. of China"
    },
    headerCta: {
      zh: "联系合作",
      en: "Get in Touch"
    }
  },

  hero: {
    primaryImage: "assets/images/avatar-lifestyle.jpg",
    primaryAlt: {
      zh: "陈卿雯个人形象照",
      en: "Portrait of Qingwen Chen"
    },
    secondaryImage: "assets/images/gallery/editorial-02.jpg",
    secondaryAlt: {
      zh: "陈卿雯外景光影侧颜",
      en: "Editorial portrait of Qingwen Chen"
    },
    eyebrow: {
      zh: "DEXROBOT · 品牌负责人 · AI / 具身智能公关传播",
      en: "DEXROBOT · HEAD OF BRAND · EMBODIED AI & DEEP-TECH PR"
    },
    headline: {
      zh: "让硬科技被看见，让品牌成为增长引擎",
      en: "DEEP TECH, TOLD BOLDLY."
    },
    subtitle: {
      zh: "陈卿雯（Qingwen Chen）· 灵巧智能品牌负责人，十余年品牌公关与大型项目传播经验，专注 AI 与具身智能硬科技增长。",
      en: "Qingwen Chen · Head of Brand at DexRobot — 10+ years shaping frontier robotics, AI narratives, and flagship national campaigns."
    },
    primaryCta: { zh: "查看代表项目", en: "Selected Projects" },
    secondaryCta: { zh: "个人形象", en: "Visual Portfolio" }
  },

  spotlight: [
    {
      image: "assets/images/gallery/editorial-01.jpg",
      pos: "center 22%",
      eyebrow: { zh: "VISUAL PORTFOLIO · 多元形象", en: "VISUAL PORTFOLIO" },
      title: { zh: "形象棚拍与高质感风格表达", en: "Studio Portraits & Editorial Looks" },
      cta: { zh: "浏览写真集", en: "Explore Portraits" },
      galleryFilter: "portrait"
    },
    {
      image: "assets/images/gallery/live-02.jpg",
      pos: "center 18%",
      eyebrow: { zh: "AI LIVE HOSTING · 532H · 58.2% 转化", en: "AI LIVE HOSTING · 532 HRS · 58.2% CONV." },
      title: { zh: "AI 产品官方直播与场景化叙事", en: "Official AI & Brand Live Commerce" },
      cta: { zh: "查看直播实录", en: "View Live Showcase" },
      galleryFilter: "live"
    }
  ],

  nav: [
    { id: "about", label: { zh: "关于我", en: "About" } },
    { id: "projects", label: { zh: "代表项目", en: "Projects" } },
    { id: "capabilities", label: { zh: "核心能力", en: "Capabilities" } },
    { id: "experience", label: { zh: "工作与教育", en: "Experience" } },
    { id: "gallery", label: { zh: "个人形象", en: "Gallery" } },
    { id: "contact", label: { zh: "联系方式", en: "Contact" } }
  ],

  profile: {
    // Switch to "assets/images/avatar.jpg" if you prefer the studio headshot
    avatar: "assets/images/avatar-lifestyle.jpg",
    avatarAlt: {
      zh: "陈卿雯个人头像",
      en: "Portrait of Qingwen Chen"
    },
    name: {
      zh: "陈卿雯",
      en: "Qingwen Chen"
    },
    subname: {
      zh: "Qingwen Chen",
      en: "陈卿雯"
    },
    bio: {
      zh: "灵巧智能品牌负责人 · AI / 具身智能硬科技公关传播",
      en: "Head of Brand, DexRobot · Embodied AI & Deep-Tech PR"
    },
    links: [
      {
        icon: "location",
        label: { zh: "北京 · 中国", en: "Beijing, China" },
        url: ""
      },
      {
        icon: "briefcase",
        label: { zh: "灵巧智能 · 品牌负责人", en: "DexRobot · Head of Brand" },
        url: "#experience"
      },
      {
        icon: "education",
        label: { zh: "中国传媒大学 · MBA", en: "CUC · MBA" },
        url: "#education-group"
      },
      {
        icon: "email",
        label: { zh: "邮箱与留言", en: "Email & Message" },
        url: "#contact"
      }
    ]
  },

  about: {
    heading: { zh: "关于我", en: "About Me" },
    sub: { zh: "PROFILE", en: "PROFILE" },
    paragraphs: {
      zh: [
        "现任<strong>灵巧智能（DexRobot）品牌负责人</strong>，深耕品牌公关与整合营销十余年，横跨具身智能初创企业、头部互联网与主流媒资平台。聚焦 <strong>AI 与机器人硬科技</strong>，打通技术叙事、央媒与行业传播、大型活动及商业化增长闭环。"
      ],
      en: [
        "<strong>Head of Brand at DexRobot</strong> with 10+ years spanning embodied AI startups, major tech platforms, and tier-1 media. Focused on turning robotics and AI breakthroughs into high-impact media narratives, flagship activations, and measurable commercial growth."
      ]
    },
    metrics: [
      {
        value: { zh: "10 年+", en: "10+ Yrs" },
        counter: {
          zh: { end: 10, decimals: 0, suffix: " 年+" },
          en: { end: 10, decimals: 0, suffix: "+ Yrs" }
        },
        label: { zh: "品牌公关与整合营销实战", en: "Brand PR & Integrated Marketing" }
      },
      {
        value: { zh: "20.83 亿+", en: "2.08B+" },
        counter: {
          zh: { end: 20.83, decimals: 2, suffix: " 亿+" },
          en: { end: 2.08, decimals: 2, suffix: "B+" }
        },
        label: { zh: "标杆项目全网综合曝光", en: "Peak Flagship Campaign Impressions" }
      },
      {
        value: { zh: "532 小时", en: "532 hrs" },
        counter: {
          zh: { end: 532, decimals: 0, suffix: " 小时" },
          en: { end: 532, decimals: 0, suffix: " hrs" }
        },
        label: { zh: "飞书/豆包官方直播 · 转化率 58.2%", en: "Feishu & Doubao Live · 58.2% Avg. Conv." }
      },
      {
        value: { zh: "1000 万+", en: "10M+" },
        counter: {
          zh: { end: 1000, decimals: 0, suffix: " 万+" },
          en: { end: 10, decimals: 0, suffix: "M+" }
        },
        label: { zh: "具身智能 0→1 曝光 · 165+ 媒体", en: "Embodied AI 0→1 Reach · 165+ Media" }
      }
    ],
    strengthsTitle: { zh: "核心能力", en: "Core Capabilities" },
    strengths: [
      {
        index: "01",
        title: { zh: "AI 硬科技产品叙事", en: "Deep-Tech & AI Narrative" },
        desc: {
          zh: "将机器人、数据采集与世界模型等前沿技术转译为清晰的媒体表达、产品发布节奏与 ToB 销售物料。",
          en: "Turning robotics, data collection, and world-model breakthroughs into clear media narratives, launch cadences, and B2B sales kits."
        }
      },
      {
        index: "02",
        title: { zh: "0 到 1 品牌市场体系", en: "0-to-1 Brand & Marketing" },
        desc: {
          zh: "统筹品牌定位、产品宣发、公关传播、展会活动与社媒矩阵，搭建可追踪、可复用的增长闭环。",
          en: "End-to-end leadership across brand positioning, launches, PR, expos, and social channels—built for repeatable growth."
        }
      },
      {
        index: "03",
        title: { zh: "央媒与行业资源协同", en: "Tier-1 Media & Ecosystem" },
        desc: {
          zh: "深厚积累央媒、主流行业媒体与垂直 KOL 网络，擅长顶级行业大会及政商文旅标杆场景联动。",
          en: "Deep partnerships across central media, industry press, and vertical AI KOLs for flagship summits and institutional showcases."
        }
      },
      {
        index: "04",
        title: { zh: "大型活动 PM 与直播转化", en: "Flagship PM & Live Conversion" },
        desc: {
          zh: "跨技术、内容与销售高效协同落地大型峰会及官方直播，兼顾品牌声量、现场体验与商业线索沉淀。",
          en: "Cross-functional execution across summits and official live commerce—aligning brand reach, live experience, and pipeline conversion."
        }
      }
    ]
  },

  projects: {
    heading: { zh: "代表项目", en: "Selected Projects" },
    sub: { zh: "CASE STUDIES", en: "CASE STUDIES" },
    filters: [
      { id: "all", label: { zh: "全部项目", en: "All" } },
      { id: "ai", label: { zh: "具身智能 & AI", en: "Embodied AI" } },
      { id: "media", label: { zh: "央媒 & 大型宣发", en: "Flagship PR & Media" } }
    ],
    items: [
      {
        category: "ai",
        badge: { zh: "具身智能媒体", en: "Embodied AI Media" },
        title: {
          zh: "Xbotics 媒体公关及《具身朋友圈》主创",
          en: "Xbotics Media PR & Co-Creator of Embodied Circle"
        },
        role: {
          zh: "公关负责人 / 官方主持人",
          en: "PR Lead / Official Host"
        },
        summary: {
          zh: "负责“Xbotics 具身智能实验室”账号媒体公关，对接超能动力、光轮智能、加速进化、生数科技、原力无限等具身智能品牌及 ATEC 赛事宣发，并联合主创及主持行业对谈栏目《具身朋友圈》。",
          en: "Led media PR for Xbotics Embodied AI Lab, partnering with leading robotics and AI firms (including Lightwheel, Booster Robotics, Shengshu, and more) alongside ATEC competition coverage; co-created and hosted the flagship interview series."
        },
        kpis: {
          zh: ["微信均阅 4000+", "视频号播放 1.2 万+", "点赞转发 500+", "首期节目播放 1 万+ / 互动 664+"],
          en: ["4,000+ Avg. WeChat Reads", "12K+ Video Views", "500+ Shares & Likes", "10K+ Premiere Views"]
        }
      },
      {
        category: "ai",
        badge: { zh: "行业大会 PM", en: "AI Summit PM" },
        title: {
          zh: "2026 腾讯云 AI 大会 Agent Infra 专场执行机器人",
          en: "2026 Tencent Cloud AI Summit · Robot Host & PR"
        },
        role: {
          zh: "项目 PM / 媒体公关",
          en: "Project Manager / Media PR"
        },
        summary: {
          zh: "统筹机器人主持人全流程与现场交互场景，承担创始人 & CEO 演讲内容打磨、合伙人受访 PR 筹备、核心媒体对接及展台宣发，实现硬科技演示与高管传播同步落地。",
          en: "Directed the end-to-end workflow and live interaction script for an embodied robot host, crafted the Founder & CEO keynote and partner press prep, and managed booth PR and media interviews."
        },
        kpis: {
          zh: ["零失误落地", "现场满意度 95%", "行业媒体 20+ 篇报道", "展台参观超千人次"],
          en: ["Zero-Error Live Execution", "95% On-Site Satisfaction", "20+ Media Articles", "1,000+ Booth Visitors"]
        }
      },
      {
        category: "ai",
        badge: { zh: "央媒标杆", en: "CCTV Showcase" },
        title: {
          zh: "总台《“冠”察两会》栏目机器人观察员项目",
          en: "CMG / CCTV.com Two Sessions Robot Observer"
        },
        role: {
          zh: "项目 PM",
          en: "Project Manager"
        },
        summary: {
          zh: "牵头对接中央广播电视总台央视网栏目，联合智行造物打造具身智能人机协作报道案例，统筹技术、内容、媒体三方资源完成全周期播出保障，获定为科技赋能主流传播标杆案例。",
          en: "Spearheaded collaboration with China Media Group (CCTV.com) to produce a human-robot collaborative reporting feature for the National Two Sessions, orchestrating engineering, editorial, and broadcast teams end to end."
        },
        kpis: {
          zh: ["央视网重点栏目合作", "全网传播量 10W+", "科技赋能主流传播标杆案例"],
          en: ["CCTV.com Featured Program", "100K+ Cross-Platform Reach", "Benchmark Tech-Media Case"]
        }
      },
      {
        category: "media",
        badge: { zh: "现象级传播", en: "National Campaign" },
        title: {
          zh: "首届全民阅读大会数字阅读年会宣发",
          en: "1st National Reading Conference · Digital Reading PR"
        },
        role: {
          zh: "公关经理",
          en: "PR Manager"
        },
        summary: {
          zh: "负责整体公关传播方案设计与全链路落地，统筹 6+2 公关团队与 500+ 合作媒体及 KOL，实现国家级主流媒体与全网社交热搜双爆发。",
          en: "Architected and executed the full PR strategy across a 6+2 core team and 500+ media & KOL partners, achieving nationwide broadcast headlines and sustained top trending visibility."
        },
        kpis: {
          zh: ["发稿 5787+ 篇次", "全网曝光 20.83 亿+", "端内导流 6000 万+", "《新闻联播》头条 2 分 30 秒", "人民日报微博 0 号热搜 2 天"],
          en: ["5,787+ Press Releases", "2.08B+ Impressions", "60M+ In-App Traffic", "2m30s Xinwen Lianbo Feature", "#0 Trending (2 Days)"]
        }
      },
      {
        category: "media",
        badge: { zh: "政务新媒体", en: "Public Media" },
        title: {
          zh: "共青团中央宣传部传播处政务新媒体账号运营",
          en: "CCYL Central Committee Official New Media Ops"
        },
        role: {
          zh: "新媒体运营",
          en: "New Media Operations"
        },
        summary: {
          zh: "入选“共青团新媒体工作骨干轮训计划”，深度参与“共青团中央”官方微信与微博内容策划及日常运营，打造多篇现象级爆款文章与亿级阅读话题。",
          en: "Selected for the National New Media Backbone Program to operate the official WeChat and Weibo accounts of the CYLC Central Committee, producing viral editorial hits and billion-view campaigns."
        },
        kpis: {
          zh: ["微信 10W+ 爆款 17 篇+", "微博话题累计阅读 13.3 亿+", "国家网信办“百幅精品网络正能量图片”"],
          en: ["17+ Viral 100K+ WeChat Posts", "1.33B+ Weibo Topic Views", "CAC National Positive Energy Award"]
        }
      }
    ]
  },

  experience: {
    heading: { zh: "工作与教育经历", en: "Experience & Education" },
    sub: { zh: "CAREER", en: "CAREER" },
    groups: [
      {
        id: "work-group",
        title: { zh: "工作经历", en: "Work Experience" },
        items: [
          {
            logo: "assets/images/logo-dexrobot.png",
            logoClass: "badge",
            active: true,
            org: { zh: "灵巧智能（DexRobot）", en: "DexRobot (Lingqiao Intelligence)" },
            orgTag: { zh: "现任", en: "Current" },
            period: { zh: "2026.09 — 至今", en: "Sep 2026 — Present" },
            role: { zh: "品牌负责人", en: "Head of Brand" },
            bullets: {
              zh: [
                "统筹具身智能与智能灵巧手方向的品牌战略定位、硬科技产品叙事、媒体公关与行业传播体系建设。"
              ],
              en: [
                "Leading brand strategy, deep-tech product narrative, media PR, and industry communications in embodied AI and dexterous robotics."
              ]
            }
          },
          {
            logo: "assets/images/logo-livsyn.png",
            logoClass: "wordmark",
            active: false,
            org: { zh: "北京灵生科技有限公司", en: "Beijing LivSyn Robotics Co., Ltd." },
            orgTag: null,
            period: { zh: "2026.01 — 2026.06", en: "Jan 2026 — Jun 2026" },
            role: { zh: "品牌市场负责人", en: "Head of Brand & Marketing" },
            bullets: {
              zh: [
                "从 0 到 1 搭建品牌市场与 VI 体系；提出“人本采集 + 世界模型合成数据”核心定位，主导 LivUMI、LDP、Liv-Data Market 及 L0/L1 机器人官宣，带动销售转化效率提升 15%。",
                "统筹 13 项标杆品牌活动及 FAIR Plus 等 8 场行业展会，单场吸引近百家高意向客户咨询。",
                "拓展 165+ 主流媒体与 30+ 具身垂类大号，全网曝光千万级（单条达人视频最高 16.3 万播放）；运营 6 大社媒矩阵，产出 297+ 原创内容，沉淀上千条高意向销售线索。"
              ],
              en: [
                "Built brand, VI, and marketing from 0 to 1; coined “Human-Centric Data Collection + World-Model Synthetic Data,” leading official launches for LivUMI, LDP, Liv-Data Market, and L0/L1 robots (+15% sales conversion efficiency).",
                "Directed 13 flagship brand activations and 8 industry expos including FAIR Plus, generating ~100 high-intent B2B inquiries per event.",
                "Built a 165+ media and 30+ robotics KOL network (10M+ total reach, 163K peak KOL video); ran 6 social channels with 297+ original pieces and 1,000+ high-intent leads."
              ]
            }
          },
          {
            logo: "assets/images/logo-feishu.png",
            logoClass: "",
            active: false,
            org: { zh: "飞书 / 豆包抖音官方账号", en: "Feishu & Doubao Official Douyin Accounts" },
            orgTag: null,
            period: { zh: "2023.03 — 2025.12", en: "Mar 2023 — Dec 2025" },
            role: { zh: "AI 推荐官", en: "Official AI Product Host & Evangelist" },
            bullets: {
              zh: [
                "担任“豆包智能 AI”“飞书”“飞书生意经”抖音官方账号直播 AI 推荐官，累计完成官方直播 532 小时，单场最高观 1.6 万+，产品平均转化效率 58.2%。"
              ],
              en: [
                "Served as official live-stream AI host across Doubao AI, Feishu, and Feishu Business Douyin channels—delivering 532 live hours, 16K+ peak single-session views, and 58.2% average conversion efficiency."
              ]
            }
          },
          {
            logo: "assets/images/logo-migu.png",
            logoClass: "wordmark",
            active: false,
            org: { zh: "中国移动咪咕数字传媒有限公司", en: "China Mobile Migu Digital Media Co., Ltd." },
            orgTag: null,
            period: { zh: "2018.10 — 2023.02", en: "Oct 2018 — Feb 2023" },
            role: { zh: "资深品牌公关经理", en: "Senior Brand & PR Manager" },
            bullets: {
              zh: [
                "主导行业大会、冬奥 / 世界杯体育赛事与 300+ 图书 IP、20+ 短剧全案公关；拓展维护 236+ 核心媒体与 568+ 发稿渠道，联动新华社、人民日报打造多篇百万级专题。",
                "搭建 7×24 小时舆情预警与危机公关响应机制；连续 5 年统筹数字阅读大会峰会，操盘百场作者见面会，单场最高触达 2 万人次。"
              ],
              en: [
                "Led full-campaign PR across national summits, Winter Olympics / World Cup activations, 300+ book IPs, and 20+ short dramas; managed 236+ core media and 568+ outlets including Xinhua and People's Daily.",
                "Built 24/7 crisis PR and monitoring protocols; directed 5 consecutive Digital Reading Summits and 100+ author meetups reaching up to 20,000 attendees per event."
              ]
            }
          },
          {
            logo: "assets/images/logo-huace.png",
            logoClass: "badge",
            active: false,
            org: { zh: "浙江华策影视股份有限公司", en: "Zhejiang Huace Film & TV Co., Ltd." },
            orgTag: null,
            period: { zh: "2016.01 — 2018.10", en: "Jan 2016 — Oct 2018" },
            role: { zh: "品牌营销经理", en: "Brand Marketing Manager" },
            bullets: {
              zh: [
                "主导香港国际电视节、MIPCHINA、上海电视节等重点节展（累计覆盖 10 万人次+），负责《致我们单纯的小美好》《完美关系》等热播剧宣发及集团品牌 IP 升级。"
              ],
              en: [
                "Directed flagship showcases at FILMART Hong Kong, MIPCHINA, and Shanghai TV Festival (100K+ total reach); led publicity for hit dramas and corporate brand IP upgrades."
              ]
            }
          },
          {
            logo: "assets/images/logo-simei.png",
            logoClass: "badge",
            active: false,
            org: { zh: "思美传媒股份有限公司", en: "Simei Media Co., Ltd." },
            orgTag: null,
            period: { zh: "2015.04 — 2015.10", en: "Apr 2015 — Oct 2015" },
            role: { zh: "广告文案策划", en: "Advertising Copywriter & Planner" },
            bullets: {
              zh: [
                "负责多家知名消费品牌互联网整合传播与媒介推广方案；策划德意电器“今日头条”信息流 H5 创意，单日访问量突破 1000 万+。"
              ],
              en: [
                "Planned integrated digital campaigns for major consumer brands; created a Toutiao feed H5 campaign exceeding 10M+ single-day visits."
              ]
            }
          }
        ]
      },
      {
        id: "education-group",
        title: { zh: "教育背景", en: "Education" },
        items: [
          {
            logo: "assets/images/logo-cuc.png",
            logoClass: "round",
            active: false,
            org: { zh: "中国传媒大学", en: "Communication University of China (CUC)" },
            orgTag: null,
            period: { zh: "2024.09 — 2026.06", en: "Sep 2024 — Jun 2026" },
            role: { zh: "工商管理硕士（MBA）", en: "Master of Business Administration (MBA)" },
            bullets: { zh: [], en: [] }
          },
          {
            logo: "assets/images/logo-cuz.png",
            logoClass: "wordmark",
            active: false,
            org: { zh: "浙江传媒学院", en: "Communication University of Zhejiang (CUZ)" },
            orgTag: null,
            period: { zh: "2011.09 — 2015.06", en: "Sep 2011 — Jun 2015" },
            role: { zh: "文化产业管理学士", en: "B.M. in Cultural Industry Management" },
            bullets: { zh: [], en: [] }
          }
        ]
      }
    ]
  },

  capabilities: {
    heading: { zh: "核心能力", en: "Core Capabilities" },
    sub: { zh: "EXPERTISE", en: "EXPERTISE" }
  },

  gallery: {
    heading: { zh: "个人形象", en: "Personal Image" },
    sub: { zh: "PORTFOLIO", en: "PORTFOLIO" },
    intro: {
      zh: "涵盖形象棚拍、多元风格写真以及 AI 产品与品牌官方直播出镜实录，点击任意照片可查看大图。",
      en: "Selected studio portraits, editorial photography, and official AI & brand live-hosting appearances. Click any photo to view full size."
    },
    filters: [
      { id: "featured", label: { zh: "精选形象", en: "Featured" } },
      { id: "portrait", label: { zh: "写真与棚拍", en: "Portraits & Editorial" } },
      { id: "live", label: { zh: "AI 与品牌直播", en: "AI & Brand Live" } },
      { id: "all", label: { zh: "全部", en: "All" } }
    ],
    items: [
      {
        src: "assets/images/gallery/studio-01.jpg",
        category: "portrait",
        featured: true,
        pos: "center 20%",
        caption: { zh: "极简形象棚拍", en: "Minimalist Studio Portrait" }
      },
      {
        src: "assets/images/gallery/editorial-01.jpg",
        category: "portrait",
        featured: true,
        pos: "center 24%",
        caption: { zh: "法式花艺质感写真", en: "Floral Tea House Editorial" }
      },
      {
        src: "assets/images/gallery/editorial-02.jpg",
        category: "portrait",
        featured: true,
        pos: "center 22%",
        caption: { zh: "湖畔光影侧颜", en: "Lakeside Natural Light Profile" }
      },
      {
        src: "assets/images/gallery/editorial-03.jpg",
        category: "portrait",
        featured: true,
        pos: "center 28%",
        caption: { zh: "建筑空间极简外拍", en: "Architectural Minimalist Shoot" }
      },
      {
        src: "assets/images/gallery/editorial-05.jpg",
        category: "portrait",
        featured: true,
        pos: "center 18%",
        caption: { zh: "非遗簪花国风造型", en: "Traditional Zanhua Floral Look" }
      },
      {
        src: "assets/images/gallery/editorial-04.jpg",
        category: "portrait",
        featured: true,
        pos: "center 30%",
        caption: { zh: "民族风庭院光影", en: "Traditional Courtyard Portrait" }
      },
      {
        src: "assets/images/gallery/editorial-08.jpg",
        category: "portrait",
        featured: true,
        pos: "center 24%",
        caption: { zh: "校园活力运动风", en: "Campus Sporty Editorial" }
      },
      {
        src: "assets/images/gallery/live-01.jpg",
        category: "live",
        featured: true,
        pos: "center top",
        caption: { zh: "豆包 AI 官方直播讲解", en: "Doubao AI Official Live Hosting" }
      },
      {
        src: "assets/images/gallery/live-02.jpg",
        category: "live",
        featured: true,
        pos: "center top",
        caption: { zh: "官方工具与商家专场直播", en: "Official Platform & SaaS Live Host" }
      },
      {
        src: "assets/images/gallery/studio-02.jpg",
        category: "portrait",
        featured: false,
        pos: "center 20%",
        caption: { zh: "自然光棚拍形象照", en: "Soft Natural-Light Studio Portrait" }
      },
      {
        src: "assets/images/gallery/editorial-06.jpg",
        category: "portrait",
        featured: false,
        pos: "center 20%",
        caption: { zh: "国风簪花特写", en: "Heritage Zanhua Close-Up" }
      },
      {
        src: "assets/images/gallery/editorial-07.jpg",
        category: "portrait",
        featured: false,
        pos: "center 22%",
        caption: { zh: "传统庭院全景造型", en: "Courtyard Full-Length Look" }
      },
      {
        src: "assets/images/gallery/editorial-09.jpg",
        category: "portrait",
        featured: false,
        pos: "center 18%",
        caption: { zh: "青春运动系外拍", en: "Athletic Style Shoot" }
      },
      {
        src: "assets/images/gallery/live-03.jpg",
        category: "live",
        featured: false,
        pos: "center top",
        caption: { zh: "AI 产品功能实景演示", en: "AI Product Live Walkthrough" }
      },
      {
        src: "assets/images/gallery/live-04.jpg",
        category: "live",
        featured: false,
        pos: "center 18%",
        caption: { zh: "轻熟通勤品牌直播", en: "Smart-Casual Brand Live Hosting" }
      },
      {
        src: "assets/images/gallery/live-05.jpg",
        category: "live",
        featured: false,
        pos: "center 18%",
        caption: { zh: "法式穿搭专场直播", en: "Chic Fashion Live Showcase" }
      },
      {
        src: "assets/images/gallery/live-06.jpg",
        category: "live",
        featured: false,
        pos: "center 18%",
        caption: { zh: "设计师品牌专场出镜", en: "Designer Apparel Live Showcase" }
      },
      {
        src: "assets/images/gallery/live-07.jpg",
        category: "live",
        featured: false,
        pos: "center 18%",
        caption: { zh: "礼服与穿搭直播讲解", en: "Fashion & Dress Live Hosting" }
      },
      {
        src: "assets/images/gallery/live-08.jpg",
        category: "live",
        featured: false,
        pos: "center 18%",
        caption: { zh: "秋冬时尚单品直播", en: "Autumn/Winter Apparel Live" }
      },
      {
        src: "assets/images/gallery/live-09.jpg",
        category: "live",
        featured: false,
        pos: "center 18%",
        caption: { zh: "运动垂类品牌直播", en: "Sportswear Brand Live Hosting" }
      }
    ]
  },

  contact: {
    heading: { zh: "联系方式", en: "Contact" },
    sub: { zh: "GET IN TOUCH", en: "GET IN TOUCH" },
    intro: {
      zh: "欢迎就 AI / 具身智能品牌市场合作、媒体公关联动、行业活动主持或职业交流与我联系。",
      en: "Always glad to connect regarding AI & embodied robotics brand partnerships, media PR, event hosting, or career opportunities."
    },
    emailUser: "chenqingwen0212",
    emailDomain: "163.com",
    formspreeEndpoint: "",
    ui: {
      showEmail: { zh: "显示邮箱", en: "Show Email" },
      hideEmail: { zh: "隐藏邮箱", en: "Hide Email" },
      copy: { zh: "复制", en: "Copy" },
      copied: { zh: "已复制", en: "Copied!" },
      leaveMessage: { zh: "在线留言", en: "Leave a Message" },
      closeMessage: { zh: "收起表单", en: "Close Form" },
      nameLabel: { zh: "称呼", en: "Name" },
      nameDefault: { zh: "访客", en: "Visitor" },
      emailLabel: { zh: "联系邮箱（选填）", en: "Email (optional)" },
      emailPlaceholder: { zh: "you@example.com", en: "you@example.com" },
      messageLabel: { zh: "留言内容", en: "Message" },
      messagePlaceholder: { zh: "请写下您的合作意向或交流内容...", en: "Write your message here..." },
      sendButton: { zh: "发送留言", en: "Send Message" },
      sending: { zh: "发送中...", en: "Sending..." },
      sentSuccess: { zh: "留言已发送，感谢联系！", en: "Message sent. Thank you for reaching out!" },
      sentError: { zh: "发送失败，请重试或直接发送邮件。", en: "Submission failed. Please try again or email directly." },
      emptyError: { zh: "请先输入留言内容。", en: "Please enter a message before sending." },
      notConfigured: {
        zh: "在线留言接口尚未配置，请先直接通过上方邮箱联系（可在 site-data.js 配置 formspreeEndpoint 启用）。",
        en: "Formspree endpoint is not configured yet. Please email directly or set contact.formspreeEndpoint in assets/js/site-data.js."
      }
    }
  },

  footer: {
    zh: "© 2026 陈卿雯 · 灵巧智能（DexRobot）品牌负责人 · 中国传媒大学 MBA",
    en: "© 2026 Qingwen Chen · Head of Brand at DexRobot · MBA, Communication Univ. of China"
  }
};
