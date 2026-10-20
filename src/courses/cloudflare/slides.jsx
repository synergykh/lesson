import React from "react";

// Slide 1: Cloudflare: Zero to ProductionComplete Developer Web Masterclass
export function Slide1({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4 items-center">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400" data-i18n="s1_badge">MODULE 08 • GLOBAL EDGE INFRASTRUCTURE</span>
                <h1 className="title-main-h1 text-3xl md:text-4xl font-extrabold text-white m-0 mb-1 leading-tight" data-i18n="s1_title">Cloudflare: Zero to Production<br /><span className="text-orange-400 font-extrabold">Complete Developer Web Masterclass</span></h1>
                <p className="text-sm text-slate-300 italic m-0 mb-3" data-i18n="s1_tagline">“From your first domain and DNS records to global CDN, WAF, Workers, R2 storage, and production infrastructure”</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2.5 p-3 border border-orange-500/30 bg-orange-500/10 text-orange-300 text-[12.5px] leading-relaxed">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25 3.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 1.5 0z"/></svg>
                    <div data-i18n="s1_callout">Learn how to transform Cloudflare into your global security, performance, and edge computing foundation.</div>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 border border-orange-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline" id="btn-start-course" onClick={onStart}>
                      <span data-i18n="ui_start">Start Course</span>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z"/></svg>
                    </button>
                    <span className="text-xs text-slate-300">or press <kbd className="kbd px-1.5 py-0.5  text-[11px] font-bold bg-slate-800 border border-slate-700 text-slate-200">Space</kbd> / <kbd className="kbd px-1.5 py-0.5  text-[11px] font-bold bg-slate-800 border border-slate-700 text-slate-200">→</kbd></span>
                  </div>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-red-500 inline-block"></span><span className="w-2.5 h-2.5 bg-yellow-500 inline-block"></span><span className="w-2.5 h-2.5 bg-green-500 inline-block"></span></div>
                  <span className="text-[11px] text-slate-400 font-semibold">global edge network</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors">Copy</button>
                </div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                  <div><span className="text-orange-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-orange-400 font-bold">curl -I https://taskflow.com</span></div>
                  <div className="text-slate-300">HTTP/2 200 OK</div>
                  <div className="text-slate-300">server: cloudflare</div>
                  <div className="text-green-400">cf-ray: 8df4a91b2c4e098a-BKK</div>
                  <div className="text-orange-400">cf-cache-status: HIT</div>
                  <div className="text-blue-400">strict-transport-security: max-age=31536000; includeSubDomains</div>
                  <div className="text-slate-400 text-[11px] mt-1"># Proxied • DDoS Scrubbed • TLS 1.3 • Edge Latency: 11ms</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 2: What is Cloud Computing?
export function Slide2({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 01 • CLOUD PARADIGMS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s2_title">What is Cloud Computing?</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s2_sub">From single bare-metal servers to globally distributed edge networks</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-orange-500/30 bg-orange-500/15 text-orange-400 ">CONCEPTS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold text-sm">Traditional Server Model (Centralized)</h4>
                <p className="text-xs text-slate-300">Every single user query travels across oceans to one physical data center. High latency, zero automatic DDoS protection, and immediate downtime if the box crashes.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  User in Cambodia ──(240ms)──&gt; US-East Data Center<br />
                  Single Server Failure = 100% Downtime
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold text-sm">Cloud &amp; Edge Network Model (Distributed)</h4>
                <p className="text-xs text-slate-300">A global Anycast mesh terminating traffic at the nearest Point of Presence (PoP). Absorbs attacks, serves cached assets locally, and accelerates origin requests.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-400">
                  User in Cambodia ──(12ms)──&gt; Cloudflare Edge (Phnom Penh / Bangkok)<br />
                  Cached Response Served Instantly • Attacks Filtered at Edge
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 3: Hosting Evolution: Dedicated to Edge
export function Slide3({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 01 • INFRASTRUCTURE TIMELINE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s3_title">Hosting Evolution: Dedicated to Edge</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s3_sub">Dedicated Servers → VPS → Managed Platforms → Serverless → Edge Compute</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">EVOLUTION</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">1. Bare Metal</span>
                <span className="text-white font-bold">Dedicated Server</span>
                <span className="text-slate-400">Manual hardware leasing, racking, physical maintenance. Single location.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">2. Virtualized</span>
                <span className="text-white font-bold">VPS (Linode / Droplet)</span>
                <span className="text-slate-400">Virtual slice of hardware. Developer configures OS, Nginx, UFW, SSL.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">3. Managed Cloud</span>
                <span className="text-white font-bold">PaaS (Vercel / Heroku)</span>
                <span className="text-slate-400">Git push to deploy, automated builds, serverless containers.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">4. Global CDN</span>
                <span className="text-white font-bold">Content Distribution</span>
                <span className="text-slate-400">Caches images and scripts across continents to reduce origin load.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1 bg-orange-900/20 border-orange-500/40">
                <span className=" text-orange-400 font-bold">5. Edge Cloud</span>
                <span className="text-white font-bold">Cloudflare Mesh</span>
                <span className="text-slate-300">Compute, DNS, WAF, and storage running directly on hundreds of city edges.</span>
              </div>
            </div>
    </div>
  );
}

// Slide 4: Why Cloudflare Operates Differently
export function Slide4({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 01 • MENTAL MODEL</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s4_title">Why Cloudflare Operates Differently</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s4_sub">Cloudflare is not a traditional VPS host — it is a Global Connectivity Cloud</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">PARADIGM</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold text-sm">Traditional VPS Provider (e.g. Ubuntu VPS)</h4>
                <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                  <li>You rent an isolated virtual machine with 1 IP address.</li>
                  <li>Traffic goes directly into your machine port 80/443.</li>
                  <li>You must configure firewall (UFW), iptables, Nginx, and renewal certs.</li>
                  <li>A single 10 Gbps volumetric attack completely saturates your network card.</li>
                </ul>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 border-orange-500/30">
                <h4 className="text-orange-400 font-bold text-sm">Cloudflare Global Connectivity Cloud</h4>
                <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                  <li>Cloudflare sits between your users and your origin server.</li>
                  <li>Origin server IP is shielded and hidden from public DNS queries.</li>
                  <li>Traffic is inspected, cached, scrubbed, and optimized on 330+ edge nodes.</li>
                  <li>Can execute full JavaScript serverless code (Workers) without spinning up VMs.</li>
                </ul>
              </div>
            </div>
    </div>
  );
}

// Slide 5: What is Cloudflare?
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 02 • CORE PLATFORM</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s5_title">What is Cloudflare?</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s5_sub">The comprehensive edge platform between your visitors and your origins</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">OVERVIEW</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
              <div className="flex flex-col gap-2 text-xs text-slate-300">
                <p>Cloudflare is a global cloud platform providing DNS, Content Delivery Network (CDN), DDoS mitigation, Web Application Firewall (WAF), SSL/TLS encryption, and Edge Serverless execution.</p>
                <div className="bg-slate-900 border border-slate-800 p-3  text-[11px]">
                  Visitor Request<br />
                  &nbsp;&nbsp;↓<br />
                  Cloudflare Edge Mesh<br />
                  &nbsp;&nbsp;├── DNS Resolution (Anycast 1.1.1.1)<br />
                  &nbsp;&nbsp;├── DDoS Scrubbing (Tbps capacity)<br />
                  &nbsp;&nbsp;├── WAF &amp; Bot Inspection (OWASP rules)<br />
                  &nbsp;&nbsp;├── TLS Handshake &amp; Decryption<br />
                  &nbsp;&nbsp;├── Edge Caching (Instant static delivery)<br />
                  &nbsp;&nbsp;└── Workers Edge Logic<br />
                  &nbsp;&nbsp;↓ (Secure Upstream)<br />
                  Your Origin Server (Vercel / VPS / AWS)
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-2 text-xs">
                <h4 className="text-white font-bold">Key Misconception Cleared</h4>
                <p className="text-slate-300">“Is Cloudflare just hosting?” <span className="text-red-400 font-bold">No.</span> While Cloudflare offers Pages and Workers to host apps and APIs, its primary superpower is acting as the intelligent global protective layer in front of ANY backend architecture.</p>
                <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-300">
                  Cloudflare can protect a Next.js app on Vercel, a Laravel app on an Ubuntu VPS, or an enterprise cluster on AWS at the exact same time.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 6: Beyond Just 'Hosting'
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 02 • PLATFORM SURFACE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s6_title">Beyond Just 'Hosting'</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s6_sub">A multi-layered ecosystem: Networking, Security, CDN, Compute, and Storage</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">ECOSYSTEM</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className="text-orange-400 font-bold ">NETWORKING</span>
                <span className="text-white font-bold">DNS &amp; Registrar</span>
                <span className="text-slate-400">Authoritative Anycast DNS, DNSSEC, automated CNAME flattening, domain registrar.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className="text-red-400 font-bold ">SECURITY</span>
                <span className="text-white font-bold">WAF &amp; DDoS</span>
                <span className="text-slate-400">Managed OWASP rulesets, rate limiting, bot fight mode, Turnstile challenges.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className="text-green-400 font-bold ">PERFORMANCE</span>
                <span className="text-white font-bold">CDN &amp; Routing</span>
                <span className="text-slate-400">Global edge caching, Brotli compression, HTTP/3 QUIC, early hints, transform rules.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className="text-purple-400 font-bold ">DEVELOPER</span>
                <span className="text-white font-bold">Workers &amp; R2</span>
                <span className="text-slate-400">Serverless V8 Isolates, S3-compatible R2 storage with 0 egress, KV store, Queues.</span>
              </div>
            </div>
    </div>
  );
}

// Slide 7: Global Anycast Edge Network
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 02 • ARCHITECTURE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s7_title">Global Anycast Edge Network</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s7_sub">How 330+ data centers deliver ultra-low latency and DDoS absorption</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-orange-500/30 bg-orange-500/15 text-orange-400 ">ANYCAST</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 text-xs">
                <h4 className="text-white font-bold">What is Anycast Routing?</h4>
                <p className="text-slate-300">Under traditional Unicast, an IP address belongs to ONE specific physical computer. Under Anycast, the SAME IP address (e.g. 104.21.72.18) is broadcast simultaneously by routers in hundreds of cities worldwide.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  User in Phnom Penh → BGP routes to Phnom Penh Edge<br />
                  User in Tokyo → BGP routes to Tokyo Edge<br />
                  User in Frankfurt → BGP routes to Frankfurt Edge
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 text-xs">
                <h4 className="text-white font-bold">DDoS Absorption at Scale</h4>
                <p className="text-slate-300">When an attacker commands a botnet of 100,000 infected machines across the globe, the attack traffic does not hit a single server. Instead, it gets dispersed and swallowed locally at the nearest regional edge node.</p>
                <div className="p-2.5 bg-green-500/10 border border-green-500/20 text-green-300">
                  Network capacity exceeding 280+ Tbps means volumetric attacks are filtered before reaching origin pipes.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 8: Creating Your Cloudflare Account
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 03 • GETTING STARTED</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s8_title">Creating Your Cloudflare Account</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s8_sub">Step-by-step account onboarding, verification, and first look</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">ACCOUNT</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">1. Registration Workflow</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>Navigate to official site: <span className=" text-orange-400">https://www.cloudflare.com/</span></li>
                  <li>Click <strong className="text-white">Sign Up</strong> and register using your business or primary developer email.</li>
                  <li>Open your email inbox and click the verification link immediately.</li>
                  <li>Log in to the dashboard: <span className=" text-blue-400">dash.cloudflare.com</span></li>
                </ol>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">2. What You See in the Dashboard</h4>
                <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                  <li><strong className="text-white">Websites:</strong> All managed domains (Zones) under your account.</li>
                  <li><strong className="text-white">Workers &amp; Pages:</strong> Serverless edge compute and web deployments.</li>
                  <li><strong className="text-white">R2 Storage:</strong> Distributed object storage buckets.</li>
                  <li><strong className="text-white">Zero Trust:</strong> Private network tunnels, Access SSO, and browser isolation.</li>
                </ul>
              </div>
            </div>
    </div>
  );
}

