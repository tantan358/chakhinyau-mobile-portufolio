export interface AppItem {
  name: string;
  category: string;
  playStoreId: string;
  tech?: string;
  /** Short technical summary for work history cards */
  technicalNote?: string;
  skills: string[];
  screenshots?: string[];
}

export interface Studio {
  id: string;
  name: string;
  years: string;
  duration: string;
  description: string;
  apps: AppItem[];
}

export const studios: Studio[] = [
  {
    id: "unicorn",
    name: "Amazic Fun Hub",
    years: "2021–2025",
    duration: "4 years",
    description: "The foundation. Dating apps that launched a 12-year mobile engineering career.",
    apps: [
      { name: "Unicorns Match", category: "Dating", playStoreId: "com.dating.unicornsmatch", tech: "Android · Java", technicalNote: "Java client with chat/match flows, push (FCM), and in-app billing on the Play stack.", skills: ["Real-time Chat", "Match Algorithm", "Profile Verification", "Push Notifications", "In-app Purchases"], screenshots: ["unicornsmatch-1", "unicornsmatch-2", "unicornsmatch-3"] },
      { name: "EMF Scanner - Metal Detector", category: "Utility", playStoreId: "com.amazicfunhub.emfscanner", tech: "Android · Java", technicalNote: "Magnetometer-based EMF and metal detection with real-time gauge, multi-mode switching (metal/gold/silver/EMF/camera), and μT/mG/G unit toggling.", skills: ["EMF Detection", "Metal & Gold Detector", "Silver Detector", "Camera Detector", "Real-time Gauge & Alerts"], screenshots: ["emfscanner-1", "emfscanner-2", "emfscanner-3"] },
      { name: "AR Sketch Paint – Drawing App", category: "Art & Creativity", playStoreId: "com.amazicfunhub.ardrawing", tech: "Android · Java", technicalNote: "AR camera overlay for real-time trace-to-sketch; photo-to-sketch conversion pipeline; adjustable opacity control and multiple drawing mode switching.", skills: ["AR Camera Tracing", "Trace to Sketch", "Photo to Sketch", "Sketch Opacity Control", "Drawing Mode Switching"], screenshots: ["ardrawing-1", "ardrawing-2", "ardrawing-3"] },
      { name: "Santa Claus Call - Prank Call", category: "Entertainment", playStoreId: "com.amazicfunhub.santacall", tech: "Android · Java", technicalNote: "Holiday prank-call app with simulated video calls, AI-driven chat responses, and letter-to-Santa composition with festive themed UI.", skills: ["Fake Video Call", "AI Chat & Responses", "Letter to Santa", "Holiday Themes", "Push Notifications"], screenshots: ["santacall-1", "santacall-2", "santacall-3"] },
      { name: "AZ Lock: Voice Lock Screen", category: "Security", playStoreId: "com.amazicfunhub.azlock", tech: "Android · Java", technicalNote: "Custom lock screen replacement with voice recognition unlock, pattern lock, and a downloadable wallpaper/theme gallery spanning anime, nature, and movie categories.", skills: ["Voice Password Lock", "Pattern Lock Screen", "Lock Screen Themes", "Wallpaper Gallery", "Security Settings"], screenshots: ["azlock-1", "azlock-2", "azlock-3"] },
      { name: "Call Screen Theme Color Dialer", category: "Personalization", playStoreId: "com.amazicfunhub.callscreen", tech: "Android · Java", technicalNote: "Incoming/outgoing call screen theming with downloadable wallpapers, dynamic animations, and custom/favorite theme management.", skills: ["Call Screen Themes", "Custom Wallpapers", "Dynamic Animations", "Theme Gallery", "Color Dialer UI"], screenshots: ["callscreen-1", "callscreen-2", "callscreen-3"] },
      { name: "GPS Tracker: GPS Phone Locator", category: "Navigation", playStoreId: "com.amazicfunhub.gpstracker", tech: "Android · Java", technicalNote: "Family safety and friend-tracking app with real-time map positions, arrival notifications, location history playback, and friend-invite flows.", skills: ["Real-time GPS Tracking", "Family Locator", "Friend Location Sharing", "Location History", "Geofence Alerts"], screenshots: ["gpstracker-1", "gpstracker-2", "gpstracker-3"] },
    ],
  },
  {
    id: "hktdc-council",
    name: "HypGames",
    years: "2019–2021",
    duration: "2 years",
    description:
      "QR and branding tools, social chat & party games, plus the trade exhibition marketplace—digital e-Badge check-in and e-Coupons for Hong Kong and global sourcing events.",
    apps: [
      { name: "QR Code Generator Pro", category: "Utility", playStoreId: "cn.appfly.qrcode.qrcreater", tech: "Android · Java", technicalNote: "QR matrix generation, bitmap styling (colors/gradients/logos), export and Android share intents.", skills: ["Gradient & Color Themes", "Logo & Portrait Center", "Poster & Social Posts", "Foreground / Background", "Brand Icon Presets"], screenshots: ["qrgenpro-1", "qrgenpro-2", "qrgenpro-3"] },
      { name: "Heyo Chat:Party games&Chat", category: "Social", playStoreId: "com.interview.yumshu", tech: "Android · Kotlin", technicalNote: "Kotlin UI for rooms and discovery; real-time or polling backends; lightweight game modules.", skills: ["Live Party Rooms", "Regional & Hot Discovery", "PK & Ranking Events", "Mini Games & Carrom", "Invitation Rewards"], screenshots: ["heyo-1", "heyo-2", "heyo-3"] },
      { name: "HKTDC Marketplace", category: "Business", playStoreId: "com.bankcomm.hkentp.f", tech: "Android · Kotlin", technicalNote: "REST-driven exhibition data, digital e-Badge/NFC flows, coupons and in-app messaging patterns.", skills: ["Exhibition Discovery", "Seamless e-Badge Check-in", "NFC & Contactless Entry", "e-Coupon Collection", "Buyer & Messaging Hub"], screenshots: ["hktdc-1", "hktdc-2", "hktdc-3"] },
    ],
  },
  {
    id: "joynow",
    name: "Manchester United Limited",
    years: "2017–2018",
    duration: "1 year",
    description: "Educational and lifestyle applications. Language learning, auction platforms, and streaming.",
    apps: [
      { name: "BoomShort", category: "Entertainment", playStoreId: "com.ycjia.flowchinese", tech: "Android · Kotlin", technicalNote: "Video streaming (e.g. ExoPlayer), catalog APIs, recommendations and watchlist state.", skills: ["HD Streaming", "Short Drama Catalog", "For You & Rankings", "My List & Binge Watch", "Search & Profiles"], screenshots: ["boomshort-1", "boomshort-2", "boomshort-3"] },
      { name: "Poly Auction HK", category: "Auction", playStoreId: "com.polyauctionhk.app", tech: "Android · Kotlin", technicalNote: "Live auction UX with real-time price updates, wallet flows, and push for bid events.", skills: ["Live Bidding", "Lot Detail Views", "Bid Notifications", "User Wallet", "Auction Scheduling"], screenshots: ["polyauction-1", "polyauction-2", "polyauction-3"] },
      { name: "AI Detector: Text Image Video", category: "Utility", playStoreId: "com.boomshort.drama", tech: "Android · Kotlin", technicalNote: "Media pickers, inference pipelines for text/image/video, and confidence UI with tabbed navigation.", skills: ["Text Origin Analysis", "Image Artifact Scan", "Video Frame Consistency", "Confidence & Summary Reports", "Multi-tab Navigation"], screenshots: ["aidetector-1", "aidetector-2", "aidetector-3"] },
    ],
  },
  {
    id: "hkej-company",
    name: "Myarx apps",
    years: "2016–2017",
    duration: "3 years",
    description: "Enterprise-scale apps for education, hospitality, media, and the cultural sector in Hong Kong.",
    apps: [
      { name: "信報教育", category: "Education", playStoreId: "com.pccw.hktedu.parentapp", tech: "Android · Kotlin", technicalNote: "Structured education content, magazine-style layouts, and bilingual article delivery.", skills: ["DSE & Exam Content", "Quest & iNKY Titles", "Chinese & English Tracks", "Digital Magazine Layout", "School & Elite Positioning"], screenshots: ["hkej-edu-1", "hkej-edu-2", "hkej-edu-3"] },
      { name: "EJ Insight", category: "News", playStoreId: "com.hkej.ejinsight", tech: "Android · Kotlin", technicalNote: "Editorial feeds from CMS APIs, article reader (WebView/native hybrid), sharing and navigation.", skills: ["Editorial Feed", "Hong Kong Coverage", "Article Reader", "Menu & Navigation", "Social Sharing"], screenshots: ["ejinsight-hkej-1", "ejinsight-hkej-2", "ejinsight-hkej-3"] },
      { name: "My Wayfoong", category: "Enterprise", playStoreId: "com.hkt.o2o.chartwells", tech: "Android · Kotlin", technicalNote: "Internal staff app: authenticated feeds, HR-style modules, and profile-centric navigation.", skills: ["Newsroom Feed", "Staff Activities", "Offers & Benefits", "Wellness Programs", "Profile & Me Tab"], screenshots: ["wayfoong-1", "wayfoong-2", "wayfoong-3"] },
      { name: "SOS App", category: "Emergency", playStoreId: "com.sosapp.user", tech: "Android · Kotlin", technicalNote: "Location services, maps integration, background updates, and FCM for emergency/team flows.", skills: ["HKSOS Emergency", "Team & QR Join", "Real-time Location Share", "Outdoor Routes & Weather", "Activity Tracking"], screenshots: ["hksos-1", "hksos-2", "hksos-3"] },
      { name: "West Kowloon", category: "Culture", playStoreId: "hk.westkowloon.app", tech: "Android · Kotlin", technicalNote: "Ticketing APIs, venue/event content, parking data, and multi-locale resource handling.", skills: ["Digital Tickets", "Venues & WestK", "Art Park & Events", "Parking Availability", "Multilingual Content"], screenshots: ["westkowloon-1", "westkowloon-2", "westkowloon-3"] },
    ],
  },
  {
    id: "hkt",
    name: "Booking.com Hotels & Vacation Rentals",
    years: "2013–2015",
    duration: "2 years",
    description: "School catering, merchant services apps, and HKFP news delivery for Hong Kong users.",
    apps: [
      { name: "GourMax Catering by HKT", category: "Catering", playStoreId: "com.hkej.edu", tech: "Android · Kotlin", technicalNote: "School meal ordering, notices, and payment hooks integrated with HKT merchant services.", skills: ["School Meal Ordering", "Onboarding & Branding", "Notice Board & Promos", "Messages & Payments", "HKT Merchant Integration"], screenshots: ["gourmax-1", "gourmax-2", "gourmax-3"] },
      { name: "Seamart Catering by HKT", category: "Catering", playStoreId: "com.hkej.ereader", tech: "Android · Kotlin", technicalNote: "Parent/student profiles, multi-month ordering windows, promos, and secure session handling.", skills: ["Flexible Scheduling", "Secure Login", "Parent & Student Profiles", "Tap & Go Promotions", "Multi-month Ordering"], screenshots: ["seamart-1", "seamart-2", "seamart-3"] },
      { name: "Hong Kong Free Press HKFP by HKT", category: "News", playStoreId: "com.hongkongfreepress.app", tech: "Android · Kotlin", technicalNote: "News API–driven feeds, article reader, membership/support flows, and offline article cache.", skills: ["Breaking News Feed", "Article Reader", "Topics & Search", "Support & Membership", "Offline Reading"], screenshots: ["hkfpbyhkt-1", "hkfpbyhkt-2", "hkfpbyhkt-3"] },
      { name: "Murray by HKT", category: "Catering", playStoreId: "com.hkt.o2o.murray", tech: "Android · Kotlin", technicalNote: "Catering ordering aligned with HKT O2O patterns: schedules, profiles, and merchant-backed payments.", skills: ["School Meal Ordering", "Flexible Scheduling", "HKT Merchant Services", "Login & Profiles", "Tap & Go Promotions"], screenshots: ["murrayhkt-1", "murrayhkt-2", "murrayhkt-3"] },
    ],
  },
  {
    id: "octopusx",
    name: "WishRoll",
    years: "2012–2013",
    duration: "2 years",
    description: "Current era. HSBC Private Banking, healthcare apps, automotive platforms, and enterprise products.",
    apps: [
      { name: "HSBC Private Banking HK", category: "Finance", playStoreId: "com.hsbcprivatebank.hsbcprivatebankinghk", tech: "Android · Kotlin · Compose", technicalNote: "Jetpack Compose UI, hardened networking, biometric login, and compliance-aware messaging.", skills: ["Portfolio Overview", "Secure Messaging", "Investment Insights", "Biometric Security", "Regulatory Compliance"], screenshots: ["hsbcprivatebankinghk-1", "hsbcprivatebankinghk-2", "hsbcprivatebankinghk-3"] },
      { name: "Staff HK", category: "Enterprise", playStoreId: "com.none.staff.hk.production", tech: "Android · Kotlin", technicalNote: "Shift and task models, attendance sync, in-app chat, and manager reporting endpoints.", skills: ["Shift Planning", "Task Assignment", "Attendance Sync", "Internal Chat", "Manager Reports"], screenshots: ["staffhk-1", "staffhk-2", "staffhk-3"] },
      { name: "BuyCar.hk-香港新車二手車買賣平台", category: "Automotive", playStoreId: "com.lemongene.buycarapp", tech: "Android · Kotlin", technicalNote: "Search/filter pipelines, listing detail, analytics views, and multi-step sell/quote flows.", skills: ["Search & Filters", "Listing Compare", "Price Trends & Analytics", "Multi-dealer Quotes", "Sell & Valuation Flow"], screenshots: ["buycarhk-1", "buycarhk-2", "buycarhk-3"] },
      { name: "Hong Kong Adventist Hospital", category: "Healthcare", playStoreId: "hk.org.hkah.hkah", tech: "Android · Kotlin · Compose", technicalNote: "Compose screens for booking and queues, hospital APIs, billing summaries, and PHI-safe patterns.", skills: ["Outpatient Booking", "e-Queue & Check-in", "Clinic Schedules", "Billing & Records", "Health Information"], screenshots: ["hkadventist-1", "hkadventist-2", "hkadventist-3"] },
    ],
  },
];

