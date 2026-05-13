/**
 * ASEAN DIGITAL POWER WATCH — DATA FILE
 * ======================================
 * Edit this file to update content across all pages.
 * BLOCS: "us" = US/Western bloc  |  "cn" = Chinese bloc  |  "both" = both
 * URGENCY: "critical" | "high" | "medium"
 * LEAN: "us" = US-aligned  |  "cn" = China-aligned  |  "hedge" = hedging
 */

const SITE = {
  title: "Between Two Stacks",
  subtitle: "Mapping US and Chinese tech influence across Southeast Asia",
  description: "A research and advocacy tool for digital rights researchers, policy makers, and activists tracking how US and Chinese technology blocs are shaping governance, surveillance, data, and society across ASEAN.",
  lastUpdated: "May 2026",
  version: "1.0 (prototype)"
};

const DOMAINS = [
  {
    id:"surveillance", num:"01", title:"Surveillance Infrastructure", shortTitle:"Surveillance",
    summary:"How US and Chinese technology companies supply surveillance systems to ASEAN governments — and how those systems are used against activists, journalists, minorities, and political opposition.",
    urgency:"critical", tags:["both"],
    us_bloc:{
      heading:"US bloc: Intelligence-grade surveillance via defence channels",
      body:[
        "US and Israeli vendors supply signals intelligence, communications interception, and mobile device extraction systems to ASEAN security agencies — typically through defence and intelligence channels that are classified and audited by no independent body. NSO Group's Pegasus spyware has been forensically documented in Thailand, Indonesia, and the Philippines by Citizen Lab.",
        "Palantir's Gotham platform is expanding into ASEAN defence and interior ministries, giving a single US company the ability to integrate and query data across entire government bureaucracies. US company Verint supplies lawful interception systems to telecoms regulators across the region. The 'democratic ally' framing obscures the fact that US vendors' ASEAN customers are frequently authoritarian or semi-authoritarian governments.",
        "The Five Eyes intelligence architecture creates data-sharing arrangements that extend US surveillance reach into the region. When US-allied agencies conduct offensive cyber operations against ASEAN governments, civil society organisations on the same infrastructure face collateral exposure."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: Mass-market surveillance embedded in urban infrastructure",
      body:[
        "Hikvision, Dahua, Huawei SafeCity, SenseTime, and CloudWalk supply the bulk of smart city surveillance infrastructure across Cambodia, Vietnam, Myanmar, Thailand, Malaysia, and increasingly Indonesia. These systems — CCTV networks, facial recognition, crowd analytics, centralised monitoring — are bundled with Chinese technical standards and maintenance contracts.",
        "China's National Intelligence Law (2017) compels all Chinese entities to cooperate with state intelligence requests, globally. This creates a structural basis for Chinese state access to data collected by Chinese surveillance systems operating in ASEAN — regardless of what the vendor's contract says.",
        "The governance training that accompanies Chinese surveillance deployments often comes directly from Chinese public security institutions, transmitting norms about acceptable population monitoring alongside technical capability."
      ]
    },
    keyIssues:[
      {icon:"🔍",title:"Supply chain opacity",desc:"Procurement pathways, financing arrangements, and technical capabilities of surveillance systems are poorly documented across most ASEAN states, particularly Cambodia, Laos, Myanmar, and Pacific Island states."},
      {icon:"⚖️",title:"Export control gaps",desc:"US Entity List controls on Hikvision and Dahua are applied inconsistently and have limited uptake among non-US-allied nations. No equivalent exists for US or Israeli spyware vendors."},
      {icon:"🎯",title:"Targeting of civil society",desc:"Documented cases of surveillance technology — from both blocs — being used against journalists, activists, LGBTQ+ communities, ethnic minorities, and political opposition across the region."},
      {icon:"📍",title:"Dual-vendor deployments",desc:"Many ASEAN states procure from both blocs simultaneously, creating complex accountability gaps where responsibility for harm is diffused across multiple vendors and jurisdictions."}
    ],
    operators:["hikvision","dahua","huawei-safecity","sensetime","cloudwalk","palantir","nso-group","verint","l3harris"],
    references:[
      {num:1,text:"Citizen Lab (2023). 'Predator in the Wild: Targeted Surveillance in Thailand and Beyond.'",source:"Citizen Lab, University of Toronto",url:"https://citizenlab.ca/2023/09/predator-in-the-wild/"},
      {num:2,text:"Access Now (2023). 'Pegasus vs. the People: How Governments Use Spyware Against Civil Society.'",source:"Access Now",url:"https://www.accessnow.org/campaign/nso-pegasus-project/"},
      {num:3,text:"Wang, M. (2022). 'China's Techno-Authoritarianism Has Gone Global.' Foreign Affairs.",source:"Foreign Affairs",url:"https://www.foreignaffairs.com/articles/china/2021-04-08/chinas-techno-authoritarianism-has-gone-global"},
      {num:4,text:"Feldstein, S. (2019). 'The Global Expansion of AI Surveillance.' Carnegie Endowment.",source:"Carnegie Endowment",url:"https://carnegieendowment.org/2019/09/17/global-expansion-of-ai-surveillance-pub-79847"},
      {num:5,text:"Article 19 (2023). 'Digital Repression in Southeast Asia: The Role of Chinese Technology.'",source:"Article 19",url:"https://www.article19.org/resources/digital-repression-southeast-asia/"},
      {num:6,text:"Murray, D. & Kaura, A. (2021). 'Surveillance Technology at the tip of the Spear.' CNAS.",source:"CNAS",url:"https://www.cnas.org/publications/reports/surveillance-technology-at-the-tip-of-the-spear"}
    ]
  },
  {
    id:"platforms", num:"02", title:"Platform Power & Content Governance", shortTitle:"Platforms",
    summary:"US and Chinese platforms each create distinct information environments across ASEAN — with minimal accountability to the populations they shape. Content moderation failures have contributed to real-world violence.",
    urgency:"critical", tags:["both"],
    us_bloc:{
      heading:"US bloc: Scale without accountability in non-English environments",
      body:[
        "Meta (Facebook) is the primary internet for hundreds of millions of people across the Philippines, Indonesia, Vietnam, Myanmar, and Cambodia. Its algorithmic design optimises for engagement, which in low-resource-language environments with minimal content moderation means outrage, disinformation, and in extreme cases incitement.",
        "Myanmar is the definitive case. Facebook's documented failure to moderate Burmese-language content contributed to the amplification of hate speech that preceded the Rohingya genocide. The UN Fact-Finding Mission explicitly cited Facebook's role. The structural problem — optimisation for engagement, under-resourcing of non-English moderation, opaque algorithmic decisions — persists across Khmer, Tagalog, Bahasa Indonesia, Thai, and Vietnamese environments.",
        "Terms of service are written in California. Appeals processes assume English-language legal literacy. There is no regional regulatory body with genuine jurisdiction over US platforms."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: Algorithmic influence and diaspora surveillance",
      body:[
        "TikTok's recommendation algorithm — regardless of where data is physically stored — is a Chinese-designed influence architecture operating at scale across ASEAN. Its content curation decisions are opaque and unaudited, and shape what young people across the region see, believe, and value.",
        "WeChat functions as the primary communication platform for Chinese diaspora communities across ASEAN. Content on WeChat is subject to Chinese censorship law regardless of where users physically reside. Businesses, politicians, and community leaders who communicate via WeChat are operating within a surveillance environment governed by Chinese law.",
        "Both TikTok and WeChat make consequential decisions about what information reaches ASEAN populations, but their accountability mechanisms are oriented toward their home regulator — the Chinese Communist Party — rather than the populations they serve."
      ]
    },
    keyIssues:[
      {icon:"🇲🇲",title:"Myanmar and platform-enabled atrocity",desc:"The Rohingya genocide represents the clearest documented case of US platform architecture contributing to mass violence. No structural remediation has been implemented."},
      {icon:"🔇",title:"Under-resourced non-English moderation",desc:"Both US and Chinese platforms systematically under-resource content moderation in ASEAN languages relative to English, creating harm asymmetries that fall hardest on marginalised communities."},
      {icon:"🧮",title:"Algorithmic opacity",desc:"Neither bloc's platforms disclose how their recommendation algorithms function in specific ASEAN language contexts, making independent auditing impossible."},
      {icon:"📋",title:"DEFA as a governance opportunity",desc:"The ASEAN Digital Economy Framework Agreement negotiations are the most immediate opportunity to establish regional platform accountability standards."}
    ],
    operators:["meta","google","tiktok","wechat"],
    references:[
      {num:1,text:"UN Human Rights Council (2018). 'Report of the Independent International Fact-Finding Mission on Myanmar.' A/HRC/39/64.",source:"United Nations",url:"https://www.ohchr.org/en/hr-bodies/hrc/myanmar-ffm/report"},
      {num:2,text:"Stecklow, S. (2018). 'Why Facebook is losing the war on hate speech in Myanmar.' Reuters.",source:"Reuters",url:"https://www.reuters.com/investigates/special-report/myanmar-facebook-hate/"},
      {num:3,text:"Shahbaz, A. & Funk, A. (2023). 'Freedom on the Net 2023.' Freedom House.",source:"Freedom House",url:"https://freedomhouse.org/report/freedom-net/2023/repressive-power-artificial-intelligence"},
      {num:4,text:"Citizen Lab (2020). 'We Chat, They Watch.'",source:"Citizen Lab",url:"https://citizenlab.ca/2020/05/we-chat-they-watch/"}
    ]
  },
  {
    id:"data", num:"03", title:"Data Governance & Sovereignty", shortTitle:"Data",
    summary:"Who has access to personal data about ASEAN populations — their governments, foreign corporations, or foreign intelligence agencies? Both blocs' legal architectures create extraterritorial claims over ASEAN data.",
    urgency:"high", tags:["both"],
    us_bloc:{
      heading:"US bloc: 'Free data flows' as corporate extraction",
      body:[
        "The US trade position systematically opposes data localisation requirements, framing them as trade barriers. This serves US cloud companies — AWS, Microsoft, Google — whose business model depends on processing data from anywhere in global facilities. The CLOUD Act (2018) asserts US government jurisdiction over data held by US companies regardless of where it is physically stored.",
        "US trade negotiators have pushed anti-localisation provisions into CPTPP, IPEF, and bilateral Digital Economy Agreements. The framing of 'free data flows' obscures the direction of flow: data moves toward US corporate infrastructure, profits return to US shareholders, and legal jurisdiction follows US law.",
        "The withdrawal from IPEF's digital trade pillar in 2023 under domestic pressure exposed the fundamental tension: the US wants ASEAN governments to accept rules protecting US companies but is unwilling to make binding commitments on rights protections in return."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: 'Data sovereignty' as state access",
      body:[
        "China's model asserts extensive state access to data. The Cybersecurity Law (2017), Data Security Law (2021), and National Intelligence Law (2017) together require Chinese companies to provide data to the state on demand — globally. When Chinese platforms, cloud services, or infrastructure vendors operate in ASEAN, this legal framework travels with them.",
        "China promotes data localisation as an element of cyber sovereignty — which resonates with ASEAN governments' legitimate concerns about foreign data extraction but advances a model that prioritises state access over individual rights.",
        "Chinese bilateral trade agreements with Mekong subregion states contain digital provisions that promote Chinese technical standards while offering minimal protections for individual users."
      ]
    },
    keyIssues:[
      {icon:"🌐",title:"CLOUD Act vs. National Intelligence Law",desc:"ASEAN populations face extraterritorial data access claims from both US law (CLOUD Act) and Chinese law (National Intelligence Law) simultaneously — depending on which vendor's infrastructure their data traverses."},
      {icon:"🏗️",title:"Implementation gaps in new data laws",desc:"Thailand's PDPA, Indonesia's PDP Law, Vietnam's Decree 13/2023 all exist on paper. None has a well-resourced, genuinely independent enforcement body."},
      {icon:"🇪🇺",title:"EU as an unacknowledged third actor",desc:"GDPR adequacy decisions have driven data protection reform across Japan, South Korea, Singapore, and Thailand more effectively than US trade agreements or Chinese governance assistance."},
      {icon:"🔑",title:"Individual vs. state 'sovereignty'",desc:"Real data sovereignty means individuals and communities have meaningful control over their data — not just their government. Both blocs' models subordinate individual rights to either corporate or state interests."}
    ],
    operators:["aws","microsoft-azure","google-cloud","alibaba-cloud","huawei-cloud"],
    references:[
      {num:1,text:"Article 19 (2022). 'Data Localisation: A Threat to Digital Rights?'",source:"Article 19",url:"https://www.article19.org/resources/data-localisation-threat-digital-rights/"},
      {num:2,text:"Becker, M. & Bhatt, P. (2022). 'The CLOUD Act: A Primer.' Congressional Research Service.",source:"CRS",url:"https://crsreports.congress.gov/product/pdf/LSB/LSB10048"},
      {num:3,text:"Sacks, S. (2021). 'China's Data Governance Model.' CSIS.",source:"CSIS",url:"https://www.csis.org/analysis/chinas-data-governance-model"},
      {num:4,text:"UNCTAD (2021). 'Digital Economy Report 2021.'",source:"UNCTAD",url:"https://unctad.org/publication/digital-economy-report-2021"}
    ]
  },
  {
    id:"fintech", num:"04", title:"Financial Technology & Payment Systems", shortTitle:"Fintech",
    summary:"Both blocs' fintech architectures expand financial access while creating new forms of dependency, surveillance, and exclusion. The contest over payment infrastructure has direct implications for sanctions reach and financial privacy.",
    urgency:"medium", tags:["both"],
    us_bloc:{
      heading:"US bloc: Extractive infrastructure and sanctions as leverage",
      body:[
        "Visa and Mastercard dominate cross-border and formal-sector payments across the developed ASEAN tier, extracting significant transaction fees from economies that can least afford them. Swift-based interbank settlement creates US jurisdictional leverage — US sanctions can effectively cut countries or entities off from the global financial system.",
        "US fintech companies expanding into the region bring California-centric compliance frameworks that create friction for users from countries on US watchlists, effectively creating financial exclusion for populations whose governments are in geopolitical tension with the US.",
        "The framing of Visa/Mastercard dominance as neutral market outcome obscures the structural US advantage embedded in global payment infrastructure built around US commercial and security interests."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: Digital yuan and the long game on dollar dependency",
      body:[
        "Alipay and WeChat Pay have significant retail payment penetration in tourist economies across Thailand, Malaysia, Singapore, and Cambodia. More strategically, the digital yuan (e-CNY) is being promoted for bilateral trade settlement outside Swift — with significant implications for US sanctions reach and financial transaction privacy.",
        "Within the Chinese fintech ecosystem, transaction data flows to Chinese companies and ultimately to the Chinese state under the National Intelligence Law. Ant Group's credit scoring incorporates social behaviour data — a model of financial inclusion that trades privacy and autonomy for access.",
        "CIPS (Cross-Border Interbank Payment System), China's alternative to Swift, is growing among Belt and Road partner states, representing a meaningful reduction in US financial leverage."
      ]
    },
    keyIssues:[
      {icon:"💸",title:"Financial exclusion as political tool",desc:"Both blocs use financial infrastructure for political leverage — US sanctions exclude populations from global finance; Chinese fintech creates dependencies that can be weaponised."},
      {icon:"🏦",title:"ASEAN payment interoperability",desc:"The ASEAN Payment Connectivity initiative and Project Nexus offer a degree of independence from both blocs. Supporting this with strong privacy protections is a practical policy priority."},
      {icon:"📊",title:"Credit scoring and social surveillance",desc:"Chinese fintech credit scoring using social behaviour data represents a new form of financial surveillance with significant rights implications as it expands in ASEAN."},
      {icon:"💹",title:"De-dollarisation dynamics",desc:"China's promotion of e-CNY and CIPS is accelerating de-dollarisation among smaller ASEAN states, with privacy, accountability, and sanctions implications."}
    ],
    operators:["alipay","wechat-pay","visa","mastercard"],
    references:[
      {num:1,text:"Prasad, E. (2021). 'The Future of Money.' Harvard University Press.",source:"Harvard University Press",url:"https://www.hup.harvard.edu/catalog.php?isbn=9780674258440"},
      {num:2,text:"Farrell, H. & Newman, A. (2019). 'Weaponized Interdependence.' International Security.",source:"MIT Press",url:"https://direct.mit.edu/isec/article/44/1/42/12092/Weaponized-Interdependence"},
      {num:3,text:"BIS (2022). 'Project Nexus: Enabling Instant Cross-Border Payments.'",source:"BIS",url:"https://www.bis.org/publ/othp52.htm"}
    ]
  },
  {
    id:"ai", num:"05", title:"AI Deployment & Automated Decision-Making", shortTitle:"AI",
    summary:"AI systems from both blocs are being deployed in high-stakes contexts — immigration, policing, welfare, credit — with minimal transparency, no meaningful appeal mechanisms, and governance frameworks years behind deployment realities.",
    urgency:"high", tags:["both"],
    us_bloc:{
      heading:"US bloc: English-centric systems, opaque governance commitments",
      body:[
        "US AI companies — Google, Microsoft (via OpenAI), Amazon, and Meta — are the dominant suppliers of AI services to the private sector and increasingly to government agencies across ASEAN. These systems are trained primarily on English-language data, perform measurably worse on Asian languages, and encode biases reflecting the demographics of their training data rather than the populations they are deployed on.",
        "US companies' AI governance commitments — safety commitments, responsible AI frameworks — are made under US domestic political pressure and have no binding force in ASEAN jurisdictions. AWS AI services embedded in immigration systems, and Google's AI tools in education and healthcare, operate with minimal disclosure about training data or error rates.",
        "The AI safety framework the US promoted through Bletchley Park prioritises existential risk over near-term deployment harms — a framing poorly suited to ASEAN contexts where AI is already causing concrete harms in immigration and policing applications."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: Governance-free deployment in surveillance-adjacent markets",
      body:[
        "Chinese AI companies — Baidu, Alibaba DAMO, Huawei, SenseTime — are deploying AI systems across the region, particularly in smart city applications and in markets where US companies face regulatory barriers. Chinese AI deployment comes with minimal transparency about training data, performance, or failure modes.",
        "In the surveillance domain, Chinese AI systems are explicitly designed for population monitoring applications that would face legal or reputational barriers in Western markets — making ASEAN a deployment environment of choice for capabilities that cannot be tested at scale elsewhere.",
        "China promotes its AI governance model — which subordinates AI accountability to state security — through the Global AI Governance Initiative and bilateral governance assistance. For governments more concerned about social stability than individual rights, the Chinese model is functionally attractive."
      ]
    },
    keyIssues:[
      {icon:"🚫",title:"High-stakes deployment without accountability",desc:"AI systems in immigration, welfare, and policing across ASEAN operate without transparency requirements, independent oversight, or meaningful appeal mechanisms."},
      {icon:"🗣️",title:"Language and cultural bias",desc:"AI systems trained primarily on English and Mandarin data perform poorly in ASEAN language contexts. This performance gap is rarely assessed in specific deployment contexts where it causes harm."},
      {icon:"🧪",title:"ASEAN as testing ground",desc:"Both US and Chinese AI companies treat ASEAN as a lower-accountability deployment environment — testing capabilities that would face regulatory barriers at home."},
      {icon:"📜",title:"DEFA governance opportunity",desc:"Mandatory impact assessment requirements in the ASEAN DEFA negotiations would be the most tractable near-term governance gain."}
    ],
    operators:["openai","google-ai","sensetime-ai","baidu","huawei-ai"],
    references:[
      {num:1,text:"Raji, I.D. et al. (2022). 'The Fallacy of AI Functionality.' FAccT.",source:"ACM FAccT",url:"https://dl.acm.org/doi/10.1145/3531146.3533158"},
      {num:2,text:"Access Now (2023). 'AI at the Border: Rights Implications of Automated Decision-Making.'",source:"Access Now",url:"https://www.accessnow.org/ai-at-the-border/"},
      {num:3,text:"ASEAN (2019). 'ASEAN Framework on AI Governance and Ethics.'",source:"ASEAN Secretariat",url:"https://asean.org/asean-framework-on-ai-governance/"},
      {num:4,text:"Birhane, A. et al. (2022). 'The Values Encoded in Machine Learning Research.' FAccT 2022.",source:"ACM FAccT",url:"https://dl.acm.org/doi/10.1145/3531146.3533083"}
    ]
  },
  {
    id:"cybersecurity", num:"06", title:"Cybersecurity & Digital Attack", shortTitle:"Cybersecurity",
    summary:"Cybersecurity has a direct human rights dimension: who is protected from digital attack, and who is exposed? Both blocs are active threat actors against civil society, governments, and ordinary users in ASEAN.",
    urgency:"high", tags:["both"],
    us_bloc:{
      heading:"US bloc: Stockpiled vulnerabilities and collateral exposure",
      body:[
        "The NSA's stockpiling and use of software vulnerabilities — exposed by the Shadow Brokers leak in 2016-17 — demonstrated that US intelligence agencies deliberately withheld knowledge of security flaws from the public to exploit them, leaving everyone who used the affected systems exposed.",
        "US offensive cyber capabilities, deployed through Five Eyes channels, represent a threat to communications security of non-allied governments in the region. When US-allied agencies conduct operations against ASEAN governments, civil society organisations on the same infrastructure face collateral exposure.",
        "US cybersecurity companies dominate ASEAN enterprise and government security markets, creating dependency on US private sector actors for critical security infrastructure."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: State-sponsored hacking of civil society and governments",
      body:[
        "Chinese state-sponsored APT groups are among the most active cyber threat actors in the region. Documented targets include Myanmar opposition groups, Vietnamese government networks, Philippines' South China Sea arbitration infrastructure, and Uyghur and Tibetan diaspora communities across ASEAN.",
        "Chinese cybersecurity products raise ongoing concern regarding potential state access — Huawei network equipment, Qihoo 360 antivirus, Alibaba cloud security tools. The National Intelligence Law creates a legal basis for these concerns that Chinese vendors cannot fully negate.",
        "China's Great Firewall architecture, promoted as a governance model to ASEAN partners, is simultaneously a sophisticated offensive information control capability."
      ]
    },
    keyIssues:[
      {icon:"🛡️",title:"Civil society as collateral damage",desc:"Both US offensive operations and Chinese APT targeting put civil society organisations, journalists, and activists at risk."},
      {icon:"🔓",title:"Vulnerability stockpiling",desc:"The practice of hoarding software vulnerabilities for offensive use — documented for the NSA — systematically undermines security for all users of affected software."},
      {icon:"🌐",title:"Capacity asymmetry",desc:"Most ASEAN civil society organisations operate with minimal cybersecurity capacity. Practical digital security support honest about the full threat landscape is a critical gap."},
      {icon:"🔍",title:"Attribution complexity",desc:"Cyber attack attribution is technically difficult and politically contested. Both blocs exploit this complexity to evade accountability."}
    ],
    operators:["nso-group","crowdstrike","apt-groups"],
    references:[
      {num:1,text:"Citizen Lab (2023). 'Missing Link: Tibetan Groups Targeted with 1-Click Mobile Exploits.'",source:"Citizen Lab",url:"https://citizenlab.ca/2023/09/missing-link-tibetan-groups-targeted-with-1-click-mobile-exploits/"},
      {num:2,text:"Mandiant (2023). 'APT41: A Dual Espionage and Cyber Crime Operation.'",source:"Mandiant",url:"https://www.mandiant.com/resources/apt41-dual-espionage-and-cyber-crime-operation"},
      {num:3,text:"Access Now (2023). 'Digital Security Helpline: Annual Report 2022.'",source:"Access Now",url:"https://www.accessnow.org/digital-security-helpline-annual-report/"},
      {num:4,text:"Deibert, R. (2020). 'Reset: Reclaiming the Internet for Civil Society.'",source:"House of Anansi",url:"https://houseofanansi.com/products/reset"}
    ]
  },
  {
    id:"trade", num:"07", title:"Digital Trade Law & Governance", shortTitle:"Trade Law",
    summary:"Digital trade law is where all other tech power dynamics get formally codified into binding rules. Civil society has been largely absent from these negotiations, ceding the field to corporate interests on both sides.",
    urgency:"high", tags:["both"],
    us_bloc:{
      heading:"US bloc: Corporate interests dressed as free trade",
      body:[
        "US trade negotiators have systematically pushed provisions serving US tech company interests — anti-localisation rules benefiting US clouds, IP protections extending US platform liability shields extraterritorially, and e-commerce rules preventing ASEAN governments from regulating US platforms in ways that would protect local users.",
        "The suspension of IPEF's digital trade pillar in late 2023 under domestic pressure exposed the fundamental tension: the US wants ASEAN governments to accept rules protecting US companies but is unwilling to make binding commitments on rights protections in return.",
        "CPTPP — which the US negotiated but withdrew from — contains stronger digital trade provisions than RCEP. US absence from the agreement it designed illustrates the self-defeating quality of US digital trade policy when domestic politics intervenes."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: Regulatory flexibility to expand the sovereignty model",
      body:[
        "China's participation in RCEP produced a weak digital trade chapter that maximises regulatory flexibility — in practice, flexibility for Chinese-model governance to expand without constraint. China's application to join CPTPP is partly a strategic play to shape or weaken provisions constraining its domestic governance model.",
        "Chinese bilateral trade agreements with smaller ASEAN states contain digital economy provisions promoting Chinese technical standards and platform access while offering minimal protections for local users. CAFTA 3.0 deepens Chinese digital integration without requiring meaningful rights protections.",
        "China uses the ITU standards process to advance alternative technical standards — including a proposed replacement for TCP/IP that would enable greater state control of internet routing."
      ]
    },
    keyIssues:[
      {icon:"📝",title:"ASEAN DEFA — the immediate opportunity",desc:"The ASEAN Digital Economy Framework Agreement is the most important regional digital governance negotiation underway. Civil society engagement with concrete alternative text is urgently needed."},
      {icon:"⚡",title:"Data localisation battleground",desc:"Localisation requirements are the most practically consequential issue in digital trade law. Both blocs' opposition to localisation serves their interests at the expense of genuine data sovereignty."},
      {icon:"🌍",title:"EU as the third model",desc:"The GDPR adequacy mechanism drives more data protection reform in ASEAN than US or Chinese approaches combined. Civil society should actively use EU regulatory leverage as a tool."},
      {icon:"🏛️",title:"Civil society exclusion",desc:"Digital trade negotiations are deliberately opaque. Building civil society capacity to engage — with concrete alternative text — is as urgent as it is for environmental and labour movements."}
    ],
    operators:["asean-secretariat","itu","wto"],
    references:[
      {num:1,text:"ASEAN Secretariat (2024). 'ASEAN Digital Economy Framework Agreement: Negotiating Status.'",source:"ASEAN Secretariat",url:"https://asean.org/asean-digital-economy-framework-agreement/"},
      {num:2,text:"Burri, M. (2021). 'The Governance of Data and Data Flows in Trade Agreements.' UC Davis Law Review.",source:"UC Davis",url:"https://lawreview.law.ucdavis.edu/issues/51/1/articles/51-1_burri.pdf"},
      {num:3,text:"UNCTAD (2021). 'Digital Economy Report 2021.'",source:"UNCTAD",url:"https://unctad.org/publication/digital-economy-report-2021"},
      {num:4,text:"Aaronson, S.A. & Leblond, P. (2018). 'Another Digital Divide: The Rise of Data Realms.' JIEL.",source:"Oxford Academic",url:"https://academic.oup.com/jiel/article/21/2/245/4992490"}
    ]
  },
  {
    id:"softpower", num:"08", title:"Soft Power & Norm Setting", shortTitle:"Soft Power",
    summary:"The contest to define the norms of the digital economy is a contest for structural power over the next generation of governance. Both blocs invest heavily in education, standards bodies, and narrative framing.",
    urgency:"medium", tags:["both"],
    us_bloc:{
      heading:"US bloc: Democratic framing under pressure",
      body:[
        "The US frames its technology ecosystem as an expression of open societies — free expression, open internet, market competition, and rule of law. This narrative has genuine resonance in parts of ASEAN with recent democratic transitions or strong civil society movements.",
        "The problem is that the narrative has become increasingly hard to sustain. Snowden revelations demonstrated mass US surveillance of allied nations. Meta's role in the Rohingya genocide devastated the 'open internet' brand across Southeast Asia. Silicon Valley's startup mythology has shaped the aspirations of a generation of Asian technologists.",
        "US influence in technical standards bodies — IEEE, IETF, W3C, 3GPP — gives disproportionate structural power over the architecture of the internet and AI systems. The Quad and Japan-Australia partnerships are building coalitions around Open RAN as an alternative to Huawei 5G."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: Infrastructure as ideology, solidarity as strategy",
      body:[
        "The Digital Silk Road operates simultaneously as economic development, commercial investment, and norm transmission — and recipient governments often cannot clearly distinguish between the three. When Huawei builds a 5G network in Bangladesh or a SafeCity system in Laos, soft power is embedded in the infrastructure itself.",
        "China actively promotes 'cyber sovereignty' through the World Internet Conference, ITU engagement, and bilateral governance assistance. The principle resonates with governments uncomfortable with social media platforms' destabilising effects on political order.",
        "China frames its tech engagement as South-South cooperation — one developing nation helping others, without colonial baggage or Western conditionality. Huawei and Alibaba run technical training programs for government staff across the region, creating pipelines for Chinese technical standard adoption."
      ]
    },
    keyIssues:[
      {icon:"🎓",title:"Technical training as norm transmission",desc:"Chinese technical training programs bundled with infrastructure contracts are systematically under-recognised as soft power instruments. Who trains the people who run ASEAN's digital infrastructure shapes what norms they apply."},
      {icon:"📡",title:"Standards body competition",desc:"ITU votes on internet standards are a front line of US-China tech competition. ASEAN states' votes are actively contested. Civil society rarely has visibility into these processes."},
      {icon:"🏫",title:"Education and talent formation",desc:"US universities dominate elite technical talent formation. Chinese universities are growing in regional prestige, particularly for students from lower-income states."},
      {icon:"💰",title:"Development finance as soft power",desc:"The US PGII and G7 Blue Dot Network attempt to offer infrastructure alternatives to BRI with governance standards attached. Delivery has been slower and more conditional than Chinese financing."}
    ],
    operators:["itu","asean-secretariat"],
    references:[
      {num:1,text:"Polyakova, A. & Meserole, C. (2019). 'Exporting Digital Authoritarianism.' Brookings.",source:"Brookings",url:"https://www.brookings.edu/research/exporting-digital-authoritarianism/"},
      {num:2,text:"Doshi, R. (2021). 'The Long Game: China's Grand Strategy.' Oxford University Press.",source:"Oxford University Press",url:"https://global.oup.com/academic/product/the-long-game-9780197527917"},
      {num:3,text:"CSIS (2023). 'China's Digital Silk Road: Progress and Challenges.'",source:"CSIS",url:"https://www.csis.org/analysis/chinas-digital-silk-road"},
      {num:4,text:"Nye, J.S. (2021). 'Soft Power and Great-Power Competition.' Chinese Journal of International Politics.",source:"Oxford Academic",url:"https://academic.oup.com/cjip/article/14/1/1/6168882"}
    ]
  }  ,
  {
    id:"ai-infra", num:"09", title:"AI Infrastructure & Data Centres", shortTitle:"AI Infrastructure",
    summary:"Both blocs are racing to build the physical and computational infrastructure underpinning AI across ASEAN — data centres, GPU clusters, submarine cables, and sovereign compute. This is the fastest-moving domain, with over $150B in announced investment since 2024.",
    urgency:"critical", tags:["both"],
    us_bloc:{
      heading:"US bloc: Hyperscale dominance and the GPU chokepoint",
      body:[
        "AWS committed $9 billion to Singapore infrastructure in 2024, Microsoft pledged $5.5 billion to Singapore in early 2026 as part of a $6.5 billion Southeast Asian package, and Google has made multi-billion commitments across Malaysia and Thailand. These are not incremental expansions — they represent the deliberate construction of AI-ready hyperscale infrastructure that will define the region's computational capacity for the next decade.",
        "The most significant US leverage point is Nvidia. GPU clusters are the physical substrate of AI training and inference, and Nvidia controls approximately 80% of the AI accelerator market globally. US export controls restrict access to advanced Nvidia chips for Chinese entities — but also shape which ASEAN governments and companies can access cutting-edge AI compute. Countries that host US hyperscale infrastructure get access to Nvidia-powered AI; countries that fall into Chinese infrastructure dependency may find themselves increasingly reliant on Huawei Ascend chips and Chinese AI models.",
        "The CLOUD Act dimension is critical here: data processed in AWS, Azure, or Google Cloud AI systems in ASEAN is subject to US legal jurisdiction. As AI systems are embedded into government decision-making — immigration, welfare, policing, healthcare — the sensitivity of the data processed, and the US government's legal access to it, becomes a fundamental sovereignty question that most ASEAN governments have not yet confronted."
      ]
    },
    cn_bloc:{
      heading:"Chinese bloc: Matching investment, Chinese AI models, and Huawei hardware",
      body:[
        "ByteDance has pledged $8.8 billion for regional data centre development with Thailand as a key focus — and separately announced plans to spend over $30 billion on AI infrastructure globally in 2026. Alibaba Cloud has more ASEAN availability zones than AWS. Huawei Cloud is expanding rapidly in markets where US export controls create openings. Chinese tech companies are matching Western investment levels in Thailand specifically, making Bangkok a testbed for whether US and Chinese AI infrastructure stacks can coexist.",
        "The Chinese AI model layer is developing faster than most Western analysts have registered. DeepSeek and Alibaba's Qwen model family have achieved capability parity with US frontier models at significantly lower cost. Singapore's OCBC bank runs 30+ internal tools on DeepSeek and Qwen. Malaysia has launched a sovereign AI ecosystem built on Huawei hardware. Indonesia's Indosat has partnered with firms building on DeepSeek. The open-source release of Qwen derivatives — over 100,000 on Hugging Face — means Chinese AI architecture is diffusing into ASEAN government and enterprise systems without requiring direct Chinese commercial relationships.",
        "Critically, Chinese AI models are required by law to ensure outputs 'embody core socialist values' and do not undermine CCP authority. These governance constraints are embedded in the models' training and filtering architecture. ASEAN governments deploying Chinese AI models in public services are importing Chinese information governance norms into their own infrastructure — often without realising it."
      ]
    },
    keyIssues:[
      {icon:"⚡",title:"Energy as the binding constraint",desc:"Data centre electricity demand is reshaping ASEAN energy policy. Malaysia has revived its nuclear energy programme partly driven by AI data centre demand. Thailand's Eastern Economic Corridor is being rewired for hyperscale power loads. Energy dependency is becoming a new form of infrastructure vulnerability — who builds the power plants matters as much as who builds the servers."},
      {icon:"🏗️",title:"The Johor-Batam corridor as geopolitical flashpoint",desc:"Malaysia's Johor and Indonesia's Batam island are absorbing redirected hyperscale demand from Singapore-constrained markets. Both US and Chinese operators are building simultaneously in these corridors. The question of which legal jurisdiction — CLOUD Act or National Intelligence Law — governs data processed there is unresolved and largely unaddressed by either government."},
      {icon:"🤖",title:"Sovereign AI as a governance concept",desc:"Several ASEAN states are developing 'sovereign AI' strategies — compute capacity they control domestically. Malaysia's sovereign AI cloud is built on Huawei hardware; Singapore is investing S$1 billion in AI infrastructure. The term 'sovereign' obscures the dependency question: sovereign from whom, on whose hardware, running whose models?"},
      {icon:"📡",title:"Submarine cables and the physical internet",desc:"Over 400 submarine cables carry 95% of global internet traffic, and both US companies (Google, Meta, Amazon) and Chinese companies (Huawei Marine Networks) are actively laying new cables across the Indo-Pacific. Control of cable landing stations — where cables come ashore — provides extraordinary intelligence access to data flows. Several ASEAN landing stations are contested between blocs."}
    ],
    operators:["aws","microsoft-azure","google-cloud","alibaba-cloud","huawei-cloud","openai","google-ai","baidu","huawei-ai"],
    references:[
      {num:1,text:"Digital in Asia (2026). 'Southeast Asia Data Centre Boom 2026.'",source:"Digital in Asia",url:"https://digitalinasia.com/2026/04/08/southeast-asia-ai-data-centre-boom/"},
      {num:2,text:"Cushman & Wakefield (2026). 'APAC Data Centre H2 2025 Update: Record 19.4GW Pipeline.'",source:"Cushman & Wakefield",url:"https://www.cushmanwakefield.com/en/singapore/news/2026/03/apac-data-centre-development-pipeline-hits-record-in-2025"},
      {num:3,text:"Global Data Centre Hub (2026). 'Asia-Pacific: $150B+ AI Data Center Infrastructure Enters the Industrial Phase.'",source:"Global Data Centre Hub",url:"https://www.globaldatacenterhub.com/p/asia-pacific-150b-ai-data-center"},
      {num:4,text:"Digital in Asia (2026). 'China AI 2026: Models, Chips & National Strategy.'",source:"Digital in Asia",url:"https://digitalinasia.com/china-ai-models-chips-strategy/"},
      {num:5,text:"Digital in Asia (2026). 'Every National AI Strategy in Asia: A Policy Tracker.'",source:"Digital in Asia",url:"https://digitalinasia.com/2026/04/08/asia-ai-policy-tracker/"},
      {num:6,text:"WinBuzzer (2026). 'ByteDance Plans Over $30 Billion for AI Expansion.'",source:"WinBuzzer",url:"https://winbuzzer.com/2026/05/11/bytedance-plans-over-30-billion-for-ai-expansion-b-xcxwbn/"}
    ]
  }
];
const OPERATORS = [
  {id:"hikvision",name:"Hikvision",bloc:"cn",type:"Surveillance Tech",hq:"China",
   countries:["Cambodia","Thailand","Malaysia","Vietnam","Indonesia","Myanmar"],
   desc:"World's largest CCTV manufacturer. On US Entity List since 2019 for documented role in Xinjiang surveillance of Uyghur Muslims.",
   threat:"Hikvision's cameras and facial recognition systems are embedded in smart city infrastructure across ASEAN, typically sold as public safety tools. The company's systems have been used to monitor protesters, track ethnic and religious minorities, and build population movement databases. Despite placement on the US Entity List for Xinjiang atrocities, continued ASEAN procurement continues — many governments lack the political will or technical knowledge to substitute alternatives. Systems come with Chinese maintenance contracts and technical staff, creating long-term dependency and Chinese visibility into local surveillance operations.",
   power:"Market dominance (cheapest at scale), Chinese state bank financing, technical training lock-in, National Intelligence Law — all data technically accessible to Chinese state intelligence on demand.",
   ref:"https://www.hrw.org/report/2019/05/01/chinas-algorithms-repression/reverse-engineering-xinjiang-police-mass-surveillance",
   affectedCommunities:"Uyghur Muslims in Xinjiang (where Hikvision systems were purpose-built for ethnic surveillance); ethnic minorities in Cambodia's northeast; protest communities in Thailand and Malaysia where SafeCity CCTV has been deployed; migrant workers across ASEAN in locations with Hikvision-equipped checkpoints.",
   accountability:"US Entity List designation (2019) for Xinjiang role — but this only restricts US companies from supplying to Hikvision, not ASEAN governments from buying from it. Several ASEAN governments have continued procurement despite Entity List designation. No equivalent EU restriction. Human Rights Watch and IPVM have extensively documented Hikvision's Xinjiang systems. No ASEAN state has conducted a human rights review of Hikvision procurement.",
   keyEvidence:"Human Rights Watch 'China's Algorithms of Repression' (2019); IPVM investigations into Hikvision Xinjiang contracts (2020-2022); Australian Strategic Policy Institute ASPI 'Mapping China's Tech Giants' (2019-ongoing); Intercept investigation into Hikvision marketing materials (2021).",},
  {id:"dahua",name:"Dahua Technology",bloc:"cn",type:"Surveillance Tech",hq:"China",
   countries:["Cambodia","Thailand","Malaysia","Vietnam"],
   desc:"Second-largest Chinese CCTV and facial recognition manufacturer. On US Entity List. Partner to Hikvision across ASEAN smart city deployments.",
   threat:"Dahua operates in close parallel to Hikvision across ASEAN, often in the same smart city tenders. Its DeepSense AI analytics platform can identify individuals from gait, clothing, and partial facial features — useful for evading conventional CCTV avoidance tactics used by protesters and dissidents. Like Hikvision, Dahua's Entity List designation has not prevented Southeast Asian government procurement.",
   power:"Price competition with Western vendors (30-40% cheaper), Chinese state financing, National Intelligence Law creates obligatory state intelligence cooperation.",
   ref:"https://carnegieendowment.org/2019/09/17/global-expansion-of-ai-surveillance-pub-79847"},
  {id:"sensetime",name:"SenseTime",bloc:"cn",type:"AI / Facial Recognition",hq:"China",
   countries:["Singapore","Malaysia","Thailand","Indonesia"],
   desc:"China's largest AI company by valuation. On US Entity List for Xinjiang surveillance role. Deploying facial recognition across ASEAN banking, retail, and government.",
   threat:"SenseTime's facial recognition platform has been integrated into national identity verification, border management, and smart city systems. Despite US Entity List designation, SenseTime has pursued aggressive ASEAN expansion. Its systems, once embedded in government identity infrastructure, create a persistent Chinese intelligence footprint in the most sensitive datasets a government holds — biometric records of the entire population.",
   power:"World-leading AI accuracy claims, low-cost government licensing, technical training for government staff, National Intelligence Law exposure.",
   ref:"https://www.ft.com/content/a5caccb4-0d38-11e9-a3aa-118c761d2745"},
  {id:"cloudwalk",name:"CloudWalk Technology",bloc:"cn",type:"AI / Facial Recognition",hq:"China",
   countries:["Cambodia","Myanmar","Laos"],
   desc:"Chinese facial recognition AI company targeting governments with weak regulatory frameworks and high appetite for population surveillance tools.",
   threat:"CloudWalk has pursued contracts specifically in states with weak regulatory frameworks and limited civil society oversight. Its contracts in Myanmar during the pre-coup period reportedly included population database construction later accessible to the military junta. Its business model explicitly targets low-governance environments where data protection law is absent.",
   power:"Concessionary financing via Chinese state banks, expertise in low-governance environments, willingness to transfer technology that Western vendors typically withhold.",
   ref:"https://foreignpolicy.com/2022/08/25/africa-ai-facial-recognition-technology/"},
  {id:"huawei-safecity",name:"Huawei SafeCity",bloc:"cn",type:"Smart City / Surveillance",hq:"China",
   countries:["Cambodia","Laos","Myanmar","Malaysia","Thailand","Pakistan","Bangladesh"],
   desc:"Huawei's integrated surveillance platform bundling 5G infrastructure with facial recognition, crowd analytics, and centralised police operations centres.",
   threat:"SafeCity integrates surveillance with communications infrastructure. A government that deploys SafeCity gets a single Chinese-built system connecting CCTV feeds, facial recognition, 5G network data, and public safety databases into a unified operations centre — with Chinese technical staff on-site during installation and maintenance. This integration makes the system both more powerful (more data, faster response) and more dependent (harder to replace, more Chinese visibility). Several ASEAN states have received SafeCity deployments as part of BRI packages where infrastructure financing was conditional on using Huawei equipment.",
   power:"Vertical integration of surveillance and communications infrastructure, BRI financing conditionality, National Intelligence Law, technical training creates staff dependency.",
   ref:"https://csis.org/analysis/huawei-and-5g-what-you-need-know",
   affectedCommunities:"General populations in Cambodia, Laos, and Myanmar where SafeCity creates mass surveillance infrastructure; pro-democracy activists in Myanmar targeted by military post-coup; ethnic minorities in border regions with SafeCity-equipped checkpoints; journalists operating in cities with centralised police operations centres.",
   accountability:"No international accountability mechanism. Huawei is not on any export control list for its SafeCity product despite documented deployment in authoritarian contexts. The bundling of SafeCity with BRI financing makes it difficult for recipient governments to reject without jeopardising broader infrastructure deals. The National Intelligence Law creates legal access for Chinese state intelligence to SafeCity operational data that no recipient government has publicly acknowledged.",
   keyEvidence:"CSIS analysis of Huawei SafeCity deployments (2022); Article 19 documentation of SafeCity in Cambodia (2023); Cambodian Center for Human Rights reporting on Sub-Decree 23 and SafeCity integration; Freedom House 'Freedom on the Net' Cambodia chapter (2023).",},
  {id:"palantir",name:"Palantir Technologies",bloc:"us",type:"Data Analytics / Gov Tech",hq:"USA",
   countries:["Singapore","Philippines","Australia","Indonesia"],
   desc:"US data analytics firm expanding into ASEAN defence and interior ministries. Co-founder Peter Thiel declared democracy and freedom 'no longer compatible.'",
   threat:"Palantir's Gotham platform represents a qualitatively different kind of tech power from conventional surveillance vendors. Rather than collecting new data, Palantir integrates data governments already hold — immigration records, financial data, communications intercepts, social media data, healthcare records — into a single queryable platform. The power this gives a government over its own population is enormous. The power it gives Palantir — and by extension the US intelligence community — is structurally significant: Palantir's engineers understand the data architecture of every government they serve.",
   power:"Data integration capability aggregating existing government datasets, deep US intelligence community relationships, security clearance infrastructure, co-founder's explicit anti-democratic ideology.",
   ref:"https://theintercept.com/2022/01/28/palantir-peter-thiel-democracy/",
   affectedCommunities:"Immigrants and asylum seekers (through border and immigration system integration); welfare recipients (through benefits system data integration); activist and journalist communities in states where government data is consolidated on Gotham; Muslim communities in states with counter-terrorism Palantir deployments.",
   accountability:"Essentially none in ASEAN contexts. Palantir is a US company subject to US law — but its government contracts are typically classified or commercially confidential. No ASEAN state has subjected Palantir contracts to independent human rights review. Peter Thiel's stated anti-democratic ideology creates a documented governance risk that procurement officials consistently fail to assess.",
   keyEvidence:"The Intercept reporting on Palantir's government contracts (2022); Amnesty International 'Palantir: how the surveillance company uses its public contracts to secure private data' (2023); Academic analysis of Palantir's ICE contracts as model for ASEAN expansion.",},
  {id:"nso-group",name:"NSO Group (Pegasus)",bloc:"us",type:"Surveillance / Spyware",hq:"Israel",
   countries:["Thailand","Indonesia","Philippines"],
   desc:"Israeli spyware company. Pegasus spyware forensically documented on devices of activists, journalists, and opposition figures in Thailand, Indonesia, and the Philippines.",
   threat:"Pegasus is the most invasive commercially available surveillance tool documented in ASEAN. Once installed on a target's device — without any action by the target — it can access encrypted messages, activate the camera and microphone, track location in real time, and exfiltrate the entire device contents. In Thailand, Citizen Lab documented its use against pro-democracy activists. NSO Group sells only to governments, claiming to vet customers for human rights compliance — a claim its ASEAN deployment record directly contradicts.",
   power:"Zero-click installation (no user action required), access to encrypted communications, real-time device control, sold exclusively to governments enabling state-level targeting.",
   ref:"https://citizenlab.ca/2022/07/geckospy-pegasus-spyware-used-against-thailand-civil-society/",
   affectedCommunities:"Pro-democracy activists in Thailand — Citizen Lab documented 30+ cases; journalists and opposition politicians in Philippines; civil society leaders and lawyers in Indonesia; Uyghur diaspora communities across ASEAN; any individual targeted by a government customer.",
   accountability:"NSO Group added to US Entity List in 2021, restricting US companies from selling to it. EU Parliament investigation (2022). Multiple lawsuits including Apple v. NSO Group, WhatsApp v. NSO Group. Israel controls export licences — diplomatic pressure has had limited effect. NSO's claim to vet customers for human rights compliance has been comprehensively discredited by Citizen Lab research. No ASEAN state has enacted spyware procurement restrictions.",
   keyEvidence:"Citizen Lab 'GeckoSpy: Pegasus Spyware Used Against Thailand's Civil Society' (2022); Citizen Lab 'Missing Link: Tibetan Groups Targeted' (2023); Amnesty International forensic analysis of Pegasus infections; The Pegasus Project collaborative journalism (2021).",},
  {id:"verint",name:"Verint Systems",bloc:"us",type:"Surveillance / Intercept",hq:"USA/Israel",
   countries:["Indonesia","Thailand","Vietnam","Malaysia"],
   desc:"US-Israeli company supplying lawful interception and communications monitoring systems to telecoms regulators and law enforcement across ASEAN.",
   threat:"Verint supplies infrastructure that allows governments to monitor telecommunications at the network level — intercepting calls, SMS, and increasingly encrypted communications at the point they pass through telecoms infrastructure. Unlike Pegasus, which targets specific individuals, Verint's systems enable mass collection from entire network segments. 'Lawful interception' means whatever the local government decides — in Vietnam, Thailand, and Indonesia, that includes monitoring of political opposition, labour organisers, and journalists.",
   power:"Network-level interception capability (mass surveillance architecture), government-to-government sales relationships, US legal cover via lawful intercept standards, minimal public scrutiny.",
   ref:"https://privacyinternational.org/long-read/3516/surveillance-industry-index"},
  {id:"l3harris",name:"L3Harris Technologies",bloc:"us",type:"Defence / Intelligence",hq:"USA",
   countries:["Australia","Singapore","Philippines"],
   desc:"US defence electronics. Signals intelligence equipment and tactical communications for US-allied military and intelligence agencies across the region.",
   threat:"L3Harris supplies signals intelligence hardware and software forming the backbone of Five Eyes-adjacent intelligence sharing. Its IMSI catchers can impersonate mobile towers to intercept all communications in an area. Civil society organisations in ASEAN states targeted by Five Eyes intelligence activities face surveillance from L3Harris-equipped systems without any knowledge or accountability mechanism.",
   power:"US military and intelligence procurement dominance, Five Eyes integration, classified capability obscures accountability.",
   ref:"https://www.l3harris.com/all-capabilities/geospatial-systems"},
  {id:"meta",name:"Meta (Facebook/Instagram/WhatsApp)",bloc:"us",type:"Social Media Platform",hq:"USA",
   countries:["Philippines","Indonesia","Myanmar","Vietnam","Cambodia","Thailand","Malaysia"],
   desc:"Facebook is the primary internet for hundreds of millions in ASEAN. Its engagement-optimised algorithm contributed to the Rohingya genocide in Myanmar.",
   threat:"Meta's threat model is distinct from surveillance vendors: rather than actively monitoring populations, it creates the information environment that shapes what hundreds of millions of people believe and how they act politically. In Myanmar, its algorithm amplified Buddhist nationalist hate speech against Rohingya Muslims — the UN Fact-Finding Mission documented this explicitly. The structural problem — prioritising engagement metrics over harm prevention, severely under-resourcing non-English moderation — persists across Khmer, Tagalog, Bahasa Indonesia, Thai, and Vietnamese environments. Meta has faced no binding accountability for Myanmar. Its business model has not changed.",
   power:"Primary internet access for hundreds of millions via Facebook Basics, engagement-optimised algorithm shapes political reality, monopoly in some markets, US legal protections extraterritorially applied.",
   ref:"https://www.ohchr.org/en/hr-bodies/hrc/myanmar-ffm/report",
   affectedCommunities:"Rohingya Muslims (Myanmar) — genocide; Khmer-speaking communities (Cambodia) — disinformation; Filipino voters — political manipulation; Indonesian Muslims — sectarian content amplification; LGBTQ+ communities across ASEAN — inconsistent hate speech enforcement.",
   accountability:"No binding accountability mechanism exists. Meta settled a US privacy class action for $725 million in 2023 while simultaneously causing documented harm in Myanmar. The UN Fact-Finding Mission recommended states consider sanctions against Facebook. Multiple class action suits filed in 2023-24 on behalf of Rohingya survivors. Regulatory actions in EU (DSA) do not extend to ASEAN. No ASEAN regulator has imposed binding requirements.",
   keyEvidence:"UN FFM Report A/HRC/39/64 (2018); Reuters special report 'Why Facebook Is Losing the War on Hate Speech in Myanmar' (2018); Amnesty International 'Deadly by Design: Meta's algorithms of hate in Myanmar' (2022); Fortify Rights documentation of junta use of Facebook post-coup (2021-present).",},
  {id:"tiktok",name:"TikTok / ByteDance",bloc:"cn",type:"Social Media Platform",hq:"China",
   countries:["Indonesia","Philippines","Thailand","Vietnam","Malaysia","Myanmar"],
   desc:"Dominant short-video platform across ASEAN. Chinese-designed recommendation algorithm. Political content curation systematically suppresses content China finds sensitive.",
   threat:"TikTok's threat is primarily about information architecture. Its recommendation algorithm is a Chinese-designed influence system that shapes political and cultural discourse for young people across ASEAN. The algorithm systematically suppresses content China finds sensitive: Tiananmen, Taiwan independence, Xinjiang. Civil society organisations attempting to use TikTok for advocacy report inconsistent and opaque content removal frequently affecting political content. ByteDance's legal obligations under Chinese law mean user data and algorithmic decisions can be accessed by Chinese state intelligence.",
   power:"Dominant youth platform (400M+ ASEAN users), opaque recommendation algorithm as narrative shaping tool, data subject to National Intelligence Law, algorithm prioritises Chinese political interests.",
   ref:"https://www.wired.com/story/tiktok-bytedance-national-security/",
   affectedCommunities:"Pro-democracy and human rights content creators across ASEAN whose content is disproportionately removed; LGBTQ+ communities whose content is suppressed under 'community guidelines' that reflect Chinese norms; Uyghur diaspora communities whose content about Xinjiang is consistently suppressed; journalists covering Chinese foreign policy.",
   accountability:"US Congress hearings (2023) and attempted bans. EU Digital Services Act applies but enforcement is slow. ByteDance structural separation proposals (Project Texas) remain unverified by independent auditors. No ASEAN regulator has subjected TikTok to content moderation audits. Citizen Lab research has documented algorithm suppression of politically sensitive content. No binding audit of the recommendation algorithm has been conducted in any jurisdiction.",
   keyEvidence:"Citizen Lab 'TikTok's Shifting Policies on Discussion of Xinjiang' (2021); The Guardian investigation into TikTok content moderation guidelines (2023); Washington Post analysis of TikTok political content suppression (2022); Australian Strategic Policy Institute research on TikTok data practices (2023).",},
  {id:"wechat",name:"WeChat / Tencent",bloc:"cn",type:"Messaging / Platform",hq:"China",
   countries:["Singapore","Malaysia","Thailand","Indonesia"],
   desc:"Primary communication platform for Chinese diaspora communities across ASEAN. Subject to Chinese censorship and surveillance laws regardless of user location.",
   threat:"WeChat operates as primary communication infrastructure for Chinese diaspora communities and Chinese-invested businesses across ASEAN — putting a significant portion of political, commercial, and personal communication among Southeast Asian elites directly within Chinese legal jurisdiction. Citizen Lab has documented WeChat's real-time political keyword monitoring and content censorship outside China. Business people negotiating with Chinese partners, politicians communicating with Chinese-linked constituents, and community leaders discussing sensitive issues are all operating in a Chinese-monitored environment, whether or not they know it.",
   power:"Network effects in Chinese diaspora communities, Chinese censorship and surveillance mandatory under law, cross-border communication dependency creates leverage, political and business conversation monitoring.",
   ref:"https://citizenlab.ca/2020/05/we-chat-they-watch/"},
  {id:"google",name:"Google / Alphabet",bloc:"us",type:"Search / Platform",hq:"USA",
   countries:["All ASEAN"],
   desc:"Dominant search engine, video platform (YouTube), and cloud provider. Critical information access and advertising infrastructure across all ASEAN states.",
   threat:"Google's dominance in search and video means it acts as the primary gatekeeper of information access for hundreds of millions in ASEAN. YouTube's content moderation failures in local languages mirror Facebook's structural issues. Google's advertising infrastructure funds a significant portion of online political disinformation. Its cooperation with US government data requests means ASEAN user data is accessible to US intelligence. Google's growing government cloud contracts embed US legal jurisdiction into state data infrastructure.",
   power:"Search monopoly, YouTube dominance, advertising infrastructure funds political content, CLOUD Act data exposure, growing government cloud contracts.",
   ref:"https://freedomhouse.org/report/freedom-net"},
  {id:"aws",name:"Amazon Web Services",bloc:"us",type:"Cloud Infrastructure",hq:"USA",
   countries:["Singapore","Indonesia","Malaysia","Thailand","Philippines"],
   desc:"Dominant cloud provider across ASEAN enterprise and government. US CLOUD Act creates legal jurisdiction over all data stored, including sensitive ASEAN government data.",
   threat:"AWS's threat is structural: by hosting classified and sensitive government workloads, it embeds US legal jurisdiction into ASEAN state data. The CLOUD Act allows US law enforcement and intelligence agencies to demand data from US companies regardless of where it is physically stored — without the knowledge of the foreign government whose data it is. ASEAN governments signing AWS contracts are agreeing to store their most sensitive operational data in a jurisdiction legally accessible to a foreign power.",
   power:"Technical dominance, CLOUD Act extraterritorial jurisdiction, deep US intelligence community integration, switching costs make extraction extremely difficult once embedded.",
   ref:"https://crsreports.congress.gov/product/pdf/LSB/LSB10048"},
  {id:"microsoft-azure",name:"Microsoft Azure",bloc:"us",type:"Cloud Infrastructure",hq:"USA",
   countries:["Singapore","Indonesia","Malaysia","Thailand","Philippines"],
   desc:"Second cloud provider. Azure, Teams, and Office 365 embedded across ASEAN government workflows. CLOUD Act exposure applies to all data.",
   threat:"Microsoft's dominance through Office 365 and Teams means the day-to-day operational communications of ASEAN government ministries, NGOs, and businesses flow through US-owned infrastructure subject to US legal jurisdiction. The integration of OpenAI's GPT-4 into Microsoft 365 Copilot introduces AI into government workflows with minimal transparency. Microsoft's security products deeply embedded in government security architecture create a single US vendor dependency across both productivity and security.",
   power:"Office productivity monopoly creates switching barrier, CLOUD Act exposure, AI integration normalises US AI governance norms, security product dominance.",
   ref:"https://www.microsoft.com/en-us/trust-center/privacy/gdpr-overview"},
  {id:"google-cloud",name:"Google Cloud",bloc:"us",type:"Cloud Infrastructure",hq:"USA",
   countries:["Singapore","Indonesia","Thailand"],
   desc:"Third major cloud provider. Growing government AI partnerships across ASEAN. CLOUD Act jurisdiction applies.",
   threat:"Google Cloud's growing ASEAN government footprint introduces US AI governance norms into public sector deployments without equivalent transparency requirements to those Google faces domestically. Like AWS and Microsoft, all data is subject to CLOUD Act jurisdiction. Google's dominance in Maps, Search, and YouTube creates additional data collection that can be integrated with cloud infrastructure to build detailed population profiles.",
   power:"AI product leadership, Maps and Search data integration, CLOUD Act exposure, growing public sector AI contracts without binding governance requirements.",
   ref:"https://cloud.google.com/security/compliance"},
  {id:"alibaba-cloud",name:"Alibaba Cloud",bloc:"cn",type:"Cloud Infrastructure",hq:"China",
   countries:["Singapore","Indonesia","Malaysia","Thailand"],
   desc:"Largest Chinese cloud provider. More ASEAN availability zones than AWS. National Intelligence Law means all data is accessible to Chinese state on demand.",
   threat:"Alibaba Cloud has aggressively expanded its ASEAN data centre footprint, often offering prices significantly below AWS and Azure. Its integration with the broader Alibaba ecosystem — e-commerce, logistics, payments — creates comprehensive data portraits of users and businesses. As a Chinese company, Alibaba Cloud operates under the National Intelligence Law, meaning Chinese state intelligence can demand access to any data on its infrastructure without needing to notify the data subject, the customer government, or any court.",
   power:"Competitive pricing undercuts Western alternatives, National Intelligence Law mandatory data exposure, e-commerce ecosystem data integration, technical training creates skill lock-in.",
   ref:"https://www.csis.org/analysis/understanding-data-flows-china"},
  {id:"huawei-cloud",name:"Huawei Cloud",bloc:"cn",type:"Cloud / Telecom",hq:"China",
   countries:["Malaysia","Thailand","Cambodia","Laos","Myanmar","Indonesia"],
   desc:"Bundled with 5G infrastructure. Government cloud in lower-income ASEAN markets. National Intelligence Law exposure.",
   threat:"Huawei Cloud's primary power comes from its integration with Huawei's telecoms infrastructure — the two are frequently deployed together, creating a vertically integrated Chinese technology stack that controls both the communications layer and the cloud computing layer. In Cambodia, Laos, and Myanmar, Huawei Cloud has become the default government cloud not through competitive procurement but as part of BRI infrastructure packages.",
   power:"Vertical integration with 5G creates lock-in, BRI bundling bypasses procurement competition, National Intelligence Law, dominant in markets with weakest regulatory capacity.",
   ref:"https://csis.org/analysis/huawei-and-5g-what-you-need-know"},
  {id:"alipay",name:"Alipay / Ant Group",bloc:"cn",type:"Fintech / Payments",hq:"China",
   countries:["Singapore","Thailand","Malaysia","Cambodia","Indonesia"],
   desc:"Dominant Chinese digital payment platform. Significant retail penetration. Credit scoring system uses social behaviour data creating compliance incentives.",
   threat:"Alipay's expansion creates a parallel financial infrastructure with Chinese legal jurisdiction. Its Sesame Credit scoring system — which incorporates social behaviour, purchasing patterns, and social network data — represents a model of financial access that makes creditworthiness dependent on social compliance. As Alipay expands its merchant network, local businesses and consumers are building financial histories in Chinese-jurisdictioned systems, accessible to Chinese state intelligence, and subject to potential financial exclusion if political relationships with China deteriorate.",
   power:"Dominant in Chinese tourist economies, Sesame Credit creates compliance incentives, financial data subject to National Intelligence Law, merchant dependency once embedded.",
   ref:"https://www.piie.com/blogs/realtime-economics/chinas-race-finish-digital-yuan"},
  {id:"wechat-pay",name:"WeChat Pay / Tencent",bloc:"cn",type:"Fintech / Payments",hq:"China",
   countries:["Singapore","Malaysia","Thailand","Cambodia"],
   desc:"Retail payments integrated with WeChat surveillance ecosystem. Payment and communication data combined in a single Chinese-controlled platform.",
   threat:"WeChat Pay's integration with WeChat messaging means that payment data and communication data are held in the same Chinese-controlled ecosystem. Transaction data reveals patterns of political organisation, religious activity, and social association. For diaspora communities using WeChat Pay for community fundraising or support activities, this creates a surveillance profile of community political life legally accessible to Chinese state intelligence.",
   power:"Integrated with WeChat surveillance ecosystem, payment + communication data combination, Chinese diaspora network effects, National Intelligence Law.",
   ref:"https://www.bis.org/review/r191105c.pdf"},
  {id:"visa",name:"Visa",bloc:"us",type:"Payments Infrastructure",hq:"USA",
   countries:["All ASEAN"],
   desc:"Dominates cross-border payments across ASEAN. US government sanctions can direct Visa to block transactions, cutting targeted entities off from the global financial system.",
   threat:"Visa's dominance in cross-border payments creates a structural US leverage point: US government sanctions can direct Visa to block transactions involving sanctioned parties, cutting targeted individuals, organisations, or governments off from the global financial system. For civil society organisations receiving foreign funding in ASEAN, Visa-based payments are subject to US financial monitoring under anti-money-laundering regimes. Politically inconvenient organisations in US-aligned ASEAN states have reported difficulty maintaining banking relationships that process Visa transactions.",
   power:"Transaction monopoly creates blocking leverage, US sanctions implementation infrastructure, AML compliance monitoring, fee extraction from developing markets.",
   ref:"https://hbr.org/2020/01/who-profits-from-the-global-payments-system"},
  {id:"mastercard",name:"Mastercard",bloc:"us",type:"Payments Infrastructure",hq:"USA",
   countries:["All ASEAN"],
   desc:"Co-dominant with Visa. Its 2022 withdrawal from Russia demonstrated how rapidly US financial infrastructure can be weaponised to exclude a population from the global economy.",
   threat:"Mastercard operates in structural parallel to Visa as a US-controlled financial chokepoint. Its 2022 withdrawal from Russia demonstrated how rapidly US financial infrastructure can exclude a population from the global economy. For smaller ASEAN states with political tensions with the US, the Mastercard/Visa duopoly represents a vulnerability: US government pressure could rapidly sever these states from cross-border payment systems. This vulnerability shapes political alignment calculations in ways rarely acknowledged publicly.",
   power:"Structural payment monopoly alongside Visa, sanctions enforcement capacity, rapid deployment capability demonstrated in Russia, implicit political leverage even without active use.",
   ref:"https://hbr.org/2020/01/who-profits-from-the-global-payments-system"},
  {id:"openai",name:"OpenAI / GPT (via Microsoft)",bloc:"us",type:"AI / LLM",hq:"USA",
   countries:["Singapore","Thailand","Indonesia","Philippines"],
   desc:"GPT-4/4o integrated into Microsoft government cloud products. Government AI pilots across ASEAN with no binding regional governance requirements.",
   threat:"OpenAI's integration into Microsoft's government cloud means GPT-4-class AI is entering ASEAN government workflows without binding governance requirements. Performance degrades in non-English contexts, creating inaccurate automated decisions affecting real people. Data retention practices may expose sensitive government queries to US intelligence access. The AI governance commitments OpenAI has made are voluntary, US-centric, and subject to revision at any time.",
   power:"Microsoft ecosystem integration embeds AI into existing workflows, voluntary governance commitments are non-binding outside US, CLOUD Act exposure, English-language bias creates systematic errors.",
   ref:"https://openai.com/research/governance"},
  {id:"google-ai",name:"Google DeepMind / Gemini",bloc:"us",type:"AI / LLM",hq:"USA",
   countries:["Singapore","Indonesia","Thailand"],
   desc:"Gemini AI products. Growing ASEAN government partnerships. English-centric training with limited local language capability.",
   threat:"Google's AI products are being deployed in high-stakes ASEAN contexts — healthcare diagnosis, legal document processing, public service delivery — without transparency requirements equivalent to European or US domestic deployments. Google's AI governance commitments are made under US domestic political pressure and have no binding force in ASEAN jurisdictions. The combination of dominant search data with cloud deployment creates comprehensive coverage of how ASEAN populations think about and discuss political and social issues.",
   power:"Search data monopoly enables training advantage, cloud integration creates deployment pathway, governance commitments non-binding in ASEAN, CLOUD Act exposure.",
   ref:"https://deepmind.google/about/"},
  {id:"sensetime-ai",name:"SenseTime (AI Products)",bloc:"cn",type:"AI / Smart City",hq:"China",
   countries:["Singapore","Malaysia","Thailand","Indonesia"],
   desc:"China's largest AI company. Smart city AI and content moderation AI deployed across ASEAN government and enterprise — despite US Entity List designation.",
   threat:"SenseTime's AI products are explicitly designed for population monitoring at scale. Its content moderation AI can be configured to suppress politically sensitive content according to Chinese-defined categories. Its smart city AI integrates traffic, public safety, and population movement data into unified government dashboards. Despite US Entity List designation, SenseTime has expanded its ASEAN presence, particularly via joint ventures and local branding that obscures Chinese ownership.",
   power:"World-leading facial recognition accuracy, government AI dashboard integration, Entity List not enforced in most ASEAN markets, local branding obscures Chinese ownership.",
   ref:"https://www.ft.com/content/a5caccb4-0d38-11e9-a3aa-118c761d2745"},
  {id:"baidu",name:"Baidu AI / ERNIE Bot",bloc:"cn",type:"AI / LLM",hq:"China",
   countries:["Malaysia","Thailand","Indonesia"],
   desc:"Leading Chinese large language model. Positioned as the sovereignty-respecting alternative to OpenAI for governments wary of US cloud dependency.",
   threat:"Baidu's ERNIE large language model is being positioned as the Chinese alternative to OpenAI for ASEAN governments wary of US cloud dependency. Baidu AI systems are required by Chinese law to ensure outputs 'embody core socialist values' and do not undermine CCP authority — requirements embedded in the AI's training and filtering architecture. Governments deploying Baidu AI systems are importing Chinese information governance norms into their own AI infrastructure.",
   power:"Chinese and Asian language capability advantage over US models, positioned as sovereignty alternative to US AI, Chinese information governance norms embedded in architecture, National Intelligence Law.",
   ref:"https://www.technologyreview.com/2023/08/31/1078543/ernie-baidu-gen-ai/"},
  {id:"huawei-ai",name:"Huawei AI (Ascend / PanGu)",bloc:"cn",type:"AI / Hardware",hq:"China",
   countries:["Malaysia","Thailand","Cambodia","Laos","Indonesia"],
   desc:"AI hardware (Ascend chips) and AI models (PanGu) bundled with telecom and cloud infrastructure. Alternative to Nvidia where US export controls apply.",
   threat:"Huawei AI is particularly dangerous because it is bundled with infrastructure governments have already procured. Governments with Huawei 5G and Huawei Cloud are natural targets for Huawei's AI products, presented as extensions of existing infrastructure. Huawei's Ascend AI chips are positioned as alternatives to Nvidia GPUs where US export controls restrict chip supply — creating a pathway for Chinese AI hardware to become the foundation of ASEAN AI development.",
   power:"Infrastructure bundling bypasses AI procurement scrutiny, export control gap, PanGu model integrated with SafeCity surveillance, National Intelligence Law.",
   ref:"https://www.huawei.com/en/technology-insights/artificial-intelligence"},
  {id:"asean-secretariat",name:"ASEAN Secretariat",bloc:"both",type:"Regional Body",hq:"Jakarta",
   countries:["All ASEAN"],
   desc:"Coordinates DEFA negotiations, ASEAN Smart Cities Network, regional AI governance, and cybersecurity frameworks. Committed to ASEAN centrality and independence from both blocs.",
   threat:"The ASEAN Secretariat is not a threat actor but a critical accountability battleground. Both blocs are actively attempting to shape its regulatory outputs — particularly the DEFA negotiations. The Secretariat's institutional weakness (limited budget, consensus-requirement, member state resistance to strong regulation) means it frequently defaults to the lowest common denominator — which in practice means the governance model most comfortable to the most China-aligned members.",
   power:"Treaty-making authority for DEFA, sets normative framework for ASEAN digital governance, convenes regional technical working groups, can establish accountability standards if member states allow.",
   ref:"https://asean.org/asean2025-forging-ahead-together/"},
  {id:"itu",name:"ITU (International Telecommunication Union)",bloc:"both",type:"Standards Body",hq:"Geneva",
   countries:["Global"],
   desc:"UN body setting global telecom and internet standards. China pushing 'New IP' alternative to TCP/IP that would build state control into internet routing architecture.",
   threat:"The ITU is the primary battleground for internet governance norms. China has proposed replacing foundational TCP/IP protocols with 'New IP' — a protocol architecture that would build state control of internet routing into the infrastructure layer, enabling governments to cut off individuals or organisations at the network level. If adopted, this would transform the internet from a network designed to route around censorship into one designed to enable it. ASEAN states' votes are actively lobbied by both blocs.",
   power:"Sets binding global telecom standards, New IP proposal would enable state internet kill switch infrastructure, ASEAN vote bloc is consequential in contested decisions.",
   ref:"https://www.itu.int/en/Pages/default.aspx"},
  {id:"wto",name:"WTO e-commerce / JSI",bloc:"both",type:"Trade Governance",hq:"Geneva",
   countries:["Global"],
   desc:"WTO Joint Statement Initiative on e-commerce has 90+ participating members. China and US both participating with conflicting agendas — both seeking to lock in their respective governance models.",
   threat:"The WTO JSI is attempting to set binding global rules on digital trade — cross-border data flows, platform liability, source code protection, customs duties on electronic transmissions. Both US and Chinese negotiating positions would embed their respective governance models as global defaults. Civil society has minimal representation in JSI negotiations.",
   power:"Sets binding trade rules on digital economy, both blocs using trade law to lock in governance models globally, civil society effectively excluded from negotiations.",
   ref:"https://www.wto.org/english/tratop_e/ecom_e/joint_statement_e.htm"},
  {id:"apt-groups",name:"Chinese State APT Groups",bloc:"cn",type:"Offensive Cyber",hq:"China",
   countries:["All ASEAN"],
   desc:"PLA Unit 61398, APT40, APT41, and other Chinese state-attributed groups conducting active cyber espionage across ASEAN governments and civil society.",
   threat:"Chinese state-sponsored APT groups represent a persistent, well-resourced, and technically sophisticated threat to ASEAN governments, corporations, and civil society. APT40 has conducted extensive espionage against ASEAN naval and maritime targets. APT41 conducts both state espionage and financially motivated attacks. Documented ASEAN targets include Myanmar opposition groups, Vietnamese government networks, Philippines' arbitration case documentation, Indonesian natural resource ministry systems, and Tibetan and Uyghur diaspora communities.",
   power:"State resources and legal impunity, zero-day vulnerability access, long-dwell persistent access (months to years undetected), ability to compromise encryption and secure communications.",
   ref:"https://www.mandiant.com/resources/apt41-dual-espionage-and-cyber-crime-operation"},
  {id:"crowdstrike",name:"CrowdStrike / US Cyber Vendors",bloc:"us",type:"Cybersecurity",hq:"USA",
   countries:["Singapore","Philippines","Indonesia","Thailand"],
   desc:"Dominant US cybersecurity vendor. Creates significant US private sector dependency in critical security infrastructure across US-aligned ASEAN states.",
   threat:"CrowdStrike and equivalent US cybersecurity vendors (Palo Alto Networks, Mandiant/Google, Microsoft Defender) dominate ASEAN enterprise and government security infrastructure. While not actively hostile, this dominance creates structural risks: security vendors have unprecedented access to the systems they protect, including visibility into vulnerabilities, attack patterns, and government adversaries. The 2024 CrowdStrike global IT outage demonstrated the systemic risk of concentrating critical security infrastructure in a single vendor.",
   power:"Deep access to protected systems as condition of service, US intelligence community relationships, government security infrastructure dependency, attribution analysis shapes political narratives.",
   ref:"https://www.crowdstrike.com/blog/tech-center/crowdstrike-falcon-platform/"}
];

const COUNTRIES = [
  {
    id:"sg",name:"Singapore",lean:"hedge",leanLabel:"Strategic Hedger",flag:"🇸🇬",
    desc:"Singapore is the archetypal ASEAN balancer and the region's undisputed digital hub. It hosts AWS, Google Cloud, Microsoft Azure, Alibaba Cloud, and Tencent data centres simultaneously — more hyperscale infrastructure per capita than almost anywhere on earth. Singapore's approach is not neutrality but deliberate dual-engagement: it maintains Five Eyes-adjacent intelligence arrangements with the US, UK, Australia, and New Zealand while simultaneously welcoming Chinese tech investment and serving as the regional headquarters of Chinese cloud providers.\n\nSingapore has the most sophisticated data protection framework in ASEAN (PDPA, significantly strengthened in 2021) and has led the region in bilateral Digital Economy Agreements with Australia, UK, South Korea, and Chile — agreements that establish interoperable digital governance standards without aligning with either bloc's model.\n\nThe political risk for Singapore is that the space to hedge narrows as US-China tech decoupling accelerates. Singapore's value as a dual hub depends on both blocs accepting its neutrality — a condition that cannot be assumed indefinitely.",
    usPresence:"Very High — AWS, Microsoft Azure, and Google Cloud all have flagship Southeast Asia data centres in Singapore. Five Eyes-adjacent intelligence cooperation. Singapore Armed Forces deep US equipment integration. Major US bank and tech company APAC headquarters.",
    cnPresence:"Very High — Alibaba Cloud and Tencent Cloud major infrastructure. Largest Chinese diaspora in ASEAN with WeChat/Alipay deeply embedded. Huawei active in enterprise and some government networks. Singapore-China Comprehensive Partnership.",
    keyLaw:"Personal Data Protection Act 2012 (amended 2021) — among the strongest in ASEAN but does not prevent CLOUD Act or National Intelligence Law extraterritorial access",
    digitalRightsContext:"Singapore's government actively prosecutes criticism using POFMA fake news law and Online Safety Act. The same surveillance infrastructure deployed for 'public safety' has been used against political activists. Civil society digital rights space is constrained.",
    alignmentReasoning:"Scores Hedge because Singapore maintains deep institutional relationships with both blocs simultaneously and has structured its digital governance to avoid forcing a choice. Leans more toward the US in security and intelligence relationships but has made no exclusive commitment.",
    refs:["https://www.pdpc.gov.sg/","https://www.mci.gov.sg/digital-economy","https://www.accessnow.org/singapore-online-safety/"]
  },
  {
    id:"id",name:"Indonesia",lean:"hedge",leanLabel:"Strategic Hedger",flag:"🇮🇩",
    desc:"Indonesia is the largest ASEAN economy and the most important digital battleground in the region. With 277 million people, it is the world's fourth most populous nation — and its data economy is the most significant prize in Southeast Asia. Both blocs have invested heavily: AWS and Alibaba are both building major data centres in Batam and Jakarta, while Huawei and Microsoft both hold significant government IT contracts.\n\nIndonesia's data localisation law (GR 71/2019) requires domestic storage of 'strategic sector' data, creating an incentive for both blocs to establish local infrastructure. The Personal Data Protection Law (2022) — long delayed — provides a legal framework but has limited independent enforcement capacity.\n\nPrabowo Subianto's administration (from October 2024) is more security-focused and more cautious about China than the Jokowi era, but economic dependencies — particularly on Chinese manufacturing investment and BRI infrastructure financing — constrain any sharp turn toward the US.",
    usPresence:"High — AWS building major Batam data centre, Microsoft enterprise dominant, Google growing cloud and AI partnerships. US-Indonesia Comprehensive Partnership deepened under Prabowo.",
    cnPresence:"High — Alibaba dominant in e-commerce via Tokopedia, TikTok major platform, Hikvision smart city deployments, Huawei 5G in some regions.",
    keyLaw:"Personal Data Protection Law (UU PDP) 2022, Government Regulation 71/2019 on Electronic Systems — data localisation for strategic sectors",
    digitalRightsContext:"Electronic Information and Transactions Law (ITE Law) has been used extensively to prosecute online criticism and dissent. Civil society digital rights space is constrained by broad defamation provisions. Government surveillance of activists documented.",
    alignmentReasoning:"Scores Hedge because Indonesia has maintained strategic non-alignment despite significant pressure from both blocs. Economic ties to China are deep; security and political ties to the US are significant. Neither bloc has achieved strategic alignment.",
    refs:["https://www.kominfo.go.id/","https://safenet.or.id/","https://accessnow.org/indonesia"]
  },
  {
    id:"my",name:"Malaysia",lean:"cn",leanLabel:"Leaning China",flag:"🇲🇾",
    desc:"Malaysia presents the clearest case of a middle-income ASEAN state being structurally pulled toward Chinese tech dependence despite maintaining a surface-level hedge. The Anwar Ibrahim government signed a Huawei MOU for 5G infrastructure despite sustained US pressure — a decision driven by cost (Huawei bids 30-40% cheaper than Ericsson/Nokia), Chinese state financing terms, and domestic political calculations. The ECRL Belt and Road rail project, now operational, links Malaysia's east and west coasts.\n\nMalaysia's growing Johor data centre cluster is a notable exception to the pro-China tilt: Amazon, Google, and Microsoft are all building hyperscale facilities there, creating an interesting dual-bloc infrastructure concentration — Chinese 5G carrying traffic to Western cloud infrastructure.\n\nMalaysia has a functional Personal Data Protection Act (2010, though widely seen as inadequate) and an engaged civil society on digital rights issues, particularly around surveillance of political opposition.",
    usPresence:"Medium — AWS, Google, Microsoft building in Johor Data Corridor. US-Malaysia defence relationship maintained. Western enterprise cloud dominant in financial sector.",
    cnPresence:"High — Huawei 5G lead vendor (MOU signed 2023), Alibaba Cloud significant, TikTok major platform, ECRL operational, growing smart city surveillance (Hikvision, Dahua).",
    keyLaw:"Personal Data Protection Act 2010 — widely viewed as inadequate; limited enforcement, no independent commissioner",
    digitalRightsContext:"Communications and Multimedia Act used to prosecute political speech online. Surveillance of opposition politicians documented. Freedom of expression constrained. Civil society active but under pressure.",
    alignmentReasoning:"Scores Leaning China because Malaysia has made several key decisions favouring Chinese tech infrastructure over Western alternatives — particularly the Huawei 5G MOU — despite US pressure. Economic dependency on China (largest trading partner) reinforces this lean.",
    refs:["https://www.pdp.gov.my/","https://suhakam.org.my/","https://www.thestar.com.my/tech"]
  },
  {
    id:"th",name:"Thailand",lean:"hedge",leanLabel:"Military Hedger",flag:"🇹🇭",
    desc:"Thailand occupies an unusual position: a longstanding US military ally (EDCA exercises continue) governed since 2014 by a military-influenced establishment that has deliberately diversified away from US political dependence while maintaining security cooperation. The result is a state that buys weapons from both blocs (US F-16s and Chinese submarines), hosts both US and Chinese cloud infrastructure, and has been targeted by both US-allied (Pegasus) and Chinese-adjacent surveillance tools.\n\nThailand's digital economy has become one of the most active in ASEAN: $2.7B in data centre investment was approved in 2025, BYD established its first Southeast Asian factory there in 2024, and TikTok is dominant among younger Thais.\n\nThailand's digital rights environment is among the most concerning in the region outside Myanmar and Cambodia. The Computer Crime Act has been used aggressively against political activists, journalists, and critics of the monarchy. Lèse-majesté enforcement has moved heavily into the digital space.",
    usPresence:"Medium — EDCA military exercises, Palantir expanding engagement, Pegasus documented on Thai activist devices (Citizen Lab), AWS and Microsoft enterprise presence.",
    cnPresence:"High — Huawei 5G active, TikTok dominant youth platform, Alibaba Cloud growing, Hikvision smart city CCTV, BYD major manufacturing investment.",
    keyLaw:"Personal Data Protection Act B.E. 2562 (2019) — in force from 2022. Computer Crime Act (2007, amended 2017) — extensively used against political speech.",
    digitalRightsContext:"Computer Crime Act and lèse-majesté law create significant chilling effects on digital expression. Activists have been arrested for social media posts. Citizen Lab documented Pegasus targeting of Thai pro-democracy activists and civil society in 2022.",
    alignmentReasoning:"Scores Hedge despite significant Chinese tech presence because Thailand maintains active US military cooperation, Western enterprise cloud dominance in banking and finance, and has not made the structural 5G commitment Malaysia has.",
    refs:["https://www.pdpc.or.th/","https://citizenlab.ca/2022/07/geckospy-pegasus-spyware-used-against-thailand-civil-society/","https://www.accessnow.org/thailand/"]
  },
  {
    id:"ph",name:"Philippines",lean:"us",leanLabel:"US-Aligned",flag:"🇵🇭",
    desc:"The Philippines is the most overtly US-aligned ASEAN state, with a relationship that has deepened significantly under the Marcos administration. The Enhanced Defence Cooperation Agreement (EDCA) was expanded in 2023 to cover additional military bases, US forces have rotational presence, and the Philippines-US mutual defence treaty is being operationalised with new specificity around the South China Sea.\n\nYet the Philippines presents the most dramatic example of the gap between geopolitical alignment and digital infrastructure reality: DITO Telecom — a joint venture with China Telecom (a PLA-linked state enterprise) — is the country's third-largest mobile carrier, covering tens of millions of subscribers. DITO's continued operation despite US pressure reflects the limits of political alignment when economic relationships are involved.\n\nFacebook has uniquely deep penetration in the Philippines — Filipinos consistently rank among the world's highest Facebook users per capita. Facebook's role in the Duterte administration's online disinformation campaigns and its subsequent failures on political content moderation make the Philippines a case study in US platform power enabling democratic backsliding.",
    usPresence:"Very High — EDCA military presence (5 bases), Palantir engagement with AFP, Facebook dominant platform, AWS and Microsoft enterprise. US-Philippines alliance treaty.",
    cnPresence:"Medium-High — DITO Telecom (China Telecom JV) as third carrier, TikTok major platform, Alibaba e-commerce presence, South China Sea infrastructure concerns.",
    keyLaw:"Data Privacy Act 2012 (Republic Act 10173) — National Privacy Commission as enforcement body, relatively active by ASEAN standards",
    digitalRightsContext:"Rappler and other independent media targeted by government legal action. Journalists and activists face online harassment campaigns. DITO national security review ongoing. Duterte-era disinformation infrastructure remains active.",
    alignmentReasoning:"Scores US-Aligned because the Philippines has made the most explicit choice toward US security alignment in the region — EDCA expansion, treaty reactivation, South China Sea positions. The DITO paradox shows even the most US-aligned ASEAN state cannot fully separate from Chinese tech.",
    refs:["https://www.privacy.gov.ph/","https://www.rappler.com/technology/","https://citizenlab.ca/2021/07/philippines-human-rights-defenders-targeted-by-netsarang-supply-chain-attack/"]
  },
  {
    id:"vn",name:"Vietnam",lean:"hedge",leanLabel:"Dual Partnership",flag:"🇻🇳",
    desc:"Vietnam's foreign policy doctrine — 'Three Nos' (no alliances, no foreign military bases, no alignment against any country) — has come under severe pressure as US-China competition intensifies. Vietnam's resolution of this pressure has been the most sophisticated in ASEAN: it upgraded to Comprehensive Strategic Partnership with both the United States AND China in 2023, making it the only country in the world with that status with both superpowers simultaneously.\n\nVietnam's digital governance model is closer to China's than any other ASEAN state outside Cambodia: the 2018 Cybersecurity Law requires platforms to store Vietnamese user data domestically and cooperate with government data requests — provisions modelled directly on Chinese legislation. Yet Vietnam maintains significant political independence from China, shaped by centuries of conflictual history and the South China Sea disputes.\n\nVietnam is positioning itself as the leading ASEAN semiconductor manufacturing hub, with major Intel, Samsung, and LG facilities, and growing interest from TSMC supply chain companies.",
    usPresence:"Medium-High — Comprehensive Strategic Partnership 2023, Intel major manufacturing presence, AWS entering market, US-Vietnam semiconductor partnership growing.",
    cnPresence:"Medium — Huawei equipment under security review, TikTok platform (heavy use), Alibaba. Cybersecurity law modelled on Chinese framework. Historical tensions with China limit full dependency.",
    keyLaw:"Law on Cybersecurity 2018 — data localisation, government access requirements, mirrors Chinese model. Decree 13/2023 on Personal Data Protection.",
    digitalRightsContext:"Vietnam has one of the highest rates of journalist and activist imprisonment for online expression in Asia. The Cybersecurity Law is actively enforced against critical speech. Facebook and Google comply with Vietnamese government content removal requests at scale.",
    alignmentReasoning:"Scores Hedge because Vietnam has achieved the most sophisticated dual-partnership in ASEAN — Comprehensive Strategic Partnerships with both superpowers — while maintaining genuine political independence. Its cybersecurity law alignment with China does not reflect political alignment.",
    refs:["https://www.accessnow.org/vietnam-cybersecurity-law/","https://www.hrw.org/world-report/2024/country-chapters/vietnam","https://csis.org/analysis/us-vietnam-comprehensive-strategic-partnership"]
  },
  {
    id:"kh",name:"Cambodia",lean:"cn",leanLabel:"China-Aligned",flag:"🇰🇭",
    desc:"Cambodia is the most openly China-aligned ASEAN state, and represents the clearest case study of what full digital dependency on China looks like in practice. Under the Hun Sen and now Hun Manet family dynasty, Cambodia has built its political survival on Chinese support — economic, diplomatic, and technological.\n\nChinese tech companies dominate Cambodia's entire digital infrastructure: ZTE and Huawei for telecoms, Hikvision and Dahua for nationwide CCTV, China Telecom for carrier services. The Ream Naval Base, developed with Chinese financing and reported to include a Chinese military presence, represents a structural alignment with China's military posture.\n\nCambodia's Sub-Decree 23 on the National Internet Gateway (2021) — which routes all internet traffic through a government-controlled gateway — was modelled on Chinese governance frameworks and developed with Chinese technical assistance. This law represents the most complete adoption of the Chinese internet sovereignty model outside China itself.",
    usPresence:"Very Low — US sanctions pressure due to governance issues. Facebook used by population but US diplomatic and technical engagement minimal.",
    cnPresence:"Very High — ZTE/Huawei telecoms dominant, Hikvision nationwide CCTV, Chinese internet governance model, Ream Naval Base, National Internet Gateway (Chinese technical assistance).",
    keyLaw:"Sub-Decree 23 on National Internet Gateway (2021) — enables full traffic surveillance and censorship at national level",
    digitalRightsContext:"Cambodia has one of the worst digital rights records in ASEAN. Independent media has been systematically shut down. Opposition politicians and civil society face surveillance and persecution. Sub-Decree 23 enables real-time monitoring of all internet communications.",
    alignmentReasoning:"Scores China-Aligned because Cambodia has made the most complete adoption of Chinese tech infrastructure and governance norms of any ASEAN state. Chinese tech dependency is structural, not incidental. The government's political survival depends on Chinese support.",
    refs:["https://www.article19.org/resources/cambodia-internet-gateway/","https://freedomhouse.org/country/cambodia/freedom-net/2023","https://www.accessnow.org/cambodia/"]
  },
  {
    id:"mm",name:"Myanmar",lean:"cn",leanLabel:"Post-Coup: China-Dependent",flag:"🇲🇲",
    desc:"Myanmar's digital rights situation is among the worst in the world and represents a case study in how tech infrastructure from both blocs can be weaponised against a population by an authoritarian government.\n\nBefore the February 2021 military coup, Facebook had become the primary internet for most of the population. The military's use of Facebook for genocide-inciting propaganda against the Rohingya (2017) was the first major documented case of a US platform contributing to an atrocity at scale. The UN Fact-Finding Mission explicitly cited Facebook's role.\n\nAfter the coup, Western companies largely withdrew. The military junta deepened its Chinese tech dependency — Huawei, ZTE, and China Telecom became dominant carriers. Chinese surveillance equipment was deployed to support the military's crackdown on pro-democracy protesters.\n\nMyanmar now presents a situation where Chinese infrastructure enables authoritarian control and US platforms enabled the preceding genocide — both blocs have contributed to catastrophic digital rights outcomes, through different mechanisms.",
    usPresence:"High harm, low current engagement — Facebook's algorithms contributed to Rohingya genocide (documented by UN). Post-coup, most US companies withdrew. Meta faces ongoing lawsuits.",
    cnPresence:"Very High — Huawei, ZTE, China Telecom dominant post-coup. Chinese surveillance equipment used against protesters. Junta receives Chinese diplomatic protection and digital governance assistance.",
    keyLaw:"Electronic Transactions Law (military-amended 2021). Cybersecurity Law (drafted, partially implemented administratively) — enables network surveillance and censorship.",
    digitalRightsContext:"Catastrophic. Military conducting systematic digital surveillance of pro-democracy activists. Internet shutdowns, network throttling. Activists arrested based on social media and messaging content. Exile NLD government maintains some digital presence but operates under constant digital attack.",
    alignmentReasoning:"Scores China-Dependent (not 'Aligned') because the junta's relationship with China is driven by political survival and economic necessity rather than ideological alignment. The NLD-aligned population is significantly more pro-Western, creating a split context.",
    refs:["https://www.ohchr.org/en/hr-bodies/hrc/myanmar-ffm/report","https://www.accessnow.org/myanmar-digital-rights-under-junta/","https://www.fortifyrights.org/"]
  },
  {
    id:"la",name:"Laos",lean:"cn",leanLabel:"BRI-Dependent",flag:"🇱🇦",
    desc:"Laos is the ASEAN state with the least digital sovereignty and the most complete Chinese infrastructure dependency. It is also among the least documented cases for digital rights — the country's small population, limited independent media, and tightly controlled information environment mean the full picture of Chinese tech power here is not well understood.\n\nThe Kunming-Vientiane Railway, completed in December 2021, is the flagship BRI project in ASEAN — a Chinese-financed, Chinese-built, Chinese-operated rail link connecting Laos to Yunnan province. The railway carries significant debt (roughly half of Laos's GDP), creating leverage that constrains government policy space.\n\nLaos's telecommunications infrastructure is dominated by Huawei and ZTE. The government has adopted internet governance frameworks that allow significant state monitoring of communications. Laos receives minimal Western digital investment or diplomatic engagement, making it effectively ceded to the Chinese bloc by default.",
    usPresence:"Minimal — very limited US digital investment, diplomatic engagement, or governance presence.",
    cnPresence:"Very High — Kunming-Vientiane Railway, Huawei 5G, near-total Chinese telecom dependency, Chinese internet governance framework, Chinese technical training for government IT staff.",
    keyLaw:"Law on Electronic Data Protection (2017) — limited implementation and enforcement",
    digitalRightsContext:"Laos has virtually no independent domestic digital rights civil society. The state controls all major media. Online political expression is monitored but enforcement is inconsistent due to limited technical capacity.",
    alignmentReasoning:"Scores BRI-Dependent because Laos's Chinese tech alignment is driven by debt dependency and geographic proximity rather than political choice. The government would likely hedge if it had the economic capacity to do so.",
    refs:["https://www.rfa.org/english/news/laos","https://eastasiaforum.org/2023/11/01/laos-china-digital-dependency/","https://www.hrw.org/asia/laos"]
  },
  {
    id:"bn",name:"Brunei",lean:"us",leanLabel:"UK/US-Aligned",flag:"🇧🇳",
    desc:"Brunei is the smallest ASEAN state by population and the wealthiest per capita, funded by oil and gas revenues. Its foreign policy reflects its size: close security relationships with the UK (whose military presence dates to the colonial era) and the US, with limited strategic autonomy.\n\nBrunei's digital governance is shaped by its British legal legacy — the Personal Data Protection Order 2021 draws substantially on UK data protection frameworks. Its IT infrastructure is dominated by Western vendors at the enterprise and government level. Huawei deployed 5G commercially in 2021, though this was a commercial telecoms decision rather than a strategic one.\n\nBrunei has minimal digital rights civil society and very limited digital rights documentation. Its small population means it is rarely the focus of either bloc's strategic attention.",
    usPresence:"Medium — UK/US defence relationships, British Garrison Brunei, Western enterprise technology dominant in government and financial sector.",
    cnPresence:"Low-Medium — Huawei 5G commercial deployment (2021), limited Chinese strategic presence relative to other ASEAN states.",
    keyLaw:"Personal Data Protection Order 2021 — modelled on UK GDPR framework",
    digitalRightsContext:"Limited civil society space due to absolute monarchy. Digital expression constrained by combination of formal laws and self-censorship. Minimal documented cases of digital rights violations — partly due to small population and limited civil society documentation capacity.",
    alignmentReasoning:"Scores US-Aligned primarily because of UK/US security relationships and British legal system legacy. Brunei's alignment is more by default than strategic choice — its small size means it closely follows its security guarantors.",
    refs:["https://www.agc.gov.bn/","https://www.mofe.gov.bn/","https://freedomhouse.org/country/brunei"]
  }
];

// MAP DATA for network map page
const MAP_NODES = [
  {id:"aws",group:"us",label:"AWS",size:22,desc:"Amazon Web Services"},
  {id:"microsoft",group:"us",label:"Microsoft",size:20,desc:"Microsoft Azure & Office"},
  {id:"google",group:"us",label:"Google",size:20,desc:"Google Cloud & Search"},
  {id:"meta",group:"us",label:"Meta",size:22,desc:"Facebook/Instagram/WhatsApp"},
  {id:"palantir",group:"us",label:"Palantir",size:18,desc:"Data analytics platform"},
  {id:"nso",group:"us",label:"NSO Group",size:16,desc:"Pegasus spyware vendor"},
  {id:"openai_n",group:"us",label:"OpenAI",size:16,desc:"GPT AI models via Microsoft"},
  {id:"huawei",group:"cn",label:"Huawei",size:26,desc:"5G + surveillance infrastructure"},
  {id:"alibaba",group:"cn",label:"Alibaba",size:22,desc:"Cloud + e-commerce"},
  {id:"tencent",group:"cn",label:"Tencent",size:20,desc:"WeChat + gaming"},
  {id:"bytedance",group:"cn",label:"ByteDance",size:20,desc:"TikTok"},
  {id:"hikvision_n",group:"cn",label:"Hikvision",size:18,desc:"CCTV surveillance"},
  {id:"sensetime_n",group:"cn",label:"SenseTime",size:16,desc:"Facial recognition AI"},
  {id:"zte_n",group:"cn",label:"ZTE",size:16,desc:"Telecom equipment"},
  {id:"sg_n",group:"asean",label:"Singapore",size:22,desc:"Digital hub — strategic hedger"},
  {id:"id_n",group:"asean",label:"Indonesia",size:22,desc:"Largest economy — hedger"},
  {id:"my_n",group:"asean",label:"Malaysia",size:18,desc:"Leaning China"},
  {id:"th_n",group:"asean",label:"Thailand",size:18,desc:"Military hedger"},
  {id:"ph_n",group:"asean",label:"Philippines",size:18,desc:"US-aligned"},
  {id:"vn_n",group:"asean",label:"Vietnam",size:17,desc:"Dual partnership"},
  {id:"kh_n",group:"asean",label:"Cambodia",size:15,desc:"China-aligned"},
  {id:"mm_n",group:"asean",label:"Myanmar",size:15,desc:"China-dependent (post-coup)"},
  {id:"la_n",group:"asean",label:"Laos",size:13,desc:"BRI-dependent"},
  {id:"bn_n",group:"asean",label:"Brunei",size:12,desc:"UK/US-aligned"},
  {id:"itu_n",group:"norms",label:"ITU",size:16,desc:"Internet standards body"},
  {id:"defa_n",group:"norms",label:"ASEAN DEFA",size:18,desc:"Digital trade law negotiation"},
  {id:"bri_n",group:"norms",label:"Belt & Road",size:20,desc:"Chinese infrastructure framework"},
  {id:"ipef_n",group:"norms",label:"IPEF/Quad",size:16,desc:"US Indo-Pacific trade framework"},
];

const MAP_EDGES = [
  {s:"hikvision_n",t:"kh_n",w:2},
  {s:"hikvision_n",t:"th_n",w:2},
  {s:"hikvision_n",t:"my_n",w:2},
  {s:"hikvision_n",t:"vn_n",w:2},
  {s:"hikvision_n",t:"id_n",w:2},
  {s:"hikvision_n",t:"mm_n",w:2},
  {s:"sensetime_n",t:"sg_n",w:2},
  {s:"sensetime_n",t:"my_n",w:2},
  {s:"sensetime_n",t:"th_n",w:2},
  {s:"sensetime_n",t:"id_n",w:2},
  {s:"hikvision_n",t:"la_n",w:3},
  {s:"huawei",t:"kh_n",w:1},
  {s:"huawei",t:"la_n",w:1},
  {s:"huawei",t:"mm_n",w:1},
  {s:"huawei",t:"my_n",w:1},
  {s:"huawei",t:"th_n",w:1},
  {s:"palantir",t:"sg_n",w:2},
  {s:"palantir",t:"ph_n",w:2},
  {s:"palantir",t:"id_n",w:2},
  {s:"nso",t:"th_n",w:3},
  {s:"nso",t:"id_n",w:3},
  {s:"nso",t:"ph_n",w:3},
  {s:"nso",t:"vn_n",w:2},
  {s:"nso",t:"my_n",w:2},
  {s:"nso",t:"sg_n",w:3},
  {s:"meta",t:"ph_n",w:1},
  {s:"meta",t:"id_n",w:1},
  {s:"meta",t:"mm_n",w:1},
  {s:"meta",t:"vn_n",w:1},
  {s:"meta",t:"kh_n",w:1},
  {s:"meta",t:"th_n",w:1},
  {s:"meta",t:"my_n",w:1},
  {s:"bytedance",t:"id_n",w:2},
  {s:"bytedance",t:"ph_n",w:2},
  {s:"bytedance",t:"th_n",w:2},
  {s:"bytedance",t:"vn_n",w:2},
  {s:"bytedance",t:"my_n",w:2},
  {s:"bytedance",t:"mm_n",w:2},
  {s:"tencent",t:"sg_n",w:2},
  {s:"tencent",t:"my_n",w:2},
  {s:"tencent",t:"th_n",w:2},
  {s:"tencent",t:"id_n",w:2},
  {s:"google",t:"sg_n",w:2},
  {s:"google",t:"id_n",w:2},
  {s:"google",t:"my_n",w:2},
  {s:"google",t:"th_n",w:2},
  {s:"google",t:"ph_n",w:2},
  {s:"google",t:"vn_n",w:2},
  {s:"google",t:"kh_n",w:2},
  {s:"google",t:"mm_n",w:2},
  {s:"google",t:"la_n",w:2},
  {s:"google",t:"bn_n",w:2},
  {s:"aws",t:"sg_n",w:2},
  {s:"aws",t:"id_n",w:2},
  {s:"aws",t:"my_n",w:2},
  {s:"aws",t:"th_n",w:2},
  {s:"aws",t:"ph_n",w:2},
  {s:"microsoft",t:"sg_n",w:2},
  {s:"microsoft",t:"id_n",w:2},
  {s:"microsoft",t:"my_n",w:2},
  {s:"microsoft",t:"th_n",w:2},
  {s:"microsoft",t:"ph_n",w:2},
  {s:"alibaba",t:"sg_n",w:2},
  {s:"alibaba",t:"id_n",w:2},
  {s:"alibaba",t:"my_n",w:2},
  {s:"alibaba",t:"th_n",w:2},
  {s:"huawei",t:"id_n",w:2},
  {s:"alibaba",t:"kh_n",w:2},
  {s:"tencent",t:"kh_n",w:2},
  {s:"microsoft",t:"vn_n",w:2},
  {s:"microsoft",t:"kh_n",w:2},
  {s:"microsoft",t:"mm_n",w:2},
  {s:"microsoft",t:"la_n",w:2},
  {s:"microsoft",t:"bn_n",w:2},
  {s:"openai_n",t:"sg_n",w:2},
  {s:"openai_n",t:"th_n",w:2},
  {s:"openai_n",t:"id_n",w:2},
  {s:"openai_n",t:"ph_n",w:2},
  {s:"bri_n",t:"kh_n",w:3},
  {s:"bri_n",t:"la_n",w:3},
  {s:"bri_n",t:"my_n",w:2},
  {s:"bri_n",t:"mm_n",w:2},
  {s:"bri_n",t:"th_n",w:1},
  {s:"bri_n",t:"id_n",w:1},
  {s:"bri_n",t:"vn_n",w:1},
  {s:"bri_n",t:"ph_n",w:1},
  {s:"ipef_n",t:"sg_n",w:2},
  {s:"ipef_n",t:"ph_n",w:3},
  {s:"ipef_n",t:"id_n",w:2},
  {s:"ipef_n",t:"vn_n",w:2},
  {s:"ipef_n",t:"th_n",w:1},
  {s:"ipef_n",t:"my_n",w:1},
  {s:"ipef_n",t:"bn_n",w:1},
  {s:"aws",t:"bn_n",w:1},{s:"huawei",t:"bn_n",w:1},
  {s:"defa_n",t:"sg_n",w:3},
  {s:"defa_n",t:"id_n",w:2},
  {s:"defa_n",t:"my_n",w:2},
  {s:"defa_n",t:"th_n",w:2},
  {s:"defa_n",t:"ph_n",w:2},
  {s:"defa_n",t:"vn_n",w:1},
  // ZTE — documented presence Cambodia, Laos, Myanmar, Vietnam, Malaysia
  {s:"zte_n",t:"kh_n",w:3},{s:"zte_n",t:"la_n",w:3},{s:"zte_n",t:"mm_n",w:2},
  {s:"zte_n",t:"vn_n",w:1},{s:"zte_n",t:"my_n",w:1},
  // ITU — global standards body: all major operators + key ASEAN states
  {s:"itu_n",t:"huawei",w:3},{s:"itu_n",t:"zte_n",w:2},
  {s:"itu_n",t:"aws",w:1},{s:"itu_n",t:"microsoft",w:1},{s:"itu_n",t:"google",w:1},
  {s:"itu_n",t:"alibaba",w:2},{s:"itu_n",t:"bytedance",w:1},
  {s:"itu_n",t:"sg_n",w:2},{s:"itu_n",t:"id_n",w:2},{s:"itu_n",t:"my_n",w:1},
  {s:"itu_n",t:"th_n",w:1},{s:"itu_n",t:"ph_n",w:1},{s:"itu_n",t:"vn_n",w:1},
];


const PEOPLE = [
  // ── ARCHITECTS ──────────────────────────────────────────────────────
  {
    id:"peter-thiel", name:"Peter Thiel",
    role:"Co-founder, Palantir Technologies; venture capitalist; political funder",
    category:"architect", bloc:"us",
    summary:"The only major tech figure to explicitly state that democracy and freedom are incompatible with his vision of the future — and yet his company holds some of the most sensitive government data contracts in the world.",
    analysis:"Thiel co-founded Palantir in 2003 with CIA In-Q-Tel seed funding. His 2009 Cato Institute essay declared that he no longer believed freedom and democracy were compatible — a position he has not retracted. Palantir's Gotham platform, which integrates all government datasets into a single queryable system, is expanding into ASEAN defence and interior ministries. Thiel's funding of Trump-aligned politicians creates a circular relationship: Palantir's biggest customer is the US government, whose political direction Thiel actively shapes. His ideology is not incidental to Palantir's expansion into semi-authoritarian ASEAN contexts; it is the intellectual framework that makes it coherent.",
    keyDecisions:"2009: Published essay declaring democracy incompatible with freedom. 2003: Co-founded Palantir with CIA In-Q-Tel seed funding. 2016: Supported Trump at Republican National Convention. Funded JD Vance's Senate campaign. Palantir expanding into Singapore, Philippines, Indonesia defence ministries.",
    connections:["palantir","surveillance","ai","ph_n","sg_n","id_n"],
    refs:[
      {text:"Thiel, P. (2009). The Education of a Libertarian. Cato Unbound.",url:"https://www.cato-unbound.org/2009/04/13/peter-thiel/education-libertarian/"},
      {text:"The Intercept (2022). Palantir, Peter Thiel and the War on Democracy.",url:"https://theintercept.com/2022/01/28/palantir-peter-thiel-democracy/"},
      {text:"Amnesty International (2023). Palantir: How Surveillance Company Uses Public Contracts to Secure Private Data.",url:"https://www.amnesty.org/en/latest/news/2023/10/palantir-how-surveillance-company-uses-public-contracts/"}
    ]
  },
  {
    id:"eric-schmidt", name:"Eric Schmidt",
    role:"Former CEO Google; Chair, National Security Commission on AI",
    category:"architect", bloc:"us",
    summary:"The single most influential individual shaping the US military-AI integration agenda — through a circular relationship between policy roles, investment, and profit that defines how the US deploys tech power in the Indo-Pacific.",
    analysis:"Schmidt ran Google from 2001 to 2011. After leaving, he became the architect of US military-AI integration through his chairmanship of the Defense Innovation Board and the National Security Commission on AI, whose 2021 report set the strategic framework for US AI competition with China. His family office funds defence AI startups that directly benefit from the policy agenda he shapes. His co-authored book with Kissinger frames AI as a civilisational competition the US must win — a framing embedded in AUKUS Pillar II and the Quad technology working groups. For ASEAN, the consequence is that US AI engagement is structured primarily around military competition rather than rights or development.",
    keyDecisions:"2001-2011: CEO Google. 2016-2021: Chair Defense Innovation Board. 2019-2021: Chair National Security Commission on AI. Co-authored The Age of AI with Kissinger (2021). Invested in Scale AI, Rebellion Defense, and other defence AI startups.",
    connections:["google","google-ai","ai","softpower","sg_n","ph_n"],
    refs:[
      {text:"National Security Commission on AI (2021). Final Report. US Government.",url:"https://www.nscai.gov/2021-final-report/"},
      {text:"Schmidt, E., Kissinger, H. & Huttenlocher, D. (2021). The Age of AI. Little, Brown.",url:"https://www.hachettebookgroup.com/titles/henry-a-kissinger/the-age-of-ai/9780316273800/"},
      {text:"The Intercept (2021). Eric Schmidt Is Trying to Build a Future Where the US Military Never Loses a War.",url:"https://theintercept.com/2021/05/08/eric-schmidt-pentagon-military-google/"}
    ]
  },
  {
    id:"ren-zhengfei", name:"Ren Zhengfei",
    role:"Founder, Huawei Technologies",
    category:"architect", bloc:"cn",
    summary:"His PLA background, Huawei's state-adjacent corporate structure, and his statement that Huawei would comply with Chinese intelligence requests is the definitive case study of Chinese tech-state entanglement.",
    analysis:"Ren founded Huawei in 1987 after serving as an engineer in the People's Liberation Army. In 2019, Ren stated that Huawei would comply with Chinese law if asked to provide intelligence by the state. China's National Intelligence Law (2017) makes compliance obligatory regardless of personal preference. The consequence for ASEAN: every Huawei 5G network, every SafeCity surveillance system, every Huawei Cloud deployment in Cambodia, Laos, Malaysia, Myanmar, and Thailand is built on infrastructure whose operator is legally required to cooperate with Chinese state intelligence on demand.",
    keyDecisions:"1987: Founded Huawei after PLA service. 2019: Stated Huawei would comply with Chinese intelligence requests if required. Managed Huawei through US Entity List designation. Oversaw expansion of Huawei SafeCity to ASEAN governments.",
    connections:["huawei-safecity","huawei-cloud","surveillance","ai-infra","softpower","kh_n","la_n","my_n","mm_n"],
    refs:[
      {text:"BBC (2019). Huawei: Would Ren Zhengfei hand data to China's government?",url:"https://www.bbc.com/news/technology-47041994"},
      {text:"CSIS (2022). Huawei and the Digital Silk Road.",url:"https://www.csis.org/analysis/huawei-and-5g-what-you-need-know"}
    ]
  },
  {
    id:"wang-huning", name:"Wang Huning",
    role:"CCP Politburo Standing Committee; Chief Ideologist",
    category:"architect", bloc:"cn",
    summary:"The architect of cyber sovereignty doctrine — the ideological framework that underpins China's entire digital governance export model. Almost never discussed in tech policy, but every Chinese internet governance law, ITU vote, and Digital Silk Road program rests on architecture he built.",
    analysis:"Wang Huning has served as the CCP's chief ideologist across three general secretaries. His doctrine of cyber sovereignty — the principle that states have the right to control their own digital space — provides the philosophical foundation for China's Great Firewall, the National Intelligence Law, and the governance export model that ASEAN governments receive when they adopt Chinese internet frameworks. His work explains why Chinese tech exports come bundled with a governance model: the governance model is the point.",
    keyDecisions:"Architect of Xi Jinping Thought including cyber sovereignty doctrine. Oversaw China's ITU strategy promoting New IP alternative to TCP/IP. His framework underpins Cambodia's Sub-Decree 23, Vietnam's Cybersecurity Law, and other ASEAN internet governance laws modelled on Chinese frameworks.",
    connections:["itu","softpower","trade","kh_n","vn_n","la_n"],
    refs:[
      {text:"Doshi, R. (2021). The Long Game: China's Grand Strategy to Displace American Order. Oxford University Press.",url:"https://global.oup.com/academic/product/the-long-game-9780197527917"},
      {text:"ITU (2020). New IP Proposal documentation. ITU-T Study Group 13.",url:"https://www.itu.int/en/ITU-T/studygroups/2017-2020/13/Pages/default.aspx"}
    ]
  },

  // ── OPERATORS OF INFLUENCE ──────────────────────────────────────────
  {
    id:"jensen-huang", name:"Jensen Huang",
    role:"CEO, Nvidia",
    category:"operator", bloc:"us",
    summary:"Controls the physical chokepoint of the entire global AI stack. His decisions about chip pricing, export compliance, and government access determine who can build AI — and who cannot — across ASEAN and globally.",
    analysis:"Nvidia's GPU architectures are the physical substrate of AI training and inference. US export controls on advanced Nvidia chips have created a bifurcated AI landscape: countries that can access Nvidia compute can build frontier AI; countries cut off are pushed toward Huawei Ascend alternatives. For ASEAN, this means AI infrastructure choices — which cloud provider, which hardware, which model — are increasingly shaped by whether they fall inside or outside Nvidia's export compliance perimeter. Malaysia's decision to build its sovereign AI ecosystem on Huawei hardware is a direct consequence of this dynamic. Huang, born in Taiwan, navigates a position of extraordinary geopolitical sensitivity.",
    keyDecisions:"Built Nvidia into the dominant AI hardware company. Navigated US export control regimes restricting China access to H100 and A100 chips. Continued expanding Nvidia's ASEAN partnerships as AI infrastructure investment boom accelerates post-2024.",
    connections:["aws","microsoft-azure","google-cloud","huawei-ai","ai-infra","ai","sg_n","my_n","th_n","id_n"],
    refs:[
      {text:"CNBC (2024). Nvidia CEO Jensen Huang on AI chips, export controls and China.",url:"https://www.cnbc.com/2024/05/26/nvidia-ceo-jensen-huang-on-ai-chips-export-controls-and-china.html"},
      {text:"Global Data Centre Hub (2026). Asia-Pacific: $150B+ AI Data Center Infrastructure.",url:"https://www.globaldatacenterhub.com/p/asia-pacific-150b-ai-data-center"}
    ]
  },
  {
    id:"jack-ma", name:"Jack Ma",
    role:"Founder, Alibaba Group and Ant Group (retired under pressure)",
    category:"operator", bloc:"cn",
    summary:"His forced disappearance after criticising Chinese regulators is the most visible demonstration that the Chinese state is always the senior partner to Chinese tech capital. Every ASEAN government considering Chinese tech investment operates in the shadow of what happened to Jack Ma.",
    analysis:"Ma founded Alibaba in 1999. In October 2020 he criticised Chinese state banks. Within weeks, Ant Group's $37 billion IPO — which would have been the world's largest — was suspended. Ma disappeared from public view for three months, then surrendered effective control of Alibaba and Ant Group. The message to every other Chinese tech billionaire is unambiguous: political loyalty precedes commercial success. For ASEAN governments and businesses using Alibaba Cloud, Alipay, or Lazada, the implication is that the ultimate decision-maker is not Ma or his successors but the CCP.",
    keyDecisions:"October 2020: Criticised Chinese financial regulators at Bund Summit. November 2020: Ant Group IPO suspended by regulators. 2021: Disappeared from public view. Surrendered effective control of Alibaba and Ant Group. Alibaba Cloud continues ASEAN expansion under state-acceptable leadership.",
    connections:["alibaba-cloud","alipay","fintech","data","platforms","sg_n","id_n","my_n"],
    refs:[
      {text:"New York Times (2021). Jack Ma's Vanishing Act.",url:"https://www.nytimes.com/2021/01/22/technology/jack-ma-alibaba-ant-china.html"},
      {text:"The Economist (2021). Jack Ma and the limits of Chinese capitalism.",url:"https://www.economist.com/leaders/2021/01/14/jack-ma-and-the-limits-of-chinese-capitalism"}
    ]
  },
  {
    id:"zhang-yiming", name:"Zhang Yiming",
    role:"Founder, ByteDance / TikTok (stepped down 2021)",
    category:"operator", bloc:"cn",
    summary:"Stepped down as CEO under documented political pressure. The elaborate Project Texas structural separation exists entirely because of his company's Chinese origins. His $30B+ AI infrastructure commitment embeds ByteDance physically across ASEAN.",
    analysis:"Zhang founded ByteDance in 2012 and built TikTok into the world's most downloaded app. In 2021 he stepped down as CEO, widely interpreted as responding to CCP pressure as ByteDance's foreign operations became a geopolitical flashpoint. ByteDance's Project Texas — an elaborate structural separation designed to ring-fence TikTok's US operations from Chinese state access — exists because of Zhang's company's Chinese origins. ByteDance's commitment of over $30 billion in global AI infrastructure spending in 2026, with a $25 billion Thailand data centre project as a centrepiece, means his company is embedding physical infrastructure across ASEAN at a scale that makes platform-level scrutiny inadequate.",
    keyDecisions:"2012: Founded ByteDance. 2021: Stepped down as CEO under political pressure. Project Texas initiated. ByteDance commits $8.8B to regional ASEAN data centres, $25B Thailand project, $30B+ global AI infrastructure spend in 2026.",
    connections:["tiktok","platforms","ai-infra","id_n","ph_n","th_n","my_n","vn_n"],
    refs:[
      {text:"Wired (2022). TikTok and ByteDance: National Security Risk or Red Herring?",url:"https://www.wired.com/story/tiktok-bytedance-national-security/"},
      {text:"WinBuzzer (2026). ByteDance Plans Over $30 Billion for AI Expansion.",url:"https://winbuzzer.com/2026/05/11/bytedance-plans-over-30-billion-for-ai-expansion-b-xcxwbn/"}
    ]
  },
  {
    id:"palmer-luckey", name:"Palmer Luckey",
    role:"Founder, Anduril Industries",
    category:"operator", bloc:"us",
    summary:"Building the autonomous weapons layer of the Indo-Pacific tech stack. Explicitly political, Trump-aligned, and central to AUKUS Pillar II. Represents a new generation of defence tech founders who are commercially motivated and ideologically committed to US hard power.",
    analysis:"Luckey founded Oculus VR (sold to Facebook for $2B in 2014), was fired from Facebook in 2017, and founded Anduril Industries — building autonomous weapons systems. His Ghost Shark autonomous submarine and Loyal Wingman drone programs are central to AUKUS Pillar II, directly shaping the US military footprint in ASEAN's neighbourhood. His close relationship with the Trump administration and his public statements framing defence tech as a patriotic obligation make him an ideological figure as much as a commercial one. At 32, he may be the most consequential individual in shaping what the US military-tech stack looks like in the Indo-Pacific over the next two decades.",
    keyDecisions:"2017: Founded Anduril. Ghost Shark autonomous submarine and Loyal Wingman drone programs central to AUKUS Pillar II. Contracts with US DoD and Australian Defence Force. Raised $1.5B Series F at $14B valuation (2023).",
    connections:["cybersecurity","ai","softpower","ph_n","sg_n"],
    refs:[
      {text:"The Atlantic (2022). The Man Who Militarized the Oculus Rift.",url:"https://www.theatlantic.com/technology/archive/2022/06/anduril-palmer-luckey-military-ai/661013/"},
      {text:"AUKUS (2023). AUKUS Pillar II Advanced Capabilities Update.",url:"https://www.defence.gov.au/about/reviews-inquiries/aukus"}
    ]
  },
  {
    id:"anthony-tan", name:"Anthony Tan",
    role:"CEO and Co-founder, Grab Holdings",
    category:"operator", bloc:"both",
    summary:"Grab is the closest thing ASEAN has to its own digital infrastructure layer — across eight countries with extraordinary data holdings on tens of millions of users. Neither US nor Chinese, but not neutral either.",
    analysis:"Tan co-founded Grab in Malaysia in 2012 and built it into Southeast Asia's leading superapp, operating across ride-hailing, food delivery, payments (GrabPay), financial services, and enterprise services across eight ASEAN countries. Listed on NASDAQ in 2021, Grab has US institutional capital and previously held Didi (Chinese) investment exposure. It holds extraordinary data on the movements, finances, and social networks of tens of millions of lower-income ASEAN populations, with minimal transparency about government data request compliance. At the height of its competition with Uber in Indonesia, Grab appointed a former national police chief as chief commissioner. Its GrabFinancial services give it detailed financial profiles of populations that formal banks largely do not serve.",
    keyDecisions:"2012: Co-founded Grab in Malaysia. 2021: NASDAQ listing via SPAC merger. Appointed former Indonesian National Police Chief as chief commissioner. GrabFinancial expansion into credit and insurance. AI deployment across services. 2025: First quarterly profit reported.",
    connections:["fintech","data","ai","platforms","sg_n","id_n","my_n","th_n","ph_n","vn_n","kh_n","mm_n"],
    refs:[
      {text:"Grab Holdings (2025). Annual Report / Form 20-F FY2024. SEC filing.",url:"https://www.sec.gov/Archives/edgar/data/0001855612/000185561225000013/ck0001855612-20241231.htm"},
      {text:"CEO Insights Asia (2026). How Anthony Tan is Rewriting Grab's Growth With Profit and AI.",url:"https://www.ceoinsightsasia.com/business-inside/how-anthony-tan-is-rewriting-grab-s-growth-with-profit-and-ai-nwid-14490.html"}
    ]
  },

  // ── POLITICAL ENABLERS ──────────────────────────────────────────────
  {
    id:"hun-sen-manet", name:"Hun Sen / Hun Manet",
    role:"Prime Ministers of Cambodia (1985-2023 / 2023-present)",
    category:"enabler", bloc:"cn",
    summary:"The clearest case of structural digital capture in ASEAN. Chinese tech dependency across telecoms, surveillance, internet governance, and physical infrastructure is so complete that meaningful policy space conflicting with Chinese interests is difficult to identify.",
    analysis:"Hun Sen built a four-decade dynasty on Chinese support. Under his rule Cambodia adopted Chinese telecoms infrastructure (ZTE/Huawei), Chinese-supplied nationwide surveillance (Hikvision), and a Chinese-modelled internet governance framework culminating in Sub-Decree 23 (2021) — which routes all internet traffic through a government-controlled gateway enabling comprehensive monitoring. This law was developed with direct Chinese technical assistance and mirrors China's Great Firewall architecture. His son Hun Manet assumed the premiership in 2023. The distinction between strategic alignment and structural capture is partly semantic: Hun Sen built the dependency deliberately, but the dependency has now become self-reinforcing.",
    keyDecisions:"Maintained Chinese diplomatic cover for four decades. Adopted ZTE/Huawei for national telecoms. Deployed Hikvision nationwide CCTV under smart city programs. Enacted Sub-Decree 23 National Internet Gateway (2021) with Chinese technical assistance. Approved Chinese development of Ream Naval Base.",
    connections:["huawei-safecity","hikvision","surveillance","softpower","kh_n"],
    refs:[
      {text:"Article 19 (2023). Cambodia: National Internet Gateway enables mass surveillance.",url:"https://www.article19.org/resources/cambodia-internet-gateway/"},
      {text:"Freedom House (2023). Freedom on the Net: Cambodia.",url:"https://freedomhouse.org/country/cambodia/freedom-net/2023"}
    ]
  },
  {
    id:"rodrigo-duterte", name:"Rodrigo Duterte",
    role:"President of the Philippines 2016-2022",
    category:"enabler", bloc:"both",
    summary:"His administration is relevant from both blocs simultaneously: US platform architecture enabled his disinformation campaigns while he embedded Chinese communications infrastructure in the most US-aligned ASEAN state.",
    analysis:"Duterte's presidency created a dual-bloc digital legacy. On the US side: Facebook's failure to adequately moderate Tagalog-language political content enabled a sophisticated disinformation architecture that systematically targeted journalists, opposition figures, and critics of his drug war — documented by the Oxford Internet Institute. On the Chinese side: his administration tolerated DITO Telecom, a joint venture with China Telecom, as the Philippines' third national carrier despite documented national security concerns from the armed forces. Sara Duterte's continued prominence as vice president under Marcos Jr means his political legacy shapes current decisions.",
    keyDecisions:"Enabled DITO Telecom (China Telecom JV) as third national carrier despite AFP security concerns. Facebook disinformation apparatus documented by Oxford Internet Institute and Rappler. Rappler founder Maria Ressa targeted with legal actions.",
    connections:["meta","platforms","ph_n","surveillance"],
    refs:[
      {text:"Oxford Internet Institute (2019). The Global Disinformation Order.",url:"https://demtech.oii.ox.ac.uk/research/posts/the-global-disinformation-order/"},
      {text:"Ressa, M. (2022). How to Stand Up to a Dictator. Harper Collins.",url:"https://www.harpercollins.com/products/how-to-stand-up-to-a-dictator-maria-ressa"}
    ]
  },
  {
    id:"prabowo-subianto", name:"Prabowo Subianto",
    role:"President of Indonesia, October 2024-present",
    category:"enabler", bloc:"both",
    summary:"A transactional balancer rather than a principled hedger. Security instincts lean US; economic architecture leans China; and the digital domain is the active battleground where both blocs compete for his government's alignment.",
    analysis:"Prabowo's November 2024 foreign policy debut — Beijing first ($10 billion in deals including digital technology), Washington four days later — is deliberate triangulation. His security instincts are genuinely US-aligned: a long-standing US travel ban was lifted in 2020, the Comprehensive Strategic Partnership was deepened, and defence cooperation has expanded. But Indonesia's economy is structurally entangled with China in ways that constrain any sharp pivot. His administration's Danantara sovereign wealth fund is now a primary target for both blocs' infrastructure investment pitches. Both Washington and Beijing are actively competing to become Indonesia's technology partner of choice, and Prabowo is letting both compete while committing to neither.",
    keyDecisions:"November 2024: Beijing before Washington tour — $10B Chinese deals including digital tech. Comprehensive Strategic Partnership deepened with US. Danantara sovereign wealth fund established. AWS building major Batam data centre. PDP Law came into full effect October 2024.",
    connections:["alibaba-cloud","aws","microsoft-azure","data","ai-infra","id_n"],
    refs:[
      {text:"APCO Worldwide (2024). Indonesian President Prabowo Visits Beijing and Washington.",url:"https://apcoworldwide.com/blog/indonesian-president-prabowo-visits-beijing-and-washington/"},
      {text:"CNAS (2025). Countering the Digital Silk Road: Indonesia.",url:"https://www.cnas.org/publications/reports/countering-the-digital-silk-road-indonesia"},
      {text:"East Asia Forum (2024). Expect the expected with Prabowo's incoming China policy.",url:"https://eastasiaforum.org/2024/07/11/expect-the-expected-with-prabowos-incoming-china-policy/"}
    ]
  },
  {
    id:"anwar-ibrahim", name:"Anwar Ibrahim",
    role:"Prime Minister of Malaysia, November 2022-present",
    category:"enabler", bloc:"both",
    summary:"A deliberate hedger who has attracted investment from both blocs simultaneously — but structural digital infrastructure decisions, particularly Huawei 5G, create Chinese dependencies his diplomacy cannot fully offset.",
    analysis:"Anwar came to power with a reformist mandate. His economic record has been strong — a semiconductor boom with US-linked capital, and massive Western tech investment in Johor (Microsoft $5.5B Singapore package, Google $2B Malaysia data centre). Yet the Huawei 5G MOU remains the structural contradiction: by selecting Huawei as lead 5G vendor despite US pressure, Anwar accepted Chinese infrastructure dependency in exchange for cost advantage and Chinese state financing. In October 2025, during Malaysia's ASEAN chairmanship, he signed a US reciprocal trade agreement including rare earth supply commitments — a move Beijing explicitly described as damaging to Chinese interests. Anwar wants genuine dual engagement, has pursued it with more success than most ASEAN leaders, but the Huawei 5G decision creates a structural dependency his diplomacy cannot fully offset.",
    keyDecisions:"Signed Huawei MOU as lead 5G vendor despite US pressure. Attracted Microsoft, Google, AWS billion-dollar investments to Johor. Applied for BRICS membership 2024. Signed US reciprocal trade agreement including rare earth supply during ASEAN chairmanship October 2025. Malaysia sovereign AI cloud built on Huawei hardware.",
    connections:["huawei-cloud","huawei-safecity","aws","microsoft-azure","google-cloud","ai-infra","surveillance","my_n"],
    refs:[
      {text:"East Asia Forum (2025). Malaysia's reform aspirations clashed with political realities in 2024.",url:"https://eastasiaforum.org/2025/02/27/malaysias-reform-aspirations-clashed-with-political-realities-in-2024/"},
      {text:"Fortune (2025). Malaysia's Anwar to try to keep feel-good vibes going.",url:"https://fortune.com/asia/2025/01/14/malaysia-outlook-trump-anwar-ibrahim-trade-semiconductors-ai-data-centers/"}
    ]
  },
  {
    id:"thaksin-shinawatra", name:"Thaksin Shinawatra",
    role:"Former Prime Minister Thailand; political network influence via Pheu Thai party",
    category:"enabler", bloc:"both",
    summary:"Thailand's extraordinary data centre investment boom — including ByteDance's $25 billion commitment — occurred under a government aligned with Thaksin's political network. The intersection of political influence and tech investment flows in Thailand is flagged here as a research priority.",
    analysis:"Thaksin returned from exile in August 2023, coinciding with Pheu Thai's formation of government. Thailand's data centre story then accelerated dramatically: the Board of Investment approved $16.13 billion in data centre investments in the first half of 2025 alone. ByteDance committed $25 billion to a Thailand AI data centre project. Microsoft, AWS, Google, and Chinese operators (Huawei, Alibaba, Tencent) are all building simultaneously in the Eastern Economic Corridor. The question this raises — which cannot currently be answered with available public evidence — is the degree to which specific investment decisions track political relationships. We flag it as a research priority rather than asserting connections that are not yet documented.",
    keyDecisions:"2023: Returned from exile, Pheu Thai formed government. 2024-25: Thailand's data centre investment boom under Pheu Thai administration. BOI approved $16.13B in H1 2025. ByteDance $25B Thailand commitment. Bangkok described as testbed for US-CN infrastructure coexistence.",
    connections:["tiktok","ai-infra","platforms","th_n"],
    refs:[
      {text:"Digital in Asia (2026). Southeast Asia Data Centre Boom 2026.",url:"https://digitalinasia.com/2026/04/08/southeast-asia-ai-data-centre-boom/"},
      {text:"Reuters (2023). Thaksin returns to Thailand after 15 years in exile.",url:"https://www.reuters.com/world/asia-pacific/thaksin-shinawatra-returns-thailand-after-15-years-exile-2023-08-22/"}
    ]
  },
  {
    id:"myanmar-junta", name:"Myanmar SAC (Military Junta)",
    role:"State Administration Council — in power since February 2021 coup",
    category:"enabler", bloc:"cn",
    summary:"Dependent on Chinese tech infrastructure and diplomatic cover — not because of alignment but because no other patron is available. Myanmar represents the extreme end of the dependency spectrum, and the case where both blocs' tech failures are most starkly visible.",
    analysis:"The February 2021 coup created a digital rights catastrophe implicating both blocs. Before the coup, Facebook's engagement-optimised algorithm amplified military hate speech against the Rohingya — the UN Fact-Finding Mission documented this as contributing to genocide. After the coup, Western companies withdrew and the junta deepened Chinese tech dependency: Huawei, ZTE, and China Telecom became dominant carriers; Chinese surveillance equipment was deployed against pro-democracy protesters. This is not ideological capture — the junta is nationalist, not pro-Chinese — but structural dependency created by international isolation. Both blocs are implicated: US platform architecture enabled the preceding genocide; Chinese infrastructure enables the authoritarian aftermath.",
    keyDecisions:"February 2021 coup. Western tech companies withdrew. Huawei/ZTE/China Telecom became dominant carriers. Chinese surveillance deployed against protesters. Cybersecurity Law drafted on Chinese model. Internet shutdowns, VPN blocking documented. China blocks UN Security Council action.",
    connections:["meta","huawei-safecity","platforms","surveillance","mm_n"],
    refs:[
      {text:"UN Human Rights Council (2018). Report of the Independent International Fact-Finding Mission on Myanmar. A/HRC/39/64.",url:"https://www.ohchr.org/en/hr-bodies/hrc/myanmar-ffm/report"},
      {text:"Access Now (2023). Myanmar Digital Rights Under the Junta.",url:"https://www.accessnow.org/myanmar-digital-rights-under-junta/"}
    ]
  }
];


if (typeof window !== 'undefined') {
  window.SITE=SITE; window.DOMAINS=DOMAINS; window.OPERATORS=OPERATORS;
  window.COUNTRIES=COUNTRIES; window.MAP_NODES=MAP_NODES; window.MAP_EDGES=MAP_EDGES;
  window.PEOPLE=PEOPLE;
}
