// -------------------------------------------------------------
// ALL site text lives here. Edit this file to make the site yours.
// Images: drop files into /public/images using the names below.
// Until a file exists, a labelled gradient placeholder is shown.
// Anything in [brackets] is a placeholder for you to replace.
// -------------------------------------------------------------

export const profile = {
  name: 'Ganesh Attili',
  firstName: 'Ganesh',
  fullName: 'Ganesh Attili',
  role: 'Java Full Stack Developer',
  // words typed out in the hero, one after another
  typedRoles: [
    'Java Full Stack Developer',
    'React JS & React Native Developer',
    'Web & Mobile App Builder',
    'API & Integrations Engineer',
  ],
  tagline:
    'I build complete web and mobile products — Java and MySQL on the backend, React JS and React Native on the front — integrated with the services your business runs on, and deployed to the cloud.',
  bio: [
    'I’m a Java full stack developer who takes products from idea to production. I design the database in MySQL, build secure REST APIs in Java, and ship the front end as a React JS website and a React Native mobile app.',
    'The part clients value most is the wiring: payment gateways, WhatsApp and email notifications, Zoom meetings, Google sign-in and Google Maps. I deploy and run everything on AWS and DigitalOcean, tune it for Google SEO, and use AI tools like Cursor, Claude, ChatGPT and Gemini to deliver faster without cutting corners.',
  ],
  email: 'ganeshattili0@gmail.com',
  phone: '+91 77300 24084',
  // WhatsApp chat link: country code + number, digits only
  whatsapp: 'https://wa.me/917730024084?text=Hi%20Ganesh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  location: 'Hyderabad, India',
  address: ['Hyderabad, Telangana', 'India'],
  resumeFile: '/resume.pdf', // put your PDF at /public/resume.pdf
  heroImage: '/images/hero.jpg',
  aboutImage: '/images/about.jpg',
}

// Only real profiles are listed. To add one, copy a line and use icon: 'github' | 'linkedin' | 'instagram' | 'youtube'.
export const socials = [
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/codelylogic' },
] as const

// Edit these numbers to your real ones
export const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Apps & Sites Shipped' },
  { value: 10, suffix: '+', label: 'Integrations Built' },
]

export const services = [
  {
    icon: 'globe',
    title: 'Website Development',
    text: 'Fast, responsive React JS websites and admin dashboards, backed by clean Java REST APIs and a MySQL database.',
    tags: ['React JS', 'Java', 'MySQL'],
  },
  {
    icon: 'phone',
    title: 'Mobile App Development',
    text: 'Android and iOS apps from one React Native codebase — from first screen to Play Store release and updates.',
    tags: ['React Native', 'Android', 'Play Store'],
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    text: 'Secure, well-structured Java backends: authentication, role-based access, business logic and optimised MySQL queries.',
    tags: ['Java', 'REST API', 'MySQL'],
  },
  {
    icon: 'plug',
    title: 'Third-Party Integrations',
    text: 'Payments, WhatsApp, email, Zoom, Google sign-in and Google Maps wired into your product reliably, with webhooks handled properly.',
    tags: ['Payments', 'WhatsApp', 'Zoom', 'Google'],
  },
  {
    icon: 'cloud',
    title: 'Cloud Deployment',
    text: 'Production deployments on AWS and DigitalOcean — servers, Nginx, domains, SSL, databases and zero-drama releases.',
    tags: ['AWS', 'DigitalOcean', 'Nginx', 'SSL'],
  },
  {
    icon: 'search',
    title: 'Google SEO',
    text: 'Technical SEO built in: clean markup, meta and Open Graph tags, sitemaps, page-speed fixes and Search Console setup.',
    tags: ['On-page SEO', 'Page speed', 'Search Console'],
  },
] as const

export const techStack = [
  { group: 'Backend', icon: 'coffee', items: ['Java', 'REST APIs', 'MySQL', 'Authentication & RBAC'] },
  { group: 'Frontend', icon: 'atom', items: ['React JS', 'JavaScript / TypeScript', 'HTML & CSS', 'Bootstrap / Tailwind'] },
  { group: 'Mobile', icon: 'phone', items: ['React Native', 'Android builds', 'Play Store releases', 'Push notifications'] },
  { group: 'Cloud & DevOps', icon: 'cloud', items: ['AWS', 'DigitalOcean', 'Nginx & SSL', 'Domains & DNS'] },
] as const

