/**
 * RideQuest - System Design Learning Game: Levels Data
 * Single Source of Truth based on "System_Design_Levels_Complete (1).pdf"
 * 
 * Complete original content preserved from the supplied PDF source.
 * Strict Curriculum Flow: SNO 1 through 9.
 */

const STAGES = [
  { id: 1, name: "Stage 1: System Foundations", icon: "🏛️", levels: [1, 2] },
  { id: 2, name: "Stage 2: Networking & Connectivity", icon: "🌐", levels: [3, 4] },
  { id: 3, name: "Stage 3: Communication & Security", icon: "🛡️", levels: [5, 6, 7] },
  { id: 4, name: "Stage 4: Data Architecture", icon: "💾", levels: [8, 9] },
  { id: 5, name: "Stage 5: Caching & Storage", icon: "⚡", levels: [10, 11, 12, 13] },
  { id: 6, name: "Stage 6: Content & Delivery", icon: "🌍", levels: [14] },
  { id: 7, name: "Stage 7: Scalability & Traffic", icon: "🚀", levels: [15, 16, 17] },
  { id: 8, name: "Stage 8: Distributed Data & Sharding", icon: "🗄️", levels: [18] },
  { id: 9, name: "Stage 9: Distributed Systems Architecture", icon: "🌐", levels: [19, 20, 21, 22, 23] },
  { id: 10, name: "Stage 10: Asynchronous Messaging & Streaming", icon: "📨", levels: [24, 25, 26] },
  { id: 11, name: "Stage 11: Real-Time Telemetry & Search", icon: "📍", levels: [27, 28] }
];

