// ============================================================
// SYSTEM DESIGN LEARNING GAME - CURRICULUM DATA
// 7 MODULES, EXACTLY 28 TOPICS (OLA MOBILITY EDITION)
// DESIGNED FOR FIRST-YEAR STUDENTS WITH ZERO CS BACKGROUND
// ============================================================

const STAGES = [
  {
    "id": 1,
    "name": "Module 1: System Design Fundamentals",
    "icon": "📐",
    "desc": "Ola Core Architecture & 50,000 Rush Hour Bookings",
    "levels": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "id": 2,
    "name": "Module 2: Networking and Communication",
    "icon": "🌐",
    "desc": "DNS, HTTPS Security & REST APIs",
    "levels": [
      6,
      7,
      8,
      9
    ]
  },
  {
    "id": 3,
    "name": "Module 3: Database Fundamentals",
    "icon": "💾",
    "desc": "SQL vs NoSQL, ACID, Indexing, Replication & Sharding",
    "levels": [
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": 4,
    "name": "Module 4: Application Architecture",
    "icon": "🏗️",
    "desc": "Monolith vs Microservices & Authentication Security",
    "levels": [
      19,
      20
    ]
  },
  {
    "id": 5,
    "name": "Module 5: Scalability and Performance",
    "icon": "⚡",
    "desc": "Horizontal Scaling, Load Balancing, Redis Cache & CDN",
    "levels": [
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": 6,
    "name": "Module 6: Asynchronous Processing and Reliability",
    "icon": "🛡️",
    "desc": "Kafka Queues, Fault Tolerance & Rate Limiting",
    "levels": [
      25,
      26,
      27
    ]
  },
  {
    "id": 7,
    "name": "Module 7: Advanced System Design",
    "icon": "🎯",
    "desc": "Geospatial Search & 2km Radius Nearest Cab Matching",
    "levels": [
      28
    ]
  }
];

const LEVELS = [
  {
    "id": 1,
    "stage": 1,
    "sno": 1,
    "topic": "Introduction to System Design",
    "concept": "Introduction to System Design",
    "title": "Level 1: 50,000 People Book Cabs at 6:00 PM",
    "time": "Evening Rush Hour — Bangalore Tech Park",
    "usersCount": "50,000 Riders Opening Ola App",
    "topicHint": "Handling Rush Hour Traffic Without Crashes",
    "situation": "It is 6:00 PM on a rainy Friday evening in Bangalore. Office workers leave work, and suddenly 50,000 people open the Ola app at the exact same minute to book a cab. A junior engineer asks: \"Can we just run the entire Ola cab booking app on one single laptop under my desk?\"",
    "problem": "What happens if you try to run an app with 50,000 riders on a single home computer?",
    "simulationType": "ola_rush_hour",
    "choices": [
      {
        "id": "A",
        "text": "The laptop runs out of memory, freezes completely, and crashes the app for all 50,000 riders.",
        "isOptimal": true,
        "consequenceText": "Spot on! One regular laptop cannot process 50,000 booking requests at the same second. The processor overheats, the memory fills up, and the app crashes, stranding riders in the rain. That is why we need System Design!",
        "statImpact": {
          "latency": "25ms",
          "capacity": "50,000 Riders Smooth",
          "risk": "Zero Downtime",
          "cost": "Well-Planned"
        },
        "whatHappened": {
          "helped": "Understood that big apps need organized systems of computers.",
          "bottleneck": "A single laptop lacks the power to handle thousands of users at once.",
          "reflectionQuestion": "Why do apps with millions of users need a planned system of computers?"
        },
        "successSummary": "Great decision! You understood why single computers fail and why system planning is required."
      },
      {
        "id": "B",
        "text": "The laptop automatically turns into a supercomputer with no extra planning needed.",
        "isOptimal": false,
        "consequenceText": "Computers cannot magically make themselves faster. When thousands of ride requests hit the laptop, it freezes instantly and no cabs can be booked.",
        "statImpact": {
          "latency": "Frozen",
          "capacity": "0 Cabs Dispatched",
          "risk": "Total Crash",
          "cost": "Lost Business"
        },
        "whatHappened": {
          "helped": "Hoped computer hardware would upgrade itself.",
          "bottleneck": "Hardware has physical limits and cannot upgrade automatically.",
          "reflectionQuestion": "Can software run smoothly without planning the computer hardware behind it?"
        }
      },
      {
        "id": "C",
        "text": "Passengers do not need any servers or internet connection to book cabs on their phones.",
        "isOptimal": false,
        "consequenceText": "An online app cannot work without computers and internet. Without a central system, riders cannot see nearby drivers or share ride destinations.",
        "statImpact": {
          "latency": "Offline",
          "capacity": "0 Rides",
          "risk": "No Connection",
          "cost": "Broken App"
        },
        "whatHappened": {
          "helped": "Thought online apps work like offline games.",
          "bottleneck": "Ride hailing requires constant network communication.",
          "reflectionQuestion": "How does information travel from a rider's phone to a cab driver's phone?"
        }
      }
    ],
    "discovery": {
      "badge": "Introduction to System Design",
      "tagline": "Planning and connecting computers so big applications run smoothly without crashing",
      "simpleMeaning": "System Design is like planning a whole city before building it. Instead of hoping one computer does everything, you plan which computers handle cab locations, which computers handle payments, and how they talk to each other without slowing down.",
      "pubgExample": "When 50,000 riders tap 'Book Mini' on Ola at 6:00 PM, a well-designed system distributes the requests so every rider gets a cab in 3 minutes without the app freezing.",
      "analogy": "Building a busy highway: You cannot have just one single narrow lane for an entire city. You must plan multiple lanes, bridges, and traffic lights so thousands of vehicles move smoothly.",
      "howItWorks": [
        "1. Understand the Traffic: Know how many riders and drivers use the app every minute.",
        "2. Divide the Work: Separate ride tracking, payments, and maps across different computers.",
        "3. Stop Bottlenecks: Plan backup computers so the app stays fast during heavy rain or festival rushes.",
        "4. Keep It Fast: Make sure riders get driver details in just a few milliseconds."
      ],
      "whyItMatters": "Without System Design, popular apps like Ola would crash constantly during rush hours, leaving riders stranded and drivers without trips.",
      "visualExplanation": "[50,000 Riders with Phones] ──► [Planned Ola System] ──► Smooth Cab Dispatch in 3 Mins!",
      "contrast": {
        "termA": "Single Computer Setup",
        "descA": "One computer tries to do everything; quickly freezes and crashes under 50,000 users.",
        "termB": "Planned System",
        "descB": "Work is shared across organized computers; handles millions of ride requests smoothly."
      },
      "teacherNotes": {
        "concept": "What is System Design, Scale, Capacity, Bottlenecks",
        "experience": "Students learned why 50,000 simultaneous users cannot run on a simple home laptop.",
        "realWorld": "Ola, Uber, and Swiggy use distributed server clusters across India to handle millions of daily bookings.",
        "question": "What is the difference between writing code for one person and designing a system for 10 million users?"
      },
      "olaExample": "When 50,000 riders tap 'Book Mini' on Ola at 6:00 PM, a well-designed system distributes the requests so every rider gets a cab in 3 minutes without the app freezing."
    },
    "knowledgeCheck": {
      "question": "What is the main goal of System Design in a cab booking app like Ola?",
      "options": [
        {
          "id": "A",
          "text": "To plan and organize connected computers so thousands of riders can book cabs without the app crashing.",
          "isCorrect": true,
          "explanation": "Correct! System Design ensures that servers, databases, and networks work together to handle heavy traffic smoothly."
        },
        {
          "id": "B",
          "text": "To paint all the cabs yellow and buy new tires for drivers.",
          "isCorrect": false,
          "explanation": "Not quite. Painting cabs is physical car maintenance, not system design for software."
        },
        {
          "id": "C",
          "text": "To give everyone free unlimited cab rides without charging any money.",
          "isCorrect": false,
          "explanation": "Incorrect. System design is about building reliable computer systems, not pricing policies."
        }
      ],
      "hint": "Hint: Think about why apps need servers, networks, and databases to work together during rush hours."
    }
  },
  {
    "id": 2,
    "stage": 1,
    "sno": 2,
    "topic": "Functional and Non-Functional Requirements",
    "concept": "Functional and Non-Functional Requirements",
    "title": "Level 2: What the App Does vs. How Fast It Runs",
    "time": "Morning Commute — Delhi Airport Terminal",
    "usersCount": "10,000 Riders at Airport",
    "topicHint": "App Features vs Speed & Reliability",
    "situation": "The Ola engineering team is planning the new airport booking update. The designer says: \"We must let riders select Sedan or Prime, view the fare, and apply coupon codes.\" But the lead architect adds: \"When a rider taps Book, the cab search must finish in under 2 seconds, and the servers must stay online 99.9% of the time!\"",
    "problem": "What is the difference between what an app DOES (Features) and how well it RUNS (Performance)?",
    "simulationType": "requirements_stress",
    "choices": [
      {
        "id": "A",
        "text": "Functional is what the app does (booking a cab, applying coupons); Non-Functional is how well it runs (fast response, 99.9% uptime).",
        "isOptimal": true,
        "consequenceText": "Exactly right! Functional Requirements are the features riders click on (booking, fare estimate, cancelling). Non-Functional Requirements are the quality standards: the app must respond in under 2 seconds, never lose payments, and never crash!",
        "statImpact": {
          "latency": "Sub-2s",
          "capacity": "Reliable",
          "risk": "Zero Downtime",
          "cost": "Balanced"
        },
        "whatHappened": {
          "helped": "Separated core features from performance and reliability metrics.",
          "bottleneck": "Building features without performance targets creates slow apps that users hate.",
          "reflectionQuestion": "Why is an app with great buttons useless if every button takes 20 seconds to respond?"
        },
        "successSummary": "Perfect! You distinguished Functional Requirements (features) from Non-Functional Requirements (speed and uptime)."
      },
      {
        "id": "B",
        "text": "Functional means the cab has functional air conditioning; Non-Functional means the car radio is broken.",
        "isOptimal": false,
        "consequenceText": "Those are physical car features, not software requirements for the Ola application system.",
        "statImpact": {
          "latency": "Unclear",
          "capacity": "Confused Scope",
          "risk": "Missed Targets",
          "cost": "Wasted Effort"
        },
        "whatHappened": {
          "helped": "Thought about car parts instead of software systems.",
          "bottleneck": "System requirements define how software behaves and performs.",
          "reflectionQuestion": "What does a software engineer measure when testing an app?"
        }
      },
      {
        "id": "C",
        "text": "Only build fancy buttons and ignore whether the app takes 5 minutes to load or crashes frequently.",
        "isOptimal": false,
        "consequenceText": "If the app takes 5 minutes to confirm a cab, hurried riders at the airport will delete Ola and take a regular taxi instead.",
        "statImpact": {
          "latency": "5-Minute Delay",
          "capacity": "Angry Riders",
          "risk": "Player Churn",
          "cost": "Lost Revenue"
        },
        "whatHappened": {
          "helped": "Focused only on visuals without speed.",
          "bottleneck": "Slow response times destroy user trust completely.",
          "reflectionQuestion": "Would you keep using an app that freezes for minutes every time you book?"
        }
      }
    ],
    "discovery": {
      "badge": "Functional vs. Non-Functional Requirements",
      "tagline": "Balancing the features users click with the speed and reliability they expect",
      "simpleMeaning": "Functional Requirements (FR) describe WHAT the system does (features like booking a ride, showing fare estimate, or paying with wallet). Non-Functional Requirements (NFR) describe HOW WELL the system performs (booking completes in under 2 seconds, 99.9% uptime, and protecting passwords).",
      "pubgExample": "In Ola, picking 'Ola Auto' and entering a drop location is a Functional Requirement. Having your nearby driver assigned in under 3 seconds without app freezing is a Non-Functional Requirement.",
      "analogy": "Buying a car: Having 4 wheels, a steering wheel, and doors is Functional (what it is). Getting 20 km per liter of fuel, low maintenance, and 5-star crash safety is Non-Functional (how well and safely it works).",
      "howItWorks": [
        "1. List Features (FR): Riders can book cabs, track live driver location, and rate drivers.",
        "2. Set Speed Targets (NFR): Cab search must return within 2 seconds.",
        "3. Set Reliability Targets (NFR): The system must stay available 99.9% of the year.",
        "4. Test Both: Ensure the buttons work AND that the app feels fast and smooth."
      ],
      "whyItMatters": "An app with 50 wonderful features is completely useless if it takes 30 seconds to load or crashes when rain starts.",
      "visualExplanation": "Functional: [Book Cab] + [Apply Coupon]\nNon-Functional: [Response < 2s] + [99.9% Uptime] = Great Ola App!",
      "contrast": {
        "termA": "Functional Requirements (FR)",
        "descA": "What the app does: features and buttons riders interact with (e.g., book ride, pay fare).",
        "termB": "Non-Functional Requirements (NFR)",
        "descB": "How well it runs: speed, uptime, security, and scalability under heavy rush."
      },
      "teacherNotes": {
        "concept": "Functional Requirements (FR), Non-Functional Requirements (NFR), Latency, Availability, SLA",
        "experience": "Students learned why software must balance what it does with how fast and reliably it operates.",
        "realWorld": "Ola and Uber engineering teams define strict SLAs: 99.99% uptime and sub-200ms API response times.",
        "question": "If an app has a working payment button (FR) but processing takes 2 minutes (NFR), is it acceptable?"
      },
      "olaExample": "In Ola, picking 'Ola Auto' and entering a drop location is a Functional Requirement. Having your nearby driver assigned in under 3 seconds without app freezing is a Non-Functional Requirement."
    },
    "knowledgeCheck": {
      "question": "If a rider opens Ola to catch a train and the app freezes because the server is too slow, which requirement failed?",
      "options": [
        {
          "id": "A",
          "text": "Non-Functional Requirement (Speed and performance failed).",
          "isCorrect": true,
          "explanation": "Correct! Speed, responsiveness, and uptime are Non-Functional Requirements. Freezing means performance failed."
        },
        {
          "id": "B",
          "text": "Functional Requirement (The rider forgot their shoes).",
          "isCorrect": false,
          "explanation": "Incorrect. Personal shoes have nothing to do with software system requirements."
        },
        {
          "id": "C",
          "text": "Color Requirement (The cab was the wrong shade of white).",
          "isCorrect": false,
          "explanation": "Incorrect. Vehicle paint color is cosmetic, not a software requirement failure."
        }
      ],
      "hint": "Hint: Think about whether freezing is a missing button (feature) or a problem with speed and responsiveness (performance)."
    }
  },
  {
    "id": 3,
    "stage": 1,
    "sno": 3,
    "topic": "Client–Server Architecture",
    "concept": "Client–Server Architecture",
    "title": "Level 3: How Your Phone Talks to the Ola Cloud Server",
    "time": "Evening Booking — Connaught Place, Delhi",
    "usersCount": "Rider Phone & Nearby Cab Drivers",
    "topicHint": "Client Requests and Server Responses",
    "situation": "You open the Ola app on your smartphone (the Client) to go home. You need to know: \"Where are the 3 closest cabs right now?\" Your friend wonders: \"Does your phone connect directly to all 10,000 cab drivers' phones in Delhi through Bluetooth wires?\"",
    "problem": "How should your smartphone get accurate information about nearby available cabs?",
    "simulationType": "client_server_clerk",
    "choices": [
      {
        "id": "A",
        "text": "Your phone (Client) asks the central Ola computer (Server), and the server replies with the nearest 3 cabs.",
        "isOptimal": true,
        "consequenceText": "Perfect! Your phone is the Client (asking for nearby cabs). The central computer in the cloud is the Server (holding driver GPS data, calculating fares, and sending answers back in milliseconds).",
        "statImpact": {
          "latency": "30ms",
          "capacity": "Millions Connected",
          "risk": "Safe & Secure",
          "cost": "Standard"
        },
        "whatHappened": {
          "helped": "The central server coordinates riders and drivers safely.",
          "bottleneck": "Connecting phones directly to each other would cause massive confusion and security risks.",
          "reflectionQuestion": "Why is a central server needed when matching strangers for cab rides?"
        },
        "successSummary": "Correct! Client-Server architecture allows millions of phones to communicate through a central system."
      },
      {
        "id": "B",
        "text": "Your phone connects directly to thousands of drivers' phones using Bluetooth wires across the entire city.",
        "isOptimal": false,
        "consequenceText": "Bluetooth only works over a few meters and cannot connect across a city. Connecting thousands of phones directly causes connection chaos.",
        "statImpact": {
          "latency": "Failed",
          "capacity": "0 Drivers Found",
          "risk": "High Disconnections",
          "cost": "Unworkable"
        },
        "whatHappened": {
          "helped": "Tried to bypass the central server.",
          "bottleneck": "Direct phone-to-phone connections cannot scale across city distances.",
          "reflectionQuestion": "Can Bluetooth on your phone reach a driver 5 kilometers away?"
        }
      },
      {
        "id": "C",
        "text": "Your phone guesses where cabs are using magic without sending any messages over the internet.",
        "isOptimal": false,
        "consequenceText": "Smartphones cannot magically guess real-world locations. Without internet communication, your screen would show an empty map.",
        "statImpact": {
          "latency": "Offline",
          "capacity": "0 Cabs",
          "risk": "No Data",
          "cost": "Broken"
        },
        "whatHappened": {
          "helped": "Thought phones can know live data without internet.",
          "bottleneck": "Every live update requires network messages between client and server.",
          "reflectionQuestion": "How does live location data travel from a moving cab to your screen?"
        }
      }
    ],
    "discovery": {
      "badge": "Client–Server Architecture",
      "tagline": "Separating the user's mobile screen (Client) from the central brain (Server)",
      "simpleMeaning": "Client-Server architecture is a system where the Client (your phone or browser) makes requests, and the Server (a powerful computer in the cloud) processes the request and sends back the answer.",
      "pubgExample": "When you tap 'Confirm Booking' in Ola, your phone (Client) sends a request over 4G/5G. The Ola Server receives it, finds the nearest driver, and sends a response back with the driver's name and car number.",
      "analogy": "A restaurant: You are the Customer (Client) reading the menu and ordering food. The Kitchen is the Server cooking the food and sending it back to your table.",
      "howItWorks": [
        "1. Client (Mobile App): Shows the map, accepts your finger taps, and sends a Request.",
        "2. Internet Network: Carries the request from your phone to the cloud data center.",
        "3. Server: Checks available cabs, validates your wallet balance, and generates a Response.",
        "4. Response Delivered: Your app receives the driver's location and animates the cab on your screen."
      ],
      "whyItMatters": "It keeps heavy computing, driver verification, and billing safe in central servers rather than running everything on slow phones.",
      "visualExplanation": "[Rider Mobile: Client] ──Request: 'Find Cab'──► [Ola Cloud: Server] ──Response: 'Cab Arriving'──► [Rider Mobile]",
      "contrast": {
        "termA": "Client (Your Phone)",
        "descA": "Displays UI, captures taps, sends requests, and shows the incoming cab on the map.",
        "termB": "Server (Cloud Computer)",
        "descB": "Central brain that verifies drivers, calculates shortest routes, and manages payments."
      },
      "teacherNotes": {
        "concept": "Client, Server, Request, Response, Client-Server Architecture",
        "experience": "Students learned how mobile devices interact with remote server infrastructure.",
        "realWorld": "Ola, Uber, Zomato, and Amazon all operate on Client-Server communication over HTTPS.",
        "question": "What is your mobile phone called when it asks the Ola server for nearby cabs?"
      },
      "olaExample": "When you tap 'Confirm Booking' in Ola, your phone (Client) sends a request over 4G/5G. The Ola Server receives it, finds the nearest driver, and sends a response back with the driver's name and car number."
    },
    "knowledgeCheck": {
      "question": "In the Ola cab booking app, what is the role of the 'Server'?",
      "options": [
        {
          "id": "A",
          "text": "To receive booking requests from rider phones, check available drivers, and send back trip details.",
          "isCorrect": true,
          "explanation": "Correct! The server is the central computer that processes requests and manages game/app logic."
        },
        {
          "id": "B",
          "text": "To act as the steering wheel inside the physical cab.",
          "isCorrect": false,
          "explanation": "Incorrect. A server is a computer in a data center, not a steering wheel."
        },
        {
          "id": "C",
          "text": "To physically drive the cab to your house in place of the human driver.",
          "isCorrect": false,
          "explanation": "Incorrect. The server coordinates information; human drivers or cars do the physical driving."
        }
      ],
      "hint": "Hint: Think about which computer receives your request, finds a cab, and sends the answer back."
    }
  },
  {
    "id": 4,
    "stage": 1,
    "sno": 4,
    "topic": "Frontend, Backend, and Database",
    "concept": "Frontend, Backend, and Database",
    "title": "Level 4: The Screen, the Brain, and the Memory",
    "time": "Morning Rush — Mumbai Suburban Stations",
    "usersCount": "100,000 Morning Passengers",
    "topicHint": "3 Essential Layers of Every Software System",
    "situation": "A passenger opens Ola to book a ride from Andheri station. The app displays a beautiful map with a green 'Book Ride' button. When tapped, the system must calculate the ₹240 fare, match a driver, and permanently record the trip receipt so the driver gets paid tomorrow.",
    "problem": "Where do the visual buttons, the fare calculation logic, and the permanent trip records live?",
    "simulationType": "client_server_clerk",
    "choices": [
      {
        "id": "A",
        "text": "Frontend is the screen you touch; Backend is the brain that calculates fare; Database is the memory that saves trip records.",
        "isOptimal": true,
        "consequenceText": "Brilliant! The 3-tier structure runs all modern software. Frontend = the mobile UI; Backend = the server business logic (calculating distance and surge fare); Database = permanent disk memory saving trip receipts.",
        "statImpact": {
          "latency": "Fast & Clean",
          "capacity": "Organized 3-Tier",
          "risk": "Zero Data Loss",
          "cost": "Standard"
        },
        "whatHappened": {
          "helped": "Separated presentation, business logic, and permanent storage.",
          "bottleneck": "Mixing all three into the phone makes apps heavy, insecure, and easy to hack.",
          "reflectionQuestion": "Why should your phone not store other drivers' bank account details?"
        },
        "successSummary": "Great job! You mastered the three core layers: Frontend, Backend, and Database."
      },
      {
        "id": "B",
        "text": "Save all 100,000 passengers' bank details and passwords inside the rider's phone memory.",
        "isOptimal": false,
        "consequenceText": "Saving other people's bank details on someone's phone is a massive security disaster! Hackers could easily steal everyone's money.",
        "statImpact": {
          "latency": "Dangerous",
          "capacity": "Data Leak",
          "risk": "Total Security Breach",
          "cost": "Huge Fines"
        },
        "whatHappened": {
          "helped": "Put confidential database records onto a user device.",
          "bottleneck": "User devices cannot be trusted with central database records.",
          "reflectionQuestion": "Where should sensitive passwords and payment records be stored safely?"
        }
      },
      {
        "id": "C",
        "text": "Delete the database so the app forgets all trips, rides, and driver payments as soon as the phone closes.",
        "isOptimal": false,
        "consequenceText": "Without a database, drivers will never get paid for their hard work, and riders have no proof of past trips. Drivers will strike immediately.",
        "statImpact": {
          "latency": "Forgotten",
          "capacity": "0 Records",
          "risk": "Unpaid Drivers",
          "cost": "Company Collapse"
        },
        "whatHappened": {
          "helped": "Removed permanent storage.",
          "bottleneck": "Commercial apps must persist financial and trip data safely.",
          "reflectionQuestion": "Can a business operate if it forgets every sale the moment it closes?"
        }
      }
    ],
    "discovery": {
      "badge": "Frontend, Backend, and Database",
      "tagline": "The three essential layers of every web and mobile application",
      "simpleMeaning": "Frontend is what the user sees and touches (the mobile screen). Backend is the invisible brain running on servers (calculating fares and matching drivers). Database is the permanent digital filing cabinet that safely stores rider accounts, driver details, and trip receipts.",
      "pubgExample": "In Ola: Frontend = The map, buttons, and car icons on your phone. Backend = The server algorithms calculating traffic and assigning the driver. Database = The storage storing your phone number, trip history, and wallet balance.",
      "analogy": "A restaurant: Frontend is the dining room and menu. Backend is the chefs cooking in the kitchen. Database is the refrigerator and pantry storing the ingredients.",
      "howItWorks": [
        "1. Frontend (UI): Rider enters pickup and drop points and taps 'Confirm'.",
        "2. Backend (Server): Computes route distance, adds surge multiplier, and locates nearest driver.",
        "3. Database (Storage): Saves Trip ID #98214 with fare ₹240 and timestamps to permanent disk.",
        "4. All in Sync: The backend sends confirmation to both rider and driver frontends."
      ],
      "whyItMatters": "Keeping these three layers separate makes apps secure, fast, and easy to maintain by different engineering teams.",
      "visualExplanation": "[Frontend: Mobile App] ──Requests──► [Backend: Cloud Server] ──Saves──► [Database: Storage Vault]",
      "contrast": {
        "termA": "Frontend",
        "descA": "Visual interface on the user's phone; collects inputs and displays maps and trip status.",
        "termB": "Backend & Database",
        "descB": "Server brain that calculates business rules, and permanent database that safeguards records."
      },
      "teacherNotes": {
        "concept": "Frontend, Backend, Database, 3-Tier Architecture, Client-Side vs Server-Side",
        "experience": "Students understood the clear division between UI presentation, server logic, and persistent storage.",
        "realWorld": "Ola uses React Native / Android Native (Frontend), Java / Go microservices (Backend), and MySQL / DynamoDB (Database).",
        "question": "Which layer is responsible for permanently remembering how much money is in your Ola Money wallet?"
      },
      "olaExample": "In Ola: Frontend = The map, buttons, and car icons on your phone. Backend = The server algorithms calculating traffic and assigning the driver. Database = The storage storing your phone number, trip history, and wallet balance."
    },
    "knowledgeCheck": {
      "question": "When you book an Ola cab and receive a digital receipt for ₹250, which layer is responsible for permanently saving that receipt?",
      "options": [
        {
          "id": "A",
          "text": "The Database (the permanent digital filing cabinet).",
          "isCorrect": true,
          "explanation": "Correct! The database safely and permanently stores trip history, payments, and account balances."
        },
        {
          "id": "B",
          "text": "The glass screen of your smartphone.",
          "isCorrect": false,
          "explanation": "Incorrect. The glass screen is hardware for touching, not permanent storage."
        },
        {
          "id": "C",
          "text": "The car tires of the cab.",
          "isCorrect": false,
          "explanation": "Incorrect. Car tires are vehicle parts, not digital data storage."
        }
      ],
      "hint": "Hint: Think about which component acts as the permanent digital filing cabinet that remembers records."
    }
  },
  {
    "id": 5,
    "stage": 1,
    "sno": 5,
    "topic": "Basic System Architecture",
    "concept": "Basic System Architecture",
    "title": "Level 5: Connecting the Full Ola Dispatch System",
    "time": "Evening Peak — Hyderabad Cyber Towers",
    "usersCount": "Full City Deployment: 50,000 Riders & 8,000 Cabs",
    "topicHint": "Connecting Clients, Gateway, Dispatchers, and Data",
    "situation": "You are connecting all the pieces of Ola for an entire city. Rider phones, driver phones, API security gateways, dispatch servers, and database storage vaults must all communicate smoothly. An intern asks: \"Can we just connect every rider phone directly to our raw financial database without any security server in the middle?\"",
    "problem": "Why must every component be organized into a proper system architecture instead of letting phones touch the database directly?",
    "simulationType": "ola_system_blueprint",
    "choices": [
      {
        "id": "A",
        "text": "Organize traffic through an API Gateway and Backend Servers so phones never touch raw databases directly.",
        "isOptimal": true,
        "consequenceText": "Masterful architecture! By placing an API Gateway and Backend servers between phones and databases, requests are checked for security and balanced evenly. Sensitive databases remain completely protected!",
        "statImpact": {
          "latency": "20ms",
          "capacity": "50,000 Smooth",
          "risk": "High Security",
          "cost": "Well-Architected"
        },
        "whatHappened": {
          "helped": "Followed layered system architecture with security boundaries.",
          "bottleneck": "Allowing direct client access to databases exposes sensitive tables to attacks and corruption.",
          "reflectionQuestion": "Why does a bank have teller counters instead of letting customers walk directly into the money vault?"
        },
        "successSummary": "Brilliant! You connected the complete basic system architecture with secure layers."
      },
      {
        "id": "B",
        "text": "Let all 50,000 rider phones connect directly to the raw database files and edit fares as they wish.",
        "isOptimal": false,
        "consequenceText": "Dishonest riders edit their fare from ₹500 to ₹0, and delete other riders' accounts. The database crashes within 3 minutes.",
        "statImpact": {
          "latency": "Corrupted",
          "capacity": "Cheaters Everywhere",
          "risk": "Total Bankruptcy",
          "cost": "Disaster"
        },
        "whatHappened": {
          "helped": "Removed middle security servers to save money.",
          "bottleneck": "Unfiltered direct database access destroys data integrity.",
          "reflectionQuestion": "What happens if any random user can edit database numbers directly?"
        }
      },
      {
        "id": "C",
        "text": "Disconnect all servers and make drivers call every phone number in the phonebook one by one.",
        "isOptimal": false,
        "consequenceText": "Calling thousands of numbers manually takes days. Passengers give up and walk, and the cab company goes bankrupt.",
        "statImpact": {
          "latency": "Hours Delay",
          "capacity": "Manual Failure",
          "risk": "Zero Modern Tech",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Abandoned automated system architecture.",
          "bottleneck": "Modern scale requires automated digital systems.",
          "reflectionQuestion": "Can telephone operators manually coordinate 50,000 live rides simultaneously?"
        }
      }
    ],
    "discovery": {
      "badge": "Basic System Architecture",
      "tagline": "Connecting clients, gateways, application servers, and databases into a safe flow",
      "simpleMeaning": "Basic System Architecture is the blueprint that organizes how software pieces fit together. Riders connect through an API Gateway, which sends requests to Application Servers (Dispatch, Payments, Maps), which then talk to secure Databases.",
      "pubgExample": "When an Ola rider requests a ride: (1) App sends request -> (2) API Gateway checks login -> (3) Dispatch Server matches driver -> (4) Database records trip -> (5) Confirmation sent back to rider and driver.",
      "analogy": "An airport: Passengers don't walk directly onto the runway. They pass through the Entrance -> Security Check -> Boarding Gate -> Airplane. Each step has a clear job.",
      "howItWorks": [
        "1. User Layer: Rider and Driver mobile apps running on smartphones.",
        "2. Gateway Layer: API Gateway verifies security tokens and routes requests.",
        "3. Service Layer: Dispatch, Fare Calculation, and Tracking services process trip logic.",
        "4. Data Layer: Databases and caches store persistent records securely."
      ],
      "whyItMatters": "Protects company data, stops fraud, prevents crashes, and ensures riders and drivers get accurate service in seconds.",
      "visualExplanation": "[Rider & Driver Apps] ──► [API Gateway] ──► [Dispatch Backend] ──► [Secure Database]",
      "contrast": {
        "termA": "Layered Architecture",
        "descA": "Organized layers protect databases, balance traffic, and allow independent scaling.",
        "termB": "Direct Unprotected Access",
        "descB": "Phones talk directly to databases; leads to security hacks, data theft, and server crashes."
      },
      "teacherNotes": {
        "concept": "System Architecture, Layered Design, API Gateway, Tier Separation, Security Boundaries",
        "experience": "Students learned how all the individual components connect into an end-to-end architecture.",
        "realWorld": "Every modern mobility platform (Ola, Uber, Lyft) uses multi-layered service architecture.",
        "question": "What is the job of the API Gateway sitting between rider phones and backend servers?"
      },
      "olaExample": "When an Ola rider requests a ride: (1) App sends request -> (2) API Gateway checks login -> (3) Dispatch Server matches driver -> (4) Database records trip -> (5) Confirmation sent back to rider and driver."
    },
    "knowledgeCheck": {
      "question": "Why should Ola never allow rider phones to connect directly to the raw financial database?",
      "options": [
        {
          "id": "A",
          "text": "Because riders could maliciously change fares or steal private bank details; backend servers must check security first.",
          "isCorrect": true,
          "explanation": "Correct! Backend servers act as a secure referee to validate all actions before touching database records."
        },
        {
          "id": "B",
          "text": "Because databases can only be touched by drivers wearing yellow uniforms.",
          "isCorrect": false,
          "explanation": "Incorrect. Database access is controlled by software security protocols, not driver uniforms."
        },
        {
          "id": "C",
          "text": "Because rider phones will physically melt if they touch database cables.",
          "isCorrect": false,
          "explanation": "Incorrect. Phone hardware does not melt; the problem is software data security and fraud."
        }
      ],
      "hint": "Hint: Think about what could happen if anyone could edit their own ride balance without a server checking first."
    }
  },
  {
    "id": 6,
    "stage": 2,
    "sno": 6,
    "topic": "Networking Fundamentals – IP Addresses, DNS, and Ports",
    "concept": "Networking Fundamentals – IP Addresses, DNS, and Ports",
    "title": "Level 6: Finding the Ola Cloud Server in Bangalore",
    "time": "Morning Commute — Koramangala, Bangalore",
    "usersCount": "Rider Phone Locating Ola Cloud",
    "topicHint": "IP Addresses (Street Address), DNS (Phonebook), Ports (Apartment Number)",
    "situation": "Your Ola app needs to connect to the Ola server over the internet. The server has an IP address like '142.250.190.46'. But humans cannot remember long strings of numbers for every website and service! When you tap Book, your app contacts 'api.olacabs.com'.",
    "problem": "How does your phone convert the friendly name 'api.olacabs.com' into the real computer IP address?",
    "simulationType": "networking_dns_ports",
    "choices": [
      {
        "id": "A",
        "text": "The phone asks DNS (the internet's phonebook), which translates 'api.olacabs.com' into the server's exact IP address.",
        "isOptimal": true,
        "consequenceText": "Spot on! DNS (Domain Name System) acts like your phone's contact list. You type 'api.olacabs.com', and DNS immediately tells your phone the exact computer IP address and Port 443 to connect to!",
        "statImpact": {
          "latency": "5ms DNS",
          "capacity": "Instant Lookups",
          "risk": "Zero Connection Failures",
          "cost": "Standard"
        },
        "whatHappened": {
          "helped": "Used DNS to resolve domain names into numerical IP addresses.",
          "bottleneck": "Without DNS, users would have to memorize 12-digit number codes for every service.",
          "reflectionQuestion": "Why do we save friends' names in our phone instead of memorizing their 10-digit phone numbers?"
        },
        "successSummary": "Awesome! You understood IP Addresses, DNS lookups, and Ports."
      },
      {
        "id": "B",
        "text": "Force all riders to memorize long 12-digit IP numbers and type them into their app every morning.",
        "isOptimal": false,
        "consequenceText": "Nobody wants to memorize '142.250.190.46:443' just to call a cab! Riders will make typos, get connection errors, and stop using Ola.",
        "statImpact": {
          "latency": "Slow & Frustrating",
          "capacity": "Typo Errors",
          "risk": "Lost Customers",
          "cost": "High Support Costs"
        },
        "whatHappened": {
          "helped": "Expected users to act like network routers.",
          "bottleneck": "Humans prefer memorable text names rather than raw binary or decimal numbers.",
          "reflectionQuestion": "Would you use Google if you had to type 172.217.16.206 into the browser every time?"
        }
      },
      {
        "id": "C",
        "text": "The phone transmits radio signals into outer space hoping an alien satellite forwards it to Ola.",
        "isOptimal": false,
        "consequenceText": "Satellites in outer space do not route city cab requests. Signals get lost, and riders are left waiting endlessly.",
        "statImpact": {
          "latency": "Lost in Space",
          "capacity": "0 Connection",
          "risk": "100% Failure",
          "cost": "Broken"
        },
        "whatHappened": {
          "helped": "Ignored internet networking standards.",
          "bottleneck": "Internet traffic follows organized IP and DNS routing protocols.",
          "reflectionQuestion": "How does internet traffic travel reliably through local network cables and towers?"
        }
      }
    ],
    "discovery": {
      "badge": "IP Addresses, DNS, and Ports",
      "tagline": "How computers find each other across the worldwide internet",
      "simpleMeaning": "An IP Address is like a house's street address (where the computer lives). DNS (Domain Name System) is the internet's phonebook that translates names like 'olacabs.com' into IP addresses. A Port number is like an apartment door number, telling the computer which specific program to deliver the message to.",
      "pubgExample": "When you tap 'Book Cab', your phone asks DNS: \"Where is api.olacabs.com?\" DNS answers: \"Go to IP 142.250.190.46 at Port 443.\" Your phone connects directly in 5 milliseconds.",
      "analogy": "Sending a parcel: The IP Address is the building street address. The DNS is looking up the person's name in a directory. The Port number is the specific Flat Number (e.g. Flat 443) inside the building.",
      "howItWorks": [
        "1. Domain Name: User app asks for 'api.olacabs.com'.",
        "2. DNS Lookup: Internet directory returns IP address '142.250.190.46'.",
        "3. Port Selection: Connects to Port 443 (the standard secure web door).",
        "4. Connection Established: Rider phone and Ola dispatch server begin talking."
      ],
      "whyItMatters": "Without IP addresses, DNS, and ports, computers on the internet would have no way to find each other or route messages.",
      "visualExplanation": "[Phone: 'api.olacabs.com'] ──► [DNS Server] ──Returns IP──► [Connects to IP: 142.250.190.46 : Port 443]",
      "contrast": {
        "termA": "DNS (Domain Name System)",
        "descA": "Human-friendly names like 'olacabs.com'; automatically looked up in milliseconds.",
        "termB": "IP Address & Port",
        "descB": "Machine-readable numerical destination (IP: 142.250.190.46) and door number (Port: 443)."
      },
      "teacherNotes": {
        "concept": "IP Address (IPv4/IPv6), DNS Resolution, Port Numbers, TCP/IP",
        "experience": "Students learned how domain names resolve to IP addresses and how ports direct traffic to specific services.",
        "realWorld": "Every network call in Ola, Google, and Netflix relies on DNS resolvers (like Cloudflare 1.1.1.1 and Google 8.8.8.8).",
        "question": "What is the internet phonebook called that converts domain names into IP addresses?"
      },
      "olaExample": "When you tap 'Book Cab', your phone asks DNS: \"Where is api.olacabs.com?\" DNS answers: \"Go to IP 142.250.190.46 at Port 443.\" Your phone connects directly in 5 milliseconds."
    },
    "knowledgeCheck": {
      "question": "Why does your phone use DNS when opening the Ola app instead of connecting directly by raw numbers?",
      "options": [
        {
          "id": "A",
          "text": "DNS translates friendly names like 'api.olacabs.com' into the server's exact IP address so humans don't have to memorize numbers.",
          "isCorrect": true,
          "explanation": "Correct! DNS translates names into IP addresses automatically so we never have to type raw numbers."
        },
        {
          "id": "B",
          "text": "DNS turns the cab's headlights on during night rides.",
          "isCorrect": false,
          "explanation": "Incorrect. DNS is an internet network service, not a physical car component."
        },
        {
          "id": "C",
          "text": "DNS gives the driver a 50% discount on road toll taxes.",
          "isCorrect": false,
          "explanation": "Incorrect. DNS handles domain name lookups, not highway toll pricing."
        }
      ],
      "hint": "Hint: Think about why you use a contact list instead of memorizing 10-digit phone numbers for all your friends."
    }
  },
  {
    "id": 7,
    "stage": 2,
    "sno": 7,
    "topic": "HTTP vs. HTTPS",
    "concept": "HTTP vs. HTTPS",
    "title": "Level 7: Protecting Credit Cards & Ola Money with Encryption",
    "time": "Evening Payment — Paying ₹450 Ride Fare",
    "usersCount": "1,000,000 Daily Online Payments",
    "topicHint": "Plain Text (HTTP) vs Encrypted Security (HTTPS)",
    "situation": "You reach your destination and pay ₹450 using your credit card or Ola Money wallet. If the app uses unencrypted HTTP, your card number and CVV are sent over open Wi-Fi like a clear postcard. A hacker sitting at a nearby tea stall with a laptop could easily read your bank details!",
    "problem": "How should Ola send your payment details over public networks without anyone spying on them?",
    "simulationType": "protocols_transport",
    "choices": [
      {
        "id": "A",
        "text": "Use HTTPS (encrypted): scrambles your payment details into secret code so only the Ola server can read it.",
        "isOptimal": true,
        "consequenceText": "Brilliant security! The 'S' in HTTPS stands for Secure (using SSL/TLS encryption). Even if someone intercepts your network packets, all they see is scrambled gibberish! Your card details and wallet remain 100% safe.",
        "statImpact": {
          "latency": "Encrypted & Fast",
          "capacity": "Safe Payments",
          "risk": "Zero Card Thefts",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Enforced end-to-end TLS encryption on all mobile communications.",
          "bottleneck": "Unencrypted HTTP leaves financial data vulnerable to packet sniffing and theft.",
          "reflectionQuestion": "Why would you send a secret letter in a sealed steel locker instead of writing it on a transparent postcard?"
        },
        "successSummary": "Success! You used HTTPS encryption to safeguard passenger credit cards and wallet balances."
      },
      {
        "id": "B",
        "text": "Use unencrypted HTTP and send raw credit card numbers in plain readable text across public Wi-Fi.",
        "isOptimal": false,
        "consequenceText": "Hackers easily intercept the plain text. Thousands of riders have their bank accounts emptied, and Ola faces devastating legal lawsuits.",
        "statImpact": {
          "latency": "Unsecure",
          "capacity": "Stolen Cards",
          "risk": "Catastrophic Breach",
          "cost": "Bankruptcy & Fines"
        },
        "whatHappened": {
          "helped": "Saved a tiny fraction of encryption CPU time.",
          "bottleneck": "Plain text transmission over public networks is an unforgivable security breach.",
          "reflectionQuestion": "Would you shout your bank PIN number out loud in a crowded train station?"
        }
      },
      {
        "id": "C",
        "text": "Stop taking online payments completely and force all riders to pay in gold coins.",
        "isOptimal": false,
        "consequenceText": "Nobody carries gold coins to take an auto rickshaw. Riders cannot pay, and the business collapses immediately.",
        "statImpact": {
          "latency": "Ancient",
          "capacity": "Zero Modern Riders",
          "risk": "Unusable",
          "cost": "Lost Business"
        },
        "whatHappened": {
          "helped": "Avoided modern digital security.",
          "bottleneck": "Modern commerce requires secure digital payment infrastructure.",
          "reflectionQuestion": "How do modern apps accept digital payments securely?"
        }
      }
    ],
    "discovery": {
      "badge": "HTTP vs. HTTPS",
      "tagline": "Protecting user data and passwords with end-to-end encryption",
      "simpleMeaning": "HTTP sends messages in plain readable text. Anyone tapping into the Wi-Fi can read it. HTTPS adds encryption (SSL/TLS), locking your message inside a secret digital code that only your phone and the Ola server have the key to open.",
      "pubgExample": "When you enter your CVV or Ola Money PIN, HTTPS encrypts 'PIN: 4892' into a scrambled string like 'x9#kL!982a'. Even if a hacker intercepts it, they cannot read your PIN.",
      "analogy": "HTTP is like sending a postcard through the mail where any postal worker can read your message. HTTPS is like locking your letter in a tamper-proof titanium safe before mailing it.",
      "howItWorks": [
        "1. TLS Handshake: Phone and Server verify security certificates and agree on a secret encryption key.",
        "2. Encryption on Phone: Rider's payment details are locked using the secret key.",
        "3. Safe Transit: Scrambled data travels safely over mobile networks and public Wi-Fi.",
        "4. Decryption on Server: Only the authentic Ola server unlocks the data and processes the payment."
      ],
      "whyItMatters": "Protects passengers from identity theft, card fraud, and stops malicious actors from tampering with ride prices.",
      "visualExplanation": "HTTP:  [Card: 4521...] ──Plain Text Over Wi-Fi──► Hacker can steal!\nHTTPS: [Card: 4521...] ──Scrambled Secret Code──► 100% Protected!",
      "contrast": {
        "termA": "HTTPS (Secure)",
        "descA": "Encrypted with SSL/TLS; scrambles data so eavesdroppers see only meaningless code.",
        "termB": "HTTP (Unencrypted)",
        "descB": "Sent in open plain text; vulnerable to snooping, man-in-the-middle attacks, and theft."
      },
      "teacherNotes": {
        "concept": "HTTP, HTTPS, SSL/TLS, Symmetric & Asymmetric Encryption, Certificates",
        "experience": "Students learned the critical security difference between plain-text HTTP and encrypted HTTPS.",
        "realWorld": "Google, Ola, Apple, and banks reject all plain HTTP connections and require HTTPS everywhere.",
        "question": "What does the letter 'S' in HTTPS stand for?"
      },
      "olaExample": "When you enter your CVV or Ola Money PIN, HTTPS encrypts 'PIN: 4892' into a scrambled string like 'x9#kL!982a'. Even if a hacker intercepts it, they cannot read your PIN."
    },
    "knowledgeCheck": {
      "question": "What does HTTPS do to protect your payment information when booking a ride on Ola?",
      "options": [
        {
          "id": "A",
          "text": "It encrypts (scrambles) the payment data so eavesdroppers on public Wi-Fi cannot read it.",
          "isCorrect": true,
          "explanation": "Correct! HTTPS encrypts all network traffic, ensuring passwords and credit cards remain completely private."
        },
        {
          "id": "B",
          "text": "It washes the cab so it looks clean upon arrival.",
          "isCorrect": false,
          "explanation": "Incorrect. HTTPS is an internet security protocol, not a car washing service."
        },
        {
          "id": "C",
          "text": "It prevents the cab from getting stuck in red traffic lights.",
          "isCorrect": false,
          "explanation": "Incorrect. HTTPS protects digital data; it cannot control physical street traffic lights."
        }
      ],
      "hint": "Hint: Think about what happens when you lock a message inside a secret code that only the receiver can read."
    }
  },
  {
    "id": 8,
    "stage": 2,
    "sno": 8,
    "topic": "APIs and JSON",
    "concept": "APIs and JSON",
    "title": "Level 8: The Universal Language Between Phone and Server",
    "time": "Afternoon Booking — Indiranagar, Bangalore",
    "usersCount": "Rider Phone Sending Ride Request",
    "topicHint": "APIs (The Messenger) and JSON (The Data Format)",
    "situation": "Your Ola phone app runs on Android (written in Java/Kotlin), while the Ola cloud server runs on Linux (written in Go/Python). They are two totally different computer programs! When your phone requests a cab, how do they understand each other without misunderstanding words?",
    "problem": "What standard messenger and data format allows different devices and servers to talk cleanly?",
    "simulationType": "api_contracts_scanners",
    "choices": [
      {
        "id": "A",
        "text": "Use an API to define the request, and JSON as the simple text format (key: value) both computers understand.",
        "isOptimal": true,
        "consequenceText": "Perfect! An API (Application Programming Interface) is the menu of allowed actions (like /book-ride). JSON (JavaScript Object Notation) is the clean, human-readable format both phones and servers understand: {\"rider\": \"Priya\", \"cab\": \"Mini\", \"fare\": 240}.",
        "statImpact": {
          "latency": "10ms",
          "capacity": "Universal Standard",
          "risk": "Zero Misunderstandings",
          "cost": "Efficient"
        },
        "whatHappened": {
          "helped": "Adopted standard APIs and lightweight JSON data interchange.",
          "bottleneck": "Without standard formats, different programming languages cannot exchange structured data.",
          "reflectionQuestion": "Why do pilots and airport air traffic controllers all speak standard English?"
        },
        "successSummary": "Great work! You connected mobile apps and cloud backends using APIs and JSON."
      },
      {
        "id": "B",
        "text": "Have the phone send random audio voice memos to the server and guess what the rider wants.",
        "isOptimal": false,
        "consequenceText": "Processing voice memos for millions of rides is slow, prone to background noise errors, and overloads server speech models.",
        "statImpact": {
          "latency": "30,000ms Delay",
          "capacity": "Speech Recognition Errors",
          "risk": "Failed Bookings",
          "cost": "Massive Compute"
        },
        "whatHappened": {
          "helped": "Attempted to use informal human voice for machine-to-machine communication.",
          "bottleneck": "Computers need structured, predictable data structures to execute transactions instantly.",
          "reflectionQuestion": "Why do digital forms have labeled fields rather than blank voice notes?"
        }
      },
      {
        "id": "C",
        "text": "Send a handwritten postcard by physical mail every time someone wants to hail an auto.",
        "isOptimal": false,
        "consequenceText": "By the time the physical postcard arrives 3 days later, the passenger has already walked to their destination.",
        "statImpact": {
          "latency": "3 Days",
          "capacity": "0 Rides Today",
          "risk": "Absurd",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Used physical mail for digital bookings.",
          "bottleneck": "Online ride-hailing requires sub-second digital API messaging.",
          "reflectionQuestion": "How fast should an online ride request take?"
        }
      }
    ],
    "discovery": {
      "badge": "APIs and JSON",
      "tagline": "The digital messenger and data language connecting apps across the world",
      "simpleMeaning": "An API (Application Programming Interface) is like a restaurant waiter that takes your request to the kitchen and brings back the answer. JSON is the simple text language they use to write the order with clear labels and values.",
      "pubgExample": "When you tap 'Book Cab', your app calls the Ola Booking API with this JSON message: {\"pickup\": \"MG Road\", \"drop\": \"Airport\", \"cab_type\": \"Prime\"}. The server replies with: {\"status\": \"confirmed\", \"driver\": \"Ramesh\", \"cab_no\": \"KA01AB1234\"}.",
      "analogy": "Filling out an official form: An API is the submission counter window. JSON is the neatly labeled form with boxes like 'Name: John', 'Destination: Airport', 'Passengers: 2'.",
      "howItWorks": [
        "1. API Endpoint: A dedicated web address like `POST /api/v1/rides/book`.",
        "2. JSON Request Payload: Clean text formatted in curly braces with key-value pairs.",
        "3. Server Processing: The backend server reads the JSON fields in 1 millisecond.",
        "4. JSON Response: The server returns structured status and driver information."
      ],
      "whyItMatters": "Allows iPhones, Android devices, web browsers, and cloud servers built by different companies to exchange information flawlessly.",
      "visualExplanation": "[Rider Phone]\n       │  Sends JSON: {\"action\": \"book\", \"cab\": \"Mini\"}\n       ▼\n[Ola API Server] ──► Validates in 2ms and Returns JSON: {\"status\": \"confirmed\"}",
      "contrast": {
        "termA": "API (The Messenger)",
        "descA": "The defined set of rules and addresses through which apps ask servers for services.",
        "termB": "JSON (The Language)",
        "descB": "Simple, lightweight text format with key-value pairs: {\"driver\": \"Ramesh\", \"eta\": 3}."
      },
      "teacherNotes": {
        "concept": "APIs, JSON, Key-Value Pairs, Payloads, Endpoints, Serialization",
        "experience": "Students learned how frontends and backends communicate using structured JSON over APIs.",
        "realWorld": "Google Maps, Ola, Stripe, and WhatsApp communicate across billions of devices using JSON APIs.",
        "question": "What is the simple text format called that uses curly braces and key-value pairs?"
      },
      "olaExample": "When you tap 'Book Cab', your app calls the Ola Booking API with this JSON message: {\"pickup\": \"MG Road\", \"drop\": \"Airport\", \"cab_type\": \"Prime\"}. The server replies with: {\"status\": \"confirmed\", \"driver\": \"Ramesh\", \"cab_no\": \"KA01AB1234\"}."
    },
    "knowledgeCheck": {
      "question": "What is JSON used for when your phone talks to the Ola cloud server?",
      "options": [
        {
          "id": "A",
          "text": "It is a simple text format with key-value pairs that lets both phone and server understand ride details easily.",
          "isCorrect": true,
          "explanation": "Correct! JSON organizes data with clean labels (like \"fare\": 250) so any computer can read it instantly."
        },
        {
          "id": "B",
          "text": "It is a physical battery charger placed in the back seat of the cab.",
          "isCorrect": false,
          "explanation": "Incorrect. JSON is a software data format, not hardware in a car."
        },
        {
          "id": "C",
          "text": "It is the brand name of the gasoline used by the driver.",
          "isCorrect": false,
          "explanation": "Incorrect. JSON is a computer science data exchange standard, not vehicle fuel."
        }
      ],
      "hint": "Hint: Think about structured text with labels like {\"name\": \"Rahul\", \"rating\": 4.8}."
    }
  },
  {
    "id": 9,
    "stage": 2,
    "sno": 9,
    "topic": "API Design – REST and RESTful Architecture",
    "concept": "API Design – REST and RESTful Architecture",
    "title": "Level 9: Standard Rules for Booking, Tracking, and Cancelling",
    "time": "Evening Architecture Review — Ola HQ",
    "usersCount": "500 Software Developers Building Ola Features",
    "topicHint": "Standard HTTP Methods (GET, POST, PUT, DELETE)",
    "situation": "Ola has hundreds of developers building features for riders, drivers, corporate passes, and rentals. If every developer created random, chaotic names for their buttons (like /doTheCabThing, /fetchCarNow, /cancelItQuick), nobody would understand how the system works and bugs would appear everywhere.",
    "problem": "How do professional engineering teams organize APIs using standard, predictable rules?",
    "simulationType": "api_contracts_scanners",
    "choices": [
      {
        "id": "A",
        "text": "Use REST rules with standard HTTP verbs: GET (fetch rides), POST (book ride), PUT (update location), DELETE (cancel ride).",
        "isOptimal": true,
        "consequenceText": "Brilliant architecture! REST (Representational State Transfer) uses standard, intuitive HTTP verbs: GET to view, POST to create a booking, PUT/PATCH to update driver GPS, and DELETE to cancel a ride. Every developer instantly understands the system!",
        "statImpact": {
          "latency": "Clean & Predictable",
          "capacity": "Easy to Maintain",
          "risk": "Zero Confusion",
          "cost": "Low Bug Count"
        },
        "whatHappened": {
          "helped": "Followed industry-standard RESTful conventions.",
          "bottleneck": "Inventing ad-hoc, inconsistent endpoints leads to spaghetti architecture and endless integration bugs.",
          "reflectionQuestion": "Why do road signs use standard shapes (octagons for STOP) across the entire country?"
        },
        "successSummary": "Masterclass! You used RESTful API design principles with standard HTTP methods."
      },
      {
        "id": "B",
        "text": "Let every developer invent random confusing names like /pleaseGiveMeACabBro and /cancelPleaseNoCharge.",
        "isOptimal": false,
        "consequenceText": "Inconsistent naming creates massive confusion. When the mobile team tries to connect to the backend, features break and bookings fail.",
        "statImpact": {
          "latency": "Chaotic",
          "capacity": "Broken Integrations",
          "risk": "High Bugs",
          "cost": "Wasted Engineering"
        },
        "whatHappened": {
          "helped": "Avoided setting team conventions.",
          "bottleneck": "Lack of standardized API contracts destroys team velocity and system reliability.",
          "reflectionQuestion": "What happens if every player in a football team makes up their own rules during a match?"
        }
      },
      {
        "id": "C",
        "text": "Never create any APIs; force all riders to walk to the Ola headquarters in Bangalore to book a ride.",
        "isOptimal": false,
        "consequenceText": "Nobody will travel 500 kilometers to an office building just to book a 10-minute cab ride across town. The company fails immediately.",
        "statImpact": {
          "latency": "Unusable",
          "capacity": "0 Rides",
          "risk": "Company Dead",
          "cost": "Total Failure"
        },
        "whatHappened": {
          "helped": "Abandoned digital APIs completely.",
          "bottleneck": "Digital businesses require remote, standardized API interfaces.",
          "reflectionQuestion": "Why are remote web APIs essential for smartphone apps?"
        }
      }
    ],
    "discovery": {
      "badge": "RESTful API Design",
      "tagline": "Standardized, intuitive rules for interacting with web resources",
      "simpleMeaning": "REST is a set of clean rules for designing APIs. It treats things in the app (like Rides, Drivers, and Receipts) as 'resources' and uses standard action words (HTTP Verbs): GET (to see), POST (to create), PUT/PATCH (to update), and DELETE (to remove).",
      "pubgExample": "In Ola: `GET /rides/123` (view ride status), `POST /rides` (book a new ride), `PUT /rides/123/location` (update driver GPS), `DELETE /rides/123` (cancel the ride). Simple, clean, and predictable!",
      "analogy": "Standard library operations: You can BROWSE books (GET), DONATE a new book (POST), RENEW a book (PUT), or RETURN/REMOVE a book (DELETE).",
      "howItWorks": [
        "1. Resources as Nouns: Use plural nouns for resources (e.g., `/cabs`, `/riders`, `/rides`).",
        "2. Standard Verbs: Use GET to read, POST to create, PUT to update, DELETE to cancel.",
        "3. Stateless: Each request contains all information needed to process it.",
        "4. Clear Status Codes: Server replies with 200 OK (Success), 201 Created (Booked), 404 (Not Found)."
      ],
      "whyItMatters": "Makes APIs easy for hundreds of engineers and external partners (like Google Maps or payment gateways) to integrate seamlessly.",
      "visualExplanation": "POST   /rides      ──► Creates New Cab Booking (201 Created)\nGET    /rides/123  ──► Fetches Live Driver Location (200 OK)\nDELETE /rides/123  ──► Cancels Booking Safely (200 OK)",
      "contrast": {
        "termA": "RESTful API",
        "descA": "Clean nouns and standard verbs (`POST /rides`, `DELETE /rides/123`); predictable and clear.",
        "termB": "Unstructured API",
        "descB": "Messy, ad-hoc URLs (`/makeRideHappenNow`, `/removeTheCar`); difficult to maintain and debug."
      },
      "teacherNotes": {
        "concept": "REST, HTTP Verbs (GET, POST, PUT, DELETE), Statelessness, HTTP Status Codes (200, 201, 404, 500)",
        "experience": "Students learned how standardized REST conventions organize complex enterprise APIs.",
        "realWorld": "Ola, Uber, GitHub, and Twitter provide RESTful APIs powering thousands of third-party apps.",
        "question": "Which HTTP verb is used in REST to book a brand new cab ride?"
      },
      "olaExample": "In Ola: `GET /rides/123` (view ride status), `POST /rides` (book a new ride), `PUT /rides/123/location` (update driver GPS), `DELETE /rides/123` (cancel the ride). Simple, clean, and predictable!"
    },
    "knowledgeCheck": {
      "question": "In a RESTful API for Ola, which HTTP method should be used when a rider taps 'Book Ride' to create a new booking?",
      "options": [
        {
          "id": "A",
          "text": "POST (used to create a new resource, like creating a new ride booking).",
          "isCorrect": true,
          "explanation": "Correct! In REST architecture, POST is the standard method used to create new resources."
        },
        {
          "id": "B",
          "text": "DELETE (used to delete all records from the server).",
          "isCorrect": false,
          "explanation": "Incorrect. DELETE cancels or removes resources, it does not create a new booking."
        },
        {
          "id": "C",
          "text": "PAINT (used to repaint the cab yellow).",
          "isCorrect": false,
          "explanation": "Incorrect. PAINT is not an HTTP method."
        }
      ],
      "hint": "Hint: Think about which standard HTTP verb is used to create or submit brand new data (POST)."
    }
  },
  {
    "id": 10,
    "stage": 3,
    "sno": 10,
    "topic": "Database Fundamentals – SQL vs. NoSQL",
    "concept": "Database Fundamentals – SQL vs. NoSQL",
    "title": "Level 10: Rider Wallet Balances vs. Live Driver GPS Telemetry",
    "time": "Evening Peak — 10 Million Active Users",
    "usersCount": "10,000,000 Daily Rides & GPS Pings",
    "topicHint": "Structured Tables (SQL) vs. Rapid Flexible Streams (NoSQL)",
    "situation": "Ola needs to store two very different kinds of information. First, rider wallet balances and bank transactions that must always be 100% strictly accurate without losing a single rupee. Second, live GPS coordinates sent by 500,000 moving drivers every 3 seconds, generating billions of temporary location points a day.",
    "problem": "How should Ola choose between a structured SQL database and a flexible high-speed NoSQL database?",
    "simulationType": "database_polyglot",
    "choices": [
      {
        "id": "A",
        "text": "Use SQL for structured wallet balances and payments, and NoSQL for rapid, high-speed driver GPS streams.",
        "isOptimal": true,
        "consequenceText": "Spot on! SQL guarantees financial accuracy in organized tables where every rupee is accounted for. NoSQL handles millions of rapid GPS coordinate streams per second without locking up tables or slowing down the dispatch system!",
        "statImpact": {
          "latency": "30ms",
          "capacity": "10M Rides Safe",
          "risk": "Zero Data Loss",
          "cost": "Optimized"
        },
        "whatHappened": {
          "helped": "Matched the right database tool to the right data workload.",
          "bottleneck": "Using the wrong database either corrupts financial balances or locks up under GPS streams.",
          "reflectionQuestion": "Why do money balances need strict tables while live GPS points prefer write speed?"
        },
        "successSummary": "Perfect choice! You used SQL for structured payments and NoSQL for rapid GPS streams."
      },
      {
        "id": "B",
        "text": "Store all rider bank details and wallet money in an unorganized text file with no safety checks.",
        "isOptimal": false,
        "consequenceText": "Unorganized text files have no transaction safety. When multiple rides finish at once, balances get corrupted, riders lose their money, and complaints flood support.",
        "statImpact": {
          "latency": "Corrupted",
          "capacity": "Lost Money",
          "risk": "Financial Disaster",
          "cost": "Massive Refunds"
        },
        "whatHappened": {
          "helped": "Attempted to use the simplest possible file.",
          "bottleneck": "Flat files cannot safely handle concurrent financial writes.",
          "reflectionQuestion": "What happens if two payments update a text file at the exact same millisecond?"
        }
      },
      {
        "id": "C",
        "text": "Force billions of temporary GPS points into rigid financial tables, locking the entire database.",
        "isOptimal": false,
        "consequenceText": "Rigid relational tables lock up when flooded with billions of GPS writes. The entire Ola system freezes, and nobody can book a ride.",
        "statImpact": {
          "latency": "5,000ms Lag",
          "capacity": "Database Locked",
          "risk": "System Freeze",
          "cost": "High CPU Waste"
        },
        "whatHappened": {
          "helped": "Tried to force all data into one single relational format.",
          "bottleneck": "High-velocity streaming telemetry overloads strict relational row locks.",
          "reflectionQuestion": "Why should temporary live GPS logs be stored differently from permanent money receipts?"
        }
      }
    ],
    "discovery": {
      "badge": "SQL vs. NoSQL",
      "tagline": "Choosing between rigid organized tables and flexible rapid data storage",
      "simpleMeaning": "A database is a digital filing system. SQL databases store data in neat tables with fixed rows and columns (like a spreadsheet with strict rules). NoSQL databases store data in flexible documents without rigid tables, making them super fast for handling massive streams of changing data.",
      "pubgExample": "Ola uses SQL (like PostgreSQL or MySQL) to manage user accounts, wallet balances, and trip invoices where mistakes cannot happen. It uses NoSQL (like Cassandra or MongoDB) to ingest millions of live driver GPS pings every minute.",
      "analogy": "SQL is like a bank vault with numbered safety deposit boxes; NoSQL is like a high-speed conveyor belt where you can drop packages of any shape instantly.",
      "howItWorks": [
        "1. Structured Data (SQL): Uses strict columns like Rider_ID, Phone, Wallet_Balance, Created_At.",
        "2. Streaming Data (NoSQL): Uses flexible documents containing dynamic GPS coordinates and timestamps.",
        "3. Accuracy vs Speed: SQL prioritizes mathematical correctness; NoSQL prioritizes massive write speeds.",
        "4. Polyglot Persistence: Modern companies use both SQL and NoSQL for different jobs."
      ],
      "whyItMatters": "Using the wrong database causes passengers to lose money or causes the app to freeze when millions of cabs stream location data.",
      "visualExplanation": "[Wallet Balances & Receipts] ──► [SQL Database: Strict Rows & Columns]\n[Live Driver GPS Coordinates] ──► [NoSQL Database: High-Speed Stream]",
      "contrast": {
        "termA": "SQL Database",
        "descA": "Strict tables, fixed columns; perfect for rider money, billing, and user profiles.",
        "termB": "NoSQL Database",
        "descB": "Flexible documents, high write speed; perfect for live GPS tracking, telemetry, and chats."
      },
      "teacherNotes": {
        "concept": "SQL, NoSQL, Relational vs Document Storage, Polyglot Persistence",
        "experience": "Students learned how to choose storage based on structure, safety, and speed requirements.",
        "realWorld": "Ola, Uber, and Swiggy use PostgreSQL for billing/ledgers and Cassandra/Redis for live vehicle location streams.",
        "question": "If you are storing a user's bank wallet balance, would you choose SQL or NoSQL?"
      },
      "olaExample": "Ola uses SQL (like PostgreSQL or MySQL) to manage user accounts, wallet balances, and trip invoices where mistakes cannot happen. It uses NoSQL (like Cassandra or MongoDB) to ingest millions of live driver GPS pings every minute."
    },
    "knowledgeCheck": {
      "question": "Which database should Ola use to store user wallet balances and trip payments where data must never have math errors?",
      "options": [
        {
          "id": "A",
          "text": "A SQL database with structured tables and strict transactional safety rules.",
          "isCorrect": true,
          "explanation": "Correct! SQL databases ensure that user balances and purchase records remain completely accurate and protected from errors."
        },
        {
          "id": "B",
          "text": "A temporary notepad document saved on the driver's phone.",
          "isCorrect": false,
          "explanation": "Incorrect. A phone notepad file cannot handle secure central banking and payments."
        },
        {
          "id": "C",
          "text": "No database at all, just guessing wallet balances every time a rider logs in.",
          "isCorrect": false,
          "explanation": "Incorrect. Without a database, user balances would be lost every time the app closes."
        }
      ],
      "hint": "Hint: Think about which database uses strict, organized tables to guarantee financial accuracy."
    }
  },
  {
    "id": 11,
    "stage": 3,
    "sno": 11,
    "topic": "Relational Database Design",
    "concept": "Relational Database Design",
    "title": "Level 11: Linking Drivers, Cabs, Riders, and Trips",
    "time": "Morning Commute — 500,000 Daily Trips",
    "usersCount": "Drivers, Cabs, Riders & Receipts",
    "topicHint": "Organizing Tables with Keys instead of Duplicating Data",
    "situation": "In Ola, every driver has a unique Driver ID. Each driver drives one cab and completes hundreds of trips. If the database copied the driver's full name, phone number, vehicle registration, and home address into every single trip receipt, the database would explode in size and create messy mistakes whenever a driver updates their phone number.",
    "problem": "How should the database organize drivers, cabs, riders, and trips without duplicating data?",
    "simulationType": "database_polyglot",
    "choices": [
      {
        "id": "A",
        "text": "Create separate tables for Drivers, Cabs, and Trips, and link them using unique IDs (keys).",
        "isOptimal": true,
        "consequenceText": "Excellent architecture! By creating separate tables linked with IDs, each driver's info is stored once. If a driver changes their phone number, it updates in one single place, and all 500 of their past trip receipts stay perfectly accurate!",
        "statImpact": {
          "latency": "15ms Lookup",
          "capacity": "Minimal Storage",
          "risk": "Zero Duplication",
          "cost": "Low DB Cost"
        },
        "whatHappened": {
          "helped": "Normalized data into clean, linked relational tables.",
          "bottleneck": "Duplicating text across millions of rows wastes storage and leads to out-of-sync data.",
          "reflectionQuestion": "Why is using a unique Driver ID better than retyping the driver's name on every receipt?"
        },
        "successSummary": "Great job! You designed relational tables with primary and foreign keys to prevent duplication."
      },
      {
        "id": "B",
        "text": "Copy the driver's full name, home address, and vehicle engine number into every single trip row.",
        "isOptimal": false,
        "consequenceText": "If a driver completes 500 trips, their address is duplicated 500 times. If they move to a new house, you must find and update 500 rows, leading to broken data.",
        "statImpact": {
          "latency": "Slow Queries",
          "capacity": "10x Wasted Space",
          "risk": "Out-of-Sync Data",
          "cost": "High Storage"
        },
        "whatHappened": {
          "helped": "Kept all data in one place without thinking about relations.",
          "bottleneck": "Massive data redundancy and update nightmares.",
          "reflectionQuestion": "What happens if an update fails halfway through updating 500 duplicated rows?"
        }
      },
      {
        "id": "C",
        "text": "Delete driver and cab tables completely and store everything as random unlinked numbers.",
        "isOptimal": false,
        "consequenceText": "Without organized tables or relations, the system cannot tell which driver completed which trip, leaving drivers unpaid and riders without receipts.",
        "statImpact": {
          "latency": "Broken",
          "capacity": "Lost Records",
          "risk": "Total Failure",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Avoided table design completely.",
          "bottleneck": "Data cannot be queried or understood without clear relational structure.",
          "reflectionQuestion": "How does an app know which driver picked you up without a linked record?"
        }
      }
    ],
    "discovery": {
      "badge": "Relational Database Design",
      "tagline": "Organizing data into neat tables connected by unique identification keys",
      "simpleMeaning": "Relational design means organizing information into separate tables (like Drivers, Cabs, Riders, and Trips) and connecting them using unique IDs called keys. This ensures you never have to repeat the same information over and over.",
      "pubgExample": "Instead of writing the driver's name, car color, and license number inside every single trip receipt, the Trips table simply stores `driver_id: 101`. The app looks up the driver's full profile using that ID.",
      "analogy": "A college student ID: The library and exam department only write your Roll Number on book receipts, not your entire home address and parent's names on every paper.",
      "howItWorks": [
        "1. Tables: Create dedicated tables for core entities (Drivers table, Cabs table, Trips table).",
        "2. Primary Key: Give each record a unique identifier (e.g., `driver_id`).",
        "3. Foreign Key: Use that unique ID in other tables to link related records cleanly.",
        "4. Single Source of Truth: Updating a driver's phone number in one table updates what shows everywhere."
      ],
      "whyItMatters": "Saves massive database storage, prevents out-of-sync bugs, and makes running reports fast and reliable.",
      "visualExplanation": "[Drivers Table]\n(ID: 101 | Name: 'Ramesh' | Phone: '98765...')\n       │ (driver_id)\n       ▼\n[Trips Table]\n(Trip: 5001 | driver_id: 101 | Fare: ₹250)\n(Trip: 5002 | driver_id: 101 | Fare: ₹320)",
      "contrast": {
        "termA": "Relational Design (Linked Tables)",
        "descA": "Data stored once in dedicated tables; connected cleanly by unique IDs.",
        "termB": "Flat Duplicated Design",
        "descB": "Every detail copied in every row; wastes storage and causes out-of-sync bugs."
      },
      "teacherNotes": {
        "concept": "Relational Database Design, Tables, Primary Keys, Foreign Keys, Normalization",
        "experience": "Students learned how tables connect using keys instead of copy-pasting information.",
        "realWorld": "Enterprise platforms like Ola, Amazon, and Salesforce rely on normalized relational schemas.",
        "question": "What is the key called that links a trip back to the driver who completed it?"
      },
      "olaExample": "Instead of writing the driver's name, car color, and license number inside every single trip receipt, the Trips table simply stores `driver_id: 101`. The app looks up the driver's full profile using that ID."
    },
    "knowledgeCheck": {
      "question": "Why does Ola link a trip receipt to a driver using their unique 'Driver ID' instead of repeating their entire profile on every receipt?",
      "options": [
        {
          "id": "A",
          "text": "It stores driver info in one place, saves storage, and updates easily if the driver changes their phone number.",
          "isCorrect": true,
          "explanation": "Correct! Relational design links records cleanly by ID so you store data once without messy duplication."
        },
        {
          "id": "B",
          "text": "It makes the cab travel twice as fast through street traffic.",
          "isCorrect": false,
          "explanation": "Incorrect. Database schema design manages data storage, not vehicle speed."
        },
        {
          "id": "C",
          "text": "It forces riders to pay double fare for every trip.",
          "isCorrect": false,
          "explanation": "Incorrect. Linking tables is an engineering best practice, not a fare penalty."
        }
      ],
      "hint": "Hint: Think about what happens if a driver changes their phone number—do you want to update it in 1 place or 1,000 places?"
    }
  },
  {
    "id": 12,
    "stage": 3,
    "sno": 12,
    "topic": "ACID Properties",
    "concept": "ACID Properties",
    "title": "Level 12: Paying ₹350 for a Ride with Ola Money (Zero Lost Money)",
    "time": "Evening Payment — Ride Completed",
    "usersCount": "1,000,000 Daily Wallet Transactions",
    "topicHint": "All-or-Nothing Transactions That Protect User Money",
    "situation": "Your ride ends and the fare is ₹350. You tap 'Pay with Ola Money'. In that exact millisecond, your mobile network drops! The server deducted ₹350 from your wallet, but the network glitch happened before the server could mark the driver's trip as paid. An inexperienced coder says: \"Too bad, the rider lost their ₹350 and the driver got nothing!\"",
    "problem": "How should a reliable database handle payments so money is never lost during a crash?",
    "simulationType": "acid_atomic_vault",
    "choices": [
      {
        "id": "A",
        "text": "Apply ACID rules: either both money is deducted and driver is paid, or the whole transaction cancels and refunds.",
        "isOptimal": true,
        "consequenceText": "Brilliant! This is Atomicity from ACID. A financial transaction is all-or-nothing. If any step fails, the system rolls back so you never lose your ₹350 without the ride being marked as paid!",
        "statImpact": {
          "latency": "Instant",
          "capacity": "100% Trust",
          "risk": "Zero Money Loss",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Treated the payment as an atomic database transaction.",
          "bottleneck": "Executing steps independently leads to money taken without payment credited.",
          "reflectionQuestion": "Why must deducting money and crediting the driver happen as one single atomic unit?"
        },
        "successSummary": "Success! You used ACID properties to protect riders and drivers from lost money and corrupted balances."
      },
      {
        "id": "B",
        "text": "Keep the rider's ₹350 deducted, but never credit the driver because the connection dropped halfway.",
        "isOptimal": false,
        "consequenceText": "Riders and drivers will be furious! Taking money without completing the transaction destroys trust and violates banking laws.",
        "statImpact": {
          "latency": "Broken",
          "capacity": "Angry Users",
          "risk": "Lawsuits & Chargebacks",
          "cost": "Huge Losses"
        },
        "whatHappened": {
          "helped": "Did not roll back the incomplete transaction.",
          "bottleneck": "Partial database operations leave accounts in an invalid state.",
          "reflectionQuestion": "Would you keep using an app that took your money and left your trip unpaid?"
        }
      },
      {
        "id": "C",
        "text": "Give the rider 50 free cab rides whenever their internet connection flickers.",
        "isOptimal": false,
        "consequenceText": "People will exploit this glitch by turning airplane mode on and off, taking millions of free rides and bankrupting the company.",
        "statImpact": {
          "latency": "Exploited",
          "capacity": "Free Ride Abuse",
          "risk": "Massive Revenue Loss",
          "cost": "Bankruptcy"
        },
        "whatHappened": {
          "helped": "Attempted to apologize to the user without proper validation.",
          "bottleneck": "Uncontrolled state generation destroys business finances.",
          "reflectionQuestion": "Why must financial transactions be strictly verified instead of handing out free rides?"
        }
      }
    ],
    "discovery": {
      "badge": "ACID Properties",
      "tagline": "The four unbreakable rules that keep database transactions safe and accurate",
      "simpleMeaning": "ACID stands for four guarantees: Atomicity (All or Nothing: all steps succeed or everything cancels), Consistency (rules are always followed), Isolation (multiple payments don't interfere with each other), and Durability (once saved, it's never lost even if the power cuts).",
      "pubgExample": "When you pay ₹350 for an Ola ride: Atomicity ensures either both ₹350 leaves your wallet AND the driver receives it, or zero money moves. Durability ensures that once payment confirms, it stays recorded even if the server reboots seconds later.",
      "analogy": "An ATM cash withdrawal: The machine either dispenses your ₹500 cash AND updates your bank balance, or if cash jams, it ejects your card and deducts zero rupees.",
      "howItWorks": [
        "1. Atomicity: The payment is treated as one single atomic action (All or Nothing).",
        "2. Consistency: Balances cannot go below zero or violate account rules.",
        "3. Isolation: If two people pay at the same second, each transaction runs cleanly one after the other.",
        "4. Durability: Once the transaction confirms, the record is written to safe permanent disk storage."
      ],
      "whyItMatters": "Without ACID guarantees, network glitches and server crashes would cause riders to lose money or drivers to go unpaid.",
      "visualExplanation": "[Deduct ₹350 from Rider] ──AND──► [Credit ₹350 to Driver]\n              ▲\n              │ (ACID Rule)\n    Both Succeed OR Both Cancel!",
      "contrast": {
        "termA": "ACID Transaction",
        "descA": "All-or-nothing guarantee; protects money and ensures data is never corrupted.",
        "termB": "Non-ACID Steps",
        "descB": "Steps run independently; partial failures take money without completing payments."
      },
      "teacherNotes": {
        "concept": "ACID, Atomicity, Consistency, Isolation, Durability, Rollback",
        "experience": "Students learned why critical state changes must be treated as atomic all-or-nothing transactions.",
        "realWorld": "Payment gateways (UPI, Razorpay, Paytm) and banking apps rely on ACID relational databases.",
        "question": "What does the letter 'A' in ACID stand for, and what does it mean?"
      },
      "olaExample": "When you pay ₹350 for an Ola ride: Atomicity ensures either both ₹350 leaves your wallet AND the driver receives it, or zero money moves. Durability ensures that once payment confirms, it stays recorded even if the server reboots seconds later."
    },
    "knowledgeCheck": {
      "question": "What does 'Atomicity' in ACID guarantee when you pay for an Ola ride with your wallet?",
      "options": [
        {
          "id": "A",
          "text": "The transaction is all-or-nothing: either money is deducted and trip is paid, or everything cancels safely with zero loss.",
          "isCorrect": true,
          "explanation": "Correct! Atomicity means all steps must succeed together, or the entire operation rolls back with zero loss."
        },
        {
          "id": "B",
          "text": "The cab engine uses atomic energy to travel faster.",
          "isCorrect": false,
          "explanation": "Incorrect. Atomicity is a database term about all-or-nothing actions, not vehicle fuel."
        },
        {
          "id": "C",
          "text": "The rider must pay double the fare if they ride after midnight.",
          "isCorrect": false,
          "explanation": "Incorrect. ACID properties protect transactions, they do not add price penalties."
        }
      ],
      "hint": "Hint: Think about 'All-or-Nothing'—you either pay and get the receipt, or get a full refund if it fails."
    }
  },
  {
    "id": 13,
    "stage": 3,
    "sno": 13,
    "topic": "Database Indexing",
    "concept": "Database Indexing",
    "title": "Level 13: Finding a Driver by Mobile Number in 2 Milliseconds",
    "time": "Driver Login — 2,000,000 Registered Drivers",
    "usersCount": "2,000,000 Driver Accounts in India",
    "topicHint": "Fast Lookups Like a Book Index vs. Checking Every Row",
    "situation": "A driver types their 10-digit mobile number to log into the Ola Driver app. Ola has 2,000,000 registered drivers in its database. Without an index, the database has to inspect driver 1, driver 2, driver 3... all the way to 2 million rows. The login screen spins for 30 seconds and times out!",
    "problem": "How can the database locate one specific driver instantly without scanning 2,000,000 records one by one?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Create an Index on the Phone_Number column, allowing the database to jump directly to the driver in 2 milliseconds.",
        "isOptimal": true,
        "consequenceText": "Super fast! An index acts like an alphabetical phonebook or book index. Instead of scanning 2 million rows, the database uses the index to jump straight to the driver in just 2 milliseconds!",
        "statImpact": {
          "latency": "2ms Lookup",
          "capacity": "2M Drivers Fast",
          "risk": "Zero Lag",
          "cost": "Tiny Extra Disk"
        },
        "whatHappened": {
          "helped": "Added an index on the frequently searched phone number field.",
          "bottleneck": "Full table scans read every single row on disk, wasting massive time and memory.",
          "reflectionQuestion": "Why does a textbook have an index at the back instead of making you read every page?"
        },
        "successSummary": "Awesome! You added an index to turn a 30-second table scan into a 2-millisecond instant lookup."
      },
      {
        "id": "B",
        "text": "Scan all 2,000,000 driver records row by row from top to bottom every single time someone logs in.",
        "isOptimal": false,
        "consequenceText": "Scanning 2 million records for every login overloads the database hard drives. Logins take half a minute, and the database crashes when 5,000 drivers log in at 8:00 AM.",
        "statImpact": {
          "latency": "30,000ms Lag",
          "capacity": "Disk Overload",
          "risk": "Database Crash",
          "cost": "Wasted Compute"
        },
        "whatHappened": {
          "helped": "Relied on a full table scan without indexing.",
          "bottleneck": "Linear search across 2 million records takes massive I/O time.",
          "reflectionQuestion": "How long would it take to find a name in a telephone directory if names were not in alphabetical order?"
        }
      },
      {
        "id": "C",
        "text": "Ask drivers to register a brand new account every single time they want to log in.",
        "isOptimal": false,
        "consequenceText": "Forcing drivers to re-register deletes their rating, earnings history, and bank links. Drivers will refuse to work for Ola.",
        "statImpact": {
          "latency": "Unusable",
          "capacity": "Lost History",
          "risk": "Driver Revolt",
          "cost": "Total Failure"
        },
        "whatHappened": {
          "helped": "Avoided solving the database lookup problem.",
          "bottleneck": "Unacceptable user experience destroys the entire driver community.",
          "reflectionQuestion": "Can software succeed if it forces users to restart from scratch?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Indexing",
      "tagline": "Creating quick lookup shortcuts to find specific records in milliseconds",
      "simpleMeaning": "An index is a special lookup table created on specific columns (like Phone Number or Driver ID). Instead of reading every single row in the database, the index helps the database jump directly to the exact record you need.",
      "pubgExample": "When a driver enters their phone number on Ola, an index on `phone_number` lets the database locate their car details, rating, and wallet instantly out of 2 million drivers.",
      "analogy": "The index at the back of a 1,000-page book: You look up 'Cab' in the index, see page 142, and flip straight there without reading pages 1 to 141.",
      "howItWorks": [
        "1. Full Table Scan (Slow): Checks every row from start to end; very slow on large databases.",
        "2. Index Structure: Keeps a sorted list of values pointing to their exact disk storage locations.",
        "3. Instant Jump: Uses binary search or B-Trees to locate the target in just a few disk reads.",
        "4. Trade-off: Reads become super fast, but writes take slightly longer because the index must also update."
      ],
      "whyItMatters": "Without indexes, searching for drivers, riders, or booking receipts would take minutes and freeze the app.",
      "visualExplanation": "[Search: '9876543210']\n       │\n       ▼\n[Phone Index: Sorted] ──Jump──► [Row 1,421,809] (Found in 2ms!)",
      "contrast": {
        "termA": "Indexed Lookup",
        "descA": "Jumps directly to target record via sorted lookup tree; takes 2 milliseconds.",
        "termB": "Full Table Scan",
        "descB": "Reads every single row from row 1 to 2,000,000; takes 30 seconds and freezes CPU."
      },
      "teacherNotes": {
        "concept": "Database Indexing, B-Trees, Full Table Scan, Read vs Write Trade-offs",
        "experience": "Students learned why indexes are essential for rapid lookups and how they compare to book indexes.",
        "realWorld": "PostgreSQL, MySQL, and DynamoDB rely on B-Tree and hash indexes for sub-millisecond key lookups.",
        "question": "What is the small trade-off of having an index when you insert a brand-new driver?"
      },
      "olaExample": "When a driver enters their phone number on Ola, an index on `phone_number` lets the database locate their car details, rating, and wallet instantly out of 2 million drivers."
    },
    "knowledgeCheck": {
      "question": "Why does Ola create an index on the Driver Phone Number column in its database?",
      "options": [
        {
          "id": "A",
          "text": "To find and display the driver's profile in milliseconds without scanning millions of rows one by one.",
          "isCorrect": true,
          "explanation": "Correct! An index acts like a book index, jumping directly to the requested record immediately."
        },
        {
          "id": "B",
          "text": "To give the driver a 5-star rating automatically on every trip.",
          "isCorrect": false,
          "explanation": "Incorrect. Database indexes speed up data lookups; they have nothing to do with driver ratings."
        },
        {
          "id": "C",
          "text": "To hide all driver phone numbers so nobody can ever log in.",
          "isCorrect": false,
          "explanation": "Incorrect. Indexes make searching faster, they do not hide data."
        }
      ],
      "hint": "Hint: Think about why a textbook has an index at the back—does it help you find pages faster?"
    }
  },
  {
    "id": 14,
    "stage": 3,
    "sno": 14,
    "topic": "Database Replication",
    "concept": "Database Replication",
    "title": "Level 14: What if the Main Database Server Loses Power?",
    "time": "Friday Night Rush — Mumbai Data Center",
    "usersCount": "500,000 Concurrent Ride Bookings",
    "topicHint": "Keeping Live Backup Copies (Primary & Replicas)",
    "situation": "It is Friday night, the busiest time of the week. Half a million people across India are booking Ola rides. Suddenly, the main database server computer in the Mumbai data center suffers a sudden hardware motherboard blowout! An intern gasps: \"We only had that one single database computer...\"",
    "problem": "How can Ola ensure the app never goes down and trip data is safe when a database server dies?",
    "simulationType": "db_replication_cluster",
    "choices": [
      {
        "id": "A",
        "text": "Use Database Replication to keep exact live copies on backup replica servers that take over instantly.",
        "isOptimal": true,
        "consequenceText": "Lifesaver! With Database Replication, every ride is continuously copied to replica servers. When the Primary crashes, a Replica is automatically promoted to be the new Primary, and riders don't even notice a hiccup!",
        "statImpact": {
          "latency": "25ms",
          "capacity": "Zero Downtime",
          "risk": "Zero Data Loss",
          "cost": "Backup Hardware"
        },
        "whatHappened": {
          "helped": "Maintained continuous live replicas of the database.",
          "bottleneck": "A single point of failure guarantees total collapse when hardware breaks.",
          "reflectionQuestion": "What happens if you have no backup copy and your laptop hard drive breaks?"
        },
        "successSummary": "Outstanding! You set up database replication with automatic failover to prevent total disaster."
      },
      {
        "id": "B",
        "text": "Keep only one single database computer and accept that all rider and driver accounts are wiped out if it crashes.",
        "isOptimal": false,
        "consequenceText": "All driver accounts, trip histories, and wallet balances are lost. The company's reputation is destroyed, and the business faces immediate shutdown.",
        "statImpact": {
          "latency": "Dead",
          "capacity": "0 Rides",
          "risk": "100% Data Loss",
          "cost": "Catastrophic"
        },
        "whatHappened": {
          "helped": "Saved money by buying only one computer.",
          "bottleneck": "Single point of failure leads to irrecoverable data loss.",
          "reflectionQuestion": "Is it worth saving a few dollars if a crash destroys the entire business?"
        }
      },
      {
        "id": "C",
        "text": "Shut down all cab operations in India for two weeks while a technician looks for replacement parts.",
        "isOptimal": false,
        "consequenceText": "Two weeks of downtime causes all riders to switch to competing services. Millions of dollars in revenue are lost while servers sit offline.",
        "statImpact": {
          "latency": "2 Weeks Offline",
          "capacity": "0 Active",
          "risk": "Lost Customers",
          "cost": "Massive Revenue Drop"
        },
        "whatHappened": {
          "helped": "Waited for manual hardware repair.",
          "bottleneck": "Manual repair is far too slow for an active mobility service.",
          "reflectionQuestion": "Why do modern online services need automated instant failover?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Replication",
      "tagline": "Copying data continuously to backup servers for high availability and read sharing",
      "simpleMeaning": "Database Replication means copying data from a main database (called the Primary) to one or more backup databases (called Replicas). If the Primary computer breaks, a Replica immediately steps in so the app keeps running smoothly.",
      "pubgExample": "When a rider completes a trip in Ola, the Primary database saves the receipt and instantly copies it to Replicas in Bangalore and Delhi. If the main server crashes, the backup server takes over in seconds.",
      "analogy": "Keeping a photocopy of your passport in your travel bag: if your original passport is lost, your backup copy keeps you safe.",
      "howItWorks": [
        "1. Primary Server: Handles all writes (new bookings, payments, driver ratings).",
        "2. Replica Servers: Continuously copy changes from the Primary.",
        "3. Read Distribution: Millions of riders checking their past receipts read from Replicas, taking load off the Primary.",
        "4. Automatic Failover: If the Primary dies, a Replica becomes the new Primary within seconds."
      ],
      "whyItMatters": "Protects against hardware crashes, prevents data loss, and lets millions of riders inspect receipts without overloading one server.",
      "visualExplanation": "              [Write: New Trip Receipt]\n                     │\n                     ▼\n            [Primary Database] (Crashes!)\n            ╱                ╲\n   (Syncs) ╱                  ╲ (Syncs)\n          ▼                    ▼\n   [Replica DB 1]       [Replica DB 2] ──Promoted──► New Primary!",
      "contrast": {
        "termA": "Replicated Cluster",
        "descA": "Multiple live database copies; zero downtime and instant failover on crashes.",
        "termB": "Single Database Server",
        "descB": "One computer holds everything; hardware failure causes total shutdown and data loss."
      },
      "teacherNotes": {
        "concept": "Database Replication, Primary/Replica (Master/Slave), High Availability, Failover",
        "experience": "Students learned why critical data must be continuously replicated across independent machines.",
        "realWorld": "AWS Aurora, PostgreSQL, and MySQL clusters use replication for 99.999% availability.",
        "question": "Besides handling crashes, how do replica servers help when millions of riders check their past trips?"
      },
      "olaExample": "When a rider completes a trip in Ola, the Primary database saves the receipt and instantly copies it to Replicas in Bangalore and Delhi. If the main server crashes, the backup server takes over in seconds."
    },
    "knowledgeCheck": {
      "question": "What is the main purpose of Database Replication in a 24/7 app like Ola?",
      "options": [
        {
          "id": "A",
          "text": "To keep live backup copies of the database so the app stays running if the main server fails.",
          "isCorrect": true,
          "explanation": "Correct! Replication ensures continuous backups and instant failover so user data is never lost."
        },
        {
          "id": "B",
          "text": "To make every cab driver fly in an airplane instead of driving on roads.",
          "isCorrect": false,
          "explanation": "Incorrect. Database replication manages data backups, not physical vehicle transport."
        },
        {
          "id": "C",
          "text": "To charge riders double fare every time they book on weekends.",
          "isCorrect": false,
          "explanation": "Incorrect. Replication is about system reliability, not charging riders."
        }
      ],
      "hint": "Hint: Think about what happens when you keep a duplicate backup copy of your school project on a pen drive."
    }
  },
  {
    "id": 15,
    "stage": 3,
    "sno": 15,
    "topic": "Database Partitioning",
    "concept": "Database Partitioning",
    "title": "Level 15: Splitting 50 Million Trip History Receipts by Month & Year",
    "time": "Rider Profile Screen — Trip History",
    "usersCount": "50,000,000 Completed Trips (2022 to 2024)",
    "topicHint": "Dividing One Huge Table into Smaller Manageable Sections",
    "situation": "Over the past 3 years, Ola has accumulated 50,000,000 completed trip receipts in one giant 'Trips' table. When a rider opens their app to view their ride from yesterday, the database takes 25 seconds to crawl through three years of old trips from 2022!",
    "problem": "How can Ola organize this massive 50-million-row table so checking recent trips is lightning fast?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Partition the huge table into smaller sections by Year or Month (e.g., Year 2024 table, Year 2023 table).",
        "isOptimal": true,
        "consequenceText": "Smart move! By partitioning the table by year and month, queries for yesterday's ride only search the current month's section. The database skips 45 million old rows entirely, and receipts load in 15 milliseconds!",
        "statImpact": {
          "latency": "15ms History",
          "capacity": "50M Trips Organized",
          "risk": "Zero Sluggishness",
          "cost": "Efficient"
        },
        "whatHappened": {
          "helped": "Partitioned historical trip data by date ranges.",
          "bottleneck": "Searching one monolithic table forces the database to scan millions of irrelevant old years.",
          "reflectionQuestion": "Why should checking yesterday's cab receipt search through trips from 3 years ago?"
        },
        "successSummary": "Great work! You used partitioning to divide a gigantic table into fast, manageable monthly pieces."
      },
      {
        "id": "B",
        "text": "Permanently delete all trip records from previous years so riders can never view their tax receipts.",
        "isOptimal": false,
        "consequenceText": "Riders need past receipts for corporate expense claims and tax filings. Deleting their history causes huge backlash and lost corporate accounts.",
        "statImpact": {
          "latency": "Fast but Empty",
          "capacity": "Lost History",
          "risk": "Upset Riders",
          "cost": "Lost Enterprise Clients"
        },
        "whatHappened": {
          "helped": "Reduced table size by destroying user records.",
          "bottleneck": "Deleting valuable historical data instead of organizing it cleanly.",
          "reflectionQuestion": "Can you make searches fast without deleting user data?"
        }
      },
      {
        "id": "C",
        "text": "Leave all 50 million rows in one giant table and tell riders to wait 25 seconds every time they open trip history.",
        "isOptimal": false,
        "consequenceText": "Riders get annoyed waiting half a minute just to download a receipt. Many riders abandon the app.",
        "statImpact": {
          "latency": "25,000ms Delay",
          "capacity": "Unoptimized Table",
          "risk": "Bad User Experience",
          "cost": "High DB Load"
        },
        "whatHappened": {
          "helped": "Avoided table reorganization.",
          "bottleneck": "Monolithic tables degrade in performance as row counts grow into the tens of millions.",
          "reflectionQuestion": "What happens to search speed as a table grows 10 times bigger?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Partitioning",
      "tagline": "Splitting a giant table into smaller, faster logical sections within the same database",
      "simpleMeaning": "Database Partitioning means dividing a giant table with millions of rows into smaller, organized pieces (called partitions) based on a rule, like Year, Month, or City. The database only searches the relevant partition instead of the whole monster table.",
      "pubgExample": "Ola partitions its trip history table by Year and Month (e.g., Partition 2024_Oct, Partition 2024_Nov). When you view today's ride, the database searches only this month's partition.",
      "analogy": "An office filing cabinet: Instead of dumping 5 years of receipts into one giant pile, you use separate labeled folders for 2022, 2023, and 2024.",
      "howItWorks": [
        "1. Choose a Partition Key: Pick a field like `trip_date` or `year_month`.",
        "2. Divide Data: The database automatically stores records in the matching partition.",
        "3. Partition Pruning: When querying recent rides, the database completely skips old partitions.",
        "4. Easy Archiving: Old years can be archived or compressed without affecting live rides."
      ],
      "whyItMatters": "Keeps query speeds lightning fast even as the app accumulates tens of millions of historical records over years.",
      "visualExplanation": "[Giant Trips Table: 50 Million Rows]\n                   │\n       Divided into Partitions:\n┌──────────────────┼──────────────────┐\n▼                  ▼                  ▼\n[Year 2022]        [Year 2023]        [Year 2024: Current]\n(Skipped)          (Skipped)          (Only Search Here! 15ms)",
      "contrast": {
        "termA": "Partitioned Table",
        "descA": "Divided into monthly folders; queries scan only relevant data in milliseconds.",
        "termB": "Single Monster Table",
        "descB": "All 50M rows in one pile; queries crawl through years of old data and lag."
      },
      "teacherNotes": {
        "concept": "Database Partitioning, Range Partitioning, Partition Pruning, Query Optimization",
        "experience": "Students learned how to organize massive tables by logical boundaries like dates or months.",
        "realWorld": "PostgreSQL, Oracle, and Google BigQuery use range partitioning for fast time-series analysis.",
        "question": "What is the process called where the database skips old partitions during a query?"
      },
      "olaExample": "Ola partitions its trip history table by Year and Month (e.g., Partition 2024_Oct, Partition 2024_Nov). When you view today's ride, the database searches only this month's partition."
    },
    "knowledgeCheck": {
      "question": "How does dividing trip receipts into monthly partitions help an Ola rider checking yesterday's ride?",
      "options": [
        {
          "id": "A",
          "text": "The database only searches the current month's partition, making the receipt load in milliseconds.",
          "isCorrect": true,
          "explanation": "Correct! Partitioning allows the database to ignore millions of old records and search only the relevant month."
        },
        {
          "id": "B",
          "text": "It gives the rider 5 free rides every time they check their history.",
          "isCorrect": false,
          "explanation": "Incorrect. Partitioning speeds up database lookups; it does not alter ride pricing."
        },
        {
          "id": "C",
          "text": "It cancels all other rides in the city automatically.",
          "isCorrect": false,
          "explanation": "Incorrect. Partitioning organizes data storage, it is not a ride cancellation feature."
        }
      ],
      "hint": "Hint: Think about searching through one small folder of today's papers versus searching a warehouse of 3 years of old papers."
    }
  },
  {
    "id": 16,
    "stage": 3,
    "sno": 16,
    "topic": "Database Sharding",
    "concept": "Database Sharding",
    "title": "Level 16: Distributing Driver Data Across City Database Servers",
    "time": "National Expansion — 100 Indian Cities",
    "usersCount": "100,000,000 Nationwide Users across India",
    "topicHint": "Splitting Data Across Multiple Physical Computers",
    "situation": "Ola now operates across 100 cities in India. The total driver and rider profile data is over 150 Terabytes. The engineers bought the biggest, most expensive server computer available on the market, but the database hard drives are 100% full and cannot fit another city!",
    "problem": "What do you do when one single database computer physically cannot hold all the country's drivers and riders?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Use Database Sharding to split data across multiple separate database servers (e.g., Shard by City: Delhi, Mumbai, Bangalore).",
        "isOptimal": true,
        "consequenceText": "Brilliant engineering! Sharding splits the data across independent database machines (Server 1 for Delhi, Server 2 for Mumbai, Server 3 for Bangalore). You can now add as many database servers as needed to support every city in India!",
        "statImpact": {
          "latency": "20ms",
          "capacity": "Nationwide Scale",
          "risk": "Zero Hard Drive Limit",
          "cost": "Scalable Fleet"
        },
        "whatHappened": {
          "helped": "Horizontally distributed data across multiple physical database computers.",
          "bottleneck": "Single-node hardware reaches a hard physical limit on disk and RAM.",
          "reflectionQuestion": "Why is spreading work across 5 ordinary servers better than buying 1 impossible super-server?"
        },
        "successSummary": "Awesome! You used database sharding to scale storage horizontally across multiple machines."
      },
      {
        "id": "B",
        "text": "Keep trying to squeeze all 100 cities onto that one computer until the hard drive corrupts and fails.",
        "isOptimal": false,
        "consequenceText": "The hard drive hits 100% capacity and stops accepting writes. Driver registrations fail, trip saves corrupt, and the server crashes nationwide.",
        "statImpact": {
          "latency": "Dead",
          "capacity": "Disk Full",
          "risk": "Data Corruption",
          "cost": "Server Crash"
        },
        "whatHappened": {
          "helped": "Ignored hardware limits.",
          "bottleneck": "Hard drives cannot hold infinite data.",
          "reflectionQuestion": "What happens to your phone if storage reaches 100% and you try to take a 4K video?"
        }
      },
      {
        "id": "C",
        "text": "Ban 50 cities from using Ola to free up disk space on the single machine.",
        "isOptimal": false,
        "consequenceText": "Shutting down Ola in half the country destroys business growth and hands the market to competitors.",
        "statImpact": {
          "latency": "Abandoned",
          "capacity": "50% Market Lost",
          "risk": "Public Outrage",
          "cost": "Huge Revenue Loss"
        },
        "whatHappened": {
          "helped": "Reduced data by throwing away paying customers.",
          "bottleneck": "Engineering failures must be solved with architecture, not by punishing users.",
          "reflectionQuestion": "How should a growing system expand without rejecting users?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Sharding",
      "tagline": "Splitting a massive dataset across multiple separate physical database computers",
      "simpleMeaning": "Sharding means dividing data horizontally across multiple separate database servers (called shards). Each database machine holds a portion of the data (for example, Server A holds Delhi data, Server B holds Mumbai data, Server C holds Bangalore data).",
      "pubgExample": "When a rider in Delhi books a cab, Ola routes the request directly to Database Shard Delhi. When a rider in Mumbai books, it routes to Database Shard Mumbai. Neither server runs out of space.",
      "analogy": "A city library that outgrows its building: The city opens a North Branch for North zone residents and a South Branch for South zone residents.",
      "howItWorks": [
        "1. Shard Key: Pick a field like `city_id` or `user_id` to decide where data lives.",
        "2. Routing Layer: A router checks the City ID and sends queries directly to the correct database computer.",
        "3. Independent Machines: Each shard has its own CPU, RAM, and hard drives.",
        "4. Unlimited Scale: When launching in 20 new cities, simply add Shards 4, 5, and 6!"
      ],
      "whyItMatters": "Allows applications to expand from one city to hundreds of cities without hitting the physical limits of a single computer.",
      "visualExplanation": "                 [Nationwide Ola Traffic]\n                            │\n              ┌─────────────┼─────────────┐\n              ▼             ▼             ▼\n       [Shard: Delhi] [Shard: Mumbai] [Shard: Bangalore]\n        (20TB Disk)    (20TB Disk)     (20TB Disk)",
      "contrast": {
        "termA": "Sharded Database Fleet",
        "descA": "Data split across multiple physical computers; scales horizontally to infinite cities.",
        "termB": "Single Database Server",
        "descB": "All data on one computer; crashes when disk space and memory hit hardware limits."
      },
      "teacherNotes": {
        "concept": "Database Sharding, Horizontal Partitioning, Shard Keys, Routing Layer",
        "experience": "Students learned how to scale beyond single-machine limits by sharding across multiple servers.",
        "realWorld": "Ola, Uber, Discord, and Instagram shard their database clusters by user ID or geographical region.",
        "question": "What is the difference between Partitioning (inside one DB) and Sharding (across multiple DB computers)?"
      },
      "olaExample": "When a rider in Delhi books a cab, Ola routes the request directly to Database Shard Delhi. When a rider in Mumbai books, it routes to Database Shard Mumbai. Neither server runs out of space."
    },
    "knowledgeCheck": {
      "question": "What is the main difference between Database Partitioning and Database Sharding in Ola?",
      "options": [
        {
          "id": "A",
          "text": "Partitioning divides data into sections inside one database computer; Sharding distributes data across multiple separate computers.",
          "isCorrect": true,
          "explanation": "Correct! Partitioning splits tables on a single machine, while Sharding spreads data across multiple physical database servers."
        },
        {
          "id": "B",
          "text": "Partitioning is for autos, while Sharding is for bicycle rentals.",
          "isCorrect": false,
          "explanation": "Incorrect. Both are core database architecture concepts used across all software systems."
        },
        {
          "id": "C",
          "text": "Sharding deletes user data permanently, while Partitioning duplicates it 100 times.",
          "isCorrect": false,
          "explanation": "Incorrect. Sharding safely stores data across different machines without deleting anything."
        }
      ],
      "hint": "Hint: Think about whether you are organizing drawers in one cabinet (partitioning) or buying multiple separate cabinets (sharding)."
    }
  },
  {
    "id": 17,
    "stage": 3,
    "sno": 17,
    "topic": "CAP Theorem",
    "concept": "CAP Theorem",
    "title": "Level 17: When the Telecom Cable Between Delhi and Bangalore Breaks",
    "time": "Monsoon Storms — Inter-City Network Cut",
    "usersCount": "2 Major Regional Data Centers (Delhi & Bangalore)",
    "topicHint": "Consistency vs. Availability During Network Partitions",
    "situation": "Ola has two main database centers: one in Delhi and one in Bangalore. They sync driver wallet balances across both regions. Suddenly, heavy monsoon landslides cut the main fiber optic internet cable between Delhi and Bangalore! A manager demands: \"I want 100% exact instant synchronization AND 100% uninterrupted instant updates in both cities right now!\"",
    "problem": "Under the famous CAP theorem, what trade-off must Ola make when the network connection between two servers is cut?",
    "simulationType": "cap_network_partition",
    "choices": [
      {
        "id": "A",
        "text": "Choose between Consistency (pause wallet updates to prevent mismatched balances) OR Availability (keep rides moving, sync balances later).",
        "isOptimal": true,
        "consequenceText": "Spot on! This is the CAP Theorem. When a network Partition (P) occurs, you MUST choose between Consistency (C) or Availability (A). You cannot physically have both while the cable between the cities is severed!",
        "statImpact": {
          "latency": "Predictable",
          "capacity": "Realistic System",
          "risk": "Understood Trade-off",
          "cost": "Balanced"
        },
        "whatHappened": {
          "helped": "Understood the physical laws of distributed networks.",
          "bottleneck": "Two disconnected computers cannot guarantee identical data while both accept independent writes.",
          "reflectionQuestion": "Why can two friends not keep identical notes if their phone call drops?"
        },
        "successSummary": "Brilliant! You mastered the CAP theorem and recognized that network splits force a trade-off between Consistency and Availability."
      },
      {
        "id": "B",
        "text": "Claim the system can magically guarantee 100% Consistency and 100% Availability simultaneously through a severed cable.",
        "isOptimal": false,
        "consequenceText": "Physics makes this impossible. If Delhi and Bangalore cannot talk, updates made in Delhi cannot appear in Bangalore. Claiming both leads to contradictory records and double spending.",
        "statImpact": {
          "latency": "Impossible",
          "capacity": "Corrupted State",
          "risk": "Contradictory Ledgers",
          "cost": "Financial Loss"
        },
        "whatHappened": {
          "helped": "Ignored the fundamental mathematical law of distributed systems.",
          "bottleneck": "Data cannot travel across a physically severed network line.",
          "reflectionQuestion": "Can information travel between two disconnected islands without a medium?"
        }
      },
      {
        "id": "C",
        "text": "Permanently shut down all cab booking across India whenever any network cable experiences a glitch.",
        "isOptimal": false,
        "consequenceText": "Internet glitches happen regularly. Shutting down all operations every time a cable has an issue would mean Ola is offline dozens of days every year.",
        "statImpact": {
          "latency": "Zero Uptime",
          "capacity": "0 Rides",
          "risk": "Business Dead",
          "cost": "Total Loss"
        },
        "whatHappened": {
          "helped": "Overreacted to a normal network event.",
          "bottleneck": "Systems must be resilient to partial network partitions.",
          "reflectionQuestion": "How should a distributed system react when one network cable cuts?"
        }
      }
    ],
    "discovery": {
      "badge": "CAP Theorem",
      "tagline": "The fundamental trade-off: Consistency vs. Availability during network failures",
      "simpleMeaning": "The CAP theorem states that a distributed system can only guarantee two of three things at the same time: Consistency (every server sees identical data), Availability (every request gets a fast response), and Partition Tolerance (the system handles broken network links). Since cables can always break in the real world, you must choose between Consistency or Availability during a split.",
      "pubgExample": "If the network cable between Delhi and Bangalore breaks, Ola can either pause wallet top-ups until the cable is fixed (Consistency), or let riders keep booking rides and synchronize balances once reconnected (Availability).",
      "analogy": "Two friends taking notes over the phone: If their call drops (Partition), they can either stop writing to stay matched (Consistency) or keep writing independently (Availability), but they cannot do both simultaneously while disconnected.",
      "howItWorks": [
        "1. Consistency (C): Every user reads the exact same data at the same second.",
        "2. Availability (A): The app keeps responding even if some servers are isolated.",
        "3. Partition Tolerance (P): The system continues operating despite network cables breaking.",
        "4. The Rule: In the real world, networks always break (P happens). You must choose C (Consistency) or A (Availability)."
      ],
      "whyItMatters": "Helps engineers make intentional trade-offs: choose strict accuracy for money (CP), or choose continuous uptime for cab matching (AP).",
      "visualExplanation": "                 [Network Cable Snaps!]\n               (Partition Tolerance: P)\n                         │\n         ┌───────────────┴───────────────┐\n         ▼                               ▼\n  Choose CONSISTENCY (C)          Choose AVAILABILITY (A)\n  Pause updates until linked.     Keep cabs moving; sync later.",
      "contrast": {
        "termA": "Consistency (CP System)",
        "descA": "Pauses or rejects requests during a split to prevent mismatched data (e.g., bank payments).",
        "termB": "Availability (AP System)",
        "descB": "Answers every request immediately; synchronizes data differences after the network heals."
      },
      "teacherNotes": {
        "concept": "CAP Theorem, Consistency, Availability, Partition Tolerance, Distributed Trade-offs",
        "experience": "Students learned why distributed systems cannot escape trade-offs when networks fail.",
        "realWorld": "Banking apps choose CP (Consistency) to protect balances; ride booking and social feeds often choose AP (Availability).",
        "question": "If you are designing a casual cab search feature, would you choose Consistency (stop search) or Availability (keep searching)?"
      },
      "olaExample": "If the network cable between Delhi and Bangalore breaks, Ola can either pause wallet top-ups until the cable is fixed (Consistency), or let riders keep booking rides and synchronize balances once reconnected (Availability)."
    },
    "knowledgeCheck": {
      "question": "When an internet cable breaks between two Ola server data centers, what does the CAP theorem state?",
      "options": [
        {
          "id": "A",
          "text": "You must choose between strict Consistency (identical data) or Availability (keeping the system online).",
          "isCorrect": true,
          "explanation": "Correct! When a network partition occurs, a system cannot guarantee both perfect instant consistency and 100% availability."
        },
        {
          "id": "B",
          "text": "All cabs on the road will run out of fuel simultaneously.",
          "isCorrect": false,
          "explanation": "Incorrect. The CAP theorem is a computer science theorem about data trade-offs, not car fuel."
        },
        {
          "id": "C",
          "text": "The app will automatically give every rider free lifetime rides.",
          "isCorrect": false,
          "explanation": "Incorrect. The CAP theorem guides system design choices, not promotional giveaways."
        }
      ],
      "hint": "Hint: Think about C (Consistency) and A (Availability)—when network cables cut, which trade-off must you pick?"
    }
  },
  {
    "id": 18,
    "stage": 3,
    "sno": 18,
    "topic": "OLTP vs. OLAP",
    "concept": "OLTP vs. OLAP",
    "title": "Level 18: Live Ride Dispatch vs. Studying 10 Million Past Trips",
    "time": "Evening Surge — Live Dispatch vs Data Science",
    "usersCount": "50,000 Live Trips vs 10M Historical Trips",
    "topicHint": "Fast Live Transactions (OLTP) vs Deep Analytics Warehouses (OLAP)",
    "situation": "Right now, 50,000 live Ola rides are running across Mumbai, updating driver GPS and meter fares every millisecond. At the exact same time, the pricing data scientist wants to run a massive query across 10,000,000 completed past trips to calculate surge pricing algorithms for the next year. A junior developer runs this giant calculation directly on the live dispatch database!",
    "problem": "What happens when heavy historical analytics queries are run directly on the live dispatch database?",
    "simulationType": "oltp_olap_registers",
    "choices": [
      {
        "id": "A",
        "text": "Keep them separate: use OLTP for fast live ride dispatch, and OLAP (data warehouse) for heavy historical analytics.",
        "isOptimal": true,
        "consequenceText": "Brilliant architecture! OLTP handles fast, small transactions (booking cabs, updating GPS) in real time. OLAP is a separate data warehouse that studies millions of historical trips without slowing down live rides!",
        "statImpact": {
          "latency": "25ms Live / Fast Reports",
          "capacity": "Separate Systems",
          "risk": "Zero Interference",
          "cost": "Well-Balanced"
        },
        "whatHappened": {
          "helped": "Separated operational transactional workloads from analytical workloads.",
          "bottleneck": "Heavy analytical queries lock tables and starve live dispatch transactions of CPU.",
          "reflectionQuestion": "Why should an accountant's yearly tax report not block the cashier scanning groceries?"
        },
        "successSummary": "Perfect! You separated OLTP (live ride transactions) from OLAP (deep analytics warehouse)."
      },
      {
        "id": "B",
        "text": "Run massive analytical queries scanning 10 million past trips directly on the live dispatch server during evening rush.",
        "isOptimal": false,
        "consequenceText": "The analytical query maxes out 100% of the database CPU for 10 minutes. Live bookings freeze, drivers cannot accept rides, and thousands of riders are stranded.",
        "statImpact": {
          "latency": "10,000ms Delay",
          "capacity": "CPU Overheated",
          "risk": "Live Dispatch Crash",
          "cost": "High Revenue Loss"
        },
        "whatHappened": {
          "helped": "Tried to save money by using only one database for everything.",
          "bottleneck": "Heavy scans consume all database resources, stalling fast live transactions.",
          "reflectionQuestion": "What happens if a customer asks the cashier to audit the store's whole year while 50 people wait in line?"
        }
      },
      {
        "id": "C",
        "text": "Never analyze past trips at all, leaving pricing and demand completely unmonitored forever.",
        "isOptimal": false,
        "consequenceText": "Without analytics, Ola cannot predict rush hour demand or plan driver incentives. The business loses money and falls behind competitors.",
        "statImpact": {
          "latency": "Blind Operations",
          "capacity": "Unoptimized Pricing",
          "risk": "Business Decline",
          "cost": "Lost Growth"
        },
        "whatHappened": {
          "helped": "Avoided running analytics entirely.",
          "bottleneck": "Modern mobility companies need data-driven insights to optimize supply and demand.",
          "reflectionQuestion": "How do ride-hailing apps know where more cabs will be needed tomorrow without past data?"
        }
      }
    ],
    "discovery": {
      "badge": "OLTP vs. OLAP",
      "tagline": "Separating fast real-time transactions from heavy historical analytics",
      "simpleMeaning": "OLTP (Online Transaction Processing) is built for fast, everyday actions like booking a cab, updating GPS, or deducting wallet fare. OLAP (Online Analytical Processing) is a separate data warehouse built for analyzing millions of past records to find trends, calculate surge pricing, and plan fleet growth.",
      "pubgExample": "When you book an Ola cab in Bandra, OLTP processes it in 10 milliseconds. Later that night, the Ola planning team uses OLAP to analyze 10 million rides and discover that 40% more cabs are needed at Mumbai Airport on Sunday nights.",
      "analogy": "OLTP is the grocery store cashier scanning milk quickly in 2 seconds; OLAP is the store manager in the back office analyzing sales numbers for the entire year to plan next year's inventory.",
      "howItWorks": [
        "1. OLTP (Operational): Handles fast, simple read/write operations (e.g., Update Ride Status to Completed).",
        "2. Background Sync (ETL): Completed trip data is copied periodically into the OLAP warehouse.",
        "3. OLAP (Analytical): Handles complex queries scanning millions of historical records.",
        "4. Zero Interference: Analysts can run giant queries without causing any lag for active riders.",
        "5. High Reliability: Keeps core ride booking fast and responsive 24/7."
      ],
      "whyItMatters": "Running big data analytics on a live production database causes lag spikes and freezes ride booking for real users.",
      "visualExplanation": "[Live Ride Booking: Tap 'Book'] ──► [OLTP Database: Fast & Instant (10ms)]\n                                              │\n                                     (Copies data overnight)\n                                              ▼\n[Data Scientist: Surge Pricing] ──► [OLAP Warehouse: Analyzes 10M Trips]",
      "contrast": {
        "termA": "OLTP (Transactions)",
        "descA": "Fast, simple operations on current data; keeps live ride booking running with zero lag.",
        "termB": "OLAP (Analytics)",
        "descB": "Complex queries on massive historical data; used for surge pricing and business planning."
      },
      "teacherNotes": {
        "concept": "OLTP, OLAP, Data Warehousing, ETL, Workload Isolation",
        "experience": "Students learned why live transactional operations must be isolated from analytical reporting.",
        "realWorld": "Companies use PostgreSQL/MySQL for OLTP and Snowflake/Google BigQuery/Amazon Redshift for OLAP analytics.",
        "question": "What would happen to live Ola riders if the analytics team ran a 10-minute report on the live database?"
      },
      "olaExample": "When you book an Ola cab in Bandra, OLTP processes it in 10 milliseconds. Later that night, the Ola planning team uses OLAP to analyze 10 million rides and discover that 40% more cabs are needed at Mumbai Airport on Sunday nights."
    },
    "knowledgeCheck": {
      "question": "Which system should Ola use to study passenger travel trends across 10 million past trips to optimize surge pricing?",
      "options": [
        {
          "id": "A",
          "text": "An OLAP data warehouse designed for deep analysis of large amounts of historical data.",
          "isCorrect": true,
          "explanation": "Correct! OLAP systems are built specifically to analyze massive historical datasets without slowing down live operations."
        },
        {
          "id": "B",
          "text": "The live dispatch OLTP database while 50,000 riders are actively booking cabs.",
          "isCorrect": false,
          "explanation": "Incorrect. Running heavy reports on the live OLTP database freezes the app for active riders."
        },
        {
          "id": "C",
          "text": "A driver's personal smartphone memory card.",
          "isCorrect": false,
          "explanation": "Incorrect. A single phone memory card cannot hold or compute 10 million historical trips."
        }
      ],
      "hint": "Hint: Think about which system is designed for Analytical processing of millions of past records (OLAP)."
    }
  },
  {
    "id": 19,
    "stage": 4,
    "sno": 19,
    "topic": "Monolithic vs. Microservices Architecture",
    "concept": "Monolithic vs. Microservices Architecture",
    "title": "Level 19: All Features in One Giant Program vs. Separate Services",
    "time": "System Architecture Review — Ola Tech Hub",
    "usersCount": "Dispatch, Wallet, Driver GPS & Invoices",
    "topicHint": "Single Fragile Program vs. Independent Resilient Services",
    "situation": "All of Ola's systems (Cab Matching, Ola Money Wallet, Driver GPS Tracking, and SMS Invoices) are packed into one giant computer program running on one big server (a Monolith). During Monday morning rush hour, a tiny bug causes the SMS Invoice generator to crash. Because everything is bundled into one program, the crash brings down the entire Ola app, stopping all cab dispatching and leaving riders stranded!",
    "problem": "Should all features run inside one giant program, or be separated into independent microservices?",
    "simulationType": "scaling_cluster_nodes",
    "choices": [
      {
        "id": "A",
        "text": "Use Microservices: split Cab Matching, Wallet, GPS, and Invoices into independent services that don't crash each other.",
        "isOptimal": true,
        "consequenceText": "Brilliant architecture! With Microservices, each feature runs on its own independent server. If the SMS Invoice service glitches, cab matching and wallet payments continue working 100% smoothly, and engineers can fix the SMS service without restarting the whole app!",
        "statImpact": {
          "latency": "25ms",
          "capacity": "Resilient Fleet",
          "risk": "Zero Total Outages",
          "cost": "Well-Organized"
        },
        "whatHappened": {
          "helped": "Isolated failure domains into independent microservices.",
          "bottleneck": "A monolithic program has one single point of failure; one small bug brings down everything.",
          "reflectionQuestion": "Why should a receipt printing glitch not stop drivers from picking up passengers?"
        },
        "successSummary": "Awesome! You separated the monolithic app into independent, resilient microservices."
      },
      {
        "id": "B",
        "text": "Keep everything glued together in one giant program and accept that any tiny bug crashes the entire company.",
        "isOptimal": false,
        "consequenceText": "Whenever any small feature like promo codes or invoice emails has an issue, the entire app crashes for millions of riders across India.",
        "statImpact": {
          "latency": "High Risk",
          "capacity": "Fragile Monolith",
          "risk": "Total Outage",
          "cost": "Frequent Downtime"
        },
        "whatHappened": {
          "helped": "Avoided separating services.",
          "bottleneck": "Tight coupling means all features share the exact same process memory and failure points.",
          "reflectionQuestion": "If your car air conditioner stops working, should the entire engine turn off?"
        }
      },
      {
        "id": "C",
        "text": "Delete driver tracking, invoices, and promo codes so the app only has one single button forever.",
        "isOptimal": false,
        "consequenceText": "Deleting essential features leaves riders blind without GPS tracking or receipts. Riders switch to other ride-hailing services.",
        "statImpact": {
          "latency": "Crippled",
          "capacity": "Stripped Features",
          "risk": "Lost Customers",
          "cost": "Zero Growth"
        },
        "whatHappened": {
          "helped": "Removed features instead of designing resilient architecture.",
          "bottleneck": "Modern applications require rich feature sets with reliable architecture.",
          "reflectionQuestion": "Can a modern ride-hailing app survive without maps, receipts, and live tracking?"
        }
      }
    ],
    "discovery": {
      "badge": "Monolithic vs. Microservices",
      "tagline": "Choosing between one giant combined program and independent mini-services",
      "simpleMeaning": "A Monolith is one single giant computer program that contains every feature (booking, billing, driver tracking, receipts). Microservices splits the application into small, independent services that run on separate computers. If one service has an error, the rest of the app stays online!",
      "pubgExample": "In Ola, the Ride Dispatch service is completely separate from the Promo Code service. If the promo code server gets overloaded during a festival discount, riders can still book cabs and track drivers without interruption.",
      "analogy": "A Swiss Army Knife vs. a Tool Box: If the knife blade breaks on a Swiss Army knife, the whole tool is ruined. In a tool box, if your screwdriver breaks, your hammer and wrench still work fine.",
      "howItWorks": [
        "1. Monolith (Simple Start): Easy to build initially, but hard to maintain as teams and features grow.",
        "2. Independent Deployment: With microservices, the Wallet team can update payments without touching the Map Dispatch code.",
        "3. Fault Isolation: A crash in SMS receipts does not stop riders from hailing cabs.",
        "4. Independent Scaling: When 200,000 riders book at 6:00 PM, scale only the Dispatch service without wasting money on the others."
      ],
      "whyItMatters": "Allows large engineering teams to build, scale, and update different parts of Ola without risking bringing down the entire platform.",
      "visualExplanation": "[Monolith: Everything in 1 Box] ──Bug in Invoices──► Entire Ola App Crashes!\n\n[Microservices Fleet]\n[Cab Dispatch] ──Works!──┐\n[Ola Wallet]   ──Works!──┼──► App stays online even if SMS Service glitches!\n[SMS Service]  ──Reboots ┘",
      "contrast": {
        "termA": "Microservices Architecture",
        "descA": "Separate services per feature; isolated failures, independent scaling, resilient app.",
        "termB": "Monolithic Architecture",
        "descB": "All features bundled in one process; a single bug crashes the entire platform for everyone."
      },
      "teacherNotes": {
        "concept": "Monolithic Architecture, Microservices, Loose Coupling, Fault Isolation",
        "experience": "Students learned why modern systems decompose giant applications into independent services.",
        "realWorld": "Ola, Uber, Netflix, and Amazon transitioned from monoliths to hundreds of microservices for resilience.",
        "question": "What is the main advantage of scaling individual microservices independently?"
      },
      "olaExample": "In Ola, the Ride Dispatch service is completely separate from the Promo Code service. If the promo code server gets overloaded during a festival discount, riders can still book cabs and track drivers without interruption."
    },
    "knowledgeCheck": {
      "question": "Why is Microservices architecture useful for Ola's ride booking and receipt generation features?",
      "options": [
        {
          "id": "A",
          "text": "If the receipt service experiences a crash, live ride booking and cab matching continue running normally.",
          "isCorrect": true,
          "explanation": "Correct! Microservices isolate failures so a problem in one service does not take down the rest of the app."
        },
        {
          "id": "B",
          "text": "It gives every passenger a free helicopter ride to work.",
          "isCorrect": false,
          "explanation": "Incorrect. Microservices are an architectural pattern for server software, not a transportation vehicle."
        },
        {
          "id": "C",
          "text": "It forces all cab drivers to turn off their car engines.",
          "isCorrect": false,
          "explanation": "Incorrect. Microservices keep digital systems running reliably, they do not affect car engines."
        }
      ],
      "hint": "Hint: Think about what happens if one tool in your toolbox breaks—do your other tools keep working?"
    }
  },
  {
    "id": 20,
    "stage": 4,
    "sno": 20,
    "topic": "Authentication and Authorization",
    "concept": "Authentication and Authorization",
    "title": "Level 20: Proving Who You Are vs. What You Are Allowed to Do",
    "time": "Rider Login & Security Gate",
    "usersCount": "Regular Riders vs Customer Support Admins",
    "topicHint": "Who You Are (AuthN) vs. What You Can Do (AuthZ)",
    "situation": "A passenger logs into Ola using their phone number and a 4-digit OTP. They have successfully proven: \"I am Rahul, phone 9876543210.\" Once in the app, Rahul discovers an internal developer URL: 'admin.olacabs.com/issue-refund-10000'. When Rahul clicks it, an unsecure server allows the refund because it thinks: \"Well, Rahul is logged in, so he can do whatever he wants!\"",
    "problem": "What is the critical difference between verifying WHO someone is and checking WHAT they are allowed to do?",
    "simulationType": "auth_identity_verification",
    "choices": [
      {
        "id": "A",
        "text": "Authentication verifies identity (Who are you?); Authorization checks permissions (What are you allowed to do?).",
        "isOptimal": true,
        "consequenceText": "Spot on! Authentication proved Rahul is Rahul via OTP. But Authorization stops Rahul from issuing refunds because his role is 'Regular Rider', not 'Ola Finance Admin'. This keeps the app safe from unauthorized actions!",
        "statImpact": {
          "latency": "Secure Check",
          "capacity": "Strict Roles",
          "risk": "Zero Admin Hacks",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Separated identity verification from role-based permission enforcement.",
          "bottleneck": "Assuming an authenticated user has permission to do everything creates massive security exploits.",
          "reflectionQuestion": "Why should logging in not automatically grant access to admin controls?"
        },
        "successSummary": "Awesome! You enforced proper Authorization to protect administrative controls and user wallets."
      },
      {
        "id": "B",
        "text": "Treat authentication and authorization as the same thing, letting any logged-in rider issue refunds to themselves.",
        "isOptimal": false,
        "consequenceText": "Dishonest users issue millions of rupees in fake refunds to their bank accounts. The company loses all its cash reserves in hours.",
        "statImpact": {
          "latency": "Compromised",
          "capacity": "Fraud Rampant",
          "risk": "Bankruptcy",
          "cost": "Massive Theft"
        },
        "whatHappened": {
          "helped": "Assumed login is all that is required for permissions.",
          "bottleneck": "Lack of authorization checks allows privilege escalation.",
          "reflectionQuestion": "Would a bank let any customer walk into the vault just because they have an ATM card?"
        }
      },
      {
        "id": "C",
        "text": "Remove login completely and let anyone use the app without any phone number or password.",
        "isOptimal": false,
        "consequenceText": "Anyone can impersonate any rider, book cabs under fake names, and steal saved wallet balances. Nobody can use the service safely.",
        "statImpact": {
          "latency": "Lawless",
          "capacity": "Stolen Accounts",
          "risk": "100% Vulnerable",
          "cost": "App Destroyed"
        },
        "whatHappened": {
          "helped": "Removed security to make things easy.",
          "bottleneck": "Online systems require both identity verification and permission control.",
          "reflectionQuestion": "Why does every real-world service require an account and verification?"
        }
      }
    ],
    "discovery": {
      "badge": "Authentication & Authorization",
      "tagline": "Authentication verifies who you are; Authorization decides what you can do",
      "simpleMeaning": "Authentication (AuthN) asks: 'Who are you?' It verifies your identity using credentials like an OTP, password, or fingerprint. Authorization (AuthZ) asks: 'What permissions do you have?' It checks whether your verified role (e.g., Passenger, Driver, Customer Support, Super Admin) is permitted to perform a specific action.",
      "pubgExample": "When you enter your OTP, Ola Authenticates you as 'Rider_Rahul'. When Rahul tries to click 'Refund ₹5,000', the server checks Authorization: if you are a Customer Support Manager, it permits the refund; if you are an ordinary rider, it blocks the button with 'Access Denied'.",
      "analogy": "An airport: Your passport and photo ID Authenticate that you are John. But Authorization checks your boarding pass to see if you can enter the business class lounge, and only authorized pilots can enter the cockpit!",
      "howItWorks": [
        "1. Authentication (AuthN): Rider enters phone number and OTP; server issues a secure session token (JWT).",
        "2. Identity Established: The system now knows exactly which User ID made the request.",
        "3. Authorization (AuthZ): When an action is requested, the server checks the user's role and permissions.",
        "4. Access Decision: If authorized, action completes; if not authorized, server returns HTTP 403 Forbidden."
      ],
      "whyItMatters": "Prevents normal riders from accessing developer tools, issuing fake refunds, or tampering with driver earnings.",
      "visualExplanation": "[Rider Enters OTP] ──► [Authentication (AuthN)] ──► Identity: 'Rider_Rahul'\n                                         │\n[Tries to Issue Refund] ──► [Authorization (AuthZ)] ──► Blocked! (Role: Rider, Not Admin)",
      "contrast": {
        "termA": "Authentication (AuthN)",
        "descA": "Verifies identity ('Who are you?'); uses passwords, OTPs, biometrics, and login tokens.",
        "termB": "Authorization (AuthZ)",
        "descB": "Checks permissions ('What can you do?'); enforces roles (Rider vs Driver vs Support Admin)."
      },
      "teacherNotes": {
        "concept": "Authentication (AuthN), Authorization (AuthZ), RBAC (Role-Based Access Control), Security",
        "experience": "Students learned the vital distinction between verifying identity and granting permission.",
        "realWorld": "OAuth 2.0, JWT tokens, and IAM systems handle AuthN and AuthZ across Ola, Google, and AWS.",
        "question": "If you show your college ID card to enter the campus, is that Authentication or Authorization?"
      },
      "olaExample": "When you enter your OTP, Ola Authenticates you as 'Rider_Rahul'. When Rahul tries to click 'Refund ₹5,000', the server checks Authorization: if you are a Customer Support Manager, it permits the refund; if you are an ordinary rider, it blocks the button with 'Access Denied'."
    },
    "knowledgeCheck": {
      "question": "When Ola checks whether your account has permission to view administrative driver earnings reports, which security step is it performing?",
      "options": [
        {
          "id": "A",
          "text": "Authorization (checking whether your verified account has permission to view internal financial reports).",
          "isCorrect": true,
          "explanation": "Correct! Authorization checks permissions to decide what actions an authenticated user is permitted to do."
        },
        {
          "id": "B",
          "text": "Authentication (asking you to enter an OTP for the first time).",
          "isCorrect": false,
          "explanation": "Incorrect. Authentication verifies who you are, while authorization checks your permissions."
        },
        {
          "id": "C",
          "text": "In-cab air conditioning temperature control.",
          "isCorrect": false,
          "explanation": "Incorrect. Car climate control has nothing to do with software access permissions."
        }
      ],
      "hint": "Hint: The system already knows who you are; it is checking if you have the PERMISSION to view the report."
    }
  },
  {
    "id": 21,
    "stage": 5,
    "sno": 21,
    "topic": "Scalability – Vertical vs. Horizontal Scaling",
    "concept": "Scalability – Vertical vs. Horizontal Scaling",
    "title": "Level 21: Monsoon Rain Rush — Adding 20 Servers vs. 1 Expensive Chip",
    "time": "Heavy Monsoon Storm — Mumbai & Pune",
    "usersCount": "Surge from 10,000 to 300,000 Ride Requests",
    "topicHint": "Upgrading 1 Computer vs. Adding a Team of Computers",
    "situation": "Heavy monsoon rains start in Mumbai. Ride requests suddenly surge from 10,000 to 300,000 in 15 minutes! The main dispatch server computer is running at 99% CPU load and getting red hot. An engineer suggests: \"Let's just keep buying bigger and more expensive RAM and CPU chips for this single computer!\" But the biggest chip on Earth still won't be enough.",
    "problem": "How should Ola scale its dispatch system to handle massive surges in ride requests?",
    "simulationType": "scaling_cluster_nodes",
    "choices": [
      {
        "id": "A",
        "text": "Use Horizontal Scaling: add 20 standard server computers to share the ride booking load as a team.",
        "isOptimal": true,
        "consequenceText": "Spot on! Horizontal Scaling (scaling out) means adding more computers to share the work. There is no limit to how many servers you can add, and if one breaks, the other 19 keep cabs booking smoothly!",
        "statImpact": {
          "latency": "20ms",
          "capacity": "300,000 Smooth",
          "risk": "Zero Single Point of Failure",
          "cost": "Cost-Effective"
        },
        "whatHappened": {
          "helped": "Scaled horizontally by adding standard servers to distribute load.",
          "bottleneck": "Vertical scaling hits hard physical limits, becomes exponentially expensive, and remains a single point of failure.",
          "reflectionQuestion": "Why is hiring 10 normal workers safer than hiring one giant bodybuilder who might get sick?"
        },
        "successSummary": "Great decision! You used horizontal scaling to support 300,000 riders without hardware limits."
      },
      {
        "id": "B",
        "text": "Stick to Vertical Scaling: spend ₹50,00,000 trying to find one giant computer until no bigger parts exist and it crashes.",
        "isOptimal": false,
        "consequenceText": "Single-computer hardware has physical limits. Once you hit the maximum CPU size, you cannot upgrade further. When that single computer crashes, all 300,000 riders lose connection at once.",
        "statImpact": {
          "latency": "Laggy",
          "capacity": "Hardware Ceiling Hit",
          "risk": "Total Single-Point Crash",
          "cost": "Extremely Expensive"
        },
        "whatHappened": {
          "helped": "Upgraded single machine hardware.",
          "bottleneck": "Vertical scaling is limited by physics and costs far more per unit of compute.",
          "reflectionQuestion": "What happens when the fastest processor in the world is still too slow for your traffic?"
        }
      },
      {
        "id": "C",
        "text": "Refuse to let new riders enter the app and lock the server at 10,000 riders forever.",
        "isOptimal": false,
        "consequenceText": "290,000 stranded riders in the rain get 'Service Unavailable' errors. Riders uninstall Ola and book other cabs.",
        "statImpact": {
          "latency": "Locked",
          "capacity": "Capped at 10k",
          "risk": "Massive Customer Churn",
          "cost": "Lost Revenue"
        },
        "whatHappened": {
          "helped": "Avoided scaling by rejecting users.",
          "bottleneck": "Refusing growth destroys business value.",
          "reflectionQuestion": "How should an online business respond when popularity grows?"
        }
      }
    ],
    "discovery": {
      "badge": "Vertical vs. Horizontal Scaling",
      "tagline": "Scaling Up (bigger computer) vs. Scaling Out (more computers working together)",
      "simpleMeaning": "Scalability is the ability of a system to handle more traffic by adding resources. Vertical Scaling ('Scaling Up') means making one computer more powerful by adding faster CPUs and more RAM. Horizontal Scaling ('Scaling Out') means adding more computers to work together as a team.",
      "pubgExample": "When rain starts in Mumbai and ride requests jump from 20,000 to 200,000, Ola automatically spins up 30 new cloud servers (Horizontal Scaling) to share the dispatch load evenly.",
      "analogy": "Moving heavy cargo: Vertical scaling is hiring one bodybuilder (who can still get exhausted or injured). Horizontal scaling is hiring 15 regular movers who easily carry the boxes together.",
      "howItWorks": [
        "1. Vertical Scaling (Scale Up): Fast initially, but hits a hard physical ceiling and becomes very expensive.",
        "2. Horizontal Scaling (Scale Out): Add dozens of standard servers that share the work.",
        "3. Auto-Scaling: Add servers automatically when rain starts, and turn them off at night to save money.",
        "4. High Availability: If 1 out of 30 servers crashes, 29 servers keep running without riders noticing."
      ],
      "whyItMatters": "Horizontal scaling allows Ola to grow from a small startup in one city to a national platform handling millions of rides daily.",
      "visualExplanation": "[Vertical Scaling: 1 Giant Server]\n[Bigger CPU + More RAM] ──► Hits physical hardware limit! (Risky)\n\n[Horizontal Scaling: Fleet of Servers]\n[Server 1] + [Server 2] + [Server 3] + [Server 4] ──► Infinite Growth!",
      "contrast": {
        "termA": "Horizontal Scaling (Scale Out)",
        "descA": "Add more standard computers; virtually unlimited scale, resilient, cost-effective.",
        "termB": "Vertical Scaling (Scale Up)",
        "descB": "Make one computer bigger; hits physical hardware limits, expensive, single point of failure."
      },
      "teacherNotes": {
        "concept": "Scalability, Vertical Scaling (Scale Up), Horizontal Scaling (Scale Out), Auto-Scaling",
        "experience": "Students learned why modern distributed architectures scale horizontally by adding nodes.",
        "realWorld": "Cloud platforms like AWS, GCP, and Azure use horizontal auto-scaling groups for Ola, Swiggy, and Uber.",
        "question": "What happens if you use vertical scaling and that single big computer loses power?"
      },
      "olaExample": "When rain starts in Mumbai and ride requests jump from 20,000 to 200,000, Ola automatically spins up 30 new cloud servers (Horizontal Scaling) to share the dispatch load evenly."
    },
    "knowledgeCheck": {
      "question": "Why does Ola prefer Horizontal Scaling (adding more servers) over Vertical Scaling (buying a bigger server)?",
      "options": [
        {
          "id": "A",
          "text": "You can add as many servers as needed without hardware limits, and if one server crashes, the others keep running.",
          "isCorrect": true,
          "explanation": "Correct! Horizontal scaling offers unlimited expansion and eliminates the single point of failure."
        },
        {
          "id": "B",
          "text": "It makes the physical cab tires last 10 times longer on roads.",
          "isCorrect": false,
          "explanation": "Incorrect. Server scaling manages compute capacity, not physical car tire wear."
        },
        {
          "id": "C",
          "text": "It removes the need for drivers to follow traffic signals.",
          "isCorrect": false,
          "explanation": "Incorrect. Server scaling does not change road traffic laws."
        }
      ],
      "hint": "Hint: Think about teamwork—is it safer to rely on 1 person or a team of 10 people sharing the work?"
    }
  },
  {
    "id": 22,
    "stage": 5,
    "sno": 22,
    "topic": "Load Balancing",
    "concept": "Load Balancing",
    "title": "Level 22: Distributing 100,000 Riders Evenly Across 10 Servers",
    "time": "Evening Rush — 100,000 Booking Requests",
    "usersCount": "100,000 Passengers Queueing Simultaneously",
    "topicHint": "Traffic Director that Shares Incoming Rides Evenly",
    "situation": "At 6:00 PM, 100,000 passengers tap 'Confirm Booking' at the exact same minute. Ola has 10 powerful dispatch servers ready. But there is no traffic director! All 100,000 passengers accidentally connect to Server #1, while Servers #2 through #10 sit completely empty with 0 users! Server #1 catches fire and crashes.",
    "problem": "How can Ola distribute incoming ride requests evenly across all available backend servers?",
    "simulationType": "load_balancer_traffic",
    "choices": [
      {
        "id": "A",
        "text": "Place a Load Balancer in front of the servers to distribute incoming riders evenly across all 10 servers (10,000 each).",
        "isOptimal": true,
        "consequenceText": "Perfect solution! The Load Balancer acts as an intelligent traffic police officer. It inspects server health and distributes ride requests smoothly across all 10 servers. Each server comfortably handles 10,000 riders with zero lag!",
        "statImpact": {
          "latency": "15ms Dispatch",
          "capacity": "100,000 Smooth",
          "risk": "Zero Server Overload",
          "cost": "Even Load"
        },
        "whatHappened": {
          "helped": "Used a Load Balancer to distribute traffic evenly.",
          "bottleneck": "Unbalanced traffic floods one machine while other machines sit idle.",
          "reflectionQuestion": "Why should an Ola load balancer route ride requests to all open dispatch servers?"
        },
        "successSummary": "Brilliant! You placed a load balancer in front of the server fleet to balance traffic evenly."
      },
      {
        "id": "B",
        "text": "Let all 100,000 riders rush directly into Server #1 until it crashes, then tell riders to try again tomorrow.",
        "isOptimal": false,
        "consequenceText": "Server #1 crashes instantly from memory overload. 100,000 riders receive connection errors while 9 other servers sit idle wasting money.",
        "statImpact": {
          "latency": "Crashed",
          "capacity": "Server 1 Overloaded",
          "risk": "100% Failure",
          "cost": "Wasted 9 Idle Servers"
        },
        "whatHappened": {
          "helped": "Did not balance incoming connections.",
          "bottleneck": "A single server cannot handle the entire crowd alone.",
          "reflectionQuestion": "What happens if 1,000 people try to enter a small shop through a single revolving door at once?"
        }
      },
      {
        "id": "C",
        "text": "Turn off servers 2 through 10 so riders have no choice but to wait in a 4-hour queue for Server #1.",
        "isOptimal": false,
        "consequenceText": "Turning off healthy servers makes the bottleneck even worse. Riders face a 4-hour queue just to get a 15-minute cab, and delete the app.",
        "statImpact": {
          "latency": "4-Hour Queue",
          "capacity": "Crippled Fleet",
          "risk": "Customer Exodus",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Reduced total capacity instead of utilizing it.",
          "bottleneck": "Under-provisioning creates artificial bottlenecks.",
          "reflectionQuestion": "Why would you shut down healthy servers when traffic is high?"
        }
      }
    ],
    "discovery": {
      "badge": "Load Balancing",
      "tagline": "The intelligent traffic cop that distributes incoming requests evenly across servers",
      "simpleMeaning": "A Load Balancer is a software or hardware device that sits between users and backend servers. It acts like a traffic director, distributing incoming requests across multiple servers so no single server gets overwhelmed while others sit empty.",
      "pubgExample": "When 100,000 riders book cabs across Delhi, the Load Balancer routes rider 1 to Server A, rider 2 to Server B, rider 3 to Server C, and so on (Round Robin), keeping all servers fast and healthy.",
      "analogy": "A security guard at a busy bank: Directing people to open cashier counters (Counter 1, Counter 2, Counter 3) so one counter doesn't have 100 people while the other two counters sit idle.",
      "howItWorks": [
        "1. Single Entry Point: All rider apps connect to one clean address (the Load Balancer).",
        "2. Balancing Algorithms: Uses rules like Round Robin (taking turns) or Least Connections (finding the least busy server).",
        "3. Health Checks: Constantly checks server health. If Server #4 crashes, the load balancer stops sending requests there.",
        "4. High Availability: Ensures seamless cab dispatch even during peak festival hours."
      ],
      "whyItMatters": "Without load balancing, multiple servers cannot work together effectively, and traffic spikes crash individual machines.",
      "visualExplanation": "                 [100,000 Riders Booking Cabs]\n                               │\n                               ▼\n                       [Load Balancer]\n            ┌──────────────────┼──────────────────┐\n            ▼                  ▼                  ▼\n       [Server 1]         [Server 2]         [Server 3]\n     (10,000 Rides)     (10,000 Rides)     (10,000 Rides)",
      "contrast": {
        "termA": "Load Balanced Fleet",
        "descA": "Traffic distributed evenly across all healthy servers; optimal performance and zero overload.",
        "termB": "Direct Server Access",
        "descB": "Riders connect to one server directly; one server crashes under traffic while others sit idle."
      },
      "teacherNotes": {
        "concept": "Load Balancing, Reverse Proxy, Round Robin, Health Checks, Least Connections",
        "experience": "Students learned how load balancers act as traffic directors to maximize resource utilization.",
        "realWorld": "Nginx, HAProxy, AWS ALB (Application Load Balancer), and Cloudflare route trillions of web requests daily.",
        "question": "What does a load balancer do if one of the backend servers suddenly dies?"
      },
      "olaExample": "When 100,000 riders book cabs across Delhi, the Load Balancer routes rider 1 to Server A, rider 2 to Server B, rider 3 to Server C, and so on (Round Robin), keeping all servers fast and healthy."
    },
    "knowledgeCheck": {
      "question": "What is the primary job of a Load Balancer in Ola's booking infrastructure?",
      "options": [
        {
          "id": "A",
          "text": "To distribute incoming ride requests evenly across multiple backend servers so no single server gets overwhelmed.",
          "isCorrect": true,
          "explanation": "Correct! A load balancer distributes traffic evenly across healthy servers to prevent overloads and crashes."
        },
        {
          "id": "B",
          "text": "To balance the luggage weight inside the cab's trunk.",
          "isCorrect": false,
          "explanation": "Incorrect. Load balancing is a server networking concept, not physical car luggage weight."
        },
        {
          "id": "C",
          "text": "To steer the cab when the driver takes a sharp turn.",
          "isCorrect": false,
          "explanation": "Incorrect. Load balancers route network traffic, they do not steer physical cars."
        }
      ],
      "hint": "Hint: Think about a traffic police officer directing cars into different open lanes on a highway."
    }
  },
  {
    "id": 23,
    "stage": 5,
    "sno": 23,
    "topic": "Caching",
    "concept": "Caching",
    "title": "Level 23: Fast Driver Profile Loading in 2ms vs 120ms Disk Reads",
    "time": "Driver Match Screen — 5,000,000 Daily Lookups",
    "usersCount": "5,000,000 Rides Matching Drivers",
    "topicHint": "Ultra-Fast RAM Storage for Frequently Read Data",
    "situation": "Every time a rider is matched with a cab, the app displays the driver's name, car model, license plate, and 4.8-star rating. Reading this info from the main database hard drive takes 120 milliseconds. When 5 million riders open the app during evening rush, the database hard drives choke under millions of identical read requests, making the app freeze for 10 seconds!",
    "problem": "How can Ola serve frequently viewed driver profiles in 2 milliseconds instead of hitting slow hard drives every time?",
    "simulationType": "caching_sticky_notepad",
    "choices": [
      {
        "id": "A",
        "text": "Use an in-memory Cache (like Redis) to store frequently requested driver details in ultra-fast RAM memory.",
        "isOptimal": true,
        "consequenceText": "Blazing fast! RAM memory is over 100 times faster than reading from hard drives. The cache serves driver details in just 2 milliseconds, and takes 90% of the read traffic off the database disks!",
        "statImpact": {
          "latency": "2ms Instant",
          "capacity": "5M Lookups Smooth",
          "risk": "Zero DB Overload",
          "cost": "Optimized"
        },
        "whatHappened": {
          "helped": "Cached frequently read driver profile data in high-speed RAM.",
          "bottleneck": "Disk I/O is slow; reading the same data from hard drives millions of times causes severe bottlenecks.",
          "reflectionQuestion": "Why do you keep your favorite pen on your desk instead of walking to the store room every time you write?"
        },
        "successSummary": "Awesome! You introduced in-memory caching to turn 120ms disk reads into 2ms instant responses."
      },
      {
        "id": "B",
        "text": "Force every single ride match to query the slow hard drives directly, letting the database crash under load.",
        "isOptimal": false,
        "consequenceText": "Database hard drives get overwhelmed with millions of disk reads. The app freezes, driver photos show as blank gray boxes, and the database crashes.",
        "statImpact": {
          "latency": "10,000ms Freeze",
          "capacity": "Disk I/O Bottleneck",
          "risk": "Database Crash",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Did not use temporary fast memory.",
          "bottleneck": "Hard drives have mechanical and physical I/O limits.",
          "reflectionQuestion": "What happens if 1,000 students ask the teacher the exact same question in 10 seconds instead of checking the board?"
        }
      },
      {
        "id": "C",
        "text": "Delete driver ratings and car model names completely so there is no data to load on the screen.",
        "isOptimal": false,
        "consequenceText": "Passengers refuse to board cabs when they cannot verify the driver's name or car license plate for safety. Trust is ruined.",
        "statImpact": {
          "latency": "Bland",
          "capacity": "No Verification",
          "risk": "Safety Complaints",
          "cost": "Lost Trust"
        },
        "whatHappened": {
          "helped": "Removed features to avoid system optimization.",
          "bottleneck": "User experience and safety must be fast, not degraded.",
          "reflectionQuestion": "Can a cab app be safe if you hide the driver's identity from riders?"
        }
      }
    ],
    "discovery": {
      "badge": "Caching",
      "tagline": "Storing popular data in super-fast RAM memory for instant lightning retrieval",
      "simpleMeaning": "A Cache is a temporary high-speed data store kept in computer RAM (Random Access Memory). Because reading from RAM takes less than 2 milliseconds (compared to 100+ milliseconds from disk storage), caching frequently accessed data makes apps feel instant and shields the database from traffic spikes.",
      "pubgExample": "When your Ola cab is assigned, the driver's photo, car model, and 4.8 rating are served straight from an in-memory Redis cache in 2 milliseconds. The main database disk is only touched if the driver's info changes.",
      "analogy": "Keeping your favorite textbook right on your study desk (cache) instead of walking downstairs to the school library basement (database) every time you need to look up a formula.",
      "howItWorks": [
        "1. Cache Hit: Request arrives -> Check fast RAM -> Data found! Return in 2ms.",
        "2. Cache Miss: Request arrives -> Check fast RAM -> Not found -> Fetch from slower database disk -> Save copy in Cache -> Return data.",
        "3. Invalidation (TTL): When a driver updates their phone or rating, the cache updates automatically.",
        "4. Database Protection: Up to 95% of read queries are handled by the cache, keeping the main database relaxed."
      ],
      "whyItMatters": "Caching is the single most effective way to make applications lightning fast and prevent databases from crashing during rush hours.",
      "visualExplanation": "[Rider Matched with Driver]\n         │\n         ▼\n   [Redis Cache: Fast RAM] ──Found! (Cache Hit)──► 2ms Instant Load!\n         │ (If not found)\n         ▼\n   [Main Database: Disk] ──Fetch & Save Copy in Cache──► 120ms",
      "contrast": {
        "termA": "Cached Read (RAM)",
        "descA": "Data retrieved from ultra-fast memory in 2ms; zero database strain.",
        "termB": "Direct Disk Read",
        "descB": "Data read from physical hard drives in 120ms; overloads database disks under heavy traffic."
      },
      "teacherNotes": {
        "concept": "Caching, RAM vs Disk, Cache Hit / Cache Miss, Redis, Memcached, TTL (Time-To-Live)",
        "experience": "Students learned why RAM caching is orders of magnitude faster than disk lookups.",
        "realWorld": "Redis and Memcached power caching for Ola, Twitter, Reddit, and YouTube.",
        "question": "What happens when data is updated in the database? What must happen to the cached copy?"
      },
      "olaExample": "When your Ola cab is assigned, the driver's photo, car model, and 4.8 rating are served straight from an in-memory Redis cache in 2 milliseconds. The main database disk is only touched if the driver's info changes."
    },
    "knowledgeCheck": {
      "question": "How does Caching help the Ola app display driver details in 2 milliseconds instead of lagging?",
      "options": [
        {
          "id": "A",
          "text": "It keeps frequently viewed driver details in ultra-fast RAM memory for instant delivery.",
          "isCorrect": true,
          "explanation": "Correct! RAM is over 100 times faster than hard disk drives, delivering data in just a few milliseconds."
        },
        {
          "id": "B",
          "text": "It forces riders to download the entire Ola app again every time a cab arrives.",
          "isCorrect": false,
          "explanation": "Incorrect. Caching speeds up data retrieval, it does not re-download the app."
        },
        {
          "id": "C",
          "text": "It automatically cancels the ride if the driver takes a wrong turn.",
          "isCorrect": false,
          "explanation": "Incorrect. Caching is a data storage technique, not a ride cancellation rule."
        }
      ],
      "hint": "Hint: Think about why keeping a book on your desk is faster than walking to the library basement."
    }
  },
  {
    "id": 24,
    "stage": 5,
    "sno": 24,
    "topic": "Content Delivery Network (CDN)",
    "concept": "Content Delivery Network (CDN)",
    "title": "Level 24: Downloading Car Icons & Map Tiles Instantly Across India",
    "time": "National App Launch — 50 Million Downloads",
    "usersCount": "50,000,000 Users Downloading Map Tiles & Icons",
    "topicHint": "Worldwide Edge Servers Delivering Large Files Locally",
    "situation": "Ola releases a new app update with high-resolution map tiles, 3D car icons (Auto, Mini, Prime, SUV), and driver profile avatars. The main origin storage server is located in Frankfurt, Germany. A rider in Chennai tries to download the map graphics. The heavy images must travel across 8,000 kilometers and dozens of international network cables, taking 15 seconds to load a simple car icon!",
    "problem": "How can riders all over India download heavy map images, car graphics, and icons in milliseconds?",
    "simulationType": "cdn_edge_kiosks",
    "choices": [
      {
        "id": "A",
        "text": "Use a Content Delivery Network (CDN) to cache image files on local edge servers located right in Chennai, Mumbai, and Delhi.",
        "isOptimal": true,
        "consequenceText": "Lightning fast loading! With a CDN, static images and map tiles are cached on local edge servers near the riders. The Chennai rider downloads the car icons from a local Chennai server in 10 milliseconds with zero lag!",
        "statImpact": {
          "latency": "10ms Local Ping",
          "capacity": "50M Downloads Fast",
          "risk": "Zero Origin Overload",
          "cost": "Bandwidth Optimized"
        },
        "whatHappened": {
          "helped": "Cached large static files at local edge locations near end users.",
          "bottleneck": "Long geographic distances increase latency, packet drops, and transmission time.",
          "reflectionQuestion": "Why buy milk from a local neighborhood store instead of ordering from a dairy farm 8,000 km away?"
        },
        "successSummary": "Brilliant! You deployed a CDN to deliver heavy app assets from local edge servers across the country."
      },
      {
        "id": "B",
        "text": "Force all 50 million riders in India to download every single image directly from that one server in Germany.",
        "isOptimal": false,
        "consequenceText": "50 million users hitting one server in Germany saturates the internet pipes. The server crashes, riders see blank gray squares instead of cars, and complaints explode.",
        "statImpact": {
          "latency": "15-Second Blank Screens",
          "capacity": "Origin Server Fried",
          "risk": "Global Outage",
          "cost": "Massive Overload"
        },
        "whatHappened": {
          "helped": "Did not use edge distribution.",
          "bottleneck": "A single origin server cannot handle global bandwidth demands.",
          "reflectionQuestion": "Can one local post office deliver packages to the entire planet on the same morning?"
        }
      },
      {
        "id": "C",
        "text": "Delete all car images, maps, and icons so riders look at a blank black screen forever.",
        "isOptimal": false,
        "consequenceText": "A cab booking app without maps or car icons looks broken and unusable. Riders delete the app immediately.",
        "statImpact": {
          "latency": "Ugly",
          "capacity": "No Visuals",
          "risk": "Customer Abandonment",
          "cost": "Lost Revenue"
        },
        "whatHappened": {
          "helped": "Gave up on delivering visual content.",
          "bottleneck": "Content delivery is a solved engineering challenge that should be leveraged.",
          "reflectionQuestion": "How do modern streaming and mobility companies deliver media daily?"
        }
      }
    ],
    "discovery": {
      "badge": "Content Delivery Network (CDN)",
      "tagline": "A worldwide network of edge servers bringing heavy content close to the user",
      "simpleMeaning": "A Content Delivery Network (CDN) is a network of servers distributed across different cities (called Edge Servers). When a user downloads static content like map tiles, car icons, banners, or app updates, the CDN serves the file from the geographically closest server, resulting in ultra-fast speeds and low latency.",
      "pubgExample": "When Ola releases new car graphics, the files are uploaded once to the origin server, and the CDN copies them to edge servers in Chennai, Mumbai, Delhi, and Kolkata. An Indian rider downloads the icons in milliseconds from their own city.",
      "analogy": "A local neighborhood grocery warehouse: Instead of traveling 1,000 miles to the manufacturer's factory to buy groceries, you walk down the street to your local neighborhood shop that keeps fresh inventory on hand.",
      "howItWorks": [
        "1. Origin Server: The company uploads new map graphics and car icons to their origin storage.",
        "2. Edge Caching: CDN edge servers across hundreds of cities cache copies of the files.",
        "3. Geo-DNS Routing: When a rider opens the app, the system directs them to the closest physical server.",
        "4. Offload Origin: The central server is protected from millions of direct image download requests."
      ],
      "whyItMatters": "Reduces load times from seconds to milliseconds, saves bandwidth costs, and ensures smooth visuals without crashing central servers.",
      "visualExplanation": "[Origin Server: Frankfurt, Germany]\n       │ (Copies file once)\n       ▼\n┌──────┴──────────────────────────┐\n▼                                 ▼\n[CDN Edge: Chennai]               [CDN Edge: Mumbai]\n       │ (10ms Local Download)           │ (10ms Local Download)\n       ▼                                 ▼\n[Rider in Chennai: Instant!]      [Rider in Mumbai: Instant!]",
      "contrast": {
        "termA": "CDN Edge Delivery",
        "descA": "Files downloaded from local servers nearby; low latency, lightning fast downloads.",
        "termB": "Single Origin Server",
        "descB": "Files travel across oceans; slow downloads, high packet loss, server crashes."
      },
      "teacherNotes": {
        "concept": "Content Delivery Network (CDN), Edge Servers, PoP (Points of Presence), Latency, Bandwidth Offload",
        "experience": "Students learned how CDNs solve geographic distance latency for large media and static files.",
        "realWorld": "Cloudflare, Akamai, and AWS CloudFront power media delivery for Ola, Netflix, YouTube, and Swiggy.",
        "question": "Why is a CDN perfect for map image tiles and car icons, but not for live cab booking matching?"
      },
      "olaExample": "When Ola releases new car graphics, the files are uploaded once to the origin server, and the CDN copies them to edge servers in Chennai, Mumbai, Delhi, and Kolkata. An Indian rider downloads the icons in milliseconds from their own city."
    },
    "knowledgeCheck": {
      "question": "Why does Ola use a Content Delivery Network (CDN) for downloading car icons and map tiles?",
      "options": [
        {
          "id": "A",
          "text": "To deliver heavy files from local edge servers physically close to the rider, making screens load in milliseconds.",
          "isCorrect": true,
          "explanation": "Correct! CDNs cache heavy content at edge locations worldwide, drastically cutting distance and download times."
        },
        {
          "id": "B",
          "text": "To make the physical cab drive without any driver inside.",
          "isCorrect": false,
          "explanation": "Incorrect. CDNs deliver media files over computer networks; they do not control physical car steering."
        },
        {
          "id": "C",
          "text": "To charge riders triple the fare when it rains.",
          "isCorrect": false,
          "explanation": "Incorrect. CDNs are for fast file delivery, not surge pricing algorithms."
        }
      ],
      "hint": "Hint: Think about downloading an image from a server in your own city versus a server on the other side of the planet."
    }
  },
  {
    "id": 25,
    "stage": 6,
    "sno": 25,
    "topic": "Message Queues and Background Processing",
    "concept": "Message Queues and Background Processing",
    "title": "Level 25: Generating Trip Invoices Without Freezing the App",
    "time": "Trip Completion Screen — 'Ride Completed!'",
    "usersCount": "100,000 Rides Finishing Simultaneously",
    "topicHint": "Doing Heavy Tasks in the Background Without Making Users Wait",
    "situation": "Your Ola ride finishes: 'You have reached your destination!' At that exact moment, four heavy tasks must happen: (1) calculate driver commission, (2) generate a PDF invoice, (3) send an email receipt, and (4) send an SMS notification. The current server executes these tasks synchronously, forcing the rider and driver to stare at a frozen loading screen for 20 seconds before they can exit the app!",
    "problem": "How can Ola let riders and drivers exit the app immediately while finishing heavy invoice tasks in the background?",
    "simulationType": "message_queues_async",
    "choices": [
      {
        "id": "A",
        "text": "Use a Message Queue: drop the invoice tasks into a background queue and let riders exit the app immediately.",
        "isOptimal": true,
        "consequenceText": "Smooth and fast! The server drops the 'Trip_Completed' event into a Message Queue (like RabbitMQ or Kafka) in 5 milliseconds and immediately unlocks the app. Dedicated background worker servers generate the PDF invoices and send emails smoothly in the background!",
        "statImpact": {
          "latency": "5ms App Response",
          "capacity": "Zero Lag",
          "risk": "Zero Frozen Screens",
          "cost": "Asynchronous Workers"
        },
        "whatHappened": {
          "helped": "Decoupled user response from heavy background processing using a message queue.",
          "bottleneck": "Synchronous processing blocks the user until every slow sub-task finishes.",
          "reflectionQuestion": "Why does a waiter take your food order ticket to the kitchen and serve the next table instead of cooking the meal himself?"
        },
        "successSummary": "Brilliant! You used a message queue for asynchronous background processing to eliminate rider wait times."
      },
      {
        "id": "B",
        "text": "Keep riders and drivers frozen on the payment screen for 20 seconds until every single email and PDF finishes.",
        "isOptimal": false,
        "consequenceText": "Riders hate staring at a frozen screen when they are in a hurry to catch a flight. Many force-close the app, causing corrupted payment states.",
        "statImpact": {
          "latency": "20,000ms Delay",
          "capacity": "Blocked Connections",
          "risk": "Frustrated Users",
          "cost": "Poor UX"
        },
        "whatHappened": {
          "helped": "Processed tasks sequentially on the main thread.",
          "bottleneck": "Synchronous blocking creates terrible user experiences.",
          "reflectionQuestion": "Would you keep using an app that freezes for half a minute after every ride?"
        }
      },
      {
        "id": "C",
        "text": "Cancel all trip invoices, receipts, and driver commissions completely so the server has zero work to do.",
        "isOptimal": false,
        "consequenceText": "Without invoices, corporate riders cannot claim expenses, and drivers never get their commission records. The business faces legal penalties.",
        "statImpact": {
          "latency": "Lawless",
          "capacity": "No Records",
          "risk": "Tax Violations",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Avoided computing background work by deleting features.",
          "bottleneck": "Engineering must enable features asynchronously, not remove them.",
          "reflectionQuestion": "Why are invoices and financial receipts legally required for businesses?"
        }
      }
    ],
    "discovery": {
      "badge": "Message Queues & Background Processing",
      "tagline": "Handing off heavy tasks to a background line so users never have to wait",
      "simpleMeaning": "A Message Queue is an ordered buffer (like a to-do list line) that holds tasks. Instead of making a user wait for slow jobs (like generating PDF invoices, sending emails, or calculating commissions) to finish, the main server quickly drops a message into the queue and lets the user go. Background worker computers pick up tasks from the queue and finish them asynchronously.",
      "pubgExample": "When your Ola ride ends, the server drops a 'Generate_Invoice' message into Kafka in 3 milliseconds and immediately shows 'Ride Finished!'. In the background, worker servers format your PDF receipt and email it to you while you walk into your office.",
      "analogy": "A restaurant order ticket: The waiter takes your food order, clips the paper ticket to the kitchen order line (message queue), and immediately walks to the next customer. The chefs in the kitchen (worker servers) cook the meals in the background.",
      "howItWorks": [
        "1. Producer (App Server): Creates a message: 'Process Trip #89421' and pushes it into the queue in 2ms.",
        "2. Instant Response: The rider's phone screen immediately transitions to the rating screen with zero delay.",
        "3. Message Queue (RabbitMQ / Kafka): Safely stores tasks in order until processed.",
        "4. Consumers (Worker Fleet): Background servers pull jobs from the queue and send emails, SMS, and update ledgers."
      ],
      "whyItMatters": "Keeps user interfaces fast and responsive, and buffers traffic spikes safely so servers don't crash under load.",
      "visualExplanation": "[Ride Finishes!] ──Drop Task (2ms)──► [Message Queue: Tasks Waiting in Line]\n       │                                                │\n       ▼                                                ▼\n[Rider Exits App Instantly!]            [Background Worker Computers]\n                                        (Generates PDF, Sends Email)",
      "contrast": {
        "termA": "Asynchronous (Message Queue)",
        "descA": "Task dropped in queue; user gets instant response; workers process in background.",
        "termB": "Synchronous (Blocking)",
        "descB": "User waits on frozen screen until all calculations, PDF generation, and emails complete."
      },
      "teacherNotes": {
        "concept": "Message Queues, Asynchronous Processing, Producers/Consumers, Kafka, RabbitMQ, Decoupling",
        "experience": "Students learned why decoupling time-consuming work improves user experience and system reliability.",
        "realWorld": "Kafka, RabbitMQ, and AWS SQS power asynchronous workflows at Ola, Uber, and Amazon.",
        "question": "What happens to the tasks in a message queue if traffic suddenly triples for 10 minutes?"
      },
      "olaExample": "When your Ola ride ends, the server drops a 'Generate_Invoice' message into Kafka in 3 milliseconds and immediately shows 'Ride Finished!'. In the background, worker servers format your PDF receipt and email it to you while you walk into your office."
    },
    "knowledgeCheck": {
      "question": "What is the primary benefit of using a Message Queue for Ola trip completion tasks?",
      "options": [
        {
          "id": "A",
          "text": "Riders can exit the app immediately while heavy invoice and email generation happens safely in the background.",
          "isCorrect": true,
          "explanation": "Correct! Message queues decouple tasks, keeping user screens fast while workers process jobs asynchronously."
        },
        {
          "id": "B",
          "text": "It guarantees that the rider will get a free ride tomorrow.",
          "isCorrect": false,
          "explanation": "Incorrect. Message queues handle background server tasks, not promotional ride discounts."
        },
        {
          "id": "C",
          "text": "It deletes the driver's bank account after every trip.",
          "isCorrect": false,
          "explanation": "Incorrect. Message queues manage data processing safely without destroying accounts."
        }
      ],
      "hint": "Hint: Think about being handed a token at a bakery—you can sit down while the bakers bake your cake in the back."
    }
  },
  {
    "id": 26,
    "stage": 6,
    "sno": 26,
    "topic": "Fault Tolerance and Failure Handling",
    "concept": "Fault Tolerance and Failure Handling",
    "title": "Level 26: What Happens When a Sub-System Dies Mid-Trip?",
    "time": "Evening Peak — Live Ride in Progress",
    "usersCount": "50,000 Live Trips in Progress",
    "topicHint": "Keeping the System Running Even When Sub-Components Break",
    "situation": "You are sitting inside an Ola cab moving down the highway. In the cloud data center, a third-party SMS marketing server crashes, and one secondary database replica disk overheats. A beginner programmer panics and suggests shutting down the entire Ola app and cancelling all 50,000 active trips on the road!",
    "problem": "How should a robust system behave when individual secondary parts or services fail?",
    "simulationType": "fault_tolerance_resilience",
    "choices": [
      {
        "id": "A",
        "text": "Apply Fault Tolerance: isolate the failed SMS service, degrade gracefully, and let live cab rides continue smoothly.",
        "isOptimal": true,
        "consequenceText": "Masterful engineering! With Fault Tolerance and Graceful Degradation, core ride dispatch and live GPS tracking continue without interruption. The passenger reaches home safely, and the failed background SMS service reboots automatically behind the scenes!",
        "statImpact": {
          "latency": "25ms Smooth Trip",
          "capacity": "Zero Interruption",
          "risk": "High Resilience",
          "cost": "Redundant Design"
        },
        "whatHappened": {
          "helped": "Used graceful degradation and health checks to survive partial failure.",
          "bottleneck": "Treating any single sub-component failure as fatal ruins the entire application.",
          "reflectionQuestion": "If a car's radio stops working, should the car engine shut off on the highway?"
        },
        "successSummary": "Outstanding! You applied fault tolerance principles so active cab rides finished without interruption."
      },
      {
        "id": "B",
        "text": "Cancel all 50,000 active cab rides on the highway immediately because one secondary marketing SMS server died.",
        "isOptimal": false,
        "consequenceText": "Stranding 50,000 passengers on dark highways causes massive panic, police reports, and media fury. The company faces immediate regulatory bans.",
        "statImpact": {
          "latency": "Rides Aborted",
          "capacity": "Massive Outage",
          "risk": "Public Disaster",
          "cost": "Total Brand Ruin"
        },
        "whatHappened": {
          "helped": "Overreacted to a minor sub-system failure.",
          "bottleneck": "Lack of fault isolation allows non-critical failures to bring down critical workloads.",
          "reflectionQuestion": "Why should non-critical services never bring down core transportation?"
        }
      },
      {
        "id": "C",
        "text": "Ignore all errors, turn off crash monitoring, and pretend computer hardware never breaks.",
        "isOptimal": false,
        "consequenceText": "Ignoring errors means broken servers stay broken. Unhandled crashes cascade into other services, eventually leading to a complete system blackout.",
        "statImpact": {
          "latency": "Unmonitored",
          "capacity": "Cascading Outages",
          "risk": "Total Blackout",
          "cost": "Uncontrollable Failure"
        },
        "whatHappened": {
          "helped": "Ignored failure handling completely.",
          "bottleneck": "Uncontained failures cascade across distributed networks.",
          "reflectionQuestion": "What happens if you ignore a warning light on your car dashboard?"
        }
      }
    ],
    "discovery": {
      "badge": "Fault Tolerance & Failure Handling",
      "tagline": "Designing systems to stay alive and functional even when parts break",
      "simpleMeaning": "Fault Tolerance is the ability of a system to keep operating smoothly even when individual hardware or software parts fail. Key techniques include Redundancy (backup servers ready to take over), Graceful Degradation (non-essential features turn off while core features keep running), and Circuit Breakers (stopping cascading errors).",
      "pubgExample": "If Ola's driver review rating service crashes, the app degrades gracefully: riders can still book cabs, track routes, and pay fares 100% smoothly while the review service quietly restarts in the background.",
      "analogy": "A twin-engine passenger airplane: If one engine experiences a failure mid-flight, the plane does not fall out of the sky; it continues flying safely and lands using the second engine.",
      "howItWorks": [
        "1. Expect Failure: Hardware, cables, and disks WILL fail eventually in large systems.",
        "2. Redundancy: Always have standby backup servers ready to take over in seconds.",
        "3. Graceful Degradation: If a secondary feature (like promo codes or SMS) fails, preserve core cab booking.",
        "4. Circuit Breakers: Stop sending requests to a broken service so it has time to recover without crashing others."
      ],
      "whyItMatters": "Ensures the app maintains 99.99% uptime so passengers don't get stranded on roads during server glitches.",
      "visualExplanation": "[Core Cab Dispatch Server] ──► [Smooth Ride Continues! (100% Uptime)]\n                                        │\n[SMS Marketing Server Dies!] ──Degrades Gracefully──► (Skips SMS, but ride completes safely!)",
      "contrast": {
        "termA": "Fault Tolerant System",
        "descA": "Components fail independently; core features remain active; self-healing and redundant.",
        "termB": "Fragile System",
        "descB": "One tiny secondary error cascades and crashes the entire application for all users."
      },
      "teacherNotes": {
        "concept": "Fault Tolerance, High Availability, Graceful Degradation, Circuit Breaker, Redundancy",
        "experience": "Students learned why systems must be architected to survive inevitable component failures.",
        "realWorld": "Netflix built 'Chaos Monkey' to intentionally terminate production servers to prove fault tolerance.",
        "question": "What is 'graceful degradation' and how does it protect the core rider experience?"
      },
      "olaExample": "If Ola's driver review rating service crashes, the app degrades gracefully: riders can still book cabs, track routes, and pay fares 100% smoothly while the review service quietly restarts in the background."
    },
    "knowledgeCheck": {
      "question": "In Ola, which of the following is an example of Fault Tolerance and Graceful Degradation?",
      "options": [
        {
          "id": "A",
          "text": "If the promotional discount service crashes, the core ride booking and live GPS tracking continue working smoothly.",
          "isCorrect": true,
          "explanation": "Correct! Fault tolerance ensures that a secondary failure does not bring down the core transportation experience."
        },
        {
          "id": "B",
          "text": "The cab stops on the highway and refuses to move until a new update is downloaded.",
          "isCorrect": false,
          "explanation": "Incorrect. That would be catastrophic system failure, the exact opposite of fault tolerance."
        },
        {
          "id": "C",
          "text": "The app uninstalls itself from your phone if you hit a traffic bump.",
          "isCorrect": false,
          "explanation": "Incorrect. Road bumps have nothing to do with software fault tolerance."
        }
      ],
      "hint": "Hint: Think about what happens if a reading light on a plane breaks—does the plane keep flying?"
    }
  },
  {
    "id": 27,
    "stage": 6,
    "sno": 27,
    "topic": "Rate Limiting",
    "concept": "Rate Limiting",
    "title": "Level 27: Stopping Bot Scripts from Spamming 10,000 Fake Bookings",
    "time": "Morning Rush — Security Alert",
    "usersCount": "1 Malicious Bot Script vs 500,000 Normal Riders",
    "topicHint": "Limiting Request Speed to Protect Servers from Spam",
    "situation": "A malicious attacker writes an automated computer bot script that sends 10,000 fake ride booking requests and OTP requests every single second to Ola's servers. The dispatch servers get so overwhelmed answering the bot's spam that legitimate passengers trying to book cabs get connection timeouts and cannot go to work!",
    "problem": "How can Ola protect its servers and real passengers from being flooded by spam bots?",
    "simulationType": "rate_limiter_turnstile",
    "choices": [
      {
        "id": "A",
        "text": "Apply Rate Limiting: enforce a limit of 10 requests per minute per user/IP; block or throttle excess bot spam.",
        "isOptimal": true,
        "consequenceText": "Security victory! With Rate Limiting, the bot's spam is instantly blocked with HTTP 429 'Too Many Requests'. The bot is neutralized, server CPU drops back to normal, and real passengers enjoy fast, uninterrupted cab booking!",
        "statImpact": {
          "latency": "20ms Normal",
          "capacity": "Protected Fleet",
          "risk": "Zero Bot Flooding",
          "cost": "Spam Throttled"
        },
        "whatHappened": {
          "helped": "Enforced rate limiting to throttle excessive requests from abusive clients.",
          "bottleneck": "Unconstrained API endpoints allow a single malicious client to consume all server resources.",
          "reflectionQuestion": "Why does a bank ATM limit you to 3 incorrect PIN attempts?"
        },
        "successSummary": "Awesome! You implemented rate limiting to protect dispatch servers from abusive bot attacks."
      },
      {
        "id": "B",
        "text": "Allow the bot to send unlimited requests with no restrictions until server memory fills up and crashes for everyone.",
        "isOptimal": false,
        "consequenceText": "The bot exhausts all server memory and network connections. The booking portal crashes, and 500,000 real riders cannot book cabs.",
        "statImpact": {
          "latency": "Crashed",
          "capacity": "Memory Exhausted",
          "risk": "Denial of Service",
          "cost": "Total Blackout"
        },
        "whatHappened": {
          "helped": "Left endpoints open without limits.",
          "bottleneck": "Unchecked request volume leads to denial of service.",
          "reflectionQuestion": "What happens if 10,000 people try to enter a small shop at the exact same second?"
        }
      },
      {
        "id": "C",
        "text": "Disconnect all human riders from the app so the server can spend 100% of its power answering the bot.",
        "isOptimal": false,
        "consequenceText": "Banning human riders to serve a spam bot completely defeats the purpose of running a business. All riders leave permanently.",
        "statImpact": {
          "latency": "Absurd",
          "capacity": "Zero Real Users",
          "risk": "Business Destroyed",
          "cost": "Total Failure"
        },
        "whatHappened": {
          "helped": "Sacrificed users to satisfy an attacker.",
          "bottleneck": "Systems exist to serve legitimate users, not attackers.",
          "reflectionQuestion": "Why would an online service prioritize bots over real paying passengers?"
        }
      }
    ],
    "discovery": {
      "badge": "Rate Limiting",
      "tagline": "Controlling the speed of incoming requests to protect servers from spam and attacks",
      "simpleMeaning": "Rate Limiting means setting a maximum number of requests a user, IP address, or device can make in a given time period (for example, maximum 10 requests per minute). If a script or bot sends requests faster than the limit, the server temporarily blocks them with an HTTP 429 'Too Many Requests' response.",
      "pubgExample": "If an attacker tries to spam the 'Send OTP' or 'Book Cab' button 5,000 times a minute using a bot, Ola's Rate Limiter allows the first few requests and immediately blocks the rest, protecting the server for real riders.",
      "analogy": "A security bouncer at a popular club entrance: The bouncer allows 5 people through the door per minute so the dance floor doesn't get dangerously crushed.",
      "howItWorks": [
        "1. Set Threshold: Define a safe limit (e.g., 5 booking requests per minute per phone number).",
        "2. Token Bucket Algorithm: Tracks incoming request tokens in fast memory.",
        "3. Allow Normal Traffic: Real passengers tapping naturally never hit the limit.",
        "4. Throttle Abuse: Bots sending hundreds of requests per second are blocked with HTTP 429."
      ],
      "whyItMatters": "Protects systems against Denial of Service (DoS) attacks, brute-force OTP guessing, and runaway bugs that flood servers.",
      "visualExplanation": "[Real Rider: 1 Req/Min] ─────Allowed!───► [Ola Server: Healthy (20ms)]\n[Bot Script: 5,000 Req/Sec] ──Blocked!───► [Rate Limiter (HTTP 429 Too Many Requests)]",
      "contrast": {
        "termA": "Rate Limited API",
        "descA": "Restricts request frequency per user/IP; shields servers from spam bots and DDoS attacks.",
        "termB": "Unprotected API",
        "descB": "Accepts unlimited requests; a single spam script can exhaust server memory and crash the app."
      },
      "teacherNotes": {
        "concept": "Rate Limiting, DoS/DDoS Mitigation, Token Bucket, Leaky Bucket, HTTP 429",
        "experience": "Students learned why rate limiting is essential to preserve server availability under malicious spam.",
        "realWorld": "Cloudflare, Ola, Twitter, and payment gateways enforce strict rate limits per IP and API key.",
        "question": "What is the standard HTTP error status code returned when a rate limit is exceeded?"
      },
      "olaExample": "If an attacker tries to spam the 'Send OTP' or 'Book Cab' button 5,000 times a minute using a bot, Ola's Rate Limiter allows the first few requests and immediately blocks the rest, protecting the server for real riders."
    },
    "knowledgeCheck": {
      "question": "Why does Ola enforce Rate Limiting on ride booking and OTP verification requests?",
      "options": [
        {
          "id": "A",
          "text": "To prevent spam bots and malicious scripts from flooding the servers and crashing the app for real riders.",
          "isCorrect": true,
          "explanation": "Correct! Rate limiting caps request volume so malicious scripts cannot overwhelm and crash the backend."
        },
        {
          "id": "B",
          "text": "To limit drivers to driving only 10 kilometers per day.",
          "isCorrect": false,
          "explanation": "Incorrect. Rate limiting is a server network protection tool, not a limit on car driving distance."
        },
        {
          "id": "C",
          "text": "To force riders to delete their account after 5 minutes.",
          "isCorrect": false,
          "explanation": "Incorrect. Rate limiting protects servers so riders can book rides safely."
        }
      ],
      "hint": "Hint: Think about why a club bouncer limits how many people can enter at once."
    }
  },
  {
    "id": 28,
    "stage": 7,
    "sno": 28,
    "topic": "Geospatial Search and Indexing",
    "concept": "Geospatial Search and Indexing",
    "title": "Level 28: Matching the Nearest Available Cab Within 2 Kilometers",
    "time": "Live Ride Search — Koramangala 5th Block",
    "usersCount": "100,000 Moving Cabs in City",
    "topicHint": "Finding Nearest Locations Fast Using Spatial Grids (Geohash / QuadTree)",
    "situation": "A rider stands outside a cafe in Bangalore and taps 'Book Cab'. There are 100,000 active cabs driving across the entire state of Karnataka. Calculating mathematical distance (using square roots and latitude/longitude math) between this rider and all 100,000 moving cars takes 8 seconds of heavy CPU calculation on the server, causing dispatch to lag!",
    "problem": "How can Ola locate the closest available cabs within 2 kilometers in 5 milliseconds without checking all 100,000 cars?",
    "simulationType": "geospatial_spatial_indexing",
    "choices": [
      {
        "id": "A",
        "text": "Use Geospatial Indexing (like Geohash or QuadTrees) to divide the city map into grid boxes and search only the rider's local box.",
        "isOptimal": true,
        "consequenceText": "Brilliant! Geospatial Indexing divides the world map into numbered grid boxes (like Geohashes or Google S2 cells). Instead of calculating distance to 100,000 cars across the state, the server queries only the 15 cabs inside the rider's local 2km grid box in just 4 milliseconds!",
        "statImpact": {
          "latency": "4ms Instant Match",
          "capacity": "100,000 Cabs Scaled",
          "risk": "Zero Dispatch Lag",
          "cost": "Optimized Routing"
        },
        "whatHappened": {
          "helped": "Indexed geographic coordinates into spatial grids for instant nearest-neighbor lookups.",
          "bottleneck": "Calculating trigonometric distances across 100,000 moving points in real time melts server CPUs.",
          "reflectionQuestion": "Why does a postal system use PIN codes instead of measuring distance between every house?"
        },
        "successSummary": "Masterclass! You used geospatial indexing to match nearby cabs in single-digit milliseconds."
      },
      {
        "id": "B",
        "text": "Calculate distance by measuring distance to every single car in India, including cabs 2,000 km away in Kashmir.",
        "isOptimal": false,
        "consequenceText": "Calculating distance across hundreds of thousands of irrelevant cars freezes the server CPU. Ride searches take 20 seconds, and the server crashes.",
        "statImpact": {
          "latency": "20-Second Freeze",
          "capacity": "CPU Melted",
          "risk": "Dispatch Crash",
          "cost": "Massive Compute Waste"
        },
        "whatHappened": {
          "helped": "Used brute-force distance math without spatial indexing.",
          "bottleneck": "Linear geometric distance calculations fail at scale.",
          "reflectionQuestion": "Why would a rider in Bangalore care about cars in Kashmir?"
        }
      },
      {
        "id": "C",
        "text": "Assign a random cab from another state, sending a driver 800 km away to pick up the rider.",
        "isOptimal": false,
        "consequenceText": "The app tells the rider: 'Your cab is arriving in 16 hours from Hyderabad.' The passenger cancels in disbelief and uninstalls the app.",
        "statImpact": {
          "latency": "16 Hours ETA",
          "capacity": "Absurd Dispatch",
          "risk": "Total Brand Ruin",
          "cost": "Unusable"
        },
        "whatHappened": {
          "helped": "Ignored geographic proximity.",
          "bottleneck": "Ride-hailing requires tight geographical proximity matching.",
          "reflectionQuestion": "How close should a cab be when assigned to a rider?"
        }
      }
    ],
    "discovery": {
      "badge": "Geospatial Search and Indexing",
      "tagline": "Organizing geographic coordinates into spatial grids for instant nearby lookups",
      "simpleMeaning": "Geospatial Indexing is a way of organizing latitude and longitude coordinates into fast lookup structures (like Geohashes, QuadTrees, or Google S2 cells). Instead of calculating distances to every car on Earth, the system divides the world into grid cells so it can find nearest drivers in single-digit milliseconds.",
      "pubgExample": "When you tap 'Book Auto' in Indiranagar, Ola converts your GPS coordinates into a quick Geohash grid box (e.g. `tdr1v9`). The database checks only the cabs currently located inside that same grid box and assigns driver Ramesh in 3 milliseconds.",
      "analogy": "Postal PIN Codes: Instead of a postman measuring the physical distance from his office to every house in the country, letters are sorted by Postal PIN Code (e.g., 560034) so only local delivery hubs handle local houses.",
      "howItWorks": [
        "1. Spatial Grid: The Earth's surface is divided into a hierarchical grid of cells (like Geohash strings).",
        "2. Fast Prefix Matching: Nearby locations share the exact same starting prefix characters (e.g., `tdr1v*`).",
        "3. Instant Nearest Neighbor: The system queries only cabs inside the rider's immediate and 8 adjacent neighbor grid cells.",
        "4. Single-Digit Milliseconds: Dispatches the closest cab in 4 milliseconds, keeping battery usage low and response instant."
      ],
      "whyItMatters": "Powers proximity matching in ride-hailing apps (Ola, Uber), food delivery (Swiggy, Zomato), quick commerce (Blinkit, Zepto), and maps.",
      "visualExplanation": "[Rider at Lat 12.97, Long 77.59] ──► [Maps to Geohash: 'tdr1v']\n                                               │\n┌──────────────────────────────────────────────┴──────────────────────────────────────────────┐\n▼                                                                                             ▼\n[Search inside 'tdr1v' Grid: 12 Local Cabs (4ms)]                              [Skip 99,988 Cabs Elsewhere!]\nNearest Cab Found: Driver Ramesh (3 Mins Away!)",
      "contrast": {
        "termA": "Geospatially Indexed Search",
        "descA": "Divides map into spatial grid cells; nearest cabs found in 4 milliseconds; low CPU usage.",
        "termB": "Brute-Force Coordinate Math",
        "descB": "Calculates trigonometric distance across 100,000 cars; melts CPU and freezes booking."
      },
      "teacherNotes": {
        "concept": "Geospatial Indexing, Geohash, QuadTrees, Google S2, Spatial Databases (PostGIS, Redis GEO)",
        "experience": "Students learned how spatial indexes solve location-based search without brute-force math.",
        "realWorld": "Ola, Uber, and Swiggy rely on Redis GEO and Google S2 to match millions of drivers and orders every second.",
        "question": "Why is dividing a map into grid cells faster than calculating distance to every single coordinate?"
      },
      "olaExample": "When you tap 'Book Auto' in Indiranagar, Ola converts your GPS coordinates into a quick Geohash grid box (e.g. `tdr1v9`). The database checks only the cabs currently located inside that same grid box and assigns driver Ramesh in 3 milliseconds."
    },
    "knowledgeCheck": {
      "question": "How does Geospatial Indexing help the Ola app assign the closest cab in just 4 milliseconds?",
      "options": [
        {
          "id": "A",
          "text": "It divides the map into spatial grid boxes so the server only searches cabs inside the rider's local neighborhood grid.",
          "isCorrect": true,
          "explanation": "Correct! Geospatial indexing bounds queries to local grid boxes, finding nearest drivers in milliseconds."
        },
        {
          "id": "B",
          "text": "It teleports the cab through a magical wormhole into the rider's living room.",
          "isCorrect": false,
          "explanation": "Incorrect. Geospatial indexing routes data over servers; it does not teleport physical objects."
        },
        {
          "id": "C",
          "text": "It forces all drivers to park their cars and sleep.",
          "isCorrect": false,
          "explanation": "Incorrect. Geospatial indexing helps active drivers get ride assignments quickly."
        }
      ],
      "hint": "Hint: Think about sorting packages by postal PIN codes instead of measuring distance to every house in the country."
    }
  }
];

// Expose globally for browser usage
if (typeof window !== 'undefined') {
  window.GAME_STAGES = STAGES;
  window.GAME_LEVELS = LEVELS;
  window.STAGES = STAGES;
  window.LEVELS = LEVELS;
}

// Expose to Node.js environments if running server-side
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STAGES, LEVELS, GAME_STAGES: STAGES, GAME_LEVELS: LEVELS };
}
