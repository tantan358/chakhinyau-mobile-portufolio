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
    description: "Competitive mobile gaming studio. Sniper shooters, billiards, and fishing games built for real-time 1v1 battles, leaderboards, and deep progression systems.",
    apps: [
      { name: "Sniper Strike: Special Ops", category: "Action", playStoreId: "com.hypgames.sniperstrike", tech: "Unity · C#", technicalNote: "Real-time 1v1 sniper duels with weapon upgrade trees, stat-based loadouts (velocity, precision, zoom, magazine), and power-up strategy layer.", skills: ["Epic 1v1 Battles", "Weapon Upgrade Arsenal", "Power-up Strategy", "Sniper Scope Controls", "Streak & Combo System"], screenshots: ["g1", "g2", "g3"] },
      { name: "War Sniper: FPS Shooting Game", category: "Action", playStoreId: "com.hypgames.warsniper", tech: "Unity · C#", technicalNote: "Multi-environment 1v1 sniper battles across snow, desert, and urban maps; battle pass progression, leaderboard rankings, and tournament scheduling.", skills: ["Epic 1v1 Battles", "Dominate Leaderboards", "Battle Pass & Rewards", "Diverse Map Locations", "Tournament Brackets"], screenshots: ["g4", "g5", "g6"] },
      { name: "8 Ball Smash: Pool & Billiards", category: "Sports", playStoreId: "com.hypgames.8ballsmash", tech: "Unity · C#", technicalNote: "Full 3D billiards physics engine with unlockable table skins (Blackhawk, Golden Dragon, Belmont), bonus reward system, and realistic shot mechanics.", skills: ["Full 3D Shot Physics", "Collect Awesome Tables", "Bonus & Rewards System", "Multiplayer Matches", "Cue & Table Customization"], screenshots: ["g7", "g8", "g9"] },
      { name: "Fishing Clash: Catching Fish", category: "Sports", playStoreId: "com.hypgames.fishingclash", tech: "Unity · C#", technicalNote: "Competitive 1v1 fishing with real-world location data, live tension mechanics, legendary lure card collection, and combo multiplier scoring.", skills: ["Compete in 1v1 Matches", "Discover Real Fishing Spots", "Gain Legendary Lures", "Live Tension Mechanics", "Combo & Streak Scoring"], screenshots: ["g10", "g11", "g12"] },
    ],
  },
  {
    id: "joynow",
    name: "Manchester United Limited",
    years: "2017–2018",
    duration: "1 year",
    description: "Official Manchester United digital products. Club app with MUTV live streaming, news, and the United Store, plus a dedicated MUTV platform for Premier League collections, films, and originals.",
    apps: [
      { name: "Manchester United Official App", category: "Sports", playStoreId: "com.manutd.android", tech: "Android · Kotlin", technicalNote: "Official club app with MUTV 24/7 live streaming, personalised news feed, match build-up content, exclusive series, and integrated United Store for kits and merchandise.", skills: ["MUTV 24/7 Streaming", "Live Match Coverage", "Personalised News Feed", "United Store & Merch", "Exclusive Series & Shows"], screenshots: ["m1", "m2", "m3"] },
      { name: "MUTV – Man Utd TV", category: "Sports", playStoreId: "com.manutd.mutv", tech: "Android · Kotlin", technicalNote: "Dedicated streaming platform for Manchester United content: live channel, Premier League era collections (90s–20s), films & originals, UTD podcasts, and multi-device support.", skills: ["Live Channel Streaming", "Premier League Collection", "Films & Originals", "UTD Podcasts", "Multi-device Support"], screenshots: ["m4", "m5", "m6"] },
    ],
  },
  {
    id: "hkej-company",
    name: "Myarx apps",
    years: "2016–2017",
    duration: "1 year",
    description: "Travel and geography apps. Personal travel tracker, world map quiz, and a bucket list app for discovering and logging world highlights and natural wonders.",
    apps: [
      { name: "Places Been – Travel Tracker", category: "Travel", playStoreId: "com.myarx.placesbeen", tech: "Android · Java", technicalNote: "Interactive personal travel map tracking visited countries, cities, UNESCO sites, national parks, airports, and sights with flag map overlay and add-on packs.", skills: ["Travel Map Tracker", "Countries & Cities Log", "UNESCO & National Parks", "Flag Map Overlay", "Upgrades & Add-ons"], screenshots: ["n1", "n2", "n3"] },
      { name: "GuessWhere – World Map Quiz", category: "Education", playStoreId: "com.myarx.guesswhere", tech: "Android · Java", technicalNote: "Satellite aerial-view quiz game challenging players to identify world locations across progressive difficulty levels with hint and help systems.", skills: ["Aerial View Quiz", "World Location Guessing", "Progressive Levels", "Hint & Help System", "Landmark Recognition"], screenshots: ["n4", "n5", "n6"] },
      { name: "Been There Done That", category: "Travel", playStoreId: "com.myarx.beentheredonethat", tech: "Android · Java", technicalNote: "Bucket list travel app with curated world highlights and natural wonders categories, visited/unvisited gallery tracking, and personal statistics dashboard.", skills: ["Been There Done That", "World Highlights & Wonders", "Bucket List Management", "Visited Gallery", "My Statistics Dashboard"], screenshots: ["n7", "n8", "n9"] },
    ],
  },
  {
    id: "hkt",
    name: "MonetizeGo",
    years: "2014–2015",
    duration: "1 year",
    description: "Ad-supported utility and media apps. Breaking US news, investment community tools, and a multi-source video downloader with built-in HD player.",
    apps: [
      { name: "USA News Updates", category: "News", playStoreId: "com.monetizego.usanews", tech: "Android · Kotlin", technicalNote: "Ad-monetized news app with categorised feeds covering crime, lifestyle, and politics; real-time article updates and push notifications.", skills: ["Crime Coverage Feed", "Lifestyle Headlines", "US Politics Updates", "Push Notifications", "Category Navigation"], screenshots: ["c1", "c2", "c3"] },
      { name: "Investment Guru", category: "Finance", playStoreId: "com.monetizego.investmentguru", tech: "Android · Java", technicalNote: "Investment community platform with a discussion wall, userbook, suggestion board, support tools, notifications, and account management.", skills: ["Community Wall", "Userbook & Suggestions", "Investment Tools", "Notifications", "Support & Feedback"], screenshots: ["c4", "c5", "c6"] },
      { name: "All Video Downloader HD Player", category: "Utility", playStoreId: "com.monetizego.videodownloader", tech: "Android · Java", technicalNote: "Multi-resolution video downloader (1080p/720p/480p) with 4x download speed, Instagram status saver, and built-in HD video player.", skills: ["Fast 4x Download Speed", "1080p / 720p / 480p Quality", "Save IG Status", "Built-in HD Video Player", "Multi-source Downloads"], screenshots: ["c7", "c8", "c9"] },
    ],
  },
];

export const profile = {
  name: "Daniel Ray",
  title: "Senior Mobile Developer",
  location: "Lafayette, Tennessee, 37083",
  university: "Volunteer State Community College",
  languages: ["English"],
  headline: "12 Years. 5 Studios. 50+ Mobile Products.",
  subheadline: "Senior Mobile Developer based in Lafayette, Tennessee. Vol State Alumnus. Expert in Android, Flutter, React Native, and full mobile lifecycle delivery across 5 studios.",
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
  workHistoryAppsCount: 19,
  /** Figma design portfolio (UI/UX work) */
  figmaPortfolioUrl:
    "https://www.figma.com/design/9bKBKiSGkSPFXqP5p3xN0f/Daniel--s-Portfolio?node-id=0-1&t=rGbs8K3IithOBKql-1",
  /** Workana freelancer profile */
  workanaUrl: "https://www.workana.com/freelancer/926e74bdcff8813080de57673d4d5950",
};