const LEVELS = [
  {
    "id": 1,
    "stage": 1,
    "sno": 1,
    "topic": "Requirements Engineering",
    "concept": "Requirements Engineering: Functional vs. Non-Functional Requirements (FR & NFR)",
    "title": "Level 1: The Blueprint & Scope Framing",
    "time": "Day 1 \u2014 Construction Kickoff",
    "usersCount": "5,000 Holiday Shoppers Capacity",
    "topicHint": "Blueprint & Scope Framing",
    "situation": "You are standing in the middle of a massive, muddy, empty field in your rubber boots. The construction crew has arrived with 10 cement mixers, stacks of steel rods, and 50 eager workers with shovels. The site manager walks up to you, taps his hard hat, and asks: \"Boss, the trucks are burning diesel just standing here. Do we pour the concrete right now, or what is the game plan?\"",
    "problem": "Before touching building materials, an architect must define what the store actually does day-to-day versus how durable, safe, and fast the building operates. What is your game plan?",
    "simulationType": "supermarket_blueprint",
    "choices": [
      {
        "id": "A",
        "text": "Pour the concrete immediately! We will figure out where to place the bakery, cold storage, and cash registers while the walls are going up.",
        "isOptimal": false,
        "consequenceText": "The workers cheer and pour tons of wet concrete across the ground. Two weeks later, the walls are solid, but moving day turns into a disaster. The refrigerated delivery truck arrives with 800 tubs of premium ice cream and dairy milk. The driver asks where the high-voltage commercial freezer outlets are. You look at the walls in horror: there are no heavy electric lines installed. Within hours, the ice cream melts into sticky soup across the floor. To add insult to injury, the front entrance is so narrow that two shopping carts cannot pass each other without jamming. You are forced to hire a demolition crew to jackhammer the concrete, smashing your budget before selling a single tomato.",
        "resultState": "unplanned_gridlock",
        "statImpact": {
          "latency": "Frozen",
          "capacity": "0 Shoppers",
          "risk": "Operational Gridlock",
          "cost": "Demolition Deficit"
        },
        "whatHappened": {
          "helped": "You poured concrete quickly without spending time on paperwork.",
          "bottleneck": "Without requirements scoping, you built without high-voltage power lines or cart lanes, forcing expensive demolition!",
          "reflectionQuestion": "Can any system function if you build before scoping Functional and Non-Functional Requirements?"
        }
      },
      {
        "id": "B",
        "text": "Stop the trucks. Give me a clipboard. First, list every single department we need (groceries, billing, parking) and specify the structural rules (floors holding 5,000 shoppers, fire exits, and heavy freezer power lines).",
        "isOptimal": true,
        "consequenceText": "You sit down on an overturned crate, pull out a marker, and methodically map out the floor plan. You designate dedicated zones for vegetables, dry groceries, frozen meats, and checkout bays. You calculate that the building must withstand heavy monsoon rains, sustain 5,000 customers during holiday festivals, and house fire suppression sprinklers. The builders pour the foundation with exact conduits for plumbing, drainage, and electricity. When the doors open, foot traffic flows effortlessly, freezers run ice-cold, and the safety inspector stamps \"PASSED\" on your building license.",
        "resultState": "blueprint_success",
        "statImpact": {
          "latency": "Under 100ms",
          "capacity": "5,000 Shoppers (99.99% Uptime)",
          "risk": "Zero Downtime",
          "cost": "On Budget"
        },
        "successSummary": "By separating Functional Requirements (what the store does) from Non-Functional Requirements (how durable and fast it runs), construction succeeds without rework!"
      },
      {
        "id": "C",
        "text": "Just build one giant four-walled empty hall with a tin roof. We can throw everything inside later without dividers.",
        "isOptimal": false,
        "consequenceText": "The crew puts up a giant open tin shed in record time. It looks cheap and spacious, but daily operations become an absolute circus. You placed the fresh fish counter right next to the luxury perfume display; by afternoon, the expensive imported perfumes smell like raw sardines. Heavy electrical cables for meat cutters are stretched openly across the walkway because there are no wall dividers, causing three shoppers to trip and fall. The echo inside the giant metal shed is so deafening that cashiers cannot hear what customers are ordering. The city safety officer arrives, blows a whistle, and slaps a bright orange \"UNSAFE / BUSINESS SHUT DOWN\" sticker on the rolling shutter.",
        "resultState": "warehouse_invasion",
        "statImpact": {
          "latency": "Deafening",
          "capacity": "Shut Down",
          "risk": "Severe Safety Hazard",
          "cost": "Total Shutdown"
        },
        "whatHappened": {
          "helped": "Construction was fast and required no interior partition planning.",
          "bottleneck": "Zero architectural boundaries caused fish odors to ruin perfume, tripping hazards on walkways, and a city shutdown!",
          "reflectionQuestion": "Why do large software systems require clear module boundaries instead of throwing everything into one giant monolith?"
        }
      }
    ],
    "discovery": {
      "badge": "Requirements Engineering: Functional vs. Non-Functional Requirements",
      "tagline": "Separating what the system does from how durably and quickly it performs",
      "simpleMeaning": "Requirements Engineering divides software architecture into two mandatory pillars: Functional Requirements (FR) defining what the system DOES, and Non-Functional Requirements (NFR) defining how the system PERFORMS.",
      "analogy": "Before touching building materials, an architect separates what the store does day-to-day (selling groceries, processing bills) from how durable and safe the building operates (floor load ratings, fire exit widths, freezer power lines).",
      "howItWorks": [
        "1. Functional Requirements (FR) \u2014 What the system DOES: User registration, product search, cart management, payment processing, and inventory status tracking.",
        "2. Non-Functional Requirements (NFR) \u2014 Latency & Speed: Search queries must return product records in under 100 milliseconds.",
        "3. Non-Functional Requirements (NFR) \u2014 Availability & Scalability: 99.99% uptime (less than 52 mins downtime/year), 10x traffic surge scaling, and encrypted payment transactions."
      ],
      "whyItMatters": "Building without requirements scoping leads to catastrophic rework, melted inventory, security vulnerabilities, or complete system collapse under surge traffic.",
      "visualExplanation": "Functional Needs (Features & User Actions) + Non-Functional Limits (Speed, Scalability, 99.99% Uptime) \u2500\u2500\u25ba Solid Production Architecture",
      "contrast": {
        "termA": "Functional Requirements (FR)",
        "descA": "The direct capabilities provided to users: product search, cart management, checkout, and inventory tracking.",
        "termB": "Non-Functional Requirements (NFR)",
        "descB": "Operational qualities: sub-100ms latency, 99.99% uptime, 10x scalability, encryption, and data consistency."
      },
      "advancedInfo": "Non-Functional Requirements dictate infrastructure sizing and SLA/SLO boundaries. Neglecting NFRs like concurrency and write durability leads to fatal crashes even if all functional code works in development.",
      "teacherNotes": {
        "concept": "Requirements Engineering, FR vs NFR, SLAs & SLOs",
        "experience": "Students experienced why physical supermarkets require electrical conduits and floor ratings before pouring concrete.",
        "realWorld": "Amazon and Flipkart engineer their platforms to sustain 10x to 50x surge traffic during festive sales without dropping below 99.99% availability.",
        "question": "What happens to an e-commerce platform if all payment buttons work (FR) but pages take 8 seconds to load (NFR)?"
      }
    },
    "youtubeUrl": "https://youtu.be/ChvIjjBK8FQ?si=AfMC9-06gJz1NoQI",
    "videoId": "ChvIjjBK8FQ",
    "videoTitle": "Introduction to System Design (Tamil)"
  },
  {
    "id": 2,
    "stage": 1,
    "sno": 2,
    "topic": "System Architecture",
    "concept": "Client\u2013Server Architecture: Decoupling Requesters from Central Data Stores",
    "title": "Level 2: The Front Counter & Back-Office Vault",
    "time": "Day 14 \u2014 Official Store Opening",
    "usersCount": "Active Shoppers at Counter",
    "topicHint": "Client\u2013Server Architecture",
    "situation": "Your supermarket is officially open. The shelves are neatly stocked, the floors are sparkling, and the lights are bright. A customer walks through the front door, picks up a can of imported coffee, looks at it, and asks: \"Excuse me, how much does this coffee cost, and do you have 12 more cans in the back?\" Deep inside the back of your building is a locked underground vault containing your master financial ledgers, wholesale supplier purchase prices, employee payroll sheets, and total inventory logs.",
    "problem": "How should the customer query product prices and complete purchases without risking store records or exposing private company files?",
    "simulationType": "client_server_clerk",
    "choices": [
      {
        "id": "A",
        "text": "Tell the customer to walk into the private back-office vault, open the master filing cabinet, and search through the company ledgers himself.",
        "isOptimal": false,
        "consequenceText": "The customer happily strolls into your private vault. Soon, fifteen other shoppers wander back there too. While looking for coffee prices, one customer accidentally knocks over a cup of hot tea onto the primary accounting journal, dissolving months of financial records. Another customer spots your secret wholesale purchase prices, realizes your profit margins, and demands a 50% discount at the top of his lungs. An opportunistic thief casually pockets a confidential binder containing employee bank details. Your private business records are utterly corrupted and compromised.",
        "resultState": "vault_compromised",
        "statImpact": {
          "latency": "Chaotic",
          "capacity": "Compromised",
          "risk": "Critical Data Leak",
          "cost": "Catastrophic"
        },
        "whatHappened": {
          "helped": "Store staff did not have to stop what they were doing to answer customer questions.",
          "bottleneck": "Allowing untrusted clients direct access to internal storage destroyed ledger integrity and leaked confidential secrets!",
          "reflectionQuestion": "Why should a web browser or mobile client NEVER connect directly to a backend database?"
        }
      },
      {
        "id": "B",
        "text": "Place a store clerk behind an inquiry desk at the entrance. The customer asks the clerk, the clerk looks up the item in the terminal, and tells the customer the price and stock.",
        "isOptimal": true,
        "consequenceText": "The shopper walks up to the clean inquiry desk. He asks: \"Can I get the price and stock count for this coffee?\" The clerk remains in front of the secure partition, enters the product barcode into the terminal, reads the isolated stock number, and responds: \"That is Rs. 350, and we have 24 cans in stock.\" The customer gets the exact answer in three seconds. The private vault stays locked, safe, and untouched.",
        "resultState": "client_server_success",
        "statImpact": {
          "latency": "3 Seconds Fast",
          "capacity": "Unlimited Shoppers",
          "risk": "Protected Vault",
          "cost": "Secure & Scalable"
        },
        "successSummary": "A clean physical boundary was created: the shopper (Client) interacts exclusively with a trained intermediary (Server), keeping private records (Database) safe!"
      },
      {
        "id": "C",
        "text": "Print 5,000 photocopies of all internal company bank and ledger books, and leave stacks of them at the front door for shoppers to read.",
        "isOptimal": false,
        "consequenceText": "Leaving entire copies of your internal ledgers at the front door creates immediate chaos. Competitors from down the street walk in, scoop up the notebooks, and discover your wholesale suppliers and contract terms. Customers get overwhelmed trying to decode 300 pages of confusing ledger numbers just to find the price of a bar of soap. Within hours, your proprietary trade secrets are leaked all over town.",
        "resultState": "leak_disaster",
        "statImpact": {
          "latency": "Overwhelming",
          "capacity": "Confused",
          "risk": "Proprietary Trade Secrets Leaked",
          "cost": "Massive Business Loss"
        },
        "whatHappened": {
          "helped": "Shoppers did not have to wait in line to speak to a clerk.",
          "bottleneck": "Distributing raw database dumps to client devices leaked trade secrets to competitors and confused everyday shoppers!",
          "reflectionQuestion": "What security risks emerge when client-side applications download full internal backend datasets?"
        }
      }
    ],
    "discovery": {
      "badge": "Client\u2013Server Architecture: Request & Response Model",
      "tagline": "Creating a clean boundary between user interface clients and protected central data vaults",
      "simpleMeaning": "Client\u2013Server Architecture separates the system into Requesters (Clients) and Providers (Servers). The client renders the UI and captures user intent, while the server enforces validation, executes business logic, and mediates access to data.",
      "analogy": "The shopper never enters the private record room; they interact exclusively through a designated desk with a trained clerk who retrieves verified answers safely.",
      "howItWorks": [
        "1. Step 1 (Request): Client / Shopper sends a structured Request (\"Price of Coffee?\") to the Server / Clerk.",
        "2. Step 2 (Server Processing): Server / Clerk validates permissions, executes business logic, and checks the protected Database / Vault.",
        "3. Step 3 (Response): Server / Clerk sends a structured Response (\"Rs. 350, In Stock\") containing status codes and payload back to the Client / Shopper."
      ],
      "whyItMatters": "Decoupling clients from servers protects internal databases from direct tampering, centralizes security, and allows updating backend logic without modifying client devices.",
      "visualExplanation": "Client (App/Browser) \u2500\u2500[Request: Price?]\u2500\u2500\u25ba Server (Clerk/Validation) \u2500\u2500\u25ba Database (Vault) \u2500\u2500\u25ba Server \u2500\u2500[Response: Rs 350]\u2500\u2500\u25ba Client",
      "contrast": {
        "termA": "Client (The Requester)",
        "descA": "Web browser or mobile app. Renders UI and captures intent; holds no private business logic or direct database connections.",
        "termB": "Server (The Provider)",
        "descB": "Central machine listening for requests. Enforces business rules, validation, securely interacts with databases, and returns results."
      },
      "advancedInfo": "In multi-tier architectures, clients communicate via stateless network requests (HTTP/REST/gRPC). This ensures backend databases are shielded behind private subnets and firewalls.",
      "teacherNotes": {
        "concept": "Client\u2013Server Model, Request-Response Lifecycle, Decoupling",
        "experience": "Students saw why letting customers roam into the master vault causes catastrophic record corruption and privacy leaks.",
        "realWorld": "Every web app and mobile client (Swiggy, Uber, Netflix) communicates with backend application servers via APIs.",
        "question": "Why is it dangerous to embed raw database credentials (like PostgreSQL passwords) inside a mobile app's client code?"
      }
    },
    "youtubeUrl": "https://youtu.be/iKz9szx9wiQ?si=JqDjUO3wOo9LjxL",
    "videoId": "iKz9szx9wiQ",
    "videoTitle": "Client Server Architecture | System Design | Tamil"
  },
  {
    "id": 3,
    "stage": 2,
    "sno": 3,
    "topic": "Networking Fundamentals",
    "concept": "Networking Fundamentals: IP Addresses, DNS, and Ports",
    "title": "Level 3: Finding the Store & Entering the Right Doors",
    "time": "Day 30 \u2014 City Infrastructure Connection",
    "usersCount": "City-Wide Traffic Discovery",
    "topicHint": "IP Addresses, DNS, Ports",
    "situation": "Your physical building is completed, but it is located on a newly paved ring road. The municipal corporation issues your official survey coordinates: Latitude 11.0168\u00b0 N, Longitude 76.9558\u00b0 E. Now, people across the city need to visit your store. Furthermore, when trucks and people arrive at the building exterior, they need to know which specific door to enter: customers need the glass revolving doors, cash collection vans need the armored back-bay door, and plumbing repairmen need the maintenance hatch.",
    "problem": "How can thousands of customers easily find your location, and how should distinct types of traffic enter without blocking each other?",
    "simulationType": "networking_dns_ports",
    "choices": [
      {
        "id": "A",
        "text": "Print posters telling people to visit '11.0168, 76.9558'. Remove all door signs and let shoppers, cash vans, and supply trucks push through whichever random door they find unlocked.",
        "isOptimal": false,
        "consequenceText": "Shoppers try to type long, confusing numbers into their map apps. People mistype a single digit and end up stranded in an industrial gravel quarry 15 miles away. The few customers who actually arrive find no door signs. A family pushing a baby stroller accidentally walks into the armored security loading dock, triggering sirens and getting held at gunpoint by security guards. Meanwhile, a massive semi-truck carrying potatoes tries to drive through the glass customer revolving door, smashing the facade to pieces.",
        "resultState": "gps_collision_gridlock",
        "statImpact": {
          "latency": "Lost in Quarry",
          "capacity": "0 Visitors",
          "risk": "Armed Security Alert",
          "cost": "Smashed Glass Facade"
        },
        "whatHappened": {
          "helped": "You avoided registering a brand name or installing numbered entrance signs.",
          "bottleneck": "Humans cannot memorize numerical coordinates, and unmarked doors caused delivery trucks to smash through glass customer doors!",
          "reflectionQuestion": "Why do computers need DNS to map human names to IP addresses, and ports to route specific protocols?"
        }
      },
      {
        "id": "B",
        "text": "Register a clear, memorable brand name like 'FreshMart' in the city directory mapped to your coordinates, and place bold numbered signs over each door (Door 80 for regular entry, Door 443 for armored security guards, Door 5432 for internal vault maintenance).",
        "isOptimal": true,
        "consequenceText": "Anyone in the city can simply tell an auto driver or map app: \"Take me to FreshMart.\" The city mapping directory instantly translates \"FreshMart\" to the physical coordinates behind the scenes. When visitors arrive, shoppers walk smoothly through Door 80, cash vans deliver securely through armored Door 443, and technical technicians go through Door 5432. Traffic flows safely without collision or confusion.",
        "resultState": "dns_ports_success",
        "statImpact": {
          "latency": "Instant Lookup",
          "capacity": "Unlimited City Traffic",
          "risk": "Zero Collision",
          "cost": "Optimal Navigation"
        },
        "successSummary": "Human-friendly names mapped to numerical network coordinates plus dedicated numbered ports keep traffic organized and secure!"
      },
      {
        "id": "C",
        "text": "Do not register any name or coordinates. Hire street shouters on bicycles to guide every individual car from their homes to your building one by one.",
        "isOptimal": false,
        "consequenceText": "Your bicycle-shouter idea collapses under basic logistics. On the first morning, 400 cars want to visit your store, but you only have five bicycle guides. Traffic backs up for miles. The bicycle messengers get exhausted, confuse directions, and argue with drivers. The entire operation goes bankrupt from hiring hundreds of messengers while customers give up and go to your competitors.",
        "resultState": "bicycle_gridlock",
        "statImpact": {
          "latency": "Miles of Traffic",
          "capacity": "5 Cars Guided",
          "risk": "Operational Bankruptcy",
          "cost": "Wasted Wages"
        },
        "whatHappened": {
          "helped": "Personal guides provided high-touch concierge navigation to the first five cars.",
          "bottleneck": "Manual discovery cannot scale to hundreds of concurrent users, causing traffic jams and bankruptcy!",
          "reflectionQuestion": "Why must network discovery protocols operate automatically and deterministically at scale?"
        }
      }
    ],
    "discovery": {
      "badge": "Networking Fundamentals: IP Addresses, DNS, and Ports",
      "tagline": "Mapping human names to machine coordinates and routing services to numbered doorways",
      "simpleMeaning": "Computers locate each other across the global Internet using numerical IP addresses. DNS acts as the Internet's telephone directory mapping domain names to IP addresses, while Ports route traffic to specific applications running on that machine.",
      "analogy": "A human needs an easy name (\"FreshMart\") instead of geographic coordinates (11.0168\u00b0 N, 76.9558\u00b0 E). Once at the building, labeled doors (Door 80, 443, 5432) ensure different types of traffic reach the correct department.",
      "howItWorks": [
        "1. IP Address (GPS Coordinates): Numerical address (IPv4: 192.168.1.1, IPv6: 2001:db8::1) assigned to every network machine to route data packets.",
        "2. DNS - Domain Name System (City Directory): Translates human-friendly domain names (\"freshmart.com\") into computer-routable IP addresses (\"142.250.190.46\").",
        "3. Ports (Numbered Service Doors): An IP gets you to the server machine; a Port gets you to the right application (Port 80 = HTTP, Port 443 = HTTPS, Port 5432 = PostgreSQL)."
      ],
      "whyItMatters": "Without DNS, humans would have to memorize 12-digit numbers for every website. Without Ports, a server could not run a web store, email server, and database simultaneously.",
      "visualExplanation": "Domain (\"freshmart.com\") \u2500\u2500\u25ba DNS Resolution \u2500\u2500\u25ba IP Address (\"142.250.190.46\") \u2500\u2500\u25ba Port 443 (HTTPS Secure Web Service)",
      "contrast": {
        "termA": "IP Address (The Machine Location)",
        "descA": "Every machine connected to the Internet is assigned a numerical address used to route data packets across the global network.",
        "termB": "DNS & Ports (Names & Doorways)",
        "descB": "DNS translates human names to IP addresses; Ports route incoming packets to the exact listening service on that server."
      },
      "advancedInfo": "DNS resolution uses recursive and authoritative nameservers with hierarchical caching (Browser, OS, ISP) governed by Time-To-Live (TTL). Common standard ports: 80 (HTTP), 443 (HTTPS), 22 (SSH), 5432 (PostgreSQL), 3306 (MySQL), 6379 (Redis).",
      "teacherNotes": {
        "concept": "IP Addressing (IPv4/IPv6), DNS Resolution Hierarchy, Standard Port Numbers",
        "experience": "Students saw why numerical coordinates strand shoppers in quarries and why unnumbered doors cause semi-trucks to ram glass customer doors.",
        "realWorld": "Google Public DNS (8.8.8.8) and Cloudflare (1.1.1.1) resolve billions of DNS queries every second.",
        "question": "What happens if two different applications attempt to bind to Port 80 on the same server simultaneously?"
      }
    },
    "youtubeUrl": "https://youtu.be/mpQZVYPuDGU?si=YR2fYFxC8XBU_zqE",
    "videoId": "mpQZVYPuDGU",
    "videoTitle": "How DNS Server Works | System Design | Tamil"
  },
  {
    "id": 4,
    "stage": 2,
    "sno": 4,
    "topic": "Networking Protocols",
    "concept": "Networking Protocols: TCP vs. UDP and HTTP vs. HTTPS",
    "title": "Level 4: Road Rules & Sealed Briefcases",
    "time": "Day 45 \u2014 City Logistics Transport",
    "usersCount": "Continuous Inter-City Transport",
    "topicHint": "TCP vs. UDP & HTTP vs. HTTPS",
    "situation": "Your store has two ongoing transportation needs: 1. Every morning, expensive porcelain plates and delicate glassware must be transported from a local pottery factory. If a box is dropped, you need the driver to stop, report the broken item, and replace it immediately. 2. Store managers need to send confidential daily cash sheets and customer credit account summaries to the bank across town. The road is full of pickpockets and rival business spies standing on street corners.",
    "problem": "Different goods require different transport rules: fragile physical goods require signed verification receipts, sensitive financial documents require tamper-proof locked safes, and non-critical data needs raw speed without paperwork. How should you transport your goods and confidential papers?",
    "simulationType": "protocols_transport",
    "choices": [
      {
        "id": "A",
        "text": "Put both the glassware and the private bank sheets into open cardboard crates tied to the back of speeding motorcycles with no receipts, no tracking, and no locks.",
        "isOptimal": false,
        "consequenceText": "The speeding motorcycle hits a speed bump. Three boxes of porcelain plates tumble onto the asphalt and shatter into dust. The driver does not notice, keeps driving, and delivers empty boxes. Worse, the confidential bank papers blow away in the wind. A rival store manager picks them off the sidewalk, reads every customer's credit details, and posts them online. Your store faces massive regulatory fines, and inventory losses reach record highs.",
        "resultState": "broken_plates_leak",
        "statImpact": {
          "latency": "Fast but Broken",
          "capacity": "Lost Cargo",
          "risk": "Public Credit Leak",
          "cost": "Massive Regulatory Fines"
        },
        "whatHappened": {
          "helped": "Motorcycles were fast and did not waste time getting delivery signatures.",
          "bottleneck": "Unreliable transport broke fragile glassware without retries, and plaintext papers leaked customer banking details!",
          "reflectionQuestion": "Why can bank transactions never tolerate packet loss (requiring TCP) or unencrypted plaintext (requiring HTTPS)?"
        }
      },
      {
        "id": "B",
        "text": "Transport glassware using delivery vans that require signed handoffs for every single box before moving to the next. Put confidential banking slips into locked, steel-armored briefcases that only the bank manager has the secret key to open.",
        "isOptimal": true,
        "consequenceText": "The glassware van uses a verified check-in system: the driver hands over Box 1, gets an initial, hands over Box 2, and if Box 3 is slightly chipped, it is flagged and resent on the spot. The confidential banking slips are sealed inside an encrypted briefcase. Even if a thief knocks the courier off his bike and steals the briefcase, he cannot open it without the secret physical key. The bank receives the data fully intact and confidential.",
        "resultState": "protocols_success",
        "statImpact": {
          "latency": "Guaranteed Delivery",
          "capacity": "100% Intact Cargo",
          "risk": "Zero Data Leak",
          "cost": "Optimal Protection"
        },
        "successSummary": "TCP's guaranteed handshake ensures zero lost cargo, while HTTPS's cryptographic locks guarantee total privacy and integrity in transit!"
      },
      {
        "id": "C",
        "text": "Send all shipments via slow, heavy armored trucks, including bulk promotional paper flyers and store radio background music recordings.",
        "isOptimal": false,
        "consequenceText": "Using heavy armored transport for absolutely everything creates extreme bottlenecks. Your store radio background music stream stutters and pauses every 10 seconds because the sound files are waiting for armored truck clearances. The flyers arrive three days late because the security overhead is unnecessarily complex for non-critical items.",
        "resultState": "heavy_armored_choke",
        "statImpact": {
          "latency": "Extreme Lag",
          "capacity": "Stuttering Streams",
          "risk": "Over-Engineered Choke",
          "cost": "Excessive Fuel Waste"
        },
        "whatHappened": {
          "helped": "Even promotional flyers were guarded by bulletproof steel plates.",
          "bottleneck": "Applying heavy handshake and encryption overhead to live streaming audio caused constant stuttering and delays!",
          "reflectionQuestion": "Why do live video streams and voice calls use lightweight UDP instead of connection-oriented TCP?"
        }
      }
    ],
    "discovery": {
      "badge": "Networking Protocols: TCP vs. UDP and HTTP vs. HTTPS",
      "tagline": "Reliable vs lightweight transport, and encrypted modern web communication",
      "simpleMeaning": "Network protocols establish the rules for packaging, transmitting, and verifying data across wires. TCP guarantees delivery through connection handshakes, UDP provides ultra-low latency without confirmation receipts, and HTTPS encrypts data in transit.",
      "analogy": "Fragile physical goods require signed verification receipts (TCP), live voice/audio needs fast couriers without paperwork (UDP), and confidential papers require locked, tamper-proof briefcases (HTTPS).",
      "howItWorks": [
        "1. TCP (Transmission Control Protocol) \u2014 The Verified Van: Establishes a reliable connection using a 3-Way Handshake (SYN \u2192 SYN-ACK \u2192 ACK), guarantees in-order delivery, and retransmits lost packets.",
        "2. UDP (User Datagram Protocol) \u2014 The Fast Courier Bike: Connectionless transport with ultra-low latency; lost packets are skipped. Used for live video streaming, multiplayer games, and voice calls.",
        "3. HTTP vs. HTTPS (Plain Box vs. Locked Briefcase): HTTP transmits plaintext across the wire vulnerable to snooping. HTTPS wraps HTTP inside TLS/SSL encryption using public/private keys to guarantee Confidentiality and Integrity."
      ],
      "whyItMatters": "Without TCP, financial transactions and downloads would silently drop packets. Without HTTPS, attackers on public Wi-Fi networks could intercept passwords and credit card credentials in plaintext.",
      "visualExplanation": "TCP: Client \u2500\u2500[SYN]\u2500\u2500\u25ba Server \u2500\u2500[SYN-ACK]\u2500\u2500\u25ba Client \u2500\u2500[ACK]\u2500\u2500\u25ba Data Stream (Guaranteed Delivery)\nHTTPS: TLS Handshake (Public Key Exchange) \u2500\u2500\u25ba Symmetric Session Key \u2500\u2500\u25ba Encrypted AES Ciphertext",
      "contrast": {
        "termA": "TCP (Transmission Control Protocol)",
        "descA": "Connection-oriented, guaranteed in-order delivery, retransmissions, flow control. Used for web pages, APIs, and databases.",
        "termB": "UDP (User Datagram Protocol)",
        "descB": "Connectionless, lightweight, ultra-low latency, no retries. Used for live video calls, gaming, and streaming audio."
      },
      "advancedInfo": "HTTPS uses Transport Layer Security (TLS 1.3). It combines asymmetric cryptography (RSA / ECDHE) to negotiate shared secrets with symmetric encryption (AES-GCM / ChaCha20) for ultra-fast data transmission.",
      "teacherNotes": {
        "concept": "Transport Layer (TCP vs UDP) & Application Layer (HTTP vs HTTPS)",
        "experience": "Students connected broken plates to lost packets, pickpockets to plaintext packet sniffers, and armored briefcases to TLS encryption.",
        "realWorld": "Financial institutions and e-commerce checkout platforms mandate HTTPS with strict HTTP Strict Transport Security (HSTS).",
        "question": "Why does online multiplayer gaming prefer UDP over TCP even if an occasional player position packet is lost?"
      }
    },
    "youtubeUrl": "https://youtu.be/kq1lPrb2pt8?si=BL_--R8bZhEd0bk3",
    "videoId": "kq1lPrb2pt8",
    "videoTitle": "OSI Model & Networking Protocols | System Design | Tamil"
  },
  {
    "id": 5,
    "stage": 3,
    "sno": 5,
    "topic": "API Design",
    "concept": "API Design & RESTful Architecture: Standardized Communication Contracts",
    "title": "Level 5: The Standard Order Form",
    "time": "Day 60 \u2014 Warehouse Order Synchronization",
    "usersCount": "Hundreds of Orders Per Hour",
    "topicHint": "API Design & RESTful Architecture",
    "situation": "Your central warehouse receives hundreds of orders every hour from cashiers, department supervisors, and restocking staff. However, everyone communicates in chaotic ways: \u2022 One cashier shouts: \"Give me 5 apples!\" \u2022 Another writes a poem: \"The fruit stand is bare, send forth the red fruit.\" \u2022 Another leaves a sticky note saying: \"Apples. 10. Change.\" The warehouse workers are completely overwhelmed trying to translate different languages, handwriting styles, and vague commands. Orders are constantly mixed up.",
    "problem": "Operations scale only when communication between departments uses a standardized grammar with consistent action words and unambiguous item addresses. What communication standard should you introduce?",
    "simulationType": "api_contracts_scanners",
    "choices": [
      {
        "id": "A",
        "text": "Let everyone communicate however they feel like. Tell the warehouse workers to just guess what people mean.",
        "isOptimal": false,
        "consequenceText": "The warehouse turns into a disaster zone. A note saying \"Apples. 10. Change.\" is interpreted by one worker as \"Delete 10 apples\", while another worker interprets it as \"Add 10 apples\". The fruit department receives a truckload of green chili peppers instead of fresh fruit. Staff argue constantly, customers wait in checkout lines for over an hour, and stock counts become completely untrustworthy.",
        "resultState": "rest_confusion_zone",
        "statImpact": {
          "latency": "1+ Hour Delay",
          "capacity": "0 Accurate Orders",
          "risk": "Inventory Chaos",
          "cost": "Severe Wastage"
        },
        "whatHappened": {
          "helped": "Staff did not have to learn any formal rules or fill out structured forms.",
          "bottleneck": "Unstructured text was interpreted inconsistently, delivering chili peppers instead of fruit and stalling operations!",
          "reflectionQuestion": "Why must software systems communicate using structured protocols (like JSON schemas) rather than arbitrary text?"
        }
      },
      {
        "id": "B",
        "text": "Issue a standardized requisition form with four strict checkboxes: [VIEW], [ADD NEW], [CHANGE], and [REMOVE]. Every order must clearly state the item category and product ID number.",
        "isOptimal": true,
        "consequenceText": "Order processing runs like clockwork. A cashier needing stock simply checks [VIEW] on /warehouse/fruits/apples, and the form returns current quantities instantly. To add stock, the manager submits an [ADD NEW] form containing the item count. Any computer terminal, tablet, or handheld barcode scanner can communicate with the warehouse effortlessly because the grammar is clear, predictable, and uniform.",
        "resultState": "rest_order_success",
        "statImpact": {
          "latency": "Instant Clockwork",
          "capacity": "Unlimited Automated Orders",
          "risk": "Zero Ambiguity",
          "cost": "High Efficiency"
        },
        "successSummary": "Standardized verbs ([VIEW], [ADD NEW], [CHANGE], [REMOVE]) mapped to clean resource paths allow any device to communicate seamlessly!"
      },
      {
        "id": "C",
        "text": "Ban all order slips. Force every single cashier to walk back to the warehouse in person and verbally speak to the warehouse manager for every single transaction.",
        "isOptimal": false,
        "consequenceText": "Your physical operations grind to an absolute halt. Cashiers constantly abandon their cash registers to walk back to the warehouse. Checkout lanes are left unstaffed, lines snake around the block, and the warehouse manager suffers a nervous breakdown trying to talk to 40 cashiers at the exact same time.",
        "resultState": "physical_bottleneck_collapse",
        "statImpact": {
          "latency": "Gridlock",
          "capacity": "Lines Around Block",
          "risk": "Manager Breakdown",
          "cost": "Lost Customers"
        },
        "whatHappened": {
          "helped": "Cashiers got to communicate face-to-face with the warehouse manager.",
          "bottleneck": "Forcing tightly coupled verbal interactions abandoned checkout registers and created a single point of failure!",
          "reflectionQuestion": "Why do microservices communicate through asynchronous, decoupled APIs instead of blocking synchronous dependencies?"
        }
      }
    ],
    "discovery": {
      "badge": "API Design & RESTful Architecture",
      "tagline": "Standardized verbs, resource-based URLs, and structured data schemas",
      "simpleMeaning": "An API (Application Programming Interface) is a defined contract specifying how software systems exchange requests and responses. REST (Representational State Transfer) utilizes standard HTTP verbs where every request is stateless, containing all required context.",
      "analogy": "Instead of shouting vague poems, staff use a standardized requisition form with four strict action boxes ([VIEW], [ADD NEW], [CHANGE], [REMOVE]) and explicit resource item paths.",
      "howItWorks": [
        "1. GET (corresponds to [VIEW]): Used to read data (e.g., GET /api/v1/products/42 fetches details of product 42).",
        "2. POST (corresponds to [ADD NEW]): Used to create a new resource (e.g., POST /api/v1/products creates a product).",
        "3. PUT / PATCH ([CHANGE]) & DELETE ([REMOVE]): PUT/PATCH updates existing resources; DELETE removes a resource (e.g., DELETE /api/v1/products/42)."
      ],
      "whyItMatters": "APIs decouple frontend clients from backend databases. Web apps, mobile devices, and external suppliers can update independently without breaking each other.",
      "visualExplanation": "Barcode Scanner \u2500\u2500\u25ba GET /api/v1/products/42 \u2500\u2500\u25ba API Gateway \u2500\u2500\u25ba JSON Response { id: 42, name: 'Apples', stock: 120 } (200 OK)",
      "contrast": {
        "termA": "REST (Representational State Transfer)",
        "descA": "Standard HTTP verbs (GET, POST, PUT, DELETE) operating on resource URIs returning JSON. Stateless and cacheable.",
        "termB": "Modern API Styles (GraphQL & gRPC)",
        "descB": "GraphQL allows clients to request exact fields; gRPC uses compact binary Protocol Buffers over HTTP/2 for microservice calls."
      },
      "advancedInfo": "REST APIs adhere to standard HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error. URI path versioning (/api/v1/ vs /api/v2/) prevents breaking deployed clients.",
      "teacherNotes": {
        "concept": "API Design Patterns, REST Verbs, Status Codes, Versioning Strategies",
        "experience": "Students experienced why chaotic free-form notes cause warehouses to ship green chili peppers instead of fresh fruit.",
        "realWorld": "Stripe, GitHub, and Shopify provide REST APIs that process billions of requests daily with standardized JSON schemas.",
        "question": "What is the difference between idempotent methods (like GET, PUT, DELETE) and non-idempotent methods (like POST)?"
      }
    },
    "youtubeUrl": "https://youtu.be/37eRt5sl7ZE?si=khgza23wGzjlwEj_E",
    "videoId": "37eRt5sl7ZE",
    "videoTitle": "What is API | REST vs RESTful | System Design | Tamil"
  },
  {
    "id": 6,
    "stage": 3,
    "sno": 6,
    "topic": "Authentication",
    "concept": "Authentication (AuthN) & Token-Based Sessions: Cryptographic Identity Verification",
    "title": "Level 6: The Gatekeeper & The Entry Stamp",
    "time": "Day 75 \u2014 VIP Member Services",
    "usersCount": "Customer Identity Verification",
    "topicHint": "Authentication (AuthN) & JWT",
    "situation": "Your supermarket has a VIP Member Lounge and a Loyalty Points Cashback program. A man in a leather jacket walks up to the customer service counter, points to a gold account ledger, and says: \"Hello, I am Pranesh. Please deduct 5,000 loyalty points from my account and hand me Rs. 5,000 in physical cash right now.\" You have never seen this person before in your life.",
    "problem": "You must separate identity verification into two stages: a strong initial identity check (verifying credentials), followed by a lightweight, temporary physical pass for ongoing access. How should you verify the customer's identity?",
    "simulationType": "auth_identity_verification",
    "choices": [
      {
        "id": "A",
        "text": "Smile, trust his word, open the cash drawer, and hand him the Rs. 5,000 cash immediately.",
        "isOptimal": false,
        "consequenceText": "The stranger takes the cash, laughs, and walks out the door. Ten minutes later, the real Pranesh walks into the store, scans his card, and discovers his loyalty points are completely gone. When you explain what happened, he calls the police, files a lawsuit for negligence, and alerts the media. Word spreads that your store gives away customer accounts to anyone who asks, triggering a massive wave of customer boycotts.",
        "resultState": "auth_theft_boycott",
        "statImpact": {
          "latency": "Instant Theft",
          "capacity": "Zero Trust",
          "risk": "Lawsuit & Police Alert",
          "cost": "Massive Boycotts"
        },
        "whatHappened": {
          "helped": "The customer was served with zero delay or credential prompts.",
          "bottleneck": "Blindly trusting unverified claims handed money to an impostor, triggering lawsuits and customer boycotts!",
          "reflectionQuestion": "Why must every state-changing request prove authentication cryptographically?"
        }
      },
      {
        "id": "B",
        "text": "Ask for proof of identity (such as a password and a verification code sent to his registered phone). Once verified, stamp his wrist with a tamper-proof glowing ink stamp valid for the afternoon so he does not have to show his ID card at every single counter.",
        "isOptimal": true,
        "consequenceText": "The clerk asks the man for his account PIN and sends an instant verification code to the registered phone number. The man looks nervous, fumbles with his pockets, fails to produce the code, and runs out the door: he was a fraudster! When the real customer arrives, he proves his identity smoothly in five seconds. The clerk stamps his hand with a tamper-proof mark. For the rest of his shopping visit, the customer shows the stamp at the cafe, bakery, and checkout to buy items instantly without having to pull out his passport every two minutes.",
        "resultState": "auth_stamp_success",
        "statImpact": {
          "latency": "5 Seconds Verification",
          "capacity": "100% Protected Accounts",
          "risk": "Fraudster Defeated",
          "cost": "Optimal Security"
        },
        "successSummary": "Strong initial authentication verified credentials, followed by a signed, temporary token (JWT stamp) for fast ongoing authorization!"
      },
      {
        "id": "C",
        "text": "Lock him in an interview room for two hours and make him fill out a 40-page legal background check every single time he wants to buy a carton of eggs.",
        "isOptimal": false,
        "consequenceText": "Customers refuse to shop at your supermarket. People do not want to endure a grueling, two-hour legal interrogation just to purchase daily groceries. Lines outside the store stretch down the street, perishable vegetables rot on the shelves, and shoppers leave for the grocery store down the road.",
        "resultState": "interrogation_desertion",
        "statImpact": {
          "latency": "2 Hour Wait",
          "capacity": "Abandoned Aisles",
          "risk": "Extreme Friction",
          "cost": "Rotting Groceries"
        },
        "whatHappened": {
          "helped": "Nobody could ever impersonate another shopper without passing a 40-page background check.",
          "bottleneck": "Extreme authentication friction destroyed user experience and drove customers to competitors!",
          "reflectionQuestion": "How do token-based architectures balance high security at login with seamless microsecond requests afterward?"
        }
      }
    ],
    "discovery": {
      "badge": "Authentication (AuthN) & Token-Based Sessions",
      "tagline": "Verifying identity securely and issuing cryptographically signed session tokens",
      "simpleMeaning": "Authentication (AuthN) answers \"Who are you?\" by verifying credentials using knowledge (passwords/PINs), ownership (phone OTP, hardware keys), or biometrics. Once verified, servers issue a signed JSON Web Token (JWT) for stateless session management.",
      "analogy": "Separating identity check into two stages: a strong initial credential verification, followed by a lightweight, tamper-proof glowing wrist stamp (JWT) for fast subsequent access.",
      "howItWorks": [
        "1. Step 1 (Login): User logs in with credentials (username + secret password).",
        "2. Step 2 (Verification): Server verifies password against a stored one-way cryptographic hash with random salt (Bcrypt / Argon2).",
        "3. Step 3 (Token Issuance): Upon success, the server issues a cryptographically signed JSON Web Token (JWT) attached in subsequent authorization headers."
      ],
      "whyItMatters": "Passwords must never be stored in plaintext. Cryptographic hashing protects against database leaks, while signed tokens allow distributed backend servers to verify logins without querying the database on every click.",
      "visualExplanation": "Login Credentials \u2500\u2500\u25ba Server (Verify Bcrypt Hash) \u2500\u2500\u25ba Issue Signed JWT (Header.Payload.Signature) \u2500\u2500\u25ba Client Attaches JWT on Next Request",
      "contrast": {
        "termA": "Authentication (AuthN)",
        "descA": "Verifies identity (\"Who are you?\") via passwords, multi-factor OTPs, or biometrics.",
        "termB": "JSON Web Token (JWT)",
        "descB": "Digitally signed token containing Header, Payload (User ID, claims), and Signature verified with the server's secret key."
      },
      "advancedInfo": "JWTs are compact and self-contained. The signature is computed using HMAC SHA-256 or RSA/ECDSA asymmetric keys. If an attacker modifies the payload (e.g. changing userId: 5 to userId: 1), the cryptographic signature verification fails immediately.",
      "teacherNotes": {
        "concept": "Authentication (AuthN), Password Hashing & Salting, JWT Architecture",
        "experience": "Students saw why blind trust gives cash to fraudsters, while 2-hour legal interrogations make shoppers desert the store.",
        "realWorld": "Google, GitHub, and major banking applications use salted hashes (Argon2/Bcrypt) and short-lived JWTs paired with refresh tokens.",
        "question": "Why should password hashing algorithms deliberately be computationally slow (like Bcrypt with high work factors)?"
      }
    },
    "youtubeUrl": "https://youtu.be/kCnyLl1UhNM?si=HbdBqRNp9i9Z7smy",
    "videoId": "kCnyLl1UhNM",
    "videoTitle": "Authentication vs Authorization | System Design | Tamil"
  },
  {
    "id": 7,
    "stage": 3,
    "sno": 7,
    "topic": "Authorization",
    "concept": "Authorization (AuthZ) & Access Control Models: Role-Based Access Control & Principle of Least Privilege",
    "title": "Level 7: Department Security Badges",
    "time": "Day 90 \u2014 Internal Staff Access Control",
    "usersCount": "Staff Operational Permissions",
    "topicHint": "Authorization (AuthZ) & RBAC",
    "situation": "Your staff members are now properly authenticated: every employee wears an official, verified name tag. However, during the afternoon shift, an 18-year-old shelf-stocking intern with a verified name tag takes the elevator to the executive administrative suite, walks into the master accounting office, opens the manager's desk drawer, and begins reading confidential staff payroll folders. When the store manager catches him, the intern argues: \"I work here! My name tag is 100% genuine and verified at the front door. That means I can enter any room in this building!\"",
    "problem": "Proving who you are at the front entrance does not mean you have permission to touch everything inside the building. Access must be partitioned by organizational responsibility. How should you manage permissions?",
    "simulationType": "authz_rbac_vault",
    "choices": [
      {
        "id": "A",
        "text": "Agree with the intern. If an employee is verified to enter the building, they should have access to every desk, cash drawer, and server room.",
        "isOptimal": false,
        "consequenceText": "Within a week, your business collapses from internal chaos. The shelf-stocking intern accidentally presses an emergency reset lever in the central electrical room, plunging the entire supermarket into darkness. An aggrieved junior cashier enters the supplier billing computer and deletes invoices. Without internal access controls, employees rummage through private personnel files, leading to internal theft, leaks, and operational gridlock.",
        "resultState": "rbac_blackout_theft",
        "statImpact": {
          "latency": "Gridlock",
          "capacity": "Compromised Staff",
          "risk": "Power Blackout & Theft",
          "cost": "Operational Disaster"
        },
        "whatHappened": {
          "helped": "You did not have to set up keycard permissions or electronic locks.",
          "bottleneck": "Treating Authentication as Authorization allowed an intern to trip electrical breakers and delete supplier invoices!",
          "reflectionQuestion": "Why must every API endpoint verify Authorization permissions independently of Authentication?"
        }
      },
      {
        "id": "B",
        "text": "Install color-coded electronic door locks. Program the intern's badge for storage rooms and retail aisles only. Reserve the cash counting room for senior cashiers, and restrict the executive office strictly to the General Manager.",
        "isOptimal": true,
        "consequenceText": "The intern walks up to the executive accounting door and swipes his badge. The electronic lock flashes bright red, sounds a soft buzz, and denies access. He returns to the grocery aisles where his badge works properly on storage doors. The cashiers can access their billing registers, the maintenance staff can enter utility closets, and the management suite remains secure. Everyone works in their designated operational zone without cross-contamination.",
        "resultState": "rbac_door_success",
        "statImpact": {
          "latency": "Instant Access Check",
          "capacity": "Strictly Partitioned",
          "risk": "Zero Unauthorized Access",
          "cost": "Secure & Compliant"
        },
        "successSummary": "Role-Based Access Control (RBAC) and the Principle of Least Privilege ensure staff only access resources required for their specific jobs!"
      },
      {
        "id": "C",
        "text": "Fire all employees and manage the entire multi-story supermarket alone so you never have to worry about permissions.",
        "isOptimal": false,
        "consequenceText": "You collapse from physical exhaustion within 36 hours. You cannot stock 50 shelves, cut meat at the butcher counter, manage four cash registers, and clean the floors simultaneously. While you are busy ringing up a customer at Counter 1, unattended freezers overflow at the back, and the store descends into abandonment.",
        "resultState": "exhaustion_abandonment",
        "statImpact": {
          "latency": "Exhausted",
          "capacity": "1 Exhausted Person",
          "risk": "Abandonment",
          "cost": "Total Store Failure"
        },
        "whatHappened": {
          "helped": "You had zero employee security risks because you had zero employees.",
          "bottleneck": "Refusing to delegate authority collapsed operations from physical exhaustion in 36 hours!",
          "reflectionQuestion": "How does role-based access delegation allow large organizations and cloud platforms to scale safely?"
        }
      }
    ],
    "discovery": {
      "badge": "Authorization (AuthZ) & Access Control Models",
      "tagline": "Enforcing access boundaries via Role-Based Access Control and Principle of Least Privilege",
      "simpleMeaning": "While Authentication (AuthN) validates identity (\"Are you an active employee?\"), Authorization (AuthZ) enforces access limits (\"Do you have permission to modify payroll data?\"). RBAC assigns privileges based on system roles.",
      "analogy": "Proving who you are at the front entrance does not mean you have permission to open the cash vault. Badges are color-coded: interns open stockrooms, senior cashiers open cash registers, and only the General Manager opens the executive suite.",
      "howItWorks": [
        "1. Authentication vs. Authorization: AuthN validates identity; AuthZ enforces access limits on specific resources.",
        "2. Role-Based Access Control (RBAC): Assigning permissions to roles (Customer = read products/create orders; Cashier = read inventory/scan barcodes; Admin = manage stock and payroll).",
        "3. Principle of Least Privilege (PoLP): Every entity must operate using only the minimal permissions necessary to perform its designated task."
      ],
      "whyItMatters": "Without Authorization checks, any logged-in user could read other people's bank statements, delete databases, or escalate privileges to administrator level.",
      "visualExplanation": "Authenticated User (Badge Valid) \u2500\u2500\u25ba Door Check: Does role have 'VAULT_ACCESS'? \u2500\u2500\u25ba Role = Stocker \u2500\u2500\u25ba 403 Forbidden! Door Locked.",
      "contrast": {
        "termA": "Authentication (AuthN)",
        "descA": "Validates identity. \"Who are you?\" Proved via passwords, badges, or biometrics.",
        "termB": "Authorization (AuthZ)",
        "descB": "Enforces permissions. \"What are you allowed to do?\" Enforced via RBAC, OAuth 2.0 scopes, and least privilege."
      },
      "advancedInfo": "OAuth 2.0 acts as a digital valet key: it enables delegated authorization where third-party apps (e.g. Swiggy accessing Google accounts) receive scoped, temporary access tokens without ever seeing the master password.",
      "teacherNotes": {
        "concept": "Authorization (AuthZ), Role-Based Access Control (RBAC), Principle of Least Privilege (PoLP), OAuth 2.0",
        "experience": "Students understood why an authentic employee badge shouldn't unlock the executive vault or electrical breaker room.",
        "realWorld": "AWS IAM policies, Kubernetes RBAC, and Google Cloud IAM manage enterprise access through granular permission roles.",
        "question": "Why should authorization checks always execute on backend servers instead of relying on client-side button hiding?"
      }
    },
    "youtubeUrl": "https://youtu.be/AVTyu_mIehQ?si=XQxh7WW9F9wSfehd",
    "videoId": "AVTyu_mIehQ",
    "videoTitle": "JWT Explained | System Design | Tamil"
  },
  {
    "id": 8,
    "stage": 4,
    "sno": 8,
    "topic": "Relational Databases",
    "concept": "Relational Database Design (RDBMS) & ACID Guarantees: Transactional Integrity",
    "title": "Level 8: The Billing Ledger & The ACID Test",
    "time": "Day 105 \u2014 Peak Saturday Rush & Power Failure",
    "usersCount": "2,000 Concurrent Shoppers",
    "topicHint": "RDBMS & ACID Guarantees",
    "situation": "It is Saturday evening. The store is packed with 2,000 customers. There is only one single, rare carton of imported Belgian chocolates left on shelf 4. At the exact same fraction of a second, Customer Priya at Cash Register 1 and Customer Rahul at Cash Register 2 place the exact same item code on the counter. Both cashiers scan the barcode and press \"CONFIRM PAYMENT\" simultaneously. Suddenly, a severe thunderstorm hits the area: right as the cashiers hit the enter key, the main power grid cuts out, plunging the building into total darkness for five seconds before the backup generators roar to life!",
    "problem": "Critical business accounting requires strict, unambiguous guarantees: financial exchanges must happen completely or not at all, concurrent updates must never double-sell limited physical stock, and committed data must survive power failures. How should you record transactions?",
    "simulationType": "requirements_stress",
    "choices": [
      {
        "id": "A",
        "text": "Use a loose cardboard notebook to write down sales without inventory checks or power-failure safety logs. Let both transactions proceed through the registers.",
        "isOptimal": false,
        "consequenceText": "When the lights flicker back on, your computer records are in utter shambles. The system processed payments for both Priya and Rahul, charging both of their credit cards for the single box of chocolate. Priya grabs the box and walks out, leaving an enraged Rahul standing at the counter demanding his item or his money back. To make matters worse, the sudden power cut corrupted the uncommitted ledger file, erasing the sales records of the last 45 minutes. Cashiers have no idea how much money is in their drawers versus what the computer thinks they sold.",
        "resultState": "acid_double_charge_loss",
        "statImpact": {
          "latency": "Corrupted Data",
          "capacity": "Double-Charged Customers",
          "risk": "45 Mins Sales Erased",
          "cost": "Financial Chaos"
        },
        "whatHappened": {
          "helped": "Both registers confirmed transactions quickly without waiting for locking mechanisms.",
          "bottleneck": "Without ACID guarantees, concurrency caused double-selling, and power loss wiped uncommitted memory!",
          "reflectionQuestion": "Why do banking systems require strict ACID guarantees instead of eventual consistency?"
        }
      },
      {
        "id": "B",
        "text": "Use an atomic, transaction-safe relational ledger. Lock the item record during processing so only one customer can complete the purchase, and enforce durable write-ahead logging to guarantee no data is corrupted or half-saved during a power blackout.",
        "isOptimal": true,
        "consequenceText": "The database software handles the concurrency flawlessly. The moment Register 1 initiated the payment, it placed an instantaneous lock on the inventory record for that specific chocolate bar. Register 2 was immediately notified: \"Item out of stock.\" Rahul's payment card was never charged. Furthermore, because the database wrote the transaction to a persistent Write-Ahead Log (WAL) on the hard disk before confirming, not a single penny of data was lost when the power cut occurred. When the generators kicked in, all records remained perfectly balanced and accurate.",
        "resultState": "acid_lock_success",
        "statImpact": {
          "latency": "Atomic Locking",
          "capacity": "Zero Double-Selling",
          "risk": "100% Power Crash Recovery",
          "cost": "Perfect Balance"
        },
        "successSummary": "ACID guarantees ensured Atomicity (all-or-nothing), Consistency (integrity rules), Isolation (locking), and Durability (WAL logging on disk)!"
      },
      {
        "id": "C",
        "text": "Cancel every customer purchase across the entire store for the entire day whenever lightning flashes outside.",
        "isOptimal": false,
        "consequenceText": "Customers furiously abandon full grocery carts in the aisles and storm out of your supermarket. No shopper will tolerate having their shopping trip canceled every time rain clouds gather. Your inventory spoils on the floor, and your store earns a reputation for total operational incompetence.",
        "resultState": "lightning_rage_quit",
        "statImpact": {
          "latency": "Store Cancelled",
          "capacity": "Abandoned Carts",
          "risk": "Customer Boycott",
          "cost": "Spoiled Inventory"
        },
        "whatHappened": {
          "helped": "You eliminated the risk of power cuts occurring mid-transaction.",
          "bottleneck": "Canceling the entire store during rain drove customers away and spoiled inventory!",
          "reflectionQuestion": "How do resilient database recovery mechanisms ensure business continuity during hardware and power faults?"
        }
      }
    ],
    "discovery": {
      "badge": "Relational Database Design (RDBMS) & ACID Guarantees",
      "tagline": "Atomicity, Consistency, Isolation, and Durability under concurrency and system failures",
      "simpleMeaning": "Relational databases (RDBMS like PostgreSQL and MySQL) organize data into strict tables with schemas, enforcing ACID guarantees so transactions execute safely under high concurrency and power cuts.",
      "analogy": "When two shoppers reach for the last chocolate box simultaneously during a thunderstorm, the ledger locks the item for the first buyer and uses write-ahead logging so power cuts never corrupt accounts.",
      "howItWorks": [
        "1. Atomicity (\"All or Nothing\"): If payment succeeds but receipt generation fails, the entire transaction rolls back completely.",
        "2. Consistency (\"Integrity Enforced\"): All state transitions preserve defined schema constraints and valid account balances.",
        "3. Isolation (\"Independent Execution\"): Concurrent transactions run without exposing intermediate uncommitted changes to other users.",
        "4. Durability (\"Permanently Stored\"): Once confirmed, data is recorded to disk (WAL) and survives power cuts or hardware reboots."
      ],
      "whyItMatters": "Without ACID guarantees, e-commerce stores double-sell limited items, banking transfers lose money mid-flight, and database crashes wipe transaction histories.",
      "visualExplanation": "Register 1 & 2 Compete \u2500\u2500\u25ba Database Row Lock on Item \u2500\u2500\u25ba Reg 1 Buys / Reg 2 Out of Stock \u2500\u2500\u25ba Write-Ahead Log (WAL on Disk) \u2500\u2500\u25ba Crash Recovery Intact",
      "contrast": {
        "termA": "ACID Transactions (RDBMS)",
        "descA": "Strict tables, foreign keys, row-level locking, and Write-Ahead Logging ensuring mathematical precision and zero data loss.",
        "termB": "Uncontrolled Concurrency",
        "descB": "Simultaneous writes without locking cause race conditions, dirty reads, phantom updates, and corrupted ledger balances."
      },
      "advancedInfo": "Relational engines use Multi-Version Concurrency Control (MVCC) and strict transaction isolation levels (Read Committed, Repeatable Read, Serializable) alongside Write-Ahead Logging (WAL) to survive sudden server reboots.",
      "teacherNotes": {
        "concept": "Relational Database Architecture, ACID Properties, Concurrency Control & WAL",
        "experience": "Students experienced why simultaneous purchases require locking and why power cuts require write-ahead disk logging.",
        "realWorld": "Visa, Stripe, and core banking ledgers rely on ACID-compliant relational databases to process billions of dollars with zero lost pennies.",
        "question": "What is the difference between a dirty read, a non-repeatable read, and a phantom read in database concurrency?"
      }
    },
    "youtubeUrl": "https://youtu.be/AVTyu_mIehQ?si=XQxh7WW9F9wSfehd",
    "videoId": "AVTyu_mIehQ",
    "videoTitle": "JWT Explained | System Design | Tamil"
  },
  {
    "id": 9,
    "stage": 4,
    "sno": 9,
    "topic": "Database Architecture",
    "concept": "Database Architecture: Relational vs. Non-Relational (SQL vs. NoSQL Paradigm)",
    "title": "Level 9: Database Architecture \u2014 Relational vs. Non-Relational (SQL vs. NoSQL)",
    "time": "Day 120 \u2014 Hypermarket Scale & Polyglot Persistence",
    "usersCount": "250,000 Products & Millions of Cart Clicks",
    "topicHint": "SQL vs. NoSQL Paradigm",
    "situation": "Your business is expanding into a giant hypermarket. You have two massive database challenges hitting your store at the same time: 1. In addition to basic groceries, you now sell 250,000 diverse products across dozens of categories (Milk has volume and expiry date; T-Shirts have size and fabric; 4K Smart TVs have screen size, HDMI ports, and refresh rate). Your database administrator created a single table with 300 columns to force all these items into one place, leaving 95% of the cells as empty NULL values. Every time a new product type arrives, altering the table locks the database and freezes billing counters! 2. At the exact same time, you need an ultra-fast temporary storage room for thousands of shoppers who are actively dropping items into shopping baskets, changing their minds, and navigating through products in real time.",
    "problem": "You do not store diverse, unpredictable items in rigid, uniform metal ice-cube trays. Standard, uniform numbers belong in tabular ledgers; varied physical items belong in flexible, modular storage boxes; and fast temporary baskets belong in an accessible, open bin right next to the shopper. How should you architect your database tier?",
    "simulationType": "database_polyglot",
    "choices": [
      {
        "id": "A",
        "text": "Force every single item, dynamic product attribute, and temporary active shopping basket into that single rigid SQL table with hundreds of empty columns. If we reach 800 columns, so be it.",
        "isOptimal": false,
        "consequenceText": "Your database performance collapses under its own weight. The table becomes bloated with millions of empty cells. Simple searches like \"Find green shirts\" require the database engine to scan through giant rows of unused TV attributes, bogging down the servers. When a new shipment of drones arrives and the manager runs a script to add FlightRange and BatteryCapacity columns, the entire master table locks up, bringing down the billing counters on a busy Sunday afternoon. Active shopping cart writes hammer the disk, driving CPU usage to 100%.",
        "resultState": "sql_bloat_lockout",
        "statImpact": {
          "latency": "Table Locked",
          "capacity": "100% CPU Disk Hammer",
          "risk": "Billing Freeze on Sunday",
          "cost": "Server Crash"
        },
        "whatHappened": {
          "helped": "You maintained only one single database engine to manage.",
          "bottleneck": "A single 300-column table with 95% NULLs locked up the database during schema alterations and crushed billing!",
          "reflectionQuestion": "Why do modern platforms adopt Polyglot Persistence instead of forcing all workloads into a single database engine?"
        }
      },
      {
        "id": "B",
        "text": "Adopt a multi-model storage architecture: keep core structured financial ledgers and billing records in the relational SQL database (with rigid tables and ACID guarantees), while moving the diverse product catalog and high-speed temporary shopping carts into specialized NoSQL databases (flexible documents for products, fast in-memory key-value lookups for carts).",
        "isOptimal": true,
        "consequenceText": "Your entire store data layer operates at maximum efficiency. 1. The TV record stores its ports and screen dimensions, the milk record stores its expiration date, and the t-shirt stores its fabric and size inside dynamic Document stores (like MongoDB). New product categories are added instantly without downtime. 2. Active customer carts and sessions run in an in-memory Key-Value store (like Redis), serving responses in microseconds. 3. Financial ledger transactions remain safely managed inside the relational SQL database (like PostgreSQL), maintaining bulletproof ACID guarantees. Every storage engine does exactly what it is designed for.",
        "resultState": "polyglot_harmony_success",
        "statImpact": {
          "latency": "Microseconds Response",
          "capacity": "250,000 Dynamic Products",
          "risk": "Zero Downtime",
          "cost": "Highly Scalable"
        },
        "successSummary": "Polyglot Persistence: Relational SQL for ACID ledgers, Document NoSQL for dynamic product catalogs, and In-Memory Key-Value for ultra-fast carts!"
      },
      {
        "id": "C",
        "text": "Stop selling electronics, clothes, and varied items entirely. Only sell milk and bread forever so the database schema never needs to change, and ban customers from using shopping carts.",
        "isOptimal": false,
        "consequenceText": "Your business model is crippled. While competing department stores thrive by selling high-margin consumer electronics, appliances, and fashion, your revenue drops by 80% because you threw away profitable business lines simply to avoid learning how to manage flexible data structures.",
        "resultState": "milk_bread_bankruptcy",
        "statImpact": {
          "latency": "Crippled Business",
          "capacity": "Only Milk & Bread",
          "risk": "80% Revenue Drop",
          "cost": "Competitor Wipeout"
        },
        "whatHappened": {
          "helped": "The database schema never had to add a new column.",
          "bottleneck": "Crippling your business model caused an 80% revenue crash because you refused to adopt flexible data stores!",
          "reflectionQuestion": "How does adopting specialized database engines unlock massive business capability and revenue growth?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Architecture: Relational vs. Non-Relational (SQL vs. NoSQL)",
      "tagline": "Multi-model storage architecture and Polyglot Persistence across the enterprise",
      "simpleMeaning": "Database architecture selects storage engines tailored to workload attributes: Relational (SQL) provides rigid schemas, ACID safety, and multi-table joins; Non-Relational (NoSQL) provides flexible schemas, horizontal cluster scaling, and sub-millisecond in-memory lookups.",
      "analogy": "Standard uniform numbers belong in tabular ledgers (SQL); varied physical items belong in flexible modular boxes (Document NoSQL); and fast temporary baskets belong in an open accessible bin (Key-Value Redis).",
      "howItWorks": [
        "1. SQL (Relational): Structured Tables, rigid schemas, scaled vertically, strict ACID safety. Ideal for billing, accounting ledgers, and relational data.",
        "2. Document Stores (MongoDB): Stores items as dynamic JSON documents. Highly suited for diverse product catalogs where attributes differ across categories.",
        "3. Key-Value Stores (Redis): In-memory lookup dictionary with sub-millisecond responses. Suited for user carts, caching, and active sessions.",
        "4. Wide-Column Stores (Cassandra): High write throughput partitioned across nodes for time-series events and telemetry.",
        "5. Polyglot Persistence: Production systems leverage multiple database engines, pairing SQL where consistency is non-negotiable with NoSQL for ultra-low latency."
      ],
      "whyItMatters": "Using the wrong database engine leads to table-locking freezes, CPU exhaustion, bloated NULL columns, or corrupted financial records.",
      "visualExplanation": "Checkout & Ledger \u2500\u2500\u25ba PostgreSQL (SQL / ACID / Strict Tables)\nProduct Catalog \u2500\u2500\u25ba MongoDB (Document NoSQL / JSON Schemas)\nActive Shopping Carts \u2500\u2500\u25ba Redis (In-Memory Key-Value / Microsecond Speed)",
      "contrast": {
        "termA": "SQL (Relational Databases)",
        "descA": "Rigid schemas, ACID transactions, powerful multi-table JOINs. Best for core banking ledgers, orders, and billing.",
        "termB": "NoSQL (Non-Relational Databases)",
        "descB": "Flexible schemas, horizontal cluster scaling, sub-millisecond in-memory caching. Best for catalogs, carts, and event streams."
      },
      "advancedInfo": "Polyglot Persistence is the enterprise standard. For example, Amazon uses DynamoDB (NoSQL) for ultra-fast shopping cart lookups and relational databases for formal invoicing and ledger audits.",
      "teacherNotes": {
        "concept": "SQL vs. NoSQL Paradigm, Document Stores, Key-Value Stores, Polyglot Persistence",
        "experience": "Students saw why 300-column tables freeze databases on Sunday afternoons and why specialized data engines operate with maximum efficiency.",
        "realWorld": "Uber uses MySQL/PostgreSQL for trip ledgers, Redis for real-time driver coordinates, and Apache Cassandra for telemetry logs.",
        "question": "What is the CAP Theorem (Consistency, Availability, Partition Tolerance), and why can distributed NoSQL databases choose only two?"
      }
    },
    "youtubeUrl": "https://youtu.be/n_6OgQQmxM8?si=jGYX5ZCM-YI0j5Wn",
    "videoId": "n_6OgQQmxM8",
    "videoTitle": "Database Concepts | System Design | Tamil"
  },
{
    "id": 10,
    "stage": 5,
    "sno": 10,
    "topic": "OLTP vs. OLAP",
    "concept": "OLTP vs. OLAP: Fast Transactional Processing vs. Deep Analytical Processing",
    "title": "Level 10: Cash Register vs. The Accountant's Giant Ledger (OLTP vs. OLAP)",
    "time": "Day 150 — Financial Audits & Live Checkout Counters",
    "usersCount": "100 Active Registers & 500,000 Invoices/Day",
    "topicHint": "OLTP vs. OLAP Architecture",
    "situation": "Your supermarket is bustling with thousands of customers scanning groceries at 100 busy checkout registers. At the exact same time, your Chief Financial Officer (CFO) arrives with a team of data analysts. They sit down at a back-office desk and run a massive analytical query: \"Calculate total revenue, profit margins, and supplier purchase trends across all 50 product categories over the past 5 years.\" Both the live checkout cashiers and the CFO are connected to the exact same database server.",
    "problem": "What is your architectural decision to handle live transaction checkout counters alongside heavy business analytics?",
    "simulationType": "oltp_olap_registers",
    "choices": [
      {
        "id": "A",
        "text": "Force cashiers and the CFO to share the exact same billing database machine simultaneously without any separation.",
        "isOptimal": false,
        "consequenceText": "Your checkout counters turn into a nightmare. A single analytical query from the CFO locks thousands of database table rows. Cashier scanners freeze mid-transaction with the spinning wheel of death. Customers waiting in 100 checkout lanes become furious as lines stretch into the parking lot. Register terminals timeout, leading to lost sales, frustrated shoppers abandoning full carts, and complete operational paralysis.",
        "resultState": "oltp_olap_deadlock",
        "statImpact": {
          "latency": "Frozen (30s+)",
          "capacity": "Deadlocked",
          "risk": "Storewide Register Lockup",
          "cost": "Massive Sales Loss"
        },
        "whatHappened": {
          "helped": "You avoided setting up a secondary reporting database.",
          "bottleneck": "Heavy multi-table analytical aggregations locked relational database rows, causing live checkout cashiers to freeze!",
          "reflectionQuestion": "Why should high-throughput row-level OLTP writes never compete with heavy columnar OLAP queries on the same machine?"
        }
      },
      {
        "id": "B",
        "text": "Separate the data systems: keep a fast, lightweight ledger at the front registers for instant billing (OLTP), and periodically copy sales data into a dedicated analytical data warehouse for the CFO (OLAP).",
        "isOptimal": true,
        "consequenceText": "Checkout lanes operate at lightning speed. Cashiers scan individual items and complete payments in under 50 milliseconds using the high-performance OLTP database. Every night, an automated ETL pipeline extracts completed receipts, transforms them, and loads them into a specialized columnar data warehouse (OLAP). The CFO runs multi-year business intelligence queries across millions of rows in seconds without ever touching live cash registers.",
        "resultState": "oltp_olap_harmony",
        "statImpact": {
          "latency": "Under 50ms",
          "capacity": "500,000 Sales/Day",
          "risk": "Zero Lockouts",
          "cost": "Optimal Sizing"
        },
        "successSummary": "Separating OLTP (row-based transactional database) from OLAP (columnar analytical warehouse via ETL) ensures sub-50ms billing and powerful business reporting!"
      },
      {
        "id": "C",
        "text": "Ban the CFO and business analysts from ever looking at historical sales data or auditing company finances.",
        "isOptimal": false,
        "consequenceText": "Your cashiers scan items quickly, but your executive team is completely blind. Without sales analytics, the supermarket overstocks perishable dairy products that spoil on shelves while high-demand items run out of stock. Management cannot track revenue leaks, calculate tax filings, or negotiate wholesale discounts, steering the entire business toward bankruptcy.",
        "resultState": "blind_management",
        "statImpact": {
          "latency": "Fast Scans",
          "capacity": "Blind Operations",
          "risk": "Inventory Spoilage & Tax Fines",
          "cost": "Business Bankruptcy"
        },
        "whatHappened": {
          "helped": "Billing database performance remained unaffected.",
          "bottleneck": "Depriving management of analytical business intelligence prevented inventory optimization and financial planning!",
          "reflectionQuestion": "How do modern organizations extract competitive business value from operational transactional data without impacting latency?"
        }
      }
    ],
    "discovery": {
      "badge": "OLTP vs. OLAP",
      "tagline": "Separating fast transactional billing from heavy analytical business intelligence",
      "simpleMeaning": "OLTP powers fast, real-time day-to-day operations (like scanning groceries and payments), while OLAP analyzes massive historical datasets to reveal long-term business trends.",
      "analogy": "You do not make checkout clerks pause customer lines while corporate headquarters audits five years of receipts on the counter terminal. Live registers stay physically separate from corporate audit archives.",
      "howItWorks": [
        "1. OLTP (Online Transaction Processing): Handles high volumes of quick, row-based read/write queries (INSERT bill, UPDATE stock) using normalized SQL databases with sub-second response times.",
        "2. ETL Pipeline (Extract, Transform, Load): Periodically extracts operational logs from OLTP, transforms and aggregates them, and loads them into an analytical repository.",
        "3. OLAP (Online Analytical Processing): Uses columnar storage (Snowflake, BigQuery, ClickHouse) to scan millions of records across specific metrics (e.g. SUM revenue by region) without impacting live users."
      ],
      "whyItMatters": "Running heavy analytical queries on live operational databases locks records, spikes CPU usage to 100%, and freezes customer-facing checkout transactions.",
      "visualExplanation": "Checkout Lanes ──► OLTP (PostgreSQL: Row-based / Fast Writes / Normalized)\n                      │\n             [Nightly ETL Pipeline]\n                      ▼\nManagement BI ──► OLAP (Snowflake/ClickHouse: Columnar / Aggregations / Read-Heavy)",
      "contrast": {
        "termA": "OLTP (Transactional Systems)",
        "descA": "Row-oriented storage, normalized schemas, high concurrency, ACID guarantees, milliseconds latency. Example: Checkout & wallet payments.",
        "termB": "OLAP (Analytical Systems)",
        "descB": "Columnar storage, denormalized star schemas, batch queries scanning billions of rows, complex aggregations. Example: 5-year revenue trends."
      },
      "advancedInfo": "Column-oriented databases in OLAP store all values of a single column contiguously on disk. When computing SUM(revenue), the engine reads only the revenue column blocks without scanning millions of unused customer names and timestamps.",
      "teacherNotes": {
        "concept": "OLTP vs. OLAP, ETL Pipelines, Row vs Columnar Storage",
        "experience": "Students experienced why running 5-year financial audits on live cashier databases locks checkout lanes and why dual architecture is essential.",
        "realWorld": "Walmart processes millions of point-of-sale transactions via OLTP databases, while loading daily sales into petabyte-scale data lakes and OLAP warehouses for supply chain planning.",
        "question": "Why is columnar storage 100x faster than row-oriented storage for calculating average monthly sales across 500 million records?"
      }
    },
    "youtubeUrl": "https://youtu.be/iw-5kFzIdgY?si=kcg0XyDWZ49jkB75",
    "videoId": "iw-5kFzIdgY",
    "videoTitle": "OLTP vs OLAP | System Design Explained"
  },
  {
    "id": 11,
    "stage": 5,
    "sno": 11,
    "topic": "ACID Properties",
    "concept": "ACID Properties: Atomicity, Consistency, Isolation, and Durability",
    "title": "Level 11: The Multi-Step Vault Deposit (ACID Deep Dive)",
    "time": "Day 180 — Automated Digital Wallet System",
    "usersCount": "10,000 Concurrent Transfers & Blackout Tests",
    "topicHint": "ACID Transaction Guarantees",
    "situation": "You are introducing an automated Customer Wallet payment system. A shopper wants to transfer Rs. 1,000 from their personal bank wallet into the supermarket vault to buy groceries. This requires two distinct database steps: Step 1: Deduct Rs. 1,000 from the customer's wallet balance. Step 2: Add Rs. 1,000 to the supermarket's central store ledger. Just as Step 1 finishes, a sudden thunderstorm causes a power blackout, plunging the server room into darkness and shutting down the machine before Step 2 executes!",
    "problem": "What is your architectural decision to ensure multi-step financial transactions never lose money or leave accounts out of sync?",
    "simulationType": "acid_atomic_vault",
    "choices": [
      {
        "id": "A",
        "text": "Run the two steps independently without safety wrappers. When power returns, hope the customer or manager notices any missing funds.",
        "isOptimal": false,
        "consequenceText": "The customer turns on their phone after the blackout: Rs. 1,000 was deducted from their personal wallet, but the supermarket system shows Rs. 0 received! The shopper has lost money, your staff has no record of the deposit, and the customer angrily files a fraud lawsuit. Your ledger is corrupted, and public trust in your digital payment system is ruined.",
        "resultState": "money_vanished",
        "statImpact": {
          "latency": "Uncertain",
          "capacity": "Corrupted",
          "risk": "Vanished Funds & Lawsuits",
          "cost": "Disastrous"
        },
        "whatHappened": {
          "helped": "You avoided transaction management overhead.",
          "bottleneck": "A partial write failure occurred mid-transfer, leaving money deducted from the sender but never credited to the recipient!",
          "reflectionQuestion": "Why must multi-statement database operations execute under atomic all-or-nothing guarantees?"
        }
      },
      {
        "id": "B",
        "text": "Wrap both ledger steps in an atomic, all-or-nothing transaction block (BEGIN TRANSACTION ... COMMIT) backed by a Write-Ahead Log (WAL) so incomplete operations roll back automatically on crashes.",
        "isOptimal": true,
        "consequenceText": "The database transaction engine handles the failure cleanly. Because both steps were wrapped in an atomic transaction, the engine detects that Step 2 was interrupted by the power cut. Upon reboot, the database consults its Write-Ahead Log (WAL) and automatically rolls back Step 1. The Rs. 1,000 is restored to the shopper's wallet with zero lost pennies. When the shopper reconnects, the transfer retries and completes cleanly.",
        "resultState": "acid_rollback_success",
        "statImpact": {
          "latency": "Under 10ms",
          "capacity": "10,000 Concurrent Tx",
          "risk": "Zero Data Loss",
          "cost": "Mathematical Precision"
        },
        "successSummary": "ACID transaction guarantees: Atomicity rolls back partial crashes, Consistency preserves balance rules, Isolation prevents race conditions, and Durability saves confirmed writes to disk!"
      },
      {
        "id": "C",
        "text": "Trust the customer's handwritten word and manually credit money whenever anyone claims a power cut interrupted their payment.",
        "isOptimal": false,
        "consequenceText": "Fraudsters quickly take advantage of your policy. Dishonest visitors intentionally disconnect their mobile network mid-payment, claim a crash occurred, and demand free store credits. Within a week, the supermarket ledger shows massive financial deficits and thousands of unbacked free credits, bankrupting the store.",
        "resultState": "fraud_exploit",
        "statImpact": {
          "latency": "Manual & Slow",
          "capacity": "Exploited",
          "risk": "Rampant Fraud & Deficits",
          "cost": "Total Bankruptcy"
        },
        "whatHappened": {
          "helped": "You resolved individual customer complaints manually.",
          "bottleneck": "Replacing automated ACID integrity with manual honor systems invited widespread fraud and drained store reserves!",
          "reflectionQuestion": "Why must database consistency be enforced mathematically by software rather than human discretion?"
        }
      }
    ],
    "discovery": {
      "badge": "ACID Properties",
      "tagline": "Atomicity, Consistency, Isolation, and Durability in relational transactions",
      "simpleMeaning": "ACID is a set of four mathematical guarantees that ensure database transactions execute reliably without lost money, dirty data, or corruption even during power failures.",
      "analogy": "When handing money through a bank window, the transaction is not complete until the teller takes the cash AND stamps your deposit slip. If an emergency occurs midway, the cash stays safely in your hand.",
      "howItWorks": [
        "1. Atomicity (\"All or Nothing\"): Entire operation executes as an indivisible unit. If any step fails or the system crashes, the entire transaction rolls back completely.",
        "2. Consistency (\"Integrity Enforced\"): Guarantees state transitions preserve all schema constraints, account balance limits (balance >= 0), and foreign keys.",
        "3. Isolation (\"Independent Execution\"): Concurrent transactions execute without seeing intermediate, uncommitted updates from other active transactions.",
        "4. Durability (\"Permanence\"): Once a transaction is committed, changes are written to non-volatile disk storage (Write-Ahead Logging / WAL) and survive sudden reboots."
      ],
      "whyItMatters": "Without ACID guarantees, financial transfers lose funds mid-flight, e-commerce stores oversell inventory, and sudden power outages corrupt master database ledgers.",
      "visualExplanation": "[BEGIN TRANSACTION]\nStep 1: Deduct Rs. 1,000 from Wallet (Pending)\n   ⚡ POWER FAILURE! ⚡\n[SYSTEM RECOVERY] ──► WAL Log Rollback ──► Step 1 Undone ──► Wallet Restored",
      "contrast": {
        "termA": "ACID Transactions",
        "descA": "Strict mathematical guarantees: atomic commit/rollback, invariant checks, MVCC isolation levels, and write-ahead disk logging.",
        "termB": "Unprotected Concurrency",
        "descB": "Dirty reads, lost updates, race conditions, and corrupted balances caused by unmanaged multi-step operations."
      },
      "advancedInfo": "Relational databases implement Isolation using Multi-Version Concurrency Control (MVCC) and Isolation Levels (Read Committed, Repeatable Read, Serializable). Serializable prevents phantom reads and write skew at the cost of concurrency throughput.",
      "teacherNotes": {
        "concept": "ACID Properties, Transactions, WAL, MVCC Isolation",
        "experience": "Students experienced what happens when a power outage strikes between wallet deduction and store credit, and saw how WAL rollbacks protect funds.",
        "realWorld": "Payment gateways like Stripe and UPI process hundreds of millions of atomic transactions daily, relying on relational ACID engines to guarantee zero dropped money.",
        "question": "What is the difference between Atomicity (all-or-nothing execution) and Durability (permanent persistence on disk)?"
      }
    },
    "youtubeUrl": "https://youtu.be/TxSoMvMDClY?si=KvUAAjH9jTPQY6w1",
    "videoId": "TxSoMvMDClY",
    "videoTitle": "ACID Transactions Explained"
  },
  {
    "id": 12,
    "stage": 5,
    "sno": 12,
    "topic": "Database Replication",
    "concept": "Database Replication: Primary-Replica (Master-Slave) Architecture",
    "title": "Level 12: The Backup Store Ledgers (Database Replication)",
    "time": "Day 210 — 100 Checkout Lanes Peak Rush",
    "usersCount": "100 Registers Querying Simultaneously",
    "topicHint": "Primary-Replica Replication",
    "situation": "Your supermarket now has 100 checkout lanes running all day. Every lane needs to read product prices, verify membership discounts, and record completed sales. All 100 cashiers are querying a single database machine in the basement. The database machine's hard drive is grinding loudly, CPU usage sits at 99%, and querying the price of a chocolate bar takes 8 seconds per scan. Cashiers are sweating, lines are out the door, and the chief engineer warns that if this single machine dies, the entire store shuts down.",
    "problem": "What is your architectural decision to scale database read capacity and prevent a Single Point of Failure?",
    "simulationType": "db_replication_cluster",
    "choices": [
      {
        "id": "A",
        "text": "Keep all 100 registers connected to that single database machine. If it burns out, close the supermarket for the day.",
        "isOptimal": false,
        "consequenceText": "At 2:00 PM on a Saturday, the overworked database hard drive overheats and burns out. The entire store freezes instantly: no cash register can scan prices, customer carts are stuck in queues, and the store manager is forced to lock the doors and turn away 1,500 shoppers. The supermarket loses millions in revenue and takes three days to recover data from tape backups.",
        "resultState": "single_spof_burnout",
        "statImpact": {
          "latency": "Dead",
          "capacity": "0 (Burned Out)",
          "risk": "Complete Single Point of Failure",
          "cost": "Storewide Shutdown"
        },
        "whatHappened": {
          "helped": "You maintained only one database machine without setting up network sync.",
          "bottleneck": "Relying on a single hardware node concentrated all read/write load onto one disk and created a fatal Single Point of Failure!",
          "reflectionQuestion": "Why is relying on a single database server unacceptable for high-availability production environments?"
        }
      },
      {
        "id": "B",
        "text": "Set up Primary-Replica Replication: designate one Primary server strictly for sales writes, and clone several Read Replicas that continuously sync data to handle all price check lookups.",
        "isOptimal": true,
        "consequenceText": "System performance improves immediately. The single Primary machine receives completed sales receipts and streams changes to four Read Replicas. The 100 cashiers distribute their price lookups across the replicas. Price scans drop from 8 seconds to 3 milliseconds! Best of all, when one replica server undergoes maintenance, the other replicas absorb the traffic with zero downtime.",
        "resultState": "replication_harmony_success",
        "statImpact": {
          "latency": "3ms Scan",
          "capacity": "100 Lanes Parallel",
          "risk": "High Availability",
          "cost": "Resilient Scaling"
        },
        "successSummary": "Primary-Replica replication offloads heavy read traffic to synced replicas, protecting the Primary for writes and eliminating Single Points of Failure!"
      },
      {
        "id": "C",
        "text": "Give every cashier their own isolated local database that never syncs with other cashiers.",
        "isOptimal": false,
        "consequenceText": "Total operational breakdown occurs within an hour. Cashier 1 sells the last bag of imported rice, but Cashier 4's isolated database still shows 10 bags in stock and sells it to someone else. Cashier 10 offers an outdated 50% discount because their local database was never updated. Inventory records diverge hopelessly, leading to double-sales, stock errors, and angry arguments.",
        "resultState": "isolated_split_brain",
        "statImpact": {
          "latency": "Fast Local",
          "capacity": "Desynchronized",
          "risk": "Severe Inventory Drift",
          "cost": "Accounting Nightmare"
        },
        "whatHappened": {
          "helped": "Cashiers did not share a bottlenecked network connection.",
          "bottleneck": "Unsynchronized isolated databases caused severe data divergence, double-selling out-of-stock items, and invalid pricing!",
          "reflectionQuestion": "How does data replication maintain consistent state across multiple nodes while scaling read performance?"
        }
      }
    ],
    "discovery": {
      "badge": "Replication",
      "tagline": "Primary-Replica architecture, read scaling, and automatic failover",
      "simpleMeaning": "Database Replication copies data across multiple servers so read traffic is spread out and the application keeps running even if one server dies.",
      "analogy": "Instead of making every clerk run down to the same master filing cabinet to read prices, you print multiple live carbon-copy price sheets for each counter. Only official sales updates are recorded into the master ledger.",
      "howItWorks": [
        "1. Primary Node (Master): Exclusively processes all write operations (INSERT, UPDATE, DELETE) and records changes to an append-only replication log.",
        "2. Replication Stream: Replicas connect over the network and continuously pull the log stream (synchronously or asynchronously).",
        "3. Read Replicas (Slaves): Process read queries (SELECT) concurrently, scaling read capacity linearly with each additional replica node.",
        "4. Automatic Failover: If the Primary crashes, a health monitoring consensus elects a replica to become the new Primary automatically."
      ],
      "whyItMatters": "Most web applications have a 95:5 read-to-write ratio. Replicas scale read throughput by orders of magnitude while ensuring high availability.",
      "visualExplanation": "Cashier Writes (Orders) ──► Primary DB (Master)\n                                   │ [Replication Log Stream]\n                                   ▼\nCashier Reads (Prices)  ──► Read Replica 1  |  Read Replica 2  |  Read Replica 3",
      "contrast": {
        "termA": "Primary Node (Write Master)",
        "descA": "Single source of truth for write modifications. Ensures strict write consistency and orders operations into the change stream.",
        "termB": "Read Replicas (Followers)",
        "descB": "Horizontally scaled read-only instances. Serve millions of concurrent queries, offloading the Primary node."
      },
      "advancedInfo": "Replication can be Synchronous (Primary waits for replicas to confirm write, ensuring zero data loss but increasing write latency) or Asynchronous (Primary acknowledges immediately, providing ultra-low latency with minor replication lag window).",
      "teacherNotes": {
        "concept": "Database Replication, Primary-Replica, Replication Lag, High Availability",
        "experience": "Students witnessed a single overworked database burn out under 100 registers, and resolved it by offloading reads to replicas.",
        "realWorld": "Platforms like Twitter, YouTube, and Netflix utilize tens of thousands of read replicas to serve billions of read queries per second worldwide.",
        "question": "What is Replication Lag, and how can it cause a user to refresh their profile page and briefly see old data?"
      }
    },
    "youtubeUrl": "https://youtu.be/bI8Ry6GhMSE?si=VSg9Nu0aAo_tRhQr",
    "videoId": "bI8Ry6GhMSE",
    "videoTitle": "Database Replication Strategies"
  },
  {
    "id": 13,
    "stage": 5,
    "sno": 13,
    "topic": "Caching Strategies",
    "concept": "Caching Strategies: In-Memory Caching & Cache Eviction (LRU/LFU)",
    "title": "Level 13: The Cashier's Sticky Notepad (Caching Strategies)",
    "time": "Day 240 — Hot Summer Rush on Soda & Water",
    "usersCount": "90% Repeated Lookups for Top 5 Items",
    "topicHint": "Cache-Aside & In-Memory Redis",
    "situation": "Even with database replicas, your registers are overwhelmed on hot summer afternoons. 90% of shoppers are buying the exact same five items: cold mineral water, soda cans, ice bags, chips, and bread. For every single customer, the cashier terminal sends a network query down to the replica database hard drive to look up the price of water, wait for the disk to spin, and return the price. Disk I/O is exhausted, and cashiers are repeating the exact same lookup thousands of times an hour.",
    "problem": "What is your architectural decision to eliminate redundant disk queries for frequently accessed data?",
    "simulationType": "caching_sticky_notepad",
    "choices": [
      {
        "id": "A",
        "text": "Continue querying the database disk for every single can of soda and bottle of water, regardless of how often it is scanned.",
        "isOptimal": false,
        "consequenceText": "Your database disks continue to run hot and slow down. Even though you added replicas in Level 12, disk read heads are thrashing constantly to fetch the identical Rs. 20 mineral water price 80,000 times an hour. Latency stays high, power consumption doubles, and checkout queues back up needlessly.",
        "resultState": "disk_thrashing_fatigue",
        "statImpact": {
          "latency": "Slow Disk I/O",
          "capacity": "Wasted Read Head",
          "risk": "Repeated Redundant Queries",
          "cost": "High Disk Wear"
        },
        "whatHappened": {
          "helped": "You did not consume memory for a cache layer.",
          "bottleneck": "Querying spinning disks for the same static data thousands of times per minute caused severe disk I/O thrashing!",
          "reflectionQuestion": "Why is accessing physical disk or database storage thousands of times slower than reading from in-memory RAM?"
        }
      },
      {
        "id": "B",
        "text": "Install an ultra-fast in-memory cache directly on the cashier counter (a quick Sticky Notepad / Redis). Store popular item prices in memory, and use an LRU eviction rule to discard rarely searched items when space fills up.",
        "isOptimal": true,
        "consequenceText": "The billing counters become blazing fast. The first time water is scanned, the price is fetched from the database and written to the cache (Cache Miss). Every subsequent scan pulls the price directly from lightning-fast RAM in 0.2 milliseconds (Cache Hit)! 90% of database queries disappear instantly. When seasonal items arrive, the Least Recently Used (LRU) policy gracefully discards stale items to keep the notepad compact.",
        "resultState": "cache_hit_bliss",
        "statImpact": {
          "latency": "0.2ms In-Memory",
          "capacity": "90% Hit Ratio",
          "risk": "Minimal Disk I/O",
          "cost": "Ultra Efficient"
        },
        "successSummary": "In-memory caching (Redis/Memcached) delivers sub-millisecond lookups for hot data, reducing database disk pressure by 90% with LRU eviction!"
      },
      {
        "id": "C",
        "text": "Store every single price in the cashier's personal memory and ban the store from ever updating prices.",
        "isOptimal": false,
        "consequenceText": "Cashiers memorize prices, but the moment a supplier changes a price or a cashier gets fatigued, they mischarge items. Furthermore, when new employees join, they do not know any prices and checkout lines halt entirely. The business loses revenue due to human error and rigid pricing.",
        "resultState": "human_memory_failure",
        "statImpact": {
          "latency": "Erratic",
          "capacity": "Human Limited",
          "risk": "Severe Pricing Errors",
          "cost": "Revenue Discrepancies"
        },
        "whatHappened": {
          "helped": "No electronic database was queried.",
          "bottleneck": "Relying on static human memory caused pricing mistakes, zero agility, and complete failure when onboarding new staff!",
          "reflectionQuestion": "How do caching strategies like Cache-Aside maintain cache freshness through Time-To-Live (TTL) and eviction policies?"
        }
      }
    ],
    "discovery": {
      "badge": "Caching Strategies",
      "tagline": "In-memory caching, Cache-Aside pattern, and LRU/LFU eviction policies",
      "simpleMeaning": "Caching stores copies of frequently accessed data in ultra-fast in-memory RAM (like Redis) so the system doesn't have to repeatedly query slow database disks.",
      "analogy": "A cashier does not walk to the underground storage room to ask the price of milk 500 times a day; they write the price on a sticky note attached to the register monitor. They glance at the note in a split second.",
      "howItWorks": [
        "1. Cache-Aside (Lazy Loading): The application queries the in-memory cache first. On a Cache Hit, it returns data in microseconds. On a Cache Miss, it reads the database, writes to cache, and returns.",
        "2. Write-Through: Data is written to both cache and database simultaneously, ensuring consistency at the expense of write latency.",
        "3. Write-Back: Data is written to cache first and asynchronously flushed to disk in batches, providing maximum write throughput.",
        "4. LRU Eviction (Least Recently Used): When the cache reaches memory limits, the least recently queried entries are evicted to make room for new hot data."
      ],
      "whyItMatters": "RAM access is 100,000x faster than disk I/O. Caching absorbs over 90% of repeat traffic, dramatically lowering database costs and latency.",
      "visualExplanation": "Register Request ──► Cache Lookup (Redis RAM) ──[HIT: 0.2ms]──► Instant Response!\n                            │\n                      [MISS: 8ms]\n                            ▼\n                     Database (Disk) ──► Write into Cache ──► Return to Register",
      "contrast": {
        "termA": "In-Memory Cache (RAM / Redis)",
        "descA": "Sub-millisecond latency, volatile high-speed key-value store, handles hundreds of thousands of operations per second.",
        "termB": "Persistent Database (Disk / SSD)",
        "descB": "Higher latency (millisecond range), ACID durable storage, disk read head/bus overhead. Relieved by cache hits."
      },
      "advancedInfo": "Cache invalidation is a classic computer science challenge. Production systems set Time-To-Live (TTL) timestamps on keys so cached entries expire automatically, avoiding stale price discrepancies.",
      "teacherNotes": {
        "concept": "Caching Strategies, Cache Hit/Miss, LRU vs LFU, Cache-Aside Pattern",
        "experience": "Students solved database disk bottlenecks during hot summer soda rushes by introducing an in-memory sticky note cache.",
        "realWorld": "Facebook, Reddit, and Netflix serve over 95% of incoming user requests directly from distributed Redis and Memcached clusters.",
        "question": "What is the difference between Least Recently Used (LRU) and Least Frequently Used (LFU) eviction policies?"
      }
    },
    "youtubeUrl": "https://youtu.be/_d3yaOg8PIQ?si=BTMDHWf-AzkkIpF7",
    "videoId": "_d3yaOg8PIQ",
    "videoTitle": "Caching Strategies & Eviction Policies"
  },
  {
    "id": 14,
    "stage": 6,
    "sno": 14,
    "topic": "CDN",
    "concept": "Content Delivery Networks (CDN): Edge Caching & Geographical PoPs",
    "title": "Level 14: Kiosks Across the State (Content Delivery Networks - CDN)",
    "time": "Day 270 — Statewide Expansion Across Tamil Nadu",
    "usersCount": "500,000 Statewide Mobile Users",
    "topicHint": "CDN & Edge Caching",
    "situation": "Your brand has become famous! Shoppers across the entire state of Tamil Nadu want to browse your daily digital catalog, view high-resolution photos of fresh bakery treats, and download the daily promotional flyer. However, your main server building is located entirely in Coimbatore. When a shopper in Chennai (500 km away) opens the app to look at the daily 5 MB photo flyer, the network data packets must travel back and forth over hundreds of kilometers of optical fiber. The photos load line-by-line over several agonizing seconds, and users in remote cities complain that your app feels sluggish and broken.",
    "problem": "What is your architectural decision to deliver heavy digital assets to geographically distant users at lightning speed?",
    "simulationType": "cdn_edge_kiosks",
    "choices": [
      {
        "id": "A",
        "text": "Force all customers across all cities to download heavy product images, videos, and brochures directly from the single server building in Coimbatore.",
        "isOptimal": false,
        "consequenceText": "Your Coimbatore servers get overwhelmed by bandwidth demands. Thousands of concurrent 5 MB downloads saturate your network connection. Shoppers in Chennai and Madurai experience buffering, image download timeouts, and 6-second page load times. Distant users get frustrated and abandon their online grocery carts.",
        "resultState": "optical_bandwidth_choke",
        "statImpact": {
          "latency": "6+ Seconds (500km)",
          "capacity": "Network Saturated",
          "risk": "Geographic High Latency",
          "cost": "Massive Transit Costs"
        },
        "whatHappened": {
          "helped": "You hosted all files on a single central server.",
          "bottleneck": "Sending heavy static media files over hundreds of kilometers for every user request saturated bandwidth and caused high network latency!",
          "reflectionQuestion": "Why does physical geographical distance introduce unavoidable latency according to the laws of physics and speed of light in optical fiber?"
        }
      },
      {
        "id": "B",
        "text": "Set up small local digital kiosks (Edge Caches / CDN) in Chennai, Madurai, Salem, and Trichy. Store static images and flyers on these edge servers close to local users so they load instantly.",
        "isOptimal": true,
        "consequenceText": "App performance becomes blazing fast across the entire map. When a shopper in Chennai opens the brochure, the 5 MB photo loads in 20 milliseconds directly from the local Chennai Edge Server (Point of Presence). The central server in Coimbatore only processes dynamic checkout payments, reducing origin bandwidth consumption by 85%!",
        "resultState": "edge_cdn_speed",
        "statImpact": {
          "latency": "20ms Local Edge",
          "capacity": "500,000 Users Everywhere",
          "risk": "Zero Origin Overload",
          "cost": "85% Bandwidth Saved"
        },
        "successSummary": "Content Delivery Networks (CDNs) cache static assets at geographically distributed Edge PoPs, reducing latency from seconds to milliseconds!"
      },
      {
        "id": "C",
        "text": "Remove all images, colors, and styling from the app, turning the catalog into pure plaintext so distant users download smaller files.",
        "isOptimal": false,
        "consequenceText": "Your app looks like a dull 1985 terminal screen. Shoppers cannot see what the cakes look like, whether the fruits look ripe, or what colors the clothes are. Engagement drops, conversion rates plummet, and shoppers uninstall the app in favor of visually appealing competitor apps.",
        "resultState": "terminal_screen_abandonment",
        "statImpact": {
          "latency": "Small Text Only",
          "capacity": "Ruined Experience",
          "risk": "Zero Visual Appeal",
          "cost": "Massive Customer Churn"
        },
        "whatHappened": {
          "helped": "Payload size was reduced to small plaintext.",
          "bottleneck": "Stripping visual assets ruined user experience and caused shoppers to uninstall the app in favor of visually rich competitors!",
          "reflectionQuestion": "How does a CDN allow web applications to serve rich multimedia experiences without melting the origin server?"
        }
      }
    ],
    "discovery": {
      "badge": "CDN",
      "tagline": "Geographically distributed Edge Caching, Points of Presence, and Origin Shielding",
      "simpleMeaning": "A Content Delivery Network (CDN) is a worldwide network of edge servers that cache static files (images, videos, styles) close to users so they load with near-zero latency.",
      "analogy": "If a company in Coimbatore prints 50,000 paper catalogs every morning, it does not make customers drive 500 km from Chennai to pick one up. It ships boxes of catalogs to small distribution kiosks in every city so customers grab one locally in seconds.",
      "howItWorks": [
        "1. Edge Servers (Points of Presence / PoPs): Caching servers placed geographically close to end users (e.g., Cloudflare, CloudFront, Akamai).",
        "2. Static Asset Offloading: Heavy, unchanging files (images, CSS styles, JavaScript bundles, video streams) are cached at edge locations.",
        "3. Origin Shielding: Only dynamic API requests (like payments or user profiles) travel all the way back to the Origin Server in Coimbatore.",
        "4. Anycast Routing: Network routing directs user DNS requests to the topologically nearest edge server automatically."
      ],
      "whyItMatters": "Light traveling through optical fiber takes ~5ms per 1,000km, plus routing hops. Moving content close to users cuts round-trip times from seconds to single-digit milliseconds.",
      "visualExplanation": "Chennai Shopper ──► Chennai Edge PoP (CDN) ──[Cached Images in 20ms]──► Instant Display!\n                              │ (Cache Miss Only)\n                              ▼\nCoimbatore Origin Server ──► Serves Dynamic APIs & Checkout Only",
      "contrast": {
        "termA": "CDN Edge Servers (PoPs)",
        "descA": "Distributed worldwide, caches static images/videos/bundles, shields origin servers from 90% of bandwidth traffic.",
        "termB": "Origin Server",
        "descB": "Central backend application server where master databases and dynamic business logic reside."
      },
      "advancedInfo": "CDNs utilize Anycast IP routing and BGP announcements so millions of users globally connect to the exact same IP address, but network routers automatically steer each user to their geographically closest edge facility.",
      "teacherNotes": {
        "concept": "Content Delivery Networks (CDNs), Edge PoPs, Anycast Routing, Origin Shielding",
        "experience": "Students solved 500km optical fiber latency between Coimbatore and Chennai by placing Edge Caches in major cities.",
        "realWorld": "Netflix offloads over 95% of all streaming video traffic through its Open Connect CDN appliances deployed directly inside local ISP networks.",
        "question": "What types of web application data belong on a CDN edge versus what must always hit the origin server?"
      }
    },
    "youtubeUrl": "https://youtu.be/8QPyXxBPYCI?si=6aNoHzdPBVTParC6",
    "videoId": "8QPyXxBPYCI",
    "videoTitle": "CDN Architecture & Edge Caching"
  },
  {
    "id": 15,
    "stage": 7,
    "sno": 15,
    "topic": "Horizontal vs. Vertical Scaling",
    "concept": "Scaling Paradigms: Horizontal (Scale Out) vs. Vertical (Scale Up)",
    "title": "Level 15: Outgrowing the Property (Horizontal vs. Vertical Scaling)",
    "time": "Day 300 — Footfall Surges to 200,000 Visitors",
    "usersCount": "200,000 Daily Shoppers (95% CPU Load)",
    "topicHint": "Scale Out vs. Scale Up",
    "situation": "Your customer footfall has grown from 2,000 visitors a day to 200,000 visitors a day. Your application server is groaning. The CPU usage is constantly pegged at 95%, and the cooling fans are screaming. Your chief infrastructure engineer comes to you with two different proposals to prevent the server from crashing under the incoming traffic.",
    "problem": "What is your architectural decision to handle massive traffic growth without hitting physical hardware limits or incurring fatal downtime?",
    "simulationType": "scaling_cluster_nodes",
    "choices": [
      {
        "id": "A",
        "text": "Vertical Scaling (Scale Up): Take down the server tonight, replace the motherboard with the most powerful 128-core enterprise CPU money can buy, and max out the RAM to 1 Terabyte on that single machine.",
        "isOptimal": false,
        "consequenceText": "Upgrading the single machine provides temporary relief, but you quickly run into harsh limitations: You must take the supermarket offline for several hours during the hardware installation, causing downtime. The specialized super-computer parts cost 10 times more than standard hardware, draining your budget. Three months later, traffic doubles again. You call the hardware vendor to upgrade the CPU, and they inform you: \"There are no larger chips manufactured on Earth.\" You have hit the physical ceiling of vertical growth, and that single machine remains a Single Point of Failure (SPOF).",
        "resultState": "vertical_hardware_ceiling",
        "statImpact": {
          "latency": "Single Node",
          "capacity": "Hard Ceiling",
          "risk": "10x Hardware Cost & SPOF",
          "cost": "Prohibitive Expense"
        },
        "whatHappened": {
          "helped": "Software architecture did not need distributed clustering.",
          "bottleneck": "Vertical scaling required hours of server downtime, cost 10x more, hit physical manufacturing limits, and remained a Single Point of Failure!",
          "reflectionQuestion": "Why does every single-machine architecture eventually hit an unbreakable physical wall in compute and memory?"
        }
      },
      {
        "id": "B",
        "text": "Horizontal Scaling (Scale Out): Keep the current server and purchase four additional identical, cost-effective servers. Run them alongside each other as a cluster to share the application load.",
        "isOptimal": true,
        "consequenceText": "Your infrastructure becomes flexible and resilient: You add new server nodes without taking the existing system offline. If one of the smaller machines suffers a power supply failure, the remaining machines continue processing traffic without a storewide outage. When traffic drops late at night, you can power down unnecessary nodes to save electricity, scaling out during the day and scaling in at night.",
        "resultState": "horizontal_cluster_power",
        "statImpact": {
          "latency": "Balanced Load",
          "capacity": "Elastic Multi-Node",
          "risk": "No SPOF",
          "cost": "Cost-Effective Commodity"
        },
        "successSummary": "Horizontal Scaling (Scale Out) clusters commodity servers for limitless elastic capacity, fault tolerance, and zero-downtime expansion!"
      },
      {
        "id": "C",
        "text": "Do nothing and hope that customers stop visiting the supermarket during peak hours.",
        "isOptimal": false,
        "consequenceText": "On the first busy weekend, the single machine overheats, triggers an automatic thermal shutdown, and drops all active connections. Your website and registers crash simultaneously, shoppers are unable to pay, and the business suffers severe revenue losses and public embarrassment.",
        "resultState": "thermal_overheat_crash",
        "statImpact": {
          "latency": "Crashed",
          "capacity": "0 (Overheated)",
          "risk": "Thermal Meltdown",
          "cost": "Catastrophic Brand Damage"
        },
        "whatHappened": {
          "helped": "You spent zero budget on hardware.",
          "bottleneck": "Ignoring 95% CPU utilization triggered an automatic thermal server shutdown that brought down the entire store on a peak weekend!",
          "reflectionQuestion": "Why must engineering teams plan infrastructure scaling before utilization reaches critical thresholds?"
        }
      }
    ],
    "discovery": {
      "badge": "Horizontal vs. Vertical Scaling",
      "tagline": "Elastic commodity server clusters vs. single-machine hardware limits",
      "simpleMeaning": "Vertical Scaling upgrades a single machine with bigger hardware (Scale Up), while Horizontal Scaling adds more servers side-by-side to distribute the load (Scale Out).",
      "analogy": "When a delivery company needs to deliver 10 times more packages, it does not spend billions inventing a monster truck the size of a stadium that cannot fit under bridges. It buys 10 standard delivery vans that drive on regular roads simultaneously.",
      "howItWorks": [
        "1. Vertical Scaling (Scale Up): Upgrades CPU, RAM, and SSD on one machine. Simple to deploy, but hits physical hardware limits, costs exponentially more, and remains a Single Point of Failure.",
        "2. Horizontal Scaling (Scale Out): Adds standard commodity servers to a cluster. Scales near-infinitely, provides fault tolerance, and enables zero-downtime rolling upgrades.",
        "3. Auto-Scaling: Cloud infrastructure automatically spins up new instances when CPU load exceeds 70%, and terminates them when traffic subsides to optimize costs.",
        "4. Stateless Architecture: App servers store no session state locally, allowing any server in the cluster to handle any incoming request."
      ],
      "whyItMatters": "No single computer on earth can handle the traffic of Google, Amazon, or Uber. Distributed horizontal scaling is the bedrock of modern internet infrastructure.",
      "visualExplanation": "Vertical:   [Tiny Server] ──► [Monster Supercomputer] (Hits Physical Wall)\nHorizontal: [Server 1] + [Server 2] + [Server 3] + [Server 4] (Limitless Elastic Cluster)",
      "contrast": {
        "termA": "Vertical Scaling (Scale Up)",
        "descA": "Bigger single box (e.g. 128 cores, 1TB RAM). Requires downtime to upgrade, exponential price tag, hard physical ceiling, single point of failure.",
        "termB": "Horizontal Scaling (Scale Out)",
        "descB": "Adding more commodity nodes. Near-limitless scaling, elastic pay-as-you-go, fault-tolerant redundancy with zero downtime."
      },
      "advancedInfo": "Horizontal scaling requires stateless application tiers. User sessions and authentication tokens are offloaded to shared distributed caches (Redis) or JWTs so any server in the cluster can handle any request interchangeably.",
      "teacherNotes": {
        "concept": "Horizontal vs. Vertical Scaling, Commodity Hardware, Auto-Scaling Groups, Statelessness",
        "experience": "Students compared upgrading a single machine against adding four delivery vans, experiencing why horizontal clustering wins.",
        "realWorld": "Google runs over 2.5 million commodity servers horizontally across global data centers instead of relying on giant mainframe supercomputers.",
        "question": "What architectural requirement must a web application satisfy to be horizontally scalable across 50 servers?"
      }
    },
    "youtubeUrl": "https://youtu.be/xpDnVSmNFX0?si=zA3ZK1TFRwUo3cA5",
    "videoId": "xpDnVSmNFX0",
    "videoTitle": "Horizontal vs Vertical Scaling Explained"
  },
  {
    "id": 16,
    "stage": 7,
    "sno": 16,
    "topic": "Load Balancing",
    "concept": "Load Balancing: Smart Traffic Routing & Node Health Checks",
    "title": "Level 16: The Highway Traffic Director (Load Balancing)",
    "time": "Day 330 — 4 Server Cluster Deployed",
    "usersCount": "Traffic Imbalance: 95% Clumped on Server 1",
    "topicHint": "Load Balancing & Routing Algorithms",
    "situation": "You successfully deployed four identical application servers side-by-side. However, when customers open the app, 95% of incoming connections are still connecting directly to Server 1 because its IP address was hardcoded into early mobile clients. Server 1 catches fire and crashes, while Server 2, Server 3, and Server 4 sit completely idle with 0% CPU utilization!",
    "problem": "What is your architectural decision to distribute incoming user traffic evenly across all backend servers?",
    "simulationType": "load_balancer_traffic",
    "choices": [
      {
        "id": "A",
        "text": "Let customer devices pick random server IP addresses on their own without a central traffic controller.",
        "isOptimal": false,
        "consequenceText": "Client connections clump together unevenly. Some servers end up completely swamped while others remain half-empty. Worse, when Server 3 suffers a hard drive crash, client apps continue blindly sending requests to its dead IP address, causing thousands of shoppers to receive connection failed errors.",
        "resultState": "random_clump_failure",
        "statImpact": {
          "latency": "Erratic Jitter",
          "capacity": "Uneven Distribution",
          "risk": "Dead IP Traffic Routing",
          "cost": "Poor Utilization"
        },
        "whatHappened": {
          "helped": "You did not set up a dedicated load balancing proxy.",
          "bottleneck": "Without centralized health checks and intelligent routing, clients clumped onto single nodes and sent traffic to dead servers!",
          "reflectionQuestion": "Why can client devices never be trusted to perform reliable, health-aware traffic distribution?"
        }
      },
      {
        "id": "B",
        "text": "Place a high-speed Load Balancer in front of the server farm. Implement smart traffic routing algorithms (Round-Robin, Least Connections) and health checks to balance the load evenly.",
        "isOptimal": true,
        "consequenceText": "Traffic flows across your infrastructure smoothly and evenly. The Load Balancer accepts all incoming client connections on a single virtual IP and distributes requests across Servers 1, 2, 3, and 4 in balanced rotation. Its automated health check monitors every node: if Server 3 becomes unresponsive, the Load Balancer instantly detaches it from the active pool in milliseconds with zero dropped customer requests!",
        "resultState": "load_balanced_harmony",
        "statImpact": {
          "latency": "Consistent 25ms",
          "capacity": "4x Balanced Throughput",
          "risk": "Zero Dropped Connections",
          "cost": "Maximum Resource Use"
        },
        "successSummary": "Load Balancers distribute traffic evenly using algorithms like Round-Robin and Least Connections while isolating unhealthy nodes via continuous health checks!"
      },
      {
        "id": "C",
        "text": "Shut down Servers 2, 3, and 4 since they are idle, and force Server 1 to do all the work alone.",
        "isOptimal": false,
        "consequenceText": "You return to the exact same failure state as Level 15. Server 1 immediately crashes under the full weight of the supermarket's user traffic, bringing down the entire digital shopping operation.",
        "resultState": "monolithic_relapse",
        "statImpact": {
          "latency": "Crashed",
          "capacity": "Zero",
          "risk": "Immediate Store Outage",
          "cost": "Self-Inflicted Downtime"
        },
        "whatHappened": {
          "helped": "You saved electricity on idle server instances.",
          "bottleneck": "Shutting down the cluster threw away horizontal scaling and caused Server 1 to immediately crash under overload!",
          "reflectionQuestion": "How does a load balancer unlock the true power of horizontally scaled server clusters?"
        }
      }
    ],
    "discovery": {
      "badge": "Load Balancing",
      "tagline": "Traffic distribution algorithms, health checks, and Layer 4 vs. Layer 7 routing",
      "simpleMeaning": "A Load Balancer acts as a reverse-proxy traffic director in front of your server farm, distributing incoming requests evenly so no single machine gets overloaded.",
      "analogy": "If a venue opens four entrance gates, it does not leave visitors to figure out which line is shortest from the parking lot. A security officer stands at the main entrance barrier, directing the next car in line to whichever specific gate has the shortest queue.",
      "howItWorks": [
        "1. Round-Robin: Requests are distributed sequentially across backend nodes (Node 1 ──► Node 2 ──► Node 3 ──► Node 4). Ideal for uniform request workloads.",
        "2. Least Connections: Directs new requests to whichever node currently has the fewest active, concurrent connections. Ideal for varied processing times.",
        "3. Consistent Hashing: Hashes client attributes (like User ID or Session Key) to consistently map a user to the same node for caching efficiency.",
        "4. Heartbeat Health Checks: Periodically pings /healthz. If a server fails to respond with HTTP 200 OK, it is automatically removed from the active routing pool."
      ],
      "whyItMatters": "Without load balancing, horizontal scaling fails because traffic clumps onto single nodes while others sit idle.",
      "visualExplanation": "Incoming Client Traffic ──► [LOAD BALANCER: Single VIP / Health Checked]\n                                    ├──► Node 1 (25% Load - Healthy)\n                                    ├──► Node 2 (25% Load - Healthy)\n                                    ├──► Node 3 (25% Load - Healthy)\n                                    └──► Node 4 (25% Load - Healthy)",
      "contrast": {
        "termA": "Layer 4 Load Balancing (Transport)",
        "descA": "Routes traffic based purely on network IP and TCP/UDP ports without inspecting application payloads. Ultra-fast and lightweight.",
        "termB": "Layer 7 Load Balancing (Application)",
        "descB": "Inspects HTTP headers, cookies, and URL paths, enabling smart routing (e.g. /checkout to high-memory nodes, /media to CDN)."
      },
      "advancedInfo": "High-availability load balancing pairs active and passive load balancer nodes using VRRP (Virtual Router Redundancy Protocol) with floating virtual IPs (VIPs) to eliminate the load balancer itself as a single point of failure.",
      "teacherNotes": {
        "concept": "Load Balancing, Round-Robin, Least Connections, Health Checks, Layer 4 vs Layer 7",
        "experience": "Students solved a 95% traffic clumping disaster on Server 1 by deploying a smart traffic director with health checking.",
        "realWorld": "AWS Elastic Load Balancer (ELB), NGINX, and HAProxy handle billions of connections per second across modern cloud applications.",
        "question": "What is the difference between Layer 4 (TCP) and Layer 7 (HTTP) load balancing, and when should you choose each?"
      }
    },
    "youtubeUrl": "https://youtu.be/V6uG2jlONuU?si=gue8xyDtCbmcXNL6",
    "videoId": "V6uG2jlONuU",
    "videoTitle": "Load Balancing Architecture & Algorithms"
  },
  {
    "id": 17,
    "stage": 7,
    "sno": 17,
    "topic": "Rate Limiting",
    "concept": "Rate Limiting: Token Bucket Algorithms & Bot Traffic Shaping",
    "title": "Level 17: The Gate Turnstile & The Scalper Rush (Rate Limiting)",
    "time": "Day 360 — 9:00 AM Sunday Flash Sale",
    "usersCount": "50,000 Bot Requests/Sec Scalper Rush",
    "topicHint": "Rate Limiting & Token Bucket",
    "situation": "Every Sunday morning at 9:00 AM, your supermarket runs a \"Flash Sale\" on high-end cooking oil and basmati rice at a 70% discount. The moment the clock strikes 9:00 AM, a group of automated scalpers runs a bot script that sends 50,000 requests per second to your checkout API. Your servers are flooded, processing pipelines jam, and regular families trying to buy weekly groceries get connection timeout errors. The bots buy up all the discounted inventory in three seconds flat to resell on the street.",
    "problem": "What is your architectural decision to protect your backend APIs from automated scalper bots and volumetric Denial-of-Service attacks?",
    "simulationType": "rate_limiter_turnstile",
    "choices": [
      {
        "id": "A",
        "text": "Allow unlimited requests from any device or IP address as fast as they can send them.",
        "isOptimal": false,
        "consequenceText": "Your infrastructure crashes every Sunday morning under Denial-of-Service (DoS) conditions. Scalper scripts consume 100% of network sockets, database connections, and server memory. Real paying customers are locked out, and genuine families leave angry reviews on social media about unfair bot hoarding.",
        "resultState": "bot_scalper_stampede",
        "statImpact": {
          "latency": "Timed Out",
          "capacity": "Flooded by Bots",
          "risk": "100% Sockets Consumed",
          "cost": "Reputational Disaster"
        },
        "whatHappened": {
          "helped": "You did not add request inspection overhead.",
          "bottleneck": "Allowing unthrottled API requests permitted automated scalper bots to flood the system with 50,000 req/sec and deny service to real families!",
          "reflectionQuestion": "Why must every public internet API have strict rate limiting boundaries to protect availability?"
        }
      },
      {
        "id": "B",
        "text": "Install a strict Rate Limiter at the front door using algorithms like Token Bucket or Sliding Window to restrict each user to a reasonable limit (e.g., maximum 5 checkout attempts per minute).",
        "isOptimal": true,
        "consequenceText": "The Rate Limiter protects your platform. When a bot tries to fire 500 requests a second, the Rate Limiter immediately throttles the excess requests, returning an HTTP 429 \"Too Many Requests\" status code with zero backend database load. Meanwhile, real families browsing at normal human speeds pass through without noticing any restriction. The flash sale inventory is purchased fairly by real shoppers!",
        "resultState": "rate_limiter_shield_success",
        "statImpact": {
          "latency": "Sub-millisecond Check",
          "capacity": "5 Req/Min per User",
          "risk": "HTTP 429 Throttle Shield",
          "cost": "Fair Human Distribution"
        },
        "successSummary": "Rate limiters enforce fair usage via algorithms like Token Bucket and Sliding Window, returning HTTP 429 to abusive traffic while protecting backend services!"
      },
      {
        "id": "C",
        "text": "Shut down the online store completely and only sell products via secret phone calls.",
        "isOptimal": false,
        "consequenceText": "Your business loses 90% of its sales volume. The convenience of digital shopping is destroyed, phone lines are constantly busy, and customers abandon your brand for competing online supermarkets.",
        "resultState": "manual_phone_collapse",
        "statImpact": {
          "latency": "Phone Busy Tone",
          "capacity": "1 Call at a Time",
          "risk": "Loss of Digital Commerce",
          "cost": "90% Sales Drop"
        },
        "whatHappened": {
          "helped": "Bots were completely blocked from the checkout API.",
          "bottleneck": "Shutting down the digital store crippled business revenue by 90% instead of engineering smart technical traffic shaping!",
          "reflectionQuestion": "How does software rate limiting preserve business availability during surge events without abandoning digital commerce?"
        }
      }
    ],
    "discovery": {
      "badge": "Rate Limiting",
      "tagline": "Token Bucket, Sliding Window algorithms, and HTTP 429 traffic shaping",
      "simpleMeaning": "Rate Limiting restricts how many requests a user or client IP can make within a given timeframe, stopping malicious bots from overwhelming backend servers.",
      "analogy": "To prevent a stampede during a massive clearance sale, a store does not leave the front doors wide open. It installs turnstiles that rotate at a controlled pace, allowing one shopper through every three seconds while keeping crowds safely organized outside.",
      "howItWorks": [
        "1. Token Bucket: A virtual bucket holds a fixed capacity of tokens, refilled at a constant rate. Each request consumes one token. If empty, the request is rejected with HTTP 429.",
        "2. Leaky Bucket: Requests queue up in a buffer and are released at a smooth, constant rate, smoothing out spiky traffic bursts.",
        "3. Sliding Window Log/Counter: Tracks requests across a rolling time window (e.g. last 60 seconds) to prevent boundary burst exploits.",
        "4. Distributed Rate Limiting: Centralizes counters in high-speed in-memory Redis clusters using atomic increments (INCRBY) so limits apply across all app servers."
      ],
      "whyItMatters": "Protects APIs against DoS attacks, brute-force password attempts, scalper bots, and accidental infinite loops from client code.",
      "visualExplanation": "Scalper Bot (500 req/s) ──► [RATE LIMITER: Token Bucket] ──► HTTP 429 (Too Many Requests - BLOCKED)\nHuman Shopper (1 req/5s) ──► [RATE LIMITER: Token Bucket] ──► Forwarded to Checkout API (ACCEPTED)",
      "contrast": {
        "termA": "Token Bucket Algorithm",
        "descA": "Allows short, controlled bursts of traffic up to bucket capacity while enforcing a steady average refill rate. Most popular in production APIs.",
        "termB": "Leaky Bucket Algorithm",
        "descB": "Smooths out bursts by releasing requests at a strictly constant, unvarying rate regardless of incoming traffic spikes."
      },
      "advancedInfo": "Production rate limiters respond to throttled clients with standardized HTTP headers: X-RateLimit-Limit (max allowed), X-RateLimit-Remaining (tokens left), and Retry-After (seconds until refill).",
      "teacherNotes": {
        "concept": "Rate Limiting, Token Bucket, Leaky Bucket, Sliding Window, HTTP 429",
        "experience": "Students defended Sunday flash sales against 50,000 req/sec scalper bots using a Token Bucket turnstile.",
        "realWorld": "APIs like GitHub, Twitter, and OpenAI enforce strict token bucket rate limits per user API key to ensure infrastructure stability.",
        "question": "What is the burst advantage of the Token Bucket algorithm compared to a strict Fixed Window counter?"
      }
    },
    "youtubeUrl": "https://youtu.be/hs6-WxrmAEs?si=UT-k0E9mgi08Gl2E",
    "videoId": "hs6-WxrmAEs",
    "videoTitle": "Rate Limiting Strategies & Algorithms"
  },
  {
    "id": 18,
    "stage": 8,
    "sno": 18,
    "topic": "Sharding",
    "concept": "Database Sharding: Horizontal Partitioning across Independent Nodes",
    "title": "Level 18: Splitting the Master Ledger (Database Sharding)",
    "time": "Day 400 — 50 Million Customer Nationwide Ledger",
    "usersCount": "50 Million Accounts & 2 Billion Rows",
    "topicHint": "Database Sharding & Sharding Keys",
    "situation": "Your supermarket has expanded across the entire country, managing 50 million registered customer accounts. Even with read replicas, your Primary Database cannot keep up with write traffic. The single relational database contains a customer orders table with 2 billion rows. A single table scan or index lookup takes seconds to complete, and the hard disk holding the database is 98% full. You cannot buy a bigger hard drive, and write queries are queueing up into multi-minute backlogs.",
    "problem": "What is your architectural decision to overcome single-database hardware boundaries and scale database write throughput indefinitely?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Keep all 50 million customers and 2 billion rows packed into that single giant database table on one machine.",
        "isOptimal": false,
        "consequenceText": "The single database machine crashes permanently from disk exhaustion. The operating system runs out of inode space, write operations fail with disk full errors, and table indexes exceed physical RAM, causing catastrophic disk thrashing. The entire national supermarket chain grinds to a halt.",
        "resultState": "disk_exhaustion_collapse",
        "statImpact": {
          "latency": "Infinite Backlog",
          "capacity": "98% Disk Full",
          "risk": "Complete Disk Exhaustion",
          "cost": "National Outage"
        },
        "whatHappened": {
          "helped": "You maintained a single monolithic database instance.",
          "bottleneck": "A single database machine hit physical disk capacity and write I/O limits under 2 billion rows, causing catastrophic crashes!",
          "reflectionQuestion": "Why do read replicas fail to solve write scalability bottlenecks on a single primary database?"
        }
      },
      {
        "id": "B",
        "text": "Implement Database Sharding: partition the single giant table horizontally across multiple independent database machines using a consistent Sharding Key (e.g., hashing the User ID).",
        "isOptimal": true,
        "consequenceText": "Your database tier gains limitless horizontal scalability. Instead of one monster machine struggling with 2 billion rows, you distribute the data across four independent shards holding 500 million rows each. When User #4,821,902 places an order, the application calculates hash(UserID) % 4 and routes the write directly to Shard 2. Write bottlenecks vanish, indexes fit comfortably in RAM, and when the store grows to 100 million users, you simply add more shards!",
        "resultState": "sharding_scalability_triumph",
        "statImpact": {
          "latency": "Under 15ms",
          "capacity": "Limitless Shards",
          "risk": "Isolated Node Failure",
          "cost": "Linearly Scalable"
        },
        "successSummary": "Database Sharding horizontally partitions massive tables across independent physical database servers using a Sharding Key, enabling near-infinite write scalability!"
      },
      {
        "id": "C",
        "text": "Delete all customer purchase histories older than two weeks so the database never gets too big.",
        "isOptimal": false,
        "consequenceText": "Deleting purchase histories creates a customer support catastrophe. Shoppers trying to return defective products or view warranty receipts find their records erased. Accountants cannot balance yearly balance sheets, and tax authorities audit the company for missing mandatory fiscal transaction logs, imposing devastating penalties.",
        "resultState": "record_erasure_audit",
        "statImpact": {
          "latency": "Small Database",
          "capacity": "Destroyed History",
          "risk": "Audit Fines & Lost Warranties",
          "cost": "Regulatory Disaster"
        },
        "whatHappened": {
          "helped": "Database disk space was kept artificially small.",
          "bottleneck": "Erasing historical records violated legal warranty requirements and caused severe government tax penalties!",
          "reflectionQuestion": "Why is data deletion never an acceptable substitute for scalable distributed storage architecture?"
        }
      }
    ],
    "discovery": {
      "badge": "Sharding",
      "tagline": "Horizontal table partitioning, sharding keys, and distributed write scaling",
      "simpleMeaning": "Database Sharding splits a massive database horizontally across multiple independent servers so no single machine runs out of disk or write capacity.",
      "analogy": "If a national organization has 50 million member files, it does not stuff them into a single cabinet in one room. It distributes them across regional offices: Cabinet A handles names beginning with A–F, Cabinet B handles G–M, and Cabinet C handles N–Z.",
      "howItWorks": [
        "1. Horizontal Partitioning: Rows of a single table are split across multiple physical database instances called Shards.",
        "2. Sharding Key: A designated column (like User ID or Customer ID) used by the routing layer to determine which shard owns that row.",
        "3. Hash-Based Sharding: Computes hash(ShardingKey) % NumberOfShards to distribute records evenly across all nodes without hotspots.",
        "4. Range-Based Sharding: Partitions data based on ranges of values (e.g., User IDs 1–1,000,000 on Shard 1, 1,000,001–2,000,000 on Shard 2).",
        "5. Routing Layer: Application middleware inspects the query's Sharding Key and routes requests directly to the target shard."
      ],
      "whyItMatters": "While Read Replicas scale read queries, Sharding is the only way to scale write operations and total storage capacity beyond single-server physical limits.",
      "visualExplanation": "User Order Query (UserID: 4821902) ──► hash(UserID) % 4 = Shard 2\n                                          ├──► Shard 1 (500M Rows - Users 0-25%)\n                                          ├──► Shard 2 (500M Rows - Users 25-50%) ◄── [TARGET NODE]\n                                          ├──► Shard 3 (500M Rows - Users 50-75%)\n                                          └──► Shard 4 (500M Rows - Users 75-100%)",
      "contrast": {
        "termA": "Database Sharding (Horizontal Partitioning)",
        "descA": "Splitting table rows across multiple distinct database servers. Scales write throughput and storage linearly.",
        "termB": "Read Replication",
        "descB": "Copying the exact same full database to multiple follower nodes. Scales read queries only; does not solve write limits or storage caps."
      },
      "advancedInfo": "Sharding introduces complexity: Cross-shard JOIN queries are notoriously slow and expensive, and schema migrations require distributed coordination across all shards.",
      "teacherNotes": {
        "concept": "Database Sharding, Sharding Keys, Hash vs Range Partitioning, Cross-Shard Joins",
        "experience": "Students solved a 2-billion-row disk exhaustion crisis by partitioning customer tables across 4 independent database shards.",
        "realWorld": "Slack and Discord shard their database clusters by Workspace ID and Guild ID to support billions of messages per day across thousands of nodes.",
        "question": "What happens if a poor Sharding Key is chosen (such as Country Code when 90% of users live in one country), and what is a 'Celebrity/Hotspot Problem'?"
      }
    },
    "youtubeUrl": "https://youtu.be/5faMjKuB9bc?si=dyr_rDLoeuTLvQBm",
    "videoId": "5faMjKuB9bc",
    "videoTitle": "Database Sharding & Partitioning"
  },
{
    "id": 19,
    "stage": 9,
    "sno": 19,
    "topic": "CAP Theorem",
    "concept": "CAP Theorem: Consistency, Availability, and Partition Tolerance",
    "title": "Level 19: The Broken Telephone Line (CAP Theorem)",
    "time": "Day 430 — Severed Regional Fiber Cable",
    "usersCount": "Coimbatore & Chennai Warehouses Isolated",
    "topicHint": "CAP Theorem (CP vs. AP)",
    "situation": "Your supermarket now has two major branch warehouses: one in Coimbatore and one in Chennai. They share a live synchronized digital catalog so inventory counts match across both cities. Suddenly, an underground fiber-optic cable is severed by road construction. The telephone and internet link between Coimbatore and Chennai is completely dead. A shopper walks into the Coimbatore branch to buy the very last high-end espresso machine in stock. At the exact same second, another customer walks into the Chennai branch trying to buy that exact same machine online. Because the communication line is broken, neither branch can verify if the other branch just sold it.",
    "problem": "When a network partition occurs between warehouses, how do you handle inventory availability versus strict data consistency?",
    "simulationType": "cap_network_partition",
    "choices": [
      {
        "id": "A",
        "text": "Pretend the network is not broken. Let both branches sell the machine and hope for good luck.",
        "isOptimal": false,
        "consequenceText": "Both branches sell the single machine simultaneously. Two customers walk away with confirmed receipts for one physical box. When the network reconnects, your system discovers the duplicate sale. One customer arrives for pickup only to find an empty shelf, leading to intense customer frustration, public complaints, and brand damage.",
        "resultState": "cap_double_selling",
        "statImpact": {
          "latency": "Deceptive",
          "capacity": "Double-Sold",
          "risk": "Inventory Divergence & Customer Outrage",
          "cost": "Brand Damage"
        },
        "whatHappened": {
          "helped": "You avoided handling the network outage.",
          "bottleneck": "Ignoring the network partition led to double-selling the last physical machine to two different buyers!",
          "reflectionQuestion": "Why is it mathematically impossible for a distributed system during a network split to be both completely available and strictly consistent?"
        }
      },
      {
        "id": "B",
        "text": "Consistency over Availability (CP): Lock the inventory and refuse new sales on that machine in both branches until the network cable is repaired, guaranteeing no double-selling happens.",
        "isOptimal": true,
        "consequenceText": "You prioritize absolute correctness (CP System). When the customer attempts checkout, the register displays a message: \"Network synchronization unavailable. Transaction paused for safety.\" The shopper is disappointed, but the business never sells an item it cannot fulfill. Financial and inventory integrity remains 100% accurate.",
        "resultState": "cap_cp_consistency",
        "statImpact": {
          "latency": "Safety Pause",
          "capacity": "Guaranteed 100% Accuracy",
          "risk": "Zero Overselling",
          "cost": "Correctness Preserved"
        },
        "successSummary": "In a CP (Consistency + Partition Tolerance) architecture, writes are safely rejected during network partitions to guarantee mathematical correctness and prevent double-selling!"
      },
      {
        "id": "C",
        "text": "Availability over Consistency (AP): Allow both branches to keep selling goods to keep customers happy right now, accepting that inventory numbers will disagree temporarily and must be reconciled later.",
        "isOptimal": false,
        "consequenceText": "You prioritize store uptime (AP System). Both customers complete their purchases smoothly. Later, when the cable is repaired, the system flags the conflict. Your customer service team contacts one buyer, offers an apology discount voucher, and ships an upgraded unit from a partner distributor. Your revenue flow never stopped during the outage, but you incurred manual compensation costs.",
        "resultState": "cap_ap_availability",
        "statImpact": {
          "latency": "Always Available",
          "capacity": "Soft Inconsistency",
          "risk": "Temporary Divergence",
          "cost": "Compensation Vouchers"
        },
        "whatHappened": {
          "helped": "Customers could continue buying without checkout freezes.",
          "bottleneck": "Allowing unsynchronized writes created inventory conflicts that required manual reconciliation and apology vouchers!",
          "reflectionQuestion": "When should modern systems choose AP (Availability) over CP (Consistency)?"
        }
      }
    ],
    "discovery": {
      "badge": "CAP Theorem",
      "tagline": "Consistency, Availability, and Partition Tolerance in distributed architectures",
      "simpleMeaning": "The CAP Theorem states that when a network partition (P) occurs, a distributed system can guarantee either strict Consistency (C) or 100% Availability (A), but never both simultaneously.",
      "analogy": "When two branch offices lose telephone contact, they cannot simultaneously guarantee that both branches stay completely open for business while also guaranteeing that their ledger records match perfectly.",
      "howItWorks": [
        "1. Consistency (C): Every read receives the most recent write or an error. All nodes see identical data simultaneously.",
        "2. Availability (A): Every non-failing node returns a successful response without error, though it may not contain the freshest write.",
        "3. Partition Tolerance (P): The system continues operating despite dropped packets or severed network connections between nodes.",
        "4. Physical Reality: Network partitions (P) are unavoidable physical facts of life. Therefore, systems must choose between CP (trade availability for safety) and AP (trade safety for uptime)."
      ],
      "whyItMatters": "Understanding CAP tradeoffs dictates whether your application behaves like a bank ledger (CP — refuse stale writes) or a social media feed (AP — show cached posts during network dips).",
      "visualExplanation": "        [PARTITION OCCURS (Link Severed)]\n                /               \\\n      Choose CP (Consistency)     Choose AP (Availability)\n       Pause write / Error       Serve request with stale state\n     Zero double-selling          100% uptime, reconcile later",
      "contrast": {
        "termA": "CP Systems (e.g., PostgreSQL / CockroachDB)",
        "descA": "Locks nodes or returns errors during network partitions to prevent split-brain state. Mandatory for banking and inventory stock.",
        "termB": "AP Systems (e.g., Cassandra / DynamoDB)",
        "descB": "Allows isolated nodes to continue accepting writes independently, reconciling conflicts asynchronously via eventual consistency."
      },
      "advancedInfo": "Brewer's CAP Theorem proves mathematically that in any asynchronous network where messages can be delayed or lost, maintaining consensus requires waiting indefinitely, which violates availability SLAs.",
      "teacherNotes": {
        "concept": "CAP Theorem, Network Partitions, CP vs. AP Tradeoffs, Pacelc Theorem",
        "experience": "Students witnessed a severed fiber cable between Coimbatore and Chennai force a choice between overselling an espresso machine or pausing sales.",
        "realWorld": "Google Spanner achieves 'effectively CA' by syncing atomic clocks with GPS receivers (TrueTime API) to keep latency bounds under 7ms globally.",
        "question": "Why does a banking ATM immediately shut down and display 'Out of Service' when its network link drops, instead of handing out cash freely?"
      }
    },
    "youtubeUrl": "https://youtu.be/-h0vQVREfXs?si=R-upj0YZZ5MsqsDg",
    "videoId": "-h0vQVREfXs",
    "videoTitle": "CAP Theorem Explained | System Design"
  },
  {
    "id": 20,
    "stage": 9,
    "sno": 20,
    "topic": "BASE Model",
    "concept": "BASE: Basically Available, Soft state, Eventual consistency",
    "title": "Level 20: The Relaxed Ledger (The BASE Model)",
    "time": "Day 460 — Viral Potato Chip Thumbs-Up Storm",
    "usersCount": "50,000 Concurrent Like Clicks on Catalog",
    "topicHint": "The BASE Model & Eventual Consistency",
    "situation": "Your online supermarket catalog features customer reviews, product view counters, and thumbs-up recommendation badges. Currently, every time a shopper clicks \"Like\" on a brand of potato chips, the platform halts all background operations, acquires global table locks across 50 database servers, and waits until every single server on the continent confirms that the counter changed from 1,420 to 1,421. Because thousands of shoppers are clicking \"Like\" simultaneously, the entire website stutters and freezes over tiny badge counts.",
    "problem": "How should you architect high-volume social counters without acquiring expensive distributed locks or freezing the store?",
    "simulationType": "base_eventual_consistency",
    "choices": [
      {
        "id": "A",
        "text": "Continue using strict ACID transactions with global distributed locks for every single comment, review, and view counter.",
        "isOptimal": false,
        "consequenceText": "Your infrastructure collapses under lock contention. Customers cannot browse products because servers are waiting for distributed consensus across dozens of nodes just to update a trivial thumbs-up icon. High latency causes shoppers to abandon carts, wasting computing resources on non-critical data.",
        "resultState": "base_acid_lock_freeze",
        "statImpact": {
          "latency": "Severe Lock Contention",
          "capacity": "Freezing Catalog",
          "risk": "Global Lock Stutters",
          "cost": "Abandoned Carts"
        },
        "whatHappened": {
          "helped": "Every single node showed the exact same thumbs-up number at every nanosecond.",
          "bottleneck": "Treating casual thumbs-up counters like core banking ledgers acquired distributed locks across 50 servers and froze the entire website!",
          "reflectionQuestion": "Why should non-critical analytics and social counters never be governed by strict ACID guarantees?"
        }
      },
      {
        "id": "B",
        "text": "Adopt the BASE model: accept that non-critical counters can be slightly out-of-sync for a few seconds across servers (Soft State), allowing the system to stay fast and available, converging on the exact count eventually (Eventual Consistency).",
        "isOptimal": true,
        "consequenceText": "The entire platform runs at blazing speed. Shoppers click \"Like\" instantly with 0ms delay. A shopper in Delhi might temporarily see 1,425 likes while a shopper in Mumbai sees 1,422, but within three seconds, background gossiping syncs the counts to 1,428 everywhere. The store remains 100% available, and servers handle massive traffic effortlessly.",
        "resultState": "base_eventual_success",
        "statImpact": {
          "latency": "Sub-millisecond",
          "capacity": "Limitless Likes/Sec",
          "risk": "Zero Downtime",
          "cost": "Highly Efficient"
        },
        "successSummary": "The BASE model (Basically Available, Soft state, Eventual consistency) provides high availability and massive throughput for non-critical telemetry and counters!"
      },
      {
        "id": "C",
        "text": "Remove all reviews, ratings, and view counts completely from the website.",
        "isOptimal": false,
        "consequenceText": "Shoppers feel blind. Without customer ratings, product popularity metrics, or review feedback, engagement drops by 60%. Visitors assume the supermarket is untrustworthy and abandon the app for competing platforms with rich social proof.",
        "resultState": "base_features_removed",
        "statImpact": {
          "latency": "No Counters",
          "capacity": "Stagnant",
          "risk": "Customer Mistrust",
          "cost": "60% Revenue Drop"
        },
        "whatHappened": {
          "helped": "You eliminated the distributed counter write workload completely.",
          "bottleneck": "Deleting social proof and rating badges destroyed customer trust and dropped platform conversions by 60%!",
          "reflectionQuestion": "How does Eventual Consistency allow modern applications to offer rich interactive features without sacrificing speed?"
        }
      }
    ],
    "discovery": {
      "badge": "BASE Model",
      "tagline": "Basically Available, Soft state, Eventual consistency for web-scale systems",
      "simpleMeaning": "The BASE model is the polar opposite of strict ACID: it prioritizes high availability and low latency by accepting that data can be temporarily out-of-sync, converging eventually.",
      "analogy": "If a friend changes their phone number, they do not pause the entire city's cell towers until all 1,000 friends update their address books. They tell friends gradually, and eventually everyone has the new number.",
      "howItWorks": [
        "1. Basically Available (BA): The system guarantees availability for all requests, even if some nodes are degraded or returning cached approximations.",
        "2. Soft State (S): The state of data may shift over time without direct user interaction, as background replication streams propagate updates.",
        "3. Eventual Consistency (E): Given a period without new writes, all distributed replicas converge to become mathematically consistent.",
        "4. Contrast with ACID: ACID demands pessimistic locking and immediate consistency (banking ledgers); BASE enables optimistic asynchronous scaling (social likes, views, carts)."
      ],
      "whyItMatters": "Web platforms with millions of users cannot acquire global locks across servers. BASE enables horizontal scaling across distributed data stores (like Cassandra and DynamoDB).",
      "visualExplanation": "User Clicks Like ──► Local Node Updates Instantly (1,421)\n                           │\n               [Asynchronous Gossip Sync]\n                           ▼\nAll 50 Nodes Converge to Exact Count (1,428) in 3 seconds",
      "contrast": {
        "termA": "ACID Model (Pessimistic Consistency)",
        "descA": "Immediate strict consistency, rigid schemas, row/table locks, high latency overhead. Mandatory for financial accounting.",
        "termB": "BASE Model (Optimistic Availability)",
        "descB": "High availability, asynchronous replication, soft state, sub-millisecond responses, converging eventually. Ideal for social feeds and telemetry."
      },
      "advancedInfo": "Eventual consistency systems often utilize Conflict-Free Replicated Data Types (CRDTs) or Last-Write-Wins (LWW) timestamps to merge concurrent updates without centralized coordination.",
      "teacherNotes": {
        "concept": "BASE Properties, ACID vs. BASE, Eventual Consistency, CRDTs",
        "experience": "Students experienced the freeze caused by acquiring global distributed locks across 50 servers for potato chip thumbs-up counters.",
        "realWorld": "YouTube view counts, Twitter retweets, and Amazon product reviews all rely on BASE models to display approximate counts that converge eventually.",
        "question": "Why is Eventual Consistency acceptable for YouTube video view counters but completely unacceptable for bank account balances?"
      }
    },
    "youtubeUrl": "https://youtu.be/YWXRUbyX_E0?si=wnW_juQ8hBm86jn2",
    "videoId": "YWXRUbyX_E0",
    "videoTitle": "BASE Properties in System Design"
  },
  {
    "id": 21,
    "stage": 9,
    "sno": 21,
    "topic": "Fault Tolerance & Resilience",
    "concept": "Fault Tolerance & Resilience: Redundancy, recovery, graceful degradation",
    "title": "Level 21: The Power Outage Drill (Fault Tolerance & Resilience)",
    "time": "Day 490 — Midnight Warehouse Lightning Storm",
    "usersCount": "Main Power Line Snapped & Server Rack Shorted",
    "topicHint": "Fault Tolerance & Graceful Degradation",
    "situation": "A major lightning storm hits your main warehouse district. The main power line snaps, one of your three server racks shorts out, and the automated package-sorting belt in the basement jams. At the same time, thousands of active shoppers are placing orders online. Your floor manager runs into the office: \"Boss, half our infrastructure is burning! What do we do?\"",
    "problem": "How do you design a system architecture that continues processing customer transactions during severe hardware failures?",
    "simulationType": "fault_tolerance_resilience",
    "choices": [
      {
        "id": "A",
        "text": "Do not plan for hardware failures. Let the entire store and website shut down completely whenever any single component breaks.",
        "isOptimal": false,
        "consequenceText": "Your business experiences frequent, costly downtime. A single blown fuse or fried network switch brings down your entire e-commerce pipeline. Customer checkouts freeze midway, orders are lost, and your reputation for reliability is ruined.",
        "resultState": "fault_complete_blackout",
        "statImpact": {
          "latency": "Infinite Downtime",
          "capacity": "0% Operating",
          "risk": "Fragile Monolith",
          "cost": "Huge Revenue Loss"
        },
        "whatHappened": {
          "helped": "You saved initial hardware setup costs by avoiding redundancy.",
          "bottleneck": "A single power line snap took down the entire platform because there was zero hardware redundancy or failover!",
          "reflectionQuestion": "Why must high-availability systems assume that hardware components will inevitably fail at runtime?"
        }
      },
      {
        "id": "B",
        "text": "Design for Fault Tolerance: utilize redundant power generators, automatic server failover, and Graceful Degradation (temporarily disable non-essential features like personalized recommendations so checkout keeps working).",
        "isOptimal": true,
        "consequenceText": "The supermarket demonstrates high operational resilience: Redundancy kicks on Uninterruptible Power Supplies (UPS) and backup diesel generators within seconds. Automatic Failover routes network traffic away from the fried server rack to the two healthy standby racks. Graceful Degradation sheds heavy machine-learning recommendation models, keeping 100% of core billing and checkout processing online without missing a single customer order!",
        "resultState": "fault_resilience_success",
        "statImpact": {
          "latency": "15ms Seamless",
          "capacity": "100% Core Checkout",
          "risk": "Zero Downtime",
          "cost": "Fault Tolerant"
        },
        "successSummary": "Fault-tolerant architecture pairs redundant hardware with automatic failover and graceful degradation, shedding non-essential load to keep core checkout online!"
      },
      {
        "id": "C",
        "text": "Send staff into the burning server room to manually hold wires together with their bare hands.",
        "isOptimal": false,
        "consequenceText": "A dangerous safety violation occurs. Staff members suffer electric shocks, emergency services evacuate the entire building, and government safety regulators shut down your company pending criminal investigations.",
        "resultState": "fault_hazard_disaster",
        "statImpact": {
          "latency": "Evacuated",
          "capacity": "Government Lockout",
          "risk": "Fatal Safety Violations",
          "cost": "Criminal Penalties"
        },
        "whatHappened": {
          "helped": "You attempted manual human heroism.",
          "bottleneck": "Substituting software automated failover with dangerous manual improvisation led to safety hazards and an emergency shutdown!",
          "reflectionQuestion": "Why should high-availability failover be completely automated rather than dependent on human intervention?"
        }
      }
    ],
    "discovery": {
      "badge": "Fault Tolerance & Resilience",
      "tagline": "Redundancy, automatic failover, and graceful degradation under hardware failures",
      "simpleMeaning": "Fault tolerance is the ability of a system to keep running smoothly even when underlying hardware, servers, or power lines suffer catastrophic failures.",
      "analogy": "A modern commercial airplane does not rely on a single jet engine or a single hydraulic line. It has multiple backup engines and emergency batteries so the plane lands safely if an engine fails.",
      "howItWorks": [
        "1. Redundancy (No Single Point of Failure): Duplicate critical components (multi-AZ servers, dual power supplies, database replicas) so standby nodes take over instantly.",
        "2. Automated Failover: Health checks and consensus protocols detect dead nodes and redirect traffic in milliseconds without human intervention.",
        "3. Graceful Degradation: Under severe stress, non-essential background tasks (like complex recommendations or animations) are temporarily disabled to protect core checkout.",
        "4. Chaos Engineering: Proactively injecting intentional failures (like Netflix Chaos Monkey) during business hours to prove the system heals automatically."
      ],
      "whyItMatters": "Hardware failure in large-scale data centers is not an anomaly; it is a mathematical daily guarantee. Resilient systems stay online regardless.",
      "visualExplanation": "[Main Rack Shorts Out] ──► [Heartbeat Failure Detected in 200ms]\n                                   │\n                [Traffic Auto-Routed to Standby Racks]\n                                   │\n[Core Checkout Remains 100% Online • Non-Essential AI Shed]",
      "contrast": {
        "termA": "Fault Tolerance",
        "descA": "System operates without any user-perceptible degradation despite component failure (zero dropped requests).",
        "termB": "Graceful Degradation",
        "descB": "System steps down to reduced service levels (e.g., plain checkout without AI recommendations) to protect core business functions."
      },
      "advancedInfo": "Site Reliability Engineering (SRE) establishes Error Budgets and SLAs/SLOs. Redundant N+1 or 2N infrastructure clusters ensure multi-datacenter survival during natural disasters.",
      "teacherNotes": {
        "concept": "Fault Tolerance, High Availability (99.999%), Failover, Graceful Degradation, Chaos Engineering",
        "experience": "Students managed a lightning storm that fried power lines and a server rack, keeping checkouts running via automated failover and graceful degradation.",
        "realWorld": "AWS and Azure data centers run redundant diesel generators with 48 hours of on-site fuel to survive statewide electrical grid blackouts.",
        "question": "What is the difference between active-active and active-passive failover in distributed systems?"
      }
    },
    "youtubeUrl": "https://youtu.be/rpBPMFk1ah0?si=BnLK5ZJ0GvKdKMkv",
    "videoId": "rpBPMFk1ah0",
    "videoTitle": "Fault Tolerance vs Resilience"
  },
  {
    "id": 22,
    "stage": 9,
    "sno": 22,
    "topic": "Idempotency",
    "concept": "Idempotency: Repeated, duplicated process",
    "title": "Level 22: The Panicked Double-Click (Idempotency)",
    "time": "Day 520 — Slow Network Checkout Panic",
    "usersCount": "5 Repeated 'PAY NOW' Clicks in 3 Seconds",
    "topicHint": "Idempotency Keys & Duplicate Safety",
    "situation": "A customer named David is standing at an automated checkout terminal. He swipes his credit card to pay Rs. 4,500 for a cart full of groceries and presses the green \"PAY NOW\" button. The screen takes 3 seconds to process because the network is slow. David gets anxious, assumes the screen didn't register his finger, and rapidly presses \"PAY NOW\" four more times in a panic.",
    "problem": "How do you guarantee that multiple identical payment requests from an impatient user charge their account exactly once?",
    "simulationType": "idempotency_double_click",
    "choices": [
      {
        "id": "A",
        "text": "Treat every single button press as a brand-new, independent payment instruction. Process all five payment requests against David's bank account.",
        "isOptimal": false,
        "consequenceText": "David's phone buzzes with five immediate SMS alerts from his bank: his card was charged Rs. 4,500 five separate times (totaling Rs. 22,500) for one cart of food. David is furious, contacts his bank to report fraudulent activity, demands an immediate chargeback, and leaves a scathing review online. Your finance department wastes hours processing manual refunds and paying bank dispute penalties.",
        "resultState": "idempotency_5x_charge",
        "statImpact": {
          "latency": "Charged 5x",
          "capacity": "Rs. 22,500 Stolen",
          "risk": "Chargebacks & Disputes",
          "cost": "Dispute Fees"
        },
        "whatHappened": {
          "helped": "The server blindly executed whatever requests arrived.",
          "bottleneck": "Without idempotency handling, five identical network requests resulted in five separate credit card deductions!",
          "reflectionQuestion": "Why must mutating HTTP POST APIs implement idempotency keys to guard against network retries?"
        }
      },
      {
        "id": "B",
        "text": "Implement Idempotency: assign a unique transaction token (Idempotency Key) to David's checkout attempt. If the server receives five identical requests carrying that same key, process the payment once and simply return the confirmed receipt for the rest.",
        "isOptimal": true,
        "consequenceText": "The system protects both the customer and the store. The first \"PAY NOW\" tap creates an Idempotency Key (e.g., `req_8f93a12`). The payment gateway charges Rs. 4,500 once and caches the result. When the four panicked duplicate taps arrive over the next two seconds, the server recognizes the identical key, ignores the duplicate charges, and immediately returns the cached success receipt. David is charged once, and checkout succeeds seamlessly!",
        "resultState": "idempotency_shield_success",
        "statImpact": {
          "latency": "Charged Exactly Once",
          "capacity": "Safe Retries",
          "risk": "Zero Duplicate Charges",
          "cost": "Seamless UX"
        },
        "successSummary": "Idempotency keys ensure that duplicate or retried requests produce the exact same outcome as a single execution, preventing accidental double-charges!"
      },
      {
        "id": "C",
        "text": "Physically lock the customer's touch screen for 24 hours after a single tap so they can never click again.",
        "isOptimal": false,
        "consequenceText": "The register locks up completely. David cannot confirm his receipt, cannot call for assistance, and other shoppers waiting in line are blocked from using the register for the rest of the day. A ridiculous customer experience failure.",
        "resultState": "idempotency_screen_lockout",
        "statImpact": {
          "latency": "24h Lockout",
          "capacity": "Dead Register",
          "risk": "Absurd UX",
          "cost": "Register Rendered Useless"
        },
        "whatHappened": {
          "helped": "The user could not tap the button a second time.",
          "bottleneck": "Locking the hardware terminal prevented legitimate interaction and rendered the kiosk useless for other customers!",
          "reflectionQuestion": "Why should idempotency be handled on the server/API layer rather than relying purely on client-side button disables?"
        }
      }
    ],
    "discovery": {
      "badge": "Idempotency",
      "tagline": "Idempotency keys, duplicate request deduplication, and safe API retries",
      "simpleMeaning": "An operation is idempotent if executing it multiple times produces the exact same outcome as executing it once (e.g. f(f(x)) = f(x)).",
      "analogy": "If a delivery driver rings your doorbell five times within ten seconds, you open the front door and take the parcel once. You do not demand five identical packages and pay five times.",
      "howItWorks": [
        "1. Idempotency Key Generation: The client creates a unique UUID (e.g., Idempotency-Key: pay_9941a) before sending the request.",
        "2. Atomic Lock / Storage Check: The backend checks an in-memory Redis store. If the key is new, it records the key with status 'PROCESSING'.",
        "3. Execution & Caching: The payment completes, and the successful response payload is saved in Redis with an expiration TTL (e.g. 24 hours).",
        "4. Duplicate Deduction Shield: Any duplicate requests bearing that same key bypass payment processing and return the cached receipt immediately."
      ],
      "whyItMatters": "On mobile networks, network timeouts cause apps or browsers to automatically retry requests. Without idempotency, users get billed multiple times for single purchases.",
      "visualExplanation": "Client Clicks 5x ──► [Idempotency Key: pay_9941a]\nRequest 1 ──► [Payment Charged: Rs. 4,500] ──► Result Cached in Redis\nRequests 2,3,4,5 ──► Key Match in Redis ──► Cached Receipt Returned (Zero Extra Charges)",
      "contrast": {
        "termA": "Idempotent Operations",
        "descA": "Can be executed repeatedly without side effects beyond initial execution (GET, PUT, DELETE, and POST with Idempotency Key).",
        "termB": "Non-Idempotent Operations",
        "descB": "Repeated executions accumulate side effects (e.g., standard HTTP POST creating multiple orders or charging bank cards multiple times)."
      },
      "advancedInfo": "Stripe, Square, and PayPal APIs mandate the `Idempotency-Key` HTTP header on all financial charge endpoints to guarantee safe automated network retry behavior.",
      "teacherNotes": {
        "concept": "Idempotency, HTTP Verbs (GET/PUT/DELETE vs POST), Idempotency Keys, Deduplication",
        "experience": "Students witnessed an anxious customer press 'PAY NOW' five times in three seconds, and implemented idempotency tokens to charge only once.",
        "realWorld": "Payment gateways like Stripe store Idempotency Keys in Redis clusters to safely replay identical responses during mobile network drops.",
        "question": "Why is HTTP PUT considered inherently idempotent while HTTP POST is not?"
      }
    },
    "youtubeUrl": "https://youtu.be/6TkTtqTu1zw?si=BG27Q77y8a4sRd_K",
    "videoId": "6TkTtqTu1zw",
    "videoTitle": "Idempotency in API & Backend System Design"
  },
  {
    "id": 23,
    "stage": 9,
    "sno": 23,
    "topic": "Distributed Transactions",
    "concept": "Distributed Transactions: Cross-service consistency, Two-Phase Commit (2PC), Saga pattern",
    "title": "Level 23: The Cross-Department Promise (Distributed Transactions & The Saga Pattern)",
    "time": "Day 550 — Microservices Multi-Database Rollout",
    "usersCount": "Order Service + Payment Service + Inventory Service",
    "topicHint": "Distributed Transactions & Saga Pattern",
    "situation": "Your supermarket has grown so large that it is split into three independent autonomous divisions running their own isolated databases: The Order Service (Creates the customer bill), The Payment Service (Charges the bank card), and The Inventory Service (Deducts stock from the warehouse). A customer orders a high-end microwave for Rs. 15,000. The Order Service creates the invoice, and the Payment Service debits Rs. 15,000 from the customer's account. But when the request hits the Inventory Service, the warehouse discovers the last microwave fell off a forklift and broke — there is zero stock left! The customer has already been charged, but the inventory step failed.",
    "problem": "In a distributed microservice architecture with independent databases, how do you handle multi-step workflow failures across services?",
    "simulationType": "saga_distributed_transactions",
    "choices": [
      {
        "id": "A",
        "text": "Keep the customer's Rs. 15,000, mark the order as broken, and do nothing.",
        "isOptimal": false,
        "consequenceText": "You are stealing from your customers. The shopper's bank account was charged Rs. 15,000, but no microwave is delivered. The customer files a fraud report, credit card companies blacklist your merchant account, and your business faces severe consumer protection lawsuits.",
        "resultState": "saga_customer_robbed",
        "statImpact": {
          "latency": "Corrupted State",
          "capacity": "Failed Order",
          "risk": "Merchant Account Blacklist",
          "cost": "Legal Lawsuits"
        },
        "whatHappened": {
          "helped": "You avoided engineering a rollback mechanism.",
          "bottleneck": "Charging the customer while leaving inventory unfulfilled created an illegal inconsistent state across microservices!",
          "reflectionQuestion": "Why cannot microservices with separate databases rely on simple local ACID transactions?"
        }
      },
      {
        "id": "B",
        "text": "Two-Phase Commit (2PC): Place a hard global lock across all three services' databases until every single department verifies they are 100% ready before finalizing.",
        "isOptimal": false,
        "consequenceText": "Two-Phase Commit (2PC) guarantees strict consistency, but creates a catastrophic performance bottleneck in microservices. Holding distributed locks across Order, Payment, and Inventory services across the network ties up database connections. When the Inventory Service slows down, all three databases lock up, paralyzing the entire company's checkout pipeline.",
        "resultState": "saga_2pc_deadlock",
        "statImpact": {
          "latency": "Severe Lock Latency",
          "capacity": "Deadlocked Services",
          "risk": "Blocking 2PC Protocol",
          "cost": "Pipeline Paralysis"
        },
        "whatHappened": {
          "helped": "2PC prevented uncoordinated writes using two-phase prepare/commit votes.",
          "bottleneck": "Holding distributed locks across network boundaries caused cascading deadlocks and paralyzed all three microservices!",
          "reflectionQuestion": "Why is Two-Phase Commit (2PC) considered an anti-pattern in modern cloud microservices architectures?"
        }
      },
      {
        "id": "C",
        "text": "The Saga Pattern (Compensating Transactions): Execute the workflow as a sequence of local transactions. When the Inventory Service fails, trigger an automatic chain of backward compensating actions (issue an immediate automatic refund and cancel the order).",
        "isOptimal": true,
        "consequenceText": "Your architecture stays fast, resilient, and consistent. Step 1 (Order Created) and Step 2 (Payment Charged) commit locally without holding global distributed locks. When Step 3 (Inventory) fails, the Saga Orchestrator catches the error and executes compensating transactions: it automatically calls the Payment Service to issue an instant full Rs. 15,000 refund, notifies the customer with an apology SMS, and marks the order canceled. System state remains consistent with zero blocking locks!",
        "resultState": "saga_orchestration_success",
        "statImpact": {
          "latency": "Fast Local Tx",
          "capacity": "Asynchronous Sagas",
          "risk": "Zero Blocking Deadlocks",
          "cost": "Automatic Compensation"
        },
        "successSummary": "The Saga Pattern manages distributed transactions as a series of local transactions with automated compensating rollbacks, ensuring eventual consistency without blocking locks!"
      }
    ],
    "discovery": {
      "badge": "Distributed Transactions & Saga Pattern",
      "tagline": "Two-Phase Commit (2PC) vs. Saga pattern with compensating transactions",
      "simpleMeaning": "When a business process spans multiple independent microservices, the Saga Pattern executes each step locally and triggers compensating rollback actions if a downstream step fails.",
      "analogy": "If an online catering order requires food preparation, floral arrangements, and transportation, you do not lock all three vendors in a room until the entire day is done. If the florist runs out of flowers, they notify the coordinator, who triggers a refund for the flower portion while the rest keeps moving.",
      "howItWorks": [
        "1. Local Transactions: Each microservice executes its step in its own database and emits an event (e.g. OrderCreated -> PaymentProcessed).",
        "2. Distributed Coordination: Sagas can be Orchestrated (a centralized coordinator tells services what to execute) or Choreographed (services react to each other's events).",
        "3. Failure Detection: If a downstream service fails (e.g., Inventory Out of Stock), the failure event is broadcast back up the chain.",
        "4. Compensating Transactions: Each preceding service executes an undo operation (e.g., Payment Service executes Refund; Order Service marks Canceled)."
      ],
      "whyItMatters": "Traditional monolithic ACID transactions cannot span multiple independent cloud microservices. Sagas preserve eventual business consistency without blocking deadlocks.",
      "visualExplanation": "[SAGA FORWARD FLOW]  Order Created ──► Payment Charged ──► Inventory Failed!\n                                                                   │\n[COMPENSATING FLOW]  Order Canceled ◄── Full Refund Issued ◄───────┘",
      "contrast": {
        "termA": "Two-Phase Commit (2PC - Synchronous)",
        "descA": "Prepare and Commit phases. Holds database locks across services, creating blocking bottlenecks, single points of failure, and high latency.",
        "termB": "Saga Pattern (Asynchronous)",
        "descB": "Decoupled local transactions with automated compensating rollbacks. Highly scalable, non-blocking, and designed for microservices."
      },
      "advancedInfo": "Compensating transactions must be designed to be idempotent and guaranteed to succeed. Retries and Dead Letter Queues (DLQs) ensure compensation actions always reach eventual consistency.",
      "teacherNotes": {
        "concept": "Distributed Transactions, Dual-Phase Commit (2PC), Saga Pattern (Orchestration vs Choreography), Compensating Transactions",
        "experience": "Students handled a microwave inventory failure after customer payment, replacing blocking 2PC locks with an automated Saga compensating refund.",
        "realWorld": "Uber, Airbnb, and Amazon use Saga orchestrators to coordinate rides, bookings, and checkouts across hundreds of decoupled microservices.",
        "question": "What is the key difference between Saga Orchestration (central controller) and Saga Choreography (event-driven peer-to-peer)?"
      }
    },
    "youtubeUrl": "https://youtu.be/Z5LqnTTH9ZM?si=gzgChRIlgBVlmq1_",
    "videoId": "Z5LqnTTH9ZM",
    "videoTitle": "Distributed Transactions Explained: 2PC & Saga Pattern"
  },
  {
    "id": 24,
    "stage": 10,
    "sno": 24,
    "topic": "Message Queues",
    "concept": "Message Queues: Producers, consumers, asynchronous processing",
    "title": "Level 24: The Order Inbox Tray (Message Queues & Asynchronous Processing)",
    "time": "Day 580 — Flash Sale Order Processing Storm",
    "usersCount": "50,000 Concurrent Checkout Invoices & PDF Receipts",
    "topicHint": "Message Queues & Asynchronous Decoupling",
    "situation": "Your supermarket launches a festive holiday sale. When a customer clicks \"Confirm Order\", the backend needs to perform four heavy tasks: 1. Deduct payment from bank, 2. Generate a complex 12-page PDF tax invoice, 3. Send SMS and email notifications, 4. Send delivery route dispatch instructions to the warehouse logistics software. Currently, your web server does all four steps sequentially in a single synchronous HTTP request. Generating the PDF invoice and waiting for third-party email APIs takes 12 seconds per click! Under surge traffic, incoming web connections fill up, and the server crashes with HTTP 504 Gateway Timeouts.",
    "problem": "How should you decouple slow, heavy background operations from fast, user-facing checkout transactions?",
    "simulationType": "message_queues_async",
    "choices": [
      {
        "id": "A",
        "text": "Force customers to stand and wait on the screen for 12 seconds while the single web server generates PDF invoices and sends emails synchronously.",
        "isOptimal": false,
        "consequenceText": "Your checkout system grinds to a halt under load. Web server thread pools are held hostage waiting for third-party email and PDF APIs. When 5,000 shoppers try to checkout during the sale, thread pools exhaust, the server crashes, and customers experience HTTP 504 Gateway Timeouts.",
        "resultState": "mq_synchronous_timeout",
        "statImpact": {
          "latency": "12s Sync Freeze",
          "capacity": "Thread Pool Exhaustion",
          "risk": "HTTP 504 Timeouts",
          "cost": "Abandoned Festive Sales"
        },
        "whatHappened": {
          "helped": "All four steps completed before responding to the user.",
          "bottleneck": "Forcing the client to wait synchronously for 12-second PDF and email tasks exhausted server worker threads and crashed checkout!",
          "reflectionQuestion": "Why should slow, third-party, or compute-heavy background tasks never block the user HTTP request thread?"
        }
      },
      {
        "id": "B",
        "text": "Implement Asynchronous Processing with a Message Queue (e.g., RabbitMQ / AWS SQS): complete the fast payment step in 50ms, drop order background tasks into a durable queue, return instant success to the customer, and let background worker servers process invoices and emails asynchronously.",
        "isOptimal": true,
        "consequenceText": "The user experience becomes instantaneous and bulletproof. The customer clicks \"Confirm Order\" and receives a confirmed order screen in just 50 milliseconds! Behind the scenes, the web server (Producer) pushes tasks into a Message Queue. Dedicated background worker servers (Consumers) pull tasks from the queue and generate PDFs and send emails at their own steady pace. When traffic spikes 10x, the queue safely buffers the backlog with zero server crashes!",
        "resultState": "mq_async_queue_success",
        "statImpact": {
          "latency": "50ms Instant Response",
          "capacity": "50,000 Orders Buffered",
          "risk": "Zero Server Crashes",
          "cost": "Elastic Worker Scaling"
        },
        "successSummary": "Message queues decouple producers from consumers, buffering traffic spikes and offloading heavy tasks to asynchronous background workers with sub-second user responses!"
      },
      {
        "id": "C",
        "text": "Permanently stop generating invoices and stop sending confirmation emails to customers forever.",
        "isOptimal": false,
        "consequenceText": "Customers become anxious and inundate your customer support hotline demanding to know if their order went through. Tax authorities issue penalties for failing to generate legally mandated GST invoice documents.",
        "resultState": "mq_features_dropped",
        "statImpact": {
          "latency": "Zero Emails",
          "capacity": "Support Overwhelmed",
          "risk": "Legal Tax Penalties",
          "cost": "Massive Support Burden"
        },
        "whatHappened": {
          "helped": "You eliminated background task processing.",
          "bottleneck": "Erasing invoices and email notifications caused massive customer anxiety and legal tax audit violations!",
          "reflectionQuestion": "How do message queues allow organizations to satisfy complex operational and legal requirements without slowing down user interactions?"
        }
      }
    ],
    "discovery": {
      "badge": "Message Queues",
      "tagline": "Producers, consumers, message buffers, and asynchronous task offloading",
      "simpleMeaning": "A Message Queue is a durable temporary waiting line that decouples fast web servers from slow background tasks (like PDF generation or email sending).",
      "analogy": "When you order food at a fast-food counter, the cashier takes payment, hands you a ticket number, and calls the next customer in line. You do not stand at the counter staring at the chef while he fries potatoes; the kitchen works from a background ticket rail.",
      "howItWorks": [
        "1. Producer (Web Server): Accepts user checkout, saves order state, pushes an order message onto the queue, and returns instant HTTP 200 OK to the shopper.",
        "2. Message Queue (Buffer): A durable, persistent buffer (RabbitMQ, SQS) that holds messages in order, smoothing out sudden traffic spikes.",
        "3. Consumer (Worker Pool): Background worker processes running on independent servers pull messages from the queue and perform heavy PDF rendering and email dispatches.",
        "4. Load Leveling: If 50,000 orders arrive in 1 minute, the queue holds them safely without crashing the front-end servers."
      ],
      "whyItMatters": "Synchronous architectures freeze and crash under traffic spikes. Message queues provide fault isolation: if the email service goes down, orders are still placed safely.",
      "visualExplanation": "User Clicks Checkout ──► Web Server (50ms) ──► Instant Confirmed Screen!\n                                │\n                     [Pushes to Message Queue]\n                                ▼\n             [Worker 1: PDF]  |  [Worker 2: Email]  |  [Worker 3: SMS]",
      "contrast": {
        "termA": "Synchronous Processing (Blocking)",
        "descA": "Client waits while server performs all steps in sequence. If any step hangs or fails, the whole user request crashes.",
        "termB": "Asynchronous Processing (Non-Blocking)",
        "descB": "Immediate response to user; heavy tasks placed on message queue for background processing at steady, reliable pace."
      },
      "advancedInfo": "Message Queues guarantee At-Least-Once Delivery. Dead Letter Queues (DLQs) capture poison pill messages that fail processing multiple times for engineer inspection.",
      "teacherNotes": {
        "concept": "Message Queues, Producers & Consumers, Decoupling, Load Leveling, Dead Letter Queues",
        "experience": "Students solved a 12-second checkout delay and HTTP 504 timeouts by offloading PDF generation and emails to background queue workers.",
        "realWorld": "Shopify and Amazon process millions of holiday checkout transactions through distributed queue pipelines without slowing user cart flows.",
        "question": "What happens to messages in a message queue if all background worker servers crash simultaneously?"
      }
    },
    "youtubeUrl": "https://youtu.be/J8kZA6ocM9Q?si=XOl6SqhoS6KFc1ba",
    "videoId": "J8kZA6ocM9Q",
    "videoTitle": "Message Queues & Asynchronous Processing"
  },
  {
    "id": 25,
    "stage": 10,
    "sno": 25,
    "topic": "Pub-Sub",
    "concept": "Pub-Sub: Message distribution patterns",
    "title": "Level 25: The Department Loudspeaker (Publish-Subscribe / Pub-Sub)",
    "time": "Day 610 — Storewide Event Notification Scaling",
    "usersCount": "10 Downstream Services Listening to Order Events",
    "topicHint": "Publish-Subscribe & One-to-Many Fanout",
    "situation": "Whenever a customer completes an order in your supermarket, multiple internal departments need to know about it: 1. Logistics needs to dispatch delivery drivers, 2. Inventory needs to deduct shelf stock, 3. Analytics needs to update revenue charts, 4. Loyalty needs to award reward points, 5. Fraud Detection needs to check transaction anomalies. Currently, your checkout service makes direct HTTP calls to all five departments one by one. Every time a new team wants order notifications, developers must modify and redeploy the checkout codebase! When the Analytics server slows down, the entire checkout pipeline freezes.",
    "problem": "How do you broadcast business events to multiple independent listener services without tightly coupling systems or modifying checkout code?",
    "simulationType": "pubsub_loudspeaker",
    "choices": [
      {
        "id": "A",
        "text": "Continue adding direct, tightly-coupled point-to-point network calls from the checkout code to every single new department service.",
        "isOptimal": false,
        "consequenceText": "Your architecture turns into an unmaintainable spiderweb. The checkout service depends on five different external endpoints. When the Analytics service slows down or crashes, checkout requests hang and fail. Deploying a minor update requires testing and redeploying the core billing service every time.",
        "resultState": "pubsub_spiderweb_coupling",
        "statImpact": {
          "latency": "Cascading Hangs",
          "capacity": "Fragile Monolith",
          "risk": "Tight Coupling Collapse",
          "cost": "Maintenance Nightmare"
        },
        "whatHappened": {
          "helped": "Services called each other directly via point-to-point HTTP.",
          "bottleneck": "Tight coupling meant that a slowdown in a non-critical analytics service brought down core checkout!",
          "reflectionQuestion": "Why is point-to-point coupling an anti-pattern when broadcasting events to multiple downstream services?"
        }
      },
      {
        "id": "B",
        "text": "Implement a Publish-Subscribe (Pub-Sub) pattern with an Event Topic: the checkout service publishes an \"OrderPlaced\" event to a central topic once, and all interested departments (Inventory, Logistics, Loyalty, Analytics) subscribe independently to consume the event at their own pace.",
        "isOptimal": true,
        "consequenceText": "Your architecture becomes clean, decoupled, and highly scalable. The checkout service publishes an \"OrderPlaced\" event to the topic in 2 milliseconds and moves on, without knowing or caring who is listening! Inventory, Logistics, Loyalty, and Analytics each receive their own copy of the event through dedicated subscription channels. If a new Marketing service wants to listen tomorrow, it simply subscribes without touching a single line of checkout code!",
        "resultState": "pubsub_fanout_success",
        "statImpact": {
          "latency": "2ms Event Broadcast",
          "capacity": "Unlimited Subscribers",
          "risk": "Zero Coupling",
          "cost": "Extensible Architecture"
        },
        "successSummary": "The Publish-Subscribe (Pub-Sub) pattern enables one-to-many fanout, completely decoupling event publishers from downstream consumer subscribers!"
      },
      {
        "id": "C",
        "text": "Refuse to build any new features or notify other departments so the checkout service stays simple.",
        "isOptimal": false,
        "consequenceText": "Your business operations stagnate. Other departments operate blind: delivery drivers don't know orders are ready, loyalty points are never awarded, and executive analytics are missing, leaving your business behind competitors.",
        "resultState": "pubsub_business_stagnation",
        "statImpact": {
          "latency": "No Events",
          "capacity": "Stagnant",
          "risk": "Blind Operations",
          "cost": "Lost Growth"
        },
        "whatHappened": {
          "helped": "The checkout service avoided broadcasting events.",
          "bottleneck": "Refusing to broadcast business events crippled logistics, analytics, and customer loyalty programs!",
          "reflectionQuestion": "How does event-driven architecture accelerate engineering velocity across multiple teams?"
        }
      }
    ],
    "discovery": {
      "badge": "Pub-Sub",
      "tagline": "Publish-Subscribe pattern, message topics, and one-to-many event fanout",
      "simpleMeaning": "Pub-Sub is an event distribution pattern where a Publisher broadcasts an event to a Topic once, and all Subscribed services automatically receive their own copy.",
      "analogy": "When an emergency occurs or a storewide announcement is made, the store manager does not run around whispering into every employee's ear one by one. She speaks into the storewide loudspeaker (Topic); every department listening acts according to its duties.",
      "howItWorks": [
        "1. Publisher: The service generating an event (Checkout) pushes an 'OrderPlaced' payload to a named Topic (e.g. orders-topic).",
        "2. Message Topic: A broker (Google Pub/Sub, SNS) manages the message and handles fanout distribution.",
        "3. Subscribers: Multiple independent services (Logistics, Inventory, Loyalty) establish subscriptions to the topic.",
        "4. Complete Decoupling: The publisher does not know who the subscribers are, how many exist, or whether they are currently online."
      ],
      "whyItMatters": "Enables microservice scalability and organizational independence. New teams can consume production events without requesting modifications to existing core services.",
      "visualExplanation": "[Checkout Service] ──► Publishes 'OrderPlaced' to Topic\n                                  │\n            ┌─────────────────────┼─────────────────────┐\n            ▼                     ▼                     ▼\n    [Inventory Queue]      [Logistics Queue]     [Analytics Queue]\n      Deduct Stock          Dispatch Driver       Update BI Dash",
      "contrast": {
        "termA": "Point-to-Point Queue",
        "descA": "One message is delivered to exactly one consumer worker (competing consumers pattern).",
        "termB": "Publish-Subscribe (Pub-Sub)",
        "descB": "One event is copied and fanned out to every subscribed consumer service simultaneously."
      },
      "advancedInfo": "Pub-Sub systems often support Message Filtering (subscribers receive only events matching specific attributes) and Dead Letter Topics for unroutable payloads.",
      "teacherNotes": {
        "concept": "Publish-Subscribe (Pub-Sub), Topics vs Queues, Fanout Pattern, Loose Coupling",
        "experience": "Students decoupled a spiderweb of five services calling each other into a clean Pub-Sub topic that fans out 'OrderPlaced' events seamlessly.",
        "realWorld": "Financial exchanges, Uber trip status feeds, and IoT device networks use Pub-Sub architectures to fan out millions of telemetry events per second.",
        "question": "What is the difference in message consumption between a standard Message Queue (SQS) and a Pub-Sub Topic (SNS)?"
      }
    },
    "youtubeUrl": "https://youtu.be/fKK3GXOPSJw?si=BJkXW26DVrms83F4",
    "videoId": "fKK3GXOPSJw",
    "videoTitle": "Pub/Sub Architectural Pattern Explained"
  },
  {
    "id": 26,
    "stage": 10,
    "sno": 26,
    "topic": "Stream Processing & WebSockets",
    "concept": "Stream Processing & WebSockets: Real-time pipelines, Persistent two-way communication",
    "title": "Level 26: Picking the Right Conveyor Belt (RabbitMQ vs. Apache Kafka)",
    "time": "Day 640 — Dual Workload Messaging Dilemma",
    "usersCount": "Workload A: 5,000 Tasks/Sec vs Workload B: 500,000 Events/Sec",
    "topicHint": "RabbitMQ (Smart Broker) vs. Apache Kafka (Distributed Log)",
    "situation": "Your supermarket engineering team needs to choose a messaging infrastructure for two completely different workloads hitting the platform at the same time: Workload A: Transactional task distribution (order confirmation receipts, payment webhooks, bank retries). Messages must be routed dynamically based on priority, acknowledged individually, and deleted immediately once completed. Workload B: Clickstream and IoT telemetry (user browsing clicks, sensor logs from 10,000 supermarket smart carts and freezers). This produces 500,000 continuous events per second that must be retained for days and replayed by machine learning pipelines for analysis.",
    "problem": "How do you select the appropriate messaging engine for individual transactional jobs versus high-throughput distributed event streaming?",
    "simulationType": "rabbitmq_vs_kafka",
    "choices": [
      {
        "id": "A",
        "text": "Force Workload B (500k events/sec clickstream telemetry) through the existing RabbitMQ queue so the team doesn't have to manage two different message systems.",
        "isOptimal": false,
        "consequenceText": "Traditional message brokers (like RabbitMQ) track acknowledgment state and queue index for every single message. Under 500,000 events/second, RabbitMQ's memory usage explodes, queue management overhead exhausts CPU, and the cluster crashes, taking down core payment webhooks alongside click telemetry.",
        "resultState": "broker_queue_overwhelmed",
        "statImpact": {
          "latency": "Memory Exploded",
          "capacity": "Queue Saturated",
          "risk": "Cluster Collapse",
          "cost": "Lost Payments & Telemetry"
        },
        "whatHappened": {
          "helped": "You maintained only one messaging cluster to manage.",
          "bottleneck": "Forcing 500k continuous stream events through a traditional message broker exploded memory tracking individual message acknowledgments!",
          "reflectionQuestion": "Why is an append-only distributed log far more efficient for high-throughput event streaming than a traditional message broker?"
        }
      },
      {
        "id": "B",
        "text": "Match the tool to the workload: use a flexible Smart Broker (RabbitMQ) with routing keys and task acknowledgments for individual transactional tasks (Workload A), and deploy an Append-Only Distributed Commit Log (Apache Kafka) with partitioned topics and consumer group offsets for high-throughput stream ingestion and replayable telemetry (Workload B).",
        "isOptimal": true,
        "consequenceText": "Both workloads operate at optimal performance. RabbitMQ handles Workload A with complex routing exchanges, task priority queues, and instant message deletion upon delivery. Apache Kafka handles Workload B with partitioned distributed commit logs, ingesting 500,000 events/sec sequentially to disk with zero memory bloating. Analytics and machine learning teams can replay days of historical clicks independently without impacting live operations!",
        "resultState": "dual_messaging_harmony",
        "statImpact": {
          "latency": "Sub-millisecond",
          "capacity": "500k Events/Sec Ingested",
          "risk": "Zero Downtime",
          "cost": "Specialized Sizing"
        },
        "successSummary": "RabbitMQ excels as a Smart Broker for complex transactional task routing, while Apache Kafka excels as a high-throughput Append-Only Distributed Commit Log for continuous streaming!"
      },
      {
        "id": "C",
        "text": "Write all 500,000 real-time clickstream events to a single USB flash drive attached to the server.",
        "isOptimal": false,
        "consequenceText": "The USB drive runs out of space in ten minutes and burns out under high write operations, destroying all analytics data.",
        "resultState": "usb_drive_burnout",
        "statImpact": {
          "latency": "Burned Out",
          "capacity": "10 Mins Lifespan",
          "risk": "Physical Drive Destruction",
          "cost": "Lost Telemetry"
        },
        "whatHappened": {
          "helped": "You avoided cloud streaming software.",
          "bottleneck": "Writing real-time 500k stream data to a consumer flash drive destroyed the hardware in minutes!",
          "reflectionQuestion": "Why do modern big-data pipelines rely on distributed, partitioned stream architectures?"
        }
      }
    ],
    "discovery": {
      "badge": "RabbitMQ vs. Apache Kafka",
      "tagline": "Smart Brokers vs. Distributed Commit Logs for messaging and streaming",
      "simpleMeaning": "RabbitMQ is a Smart Broker designed for complex task routing where messages vanish once acknowledged; Apache Kafka is an Append-Only Distributed Commit Log built for massive stream ingestion and historical replay.",
      "analogy": "You do not use an armored delivery dispatch service that tracks individual customer receipts to measure continuous raindrops falling on the supermarket roof. You use a smart post office for parcels, and a continuous water meter pipe for fluid flow.",
      "howItWorks": [
        "1. RabbitMQ (Smart Broker / Dumb Consumer): Tracks message delivery and consumer acknowledgments. Once a worker acknowledges a message, it is deleted from the queue.",
        "2. Apache Kafka (Dumb Broker / Smart Consumer): Messages are appended sequentially to immutable partition logs on disk. The broker does not track individual delivery.",
        "3. Consumer Offsets: Kafka consumers track their own position (offset) in the partition. Different teams can read at their own speed or replay data from yesterday.",
        "4. Architectural Sizing: Choose RabbitMQ for transactional job routing and task scheduling; choose Kafka for real-time telemetry, clickstreams, and big-data event ingestion."
      ],
      "whyItMatters": "Using the wrong messaging engine leads to out-of-memory crashes under high volume or extreme operational complexity for simple transactional tasks.",
      "visualExplanation": "RabbitMQ: Producer ──► [Exchange / Routing Key] ──► Queue ──► Consumer (Deleted on Ack)\nKafka:    Producer ──► [Partitioned Commit Log] ──► Consumer Offset (Retained on Disk)",
      "contrast": {
        "termA": "RabbitMQ (AMQP / Message Queue)",
        "descA": "Smart broker, complex routing rules, priority queues, individual message acknowledgments, transient data deleted on receipt.",
        "termB": "Apache Kafka (Distributed Event Stream)",
        "descB": "Append-only commit log, partitioned topics, massive throughput (millions/sec), sequential disk I/O, historical replay via offsets."
      },
      "advancedInfo": "Kafka achieves immense throughput via OS PageCache, zero-copy network transfer (sendfile syscall), and sequential disk writes which match RAM write speeds.",
      "teacherNotes": {
        "concept": "RabbitMQ vs. Kafka, AMQP Protocol, Append-Only Commit Logs, Consumer Offsets, Zero-Copy Architecture",
        "experience": "Students sized messaging infrastructure across individual payment receipts (RabbitMQ) versus 500,000 clickstream events/sec (Kafka).",
        "realWorld": "Uber uses RabbitMQ for granular dispatch tasks and Kafka for billions of GPS and trip event streams daily.",
        "question": "What is the difference between a message queue that deletes messages on acknowledgment versus a distributed log that retains them?"
      }
    },
    "youtubeUrl": "https://youtu.be/mG3xQb_-rV4?si=6xDWgd_MQBDTOd0e",
    "videoId": "mG3xQb_-rV4",
    "videoTitle": "Stream Processing System Design Architecture"
  },
  {
    "id": 27,
    "stage": 11,
    "sno": 27,
    "topic": "Geospatial Search",
    "concept": "Geospatial Search: Coordinates, proximity queries, spatial indexing",
    "title": "Level 27: The Live Delivery Tracker (Stream Processing & WebSockets)",
    "time": "Day 670 — Live Grocery Delivery Map Tracking",
    "usersCount": "50,000 Active Shoppers Tracking Live Delivery Vans",
    "topicHint": "WebSockets vs. HTTP Polling for Live Telemetry",
    "situation": "Your supermarket launches express 15-minute grocery deliveries. When a shopper orders groceries, the mobile app displays an interactive live map showing the delivery van moving along city streets in real time. Currently, your mobile app uses Short Polling: every single second, 50,000 customer phones fire an HTTP GET request to your backend asking: \"Where is the van now? Where is the van now?\" 95% of requests return the exact same coordinates because the van is stuck at a red light! Your web servers are hammered by 50,000 HTTP requests per second, HTTP header overhead chokes network bandwidth, and customer phones burn through their battery within minutes.",
    "problem": "How should you deliver continuous, real-time GPS telemetry from moving delivery vehicles to customer devices without exhausting server resources?",
    "simulationType": "websockets_delivery_tracker",
    "choices": [
      {
        "id": "A",
        "text": "Force the customer's phone to send a brand new HTTP request every second (Short Polling) to ask for coordinates.",
        "isOptimal": false,
        "consequenceText": "Short Polling creates severe server strain. Millions of HTTP requests per minute establish and tear down TCP connections, repeatedly sending bulky HTTP request headers (cookies, user-agents). Your servers suffer CPU exhaustion, and mobile users complain that the app drains their phone battery and lags continuously.",
        "resultState": "ws_short_polling_overload",
        "statImpact": {
          "latency": "High HTTP Overhead",
          "capacity": "Server CPU Exhaustion",
          "risk": "Battery Drain & Lag",
          "cost": "Wasted Bandwidth"
        },
        "whatHappened": {
          "helped": "You used familiar stateless HTTP endpoints.",
          "bottleneck": "Firing 50,000 HTTP GET requests every second established redundant TCP handshakes, burned mobile batteries, and choked servers!",
          "reflectionQuestion": "Why is HTTP Short Polling an inefficient design pattern for high-frequency real-time updates?"
        }
      },
      {
        "id": "B",
        "text": "Establish a persistent, bi-directional WebSocket connection between the customer's phone and the backend telemetry server. When the delivery driver's GPS coordinates change, push the tiny coordinate payload instantly down the open socket.",
        "isOptimal": true,
        "consequenceText": "The real-time tracking experience operates with buttery smoothness. A single TCP handshake upgrades the connection to the WebSocket protocol. The connection stays open persistently. When the delivery van turns a corner, the backend pushes tiny 2-byte coordinate frames to the client in under 5 milliseconds! Zero HTTP header overhead, zero battery drain, and the delivery van glides across the map with silky precision!",
        "resultState": "ws_connection_success",
        "statImpact": {
          "latency": "5ms Instant Push",
          "capacity": "50,000 Open Sockets",
          "risk": "Zero Polling Overhead",
          "cost": "Minimal Battery & Bandwidth"
        },
        "successSummary": "WebSockets establish a persistent, low-latency, full-duplex connection that allows the server to push real-time GPS telemetry directly to clients without HTTP polling overhead!"
      },
      {
        "id": "C",
        "text": "Disable live location tracking completely. Make shoppers stand outside on the street for two hours looking down the road to spot the delivery van.",
        "isOptimal": false,
        "consequenceText": "Customer satisfaction drops dramatically. In the modern era of instant delivery apps, customers refuse to wait blindly without tracking visibility. Shoppers cancel orders and switch to competitors that provide live GPS visibility.",
        "resultState": "ws_tracking_disabled",
        "statImpact": {
          "latency": "Blind Waiting",
          "capacity": "Customers Lost",
          "risk": "Competitor Wipeout",
          "cost": "Order Cancellations"
        },
        "whatHappened": {
          "helped": "You removed all telemetry network connections.",
          "bottleneck": "Forcing customers to wait blindly on the street caused massive order cancellations and lost market share!",
          "reflectionQuestion": "Why has persistent real-time streaming become an essential expectation in modern consumer applications?"
        }
      }
    ],
    "discovery": {
      "badge": "WebSockets & Stream Processing",
      "tagline": "Persistent bi-directional sockets, real-time telemetry streaming, and server push",
      "simpleMeaning": "WebSockets maintain an open, full-duplex communication channel over a single TCP connection, allowing servers to push live data (like moving GPS coordinates) instantly to clients.",
      "analogy": "If you want to know when your delivery has arrived, you do not walk out to the driveway every three seconds, open the front gate, look around, and walk back inside. You install a two-way intercom wire connected directly to the gate so the driver speaks to you the instant they arrive.",
      "howItWorks": [
        "1. HTTP Upgrade Handshake: The client initiates a standard HTTP request with an 'Upgrade: websocket' header; the server returns HTTP 101 Switching Protocols.",
        "2. Persistent Full-Duplex Connection: The TCP socket remains open indefinitely, allowing both client and server to send messages freely at any moment.",
        "3. Lightweight Framing: Unlike HTTP with large text headers, WebSocket messages travel inside tiny binary frames with only 2 to 6 bytes of overhead.",
        "4. Stream Processing Engine: Real-time driver telemetry streams through Apache Flink or Kafka Streams, calculating ETA updates in milliseconds before pushing down the socket."
      ],
      "whyItMatters": "Eliminates the massive CPU, network bandwidth, and battery drain caused by millions of polling HTTP requests every second.",
      "visualExplanation": "Driver GPS Moves ──► Telemetry Server ──► WebSocket Frame (2 bytes) ──► Instant Smooth Map Glide!\n                                       [Zero Polling • Zero HTTP Headers]",
      "contrast": {
        "termA": "HTTP Short Polling",
        "descA": "Client repeatedly sends new HTTP requests on a timer. Creates massive header overhead, high latency, and severe server load.",
        "termB": "WebSockets (Full Duplex)",
        "descB": "Single persistent TCP connection. Bi-directional communication with sub-millisecond server push and negligible frame overhead."
      },
      "advancedInfo": "For one-way server-to-client notifications where clients never send data back, Server-Sent Events (SSE) over HTTP/2 provides an alternative lightweight streaming option.",
      "teacherNotes": {
        "concept": "WebSockets, HTTP Polling vs Long Polling vs WebSockets, Server-Sent Events (SSE), Full-Duplex Streaming",
        "experience": "Students solved a 50,000 req/sec short-polling server meltdown by upgrading to a persistent WebSocket telemetry stream.",
        "realWorld": "Trading platforms like Robinhood and ride-hailing apps like Uber use WebSockets to stream stock ticks and vehicle coordinates in real time.",
        "question": "When should you choose WebSockets over Server-Sent Events (SSE) in system design?"
      }
    },
    "youtubeUrl": "https://youtu.be/ENbivJwB3BY?si=QfQF6Rmr5fBdodmF",
    "videoId": "ENbivJwB3BY",
    "videoTitle": "Designing Location-Based Systems | Geohashing vs Quadtrees"
  },
  {
    "id": 28,
    "stage": 11,
    "sno": 28,
    "topic": "Inverted Indexes & BM25",
    "concept": "Inverted Indexes & BM25: Search indexing, relevance ranking, ranking signals",
    "title": "Level 28: Finding Nearby Stores (Geospatial Search & Spatial Indexing)",
    "time": "Day 700 — Proximity Store Locator & Radius Queries",
    "usersCount": "100,000 Stores Nationwide & Millions of Proximity Queries",
    "topicHint": "Geospatial Indexing (Geohash & Quadtrees)",
    "situation": "Your supermarket enterprise has expanded to 100,000 partner retail stores, pickup lockers, and dark stores across the nation. When a user opens the mobile app, the home screen needs to answer: \"Find the nearest 10 stores within a 5 km radius of my current GPS location (12.9716° N, 77.5946° E).\" Currently, your database runs a raw mathematical distance formula (the Haversine formula) across all 100,000 store rows on every single app open! Every query executes square roots, sines, and cosines across the entire database table. With 50,000 users searching simultaneously, database CPU utilization hits 100% and queries take 8 seconds to return.",
    "problem": "How do you index two-dimensional geographic coordinates (Latitude and Longitude) to perform lightning-fast proximity and radius searches?",
    "simulationType": "geospatial_spatial_indexing",
    "choices": [
      {
        "id": "A",
        "text": "Whenever a user opens the app, run a raw mathematical distance calculation (Haversine formula with sines and cosines) across all 100,000 stores in the database table.",
        "isOptimal": false,
        "consequenceText": "Your database performance collapses as customer traffic grows. Calculating trigonometric distance formulas across 100,000 rows for every single search forces full table scans on every query. Standard B-Tree indexes cannot index two dimensions simultaneously. Search latency spikes to 8 seconds, database CPUs peg at 100%, and location lookups timeout.",
        "resultState": "geo_haversine_table_scan",
        "statImpact": {
          "latency": "8s Trigonometric Scans",
          "capacity": "Full Table Scans",
          "risk": "100% CPU Collapse",
          "cost": "Search Timeouts"
        },
        "whatHappened": {
          "helped": "You avoided setting up spatial indexing data structures.",
          "bottleneck": "Running raw trigonometric Haversine math across 100,000 rows on every search triggered full table scans and melted database CPUs!",
          "reflectionQuestion": "Why are standard one-dimensional B-Tree database indexes incapable of efficiently indexing two-dimensional coordinates?"
        }
      },
      {
        "id": "B",
        "text": "Implement Geospatial Indexing: map the physical world into spatial partitions using Geohashing (hierarchical grid strings) or Quadtrees / Google S2. Index the spatial grid keys so the database only searches stores located inside the user's immediate bounding box in milliseconds.",
        "isOptimal": true,
        "consequenceText": "Location queries return in milliseconds. The earth's surface is partitioned into hierarchical bounding grids (Geohashes or Quadtree cells). When a user searches near Bangalore, their GPS coordinates map to a prefix like `tdr1v`. Instead of scanning 100,000 nationwide stores, the database performs a lightning-fast B-Tree prefix lookup on `tdr1v*`, evaluating only the 15 stores in that immediate neighborhood! Search times plummet from 8 seconds to 4 milliseconds!",
        "resultState": "geo_spatial_index_success",
        "statImpact": {
          "latency": "4ms Spatial Lookup",
          "capacity": "Millions of Concurrent Queries",
          "risk": "Zero Trigonometric Overload",
          "cost": "Highly Optimized"
        },
        "successSummary": "Geospatial Indexing (Geohash / Quadtrees / Google S2) partitions 2D Earth coordinates into hierarchical grid cells, turning complex trigonometric scans into lightning-fast prefix lookups!"
      },
      {
        "id": "C",
        "text": "Group stores broadly by entire states or countries only. If a user in South Bangalore wants milk, return every store in Karnataka, even if it is 600 km away in Bidar.",
        "isOptimal": false,
        "consequenceText": "The search results are practically useless. A customer standing in Bangalore is recommended a store 500 km away in another city because both stores share the same state ID. Shoppers get frustrated by irrelevant recommendations and uninstall the app.",
        "resultState": "geo_coarse_partitioning",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "Useless Results",
          "risk": "Customer Churn",
          "cost": "Ruined Experience"
        },
        "whatHappened": {
          "helped": "You grouped stores with simple state identifiers.",
          "bottleneck": "Coarse state-level grouping recommended stores 500 km away, creating useless search results and alienating users!",
          "reflectionQuestion": "How do hierarchical spatial indexes provide granular proximity searches without evaluating every record in a country?"
        }
      }
    ],
    "discovery": {
      "badge": "Geospatial Search & Spatial Indexing",
      "tagline": "Two-dimensional spatial indexing, Geohashing, Quadtrees, and radius queries",
      "simpleMeaning": "Geospatial Indexing converts 2D coordinates (latitude and longitude) into hierarchical grid cells (like Geohash strings or Quadtrees) so proximity queries execute in single-digit milliseconds.",
      "analogy": "If you are looking for a lost child in a giant shopping mall, security does not calculate mathematical distance vectors to every person standing across the entire building. They identify the specific zone (e.g. 'Zone B, Second Floor') and search only within that section and its adjoining corridors.",
      "howItWorks": [
        "1. The 2D Indexing Challenge: Standard database B-Trees index one dimension (X > 5). Latitude and longitude represent a two-dimensional plane that cannot be sorted on a single number line.",
        "2. Geohash Encoding: Interleaves binary bits of latitude and longitude, encoding coordinates into a base32 string (e.g., `tdr1v9`).",
        "3. Prefix Proximity: Points sharing the same Geohash prefix are physically close together. Searching `tdr1v*` instantly bounds queries to an ~1.2 km x ~600 m rectangle.",
        "4. Quadtrees & Google S2: Hierarchically sub-divide physical space into 4 quadrants recursively, providing dynamic resolution that scales seamlessly from rural fields to dense urban centers."
      ],
      "whyItMatters": "Without spatial indexing, proximity searches (like Uber finding nearby drivers or Yelp finding restaurants) require full table scans with expensive trigonometric math that bring down databases.",
      "visualExplanation": "Earth Plane ──► Divided into Bounding Grids (Quadtrees / Geohashes)\nUser Location (12.97° N, 77.59° E) ──► Maps to Geohash 'tdr1v'\nDatabase Query: SELECT * FROM stores WHERE geohash LIKE 'tdr1v%' ──► 4ms Result!",
      "contrast": {
        "termA": "Geohashing",
        "descA": "Encodes 2D coordinates into alphanumeric strings using Z-order space-filling curves. Ideal for fast prefix lookups in standard B-Tree/NoSQL databases.",
        "termB": "Quadtrees",
        "descB": "Tree data structure where each internal node has exactly four children. Adapts dynamically to point density, creating smaller boxes in dense cities."
      },
      "advancedInfo": "Boundary edge cases in Geohash (where two points are right next to each other across a grid boundary) are handled by querying the target cell plus its 8 immediate neighbor cells (3x3 grid search).",
      "teacherNotes": {
        "concept": "Geospatial Indexing, Geohash, Quadtrees, Google S2 Geometry, R-Trees, Proximity Queries",
        "experience": "Students replaced a full-table Haversine formula scan across 100,000 stores with a 4ms Geohash prefix lookup.",
        "realWorld": "Uber, Google Maps, and Tinder use Google S2 and Quadtrees to match millions of riders, restaurants, and users in real time.",
        "question": "Why do points right next to each other sometimes have completely different Geohash prefixes, and how is this solved?"
      }
    },
    "youtubeUrl": "https://youtu.be/ty9DQhM32mM?si=ZCmfoXgNdPFqnhQk",
    "videoId": "ty9DQhM32mM",
    "videoTitle": "Search Indexes & Relevance Ranking"
  }
];

// Expose globally for browser usage
if (typeof window !== 'undefined') {
  window.GAME_STAGES = STAGES;
  window.GAME_LEVELS = LEVELS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STAGES, LEVELS };
}