export const profile = {
  name: "Daniel Ray",
  title: "Senior Mobile Developer",
  location: "Lafayette, Tennessee, 37083",
  university: "Volunteer State Community College",
  languages: ["English"],
  headline: "12 Years. 6 Studios. 50+ Mobile Products.",
  subheadline: "Senior Mobile Developer based in Lafayette, Tennessee. Vol State Alumnus. Expert in Android, Flutter, React Native, and full mobile lifecycle delivery from Unicorn Studio to OctopusX.",
  bio: "Mobile engineer specializing in high-scale Android, Flutter, React Native, and cross-platform architectures. 12 years of delivering robust codebases for finance, media, and gaming.",
  certifications: [
    "Google Associate Android Developer",
    "Google Certified App Developer",
    "CodinGame Coding Speed Certification (Silver)",
    "CodinGame Dart Certification (Top 1%)",
    "CodinGame Dart Certification (With Honors)",
    "CodinGame TypeScript Certification",
    "CodinGame C++ Certification",
    "CodinGame Python 3 Certification",
  ],
  totalYears: 12,
  /** Total mobile apps / products shipped over career (portfolio marketing figure) */
  totalApps: 50,
  /** Apps with full cards & screenshots in Work History */
  workHistoryAppsCount: 23,
  /** Figma design portfolio (UI/UX work) */
  figmaPortfolioUrl:
    "https://www.figma.com/design/9bKBKiSGkSPFXqP5p3xN0f/Daniel-Ray--s-Portfolio?node-id=0-1&t=HHcUwSjkOxIxTJ75-1",
  /** Workana freelancer profile */
  workanaUrl: "https://www.workana.com/freelancer/926e74bdcff8813080de57673d4d5950",
};