// Slide 9: Account Security: 2FA & Scoped Tokens
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 03 • SECURITY HYGIENE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s9_title">Account Security: 2FA &amp; Scoped Tokens</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s9_sub">Protecting your infrastructure with hardware keys, TOTP, and least privilege</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">SECURITY</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Mandatory Two-Factor Authentication (2FA)</h4>
                <p className="text-slate-300">If an attacker gains access to your Cloudflare account, they can reroute your domain DNS, intercept SSL traffic, or delete your R2 storage buckets.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-green-400">
                  Settings → My Profile → Authentication → 2FA<br />
                  Preferred: Hardware Security Key (YubiKey / WebAuthn)<br />
                  Alternative: Authenticator App (TOTP - 1Password, Google Authenticator)
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Never Use Global API Keys</h4>
                <p className="text-slate-300">Cloudflare provides a legacy "Global API Key" with unrestricted god-mode powers over your entire account. <strong className="text-red-400">NEVER use it in scripts or CI/CD!</strong></p>
                <div className="p-2.5 bg-slate-900 border border-slate-800  text-[11px] text-orange-400">
                  Always create: Scoped API Tokens<br />
                  Permission: Zone.DNS:Edit for taskflow.com ONLY<br />
                  TTL / IP restriction: Restrict to your CI runner IP
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 10: Accounts, Organizations & Zones
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 03 • MENTAL MODEL</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s10_title">Accounts, Organizations &amp; Zones</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s10_sub">Understanding the hierarchy: Account Scope vs Zone (Domain) Scope</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">STRUCTURE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Account Scope</h4>
                <p className="text-slate-300">The billing and identity umbrella. Contains team members, payment methods, global API tokens, R2 storage buckets, Workers scripts, and Zero Trust tunnels.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  Account: Acme Corp (ID: d9f81a7b...)<br />
                  ├── Users / RBAC Policies<br />
                  ├── R2 Storage: user-uploads-bucket<br />
                  └── Workers: auth-gateway-worker
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Zone (Domain) Scope</h4>
                <p className="text-slate-300">In Cloudflare terminology, a <strong className="text-orange-400">Zone</strong> represents one apex domain (e.g., <code>taskflow.com</code>). Contains all DNS records, SSL settings, WAF rules, and page rules specific to that domain.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-400">
                  Zone: taskflow.com (ID: 023e105f...)<br />
                  ├── DNS Records (A, CNAME, MX)<br />
                  ├── WAF Security Rules<br />
                  └── SSL/TLS: Full (Strict) Mode
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 11: Understanding Domains & DNS
export function Slide11({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 04 • DOMAIN BASICS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s11_title">Understanding Domains &amp; DNS</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s11_sub">Apex domains, subdomains, TLDs, and the domain hierarchy</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">DOMAIN HIERARCHY</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Domain Anatomy</h4>
                <div className=" text-sm text-center p-3 bg-slate-900 border border-slate-800">
                  <span className="text-blue-400 font-bold">api</span>.<span className="text-white font-bold">taskflow</span>.<span className="text-orange-400 font-bold">com</span>
                </div>
                <ul className="space-y-1 text-slate-300">
                  <li><strong className="text-orange-400">TLD (Top-Level Domain):</strong> <code>.com</code>, <code>.io</code>, <code>.org</code>, <code>.dev</code></li>
                  <li><strong className="text-white">Apex / Root Domain:</strong> <code>taskflow.com</code> (also denoted as <code>@</code> in DNS)</li>
                  <li><strong className="text-blue-400">Subdomain:</strong> <code>api</code>, <code>www</code>, <code>app</code>, <code>admin</code></li>
                </ul>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Zone Tree Example</h4>
                <div className="bg-slate-900 border border-slate-800 p-2.5  text-[11px] text-slate-300">
                  taskflow.com (Apex Zone)<br />
                  ├── www.taskflow.com (Frontend landing)<br />
                  ├── app.taskflow.com (Next.js Dashboard)<br />
                  ├── api.taskflow.com (Workers Edge API)<br />
                  ├── cdn.taskflow.com (R2 Public Assets)<br />
                  └── mail.taskflow.com (SMTP Mail Server)
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 12: Registrar vs DNS Provider vs Web Host
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 04 • SEPARATION OF ROLES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s12_title">Registrar vs DNS Provider vs Web Host</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s12_sub">Three distinct roles often confused by early-career developers</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/15 text-amber-400 ">CRITICAL DISTINCTION</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-orange-400 font-bold">ROLE 1: REGISTRAR</span>
                <h4 className="text-white font-bold text-sm">Where you bought the domain</h4>
                <p className="text-slate-300">Namecheap, GoDaddy, Porkbun, Cloudflare Registrar. Maintains WHOIS ownership and specifies who your Authoritative Nameservers are.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5 border-orange-500/40">
                <span className=" text-orange-400 font-bold">ROLE 2: DNS PROVIDER</span>
                <h4 className="text-orange-400 font-bold text-sm">Where DNS records live</h4>
                <p className="text-slate-300">Cloudflare Nameservers (e.g. <code>ns1.cloudflare.com</code>). Answers queries translating hostnames into IP addresses.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-blue-400 font-bold">ROLE 3: WEB HOST</span>
                <h4 className="text-white font-bold text-sm">Where code actually executes</h4>
                <p className="text-slate-300">Vercel, AWS EC2, DigitalOcean VPS, Cloudflare Pages. Receives HTTP traffic and runs your backend code.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 13: Domain Scenarios: Third-Party vs Registrar
export function Slide13({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 05 • REGISTRATION SCENARIOS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s13_title">Domain Scenarios: Third-Party vs Registrar</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s13_sub">Scenario A (External Registrar) vs Scenario B (Cloudflare Registrar)</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">SCENARIOS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Scenario A: Domain Bought Elsewhere (Common)</h4>
                <p className="text-slate-300">Your domain was purchased on Namecheap, GoDaddy, or Porkbun.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  Registrar (Namecheap)<br />
                  &nbsp;&nbsp;↓ (Change Nameservers)<br />
                  Cloudflare Nameservers (Authoritative DNS)<br />
                  &nbsp;&nbsp;↓ (Proxied)<br />
                  Website / Origin Hosting
                </div>
                <p className="text-slate-400 text-[11px]">You keep paying the original registrar for yearly domain renewal, but Cloudflare controls all DNS &amp; proxying.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Scenario B: Cloudflare Registrar</h4>
                <p className="text-slate-300">You purchase or transfer your domain directly to Cloudflare Registrar.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-400">
                  Cloudflare Registrar (At-cost wholesale pricing)<br />
                  &nbsp;&nbsp;↓ (Automatically assigns)<br />
                  Cloudflare Nameservers<br />
                  &nbsp;&nbsp;↓<br />
                  Cloudflare Edge Services
                </div>
                <p className="text-slate-400 text-[11px]">Cloudflare sells domains at wholesale registry cost with zero markup. Nameservers are locked to Cloudflare.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 14: Adding an Existing Domain to Cloudflare
export function Slide14({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 06 • ONBOARDING WORKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s14_title">Adding an Existing Domain to Cloudflare</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s14_sub">The 6-step onboarding workflow to safely migrate your zone</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">WORKFLOW</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">STEP 01</span>
                <span className="text-white font-bold">Add Domain in Dashboard</span>
                <span className="text-slate-300">Click "Add a domain". Enter the apex name (e.g. <code>taskflow.com</code>, without <code>https://</code> or <code>www</code>).</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">STEP 02</span>
                <span className="text-white font-bold">Select Plan</span>
                <span className="text-slate-300">Select Free plan ($0/mo) for standard websites, or Pro for advanced WAF and image optimization.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1 border-amber-500/40">
                <span className=" text-amber-400 font-bold">STEP 03 (CRITICAL)</span>
                <span className="text-white font-bold">Review DNS Records</span>
                <span className="text-slate-300">Cloudflare automatically scans public records. You MUST verify every A, CNAME, MX, and TXT record.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">STEP 04</span>
                <span className="text-white font-bold">Receive Nameservers</span>
                <span className="text-slate-300">Cloudflare assigns 2 unique nameservers (e.g., <code>kloe.ns.cloudflare.com</code>, <code>pete.ns.cloudflare.com</code>).</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">STEP 05</span>
                <span className="text-white font-bold">Update Registrar</span>
                <span className="text-slate-300">Log in to Namecheap/GoDaddy, select Custom DNS, and replace existing nameservers with Cloudflare's.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-green-400 font-bold">STEP 06</span>
                <span className="text-white font-bold">Zone Activation</span>
                <span className="text-slate-300">Wait for propagation (usually 5 to 30 minutes). Cloudflare status turns to "Active".</span>
              </div>
            </div>
    </div>
  );
}

// Slide 15: CRITICAL: Review Existing DNS First
export function Slide15({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-red-400">SECTION 06 • SAFETY WARNING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s15_title">CRITICAL: Review Existing DNS First</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s15_sub">Why updating nameservers without auditing DNS can take down your company</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">DANGER ZONE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-red-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-red-400 font-bold">The Automatic Scan Fallacy</h4>
                <p className="text-slate-300">When you add a domain, Cloudflare queries common record names (like <code>www</code>, <code>mail</code>, <code>api</code>). It <strong className="text-red-400">CANNOT</strong> find non-standard subdomains (e.g. <code>staging-auth-internal.taskflow.com</code>) or private TXT records.</p>
                <div className="p-2.5 bg-red-900/20 border border-red-500/30 text-red-300">
                  If an existing record is missing when you switch nameservers, that service INSTANTLY ceases to exist for the entire world.
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">What Commonly Breaks</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><strong className="text-orange-400">Corporate Email:</strong> Missing MX records cause bounced emails globally.</li>
                  <li><strong className="text-orange-400">Email Deliverability:</strong> Missing SPF/DKIM TXT records marks mail as spam.</li>
                  <li><strong className="text-orange-400">Third-Party SaaS:</strong> Google Search Console, Postmark, Stripe verification.</li>
                  <li><strong className="text-orange-400">Internal Microservices:</strong> Private APIs and staging servers break.</li>
                </ul>
              </div>
            </div>
    </div>
  );
}

// Slide 16: Nameservers Explained
export function Slide16({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 07 • NAMESERVERS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s16_title">Nameservers Explained</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s16_sub">Authoritative nameservers vs Recursive resolvers and delegation</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">CONCEPTS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Recursive Resolver (e.g. 1.1.1.1 or ISP)</h4>
                <p className="text-slate-300">The "detective" DNS server your browser contacts. It doesn't own any records; its job is to traverse the root servers and TLD servers to discover who holds the authoritative answers.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  Client → Asks Resolver: "What is taskflow.com?"<br />
                  Resolver → Asks Root (.) → Asks .com TLD → Reaches Cloudflare
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Authoritative Nameserver (Cloudflare)</h4>
                <p className="text-slate-300">The ultimate source of truth. Holds the actual DNS database records for <code>taskflow.com</code>. Whatever Cloudflare nameservers publish is the official answer given to the recursive resolver.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-400">
                  Cloudflare Nameserver answers:<br />
                  "taskflow.com points to 104.21.72.18 with TTL 300s"
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 17: How DNS Resolution Works Step-by-Step
export function Slide17({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 07 • RESOLUTION LIFECYCLE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s17_title">How DNS Resolution Works Step-by-Step</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s17_sub">Following a DNS query from browser cache to Cloudflare Anycast</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">FLOW DIAGRAM</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">dns-resolution-flow</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
1. User types "taskflow.com" in Chrome
   └── Browser Cache? ──(Miss)──&gt; OS Cache? ──(Miss)──&gt; Router DNS?
2. Request hits Recursive Resolver (e.g. 1.1.1.1)
   ├── Asks Root Nameserver (.) ──────────────&gt; Returns: Ask ".com" TLD
   ├── Asks .com TLD Nameserver ──────────────&gt; Returns: "taskflow.com is delegated to Cloudflare: pete.ns.cloudflare.com"
   └── Asks Cloudflare Authoritative NS ───────&gt; Returns IP: 104.21.72.18 (TTL: 300)
3. Resolver caches answer and returns IP to Browser
4. Browser establishes TCP connection + TLS 1.3 Handshake with Cloudflare Edge
              </div>
            </div>
    </div>
  );
}

// Slide 18: Core DNS Records: A, AAAA & CNAME
export function Slide18({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 08 • DNS RECORDS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s18_title">Core DNS Records: A, AAAA &amp; CNAME</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s18_sub">IPv4 addresses, IPv6 addresses, and canonical alias routing</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">RECORDS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-blue-400 font-bold">TYPE A (Address)</span>
                <p className="text-slate-300">Maps a hostname to an <strong>IPv4</strong> address (32-bit number).</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-blue-300">
                  Name: @<br />
                  Target: 198.51.100.24<br />
                  Proxy: Proxied
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-purple-400 font-bold">TYPE AAAA (IPv6)</span>
                <p className="text-slate-300">Maps a hostname to an <strong>IPv6</strong> address (128-bit hexadecimal).</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-purple-300">
                  Name: @<br />
                  Target: 2001:db8::1<br />
                  Proxy: Proxied
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-orange-400 font-bold">TYPE CNAME (Alias)</span>
                <p className="text-slate-300">Aliases one hostname to another. Cloudflare supports CNAME Flattening at the apex!</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-300">
                  Name: www<br />
                  Target: taskflow.com<br />
                  Proxy: Proxied
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 19: Service DNS Records: MX, TXT, NS, CAA & SRV
export function Slide19({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 08 • SERVICE RECORDS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s19_title">Service DNS Records: MX, TXT, NS, CAA &amp; SRV</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s19_sub">Routing email, domain verification, nameservers, and certificate authorities</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">MAIL &amp; AUTH</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">MX (Mail Exchange)</span>
                <p className="text-slate-300">Directs incoming email to designated mail servers (e.g. Proton, Google Workspace). <strong className="text-red-400">Must NEVER be proxied!</strong></p>
                <div className=" text-[11px] bg-slate-900 p-1.5 text-slate-300">MX @ mail.protonmail.ch (Priority 10)</div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-green-400 font-bold">TXT (Text &amp; Verification)</span>
                <p className="text-slate-300">Holds arbitrary text for SPF email authentication, DKIM signatures, and domain ownership tokens.</p>
                <div className=" text-[11px] bg-slate-900 p-1.5 text-slate-300">TXT @ "v=spf1 include:_spf.protonmail.ch ~all"</div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-purple-400 font-bold">CAA (Certificate Authority Authorization)</span>
                <p className="text-slate-300">Declares which CAs (e.g. Let's Encrypt, DigiCert) are allowed to issue SSL certificates for this domain.</p>
                <div className=" text-[11px] bg-slate-900 p-1.5 text-slate-300">CAA @ 0 issue "letsencrypt.org"</div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-blue-400 font-bold">SRV &amp; NS</span>
                <p className="text-slate-300">SRV defines location of specific services (port, weight). NS delegates subdomains to other nameservers.</p>
                <div className=" text-[11px] bg-slate-900 p-1.5 text-slate-300">NS dev ns1.internal-corp.net</div>
              </div>
            </div>
    </div>
  );
}

// Slide 20: INTERACTIVE: Simulated DNS Editor
export function Slide20({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-2 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400" data-i18n="ui_sim_label">SIMULATION ONLY</span>
                <h2 className="slide-title text-xl font-extrabold text-white m-0" data-i18n="s20_title">INTERACTIVE: Simulated DNS Editor</h2>
                <p className="text-[12px] text-slate-400 m-0" data-i18n="s20_sub">Practice adding A, CNAME, and MX records with simulated resolution</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 ">SANDBOX</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-3">
              <div className="bg-slate-900 border border-slate-800 p-3 flex flex-col gap-2 text-xs">
                <h4 className="text-white font-bold">Add DNS Record</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-slate-400 text-[10px] block ">Type</label>
                    <select id="sim-dns-type" className="w-full bg-slate-900 border border-slate-700 text-white p-1  text-xs">
                      <option value="A">A (IPv4)</option>
                      <option value="AAAA">AAAA (IPv6)</option>
                      <option value="CNAME">CNAME (Alias)</option>
                      <option value="MX">MX (Mail)</option>
                      <option value="TXT">TXT (Text)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 text-[10px] block ">Name (@ or sub)</label>
                    <input type="text" id="sim-dns-name" placeholder="@" className="w-full bg-slate-900 border border-slate-700 text-white p-1  text-xs" />
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-[10px] block ">Target / Value</label>
                  <input type="text" id="sim-dns-target" placeholder="198.51.100.24" className="w-full bg-slate-900 border border-slate-700 text-white p-1  text-xs" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="sim-dns-proxy" checked className="w-3.5 h-3.5 cursor-pointer" />
                    <span id="sim-proxy-cloud-icon" style={{ color: "#f97316" }}>☁</span>
                    <span id="sim-proxy-status-label" className="text-orange-400 font-bold text-[11px]">Proxied</span>
                  </div>
                  <button id="sim-btn-add-dns" className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs cursor-pointer transition-colors">+ Add Record</button>
                </div>

                <div className="border-t border-slate-800 pt-2 mt-1 flex flex-col gap-1.5">
                  <span className="text-slate-400 text-[10px] ">Test DNS Query Resolution</span>
                  <div className="flex gap-1.5">
                    <input type="text" id="sim-query-input" value="taskflow.com" placeholder="taskflow.com" className="flex-1 bg-slate-900 border border-slate-700 text-white p-1  text-xs" />
                    <button id="sim-btn-run-query" className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer">Resolve</button>
                  </div>
                  <div id="sim-query-output" className="bg-slate-900 border border-slate-800 p-2  text-[11px] min-h-[50px] text-slate-300">
                    Click "Resolve" to test query against the virtual Cloudflare nameserver.
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-2 flex flex-col overflow-y-auto max-h-[280px]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400  text-[10px] uppercase">
                      <th className="p-1.5">Type</th>
                      <th className="p-1.5">Name</th>
                      <th className="p-1.5">Target</th>
                      <th className="p-1.5">TTL</th>
                      <th className="p-1.5">Status</th>
                      <th className="p-1.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody id="sim-dns-table-body"></tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 21: Proxy Status: Proxied vs DNS Only
export function Slide21({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 10 • PROXY STATUS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s21_title">Proxy Status: Proxied vs DNS Only</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s21_sub">The crucial difference between the Orange Cloud and Grey Cloud</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-orange-500/30 bg-orange-500/15 text-orange-400 ">ORANGE VS GREY</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-orange-500/30 p-3.5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 text-lg">☁</span>
                  <h4 className="text-orange-400 font-bold text-sm">Proxied (Orange Cloud)</h4>
                </div>
                <p className="text-slate-300">Traffic passes through Cloudflare's global edge network. Public queries resolve to Cloudflare Anycast IPs, shielding your origin.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-300">
                  Visitor → Cloudflare Edge (CDN + WAF + DDoS) → Origin Server
                </div>
                <span className="text-green-400 font-bold">✓ Best for: Public web apps, HTTP APIs, static assets.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-lg">☁</span>
                  <h4 className="text-slate-300 font-bold text-sm">DNS Only (Grey Cloud)</h4>
                </div>
                <p className="text-slate-300">Cloudflare acts purely as a fast authoritative nameserver. Traffic connects directly to the server IP without touching Cloudflare proxy.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  Visitor → Direct Connection to Origin IP (No WAF, No CDN)
                </div>
                <span className="text-amber-400 font-bold">! Best for: SSH, FTP, MX records, VPN endpoints.</span>
              </div>
            </div>
    </div>
  );
}

// Slide 22: When to Proxy vs When NOT to Proxy
export function Slide22({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 10 • DECISION MATRIX</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s22_title">When to Proxy vs When NOT to Proxy</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s22_sub">Proxy HTTP/HTTPS websites — Do NOT proxy SSH, FTP, or raw TCP/UDP (unless Spectrum)</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">RULES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-green-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-green-400 font-bold text-sm">ALWAYS Proxy (Orange Cloud)</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><code>taskflow.com</code> (Apex web application)</li>
                  <li><code>www.taskflow.com</code> (Landing page)</li>
                  <li><code>api.taskflow.com</code> (REST or GraphQL API endpoints)</li>
                  <li><code>admin.taskflow.com</code> (Web admin dashboard)</li>
                  <li><code>cdn.taskflow.com</code> (Static asset delivery)</li>
                </ul>
              </div>
              <div className="bg-slate-800/80 border border-red-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-red-400 font-bold text-sm">NEVER Proxy (Leave Grey Cloud)</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><code>mail.taskflow.com</code> / MX records (SMTP email will break)</li>
                  <li><code>ssh.taskflow.com</code> (SSH port 22 is dropped by standard HTTP proxy)</li>
                  <li><code>ftp.taskflow.com</code> (FTP port 21 is not an HTTP protocol)</li>
                  <li>Database direct connection hostnames (e.g. Postgres port 5432)</li>
                </ul>
              </div>
            </div>
    </div>
  );
}

// Slide 23: Understanding Reverse Proxies
export function Slide23({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 11 • REVERSE PROXY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s23_title">Understanding Reverse Proxies</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s23_sub">How Cloudflare terminates connections and shields origin IP addresses</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">ARCHITECTURE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Forward Proxy vs Reverse Proxy</h4>
                <p className="text-slate-300"><strong className="text-slate-200">Forward Proxy:</strong> Sits in front of <em>clients</em> (e.g. corporate VPN). Hides client identities from destination servers.</p>
                <p className="text-slate-300"><strong className="text-orange-400">Reverse Proxy:</strong> Sits in front of <em>origin servers</em>. Clients think they are communicating directly with the origin, but are actually talking to Cloudflare.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Origin Shielding</h4>
                <p className="text-slate-300">Because TCP handshakes terminate at Cloudflare's edge, malicious port scans (Nmap) and direct SYN floods hit Cloudflare's massive infrastructure instead of exhausting your server's RAM or bandwidth.</p>
                <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-300  text-[11px]">
                  Client IP ──&gt; [Cloudflare Edge (TLS Termination)] ──&gt; [Origin Server]
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 24: Reverse Proxy Inspection & Headers
export function Slide24({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 11 • PROXY HEADERS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s24_title">Reverse Proxy Inspection &amp; Headers</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s24_sub">CF-Connecting-IP, X-Forwarded-For, TLS termination, and header rewriting</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">HEADERS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">The Origin IP Problem</h4>
                <p className="text-slate-300">When requests are proxied, your Nginx or Node.js server sees the incoming TCP connection originating from a Cloudflare IP (e.g. <code>172.70.x.x</code>), NOT the visitor's real IP.</p>
                <p className="text-slate-300">To inspect the real visitor IP for audit logging, geo-location, or local rate limiting, your app must read Cloudflare-injected headers.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2  text-[11px]">
                <h4 className="text-orange-400 font-bold font-sans text-xs">Essential Headers Injected by Cloudflare</h4>
                <div className="bg-slate-900 p-2 text-slate-300 space-y-1">
                  <div><span className="text-blue-400 font-bold">CF-Connecting-IP:</span> 203.0.113.195</div>
                  <div><span className="text-blue-400 font-bold">X-Forwarded-For:</span> 203.0.113.195, 172.70.42.1</div>
                  <div><span className="text-blue-400 font-bold">CF-IPCountry:</span> KH</div>
                  <div><span className="text-blue-400 font-bold">CF-Visitor:</span> &#123;"scheme":"https"&#125;</div>
                  <div><span className="text-blue-400 font-bold">CF-Ray:</span> 8df4a91b2c4e098a-BKK</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 25: What is a Content Delivery Network (CDN)?
export function Slide25({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 12 • CDN FUNDAMENTALS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s25_title">What is a Content Delivery Network (CDN)?</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s25_sub">Bringing static content closer to users worldwide to slash latency</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">CDN</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">The Speed of Light Constraint</h4>
                <p className="text-slate-300">Data traveling over fiber optics takes time. A round-trip packet from Southeast Asia to a Virginia server takes ~220ms minimum. Adding TLS handshakes and multiple asset requests means page load times exceed 3+ seconds.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">The CDN Solution</h4>
                <p className="text-slate-300">By caching images (WebP/AVIF), CSS bundles, JavaScript scripts, and fonts on edge SSDs in 330+ cities, requests are answered in 10–25ms without ever touching your origin server.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 26: CDN Cache Hit vs Cache Miss Anatomy
export function Slide26({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 12 • CACHE ANATOMY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s26_title">CDN Cache Hit vs Cache Miss Anatomy</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s26_sub">User in Cambodia requested an asset: Edge delivery vs Origin fetch</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">CF-CACHE-STATUS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-amber-400 font-bold">1. First Request: Cache MISS</h4>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  User in Phnom Penh requests /logo.png<br />
                  Cloudflare Edge (Phnom Penh) checks SSD: NOT FOUND<br />
                  Cloudflare fetches /logo.png from US Origin (220ms)<br />
                  Cloudflare stores copy in local edge cache<br />
                  Response delivered to user with header:<br />
                  <span className="text-amber-400 font-bold">cf-cache-status: MISS</span>
                </div>
              </div>
              <div className="bg-slate-800/80 border border-green-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-green-400 font-bold">2. Second Request: Cache HIT</h4>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-green-300">
                  Next user in Phnom Penh requests /logo.png<br />
                  Cloudflare Edge finds copy in local memory/SSD<br />
                  Instantly serves asset in 12ms!<br />
                  Zero origin requests, zero origin bandwidth used.<br />
                  Response header:<br />
                  <span className="text-green-400 font-bold">cf-cache-status: HIT</span>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 27: The Three Levels of Caching
export function Slide27({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 13 • CACHING TIERS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s27_title">The Three Levels of Caching</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s27_sub">Browser Cache → Cloudflare CDN Edge Cache → Origin Application Cache</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">MULTI-TIER</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-blue-400 font-bold">TIER 1: BROWSER CACHE</span>
                <p className="text-slate-300">Stored on client's local disk/memory. Zero network requests made. Governed by <code>max-age</code>.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5 border-orange-500/40">
                <span className=" text-orange-400 font-bold">TIER 2: EDGE CDN CACHE</span>
                <p className="text-slate-300">Stored on Cloudflare PoPs worldwide. Shared among millions of visitors in that geographic region. Governed by <code>s-maxage</code>.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-purple-400 font-bold">TIER 3: ORIGIN CACHE</span>
                <p className="text-slate-300">Redis / Memcached / Nginx FastCGI cache on your server. Protects your PostgreSQL database from expensive query repeats.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 28: Cache-Control Headers & Edge TTL
export function Slide28({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 13 • HTTP HEADERS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s28_title">Cache-Control Headers &amp; Edge TTL</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s28_sub">Mastering max-age, s-maxage, public, private, and stale-while-revalidate</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">SPECIFICATION</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2  text-[11px]">
                <h4 className="text-white font-bold font-sans text-xs">Essential Directives</h4>
                <div className="space-y-1.5 text-slate-300">
                  <div><strong className="text-orange-400">public:</strong> Can be cached by browser AND CDN edge.</div>
                  <div><strong className="text-red-400">private:</strong> Only user browser may cache (never CDN).</div>
                  <div><strong className="text-blue-400">max-age=3600:</strong> Cache in browser for 1 hour.</div>
                  <div><strong className="text-green-400">s-maxage=86400:</strong> Cache in Cloudflare CDN for 24h.</div>
                  <div><strong className="text-purple-400">stale-while-revalidate:</strong> Serve stale while fetching fresh in background.</div>
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold text-xs">Production Example: Static Bundles</h4>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-green-400">
                  Cache-Control: public, max-age=31536000, immutable
                </div>
                <p className="text-slate-300">Next.js and Vite append content hashes (e.g. <code>app-8f2a1.js</code>). Because the filename changes whenever code changes, you can cache these for 1 full year without fear of stale code!</p>
              </div>
            </div>
    </div>
  );
}

// Slide 29: Cache Invalidation: Purging Strategies
export function Slide29({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 13 • INVALIDATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s29_title">Cache Invalidation: Purging Strategies</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s29_sub">Purge Everything (nuclear option) vs Single URL vs Cache-Tags</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">PURGING</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5 border-red-500/30">
                <span className=" text-red-400 font-bold">1. Purge Everything</span>
                <h4 className="text-white font-bold text-sm">Nuclear Invalidation</h4>
                <p className="text-slate-300">Clears ALL cached assets across all 330+ data centers immediately. Causes a massive traffic spike on your origin server as millions of requests suddenly miss cache.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-orange-400 font-bold">2. Purge by Single URL</span>
                <h4 className="text-white font-bold text-sm">Surgical URL Flush</h4>
                <p className="text-slate-300">Flushes only specific paths (e.g. <code>https://taskflow.com/pricing</code>) without disturbing other cached assets. Ideal for CMS content updates.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-green-400 font-bold">3. Cache-Tags (Enterprise)</span>
                <h4 className="text-white font-bold text-sm">Group Invalidation</h4>
                <p className="text-slate-300">Tag assets with headers like <code>Cache-Tag: product-123</code>. Purging that one tag purges 50 related images and pages instantly.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 30: Caching Dynamic vs Static Content
export function Slide30({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-red-400">SECTION 13 • CRITICAL SAFETY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s30_title">Caching Dynamic vs Static Content</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s30_sub">Never cache authenticated user sessions, cookies, or sensitive API payloads</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">DATA LEAK RISK</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-red-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-red-400 font-bold">The Catastrophic Data Leak Scenario</h4>
                <p className="text-slate-300">If you configure Cloudflare Cache Rules with "Cache Everything" on <code>/api/user/profile</code> or pages with a <code>Set-Cookie</code> header, User A's private dashboard and session token will be cached at the edge and served to User B!</p>
              </div>
              <div className="bg-slate-800/80 border border-green-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-green-400 font-bold">Golden Caching Rules</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Always include <code className="text-white">Cache-Control: private, no-store</code> on authenticated endpoints.</li>
                  <li>Cloudflare automatically bypasses cache if it detects <code>Set-Cookie</code> unless explicitly overridden.</li>
                  <li>Cache HTML pages only if they are completely public and static.</li>
                </ul>
              </div>
            </div>
    </div>
  );
}

// Slide 31: SSL / TLS Encryption Fundamentals
export function Slide31({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 14 • CRYPTOGRAPHY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s31_title">SSL / TLS Encryption Fundamentals</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s31_sub">HTTP vs HTTPS, asymmetric encryption, certificates, and handshake</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">TLS 1.3</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Why HTTPS is Mandatory</h4>
                <p className="text-slate-300">Plaintext HTTP (port 80) exposes user passwords, cookies, and tokens to ISP snooping and coffee-shop Wi-Fi packet sniffing. HTTPS (TLS 1.3 on port 443) encrypts payloads end-to-end.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Cloudflare Universal SSL</h4>
                <p className="text-slate-300">Cloudflare automatically provisions, verifies, and auto-renews free TLS certificates for every added domain (covering apex <code>taskflow.com</code> and wildcard <code>*.taskflow.com</code>).</p>
              </div>
            </div>
    </div>
  );
}

// Slide 32: The Security Illusion: Edge vs Origin
export function Slide32({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-red-400">SECTION 14 • THE SECURITY ILLUSION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s32_title">The Security Illusion: Edge vs Origin</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s32_sub">Encrypting Browser-to-Cloudflare is only HALF the connection</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">TWO LEGS</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">two-legs-of-tls-connection</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
LEG 1: Browser ────────(Encrypted HTTPS)────────&gt; Cloudflare Edge
                                                        │
                                         [Is Leg 2 also encrypted?]
                                                        │
LEG 2: Cloudflare Edge ────(?? Plain HTTP or HTTPS ??)──&gt; Your Origin Server

DANGER: Having a green padlock in the user's browser does NOT mean your connection is secure!
If Leg 2 uses plain HTTP, attackers on the origin hosting network can read all user passwords in plaintext.
              </div>
            </div>
    </div>
  );
}

// Slide 33: Cloudflare SSL / TLS Modes Explained
export function Slide33({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 15 • SSL MODES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s33_title">Cloudflare SSL / TLS Modes Explained</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s33_sub">Off, Flexible, Full, and Full (Strict) architectural comparison</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">SSL MODES</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-slate-400 font-bold">1. Off</span>
                <span className="text-white font-bold">No Encryption</span>
                <span className="text-slate-400">Plaintext HTTP only on both legs. Legacy, insecure, never use.</span>
              </div>
              <div className="bg-slate-800/80 border border-red-500/30 p-3 flex flex-col gap-1">
                <span className=" text-red-400 font-bold">2. Flexible</span>
                <span className="text-white font-bold">Insecure Hybrid</span>
                <span className="text-slate-400">Browser to Cloudflare is HTTPS. Cloudflare to origin is plain HTTP (port 80). Highly vulnerable!</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-yellow-400 font-bold">3. Full</span>
                <span className="text-white font-bold">Encrypted (No Validation)</span>
                <span className="text-slate-400">Both legs use HTTPS, but Cloudflare accepts self-signed or expired origin certs.</span>
              </div>
              <div className="bg-slate-800/80 border border-green-500/40 p-3 flex flex-col gap-1 bg-green-900/20">
                <span className=" text-green-400 font-bold">4. Full (Strict)</span>
                <span className="text-white font-bold">Production Standard</span>
                <span className="text-slate-300">Both legs encrypted. Cloudflare validates origin certificate authenticity. Mandatory!</span>
              </div>
            </div>
    </div>
  );
}

// Slide 34: Why Flexible SSL is Dangerous
export function Slide34({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-red-400">SECTION 15 • PITFALL</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s34_title">Why Flexible SSL is Dangerous</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s34_sub">Preventing Man-In-The-Middle attacks between Cloudflare and your origin</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">AVOID FLEXIBLE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Problem 1: Infinite Redirect Loops</h4>
                <p className="text-slate-300">In Flexible mode, Cloudflare forwards traffic to origin on port 80 (HTTP). If your origin has an Nginx rule: <code>return 301 https://$host$request_uri;</code>, Nginx sends redirect back to browser. Cloudflare repeats on port 80. Result: <span className="text-red-400  font-bold">ERR_TOO_MANY_REDIRECTS</span>.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-red-400 font-bold">Problem 2: Man-In-The-Middle Snooping</h4>
                <p className="text-slate-300">Data travels unencrypted over the open internet between Cloudflare edge and your cloud provider. Anyone between Cloudflare and your origin can extract database credentials and auth cookies.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 35: Cloudflare Origin CA Certificates
export function Slide35({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 15 • ORIGIN CERTIFICATES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s35_title">Cloudflare Origin CA Certificates</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s35_sub">Free 15-year certificates installed directly on Nginx, Apache, or Caddy</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">FREE 15-YEAR CERT</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">How Origin CA Solves SSL</h4>
                <p className="text-slate-300">You don't need Let's Encrypt Certbot cron jobs that fail renewals. Cloudflare generates a free certificate signed by Cloudflare's internal CA with up to 15 years validity, trusted specifically by Cloudflare edge servers.</p>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800  text-[11px]">
                <div className="p-2 bg-slate-900 border-b border-slate-800 text-slate-400 font-bold">Nginx Origin Configuration</div>
                <div className="p-3 text-slate-200 leading-relaxed overflow-x-auto">
server &#123;
  listen 443 ssl http2;
  server_name taskflow.com;
  ssl_certificate /etc/ssl/cloudflare.crt;
  ssl_certificate_key /etc/ssl/cloudflare.key;
  ssl_protocols TLSv1.2 TLSv1.3;
&#125;
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 36: Domain + HTTPS Production Workflow
export function Slide36({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 16 • CHECKLIST</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s36_title">Domain + HTTPS Production Workflow</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s36_sub">End-to-end checklist for zero-downtime, fully verified HTTPS setup</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">CHECKLIST</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">The Golden 5-Step Order</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>Install SSL certificate on your origin server first (port 443 active).</li>
                  <li>In Cloudflare dashboard, toggle SSL/TLS mode to <strong className="text-green-400">Full (Strict)</strong>.</li>
                  <li>Enable <strong className="text-orange-400">Always Use HTTPS</strong> under Edge Certificates.</li>
                  <li>Turn on <strong className="text-blue-400">Automatic HTTPS Rewrites</strong> to prevent mixed content errors.</li>
                  <li>Enable <strong className="text-purple-400">HSTS</strong> (HTTP Strict Transport Security) with max-age=31536000.</li>
                </ol>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Verification Command</h4>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  $ curl -Iv https://taskflow.com<br />
                  * TLS 1.3 connection using TLS_AES_256_GCM_SHA384<br />
                  * Server certificate: *.taskflow.com (Cloudflare Inc)<br />
                  &lt; HTTP/2 200<br />
                  &lt; strict-transport-security: max-age=31536000
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 37: DDoS Protection at Edge Scale
export function Slide37({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 17 • DDOS MITIGATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s37_title">DDoS Protection at Edge Scale</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s37_sub">Volumetric floods (SYN, UDP) and Layer 7 HTTP application attacks</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">DEFENSE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Layer 3 &amp; Layer 4 Attacks (Volumetric)</h4>
                <p className="text-slate-300">Attacks like SYN floods, UDP amplification, and NTP reflection aim to overwhelm network bandwidth. Cloudflare's autonomous DDoS engine scrubs these packets in real-time at the edge router level using XDP and eBPF.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Layer 7 Attacks (HTTP Floods)</h4>
                <p className="text-slate-300">Attackers send valid HTTP GET/POST requests targeting expensive backend queries (e.g. database search). Cloudflare detects abnormal request rates and challenges suspicious clients via Turnstile.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 38: Web Application Firewall (WAF)
export function Slide38({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 18 • WAF</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s38_title">Web Application Firewall (WAF)</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s38_sub">Managed Core Rules vs Custom Rules for blocking exploits and SQLi/XSS</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">FIREWALL</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Cloudflare Managed Rulesets</h4>
                <p className="text-slate-300">Maintained and constantly updated by Cloudflare security analysts. Blocks zero-day vulnerabilities (e.g. Log4j, Spring4Shell) and OWASP Top 10 threats before patches can even be written for your backend.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Custom Expression Rules</h4>
                <p className="text-slate-300">Create precise rules using Wireshark-like boolean logic syntax.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-300">
                  (http.request.uri.path contains "/admin" and not ip.src in &#123;203.0.113.50&#125;)<br />
                  Action: BLOCK
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 39: WAF Rule Actions & Threat Detection
export function Slide39({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 18 • WAF ACTIONS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s39_title">WAF Rule Actions &amp; Threat Detection</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s39_sub">Choosing between Allow, Managed Challenge (Turnstile), and Block</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">ACTIONS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-green-500/30 p-3 flex flex-col gap-1.5">
                <span className=" text-green-400 font-bold">ALLOW / SKIP</span>
                <p className="text-slate-300">Explicitly bypasses other security checks. Use for trusted partner webhook IPs (e.g. Stripe, GitHub).</p>
              </div>
              <div className="bg-slate-800/80 border border-orange-500/30 p-3 flex flex-col gap-1.5">
                <span className=" text-orange-400 font-bold">MANAGED CHALLENGE</span>
                <p className="text-slate-300">Shows an invisible or one-click Cloudflare Turnstile challenge. Genuine humans pass seamlessly; automated bots fail.</p>
              </div>
              <div className="bg-slate-800/80 border border-red-500/30 p-3 flex flex-col gap-1.5">
                <span className=" text-red-400 font-bold">BLOCK</span>
                <p className="text-slate-300">Returns an immediate HTTP 403 Forbidden with a branded error page. Drops payload before reaching origin.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 40: Rate Limiting for Critical Endpoints
export function Slide40({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 19 • RATE LIMITING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s40_title">Rate Limiting for Critical Endpoints</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s40_sub">Safeguarding /api/login, password reset, checkout, and AI inference routes</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">RATE LIMITING</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Why Rate Limiting is Critical</h4>
                <p className="text-slate-300">Without rate limiting, credential stuffers can guess 10,000 passwords a second against your <code>/api/auth/login</code> endpoint, or exhaust expensive OpenAI API tokens on your AI chat endpoints.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2  text-[11px]">
                <h4 className="text-orange-400 font-bold font-sans text-xs">Production Rule Example</h4>
                <div className="bg-slate-900 p-2.5 text-slate-300 space-y-1">
                  <div>Path: <span className="text-blue-400">/api/auth/login</span></div>
                  <div>Method: <span className="text-orange-400">POST</span></div>
                  <div>Rate: <span className="text-red-400 font-bold">5 requests per 1 minute</span></div>
                  <div>Action: <span className="text-yellow-400">Block for 15 minutes (HTTP 429)</span></div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 41: Bot Management & Automated Traffic
export function Slide41({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 20 • BOT MANAGEMENT</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s41_title">Bot Management &amp; Automated Traffic</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s41_sub">Detecting content scrapers, credential stuffers, and allowing verified search bots</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">BOT MANAGEMENT</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Good Bots vs Bad Bots</h4>
                <p className="text-slate-300"><strong className="text-green-400">Verified Good Bots:</strong> Googlebot, Bingbot, Slack preview bot, Stripe webhooks. Cloudflare validates their cryptographic signatures and automatically allows them.</p>
                <p className="text-slate-300"><strong className="text-red-400">Malicious Bots:</strong> Content scrapers, vulnerability scanners, and automated credential test suites. Cloudflare scores requests with machine learning (Bot Score 1–99).</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Turnstile: The CAPTCHA Killer</h4>
                <p className="text-slate-300">Traditional CAPTCHAs (click the traffic lights) frustrate users. Cloudflare Turnstile replaces them with an invisible or non-interactive privacy-preserving proof-of-human challenge.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 42: The Cloudflare Rules Architecture
export function Slide42({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 21 • RULES ENGINE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s42_title">The Cloudflare Rules Architecture</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s42_sub">Redirect Rules, Transform Rules, Cache Rules, and Configuration Rules</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">RULES</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">Redirect Rules</span>
                <span className="text-white font-bold">Edge 301 / 302</span>
                <span className="text-slate-400">Redirect www to apex or migrate old URL paths without hitting origin.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-blue-400 font-bold">Transform Rules</span>
                <span className="text-white font-bold">Header &amp; URL Rewrite</span>
                <span className="text-slate-400">Modify HTTP request/response headers or rewrite internal paths at edge.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-green-400 font-bold">Cache Rules</span>
                <span className="text-white font-bold">Fine-Grained TTL</span>
                <span className="text-slate-400">Override edge cache TTL for specific patterns (e.g. /static/*).</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-purple-400 font-bold">Config Rules</span>
                <span className="text-white font-bold">Security Overrides</span>
                <span className="text-slate-400">Disable Rocket Loader or tweak security levels for specific subdomains.</span>
              </div>
            </div>
    </div>
  );
}

// Slide 43: Canonical Redirects: HTTP/HTTPS & Apex/WWW
export function Slide43({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 22 • REDIRECTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s43_title">Canonical Redirects: HTTP/HTTPS &amp; Apex/WWW</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s43_sub">Creating clean 301 Permanent Redirects without hitting origin servers</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">CANONICAL</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Why Canonical URLs Matter</h4>
                <p className="text-slate-300">If your website responds to both <code>http://taskflow.com</code>, <code>https://taskflow.com</code>, and <code>https://www.taskflow.com</code>, search engines (Google) penalize your SEO for duplicate content.</p>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800  text-[11px]">
                <div className="p-2 bg-slate-900 border-b border-slate-800 text-orange-400 font-bold">Cloudflare Redirect Rule: www to apex</div>
                <div className="p-3 text-slate-200 leading-relaxed overflow-x-auto">
When incoming request matches:
(http.host eq "www.taskflow.com")

Then Redirect to (301 Permanent):
concat("https://taskflow.com", http.request.uri.path)
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 44: Custom Domain Architecture
export function Slide44({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 23 • SUBDOMAIN ROUTING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s44_title">Custom Domain Architecture</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s44_sub">Managing apex, www, app, api, admin, and cdn subdomains under one zone</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">TOPOLOGY</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">single-zone-multi-subdomain-map</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
CLOUDFLARE ZONE: taskflow.com
├── taskflow.com       ──(CNAME Proxied)──&gt; Vercel Production (Landing Page)
├── www.taskflow.com   ──(Redirect Rule)──&gt; 301 to taskflow.com
├── app.taskflow.com   ──(CNAME Proxied)──&gt; Vercel / Next.js Dashboard
├── api.taskflow.com   ──(Worker Route)──&gt; Cloudflare Worker (Edge API Gateway)
├── cdn.taskflow.com   ──(Custom Domain)─&gt; Cloudflare R2 Bucket (Zero Egress Assets)
└── admin.taskflow.com ──(Cloudflare Access)──&gt; Protected by Google/GitHub 2FA SSO
              </div>
            </div>
    </div>
  );
}

// Slide 45: Cloudflare + Vercel Architecture
export function Slide45({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 24 • FULLSTACK TOPOLOGY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s45_title">Cloudflare + Vercel Architecture</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s45_sub">Visitor → Cloudflare (DNS/WAF) → Vercel (Next.js) → Neon (PostgreSQL)</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">STACK A</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Connecting Cloudflare to Vercel</h4>
                <p className="text-slate-300">Set a CNAME record in Cloudflare: <code>cname.vercel-dns.com</code>. In Vercel, set SSL to Full (Strict). Cloudflare provides global DDoS scrubbing and custom WAF rate limits before requests hit Vercel's serverless budget.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Avoiding Conflicting DNS Settings</h4>
                <p className="text-slate-300">Do NOT configure Vercel nameservers at your registrar if you want Cloudflare. Cloudflare MUST be your authoritative DNS. Vercel acts purely as the application origin host.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 46: Cloudflare + Self-Hosted VPS Architecture
export function Slide46({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 25 • FULLSTACK TOPOLOGY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s46_title">Cloudflare + Self-Hosted VPS Architecture</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s46_sub">Visitor → Cloudflare → Nginx / Docker → Application → PostgreSQL</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">STACK B</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Ubuntu / Debian Production Topology</h4>
                <p className="text-slate-300">Run your Laravel, Go, or Next.js app in Docker containers or systemd behind an Nginx reverse proxy. Cloudflare terminates external TLS 1.3 and handles caching.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  Visitor → Cloudflare Edge (Proxied A Record)<br />
                  &nbsp;&nbsp;↓ (Port 443 with Origin CA Certificate)<br />
                  VPS Nginx Reverse Proxy<br />
                  &nbsp;&nbsp;↓ (localhost:3000)<br />
                  Node.js / Laravel App ⇄ PostgreSQL / Redis
                </div>
              </div>
              <div className="bg-slate-800/80 border border-red-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-red-400 font-bold">Mandatory Origin Hardening</h4>
                <p className="text-slate-300">If your VPS IP is known, attackers can bypass Cloudflare and DDoS your server directly. You MUST configure UFW to only accept inbound port 80/443 traffic from Cloudflare's published IP ranges!</p>
              </div>
            </div>
    </div>
  );
}

// Slide 47: Introduction to Cloudflare Workers
export function Slide47({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 26 • SERVERLESS REVOLUTION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s47_title">Introduction to Cloudflare Workers</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s47_sub">Edge serverless execution powered by V8 isolates with 0ms cold starts</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-orange-500/30 bg-orange-500/15 text-orange-400 ">WORKERS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Containers vs V8 Isolates</h4>
                <p className="text-slate-300">Traditional AWS Lambda serverless spins up micro-containers or Node.js runtimes, causing painful 500ms–2000ms "cold starts".</p>
                <p className="text-slate-300"><strong className="text-orange-400">Cloudflare Workers</strong> runs on Google Chrome's V8 engine using lightweight "Isolates". Hundreds of thousands of isolates run safely in a single shared memory process with <strong className="text-green-400">0ms cold start</strong>.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Global Distributed Execution</h4>
                <p className="text-slate-300">Your Worker script is deployed to all 330+ Cloudflare edge data centers simultaneously. A user in Tokyo executes code in Tokyo; a user in London executes code in London.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 48: Anatomy of a Cloudflare Worker
export function Slide48({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 26 • WORKER CODE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s48_title">Anatomy of a Cloudflare Worker</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s48_sub">The standard fetch handler, Request, Response, and Context objects</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">SYNTAX</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">src/index.ts — Modern ES Module Worker</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
export default &#123;
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise&lt;Response&gt; &#123;
    const url = new URL(request.url);

    if (url.pathname === "/api/health") &#123;
      return Response.json(&#123; status: "healthy", edgeRegion: request.cf?.colo || "UNKNOWN" &#125;);
    &#125;

    // Pass through to origin or modify headers
    const response = await fetch(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set("X-Powered-By", "Cloudflare Workers Edge");
    return newResponse;
  &#125;
&#125;;
              </div>
            </div>
    </div>
  );
}

// Slide 49: Creating Your First Worker
export function Slide49({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 27 • WORKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s49_title">Creating Your First Worker</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s49_sub">Dashboard live editor vs modern local development with Wrangler CLI</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">DEVELOPMENT</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Option A: Dashboard Quick Creation</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>In Cloudflare dashboard, click <strong>Workers &amp; Pages</strong>.</li>
                  <li>Click <strong>Create Application</strong> → <strong>Create Worker</strong>.</li>
                  <li>Name it <code>hello-worker</code> and click <strong>Deploy</strong>.</li>
                  <li>Click <strong>Edit code</strong> to edit directly in the web browser.</li>
                </ol>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Option B: Modern Professional CLI (Recommended)</h4>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300 space-y-1">
                  <div>$ pnpm create cloudflare@latest taskflow-api</div>
                  <div className="text-slate-400"># Choose "Hello World" Worker with TypeScript</div>
                  <div>$ cd taskflow-api</div>
                  <div>$ pnpm run dev &nbsp;&nbsp;<span className="text-green-400"># Local Miniflare server</span></div>
                  <div>$ pnpm run deploy</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 50: Worker Routes & Custom Hostnames
export function Slide50({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 28 • WORKER ROUTES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s50_title">Worker Routes &amp; Custom Hostnames</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s50_sub">Binding Workers to api.example.com/* or intercepting origin traffic</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">ROUTING</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Pattern 1: Dedicated Subdomain (Custom Domain)</h4>
                <p className="text-slate-300">Attach the Worker directly to <code>api.taskflow.com</code> in the Workers Settings. All requests to that hostname execute your Worker with automatic SSL certificate management.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Pattern 2: Route Matching (Path Interception)</h4>
                <p className="text-slate-300">Intercept specific sub-paths of an existing proxied domain:</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-300">
                  Route: taskflow.com/api/*<br />
                  Service: taskflow-api-worker<br />
                  Zone: taskflow.com
                </div>
                <p className="text-slate-400 text-[11px]">Requests to <code>taskflow.com/api/*</code> hit the Worker. All other paths continue normally to Vercel/VPS!</p>
              </div>
            </div>
    </div>
  );
}

// Slide 51: Building an Edge API with Workers
export function Slide51({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 29 • EDGE API</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s51_title">Building an Edge API with Workers</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s51_sub">Handling HTTP methods, JSON responses, CORS headers, and error handling</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">API GATEWAY</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">Edge API Router Example</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
export default &#123;
  async fetch(req: Request): Promise&lt;Response&gt; &#123;
    const corsHeaders = &#123;
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    &#125;;

    if (req.method === "OPTIONS") return new Response(null, &#123; headers: corsHeaders &#125;);

    const url = new URL(req.url);
    if (url.pathname === "/api/tasks" &amp;&amp; req.method === "GET") &#123;
      const tasks = [&#123; id: 1, title: "Review Cloudflare WAF", status: "completed" &#125;];
      return Response.json(tasks, &#123; headers: corsHeaders &#125;);
    &#125;

    return new Response("Not Found", &#123; status: 404, headers: corsHeaders &#125;);
  &#125;
&#125;;
              </div>
            </div>
    </div>
  );
}

// Slide 52: Secrets, Env Variables & Bindings
export function Slide52({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-red-400">SECTION 30 • SECRETS &amp; BINDINGS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s52_title">Secrets, Env Variables &amp; Bindings</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s52_sub">Securing API keys and binding storage primitives without client leaks</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">SECRETS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">1. Plaintext Variables vs Encrypted Secrets</h4>
                <p className="text-slate-300">Non-sensitive variables (e.g. <code>ENVIRONMENT = "production"</code>) belong in <code>wrangler.jsonc</code>.</p>
                <p className="text-slate-300"><strong className="text-red-400">Secrets (API tokens, database keys)</strong> must NEVER be committed to Git. Store them encrypted using Wrangler CLI:</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-400">
                  $ pnpm exec wrangler secret put DATABASE_URL<br />
                  Enter secret value: postgresql://...
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">2. The "Bindings" Paradigm</h4>
                <p className="text-slate-300">Unlike traditional clouds where you manage connection strings, IP addresses, and SDK credentials, Cloudflare binds resources (KV, R2, Queues) directly to the Worker's <code>env</code> object.</p>
                <div className="p-2.5 bg-green-500/10 border border-green-500/20 text-green-300  text-[11px]">
                  // No API key needed to talk to R2 bucket!<br />
                  await env.AVATARS_BUCKET.put("avatar.jpg", stream);
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 53: Cloudflare R2 Object Storage
export function Slide53({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 31 • OBJECT STORAGE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s53_title">Cloudflare R2 Object Storage</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s53_sub">S3-compatible object storage with ZERO data egress bandwidth fees</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">ZERO EGRESS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">The AWS S3 Egress Tax Problem</h4>
                <p className="text-slate-300">AWS charges $0.09 per gigabyte whenever users download files from S3. For video, image-heavy apps, or database backups, egress bandwidth bills often exceed compute costs by 10x!</p>
              </div>
              <div className="bg-slate-800/80 border border-green-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-green-400 font-bold">The R2 Revolution</h4>
                <p className="text-slate-300"><strong className="text-white">Cloudflare R2</strong> provides 100% S3-compatible API semantics with <strong className="text-green-400 font-bold">$0.00 egress fees</strong>. You only pay for stored gigabytes and API operations (Class A/B).</p>
                <div className="p-2 bg-slate-900 border border-slate-800  text-[11px] text-slate-300">
                  Use for: User avatars, PDF reports, database backups, audio files.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 54: Practical R2: TaskFlow Avatar Storage
export function Slide54({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 32 • PRACTICAL R2</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s54_title">Practical R2: TaskFlow Avatar Storage</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s54_sub">Secure image uploads via Worker, pre-signed URLs, and bucket permissions</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">IMPLEMENTATION</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">Worker R2 Upload Handler</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
// PUT /api/upload/avatar/:userId
const key = `avatars/$&#123;userId&#125;-$&#123;Date.now()&#125;.png`;

await env.USER_BUCKET.put(key, request.body, &#123;
  httpMetadata: &#123; contentType: "image/png" &#125;
&#125;);

// Store key in Neon PostgreSQL: "avatars/usr_123-1729410000.png"
// Serve via public custom domain: https://cdn.taskflow.com/avatars/...
return Response.json(&#123; success: true, key &#125;);
              </div>
            </div>
    </div>
  );
}

// Slide 55: Cloudflare KV: Global Key-Value Store
export function Slide55({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 33 • KEY-VALUE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s55_title">Cloudflare KV: Global Key-Value Store</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s55_sub">High-read, low-write eventual consistency for configuration and caches</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">KV STORE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">What is Cloudflare KV?</h4>
                <p className="text-slate-300">A globally distributed key-value data store optimized for ultra-fast, low-latency reads. Once written, data replicates across edge caches worldwide in ~10 seconds.</p>
                <div className="p-2.5 bg-slate-900 border border-slate-800  text-[11px] text-slate-300">
                  await env.CONFIG_KV.get("FEATURE_AI_CHAT");<br />
                  await env.CONFIG_KV.put("MAINTENANCE_MODE", "false", &#123; expirationTtl: 3600 &#125;);
                </div>
              </div>
              <div className="bg-slate-800/80 border border-red-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-red-400 font-bold">What KV is NOT</h4>
                <p className="text-slate-300"><strong className="text-white">NOT a Relational Database:</strong> KV has no SQL, no table joins, and no ACID multi-row transactions. Do NOT use it for user balances, banking, or complex relations. Use Neon PostgreSQL for that!</p>
              </div>
            </div>
    </div>
  );
}

// Slide 56: Cloudflare Durable Objects
export function Slide56({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 34 • STATEFUL EDGE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s56_title">Cloudflare Durable Objects</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s56_sub">Strongly consistent, stateful coordination for real-time multiplayer &amp; WebSockets</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">DURABLE OBJECTS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">The Stateless Serverless Dilemma</h4>
                <p className="text-slate-300">Standard serverless workers are ephemeral and stateless. If 10 users join a live chatroom or collaborate on a Google Docs canvas, how do they coordinate in real-time with zero race conditions?</p>
              </div>
              <div className="bg-slate-800/80 border border-purple-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-purple-400 font-bold">Single-Point-of-Truth Coordination</h4>
                <p className="text-slate-300">Durable Objects provide guaranteed single-instance coordination. All WebSocket connections for chat room <code>#room-101</code> route to the exact same physical actor instance with embedded transactional SQLite storage.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 57: Cloudflare Queues: Background Jobs
export function Slide57({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 35 • QUEUES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s57_title">Cloudflare Queues: Background Jobs</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s57_sub">Guaranteed message delivery for email, heavy processing, and webhooks</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">QUEUES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Decoupling Edge from Heavy Work</h4>
                <p className="text-slate-300">Never make a user wait 5 seconds while your API generates a PDF invoice or calls Resend to send a welcome email. Publish a message to a queue and respond to the user in 15ms.</p>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800  text-[11px]">
                <div className="p-2 bg-slate-900 border-b border-slate-800 text-slate-400 font-bold">Producer &amp; Consumer Pattern</div>
                <div className="p-3 text-slate-200 leading-relaxed overflow-x-auto">
// Producer Worker (API):
await env.EMAIL_QUEUE.send(&#123; to: "user@example.com", template: "welcome" &#125;);

// Consumer Worker:
export default &#123;
  async queue(batch: MessageBatch, env: Env) &#123;
    for (const msg of batch.messages) &#123;
      await sendEmail(msg.body);
      msg.ack();
    &#125;
  &#125;
&#125;;
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 58: Cloudflare Zero Trust Architecture
export function Slide58({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 36 • ZERO TRUST</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s58_title">Cloudflare Zero Trust Architecture</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s58_sub">Never trust, always verify: Identity-based security replacing legacy VPNs</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">ZERO TRUST</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">The Flaw of Legacy Corporate VPNs</h4>
                <p className="text-slate-300">Traditional VPNs follow "castle and moat" security. Once an employee connects to the VPN, they have access to the entire private internal subnet (printers, databases, servers).</p>
              </div>
              <div className="bg-slate-800/80 border border-purple-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-purple-400 font-bold">Zero Trust: Granular Identity Access</h4>
                <p className="text-slate-300">Every single request to an internal application is authenticated against your identity provider (Google Workspace, GitHub, Okta), checking user identity, device posture, and geolocation.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 59: Cloudflare Access for Private Apps
export function Slide59({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 36 • ACCESS SSO</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s59_title">Cloudflare Access for Private Apps</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s59_sub">Protect internal admin dashboards with Google, GitHub, or Okta SSO</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">ACCESS SSO</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">protecting-internal-admin-dashboard</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
Application: admin.taskflow.com
Policy Name: Engineering Team Only
Action: Allow
Rules:
  - Include: Emails ending in @acme.com
  - Require: 2FA Authentication via Google Workspace SSO
  - Block: IP Country outside Cambodia / Singapore

Result: An unauthenticated stranger loading admin.taskflow.com sees a clean Cloudflare login screen. Zero packets reach your backend until identity is verified!
              </div>
            </div>
    </div>
  );
}

// Slide 60: Cloudflare Tunnel (cloudflared)
export function Slide60({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 37 • TUNNELS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s60_title">Cloudflare Tunnel (cloudflared)</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s60_sub">Secure outbound-only connection from private servers without open ports</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">CLOUDFLARED</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Zero Inbound Firewall Ports Needed</h4>
                <p className="text-slate-300">Normally, web servers require port 80 and 443 to be publicly exposed to the internet. With <strong>Cloudflare Tunnel</strong>, a lightweight daemon (<code>cloudflared</code>) runs on your server and creates an encrypted OUTBOUND tunnel to the nearest Cloudflare data center.</p>
              </div>
              <div className="bg-slate-800/80 border border-green-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-green-400 font-bold">Unmatched Attack Immunity</h4>
                <p className="text-slate-300">You can completely close all incoming ports on your firewall (even ports 80/443). The server has zero public IP surface for hackers to scan!</p>
              </div>
            </div>
    </div>
  );
}

// Slide 61: Practical Tunnel: Exposing Localhost
export function Slide61({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 38 • PRACTICAL TUNNEL</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s61_title">Practical Tunnel: Exposing Localhost</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s61_sub">Exposing localhost:3000 to app.example.com securely in 3 minutes</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">DEMO</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">cloudflared-quick-tunnel</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
# 1. Install cloudflared daemon
$ brew install cloudflared  # or apt install cloudflared

# 2. Login and authorize your zone
$ cloudflared tunnel login

# 3. Create a named tunnel
$ cloudflared tunnel create local-dev-tunnel

# 4. Route hostname to tunnel
$ cloudflared tunnel route dns local-dev-tunnel dev.taskflow.com

# 5. Run tunnel pointing to local Next.js server
$ cloudflared tunnel run --url http://localhost:3000 local-dev-tunnel
# Live at: https://dev.taskflow.com (with automated SSL and DDoS protection!)
              </div>
            </div>
    </div>
  );
}

// Slide 62: Cloudflare API & Scoped Tokens
export function Slide62({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 39 • AUTOMATION API</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s62_title">Cloudflare API &amp; Scoped Tokens</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s62_sub">Automating zone settings and deployments using least-privilege tokens</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">REST API</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">Automated DNS Record Update via REST API</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
$ curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
     -H "Authorization: Bearer $CF_API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '&#123;
       "type": "A",
       "name": "staging.taskflow.com",
       "content": "198.51.100.88",
       "ttl": 1,
       "proxied": true
     &#125;'
              </div>
            </div>
    </div>
  );
}

// Slide 63: Wrangler CLI Development Workflow
export function Slide63({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 40 • WRANGLER CLI</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s63_title">Wrangler CLI Development Workflow</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s63_sub">wrangler dev, deploy, tail, and configuring wrangler.jsonc / toml</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">WRANGLER</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2  text-[11px]">
                <h4 className="text-white font-bold font-sans text-xs">Essential Wrangler Commands</h4>
                <div className="space-y-1 text-slate-300">
                  <div><span className="text-orange-400 font-bold">$ pnpm exec wrangler login</span></div>
                  <div><span className="text-blue-400 font-bold">$ pnpm exec wrangler dev</span> # Local emulation</div>
                  <div><span className="text-green-400 font-bold">$ pnpm exec wrangler deploy</span> # Deploy to 330+ PoPs</div>
                  <div><span className="text-purple-400 font-bold">$ pnpm exec wrangler tail</span> # Stream real-time edge logs</div>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800  text-[11px]">
                <div className="p-2 bg-slate-900 border-b border-slate-800 text-slate-400 font-bold">wrangler.jsonc</div>
                <div className="p-3 text-slate-300 leading-relaxed overflow-x-auto">
&#123;
  "name": "taskflow-api",
  "main": "src/index.ts",
  "compatibility_date": "2026-10-01",
  "r2_buckets": [
    &#123; "binding": "USER_BUCKET", "bucket_name": "taskflow-assets" &#125;
  ]
&#125;
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 64: Git Integration & CI/CD Pipelines
export function Slide64({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 41 • CI/CD AUTOMATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s64_title">Git Integration &amp; CI/CD Pipelines</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s64_sub">Automating Workers and Pages deployments from GitHub pull requests</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">GITHUB ACTIONS</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">.github/workflows/deploy.yml</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
name: Deploy Worker to Cloudflare
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - uses: actions/setup-node@v4
        with: &#123; node-version: 20, cache: 'pnpm' &#125;
      - run: pnpm install --frozen-lockfile
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: $&#123;&#123; secrets.CLOUDFLARE_API_TOKEN &#125;&#125;
              </div>
            </div>
    </div>
  );
}

// Slide 65: Cloudflare Pages Platform
export function Slide65({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 42 • CLOUDFLARE PAGES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s65_title">Cloudflare Pages Platform</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s65_sub">Modern Jamstack and fullstack web hosting with automatic Git deployments</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">PAGES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">What is Cloudflare Pages?</h4>
                <p className="text-slate-300">Cloudflare's developer-first Jamstack platform. Connect your GitHub or GitLab repo, and every <code>git push</code> triggers an automatic containerized build and global edge deployment.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Key Platform Features</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Unlimited free bandwidth with zero surprise overage fees.</li>
                  <li>Automated preview deployments for every Pull Request.</li>
                  <li>Fullstack support: drop functions into a <code>/functions</code> directory.</li>
                  <li>Instant custom domain mapping to your Cloudflare zone.</li>
                </ul>
              </div>
            </div>
    </div>
  );
}

// Slide 66: Pages vs Vercel vs Traditional VPS
export function Slide66({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 42 • ARCHITECTURAL COMPARISON</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s66_title">Pages vs Vercel vs Traditional VPS</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s66_sub">Architectural comparison: strengths, trade-offs, and when to pick each</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">COMPARISON</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-orange-500/30 p-3 flex flex-col gap-1.5">
                <span className=" text-orange-400 font-bold">Cloudflare Pages</span>
                <p className="text-slate-300 font-bold">Unrivaled Edge Bandwidth &amp; Cost</p>
                <p className="text-slate-400">Best for static sites, Vite, Astro, and edge workers. Zero bandwidth billing surprises. Instant global propagation.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-blue-400 font-bold">Vercel</span>
                <p className="text-slate-300 font-bold">Best-in-Class Next.js DX</p>
                <p className="text-slate-400">Native creator of Next.js with zero-config ISR, Server Components, and AI streaming. Higher bandwidth costs at large scale.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-green-400 font-bold">Traditional VPS</span>
                <p className="text-slate-300 font-bold">Total Kernel &amp; Container Control</p>
                <p className="text-slate-400">Best for long-running cron jobs, websockets, local Postgres databases, and Docker microservices. Requires manual OS patching.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 67: Deploying a Static Web App to Pages
export function Slide67({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 43 • STATIC SITE WORKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s67_title">Deploying a Static Web App to Pages</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s67_sub">Connecting GitHub repository, build configurations, and custom domains</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">DEPLOYMENT</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Step-by-Step Pages Setup</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>In Cloudflare Dashboard: <strong>Workers &amp; Pages</strong> → <strong>Create application</strong> → <strong>Pages</strong>.</li>
                  <li>Click <strong>Connect to Git</strong> and select your GitHub repository.</li>
                  <li>Configure Build Settings:
                    <div className="bg-slate-900 p-2  text-[11px] text-orange-300 mt-1">
                      Build command: pnpm run build<br />
                      Build output directory: dist (or out for Next.js export)
                    </div>
                  </li>
                  <li>Click <strong>Save and Deploy</strong>. Your site is live on <code>*.pages.dev</code>.</li>
                  <li>Navigate to <strong>Custom Domains</strong> and map <code>taskflow.com</code> in one click!</li>
                </ol>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800  text-[11px]">
                <div className="p-2 bg-slate-900 border-b border-slate-800 text-slate-400 font-bold">Direct CLI Deploy (No Git required)</div>
                <div className="p-3 text-slate-300 leading-relaxed overflow-x-auto">
$ pnpm run build
$ pnpm exec wrangler pages deploy ./dist \
    --project-name=taskflow-web

✨ Success! Uploaded 42 files (1.4s)
🌎 https://taskflow-web.pages.dev
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 68: Next.js on Cloudflare: Real-World Guide
export function Slide68({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 44 • NEXT.JS ADVISORY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s68_title">Next.js on Cloudflare: Real-World Guide</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s68_sub">Static export vs OpenNext vs edge runtime considerations and compatibility</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/15 text-amber-400 ">ADVISORY</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Path A: Static Export (100% Solid)</h4>
                <p className="text-slate-300">Set <code>output: 'export'</code> in <code>next.config.js</code>. Generates pure HTML/CSS/JS files in the <code>/out</code> folder. Deploys flawlessly to Cloudflare Pages with zero edge runtime incompatibilities.</p>
              </div>
              <div className="bg-slate-800/80 border border-amber-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-amber-400 font-bold">Path B: Dynamic SSR with OpenNext</h4>
                <p className="text-slate-300">If using dynamic Server-Side Rendering (SSR) or Server Actions, use <code>@opennextjs/cloudflare</code>. Keep in mind that Cloudflare Workers run on V8 Isolates, not full Node.js. Node-specific libraries (like <code>fs</code> or native C++ addons) will fail.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 69: Email DNS: MX, SPF, DKIM & DMARC
export function Slide69({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-red-400">SECTION 45 • EMAIL PRESERVATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s69_title">Email DNS: MX, SPF, DKIM &amp; DMARC</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s69_sub">How to prevent broken corporate email when transferring DNS to Cloudflare</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">SAFETY</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">The 4 Critical Email Records</h4>
                <ul className="space-y-1 text-slate-300">
                  <li><strong className="text-orange-400">MX:</strong> Points to mail servers (Google, Proton, Outlook). <span className="text-red-400 font-bold">Must be DNS ONLY!</span></li>
                  <li><strong className="text-blue-400">SPF (TXT):</strong> Defines which server IPs can send email for your domain.</li>
                  <li><strong className="text-green-400">DKIM (TXT/CNAME):</strong> Cryptographic signature proving emails weren't forged.</li>
                  <li><strong className="text-purple-400">DMARC (TXT):</strong> Tells receiving servers what to do if SPF/DKIM fail.</li>
                </ul>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800  text-[11px]">
                <div className="p-2 bg-slate-900 border-b border-slate-800 text-slate-400 font-bold">Verification Commands</div>
                <div className="p-3 text-slate-300 leading-relaxed overflow-x-auto">
$ dig taskflow.com MX +short
10 mail.protonmail.ch.

$ dig _dmarc.taskflow.com TXT +short
"v=DMARC1; p=reject; rua=mailto:dmarc@taskflow.com"
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 70: Pre-Migration DNS Safety Checklist
export function Slide70({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-red-400">SECTION 46 • PRE-MIGRATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s70_title">Pre-Migration DNS Safety Checklist</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s70_sub">10 critical audit checks before changing nameservers at your registrar</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">10 COMMANDMENTS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className="text-orange-400 font-bold">1. Export Zone File</span>
                <span className="text-slate-300">Download a full BIND/zone backup from your existing registrar or DNS host.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className="text-orange-400 font-bold">2. Audit MX &amp; Email TXT</span>
                <span className="text-slate-300">Compare every MX, SPF, DKIM, and DMARC record side-by-side with imported records.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className="text-orange-400 font-bold">3. Check Staging &amp; Internal Subdomains</span>
                <span className="text-slate-300">Ensure non-public subdomains (e.g. <code>qa.taskflow.com</code>) are manually added.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className="text-orange-400 font-bold">4. Audit DNSSEC Status</span>
                <span className="text-slate-300">Disable old DS records at registrar before switching nameservers to prevent lookup failure.</span>
              </div>
            </div>
    </div>
  );
}

// Slide 71: DNSSEC: Security & Migration Gotchas
export function Slide71({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 47 • DNSSEC</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s71_title">DNSSEC: Security &amp; Migration Gotchas</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s71_sub">Cryptographic validation of DNS records and how misconfigured DS records break resolution</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/15 text-purple-400 ">DNSSEC</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">What DNSSEC Protects</h4>
                <p className="text-slate-300">DNS Security Extensions (DNSSEC) signs DNS responses with cryptographic keys (RRSIG). Prevents DNS spoofing / cache poisoning where hackers hijack traffic to fake servers.</p>
              </div>
              <div className="bg-slate-800/80 border border-red-500/30 p-3.5 flex flex-col gap-2">
                <h4 className="text-red-400 font-bold">The Migration Trap (SERVFAIL)</h4>
                <p className="text-slate-300">If DNSSEC is active at your registrar with your OLD DNS provider, changing nameservers to Cloudflare will cause DNS resolvers worldwide to fail verification and return <code>SERVFAIL</code>.</p>
                <div className="p-2 bg-slate-900 border border-slate-800  text-[11px] text-slate-300">
                  Migration rule: Delete old DS records at registrar → Switch nameservers → Wait 24h → Enable Cloudflare DNSSEC and add new DS record.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 72: Defense in Depth Security Model
export function Slide72({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 48 • DEFENSE IN DEPTH</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s72_title">Defense in Depth Security Model</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s72_sub">Multi-layered perimeter: DNS → DDoS → WAF → Rate Limit → TLS → Access → Origin</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">DEFENSE IN DEPTH</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">layered-security-flow</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
[INTERNET VISITOR]
      │
      ▼
1. Cloudflare Anycast DNS (DNSSEC cryptographic integrity)
      │
      ▼
2. L3/L4 DDoS Mitigation (Volumetric SYN/UDP floods dropped at edge)
      │
      ▼
3. TLS 1.3 Termination (Modern ciphers, HSTS, HTTP/3 QUIC)
      │
      ▼
4. Web Application Firewall (WAF) (OWASP SQLi/XSS inspection)
      │
      ▼
5. Rate Limiting &amp; Bot Management (Turnstile human verification)
      │
      ▼
6. Zero Trust Access (Identity SSO for internal paths /admin)
      │
      ▼
[ORIGIN FIREWALL] (Only accepts packets from Cloudflare IPs / Authenticated Pulls)
      │
      ▼
[APPLICATION SERVER] (Next.js / Laravel / Go on Port 443)
              </div>
            </div>
    </div>
  );
}

// Slide 73: Origin Server Hardening
export function Slide73({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 49 • ORIGIN HARDENING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s73_title">Origin Server Hardening</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s73_sub">Restricting origin firewall to Cloudflare IP ranges and Authenticated Origin Pulls</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">HARDENING</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">1. Cloudflare IP Whitelisting (UFW)</h4>
                <p className="text-slate-300">Drop all incoming traffic on ports 80 and 443 unless it comes from Cloudflare's published IP ranges:</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-300">
                  # Example UFW rule:<br />
                  $ sudo ufw allow from 173.245.48.0/20 to any port 443 proto tcp<br />
                  $ sudo ufw allow from 103.21.244.0/22 to any port 443 proto tcp<br />
                  $ sudo ufw default deny incoming
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">2. Authenticated Origin Pulls (mTLS)</h4>
                <p className="text-slate-300">Cloudflare presents a client SSL certificate to your origin Nginx server. If an attacker connects directly to your IP over HTTPS, Nginx rejects the TLS handshake because the client lacks Cloudflare's certificate.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 74: Observability, Logs & Analytics
export function Slide74({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 50 • OBSERVABILITY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s74_title">Observability, Logs &amp; Analytics</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s74_sub">Monitoring HTTP traffic, cache hit ratios, security events, and wrangler tail</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">OBSERVABILITY</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-orange-400 font-bold">1. Traffic Analytics</span>
                <p className="text-slate-300">Requests, bandwidth saved, unique visitors, and cache hit percentage over 24 hours.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-red-400 font-bold">2. Security Events</span>
                <p className="text-slate-300">Inspect blocked requests: IP address, matched WAF rule, country, and user agent.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-green-400 font-bold">3. Live Worker Tail</span>
                <p className="text-slate-300">Stream <code>console.log()</code> and unhandled exceptions in real-time from edge data centers.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 75: Troubleshooting: DNS Failures
export function Slide75({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 51 • DNS TROUBLESHOOTING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s75_title">Troubleshooting: DNS Failures</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s75_sub">Systematic diagnostic tree: nameserver verification, dig queries, and TTL</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">DIAGNOSTICS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-white font-bold">Diagnostic Flowchart</h4>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  Domain doesn't load<br />
                  ├── 1. Check WHOIS nameservers: Are they Cloudflare's?<br />
                  ├── 2. Run dig +trace: Is there a delegation failure?<br />
                  ├── 3. Check Proxy status: Orange Cloud vs Grey Cloud<br />
                  └── 4. Check DNSSEC: Is old DS record still at registrar?
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800  text-[11px]">
                <div className="p-2 bg-slate-900 border-b border-slate-800 text-slate-400 font-bold">Terminal Diagnostic Commands</div>
                <div className="p-3 text-slate-300 leading-relaxed overflow-x-auto">
$ dig +short NS taskflow.com
pete.ns.cloudflare.com.
kloe.ns.cloudflare.com.

$ dig +short taskflow.com @1.1.1.1
104.21.72.18
172.67.142.9
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 76: Troubleshooting: SSL & Redirect Loops
export function Slide76({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 52 • SSL TROUBLESHOOTING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s76_title">Troubleshooting: SSL &amp; Redirect Loops</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s76_sub">Diagnosing ERR_TOO_MANY_REDIRECTS, pending certificates, and mixed content</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/15 text-amber-400 ">SSL ERRORS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className="text-orange-400 font-bold">1. ERR_TOO_MANY_REDIRECTS</span>
                <p className="text-slate-300">Cause: SSL mode is set to <strong>Flexible</strong> while origin redirects HTTP to HTTPS. <span className="text-green-400">Fix: Set mode to Full (Strict).</span></p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className="text-orange-400 font-bold">2. SSL Handshake Failed (525)</span>
                <p className="text-slate-300">Cause: Cloudflare cannot complete TLS handshake with origin. <span className="text-green-400">Fix: Check origin port 443 is listening and TLSv1.2/1.3 enabled.</span></p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className="text-orange-400 font-bold">3. Mixed Content Warnings</span>
                <p className="text-slate-300">Cause: HTTPS page loading images over <code>http://</code>. <span className="text-green-400">Fix: Enable Automatic HTTPS Rewrites in Cloudflare.</span></p>
              </div>
            </div>
    </div>
  );
}

// Slide 77: Troubleshooting: 502 & 504 Errors
export function Slide77({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 53 • 502 &amp; 504</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s77_title">Troubleshooting: 502 &amp; 504 Errors</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s77_sub">Is the origin down, port closed, firewall blocking Cloudflare, or timing out?</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">GATEWAY ERRORS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-red-400 font-bold">502 Bad Gateway</h4>
                <p className="text-slate-300">Cloudflare reached your server's IP, but the server returned an invalid response, closed the TCP connection abruptly, or Nginx crashed.</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  Check: $ sudo systemctl status nginx<br />
                  Check: $ pm2 status (Node.js app crashed?)
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-amber-400 font-bold">504 Gateway Timeout</h4>
                <p className="text-slate-300">Cloudflare established a connection, but your origin took longer than 100 seconds to respond. Almost always caused by slow un-indexed database queries!</p>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  Check: PostgreSQL slow query logs<br />
                  Check: EXPLAIN ANALYZE on hanging queries
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 78: INTERACTIVE: Diagnostic Simulator
export function Slide78({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-2 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">INTERACTIVE WORKSHOP</span>
                <h2 className="slide-title text-xl font-extrabold text-white m-0" data-i18n="s78_title">INTERACTIVE: Diagnostic Simulator</h2>
                <p className="text-[12px] text-slate-400 m-0" data-i18n="s78_sub">Test your diagnostic skills across real-world Cloudflare production outages</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30 ">SIMULATION</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button className="scenario-nav-btn active px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer">1. Redirect Loop</button>
              <button className="scenario-nav-btn px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer">2. Broken Email</button>
              <button className="scenario-nav-btn px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer">3. 502 Bad Gateway</button>
              <button className="scenario-nav-btn px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer">4. Leaked Origin IP</button>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3 flex flex-col gap-2">
              <h4 id="trouble-scenario-title" className="text-white font-bold text-sm"></h4>
              <p id="trouble-scenario-desc" className="text-xs text-slate-300 leading-relaxed"></p>
            </div>

            <div id="trouble-options-container" className="flex flex-col gap-2"></div>
            <div id="trouble-feedback-panel" className="hidden"></div>
    </div>
  );
}

// Slide 79: Performance Optimization at the Edge
export function Slide79({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 54 • PERFORMANCE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s79_title">Performance Optimization at the Edge</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s79_sub">Brotli compression, Early Hints, HTTP/3 (QUIC), and cache optimization</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">SPEED</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-green-400 font-bold">Brotli</span>
                <span className="text-white font-bold">Next-Gen Compression</span>
                <span className="text-slate-400">Compresses text assets 20% smaller than standard Gzip.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-blue-400 font-bold">HTTP/3 (QUIC)</span>
                <span className="text-white font-bold">UDP Transport</span>
                <span className="text-slate-400">Zero head-of-line blocking on lossy mobile cellular networks.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-purple-400 font-bold">Early Hints (103)</span>
                <span className="text-white font-bold">Parallel Preload</span>
                <span className="text-slate-400">Sends CSS preload hints to browser while server prepares HTML.</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1">
                <span className=" text-orange-400 font-bold">Polish &amp; Mirage</span>
                <span className="text-white font-bold">Image Optimization</span>
                <span className="text-slate-400">Auto-converts JPEG/PNG to WebP/AVIF dynamically.</span>
              </div>
            </div>
    </div>
  );
}

// Slide 80: Cloudflare Plans & Cost Awareness
export function Slide80({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 55 • COST CONTROL</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s80_title">Cloudflare Plans &amp; Cost Awareness</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s80_sub">Understanding Free tier limits, Pro, Pay-as-you-go Workers/R2, and Enterprise features</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/15 text-blue-400 ">PLANS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-green-400 font-bold">FREE PLAN ($0/mo)</span>
                <p className="text-slate-300">Fast Anycast DNS, unlimited CDN bandwidth, unmetered DDoS mitigation, free SSL, 100,000 Worker requests/day, 10 GB free R2 storage.</p>
              </div>
              <div className="bg-slate-800/80 border border-orange-500/30 p-3 flex flex-col gap-1.5">
                <span className=" text-orange-400 font-bold">PRO ($20/mo)</span>
                <p className="text-slate-300">Cloudflare Managed WAF rulesets, Polish image optimization, mobile speed acceleration, and faster analytics reporting.</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5">
                <span className=" text-purple-400 font-bold">PAY-AS-YOU-GO WORKERS</span>
                <p className="text-slate-300">Workers Paid ($5/mo) unlocks 10M requests, CPU time limits up to 30s, and standard rates on KV, Durable Objects, and Queues.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 81: TaskFlow Cloud Master Architecture
export function Slide81({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 56 • GUIDED PROJECT</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s81_title">TaskFlow Cloud Master Architecture</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s81_sub">End-to-end production topology integrating Cloudflare, Next.js, and Neon</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">MASTER TOPOLOGY</span>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <span className="text-[11px] text-slate-400">taskflow-production-topology</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">Copy</button>
              </div>
              <div className="terminal-body p-3  text-xs leading-relaxed text-slate-300 overflow-x-auto">
USERS (Browsers, Mobile Apps worldwide)
  │
  ▼ (Anycast TLS 1.3)
CLOUDFLARE GLOBAL EDGE
  ├── DNS (taskflow.com)
  ├── DDoS Scrubbing &amp; WAF Rules
  ├── Rate Limiting on /api/auth/login
  ├── Edge Cache for Static Bundles
  │
  ├──► Route: api.taskflow.com/* ─────────► Cloudflare Worker (Edge API Gateway)
  │                                           │
  ├──► Route: cdn.taskflow.com/* ─────────► Cloudflare R2 Bucket (Avatars &amp; Attachments)
  │
  └──► Route: taskflow.com &amp; app.taskflow.com ──► Vercel (Next.js App Router)
                                                    │
                                                    ▼ (Connection Pooler)
                                                Neon Serverless PostgreSQL
              </div>
            </div>
    </div>
  );
}

// Slide 82: INTERACTIVE: Production Launch Checklist
export function Slide82({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-2 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400" data-i18n="ui_checklist_title">PRODUCTION LAUNCH AUDIT</span>
                <h2 className="slide-title text-xl font-extrabold text-white m-0" data-i18n="s82_title">INTERACTIVE: Production Launch Checklist</h2>
                <p className="text-[12px] text-slate-400 m-0" data-i18n="s82_sub">Interactive 20-point checklist saved to localStorage for your next launch</p>
              </div>
              <button id="btn-reset-checklist" className="px-2 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold cursor-pointer" data-i18n="ui_reset_checklist">Reset Checklist</button>
            </div>

            <div className="flex items-center justify-between text-xs ">
              <span id="check-count-label" className="text-green-400 font-bold">0 of 20 Checked (0%)</span>
              <div className="w-[200px] h-2 bg-slate-800 border border-slate-700 overflow-hidden">
                <div id="check-progress-bar" className="h-full bg-green-500 transition-all duration-200" style={{ width: "0%" }}></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs max-h-[300px] overflow-y-auto p-1">
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_1" /><span>1. Account 2FA enabled with hardware/TOTP</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_2" /><span>2. Scoped API tokens used instead of Global Key</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_3" /><span>3. Full DNS zone backup exported before nameserver switch</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_4" /><span>4. MX and email SPF/DKIM TXT records verified</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_5" /><span>5. MX records set strictly to DNS Only (Grey Cloud)</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_6" /><span>6. DNSSEC coordinated safely at domain registrar</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_7" /><span>7. Web records (A/CNAME) Orange-clouded (Proxied)</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_8" /><span>8. SSL/TLS mode set to Full (Strict)</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_9" /><span>9. Origin server has valid SSL certificate installed</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_10" /><span>10. 'Always Use HTTPS' enabled in Edge Certificates</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_11" /><span>11. HSTS enabled with max-age=31536000</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_12" /><span>12. WAF Managed Rules active against OWASP top 10</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_13" /><span>13. Rate limiting configured on /api/login endpoint</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_14" /><span>14. Origin firewall restricts 80/443 to Cloudflare IPs</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_15" /><span>15. Cache-Control headers verified (no auth leaks)</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_16" /><span>16. Worker secrets stored via wrangler secret put</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_17" /><span>17. R2 bucket access permissions strictly private</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_18" /><span>18. Canonical 301 redirect rule (www to apex) tested</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_19" /><span>19. Mobile and HTTP/3 QUIC connection verified</span></label>
              <label className="flex items-center gap-2 p-2 bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer"><input type="checkbox" className="prod-check-item cursor-pointer" data-check-key="chk_20" /><span>20. Real-time logging (wrangler tail &amp; HTTP logs) checked</span></label>
            </div>
    </div>
  );
}

// Slide 83: INTERACTIVE: Architecture Explorer
export function Slide83({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-2 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400" data-i18n="ui_arch_explorer_title">INTERACTIVE VISUALIZER</span>
                <h2 className="slide-title text-xl font-extrabold text-white m-0" data-i18n="s83_title">INTERACTIVE: Architecture Explorer</h2>
                <p className="text-[12px] text-slate-400 m-0" data-i18n="s83_sub">Click through Cloudflare layers to visualize data flow and responsibilities</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 ">EXPLORER</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button className="arch-layer-btn btn-primary-action px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer" data-layer="dns">1. Anycast DNS</button>
              <button className="arch-layer-btn px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer" data-layer="cdn">2. CDN &amp; Caching</button>
              <button className="arch-layer-btn px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer" data-layer="waf">3. WAF &amp; DDoS</button>
              <button className="arch-layer-btn px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer" data-layer="workers">4. Workers Compute</button>
              <button className="arch-layer-btn px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer" data-layer="r2">5. R2 Storage</button>
              <button className="arch-layer-btn px-2.5 py-1 text-xs font-bold border border-slate-700 bg-slate-800 text-slate-300 cursor-pointer" data-layer="tunnel">6. Zero Trust Tunnel</button>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3.5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span id="arch-detail-badge" className=" text-[10px] font-bold text-orange-400 uppercase">EDGE ENTRY POINT</span>
                <span className="text-[11px]  text-slate-400">Global PoP Active</span>
              </div>
              <h4 id="arch-detail-title" className="text-white font-bold text-base m-0">Authoritative Anycast DNS</h4>
              <p id="arch-detail-desc" className="text-xs text-slate-300 leading-relaxed m-0">The entry door to your entire online presence. Cloudflare Anycast responds from 330+ cities worldwide in under 12ms. Proxied records resolve to Cloudflare edge IPs.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                <div>
                  <span className="text-[10px] text-slate-400  block">Data Flow:</span>
                  <div id="arch-detail-flow" className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-green-400">
                    Client Resolver → Anycast 1.1.1.1 / 1.0.0.1 → Proxied Virtual IP
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400  block">Key Capabilities:</span>
                  <div id="arch-detail-settings" className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-orange-300">
                    Automatic TTL, CNAME flattening, DNSSEC signing, multi-record health checks.
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 84: Top 10 Costly Cloudflare Mistakes
export function Slide84({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-red-400">SECTION 58 • COMMON PITFALLS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s84_title">Top 10 Costly Cloudflare Mistakes</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s84_sub">Avoid common pitfalls that cause downtime, security leaks, and email failures</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/15 text-red-400 ">PITFALLS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 1. Switching nameservers without checking DNS:</span> Missing records break subdomains and email instantly.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 2. Orange-clouding MX / mail records:</span> Cloudflare HTTP proxy drops SMTP traffic completely.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 3. Using Flexible SSL mode:</span> Causes infinite redirect loops and leaves origin plaintext.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 4. Leaking origin server IP:</span> Attackers bypass Cloudflare WAF and hit your server directly.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 5. Caching private user data:</span> Misconfigured cache rules leak user auth tokens across browsers.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 6. Leaving old DNSSEC active:</span> Causes global SERVFAIL errors on newly assigned nameservers.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 7. Hardcoding API secrets in Workers code:</span> Always use <code>wrangler secret put</code>.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 8. Making R2 storage buckets public blindly:</span> Exposes internal assets and documents.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 9. Using Global API Key instead of Scoped Token:</span> Breached CI token compromises entire account.</div>
              <div className="p-2 bg-slate-800/80 border border-red-500/30"><span className="text-red-400 font-bold">❌ 10. Assuming Cloudflare alone makes origin secure:</span> Origin code still requires validation and SQL sanitization.</div>
            </div>
    </div>
  );
}

// Slide 85: The Master Cloudflare Cheat Sheet
export function Slide85({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div>
                <span className=" text-[11px] font-bold uppercase tracking-wider text-orange-400">SECTION 59 • FINAL SUMMARY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s85_title">The Master Cloudflare Cheat Sheet</h2>
                <p className="text-[13px] text-slate-400 m-0" data-i18n="s85_sub">Essential summary, key mental models, command reference, and best practices</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/15 text-green-400 ">COMPLETE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
                <h4 className="text-orange-400 font-bold">Core Mental Model Summary</h4>
                <div className="bg-slate-900 border border-slate-800 p-2  text-[11px] text-slate-300">
                  DOMAIN → NAMESERVERS → DNS → PROXY → SSL/TLS → CDN → WAF → APP → DB<br /><br />
                  • WORKERS → 0ms Cold Start Edge Compute<br />
                  • R2 → S3-Compatible Object Storage ($0 Egress)<br />
                  • KV → Low-Latency Global Key/Value Store<br />
                  • DURABLE OBJECTS → Stateful Edge Coordination<br />
                  • ZERO TRUST → Identity Access &amp; Outbound Tunnels
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800  text-[11px]">
                <div className="p-2 bg-slate-900 border-b border-slate-800 text-green-400 font-bold">Essential Developer Commands</div>
                <div className="p-3 text-slate-200 leading-relaxed overflow-x-auto">
$ pnpm exec wrangler dev        # Emulate Worker locally
$ pnpm exec wrangler deploy     # Deploy to 330+ cities
$ pnpm exec wrangler tail       # Live edge streaming logs
$ pnpm exec wrangler secret put # Store encrypted key
$ cloudflared tunnel run        # Expose localhost port
$ dig taskflow.com @1.1.1.1     # Verify Anycast DNS
                </div>
              </div>
            </div>
    </div>
  );
}

export const CLOUDFLARE_META = {
  id: "cloudflare",
  title: "Cloudflare: Global Edge Infrastructure",
  module: "MODULE 08",
  accent: "orange",
};

export const CLOUDFLARE_SLIDES = [
  {
    id: 1,
    title: "Cloudflare: Zero to ProductionComplete Developer Web Masterclass",
    part: "FOUNDATIONS",
    Component: Slide1,
  },
  {
    id: 2,
    title: "What is Cloud Computing?",
    part: "FOUNDATIONS",
    Component: Slide2,
  },
  {
    id: 3,
    title: "Hosting Evolution: Dedicated to Edge",
    part: "FOUNDATIONS",
    Component: Slide3,
  },
  {
    id: 4,
    title: "Why Cloudflare Operates Differently",
    part: "FOUNDATIONS",
    Component: Slide4,
  },
  {
    id: 5,
    title: "What is Cloudflare?",
    part: "FOUNDATIONS",
    Component: Slide5,
  },
  {
    id: 6,
    title: "Beyond Just 'Hosting'",
    part: "FOUNDATIONS",
    Component: Slide6,
  },
  {
    id: 7,
    title: "Global Anycast Edge Network",
    part: "FOUNDATIONS",
    Component: Slide7,
  },
  {
    id: 8,
    title: "Creating Your Cloudflare Account",
    part: "DOMAINS & ACCOUNTS",
    Component: Slide8,
  },
  {
    id: 9,
    title: "Account Security: 2FA & Scoped Tokens",
    part: "DOMAINS & ACCOUNTS",
    Component: Slide9,
  },
  {
    id: 10,
    title: "Accounts, Organizations & Zones",
    part: "DOMAINS & ACCOUNTS",
    Component: Slide10,
  },
  {
    id: 11,
    title: "Understanding Domains & DNS",
    part: "DOMAINS & ACCOUNTS",
    Component: Slide11,
  },
  {
    id: 12,
    title: "Registrar vs DNS Provider vs Web Host",
    part: "DOMAINS & ACCOUNTS",
    Component: Slide12,
  },
  {
    id: 13,
    title: "Domain Scenarios: Third-Party vs Registrar",
    part: "DOMAINS & ACCOUNTS",
    Component: Slide13,
  },
  {
    id: 14,
    title: "Adding an Existing Domain to Cloudflare",
    part: "DOMAINS & ACCOUNTS",
    Component: Slide14,
  },
  {
    id: 15,
    title: "CRITICAL: Review Existing DNS First",
    part: "DOMAINS & ACCOUNTS",
    Component: Slide15,
  },
  {
    id: 16,
    title: "Nameservers Explained",
    part: "NAMESERVERS & DNS",
    Component: Slide16,
  },
  {
    id: 17,
    title: "How DNS Resolution Works Step-by-Step",
    part: "NAMESERVERS & DNS",
    Component: Slide17,
  },
  {
    id: 18,
    title: "Core DNS Records: A, AAAA & CNAME",
    part: "NAMESERVERS & DNS",
    Component: Slide18,
  },
  {
    id: 19,
    title: "Service DNS Records: MX, TXT, NS, CAA & SRV",
    part: "NAMESERVERS & DNS",
    Component: Slide19,
  },
  {
    id: 20,
    title: "INTERACTIVE: Simulated DNS Editor",
    part: "NAMESERVERS & DNS",
    Component: Slide20,
  },
  {
    id: 21,
    title: "Proxy Status: Proxied vs DNS Only",
    part: "PROXY & REVERSE PROXY",
    Component: Slide21,
  },
  {
    id: 22,
    title: "When to Proxy vs When NOT to Proxy",
    part: "PROXY & REVERSE PROXY",
    Component: Slide22,
  },
  {
    id: 23,
    title: "Understanding Reverse Proxies",
    part: "PROXY & REVERSE PROXY",
    Component: Slide23,
  },
  {
    id: 24,
    title: "Reverse Proxy Inspection & Headers",
    part: "PROXY & REVERSE PROXY",
    Component: Slide24,
  },
  {
    id: 25,
    title: "What is a Content Delivery Network (CDN)?",
    part: "CDN & CACHING",
    Component: Slide25,
  },
  {
    id: 26,
    title: "CDN Cache Hit vs Cache Miss Anatomy",
    part: "CDN & CACHING",
    Component: Slide26,
  },
  {
    id: 27,
    title: "The Three Levels of Caching",
    part: "CDN & CACHING",
    Component: Slide27,
  },
  {
    id: 28,
    title: "Cache-Control Headers & Edge TTL",
    part: "CDN & CACHING",
    Component: Slide28,
  },
  {
    id: 29,
    title: "Cache Invalidation: Purging Strategies",
    part: "CDN & CACHING",
    Component: Slide29,
  },
  {
    id: 30,
    title: "Caching Dynamic vs Static Content",
    part: "CDN & CACHING",
    Component: Slide30,
  },
  {
    id: 31,
    title: "SSL / TLS Encryption Fundamentals",
    part: "SSL / TLS & ENCRYPTION",
    Component: Slide31,
  },
  {
    id: 32,
    title: "The Security Illusion: Edge vs Origin",
    part: "SSL / TLS & ENCRYPTION",
    Component: Slide32,
  },
  {
    id: 33,
    title: "Cloudflare SSL / TLS Modes Explained",
    part: "SSL / TLS & ENCRYPTION",
    Component: Slide33,
  },
  {
    id: 34,
    title: "Why Flexible SSL is Dangerous",
    part: "SSL / TLS & ENCRYPTION",
    Component: Slide34,
  },
  {
    id: 35,
    title: "Cloudflare Origin CA Certificates",
    part: "SSL / TLS & ENCRYPTION",
    Component: Slide35,
  },
  {
    id: 36,
    title: "Domain + HTTPS Production Workflow",
    part: "SSL / TLS & ENCRYPTION",
    Component: Slide36,
  },
  {
    id: 37,
    title: "DDoS Protection at Edge Scale",
    part: "EDGE SECURITY",
    Component: Slide37,
  },
  {
    id: 38,
    title: "Web Application Firewall (WAF)",
    part: "EDGE SECURITY",
    Component: Slide38,
  },
  {
    id: 39,
    title: "WAF Rule Actions & Threat Detection",
    part: "EDGE SECURITY",
    Component: Slide39,
  },
  {
    id: 40,
    title: "Rate Limiting for Critical Endpoints",
    part: "EDGE SECURITY",
    Component: Slide40,
  },
  {
    id: 41,
    title: "Bot Management & Automated Traffic",
    part: "EDGE SECURITY",
    Component: Slide41,
  },
  {
    id: 42,
    title: "The Cloudflare Rules Architecture",
    part: "RULES & ROUTING",
    Component: Slide42,
  },
  {
    id: 43,
    title: "Canonical Redirects: HTTP/HTTPS & Apex/WWW",
    part: "RULES & ROUTING",
    Component: Slide43,
  },
  {
    id: 44,
    title: "Custom Domain Architecture",
    part: "RULES & ROUTING",
    Component: Slide44,
  },
  {
    id: 45,
    title: "Cloudflare + Vercel Architecture",
    part: "PRODUCTION FULLSTACK",
    Component: Slide45,
  },
  {
    id: 46,
    title: "Cloudflare + Self-Hosted VPS Architecture",
    part: "PRODUCTION FULLSTACK",
    Component: Slide46,
  },
  {
    id: 47,
    title: "Introduction to Cloudflare Workers",
    part: "WORKERS & EDGE COMPUTE",
    Component: Slide47,
  },
  {
    id: 48,
    title: "Anatomy of a Cloudflare Worker",
    part: "WORKERS & EDGE COMPUTE",
    Component: Slide48,
  },
  {
    id: 49,
    title: "Creating Your First Worker",
    part: "WORKERS & EDGE COMPUTE",
    Component: Slide49,
  },
  {
    id: 50,
    title: "Worker Routes & Custom Hostnames",
    part: "WORKERS & EDGE COMPUTE",
    Component: Slide50,
  },
  {
    id: 51,
    title: "Building an Edge API with Workers",
    part: "WORKERS & EDGE COMPUTE",
    Component: Slide51,
  },
  {
    id: 52,
    title: "Secrets, Env Variables & Bindings",
    part: "WORKERS & EDGE COMPUTE",
    Component: Slide52,
  },
  {
    id: 53,
    title: "Cloudflare R2 Object Storage",
    part: "STORAGE PRIMITIVES",
    Component: Slide53,
  },
  {
    id: 54,
    title: "Practical R2: TaskFlow Avatar Storage",
    part: "STORAGE PRIMITIVES",
    Component: Slide54,
  },
  {
    id: 55,
    title: "Cloudflare KV: Global Key-Value Store",
    part: "STORAGE PRIMITIVES",
    Component: Slide55,
  },
  {
    id: 56,
    title: "Cloudflare Durable Objects",
    part: "STORAGE PRIMITIVES",
    Component: Slide56,
  },
  {
    id: 57,
    title: "Cloudflare Queues: Background Jobs",
    part: "STORAGE PRIMITIVES",
    Component: Slide57,
  },
  {
    id: 58,
    title: "Cloudflare Zero Trust Architecture",
    part: "ZERO TRUST & TUNNELS",
    Component: Slide58,
  },
  {
    id: 59,
    title: "Cloudflare Access for Private Apps",
    part: "ZERO TRUST & TUNNELS",
    Component: Slide59,
  },
  {
    id: 60,
    title: "Cloudflare Tunnel (cloudflared)",
    part: "ZERO TRUST & TUNNELS",
    Component: Slide60,
  },
  {
    id: 61,
    title: "Practical Tunnel: Exposing Localhost",
    part: "ZERO TRUST & TUNNELS",
    Component: Slide61,
  },
  {
    id: 62,
    title: "Cloudflare API & Scoped Tokens",
    part: "DEVELOPER TOOLING",
    Component: Slide62,
  },
  {
    id: 63,
    title: "Wrangler CLI Development Workflow",
    part: "DEVELOPER TOOLING",
    Component: Slide63,
  },
  {
    id: 64,
    title: "Git Integration & CI/CD Pipelines",
    part: "DEVELOPER TOOLING",
    Component: Slide64,
  },
  {
    id: 65,
    title: "Cloudflare Pages Platform",
    part: "PAGES & JAMSTACK",
    Component: Slide65,
  },
  {
    id: 66,
    title: "Pages vs Vercel vs Traditional VPS",
    part: "PAGES & JAMSTACK",
    Component: Slide66,
  },
  {
    id: 67,
    title: "Deploying a Static Web App to Pages",
    part: "PAGES & JAMSTACK",
    Component: Slide67,
  },
  {
    id: 68,
    title: "Next.js on Cloudflare: Real-World Guide",
    part: "PAGES & JAMSTACK",
    Component: Slide68,
  },
  {
    id: 69,
    title: "Email DNS: MX, SPF, DKIM & DMARC",
    part: "SAFETY & MIGRATION",
    Component: Slide69,
  },
  {
    id: 70,
    title: "Pre-Migration DNS Safety Checklist",
    part: "SAFETY & MIGRATION",
    Component: Slide70,
  },
  {
    id: 71,
    title: "DNSSEC: Security & Migration Gotchas",
    part: "SAFETY & MIGRATION",
    Component: Slide71,
  },
  {
    id: 72,
    title: "Defense in Depth Security Model",
    part: "SECURITY & OBSERVABILITY",
    Component: Slide72,
  },
  {
    id: 73,
    title: "Origin Server Hardening",
    part: "SECURITY & OBSERVABILITY",
    Component: Slide73,
  },
  {
    id: 74,
    title: "Observability, Logs & Analytics",
    part: "SECURITY & OBSERVABILITY",
    Component: Slide74,
  },
  {
    id: 75,
    title: "Troubleshooting: DNS Failures",
    part: "TROUBLESHOOTING",
    Component: Slide75,
  },
  {
    id: 76,
    title: "Troubleshooting: SSL & Redirect Loops",
    part: "TROUBLESHOOTING",
    Component: Slide76,
  },
  {
    id: 77,
    title: "Troubleshooting: 502 & 504 Errors",
    part: "TROUBLESHOOTING",
    Component: Slide77,
  },
  {
    id: 78,
    title: "INTERACTIVE: Diagnostic Simulator",
    part: "TROUBLESHOOTING",
    Component: Slide78,
  },
  {
    id: 79,
    title: "Performance Optimization at the Edge",
    part: "PERFORMANCE & PLANS",
    Component: Slide79,
  },
  {
    id: 80,
    title: "Cloudflare Plans & Cost Awareness",
    part: "PERFORMANCE & PLANS",
    Component: Slide80,
  },
  {
    id: 81,
    title: "TaskFlow Cloud Master Architecture",
    part: "PROJECT & CHECKLIST",
    Component: Slide81,
  },
  {
    id: 82,
    title: "INTERACTIVE: Production Launch Checklist",
    part: "PROJECT & CHECKLIST",
    Component: Slide82,
  },
  {
    id: 83,
    title: "INTERACTIVE: Architecture Explorer",
    part: "PROJECT & CHECKLIST",
    Component: Slide83,
  },
  {
    id: 84,
    title: "Top 10 Costly Cloudflare Mistakes",
    part: "PROJECT & CHECKLIST",
    Component: Slide84,
  },
  {
    id: 85,
    title: "The Master Cloudflare Cheat Sheet",
    part: "PROJECT & CHECKLIST",
    Component: Slide85,
  },
];