export const integrations = [
  { icon: 'card', title: 'Payment Gateways', text: 'Checkout, order verification, webhooks and refunds — money handled safely end to end.' },
  { icon: 'chat', title: 'WhatsApp', text: 'Order updates, OTPs and alerts delivered to customers on WhatsApp automatically.' },
  { icon: 'mail', title: 'Email', text: 'Transactional mail and OTP emails over SMTP or mail APIs, with clean branded templates.' },
  { icon: 'video', title: 'Zoom', text: 'Create and schedule meetings from your app, and pull attendance reports back in.' },
  { icon: 'key', title: 'Google SDK', text: 'Google sign-in and Google services integrated on both web and mobile.' },
  { icon: 'map', title: 'Google Maps', text: 'Maps, places search, live location, delivery areas and distance-based pricing.' },
] as const

export const aiTools = [
  { name: 'Cursor', use: 'AI-native editor for day-to-day coding' },
  { name: 'Claude', use: 'Architecture, refactors and code review' },
  { name: 'ChatGPT', use: 'Research, debugging and documentation' },
  { name: 'Google Gemini', use: 'Second opinions and Google-stack answers' },
]

export const process = [
  { icon: 'plan', title: 'Plan', text: 'Requirements, database design and API contract.' },
  { icon: 'code', title: 'Build', text: 'Java APIs, React web app, React Native app.' },
  { icon: 'plug', title: 'Integrate', text: 'Payments, WhatsApp, mail, Zoom, Google.' },
  { icon: 'rocket', title: 'Deploy', text: 'AWS or DigitalOcean, domain, SSL, monitoring.' },
  { icon: 'search', title: 'Optimise', text: 'Google SEO, page speed and ongoing support.' },
] as const

// Scrolling strip under the hero
export const techMarquee = [
  'Java', 'MySQL', 'React JS', 'React Native', 'REST APIs', 'Payment Gateways', 'WhatsApp', 'Email',
  'Zoom', 'Google SDK', 'Google Maps', 'AWS', 'DigitalOcean', 'Google SEO', 'Cursor', 'Claude', 'ChatGPT', 'Gemini',
]

export const experience = [
  {
    period: '2022 – Present',
    title: 'Freelance Java Full Stack Developer',
    place: 'Self-employed · Hyderabad',
    points: [
      'Build complete products for clients: Java + MySQL backends, React JS web apps and React Native mobile apps.',
      'Integrate payment gateways, WhatsApp, email, Zoom, Google sign-in and Google Maps.',
      'Deploy and maintain production systems on AWS and DigitalOcean, with Google SEO built in.',
    ],
  },
]

export const marqueeText = 'Build. Integrate. Deploy. Optimise.'

// Skill levels — adjust to taste
export const skills = [
  { name: 'Java', level: 90 },
  { name: 'MySQL', level: 85 },
  { name: 'React JS', level: 88 },
  { name: 'React Native', level: 82 },
  { name: 'API Integrations', level: 90 },
  { name: 'AWS / DigitalOcean', level: 80 },
  { name: 'Google SEO', level: 75 },
  { name: 'AI-assisted Development', level: 88 },
]

// Clients I have built for. Add a real `quote` (their own words) to any client and it shows on the card.
export const clients: { name: string; type: string; work: string; tags: string[]; quote?: string }[] = [
  {
    name: 'Rythu Bidda Cereals',
    type: 'E-commerce · Web + Android app',
    work: 'Online store, admin panel and a React Native Android app released on the Play Store — with online payments, Google Maps based delivery and order notifications.',
    tags: ['Java', 'MySQL', 'React JS', 'React Native', 'Payments', 'Google Maps', 'DigitalOcean'],
  },
  {
    name: 'C2C',
    type: 'Talent & training platform',
    work: 'Role-based web platform for candidates, recruiters and trainers — passwordless email login, Zoom classes with automatic attendance, assessments and reports.',
    tags: ['Java', 'React JS', 'Zoom', 'Email OTP', 'RBAC', 'AWS'],
  },
  {
    name: 'Bhavana Studios',
    type: 'Boutique fashion store',
    work: 'Elegant shopping experience for a saree boutique — collections with filters, product pages with blouse options, wishlist, bag and a step-by-step checkout.',
    tags: ['React JS', 'TypeScript', 'Responsive UI', 'SEO'],
  },
]

export const posts = [
  {
    slug: 'payment-gateway-integration-done-right',
    title: 'Payment Gateway Integration Done Right: Never Trust the Browser',
    date: '14 September 2026',
    image: '/images/blog-1.jpg',
    excerpt: 'The success page is not proof of payment. Here is the server-side flow I use on every project so money and orders never go out of sync.',
    body: [
      'The most common mistake I see in payment integrations is marking an order as paid because the customer landed on the "success" page. That redirect happens in the browser, and anything that happens in the browser can be faked, interrupted or simply lost when someone closes the tab or their network drops at the wrong second.',
      'The flow I follow is always the same, whichever gateway the client chooses. First, the order is created on my Java backend — never on the front end — with the amount calculated on the server from the cart in the database. The gateway order is created from that, and its id is saved against my order. The React or React Native app only ever receives that id; it never decides the price.',
      'Second, when the gateway returns to the app, the backend verifies the signature using the secret key before doing anything else. If the signature does not match, the payment is ignored. Third, and most important, I treat the webhook as the source of truth. Webhooks arrive even when the customer closes the app mid-payment, so the order still gets confirmed. The handler is idempotent: if the same event arrives twice, the second one changes nothing.',
      'Two small habits save a lot of support calls. Keep a payment log table with every event the gateway sends, so you can answer "I paid but my order says pending" in one query. And run a small scheduled job that re-checks orders stuck in "pending" for more than a few minutes by asking the gateway directly. With those in place, refunds, partial failures and late confirmations stop being emergencies.',
      'When a client later wants to add a second gateway, put both behind one interface with a simple configuration switch. The rest of the application should only know "create payment, verify payment, refund" — not which company is processing it.',
    ],
  },
  {
    slug: 'deploying-java-react-on-a-cloud-server',
    title: 'From Laptop to Live: Deploying a Java + React App on AWS or DigitalOcean',
    date: '2 September 2026',
    image: '/images/blog-2.jpg',
    excerpt: 'A simple, repeatable setup — one server, Nginx in front, HTTPS, and a release you can roll back in under a minute.',
    body: [
      'Most small and mid-sized products do not need Kubernetes. They need one well-configured server, a clear release process and a backup that actually restores. This is the setup I use for client projects on both AWS and DigitalOcean, and it has handled real traffic without drama.',
      'The Java backend is packaged as a single runnable jar and runs as a systemd service, so it starts on boot and restarts itself if it crashes. Configuration — database passwords, API keys, gateway secrets — lives in an external properties file on the server, never inside the jar and never in Git. That one decision means the same build can move from test to production without being rebuilt.',
      'Nginx sits in front of everything. It serves the React build as static files, which is extremely fast, and forwards /api requests to the Java service on a local port. HTTPS comes from a free Let\u2019s Encrypt certificate that renews automatically. I also turn on gzip and long cache headers for the hashed JS and CSS files, which is an easy win for page speed and for Google SEO.',
      'A release is a short script: upload the new jar beside the old one, switch a symlink, restart the service, and call a health-check URL. If the health check fails, the symlink goes back and the old version is running again within seconds. The React side is the same idea — upload to a new folder, then swap.',
      'Finally, the unglamorous parts that matter most: a firewall that only opens ports 80, 443 and SSH, database access restricted to the app server, automated daily database backups copied off the machine, and a restore test once in a while. A deployment is only finished when you know you can recover from it.',
    ],
  },
  {
    slug: 'shipping-a-react-native-app-to-the-play-store',
    title: 'Shipping a React Native App to the Play Store: Lessons From Real Releases',
    date: '21 August 2026',
    image: '/images/blog-3.jpg',
    excerpt: 'Building the app is half the job. Signing, version codes, testing tracks and backend compatibility are where releases actually go wrong.',
    body: [
      'React Native lets me build the Android and iOS app from one codebase, sharing a lot of thinking — and sometimes code — with the React website. But the first Play Store release teaches you that writing the app and shipping the app are two different skills.',
      'Start with the signing key. Generate the upload keystore once, store it and its passwords somewhere safe outside the project, and back it up. Losing it is painful. Build an Android App Bundle (AAB), not an APK, and remember that every upload needs a higher version code than anything you have uploaded before — even builds you later discarded. I keep a simple note of which codes are already used.',
      'Use the testing tracks properly. Internal testing is for quick checks, closed testing is where real users try the app, and only then production. Give testers a short checklist rather than "please test the app" — login, place an order, pay, track, cancel. The bugs they find are almost always about real-world conditions: slow networks, denied location permission, a payment interrupted by a phone call.',
      'The lesson that cost me the most time: the mobile app and the backend must be released in the right order. If a new app version expects a new API field, the backend has to be live first, and it must keep supporting the older app for everyone who has not updated yet. I now treat the API as a contract — add fields, never rename or remove them without a plan.',
      'Native integrations deserve extra care. Google Maps keys should be restricted to your app, payment SDKs need their own release-mode testing, and push notifications behave differently once the app is signed for production. Test the release build on a real device before every upload — not just the debug build on an emulator.',
    ],
  },
]

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'stack', label: 'Stack' },
  { id: 'resume', label: 'Resume' },
  { id: 'testimonials', label: 'Clients' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]
