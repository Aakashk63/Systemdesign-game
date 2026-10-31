/**
 * RideQuest - Ola Cab Architecture Curriculum
 * Exact 23 Topics: Day 1 (Topics 1-11), Day 2 (Topics 12-23)
 * Beginner-Friendly Simple English with Zero Technical Words in Questions
 */

const STAGES = [
  {
    "id": 1,
    "name": "Day 1: System & Data Foundations",
    "description": "Master core client-server architecture, protocols, security, and database design using real-world Ola cab booking scenarios.",
    "levels": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": 2,
    "name": "Day 2: Distributed Systems & Scale",
    "description": "Learn caching, content delivery, scaling, load balancing, sharding, fault tolerance, streaming, and geospatial search under 100,000 live rides.",
    "levels": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  }
];

const LEVELS = [
  {
    "id": 1,
    "stage": 1,
    "sno": 1,
    "topic": "Requirements Engineering: Functional vs. Non-Functional Requirements (FR & NFR)",
    "concept": "Functional vs. Non-Functional Requirements",
    "title": "Level 1: What the App Does vs. How Fast It Runs",
    "time": "6:00 PM Rush Hour — Bangalore",
    "usersCount": "50,000 Riders Booking Cabs",
    "topicHint": "Understanding App Features vs. Speed & Reliability",
    "situation": "A passenger opens the Ola app and taps 'Book Cab'. The app successfully finds a nearby driver, but it takes 2 full minutes for the screen to confirm the booking.",
    "problem": "A passenger is booking an Ola cab. The app finds a driver, but it takes 2 full minutes to confirm it on the screen. What is wrong here?",
    "simulationType": "requirements_stress",
    "choices": [
      {
        "id": "A",
        "text": "The app completed the task, but it is far too slow for the user.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Booking the cab worked (the feature succeeded), but taking 2 full minutes is unacceptable in real life. Apps must both work correctly and run quickly.",
        "statImpact": {
          "latency": "1.2s Target",
          "capacity": "50,000 Smooth",
          "risk": "Low",
          "cost": "Optimal"
        },
        "whatHappened": {
          "helped": "Understood the difference between app features and app performance.",
          "bottleneck": "Taking 2 minutes causes passengers to cancel and abandon the app.",
          "reflectionQuestion": "Why must an app not only do the job, but also do it in under 2 seconds?"
        },
        "successSummary": "Spot on! You distinguished between what the app does and how fast it performs."
      },
      {
        "id": "B",
        "text": "The app is completely broken and cannot book rides at all.",
        "isOptimal": false,
        "consequenceText": "Not quite. The cab was actually booked successfully! The problem is that it took 2 minutes, which frustrates passengers.",
        "statImpact": {
          "latency": "120s Slow",
          "capacity": "Low",
          "risk": "User Drop",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Looked only at the delay rather than the booking outcome.",
          "bottleneck": "Confusing a slow feature with a missing feature.",
          "reflectionQuestion": "Can a feature work correctly but still fail user speed expectations?"
        }
      },
      {
        "id": "C",
        "text": "The driver cancelled because the car ran out of fuel.",
        "isOptimal": false,
        "consequenceText": "Incorrect. The driver was assigned; the delay happened inside the computer system processing the request.",
        "statImpact": {
          "latency": "Unknown",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Guessed a physical car reason instead of software speed.",
          "bottleneck": "Missing the software delay.",
          "reflectionQuestion": "What part of the app is responsible when screens freeze for 2 minutes?"
        }
      }
    ],
    "discovery": {
      "badge": "Requirements Engineering",
      "tagline": "Balancing what the software does with how fast and reliably it performs",
      "simpleMeaning": "Think of an elevator: Its basic job is to move you to the 10th floor. But if it takes 30 minutes to get there, it is not useful. Software must both complete the task and do it fast.",
      "olaExample": "In Ola, booking a cab is the feature; doing it in under 2 seconds during peak rain is the performance requirement.",
      "analogy": "A restaurant: Serving food is the main job, but making customers wait 3 hours makes it a bad experience.",
      "howItWorks": [
        "1. Feature Requirements: Actions users can take (book cab, see driver photo, pay fare).",
        "2. Performance Requirements: How well the system behaves (loads in 1 second, works 99.9% of the year).",
        "3. Balancing: Engineers test both features and speed before launching."
      ],
      "whyItMatters": "Even if your app has wonderful buttons, users will uninstall it if it takes 2 minutes to respond.",
      "visualExplanation": "[Tap Book Cab] ──► [Feature: Cab Assigned] + [Performance: Done in 1.4s!] ──► Happy Rider",
      "contrast": {
        "termA": "App Features",
        "descA": "What the user can do: Book a ride, choose a car, apply coupon.",
        "termB": "App Performance",
        "descB": "How the app runs: Response time under 2 seconds, never crashes."
      },
      "teacherNotes": {
        "realWorld": "Ola measures response times in milliseconds so rush-hour surges never cause app timeouts."
      }
    },
    "knowledgeCheck": {
      "question": "Which of these is an example of an app performance requirement for Ola?",
      "options": [
        {
          "id": "A",
          "text": "The booking confirmation screen must appear in under 2 seconds.",
          "isCorrect": true,
          "explanation": "Correct! Speed and responsiveness are performance requirements."
        },
        {
          "id": "B",
          "text": "The app has a button to select an Ola Prime sedan.",
          "isCorrect": false,
          "explanation": "That is an app feature (what the user clicks), not a performance speed measurement."
        },
        {
          "id": "C",
          "text": "The app displays a picture of the driver.",
          "isCorrect": false,
          "explanation": "Displaying driver photos is a functional feature, not a speed/reliability metric."
        }
      ],
      "hint": "Hint: Look for the option that describes how fast or reliable the app must be."
    }
  },
  {
    "id": 2,
    "stage": 1,
    "sno": 2,
    "topic": "Client–Server Architecture: Decoupling Requesters from Central Data Stores",
    "concept": "Client–Server Architecture",
    "title": "Level 2: Why Your Phone Can't Change the Master Records",
    "time": "7:00 PM — 100,000 Active Passengers",
    "usersCount": "100,000 Rider Phones",
    "topicHint": "Separating User Phones from the Central Brain",
    "situation": "Thousands of passengers want cabs at the same time. A student asks: 'Why doesn't every passenger's phone just connect directly to the master disk where all drivers are listed?'",
    "problem": "Why can't every passenger's phone directly change the master list of available cabs on its own?",
    "simulationType": "client_server_clerk",
    "choices": [
      {
        "id": "A",
        "text": "Having one main central computer check and approve requests keeps all information safe and orderly.",
        "isOptimal": true,
        "consequenceText": "Brilliant! If 100,000 phones could write directly to the master disk, two riders would book the same driver at the same second. The central server checks rules and coordinates everyone cleanly.",
        "statImpact": {
          "latency": "15ms",
          "capacity": "100k Coordinated",
          "risk": "Zero Conflicts",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Understood why a central coordinator is required.",
          "bottleneck": "Uncontrolled direct disk access leads to corrupted records and security leaks.",
          "reflectionQuestion": "What would happen if two riders booked the same driver at the exact same instant?"
        },
        "successSummary": "Great work! You understood why client devices must ask a central server."
      },
      {
        "id": "B",
        "text": "Phone screens are too small to show all the cars in the country.",
        "isOptimal": false,
        "consequenceText": "Screen size has nothing to do with database permissions and data safety.",
        "statImpact": {
          "latency": "Error",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Focused on hardware display instead of software coordination.",
          "bottleneck": "Overlooking data corruption.",
          "reflectionQuestion": "Does screen size prevent computers from saving records?"
        }
      },
      {
        "id": "C",
        "text": "Drivers only accept phone calls, not app taps.",
        "isOptimal": false,
        "consequenceText": "Ola is a digital app where cab bookings happen through network taps, not manual telephone calls.",
        "statImpact": {
          "latency": "Slow",
          "capacity": "0",
          "risk": "Manual",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Thought of traditional taxi booths instead of digital systems.",
          "bottleneck": "Missing automated server dispatch.",
          "reflectionQuestion": "How does software automate matching without phone operators?"
        }
      }
    ],
    "discovery": {
      "badge": "Client–Server Architecture",
      "tagline": "Passenger phones (Clients) request rides; Central computers (Servers) verify and coordinate",
      "simpleMeaning": "Think of a restaurant: Customers (clients) do not walk into the kitchen to grab food from the stove. They give their order to the waiter (server), who coordinates with the kitchen safely.",
      "olaExample": "Your Ola app on iPhone/Android is the client. The cloud datacenter in Bangalore is the server.",
      "analogy": "A bank: You talk to the teller through the counter window; you don't walk into the bank vault yourself.",
      "howItWorks": [
        "1. Client asks: Phone sends 'Book me a Prime cab near Indiranagar'.",
        "2. Server decides: Central computer checks driver availability, pricing, and safety rules.",
        "3. Response returned: Server tells the phone 'Driver Ramesh assigned, arriving in 3 mins'."
      ],
      "whyItMatters": "Central servers keep data private, prevent booking collisions, and ensure drivers only get one ride at a time.",
      "visualExplanation": "[Rider Phone (Client)] ──Request──► [Ola Cloud Server] ──Assign──► [Driver Phone (Client)]",
      "contrast": {
        "termA": "Client (Your Phone)",
        "descA": "Displays the map, accepts your taps, sends requests.",
        "termB": "Server (Central Brain)",
        "descB": "Holds master records, verifies rules, coordinates all cars."
      },
      "teacherNotes": {
        "realWorld": "Ola runs clusters of backend servers across India to coordinate millions of riders daily."
      }
    },
    "knowledgeCheck": {
      "question": "What is the primary role of the client in the Ola cab booking app?",
      "options": [
        {
          "id": "A",
          "text": "To display the user interface and send ride requests to the server.",
          "isCorrect": true,
          "explanation": "Correct! The client runs on the user's phone, showing the map and sending choices to the server."
        },
        {
          "id": "B",
          "text": "To store the private bank account numbers of all drivers in India.",
          "isCorrect": false,
          "explanation": "Sensitive master records stay safely on central servers, never on user phones."
        },
        {
          "id": "C",
          "text": "To control traffic lights on city roads.",
          "isCorrect": false,
          "explanation": "Ola is a ride app, not city traffic signal infrastructure."
        }
      ],
      "hint": "Hint: Think about what happens directly on your smartphone screen."
    }
  },
  {
    "id": 3,
    "stage": 1,
    "sno": 3,
    "topic": "Networking Fundamentals: IP Addresses, DNS, and Ports",
    "concept": "IP Addresses, DNS, and Ports",
    "title": "Level 3: Finding the Right Computer in Bangalore",
    "time": "Morning Office Rush — Koramangala",
    "usersCount": "80,000 App Lookups",
    "topicHint": "How Phones Translate App Names into Computer Addresses",
    "situation": "When you tap the Ola app icon, your phone needs to reach the main dispatch computer. A new student wonders how millions of phones know where that computer lives on the internet.",
    "problem": "When you open the Ola app, how does your phone find the exact computer in Bangalore that handles ride bookings?",
    "simulationType": "networking_dns_ports",
    "choices": [
      {
        "id": "A",
        "text": "It looks up the app's name in a digital address book to get that computer's unique number.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Just like opening your phone contacts to find a friend's phone number, the app asks the internet address book for the server's numeric address.",
        "statImpact": {
          "latency": "8ms",
          "capacity": "Global Lookup",
          "risk": "Zero Confusion",
          "cost": "Standard"
        },
        "whatHappened": {
          "helped": "Understood that human-friendly names map to numeric computer addresses.",
          "bottleneck": "Without address translation, phones would not know where to send ride requests.",
          "reflectionQuestion": "Why do computers use numbers while humans prefer names like olacabs.com?"
        },
        "successSummary": "Spot on! The digital address book translated the name into the right computer address in 8 milliseconds."
      },
      {
        "id": "B",
        "text": "It guesses random numbers until a computer answers.",
        "isOptimal": false,
        "consequenceText": "Random guessing would take hours and could connect your phone to a stranger's computer or a foreign website.",
        "statImpact": {
          "latency": "Hours",
          "capacity": "0",
          "risk": "Connection Fail",
          "cost": "Wasted"
        },
        "whatHappened": {
          "helped": "Realized that computers cannot guess addresses randomly.",
          "bottleneck": "Lack of organized address lookups.",
          "reflectionQuestion": "Can a letter reach your house without an address written on the envelope?"
        }
      },
      {
        "id": "C",
        "text": "It sends an open shout to every phone in your city.",
        "isOptimal": false,
        "consequenceText": "Broadcasting to all phones in the city would clog cellular towers with junk noise and violate user privacy.",
        "statImpact": {
          "latency": "Tower Jam",
          "capacity": "0",
          "risk": "Privacy Breach",
          "cost": "Illegal"
        },
        "whatHappened": {
          "helped": "Saw why broadcasting to everybody is not how internet communication works.",
          "bottleneck": "Network saturation.",
          "reflectionQuestion": "How does targeted messaging protect network speed?"
        }
      }
    ],
    "discovery": {
      "badge": "Networking Fundamentals",
      "tagline": "Names become numbers (Addresses), and numbers open specific software doors (Ports)",
      "simpleMeaning": "An address book: You don't memorize 10-digit phone numbers for all your friends. You tap their name, and your phone calls their number. The internet does the same thing for computers.",
      "olaExample": "Your phone looks up api.olacabs.com, gets numeric address 104.22.15.82, and connects to Door 443 (the secure web door).",
      "analogy": "Sending postal mail: The building name is the address, and the apartment number is the specific door.",
      "howItWorks": [
        "1. Human Name: Your phone requests 'api.olacabs.com'.",
        "2. Address Book (DNS): Translates the name into computer number '104.22.15.82'.",
        "3. Numbered Door (Port): Connects to Door 443, where the Ola ride service is waiting."
      ],
      "whyItMatters": "Without address lookups, phones could never find the right company servers across the worldwide internet.",
      "visualExplanation": "[Phone: api.olacabs.com] ──► [Address Book] ──► [Server IP: 104.22.15.82 : Port 443]",
      "contrast": {
        "termA": "Server Address (IP)",
        "descA": "The unique number that identifies which computer in the world to reach.",
        "termB": "Door Number (Port)",
        "descB": "The numbered entrance on that computer for a specific program."
      },
      "teacherNotes": {
        "realWorld": "Ola uses global DNS providers so riders anywhere in India connect to the closest regional gateway."
      }
    },
    "knowledgeCheck": {
      "question": "What is the job of the internet's digital address book (DNS)?",
      "options": [
        {
          "id": "A",
          "text": "To translate human-friendly website names into numeric computer addresses.",
          "isCorrect": true,
          "explanation": "Correct! It converts names like olacabs.com into numbers computers can connect to."
        },
        {
          "id": "B",
          "text": "To recharge your phone battery when you run out of power.",
          "isCorrect": false,
          "explanation": "DNS is a software lookup system, not a battery charger."
        },
        {
          "id": "C",
          "text": "To count how many kilometers the cab driver drove.",
          "isCorrect": false,
          "explanation": "Distance tracking is calculated from GPS, not from the address book."
        }
      ],
      "hint": "Hint: Think about why you use a phone contact list instead of memorizing digits."
    }
  },
  {
    "id": 4,
    "stage": 1,
    "sno": 4,
    "topic": "Networking Protocols: TCP vs. UDP and HTTP vs. HTTPS",
    "concept": "Reliable & Encrypted Communication",
    "title": "Level 4: Protecting Payments from Prying Eyes",
    "time": "Evening Commute — Public Café Wi-Fi",
    "usersCount": "40,000 Wallet Recharges",
    "topicHint": "Guaranteed Delivery and Secret Envelopes for Sensitive Data",
    "situation": "A rider sitting in a public coffee shop adds ₹500 to their Ola Money wallet. Other people are using the same public Wi-Fi network.",
    "problem": "When you pay for a cab ride using your card, why must the app guarantee that every single detail arrives safely and secretly?",
    "simulationType": "protocols_transport",
    "choices": [
      {
        "id": "A",
        "text": "So no payment information gets lost, scrambled, or stolen along the way.",
        "isOptimal": true,
        "consequenceText": "Spot on! Financial data must be enclosed in a secret encrypted digital envelope so hackers on public Wi-Fi cannot read your card number or CVV.",
        "statImpact": {
          "latency": "18ms",
          "capacity": "Encrypted TLS",
          "risk": "Zero Fraud",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Recognized the critical need for encrypted and guaranteed delivery.",
          "bottleneck": "Sending payment numbers in open plain text allows anyone on the Wi-Fi to steal funds.",
          "reflectionQuestion": "Why should sensitive payments use secret encryption while casual car map updates don't need heavy locks?"
        },
        "successSummary": "Payment secured! The transaction completed through a locked digital tunnel with zero stolen data."
      },
      {
        "id": "B",
        "text": "So the driver gets paid before the passenger even gets into the car.",
        "isOptimal": false,
        "consequenceText": "Incorrect. Fares are settled after the ride begins or ends, not before matching.",
        "statImpact": {
          "latency": "Premature",
          "capacity": "0",
          "risk": "Dispute",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Confused payment security with trip billing timing.",
          "bottleneck": "Incorrect billing logic.",
          "reflectionQuestion": "What protects data as it flies through the radio waves?"
        }
      },
      {
        "id": "C",
        "text": "So the phone battery does not drain while paying.",
        "isOptimal": false,
        "consequenceText": "Encryption protects privacy and data safety, not battery life.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Security Breach",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Equated security with hardware power consumption.",
          "bottleneck": "Ignoring cybersecurity risks.",
          "reflectionQuestion": "Why do bank websites show a padlock icon on your screen?"
        }
      }
    ],
    "discovery": {
      "badge": "Protocols & Encryption",
      "tagline": "Guaranteed delivery (No lost pieces) and Secret envelopes (No stolen secrets)",
      "simpleMeaning": "A postcard vs. a locked bank deposit box: Sending payment details over plain HTTP is like writing your card PIN on a postcard where every mail carrier can read it. HTTPS puts your details in a locked metal box that only the bank can open.",
      "olaExample": "Ola uses HTTPS for wallet recharges and booking payments, turning your card number into scrambled text as it flies through public Wi-Fi.",
      "analogy": "A registered courier: The courier gets your signature confirming delivery and keeps the contents sealed in a tamper-proof bag.",
      "howItWorks": [
        "1. Handshake: Phone and server agree on a secret scrambling key.",
        "2. Encryption: Your card numbers become scrambled gibberish like '#!$*92&'.",
        "3. Verified Arrival: Server decrypts the message and confirms every byte arrived safely."
      ],
      "whyItMatters": "Without encryption, cyber criminals sitting in public cafés could steal passwords and drain rider bank accounts.",
      "visualExplanation": "[Phone Card Data] ──Locked Tunnel (HTTPS)──► [Hacker Sees Noise: ?%#$] ──► [Ola Bank Server]",
      "contrast": {
        "termA": "Open Plaintext (HTTP)",
        "descA": "Like an open postcard: readable by anyone inspecting the network.",
        "termB": "Encrypted Tunnel (HTTPS)",
        "descB": "Like a tamper-proof locked box: only the intended computer can read it."
      },
      "teacherNotes": {
        "realWorld": "All modern financial transactions mandate TLS 1.3 encryption for PCI-DSS security compliance."
      }
    },
    "knowledgeCheck": {
      "question": "What happens to your credit card number when it is sent through an encrypted HTTPS connection?",
      "options": [
        {
          "id": "A",
          "text": "It is scrambled into secret text so strangers on the network cannot read it.",
          "isCorrect": true,
          "explanation": "Correct! Encryption scrambles the data so only the destination server can unscramble it."
        },
        {
          "id": "B",
          "text": "It is posted on a public social media wall for everyone to verify.",
          "isCorrect": false,
          "explanation": "That would be a catastrophic privacy disaster."
        },
        {
          "id": "C",
          "text": "It is permanently deleted so no one can ever be charged.",
          "isCorrect": false,
          "explanation": "The payment must still be processed by the bank; it is protected, not deleted."
        }
      ],
      "hint": "Hint: Think about why bank websites use secret scrambling."
    }
  },
  {
    "id": 5,
    "stage": 1,
    "sno": 5,
    "topic": "API Design & RESTful Architecture: Standardized Communication Contracts",
    "concept": "Standardized API Contracts",
    "title": "Level 5: Standard Rules for Booking, Tracking, and Cancelling",
    "time": "Midday Cab Dispatches",
    "usersCount": "120,000 Connected Apps",
    "topicHint": "Predictable Actions for Ride Operations",
    "situation": "A rider's phone needs to create a new ride booking, check where the assigned cab is, or cancel the ride if plans change. The app and server need a clear set of standard rules.",
    "problem": "How do the passenger's phone and the company's computers talk to each other without misunderstanding what the user wants?",
    "simulationType": "api_contracts_scanners",
    "choices": [
      {
        "id": "A",
        "text": "They use a standard set of clear commands like 'create ride', 'show ride', and 'cancel ride'.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Using standard actions (create, read, update, delete) ensures the server always knows whether the passenger wants to start a ride or cancel one.",
        "statImpact": {
          "latency": "14ms",
          "capacity": "Standard REST",
          "risk": "Zero Confusion",
          "cost": "Clean"
        },
        "whatHappened": {
          "helped": "Understood the value of standard, predictable request actions.",
          "bottleneck": "Unstructured messages cause servers to guess, leading to accidental cancellations or double bookings.",
          "reflectionQuestion": "Why is it important to use separate specific commands for creating versus cancelling a ride?"
        },
        "successSummary": "Standard contract applied! All ride operations communicate cleanly."
      },
      {
        "id": "B",
        "text": "The passenger types free-form text messages to an employee.",
        "isOptimal": false,
        "consequenceText": "Having humans read free-form text messages for millions of rides would require an army of staff and take 20 minutes per cab booking.",
        "statImpact": {
          "latency": "20 Mins",
          "capacity": "Tiny",
          "risk": "Human Error",
          "cost": "Huge"
        },
        "whatHappened": {
          "helped": "Saw why automated standard software commands beat manual messaging.",
          "bottleneck": "Manual human bottlenecks.",
          "reflectionQuestion": "How do apps automate bookings instantly without human chat operators?"
        }
      },
      {
        "id": "C",
        "text": "The phone takes screenshots of the screen and emails them to the driver.",
        "isOptimal": false,
        "consequenceText": "Emailing screenshots is completely unworkable for instant cab dispatching and cannot be parsed by automated dispatch computers.",
        "statImpact": {
          "latency": "Hours",
          "capacity": "0",
          "risk": "Total Failure",
          "cost": "Wasted"
        },
        "whatHappened": {
          "helped": "Realized that automated systems need structured commands, not picture attachments.",
          "bottleneck": "Unparsable file formats.",
          "reflectionQuestion": "Why do computers prefer structured text over images for basic commands?"
        }
      }
    ],
    "discovery": {
      "badge": "API Design & Contracts",
      "tagline": "Standardized commands that computers understand without guesswork",
      "simpleMeaning": "A restaurant menu: You point to Item #4 ('Masala Dosa'). You don't write an essay explaining how to cook potatoes. Standardized requests make operations fast and error-free.",
      "olaExample": "Your phone sends POST /rides to create a booking, GET /rides/123 to check location, and DELETE /rides/123 to cancel.",
      "analogy": "A vending machine: You press B4 for chips; clear numbered buttons prevent wrong snacks.",
      "howItWorks": [
        "1. Action Verb: 'Create', 'Fetch', 'Update', or 'Cancel'.",
        "2. Clear Resource: '/rides/4592'.",
        "3. Clean Data: Simple details enclosed like pickup location and car type."
      ],
      "whyItMatters": "Standard API rules allow iPhone, Android, and web apps to talk to the same server smoothly.",
      "visualExplanation": "[Phone: POST /rides] ──► [Ola Gateway] ──► [HTTP 201: Ride #4592 Created!]",
      "contrast": {
        "termA": "Standard API Rules",
        "descA": "Clear, universal actions understood by any programming language.",
        "termB": "Messy Custom Messages",
        "descB": "Unstructured requests that easily cause errors and crashes."
      },
      "teacherNotes": {
        "realWorld": "RESTful conventions make it effortless for mobile developers to integrate new features."
      }
    },
    "knowledgeCheck": {
      "question": "Which standard command should a phone send to cancel an existing ride booking?",
      "options": [
        {
          "id": "A",
          "text": "A standard remove / cancel command specifically targeting that ride number.",
          "isCorrect": true,
          "explanation": "Correct! Standard APIs use clear removal actions targeting the specific ride ID."
        },
        {
          "id": "B",
          "text": "A create ride command with all passenger names erased.",
          "isCorrect": false,
          "explanation": "That would create a new blank ride instead of cancelling the existing one."
        },
        {
          "id": "C",
          "text": "Turning off the car's headlights.",
          "isCorrect": false,
          "explanation": "Car headlights are physical car hardware, not software booking commands."
        }
      ],
      "hint": "Hint: Think about the clean difference between creating something new and cancelling an existing item."
    }
  },
  {
    "id": 6,
    "stage": 1,
    "sno": 6,
    "topic": "Authentication (AuthN) & Token-Based Sessions: Cryptographic Identity Verification",
    "concept": "Authentication & Digital Passes",
    "title": "Level 6: Remembering Who You Are Without Asking Every Second",
    "time": "Daily Login Sessions",
    "usersCount": "1,000,000 Active Logins",
    "topicHint": "Verifying Identity and Issuing Safe Session Passes",
    "situation": "You open the Ola app, enter your phone number, and type the secret 4-digit code sent by SMS. You are logged in successfully.",
    "problem": "After you type your secret code to log into Ola, how does the app remember it is still you every time you open it?",
    "simulationType": "auth_identity_verification",
    "choices": [
      {
        "id": "A",
        "text": "The central computer gives your phone a digital pass that proves who you are for future requests.",
        "isOptimal": true,
        "consequenceText": "Exactly right! The server hands your phone a temporary digital stamp (like a concert wristband). Your phone shows this pass with every tap so you never have to re-type your code.",
        "statImpact": {
          "latency": "2ms",
          "capacity": "Token Verified",
          "risk": "Protected",
          "cost": "Low"
        },
        "whatHappened": {
          "helped": "Understood digital passes and session tokens.",
          "bottleneck": "Asking for passwords on every screen frustrates users; storing passwords openly is dangerous.",
          "reflectionQuestion": "Why is a temporary wristband safer than carrying your birth certificate everywhere?"
        },
        "successSummary": "Identity verified! The digital pass keeps the rider logged in securely."
      },
      {
        "id": "B",
        "text": "You must type your secret code again every two seconds.",
        "isOptimal": false,
        "consequenceText": "Asking users to type an SMS code every two seconds would make the app completely unusable.",
        "statImpact": {
          "latency": "Annoying",
          "capacity": "0",
          "risk": "Abandon App",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Realized that apps need a way to remember verified users automatically.",
          "bottleneck": "Excessive login friction.",
          "reflectionQuestion": "How do apps balance user convenience with high security?"
        }
      },
      {
        "id": "C",
        "text": "The app checks your face through the camera non-stop.",
        "isOptimal": false,
        "consequenceText": "Running camera face recognition constantly drains phone battery in 10 minutes and violates user camera privacy.",
        "statImpact": {
          "latency": "Battery Dead",
          "capacity": "0",
          "risk": "Privacy Issue",
          "cost": "Extreme"
        },
        "whatHappened": {
          "helped": "Saw why continuous biometric scanning is impractical.",
          "bottleneck": "Heavy battery drain and privacy invasion.",
          "reflectionQuestion": "Why are lightweight digital passes better than non-stop camera scans?"
        }
      }
    ],
    "discovery": {
      "badge": "Authentication & Sessions",
      "tagline": "Prove who you are once, receive a digital pass, and stay safely logged in",
      "simpleMeaning": "A theme park wristband: When you buy a ticket, the staff checks your ID and puts a colored wristband on your arm. For the rest of the day, you just show the wristband at every ride instead of pulling out your passport each time.",
      "olaExample": "You verify your mobile number via OTP once. Ola gives your phone a secure token pass that lasts for weeks.",
      "analogy": "A hotel keycard: You show your ID at the front desk once, and they give you a plastic keycard for your room.",
      "howItWorks": [
        "1. Proving Identity: You enter your phone number and 4-digit secret SMS code.",
        "2. Pass Issued: Server confirms the code is correct and issues a signed digital token pass.",
        "3. Reusing the Pass: Every time you search for a cab, your phone attaches the pass automatically."
      ],
      "whyItMatters": "Token passes allow millions of riders to book rides instantly without re-entering passwords every minute.",
      "visualExplanation": "[Login with OTP] ──► [Server Issues Digital Pass] ──► [Phone Attaches Pass to Every Ride Request]",
      "contrast": {
        "termA": "Full Login (Authentication)",
        "descA": "Proving who you are with your password or one-time code.",
        "termB": "Session Pass (Token)",
        "descB": "A temporary proof badge that lets you stay logged in seamlessly."
      },
      "teacherNotes": {
        "realWorld": "JSON Web Tokens (JWT) allow stateless server verification across thousands of cloud instances."
      }
    },
    "knowledgeCheck": {
      "question": "What is the main benefit of giving the user's phone a digital pass after they log in?",
      "options": [
        {
          "id": "A",
          "text": "The user stays logged in safely without typing their password for every single tap.",
          "isCorrect": true,
          "explanation": "Correct! The digital pass proves identity smoothly for all subsequent requests."
        },
        {
          "id": "B",
          "text": "The phone gets free unlimited mobile data from the telecom tower.",
          "isCorrect": false,
          "explanation": "Session tokens do not provide telecom mobile data plans."
        },
        {
          "id": "C",
          "text": "The cab driver drives twice as fast.",
          "isCorrect": false,
          "explanation": "Speed on the road depends on traffic laws and safety, not app login passes."
        }
      ],
      "hint": "Hint: Think about avoiding repetitive password typing on your phone."
    }
  },
  {
    "id": 7,
    "stage": 1,
    "sno": 7,
    "topic": "Authorization (AuthZ) & Access Control Models: Role-Based Access Control & Principle of Least Privilege",
    "concept": "Authorization & Permissions",
    "title": "Level 7: What You Are Allowed to Do on the App",
    "time": "Ola Admin Center",
    "usersCount": "Riders, Drivers, and Support Staff",
    "topicHint": "Separating Passenger Powers from Driver and Admin Powers",
    "situation": "A rider logs in with their verified phone number. They open the app settings and notice a button titled 'Change Driver Payout Rates for All Cabs'.",
    "problem": "Why should a regular passenger not be allowed to change how much drivers get paid per kilometer?",
    "simulationType": "authz_rbac_vault",
    "choices": [
      {
        "id": "A",
        "text": "Different people should only have permission to do the specific tasks meant for them.",
        "isOptimal": true,
        "consequenceText": "Spot on! Authentication checks WHO you are; Authorization checks WHAT you are allowed to do. Passengers should only book rides, while only authorized managers should set financial rates.",
        "statImpact": {
          "latency": "1ms",
          "capacity": "Role Enforced",
          "risk": "Zero Breach",
          "cost": "Protected"
        },
        "whatHappened": {
          "helped": "Understood the critical separation between identity and permission.",
          "bottleneck": "Letting any user edit company settings destroys the entire business.",
          "reflectionQuestion": "What is the difference between showing your ID card and having the keys to the vault?"
        },
        "successSummary": "Permissions protected! Passengers can only book rides; admin controls stay locked."
      },
      {
        "id": "B",
        "text": "Passengers already get discounts, so they do not need that screen.",
        "isOptimal": false,
        "consequenceText": "Discounts have nothing to do with security permissions and financial safety rules.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Dangerous",
          "cost": "Loss"
        },
        "whatHappened": {
          "helped": "Confused marketing discounts with system security access.",
          "bottleneck": "Overlooking system access boundaries.",
          "reflectionQuestion": "Why must every system verify user permissions regardless of pricing?"
        }
      },
      {
        "id": "C",
        "text": "The button was removed simply because there was no space left on the screen.",
        "isOptimal": false,
        "consequenceText": "Permissions are not about visual screen space; they are strict security rules enforced by the central computer.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Breach",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Equated permission controls with graphic layout design.",
          "bottleneck": "Missing backend security checks.",
          "reflectionQuestion": "Where should permissions be checked: on the phone screen or inside the server?"
        }
      }
    ],
    "discovery": {
      "badge": "Authorization & Permissions",
      "tagline": "Proving identity is one thing; having permission to perform actions is another",
      "simpleMeaning": "An office badge: Your badge proves you work for the company (Authentication). But your badge only opens your floor, not the CEO's private safe (Authorization).",
      "olaExample": "A passenger role can only request rides and view receipts. An admin role can approve drivers and adjust city surge rules.",
      "analogy": "An airplane: Passengers have tickets to sit in seats; only the pilot has authorization to enter the cockpit and fly the plane.",
      "howItWorks": [
        "1. User Role: Every user is tagged with a role (Passenger, Driver, Support Agent, Admin).",
        "2. Action Check: Before changing any record, the server verifies if the user's role allows it.",
        "3. Rejection: If an unauthorized user tries to touch admin settings, the server says 'Access Denied'."
      ],
      "whyItMatters": "Strict access control prevents rogue users from modifying prices, stealing driver earnings, or seeing private trip histories.",
      "visualExplanation": "[Rider Rahul] ──► Books Cab: [ALLOWED] | ──► Edits Payouts: [403 FORBIDDEN - ACCESS DENIED]",
      "contrast": {
        "termA": "Who You Are (AuthN)",
        "descA": "Verifying identity: 'Yes, this is Rahul's phone number'.",
        "termB": "What You Can Do (AuthZ)",
        "descB": "Checking permissions: 'Rahul is a passenger; he cannot edit driver bank rates'."
      },
      "teacherNotes": {
        "realWorld": "Role-Based Access Control (RBAC) ensures least-privilege security across all microservices."
      }
    },
    "knowledgeCheck": {
      "question": "What is the difference between Authentication and Authorization?",
      "options": [
        {
          "id": "A",
          "text": "Authentication confirms who you are; Authorization decides what you have permission to do.",
          "isCorrect": true,
          "explanation": "Correct! One verifies identity, and the other checks permissions."
        },
        {
          "id": "B",
          "text": "Authentication is for cars; Authorization is for bicycles.",
          "isCorrect": false,
          "explanation": "Both are software security concepts applicable to any application."
        },
        {
          "id": "C",
          "text": "Authentication is free; Authorization costs ₹500 per month.",
          "isCorrect": false,
          "explanation": "These are foundational security mechanisms, not subscription products."
        }
      ],
      "hint": "Hint: Think about showing your ID card vs having a key to a specific door."
    }
  },
  {
    "id": 8,
    "stage": 1,
    "sno": 8,
    "topic": "Relational Database Design (RDBMS) & ACID Guarantees: Transactional Integrity",
    "concept": "Relational Design & Atomic Settlements",
    "title": "Level 8: Connecting Riders, Drivers, Cabs, and Money",
    "time": "Trip Completion — Koramangala to Airport",
    "usersCount": "Trip #89021 Completed",
    "topicHint": "Linking Tables Cleanly and Making Fare Transfers Safe",
    "situation": "A ride finishes at Bangalore Airport. The fare is ₹850. The system needs to deduct ₹850 from the rider's wallet, credit ₹850 to the driver, and update the ride receipt.",
    "problem": "When a ride ends, why must deducting money from the rider and giving money to the driver happen together at the exact same moment?",
    "simulationType": "acid_atomic_vault",
    "choices": [
      {
        "id": "A",
        "text": "To make sure money is never deducted from the passenger without reaching the driver.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Both balance updates must be linked as one unbreakable transaction. If a network glitch happens midway, the entire transfer is rolled back so no money is lost.",
        "statImpact": {
          "latency": "12ms",
          "capacity": "Atomic Ledger",
          "risk": "Zero Financial Loss",
          "cost": "Exact"
        },
        "whatHappened": {
          "helped": "Understood the principle of atomic transactions.",
          "bottleneck": "Updating accounts separately risks losing money if the connection drops halfway through.",
          "reflectionQuestion": "What would happen if the phone network crashed after taking money from the passenger but before paying the driver?"
        },
        "successSummary": "Atomic settlement complete! Both accounts balanced perfectly with zero lost funds."
      },
      {
        "id": "B",
        "text": "Because the car engine automatically turns off when the ride ends.",
        "isOptimal": false,
        "consequenceText": "The physical car engine has nothing to do with database account ledgers inside cloud servers.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Confused mechanical vehicle hardware with software banking rules.",
          "bottleneck": "Missing software transaction principles.",
          "reflectionQuestion": "Where are user wallet balances stored: inside the car engine or in the cloud database?"
        }
      },
      {
        "id": "C",
        "text": "To save mobile data on both phones.",
        "isOptimal": false,
        "consequenceText": "Transaction safety is about financial accuracy, not saving a few kilobytes of internet data.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Money Loss",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Equated financial accuracy with phone data plans.",
          "bottleneck": "Overlooking financial reconciliation.",
          "reflectionQuestion": "Why do banks treat transaction completeness as the highest priority?"
        }
      }
    ],
    "discovery": {
      "badge": "Relational Design & Transactions",
      "tagline": "Organized tables linked together, updated as all-or-nothing operations",
      "simpleMeaning": "A see-saw balance: You cannot push down one side without raising the other. In payments, taking ₹850 from Person A and giving ₹850 to Person B must happen as one single linked step. It either succeeds 100% together, or rolls back to the start.",
      "olaExample": "In Ola, the 'Trips' table links the 'Rider ID' and 'Driver ID'. When trip ends, ₹850 transfers atomically between both balances.",
      "analogy": "Swapping books: You put a book in your friend's hand at the exact moment they put their book in yours; no one walks away empty-handed.",
      "howItWorks": [
        "1. Begin Transaction: Lock both balances temporarily.",
        "2. Perform Steps: Deduct ₹850 from rider, add ₹850 to driver, mark trip as paid.",
        "3. Commit: If all steps succeed, commit changes. If anything fails, rollback completely."
      ],
      "whyItMatters": "Without linked atomic transactions, system crashes would cause riders to lose money without drivers getting paid.",
      "visualExplanation": "[Rider Wallet: -₹850] ◄──(Atomic Link)──► [Driver Wallet: +₹850] ──► [Trip #89021: Paid ✓]",
      "contrast": {
        "termA": "All-or-Nothing (Atomic)",
        "descA": "Both accounts update together perfectly, or neither updates at all.",
        "termB": "Disconnected Updates",
        "descB": "One account updates while the other fails, causing vanished money."
      },
      "teacherNotes": {
        "realWorld": "Relational databases use Write-Ahead Logs (WAL) to ensure durability even during sudden server power cuts."
      }
    },
    "knowledgeCheck": {
      "question": "What happens if a power failure occurs halfway through an atomic bank transfer in the Ola app?",
      "options": [
        {
          "id": "A",
          "text": "The entire transaction is cancelled and both accounts return to their original balances.",
          "isCorrect": true,
          "explanation": "Correct! Atomic transactions roll back completely if interrupted, preserving exact balances."
        },
        {
          "id": "B",
          "text": "The money is permanently lost and deleted forever.",
          "isCorrect": false,
          "explanation": "Transactional databases prevent money from vanishing during crashes."
        },
        {
          "id": "C",
          "text": "The app gives both the rider and driver ₹10,000 for free.",
          "isCorrect": false,
          "explanation": "Crashes do not create magic free money; databases protect exact numbers."
        }
      ],
      "hint": "Hint: Think about what 'all-or-nothing' means when something fails midway."
    }
  },
  {
    "id": 9,
    "stage": 1,
    "sno": 9,
    "topic": "Database Architecture: Relational vs. Non-Relational (SQL vs. NoSQL Paradigm)",
    "concept": "SQL vs. NoSQL Storage",
    "title": "Level 9: Strict Bank Ledgers vs. Fast Moving Car Coordinates",
    "time": "Evening Peak — 100,000 Cars Moving",
    "usersCount": "100,000 Cabs Sending GPS Pings",
    "topicHint": "Choosing the Right Storage System for the Right Kind of Data",
    "situation": "Ola manages two very different types of information: (1) Passenger bank wallet balances that must never have a single rupee mistake, and (2) 100,000 moving cars sending rapid GPS coordinates every single second.",
    "problem": "Why does Ola use strict, organized record books for wallet money, but a quick, flexible notepad for moving car locations?",
    "simulationType": "database_polyglot",
    "choices": [
      {
        "id": "A",
        "text": "Money needs strict rules with zero mistakes, while moving cars need ultra-fast saving every second.",
        "isOptimal": true,
        "consequenceText": "Spot on! Financial balances require rigid safety checks where numbers always add up. But moving GPS coordinates arrive thousands of times per second and need lightning-fast saving without heavy locking.",
        "statImpact": {
          "latency": "2ms GPS / 15ms Bank",
          "capacity": "Dual Optimized",
          "risk": "Zero Data Corruption",
          "cost": "Balanced"
        },
        "whatHappened": {
          "helped": "Understood why different kinds of data need different kinds of storage.",
          "bottleneck": "Using slow, rigid bank ledgers for rapid GPS coordinates causes the database to lock up and freeze.",
          "reflectionQuestion": "Why would forcing 100,000 GPS pings per second into a bank database slow down cab booking?"
        },
        "successSummary": "Optimal storage choice! Bank money stays strictly safe; moving car locations stream smoothly."
      },
      {
        "id": "B",
        "text": "Moving car locations are permanent and can never be erased.",
        "isOptimal": false,
        "consequenceText": "Old car coordinates from 2 hours ago become outdated quickly; they are not permanent like bank receipts.",
        "statImpact": {
          "latency": "Disk Full",
          "capacity": "Low",
          "risk": "Wasted Space",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Confused temporary location telemetry with permanent financial records.",
          "bottleneck": "Storing transient data permanently.",
          "reflectionQuestion": "Does anyone care where a cab was driving 3 weeks ago at 3:15 PM?"
        }
      },
      {
        "id": "C",
        "text": "Bank accounts change thousands of times every second for each passenger.",
        "isOptimal": false,
        "consequenceText": "A passenger pays for a ride once every few hours, not thousands of times per second.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Reversed the traffic frequency of bank payments vs GPS pings.",
          "bottleneck": "Misunderstanding data velocity.",
          "reflectionQuestion": "Which happens more often: a car sending its GPS location or a passenger paying a bill?"
        }
      }
    ],
    "discovery": {
      "badge": "SQL vs. NoSQL Databases",
      "tagline": "Strict relational tables for finances; Flexible high-speed stores for live telemetry",
      "simpleMeaning": "A spreadsheet vs. a whiteboard: A financial ledger is like an accountant's spreadsheet: rows and columns must balance to the penny. A live location tracker is like a whiteboard: you quickly wipe and update the latest car coordinate every second.",
      "olaExample": "Ola uses PostgreSQL (SQL) for rider balances and invoices; it uses Redis and Cassandra (NoSQL) for high-speed live GPS coordinates.",
      "analogy": "A bank vault vs. a sports scoreboard: The bank vault has double locks; the scoreboard updates numbers instantly as players run.",
      "howItWorks": [
        "1. Structured Data (SQL): Strict tables, columns, and foreign keys for money and user accounts.",
        "2. Fast Stream Data (NoSQL): Simple key-value pairs (`Cab_901: Lat 12.97, Long 77.59`) saved in milliseconds."
      ],
      "whyItMatters": "Using the right database engine keeps banking reliable while letting the map update smoothly.",
      "visualExplanation": "[Wallet & Invoices] ──► [Strict SQL Ledger] | [100k GPS Pings/sec] ──► [Fast NoSQL Cache]",
      "contrast": {
        "termA": "Relational (SQL)",
        "descA": "Strict structure, tables, zero mistakes, ideal for payments.",
        "termB": "Non-Relational (NoSQL)",
        "descB": "Ultra-fast, flexible, high volume, ideal for streaming coordinates."
      },
      "teacherNotes": {
        "realWorld": "This pattern is known as Polyglot Persistence: using specialized databases for specialized workloads."
      }
    },
    "knowledgeCheck": {
      "question": "Which database type is best suited for storing live driver GPS coordinates updated every second?",
      "options": [
        {
          "id": "A",
          "text": "A fast, flexible non-relational database built for rapid writing.",
          "isCorrect": true,
          "explanation": "Correct! High-velocity data needs high write throughput without heavy relational locks."
        },
        {
          "id": "B",
          "text": "A paper notebook kept inside the driver's glove compartment.",
          "isCorrect": false,
          "explanation": "Paper notebooks cannot be read by cloud computers or mobile apps."
        },
        {
          "id": "C",
          "text": "A CD-ROM disk that can only be written once.",
          "isCorrect": false,
          "explanation": "CD-ROMs are slow, outdated, and cannot handle continuous updates."
        }
      ],
      "hint": "Hint: Look for the option built for fast, frequent writes."
    }
  },
  {
    "id": 10,
    "stage": 1,
    "sno": 10,
    "topic": "OLTP vs. OLAP: Fast Transactional Processing vs. Deep Analytical Processing",
    "concept": "Live Operations vs. Historical Analytics",
    "title": "Level 10: Booking Cabs Right Now vs. Studying Last Year's Traffic",
    "time": "Peak Evening — Ola Headquarters",
    "usersCount": "50,000 Live Bookings + 10M Historical Reports",
    "topicHint": "Separating Live Ride Dispatch from Heavy Business Analytics",
    "situation": "While 50,000 passengers are actively booking cabs, a team of business analysts wants to run a massive study analyzing 10 million rides from last monsoon to calculate holiday surge prices.",
    "problem": "Why shouldn't managers run giant reports on last year's 10 million rides on the same computer that is currently booking live cabs?",
    "simulationType": "oltp_olap_registers",
    "choices": [
      {
        "id": "A",
        "text": "The heavy report will slow down the computer and make live cab bookings freeze.",
        "isOptimal": true,
        "consequenceText": "Exactly right! Crunching millions of past records takes heavy memory and CPU. Running that on the live dispatch computer would cause passengers' screens to freeze and fail to book cabs.",
        "statImpact": {
          "latency": "Live: 10ms / Analytics: Separate",
          "capacity": "Isolated",
          "risk": "Zero Freeze",
          "cost": "Optimized"
        },
        "whatHappened": {
          "helped": "Understood why live transactional systems must be separated from historical analytical warehouses.",
          "bottleneck": "Heavy analytical queries consume all disk read channels, blocking quick customer bookings.",
          "reflectionQuestion": "Why should customers at a grocery cash register not wait for the store accountant to audit annual taxes?"
        },
        "successSummary": "Clean separation! Live dispatch stays lightning fast; analysts run heavy reports on a separate data warehouse."
      },
      {
        "id": "B",
        "text": "Past ride data could accidentally change today's cab fares.",
        "isOptimal": false,
        "consequenceText": "Reading past reports doesn't overwrite current prices; the real danger is exhausting computer power and freezing live dispatch.",
        "statImpact": {
          "latency": "Frozen",
          "capacity": "0",
          "risk": "Downtime",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Focused on data corruption instead of computer workload exhaustion.",
          "bottleneck": "Resource contention.",
          "reflectionQuestion": "What happens when a computer processor is pushed to 100% capacity?"
        }
      },
      {
        "id": "C",
        "text": "Computers can only open one file per day.",
        "isOptimal": false,
        "consequenceText": "Computers can open millions of files; the challenge is sharing memory and processing power between live users and giant reports.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Underestimated computer capabilities.",
          "bottleneck": "Misunderstanding multi-tasking limits.",
          "reflectionQuestion": "Why do big companies use separate analytical data warehouses?"
        }
      }
    ],
    "discovery": {
      "badge": "OLTP vs. OLAP",
      "tagline": "Fast live operations on one side; Deep historical analytics on the other",
      "simpleMeaning": "A supermarket checkout vs. a tax audit: At the checkout register, customers need to scan items and pay in 5 seconds (OLTP). In the back office, the accountant spends 4 hours analyzing last month's receipts (OLAP). You never make customers wait at the register while the accountant audits the books.",
      "olaExample": "Ola dispatches live cabs in 10ms using an OLTP database. Every night, ride records copy over to an OLAP warehouse (like Snowflake/BigQuery) for long business reports.",
      "analogy": "A restaurant kitchen (making today's lunch fast) vs. a recipe book author (studying culinary trends over 10 years).",
      "howItWorks": [
        "1. Live Booking (OLTP): Small, fast reads and writes. 'Book cab, assign driver, deduct ₹250'.",
        "2. Deep Analytics (OLAP): Giant historical queries. 'What was the average travel time on rainy Fridays across 5 years?'",
        "3. Workload Isolation: Keep them on separate computers so live rides never lag."
      ],
      "whyItMatters": "Separating live booking from business reporting ensures passengers never experience app freezes because an executive ran a big report.",
      "visualExplanation": "[Live Bookings (10ms)] ──► [Live OLTP Server] | [10M Past Rides] ──► [Separate OLAP Warehouse]",
      "contrast": {
        "termA": "Live Operations (OLTP)",
        "descA": "Handles millions of tiny, fast transactions happening right now.",
        "termB": "Analytical Warehouse (OLAP)",
        "descB": "Scans millions of past records for charts, trends, and business decisions."
      },
      "teacherNotes": {
        "realWorld": "Data pipelines extract, transform, and load (ETL) operational data into cloud analytical warehouses."
      }
    },
    "knowledgeCheck": {
      "question": "What is the main purpose of an analytical data warehouse (OLAP)?",
      "options": [
        {
          "id": "A",
          "text": "To study large amounts of past data and business trends without slowing down live users.",
          "isCorrect": true,
          "explanation": "Correct! It isolates heavy analysis from the live customer booking system."
        },
        {
          "id": "B",
          "text": "To assign a nearby driver to a passenger in 2 milliseconds.",
          "isCorrect": false,
          "explanation": "Live cab matching is an OLTP operational task, not an analytical warehouse job."
        },
        {
          "id": "C",
          "text": "To sound a loud horn inside the driver's car.",
          "isCorrect": false,
          "explanation": "Car horns are physical automotive hardware, not data warehousing."
        }
      ],
      "hint": "Hint: Think about why managers study long-term business trends."
    }
  },
  {
    "id": 11,
    "stage": 1,
    "sno": 11,
    "topic": "ACID Properties: Atomicity, Consistency, Isolation, and Durability",
    "concept": "ACID Reliability Guarantees",
    "title": "Level 11: What Happens When Your Phone Battery Dies Mid-Payment?",
    "time": "Midnight Airport Ride Settlement",
    "usersCount": "Trip #99214 — ₹600 Payment",
    "topicHint": "The 4 Golden Rules That Keep Money and Data Completely Safe",
    "situation": "A passenger finishes a ride and taps 'Pay ₹600 with Wallet'. Right as the wheel spins, the passenger's phone runs out of battery and turns off completely.",
    "problem": "If your phone battery suddenly dies in the middle of paying for a ride, what must happen to your money?",
    "simulationType": "acid_atomic_vault",
    "choices": [
      {
        "id": "A",
        "text": "The payment is cancelled completely and your balance stays untouched, with zero money lost.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is the 'A' in ACID (Atomicity). If the payment cannot finish 100% cleanly, the computer automatically resets the transaction to the beginning. No money disappears into nowhere.",
        "statImpact": {
          "latency": "10ms",
          "capacity": "ACID Guaranteed",
          "risk": "Zero Lost Rupee",
          "cost": "Exact"
        },
        "whatHappened": {
          "helped": "Understood that reliable systems never leave transactions in a broken, half-finished state.",
          "bottleneck": "Without atomicity, partial updates cause money to vanish or balance mismatches.",
          "reflectionQuestion": "Why is it better for an interrupted payment to completely cancel rather than half-finish?"
        },
        "successSummary": "ACID protection verified! Interrupted payment rolled back safely with zero lost funds."
      },
      {
        "id": "B",
        "text": "The money is permanently lost and cannot be returned.",
        "isOptimal": false,
        "consequenceText": "Computer databases are designed with safety rules precisely so battery deaths or network drops never erase your money.",
        "statImpact": {
          "latency": "Broken",
          "capacity": "0",
          "risk": "Customer Outrage",
          "cost": "Heavy"
        },
        "whatHappened": {
          "helped": "Assumed software crashes destroy money.",
          "bottleneck": "Unfamiliarity with transaction rollback logs.",
          "reflectionQuestion": "How do database logs protect account balances even after sudden power cuts?"
        }
      },
      {
        "id": "C",
        "text": "Half the money goes to the driver and half vanishes.",
        "isOptimal": false,
        "consequenceText": "There is no such thing as 'half a payment'. Transactions are all-or-nothing; they never split money into thin air.",
        "statImpact": {
          "latency": "Corrupted",
          "capacity": "0",
          "risk": "Accounting Disaster",
          "cost": "Loss"
        },
        "whatHappened": {
          "helped": "Thought partial transactions are kept.",
          "bottleneck": "Violating atomicity.",
          "reflectionQuestion": "Can a bank transfer be 50% finished?"
        }
      }
    ],
    "discovery": {
      "badge": "ACID Properties",
      "tagline": "Atomicity (All or nothing), Consistency (Valid rules), Isolation (No mix-ups), Durability (Saved permanently)",
      "simpleMeaning": "The four unbreakable rules of bank storage: 1. Atomicity: You can't take half a step; it's all-or-nothing. 2. Consistency: Balances can never be negative. 3. Isolation: Multiple payments don't bump into each other. 4. Durability: Once saved, even lightning striking the building won't erase it.",
      "olaExample": "When paying ₹600 for an Ola ride, ACID ensures that if the server loses power midway, your ₹600 is safe and reappears correctly on reboot.",
      "analogy": "A physical vending machine: If the snack gets stuck and doesn't drop, the coin falls back into the coin return slot; it doesn't keep your money.",
      "howItWorks": [
        "1. Atomicity: Complete every step or reset to the starting point.",
        "2. Consistency: Ensure all rules (e.g. non-negative wallet) are obeyed.",
        "3. Isolation: Process simultaneous transactions independently without interference.",
        "4. Durability: Write changes to disk so they survive sudden power loss."
      ],
      "whyItMatters": "ACID properties prevent double charges, negative balances, and missing payments across millions of daily rides.",
      "visualExplanation": "[Payment Interrupted] ──► [ACID Rollback Triggered] ──► [Balance Untouched: ₹600 Safe!]",
      "contrast": {
        "termA": "ACID Compliant",
        "descA": "Unbreakable guarantees: zero lost money, zero phantom balances.",
        "termB": "Non-ACID System",
        "descB": "Network drops or battery deaths can corrupt ledgers and lose funds."
      },
      "teacherNotes": {
        "realWorld": "Financial core systems rely on ACID guarantees in relational databases like PostgreSQL and Oracle."
      }
    },
    "knowledgeCheck": {
      "question": "What does the 'A' (Atomicity) in ACID guarantee during an Ola wallet payment?",
      "options": [
        {
          "id": "A",
          "text": "The transaction happens completely as one step, or rolls back entirely if any error occurs.",
          "isCorrect": true,
          "explanation": "Correct! Atomicity means all-or-nothing: no half-finished payments."
        },
        {
          "id": "B",
          "text": "The app plays an automated voice message thanking the passenger.",
          "isCorrect": false,
          "explanation": "Voice messages are audio features, not database transaction guarantees."
        },
        {
          "id": "C",
          "text": "The cab arrives in exactly 60 seconds.",
          "isCorrect": false,
          "explanation": "Cab arrival time depends on city traffic, not database atomicity."
        }
      ],
      "hint": "Hint: Think about the 'all-or-nothing' rule."
    }
  },
  {
    "id": 12,
    "stage": 2,
    "sno": 12,
    "topic": "Database Replication: Primary-Replica (Master-Slave) Architecture",
    "concept": "Database Replication & High Availability",
    "title": "Level 12: When the Main Storage Computer Loses Power",
    "time": "Heavy Thunderstorm — Mumbai Datacenter",
    "usersCount": "150,000 Active Trips",
    "topicHint": "Keeping Identical Copy Computers Ready to Take Over Instantly",
    "situation": "A lightning storm hits the main datacenter in Mumbai, and the master computer storing all ongoing ride records suddenly shuts off.",
    "problem": "If the main computer storing all ride records suddenly loses power, how does the Ola app stay online?",
    "simulationType": "db_replication_cluster",
    "choices": [
      {
        "id": "A",
        "text": "Backup copy computers immediately step in and take over the work.",
        "isOptimal": true,
        "consequenceText": "Spot on! The primary computer was continuously copying every booking to backup computers in Bangalore. When Mumbai went dark, Bangalore stepped in instantly with zero lost rides.",
        "statImpact": {
          "latency": "15ms",
          "capacity": "Failover in 1.2s",
          "risk": "Zero Downtime",
          "cost": "High Availability"
        },
        "whatHappened": {
          "helped": "Understood the life-saving value of database replication and automatic failover.",
          "bottleneck": "Relying on one computer without copies creates a fatal single point of failure.",
          "reflectionQuestion": "Why should database copies be located in different physical cities?"
        },
        "successSummary": "Failover complete! Backup copy stepped up as leader with zero lost trips."
      },
      {
        "id": "B",
        "text": "The app tells all passengers across the country to wait until tomorrow.",
        "isOptimal": false,
        "consequenceText": "Shutting down for a full day loses millions in revenue and strands commuters across the country.",
        "statImpact": {
          "latency": "24 Hours",
          "capacity": "0",
          "risk": "Business Disaster",
          "cost": "Massive"
        },
        "whatHappened": {
          "helped": "Saw why large scale apps cannot simply stop operating.",
          "bottleneck": "Unacceptable business downtime.",
          "reflectionQuestion": "How do companies guarantee 99.99% uptime year-round?"
        }
      },
      {
        "id": "C",
        "text": "All past ride records are deleted so the computer can restart faster.",
        "isOptimal": false,
        "consequenceText": "Deleting ride records would erase driver earnings and passenger payment receipts, causing legal and financial chaos.",
        "statImpact": {
          "latency": "Data Lost",
          "capacity": "0",
          "risk": "Legal Catastrophe",
          "cost": "Total"
        },
        "whatHappened": {
          "helped": "Recognized that business records must be preserved permanently.",
          "bottleneck": "Unrecoverable data loss.",
          "reflectionQuestion": "Why must financial receipts be protected across multiple machines?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Replication",
      "tagline": "Keep exact mirror copies updated continuously so you never face a blackout",
      "simpleMeaning": "A twin co-pilot: In an airplane, there are two pilots. If the captain suddenly faints, the co-pilot takes the controls immediately. The plane never crashes. Database replication gives you digital co-pilots.",
      "olaExample": "Ola's primary database in Mumbai writes every ride to replica databases in Bangalore. If Mumbai loses power, Bangalore takes over in 2 seconds.",
      "analogy": "Photocopying a will: You keep one copy in your home safe and another with your lawyer so a fire doesn't destroy the only record.",
      "howItWorks": [
        "1. Master Writes: Primary database accepts new bookings and payments.",
        "2. Live Sync: Changes stream instantly to replica backup machines.",
        "3. Auto-Promotion: If the primary dies, a replica is automatically promoted to the new master."
      ],
      "whyItMatters": "Hardware breaks, power cords get unplugged, and storms happen. Replication guarantees the app survives without losing customer trips.",
      "visualExplanation": "[Primary DB (Mumbai)] ──Sync──► [Replica DB (Bangalore)] ──(Mumbai Dies!)──► [Replica Becomes New Master ✓]",
      "contrast": {
        "termA": "Replicated Cluster",
        "descA": "Multiple synchronized machines; seamless automatic takeover during failures.",
        "termB": "Single Machine Setup",
        "descB": "One machine dies, taking down the entire app for everyone."
      },
      "teacherNotes": {
        "realWorld": "High availability setups use consensus algorithms like Raft to elect a new leader automatically."
      }
    },
    "knowledgeCheck": {
      "question": "What is the primary benefit of running a backup replica database for Ola?",
      "options": [
        {
          "id": "A",
          "text": "The app stays online without losing data if the main storage computer crashes.",
          "isCorrect": true,
          "explanation": "Correct! Replicas provide high availability and prevent catastrophic downtime."
        },
        {
          "id": "B",
          "text": "It washes the cabs automatically after every trip.",
          "isCorrect": false,
          "explanation": "Software databases manage digital records, not physical car washing."
        },
        {
          "id": "C",
          "text": "It replaces all human drivers with flying drones.",
          "isCorrect": false,
          "explanation": "Replication is a data reliability pattern, not drone technology."
        }
      ],
      "hint": "Hint: Think about what happens when the primary machine stops working."
    }
  },
  {
    "id": 13,
    "stage": 2,
    "sno": 13,
    "topic": "Caching Strategies: In-Memory Caching & Cache Eviction (LRU/LFU)",
    "concept": "Fast Memory Caching",
    "title": "Level 13: Loading Driver Profiles in 2 Milliseconds",
    "time": "Morning Rush — 60,000 Profile Views/sec",
    "usersCount": "60,000 Riders Checking Drivers",
    "topicHint": "Keeping Popular Information in Ultra-Fast Temporary Memory",
    "situation": "When a cab is assigned, riders repeatedly check the driver's name, rating, and car photo. Searching the slow spinning hard disk 60,000 times a second is grinding the database to a halt.",
    "problem": "How can the Ola app show a driver's name and photo instantly without searching through slow storage disks every single time?",
    "simulationType": "caching_sticky_notepad",
    "choices": [
      {
        "id": "A",
        "text": "It keeps frequently viewed details in super-fast temporary memory ready to read.",
        "isOptimal": true,
        "consequenceText": "Brilliant! Reading from super-fast temporary memory (RAM) takes just 2 milliseconds, compared to 120 milliseconds on a hard disk. 99% of requests are answered instantly without touching the disk.",
        "statImpact": {
          "latency": "2ms (vs 120ms)",
          "capacity": "99% Cache Hit",
          "risk": "Zero Disk Overload",
          "cost": "Efficient"
        },
        "whatHappened": {
          "helped": "Understood the tremendous speed boost of in-memory caching.",
          "bottleneck": "Repeated disk reads saturate input/output channels, making the app crawl.",
          "reflectionQuestion": "Why is keeping a sticky note on your desk faster than walking to the basement library every time?"
        },
        "successSummary": "Cache active! Driver profiles load in 2ms; database disk stays relaxed."
      },
      {
        "id": "B",
        "text": "It asks the passenger to guess the driver's name first.",
        "isOptimal": false,
        "consequenceText": "Making passengers guess names is absurd and makes the app completely unusable.",
        "statImpact": {
          "latency": "Awful",
          "capacity": "0",
          "risk": "User Rage",
          "cost": "Lost Users"
        },
        "whatHappened": {
          "helped": "Saw why user guessing is not a software solution.",
          "bottleneck": "Unacceptable user experience.",
          "reflectionQuestion": "How should software provide instant answers automatically?"
        }
      },
      {
        "id": "C",
        "text": "It downloads every driver picture on the internet onto the passenger's phone.",
        "isOptimal": false,
        "consequenceText": "Downloading millions of driver photos would fill up the passenger's phone storage and consume gigabytes of mobile data.",
        "statImpact": {
          "latency": "Phone Full",
          "capacity": "0",
          "risk": "Storage Full",
          "cost": "Extreme"
        },
        "whatHappened": {
          "helped": "Recognized that client devices cannot store the entire company's files.",
          "bottleneck": "Storage exhaustion on mobile phones.",
          "reflectionQuestion": "Why should servers cache only the active, frequently requested data?"
        }
      }
    ],
    "discovery": {
      "badge": "In-Memory Caching",
      "tagline": "Keep answers on a digital sticky note instead of walking to the bookshelf",
      "simpleMeaning": "A sticky note on your computer: If your friend asks for your Wi-Fi password 10 times a day, you don't go look under the router in the hallway each time. You write it on a sticky note right by your keyboard. Caching is that sticky note.",
      "olaExample": "Ola stores active driver profiles in Redis RAM cache. Fetching takes 2ms instead of 120ms from disk.",
      "analogy": "Keeping salt on the kitchen counter instead of walking to the grocery store every time you cook.",
      "howItWorks": [
        "1. First Request: Server reads from disk, hands data to user, and leaves a copy in fast RAM.",
        "2. Next 1,000 Requests: Read directly from RAM in 2 milliseconds.",
        "3. Eviction: When RAM gets full, remove the least recently used records to make room for new ones."
      ],
      "whyItMatters": "Caching protects databases from crashing under heavy rush-hour traffic and makes the app feel lightning fast.",
      "visualExplanation": "[Rider Checks Ramesh Profile] ──► [Fast RAM Cache (2ms ✓)] ──► Instant Response (Bypasses Slow Disk!)",
      "contrast": {
        "termA": "RAM Cache (Redis)",
        "descA": "Ultra-fast memory (2ms), temporary, handles millions of reads effortlessly.",
        "termB": "Permanent Disk (Database)",
        "descB": "Safe permanent storage, but 50x slower for repetitive reads."
      },
      "teacherNotes": {
        "realWorld": "Least Recently Used (LRU) cache eviction ensures the most active data remains readily accessible."
      }
    },
    "knowledgeCheck": {
      "question": "What happens when the fast cache memory runs out of space?",
      "options": [
        {
          "id": "A",
          "text": "It removes the least recently viewed records to make room for fresh data.",
          "isCorrect": true,
          "explanation": "Correct! Cache eviction policies like LRU safely discard stale items."
        },
        {
          "id": "B",
          "text": "The computer explodes and catches fire.",
          "isCorrect": false,
          "explanation": "Computers do not explode when RAM fills up; they execute eviction algorithms."
        },
        {
          "id": "C",
          "text": "All passengers get charged ₹50 extra.",
          "isCorrect": false,
          "explanation": "Memory management has nothing to do with charging extra customer fees."
        }
      ],
      "hint": "Hint: Think about throwing away old papers when your desk gets cluttered."
    }
  },
  {
    "id": 14,
    "stage": 2,
    "sno": 14,
    "topic": "Content Delivery Networks (CDN): Edge Caching & Geographical PoPs",
    "concept": "Edge Caching & Geographical CDN",
    "title": "Level 14: Downloading Car Icons & Map Tiles Across India",
    "time": "Pan-India Expansion — Delhi, Kolkata, Chennai",
    "usersCount": "5,000,000 App Downloads Across India",
    "topicHint": "Placing Content Nearby So It Doesn't Travel Thousands of Kilometers",
    "situation": "A passenger in Delhi opens the Ola app. The app needs to load 15MB of city map tiles and car pictures. The main company computers are located 2,000 kilometers away in Bangalore.",
    "problem": "Why should a rider in Delhi download car pictures from a nearby computer in Delhi instead of the main office in Bangalore?",
    "simulationType": "cdn_edge_kiosks",
    "choices": [
      {
        "id": "A",
        "text": "Fetching pictures from nearby takes less time and avoids overloading the main office.",
        "isOptimal": true,
        "consequenceText": "Spot on! Light signals travel across fiber optic cables. Fetching files from 10km away in Delhi takes only 15ms, compared to 150ms from Bangalore, and keeps the Bangalore datacenter free for live bookings.",
        "statImpact": {
          "latency": "15ms (vs 150ms)",
          "capacity": "Distributed Edge",
          "risk": "Zero Origin Congestion",
          "cost": "Bandwidth Saved"
        },
        "whatHappened": {
          "helped": "Understood the physics of network distance and edge caching.",
          "bottleneck": "Sending every static image request across 2,000km chokes central office bandwidth.",
          "reflectionQuestion": "Why shouldn't 5 million users all download the same car icon from one single room in Bangalore?"
        },
        "successSummary": "Edge delivery verified! Map tiles and vehicle graphics load in 15ms across all cities."
      },
      {
        "id": "B",
        "text": "Cars in Delhi look completely different from cars in Bangalore.",
        "isOptimal": false,
        "consequenceText": "Car pictures and map tiles are identical standard graphics across all cities.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Assumed geographic content differences instead of network speed advantages.",
          "bottleneck": "Missing network physics.",
          "reflectionQuestion": "Why does physical distance matter when downloading files over the internet?"
        }
      },
      {
        "id": "C",
        "text": "Pictures are not allowed to travel across state borders over the internet.",
        "isOptimal": false,
        "consequenceText": "Internet signals travel freely across state borders; physical distance is the only factor causing network latency.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "False Legal Belief",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Invented false border restrictions.",
          "bottleneck": "Ignoring speed of light latency.",
          "reflectionQuestion": "How does storing files closer to users reduce loading delay?"
        }
      }
    ],
    "discovery": {
      "badge": "Content Delivery Networks (CDN)",
      "tagline": "Store heavy static files close to users in every city to slash loading times",
      "simpleMeaning": "Neighborhood book warehouses: If an online bookstore kept all books in one warehouse in London, Indian readers would wait 3 weeks for delivery. Instead, the company keeps small warehouses in Delhi, Mumbai, and Kolkata. Orders arrive in 1 hour.",
      "olaExample": "Ola puts vehicle icons, map graphics, and promotional banners on edge servers in every major Indian city. Riders download them in 15 milliseconds.",
      "analogy": "Local newspaper printing presses: Rather than flying papers from one capital, newspapers print in each regional city so morning papers arrive before breakfast.",
      "howItWorks": [
        "1. Origin Server: Master graphics live in Bangalore.",
        "2. Edge Distribution: Caches in Delhi, Mumbai, and Kolkata save copies locally.",
        "3. Instant Delivery: When a Delhi user taps the app, Delhi's edge machine serves the file immediately."
      ],
      "whyItMatters": "CDNs reduce app launch times from 5 seconds to under 1 second and save massive bandwidth bills.",
      "visualExplanation": "[Delhi Rider] ──► [Delhi Edge CDN (15ms!)] | (Bypasses 2,000km trip to Bangalore!)",
      "contrast": {
        "termA": "Local Edge CDN",
        "descA": "Static pictures served from your local city in 15ms.",
        "termB": "Single Central Server",
        "descB": "Every user travels 2,000km across fiber cables, choking central bandwidth."
      },
      "teacherNotes": {
        "realWorld": "CDNs like Cloudflare and Akamai handle the vast majority of worldwide internet static media delivery."
      }
    },
    "knowledgeCheck": {
      "question": "Which of the following items is BEST suited to be stored on an Edge CDN for the Ola app?",
      "options": [
        {
          "id": "A",
          "text": "App logo images, car type graphics, and city street map tiles.",
          "isCorrect": true,
          "explanation": "Correct! Static, unchanging assets that everyone downloads benefit most from CDN caching."
        },
        {
          "id": "B",
          "text": "A passenger's private bank PIN number.",
          "isCorrect": false,
          "explanation": "Private bank credentials must never be cached on public edge nodes."
        },
        {
          "id": "C",
          "text": "The live GPS coordinate of a moving car updated this second.",
          "isCorrect": false,
          "explanation": "Live moving GPS changes every second and requires direct streaming, not static CDN caching."
        }
      ],
      "hint": "Hint: Think about files that stay the same for months and are shared by all users."
    }
  },
  {
    "id": 15,
    "stage": 2,
    "sno": 15,
    "topic": "Scaling Paradigms: Horizontal (Scale Out) vs. Vertical (Scale Up)",
    "concept": "Horizontal vs. Vertical Scaling",
    "title": "Level 15: Monsoon Rush — More Computers vs. One Giant Chip",
    "time": "Friday 6:00 PM — Sudden Bangalore Monsoon Rain",
    "usersCount": "10x Traffic Spike (100,000 Riders)",
    "topicHint": "Adding Many Normal Machines vs. Buying One Super-Expensive Machine",
    "situation": "Heavy rain pours over the city. Ride requests explode by 10 times in 5 minutes. The current server is at 98% CPU and about to crash.",
    "problem": "When sudden rain starts and 10 times more people open Ola, what is the best way to keep the app fast?",
    "simulationType": "scaling_cluster_nodes",
    "choices": [
      {
        "id": "A",
        "text": "Add many normal computers to share the workload together.",
        "isOptimal": true,
        "consequenceText": "Spot on! This is Horizontal Scaling ('Scaling Out'). Adding 10 affordable cloud servers shares the heavy rain surge effortlessly. If traffic doubles again, simply add 10 more with a single click.",
        "statImpact": {
          "latency": "20ms",
          "capacity": "Elastic 10x Fleet",
          "risk": "Zero Downtime",
          "cost": "Pay-as-you-go"
        },
        "whatHappened": {
          "helped": "Understood the limitless elasticity of horizontal scaling.",
          "bottleneck": "Upgrading a single computer (Vertical Scaling) is expensive, has strict physical limits, and creates one single point of total failure.",
          "reflectionQuestion": "Why is hiring 10 delivery riders better than trying to make one rider pedal a bicycle 10 times faster?"
        },
        "successSummary": "Elastic scaling achieved! 10 modular servers shared the storm surge effortlessly."
      },
      {
        "id": "B",
        "text": "Buy one super expensive machine and hope it never reaches its limit.",
        "isOptimal": false,
        "consequenceText": "One single machine has physical heat and chip limits. It costs 20x more and if it fails, the entire company goes completely dark.",
        "statImpact": {
          "latency": "Limit Reached",
          "capacity": "Fixed Ceiling",
          "risk": "Single Point of Failure",
          "cost": "Extreme"
        },
        "whatHappened": {
          "helped": "Recognized the severe physical and financial limits of vertical scaling.",
          "bottleneck": "Hardware ceilings and single point of failure.",
          "reflectionQuestion": "Can one supercomputer handle infinite traffic alone?"
        }
      },
      {
        "id": "C",
        "text": "Make passengers wait in a line so only one person can book at a time.",
        "isOptimal": false,
        "consequenceText": "Making 100,000 people wait one-by-one means the last passenger waits 3 days for a cab! Customers will immediately switch to competitors.",
        "statImpact": {
          "latency": "3 Days",
          "capacity": "1 User",
          "risk": "Business Death",
          "cost": "Zero Revenue"
        },
        "whatHappened": {
          "helped": "Saw why serialization destroys business during traffic surges.",
          "bottleneck": "Single-file queue bottlenecks.",
          "reflectionQuestion": "Why must modern cloud architectures process requests simultaneously?"
        }
      }
    ],
    "discovery": {
      "badge": "Scaling Paradigms",
      "tagline": "Scale Up (Make one bigger) vs. Scale Out (Add more machines to share the work)",
      "simpleMeaning": "Carrying heavy bricks: If you have 1,000 bricks to move, you don't look for an Olympic weightlifter to carry all 1,000 at once (Scale Up). You hire 10 normal workers to carry 100 bricks each (Scale Out). It's cheaper, faster, and if one worker trips, the other 9 keep moving.",
      "olaExample": "When rain starts in Bangalore, Ola's cloud automatically spins up 15 new server pods to share incoming ride bookings.",
      "analogy": "A supermarket on festival eve: You open 10 more checkout counters instead of making one cashier scan groceries at 200 mph.",
      "howItWorks": [
        "1. Traffic Detection: Cloud monitors CPU usage.",
        "2. Auto-Scale: When CPU exceeds 70%, launch 5 new server instances automatically.",
        "3. Scale Down: When rain stops and night falls, turn off the extra servers to save money."
      ],
      "whyItMatters": "Horizontal scaling provides practically unlimited growth with no single point of failure.",
      "visualExplanation": "[100k Rain Requests] ──► Distributed across [Server 1] + [Server 2] + [Server 3] ──► Smooth 25% CPU Each",
      "contrast": {
        "termA": "Horizontal Scaling (Scale Out)",
        "descA": "Adding more affordable machines. Limitless growth, resilient, elastic.",
        "termB": "Vertical Scaling (Scale Up)",
        "descB": "Upgrading CPU/RAM on one machine. Expensive, has hard physical ceilings."
      },
      "teacherNotes": {
        "realWorld": "Kubernetes and AWS Auto-Scaling Groups automate horizontal scaling based on live telemetry."
      }
    },
    "knowledgeCheck": {
      "question": "What is the biggest advantage of Horizontal Scaling (adding more computers) over Vertical Scaling?",
      "options": [
        {
          "id": "A",
          "text": "You can add as many machines as needed and if one crashes, the others keep working.",
          "isCorrect": true,
          "explanation": "Correct! It provides redundancy and elastic, practically limitless capacity."
        },
        {
          "id": "B",
          "text": "Computers stop using electricity completely.",
          "isCorrect": false,
          "explanation": "All computers require electricity to function."
        },
        {
          "id": "C",
          "text": "Cab drivers don't need to put fuel in their cars.",
          "isCorrect": false,
          "explanation": "Server architecture does not replace physical car fuel."
        }
      ],
      "hint": "Hint: Think about teamwork: many workers sharing the load."
    }
  },
  {
    "id": 16,
    "stage": 2,
    "sno": 16,
    "topic": "Load Balancing: Smart Traffic Routing & Node Health Checks",
    "concept": "Load Balancing & Traffic Distribution",
    "title": "Level 16: Dividing 100,000 Riders Evenly Across Servers",
    "time": "Evening Peak Traffic — 10 Backend Servers",
    "usersCount": "100,000 Active Connections",
    "topicHint": "The Smart Traffic Guide That Keeps Servers Calm and Healthy",
    "situation": "You added 5 new backend servers to handle rush hour. But right now, all 100,000 riders are rushing into Server #1, while Servers 2, 3, 4, and 5 are sitting completely empty.",
    "problem": "If thousands of people open Ola at the same time, how do we make sure one computer doesn't crash while others sit doing nothing?",
    "simulationType": "load_balancer_traffic",
    "choices": [
      {
        "id": "A",
        "text": "A traffic guide distributes incoming users evenly among all healthy computers.",
        "isOptimal": true,
        "consequenceText": "Exactly right! A Load Balancer acts like a smart airport traffic director. It points User 1 to Server A, User 2 to Server B, User 3 to Server C, keeping all servers relaxed at 25% load.",
        "statImpact": {
          "latency": "12ms",
          "capacity": "Balanced Across Fleet",
          "risk": "Zero Hotspots",
          "cost": "Optimal"
        },
        "whatHappened": {
          "helped": "Understood the critical role of load balancers in distributing incoming traffic.",
          "bottleneck": "Without traffic distribution, one computer gets crushed while others sit idle.",
          "reflectionQuestion": "What happens if one of the backend servers becomes sick or dies?"
        },
        "successSummary": "Traffic balanced! 100,000 requests distributed smoothly; all nodes healthy."
      },
      {
        "id": "B",
        "text": "The first computer takes everything until it crashes, then the next one starts.",
        "isOptimal": false,
        "consequenceText": "Crashing computers one by one causes constant app interruptions, dropped rides, and angry passengers.",
        "statImpact": {
          "latency": "Cascading Crashes",
          "capacity": "0",
          "risk": "Total Outage",
          "cost": "High"
        },
        "whatHappened": {
          "helped": "Saw why cascading failure is dangerous.",
          "bottleneck": "Unbalanced overload.",
          "reflectionQuestion": "Why should traffic be divided continuously from the very first request?"
        }
      },
      {
        "id": "C",
        "text": "Passengers must choose which computer number they want to connect to.",
        "isOptimal": false,
        "consequenceText": "Passengers have no idea what a server number is; asking users to pick server IDs is terrible design.",
        "statImpact": {
          "latency": "Confusing",
          "capacity": "Low",
          "risk": "User Drop",
          "cost": "Poor UX"
        },
        "whatHappened": {
          "helped": "Realized that internal infrastructure should be invisible to users.",
          "bottleneck": "Exposing internal routing to consumers.",
          "reflectionQuestion": "Should software handle routing automatically behind the scenes?"
        }
      }
    ],
    "discovery": {
      "badge": "Load Balancing",
      "tagline": "A smart traffic cop distributing incoming requests so no machine gets overwhelmed",
      "simpleMeaning": "A bank queue manager: When you enter a busy bank, you don't see 50 people crowding one teller window while four other tellers read newspapers. A staff member directs the next person in line to the next available teller. That staff member is the Load Balancer.",
      "olaExample": "Ola's Load Balancer receives 100,000 booking requests and routes 20,000 requests to each of 5 backend servers evenly.",
      "analogy": "Toll booth gates on a highway: Traffic divides into 8 open gates so cars don't all pile up behind Gate #1.",
      "howItWorks": [
        "1. Single Entry Point: All phones send requests to one public gateway.",
        "2. Health Checks: Load balancer pings all servers every 5 seconds. If Server 3 is dead, stop sending it traffic.",
        "3. Distribution Algorithms: Round-Robin (in turns), Least Connections (send to the least busy server)."
      ],
      "whyItMatters": "Load balancing prevents hot-spot crashes and ensures 100% smooth operations during massive traffic spikes.",
      "visualExplanation": "[100,000 Requests] ──► [LOAD BALANCER] ──► Evenly split across 4 Servers (25k each) ✓",
      "contrast": {
        "termA": "Load Balanced",
        "descA": "Traffic shared evenly; dead servers automatically bypassed.",
        "termB": "Unbalanced",
        "descB": "One machine overheats and crashes while others remain unused."
      },
      "teacherNotes": {
        "realWorld": "Cloud load balancers like AWS ALB/NLB operate at Layer 4 and Layer 7 with built-in SSL termination."
      }
    },
    "knowledgeCheck": {
      "question": "What does a Load Balancer do if one of the backend servers suddenly dies?",
      "options": [
        {
          "id": "A",
          "text": "It detects the dead server via health checks and routes all new traffic only to healthy servers.",
          "isCorrect": true,
          "explanation": "Correct! Automatic health checking ensures dead machines are bypassed instantly."
        },
        {
          "id": "B",
          "text": "It shuts down all other computers in sympathy.",
          "isCorrect": false,
          "explanation": "The entire purpose of load balancing is to keep the remaining servers running."
        },
        {
          "id": "C",
          "text": "It sends an apology letter to the dead computer's manufacturer.",
          "isCorrect": false,
          "explanation": "Load balancers automate technical routing, not postal apologies."
        }
      ],
      "hint": "Hint: Think about routing cars away from a blocked highway lane."
    }
  },
  {
    "id": 17,
    "stage": 2,
    "sno": 17,
    "topic": "Rate Limiting: Token Bucket Algorithms & Bot Traffic Shaping",
    "concept": "Rate Limiting & Bot Protection",
    "title": "Level 17: Stopping Bot Scripts from Flooding the App",
    "time": "Cyber Defense Alert — Ola Gateway",
    "usersCount": "1 Malicious Script vs. 100,000 Real Riders",
    "topicHint": "Protecting System Capacity with Fair Usage Turnstiles",
    "situation": "A malicious bot script targets the Ola dispatch gateway, sending 5,000 fake cab booking requests every second from a single IP address to crash the servers.",
    "problem": "What should the Ola app do if a single user tries to book 5,000 rides in one second?",
    "simulationType": "rate_limiter_turnstile",
    "choices": [
      {
        "id": "A",
        "text": "Block the flood of requests while letting normal passengers book without delay.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Rate Limiting. Real humans tap 'Book' once or twice; they don't tap 5,000 times a second. The gateway blocks the flood with 'Too Many Requests' while real riders get cabs smoothly.",
        "statImpact": {
          "latency": "1ms Block",
          "capacity": "Bots Blocked",
          "risk": "Zero Server Crash",
          "cost": "Defended"
        },
        "whatHappened": {
          "helped": "Understood the critical need for rate limiting to protect public gateways from spam attacks.",
          "bottleneck": "Without rate limits, a single bad script can overwhelm servers and deny service to everyone.",
          "reflectionQuestion": "How does a subway turnstile ensure people enter one at a time with a valid token?"
        },
        "successSummary": "Gate protected! Malicious flood rejected with HTTP 429; genuine riders served smoothly."
      },
      {
        "id": "B",
        "text": "Accept all 5,000 bookings and send 5,000 cabs to the same house.",
        "isOptimal": false,
        "consequenceText": "Sending 5,000 cabs to one house creates a colossal traffic jam, wastes driver fuel, and strands real passengers across the city.",
        "statImpact": {
          "latency": "Chaos",
          "capacity": "0",
          "risk": "Physical Gridlock",
          "cost": "Disaster"
        },
        "whatHappened": {
          "helped": "Recognized that software must detect and reject obvious spam.",
          "bottleneck": "Unfiltered spam processing.",
          "reflectionQuestion": "Why should systems validate whether a request volume is physically realistic?"
        }
      },
      {
        "id": "C",
        "text": "Shut down the entire app for all users in the city.",
        "isOptimal": false,
        "consequenceText": "Shutting down the app gives the hacker exactly what they wanted: taking down the service for all legitimate users.",
        "statImpact": {
          "latency": "Total Blackout",
          "capacity": "0",
          "risk": "Attacker Wins",
          "cost": "Massive Loss"
        },
        "whatHappened": {
          "helped": "Saw why defensive systems isolate the abuser instead of penalizing everyone.",
          "bottleneck": "Excessive collateral damage.",
          "reflectionQuestion": "Why should security systems block only the offender's IP address?"
        }
      }
    ],
    "discovery": {
      "badge": "Rate Limiting",
      "tagline": "Enforce fair usage limits so bad actors cannot overwhelm the system",
      "simpleMeaning": "A museum ticket turnstile: You can only walk through the turnstile if you insert one token. If someone tries to shove 5,000 people through the door in one second, the metal turnstile locks in place and blocks them. Rate limiting is that digital turnstile.",
      "olaExample": "Ola limits each user to 2 ride booking requests per minute. If a script sends 5,000/sec, the server immediately rejects them with 'HTTP 429: Too Many Requests'.",
      "analogy": "Only 3 free samples per customer at an ice cream parlor: It prevents one greedy person from eating all the ice cream before others arrive.",
      "howItWorks": [
        "1. Token Bucket: Every user gets a digital bucket with 5 tokens. Each request takes 1 token.",
        "2. Refill: Tokens refill slowly (e.g., 1 token every 10 seconds).",
        "3. Reject Excess: If the bucket is empty, reject the extra requests instantly at the door."
      ],
      "whyItMatters": "Rate limiting stops Denial-of-Service (DoS) attacks, brute-force password guessing, and ticket-scalping bots.",
      "visualExplanation": "[Bot: 5,000 req/sec] ──► [RATE LIMITER TURNSTILE] ──► [BLOCKED: 429 Too Many Requests 🛑] | [Human: 1 req/sec] ──► [PASSED ✓]",
      "contrast": {
        "termA": "Rate Limited Gateway",
        "descA": "Protects resources; ensures fair access for all legitimate humans.",
        "termB": "Unprotected Gateway",
        "descB": "One malicious script can crash the entire company for everyone."
      },
      "teacherNotes": {
        "realWorld": "Token Bucket and Leaky Bucket algorithms running in Redis provide sub-millisecond rate check speeds."
      }
    },
    "knowledgeCheck": {
      "question": "What is the standard response given to a computer that sends too many requests too quickly?",
      "options": [
        {
          "id": "A",
          "text": "An error message indicating 'Too Many Requests' so the sender must back off.",
          "isCorrect": true,
          "explanation": "Correct! HTTP 429 tells the client they exceeded their allowed rate limit."
        },
        {
          "id": "B",
          "text": "A coupon for a free meal.",
          "isCorrect": false,
          "explanation": "Rate limiting punishes spam, not rewards it."
        },
        {
          "id": "C",
          "text": "A prompt asking for the driver's favorite color.",
          "isCorrect": false,
          "explanation": "Rate limiting is an automated network protocol protection, not a survey."
        }
      ],
      "hint": "Hint: Think about telling someone to slow down because they are asking too fast."
    }
  },
  {
    "id": 18,
    "stage": 2,
    "sno": 18,
    "topic": "Database Sharding: Horizontal Partitioning across Independent Nodes",
    "concept": "Database Sharding by Region",
    "title": "Level 18: Splitting 100 Million Records Across Cities",
    "time": "Pan-India Data Growth — 100 Million Trips",
    "usersCount": "100 Million Historical Trip Records",
    "topicHint": "Dividing Massive Storage Across Independent City Machines",
    "situation": "Ola now has 100 million trip receipts stored in its database. Searching for a driver's trip in Delhi takes 40 seconds because the database has to scan past millions of records from Bangalore and Mumbai.",
    "problem": "How can Ola quickly manage 100 million ride records without slowing down a single computer?",
    "simulationType": "database_sharding_ledgers",
    "choices": [
      {
        "id": "A",
        "text": "Divide the records across different computers based on city, like Delhi, Mumbai, and Bangalore.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Database Sharding. By putting Delhi trips in a Delhi database and Mumbai trips in a Mumbai database, each machine only searches its own local records in 2 milliseconds.",
        "statImpact": {
          "latency": "2ms (vs 40s)",
          "capacity": "City Shards",
          "risk": "Zero Monolithic Lag",
          "cost": "Scalable"
        },
        "whatHappened": {
          "helped": "Understood database sharding and horizontal data partitioning.",
          "bottleneck": "Keeping 100 million records in one giant table makes searches crawl to a halt.",
          "reflectionQuestion": "Why is it faster to find a student's paper in a class folder rather than in a pile of all papers in the country?"
        },
        "successSummary": "Sharding deployed! City-based partitioning reduced query time from 40 seconds to 2 milliseconds."
      },
      {
        "id": "B",
        "text": "Put all 100 million records into one giant text file.",
        "isOptimal": false,
        "consequenceText": "A 100-million-line text file would take 15 minutes just to open and would crash the computer's memory instantly.",
        "statImpact": {
          "latency": "Freeze",
          "capacity": "0",
          "risk": "File Corruption",
          "cost": "Disaster"
        },
        "whatHappened": {
          "helped": "Realized that giant unindexed files are unusable at scale.",
          "bottleneck": "Unscalable flat file storage.",
          "reflectionQuestion": "How do databases divide work across multiple machines?"
        }
      },
      {
        "id": "C",
        "text": "Delete yesterday's rides every morning.",
        "isOptimal": false,
        "consequenceText": "Deleting ride records means riders lose trip receipts for tax filing and drivers lose proof of earnings.",
        "statImpact": {
          "latency": "Loss",
          "capacity": "0",
          "risk": "Legal Disaster",
          "cost": "Massive"
        },
        "whatHappened": {
          "helped": "Recognized that business records must be retained.",
          "bottleneck": "Unacceptable data destruction.",
          "reflectionQuestion": "How can systems keep all data while maintaining high search speed?"
        }
      }
    ],
    "discovery": {
      "badge": "Database Sharding",
      "tagline": "Divide giant tables into smaller independent pieces spread across multiple servers",
      "simpleMeaning": "A library with multiple floors: If all 100,000 books were dumped in one giant pile in the lobby, finding a book would take hours. Instead, Floor 1 holds History, Floor 2 holds Science, and Floor 3 holds Fiction. You go directly to the right floor in seconds.",
      "olaExample": "Ola shards ride databases by City ID. Delhi queries go to the Delhi database cluster; Bangalore queries go to the Bangalore cluster.",
      "analogy": "Phone books: Instead of one massive phonebook for all of India, every city has its own local phonebook.",
      "howItWorks": [
        "1. Shard Key: Pick an attribute to divide by (e.g. `City_ID`).",
        "2. Route Query: If a rider is in Mumbai, the app router directs the query straight to the Mumbai Shard.",
        "3. Small & Fast: Each database only handles a fraction of the total data, keeping lookups lightning-fast."
      ],
      "whyItMatters": "Sharding allows companies to grow to billions of records without hitting hardware memory ceilings.",
      "visualExplanation": "[Query: Delhi Ride] ──► [Router Checks City] ──► Direct to [Delhi Shard (2ms!)] (Ignores Mumbai & Bangalore)",
      "contrast": {
        "termA": "Sharded Database",
        "descA": "Data split across multiple servers; queries route directly to the specific slice.",
        "termB": "Giant Single Database",
        "descB": "One huge disk tries to hold all data in the world, eventually choking and slowing down."
      },
      "teacherNotes": {
        "realWorld": "Consistent hashing and virtual nodes prevent uneven data hotspotting across shards."
      }
    },
    "knowledgeCheck": {
      "question": "What is the key used to decide which database machine stores a particular ride record called?",
      "options": [
        {
          "id": "A",
          "text": "The Shard Key (such as City ID or User ID).",
          "isCorrect": true,
          "explanation": "Correct! The shard key determines how data is partitioned across independent nodes."
        },
        {
          "id": "B",
          "text": "The car's physical ignition key.",
          "isCorrect": false,
          "explanation": "Car ignition keys start engines; database shard keys partition software records."
        },
        {
          "id": "C",
          "text": "The driver's shoe size.",
          "isCorrect": false,
          "explanation": "Shoe size is irrelevant to database architecture."
        }
      ],
      "hint": "Hint: Think about the attribute used to split the data (like city or region)."
    }
  },
  {
    "id": 19,
    "stage": 2,
    "sno": 19,
    "topic": "CAP Theorem: Consistency, Availability, and Partition Tolerance",
    "concept": "CAP Theorem Trade-offs",
    "title": "Level 19: When the Telecom Cable Between Cities Breaks",
    "time": "Underground Fiber Cut — Highway Construction",
    "usersCount": "Delhi Cluster vs. Bangalore Cluster",
    "topicHint": "Choosing Between 100% Identical Data vs. Keeping the App Running",
    "situation": "A road construction crew accidentally severs the underground optical fiber line connecting Ola's Delhi and Bangalore datacenters. The two regional servers can no longer talk to each other.",
    "problem": "If the internet line between two city offices breaks, what choice must the app make?",
    "simulationType": "cap_network_partition",
    "choices": [
      {
        "id": "A",
        "text": "Either keep serving rides locally with delayed updates, or pause booking until the line is repaired.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is the CAP Theorem. When a network partition happens, you MUST choose between Availability (keep booking cabs locally in Delhi and Bangalore) OR Consistency (pause bookings so data stays 100% in sync). You cannot have both at once during a cut.",
        "statImpact": {
          "latency": "Local 10ms",
          "capacity": "AP Available",
          "risk": "Sync Delayed",
          "cost": "Resilient"
        },
        "whatHappened": {
          "helped": "Understood the fundamental CAP Theorem trade-off during network partitions.",
          "bottleneck": "Believing a distributed system can maintain both perfect real-time sync and 100% uptime when the physical wire is cut.",
          "reflectionQuestion": "Why does a ride app prefer keeping cabs moving locally rather than freezing all cars across the country?"
        },
        "successSummary": "CAP trade-off made! Availability chosen: local riders continue booking cabs while fiber is repaired."
      },
      {
        "id": "B",
        "text": "Turn off every mobile phone in the country.",
        "isOptimal": false,
        "consequenceText": "Turning off user phones is impossible and would destroy customer trust completely.",
        "statImpact": {
          "latency": "Outage",
          "capacity": "0",
          "risk": "Absurd",
          "cost": "Total"
        },
        "whatHappened": {
          "helped": "Saw why systems must adapt gracefully rather than crashing user hardware.",
          "bottleneck": "Unrealistic intervention.",
          "reflectionQuestion": "How should software behave when internet connections between cities drop?"
        }
      },
      {
        "id": "C",
        "text": "Make all cab rides free until the line is fixed.",
        "isOptimal": false,
        "consequenceText": "Giving away millions in free rides bankrupts the company; CAP is about data synchronization, not pricing promotions.",
        "statImpact": {
          "latency": "Free Fall",
          "capacity": "Bankrupt",
          "risk": "Financial Ruin",
          "cost": "Total Loss"
        },
        "whatHappened": {
          "helped": "Confused distributed consensus with promotional giveaways.",
          "bottleneck": "Ignoring the technical trade-off.",
          "reflectionQuestion": "What is the real dilemma when two computers lose communication?"
        }
      }
    ],
    "discovery": {
      "badge": "CAP Theorem",
      "tagline": "Consistency (Everyone sees identical data) vs. Availability (Everyone gets an answer)",
      "simpleMeaning": "Two bank branches during a phone blackout: A traveler wants to withdraw money in Delhi, but the phone line to their home branch in Bangalore is cut. Does the Delhi teller (1) Give them money to be helpful (Availability), risking they might spend more than they have, or (2) Refuse the withdrawal until the line is fixed to protect exact numbers (Consistency)? You can't do both.",
      "olaExample": "Ola picks Availability (AP): Riders in Delhi can still book local Delhi cabs even if the line to Bangalore is down. The systems sync up once the fiber is reconnected.",
      "analogy": "Writing letters during a snowstorm: You keep doing your daily work locally even if the mail carrier cannot reach the next village today.",
      "howItWorks": [
        "1. Partition Happens (P): Underground fiber cut disconnects two server regions.",
        "2. Choice A (CP): Block bookings until servers can talk. 100% consistent, but app stops for riders.",
        "3. Choice B (AP): Keep booking cabs locally. App stays running, and data syncs up later once the wire is fixed."
      ],
      "whyItMatters": "Understanding CAP ensures architects design resilient systems that stay operational even when network cables break.",
      "visualExplanation": "[FIBER CABLE CUT ⚡] ──► Pick: [AP: Keep Cabs Moving Locally ✓] OR [CP: Freeze App Nationwide Until Fixed]",
      "contrast": {
        "termA": "Availability (AP)",
        "descA": "Keep the app working for users, accepting that sync will happen a bit later.",
        "termB": "Consistency (CP)",
        "descB": "Block requests until every computer in the world confirms the exact same number."
      },
      "teacherNotes": {
        "realWorld": "Eric Brewer's CAP Theorem proves that no distributed system can achieve both C and A in the presence of P."
      }
    },
    "knowledgeCheck": {
      "question": "Why does a ride-hailing app like Ola generally prioritize Availability (AP) during a network partition?",
      "options": [
        {
          "id": "A",
          "text": "Because stranding passengers in the rain is worse than letting local servers sync their ride records an hour later.",
          "isCorrect": true,
          "explanation": "Correct! Keeping cabs moving locally provides the best real-world user safety and service continuity."
        },
        {
          "id": "B",
          "text": "Because passengers love when the app shows a white error screen.",
          "isCorrect": false,
          "explanation": "White error screens lead to angry passengers and lost revenue."
        },
        {
          "id": "C",
          "text": "Because fiber optic cables cannot be repaired by humans.",
          "isCorrect": false,
          "explanation": "Cables are repaired all the time by telecom technicians."
        }
      ],
      "hint": "Hint: Think about whether passengers need to get home safely during bad weather."
    }
  },
  {
    "id": 20,
    "stage": 2,
    "sno": 20,
    "topic": "BASE: Basically Available, Soft State, Eventual Consistency",
    "concept": "Eventual Consistency in Real-Time Maps",
    "title": "Level 20: Why Car Icons Can Be Half a Second Behind",
    "time": "Live Map Tracking — Indiranagar 100 Feet Road",
    "usersCount": "50,000 Live Animated Maps",
    "topicHint": "Keeping the Screen Fast and Smooth Even if Data Catches Up Shortly After",
    "situation": "A rider watches little yellow cab icons glide across their map screen. A junior engineer worries: 'Wait! The cab icon on the map is 300 milliseconds behind the physical car's exact tire position on the asphalt!'",
    "problem": "When looking at cabs on your map, why is it okay if a car's icon is half a second behind where the car is on the road?",
    "simulationType": "base_eventual_consistency",
    "choices": [
      {
        "id": "A",
        "text": "The app stays fast and smooth, and the position catches up in a tiny fraction of a second anyway.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Eventual Consistency (the 'E' in BASE). For moving cars, having the icon catch up in 300 milliseconds is completely fine for human eyes. Demanding 100% microsecond perfection would freeze the phone screen.",
        "statImpact": {
          "latency": "300ms Smooth",
          "capacity": "50k Live Maps",
          "risk": "Zero Freeze",
          "cost": "Lightweight"
        },
        "whatHappened": {
          "helped": "Understood why eventual consistency is perfect for streaming location updates.",
          "bottleneck": "Demanding instant global synchronization for moving cars freezes phones with network lag.",
          "reflectionQuestion": "Does a passenger waiting for a pickup notice if the car icon is 0.3 seconds behind reality?"
        },
        "successSummary": "Eventual consistency verified! Screen stays smooth; car position syncs up fractions of a second later."
      },
      {
        "id": "B",
        "text": "Drivers prefer hiding from passengers on the map.",
        "isOptimal": false,
        "consequenceText": "Drivers want passengers to find them quickly; small latency is a natural network reality, not driver hiding.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Confusion",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Guessed personal motives instead of network physics.",
          "bottleneck": "Missing streaming mechanics.",
          "reflectionQuestion": "Why does cellular data transmission take a fraction of a second to travel through the air?"
        }
      },
      {
        "id": "C",
        "text": "City roads change their names every few seconds.",
        "isOptimal": false,
        "consequenceText": "Street names do not change every second; network transmission delay is the only reason for the tiny time difference.",
        "statImpact": {
          "latency": "Irrelevant",
          "capacity": "0",
          "risk": "Absurd",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Invented false geographic claims.",
          "bottleneck": "Overlooking signal transmission delays.",
          "reflectionQuestion": "How does eventual consistency keep animations silky smooth?"
        }
      }
    ],
    "discovery": {
      "badge": "BASE & Eventual Consistency",
      "tagline": "Fast, smooth, and usable right now — data will catch up in a split second",
      "simpleMeaning": "Watching live sports on TV: When your favorite team scores a goal, the TV broadcast shows it about 2 seconds after the player actually kicked the ball in the stadium. You still enjoy the game completely. Demanding 0.0000-second perfection would cause the video to buffer and stutter.",
      "olaExample": "Ola updates driver map markers using eventual consistency. The car icon glides smoothly, syncing to the exact GPS spot in fractions of a second.",
      "analogy": "Social media likes: When a celebrity posts a photo, seeing 10,000 likes vs 10,005 likes doesn't matter; the count catches up eventually.",
      "howItWorks": [
        "1. Basically Available: The app responds immediately without making the user stare at a spinning circle.",
        "2. Soft State: Data is in motion and updating continuously.",
        "3. Eventual Consistency: Within a few hundred milliseconds, all screens catch up to the latest position."
      ],
      "whyItMatters": "Eventual consistency makes apps feel instantaneous, responsive, and fluid under massive user volume.",
      "visualExplanation": "[Cab Moves on Road] ──(300ms Transit)──► [Icon Glides Smoothly on Phone Map ✓] ──► (Eventual Sync!)",
      "contrast": {
        "termA": "Eventual Consistency (BASE)",
        "descA": "Smooth, instant response; exact numbers settle a fraction of a second later.",
        "termB": "Immediate Strict Consistency (ACID)",
        "descB": "Locks everything until 100% verified; required for money, but too slow for moving car animations."
      },
      "teacherNotes": {
        "realWorld": "NoSQL stores like Cassandra and DynamoDB leverage eventual consistency to deliver extreme write throughput."
      }
    },
    "knowledgeCheck": {
      "question": "For which of the following features is Eventual Consistency totally acceptable in the Ola app?",
      "options": [
        {
          "id": "A",
          "text": "Showing the live moving car icon gliding on the passenger's map screen.",
          "isCorrect": true,
          "explanation": "Correct! A split-second delay in visual icon tracking is completely harmless."
        },
        {
          "id": "B",
          "text": "Deducting money from a passenger's bank account.",
          "isCorrect": false,
          "explanation": "Bank balance changes must have strict, immediate consistency (ACID), never guessing."
        },
        {
          "id": "C",
          "text": "Verifying if a passenger's one-time password (OTP) is correct.",
          "isCorrect": false,
          "explanation": "OTP verification requires immediate strict accuracy to prevent unauthorized logins."
        }
      ],
      "hint": "Hint: Think about visual updates where being 0.3 seconds behind causes no harm."
    }
  },
  {
    "id": 21,
    "stage": 2,
    "sno": 21,
    "topic": "Fault Tolerance & Resilience: Redundancy, Recovery, Graceful Degradation",
    "concept": "Fault Tolerance & Circuit Breakers",
    "title": "Level 21: Surviving Sub-System Outages Mid-Trip",
    "time": "Peak Traffic — 3rd Party Partner Outage",
    "usersCount": "80,000 Live Rides in Progress",
    "topicHint": "Quarantining Broken Secondary Services so Core Cab Bookings Keep Rolling",
    "situation": "A third-party external company that sends promotional marketing SMS texts suffers a server fire and stops responding completely.",
    "problem": "If the computer that sends promotional text messages stops working, what should happen to cab bookings?",
    "simulationType": "fault_tolerance_resilience",
    "choices": [
      {
        "id": "A",
        "text": "Cab bookings should keep working normally, ignoring the broken text message system.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Graceful Degradation. When non-essential features fail, the system flips a digital circuit breaker to quarantine the problem. Passengers can still book and ride cabs with zero interruption.",
        "statImpact": {
          "latency": "12ms",
          "capacity": "Core Cab Booking 100%",
          "risk": "Zero Cascade",
          "cost": "Resilient"
        },
        "whatHappened": {
          "helped": "Understood failure isolation and graceful degradation.",
          "bottleneck": "Letting a secondary failing feature freeze the core ride dispatch engine.",
          "reflectionQuestion": "Why should a car's radio breaking not cause the steering wheel and brakes to lock up?"
        },
        "successSummary": "Fault isolated! Circuit breaker opened; broken marketing server quarantined while rides roll smoothly."
      },
      {
        "id": "B",
        "text": "The whole app should shut down so no one can book a cab.",
        "isOptimal": false,
        "consequenceText": "Shutting down the entire ride service because promotional coupons can't send is terrible engineering and costs millions.",
        "statImpact": {
          "latency": "Down",
          "capacity": "0",
          "risk": "Total Collapse",
          "cost": "High Loss"
        },
        "whatHappened": {
          "helped": "Saw why secondary bugs should never kill the main application.",
          "bottleneck": "Tight coupling and cascading failure.",
          "reflectionQuestion": "How do circuit breakers protect core services from external outages?"
        }
      },
      {
        "id": "C",
        "text": "All cabs should stop moving in the middle of the road.",
        "isOptimal": false,
        "consequenceText": "Stopping physical cars on highways would cause massive road accidents; software bugs must never endanger real-world safety.",
        "statImpact": {
          "latency": "Emergency",
          "capacity": "0",
          "risk": "Life Threat",
          "cost": "Extreme"
        },
        "whatHappened": {
          "helped": "Recognized physical safety boundaries in system design.",
          "bottleneck": "Unsafe system behavior.",
          "reflectionQuestion": "How does graceful degradation guarantee safety?"
        }
      }
    ],
    "discovery": {
      "badge": "Fault Tolerance & Resilience",
      "tagline": "When one secondary part breaks, isolate it so the main engine keeps running",
      "simpleMeaning": "Car electrical fuses: If the radio in your car blows a fuse, your headlights, steering wheel, and engine keep working 100% normally. You don't crash on the highway because of a broken radio. Circuit breakers isolate the fault.",
      "olaExample": "If the third-party SMS coupon provider goes down, Ola's circuit breaker trips open. Cab bookings and GPS matching continue with zero lag.",
      "analogy": "A submarine with watertight bulkheads: If one compartment springs a leak, steel doors seal it off so the rest of the ship stays afloat.",
      "howItWorks": [
        "1. Failure Detection: The system notices the SMS server timing out repeatedly.",
        "2. Circuit Breaker Trips: Stop calling the broken SMS service immediately.",
        "3. Graceful Fallback: Continue booking cabs normally; re-test the SMS service quietly in the background."
      ],
      "whyItMatters": "Fault tolerance prevents minor partner glitches from causing catastrophic company-wide blackouts.",
      "visualExplanation": "[SMS Service Dies! 🔥] ──► [CIRCUIT BREAKER OPENS ⚡] ──► [Core Cab Dispatch Stays 100% Active ✓]",
      "contrast": {
        "termA": "Fault Tolerant (Resilient)",
        "descA": "Isolates failures; secondary glitches never stop primary customer features.",
        "termB": "Brittle System",
        "descB": "One tiny broken button causes the entire mobile app to freeze and crash."
      },
      "teacherNotes": {
        "realWorld": "Netflix Hystrix and Resilience4j popularized the Circuit Breaker pattern in microservice ecosystems."
      }
    },
    "knowledgeCheck": {
      "question": "What is the primary purpose of a software Circuit Breaker in the Ola backend?",
      "options": [
        {
          "id": "A",
          "text": "To isolate a failing sub-service so it doesn't drag down and crash the core cab booking system.",
          "isCorrect": true,
          "explanation": "Correct! It stops calls to failing components to prevent cascading application crashes."
        },
        {
          "id": "B",
          "text": "To turn off the headlights of all yellow cabs at midnight.",
          "isCorrect": false,
          "explanation": "Automotive lighting is controlled by car drivers, not backend software circuit breakers."
        },
        {
          "id": "C",
          "text": "To give free promo codes to passengers.",
          "isCorrect": false,
          "explanation": "Circuit breakers handle failure resilience, not marketing discounts."
        }
      ],
      "hint": "Hint: Think about electrical fuses protecting your house from a short circuit."
    }
  },
  {
    "id": 22,
    "stage": 2,
    "sno": 22,
    "topic": "Stream Processing & WebSockets: Real-Time Pipelines, Persistent Two-Way Communication",
    "concept": "Real-Time Streaming & WebSockets",
    "title": "Level 22: Watching Your Cab Glide Smoothly on the Map",
    "time": "Active Trip Telemetry — Driver Approaching",
    "usersCount": "100,000 Live Moving Cabs",
    "topicHint": "Keeping an Open Two-Way Line for Live Continuous Movement",
    "situation": "A passenger stands outside an office waiting for their booked cab. On the phone screen, the little yellow cab glides smoothly down the road toward the pickup point in real time.",
    "problem": "How does your phone show a moving cab gliding smoothly across the map without you having to tap refresh every second?",
    "simulationType": "stream_websockets",
    "choices": [
      {
        "id": "A",
        "text": "The driver's phone keeps an open line with the computer to send new positions continuously.",
        "isOptimal": true,
        "consequenceText": "Spot on! This is persistent two-way communication (WebSockets). Instead of hanging up and redialing every second, the phone keeps an open connection, streaming coordinates smoothly like a live walkie-talkie.",
        "statImpact": {
          "latency": "5ms Stream",
          "capacity": "100k Live Streams",
          "risk": "Zero Refresh Needed",
          "cost": "Lightweight"
        },
        "whatHappened": {
          "helped": "Understood persistent two-way streaming vs repeated polling.",
          "bottleneck": "Re-establishing full connections every second causes massive battery drain and server overhead.",
          "reflectionQuestion": "Why is keeping a walkie-talkie channel open better than dialing a new phone call for every single sentence?"
        },
        "successSummary": "Streaming connection verified! Cab coordinates flow continuously with zero manual refreshes."
      },
      {
        "id": "B",
        "text": "The phone guesses where the car is by looking at the weather forecast.",
        "isOptimal": false,
        "consequenceText": "Weather reports tell you about rain and clouds; they have zero information about where a specific cab is driving.",
        "statImpact": {
          "latency": "Blind Guess",
          "capacity": "0",
          "risk": "Wrong Location",
          "cost": "None"
        },
        "whatHappened": {
          "helped": "Saw why vehicle tracking requires live telemetry, not environmental guesses.",
          "bottleneck": "Using irrelevant data sources.",
          "reflectionQuestion": "How does GPS hardware determine actual vehicle position?"
        }
      },
      {
        "id": "C",
        "text": "The driver calls the passenger every 5 seconds to say where they are.",
        "isOptimal": false,
        "consequenceText": "Calling every 5 seconds while driving is illegal, dangerous, and physically impossible for drivers to do.",
        "statImpact": {
          "latency": "Hazardous",
          "capacity": "0",
          "risk": "Accident Risk",
          "cost": "Illegal"
        },
        "whatHappened": {
          "helped": "Recognized the need for automated background digital telemetry.",
          "bottleneck": "Manual human distraction.",
          "reflectionQuestion": "How do background digital streams automate telemetry invisibly?"
        }
      }
    ],
    "discovery": {
      "badge": "Real-Time Streaming & WebSockets",
      "tagline": "Keep a live, open channel so data flows continuously in real time",
      "simpleMeaning": "A phone call vs. sending letters: If you send a postal letter every time you take a step, updates take days. If you keep an open phone call running on speaker, the other person hears your steps in real time. WebSockets is that open speakerphone line.",
      "olaExample": "The Ola driver app keeps a WebSocket connection open to Ola servers, streaming latitude and longitude coordinates every 2 seconds.",
      "analogy": "A garden water hose: Once the valve is open, water flows continuously without you having to turn the tap on and off every second.",
      "howItWorks": [
        "1. Handshake: Phone and server establish an open persistent socket connection.",
        "2. Live Stream: Driver app pushes small GPS coordinate packets continuously.",
        "3. Instant Broadcast: Server pushes the coordinate straight to the passenger's screen in 5 milliseconds."
      ],
      "whyItMatters": "Persistent streams eliminate network connection overhead and deliver smooth, real-time live map animations.",
      "visualExplanation": "[Driver Phone] ──(Live Open Socket Stream: Lat/Long)──► [Ola Gateway] ──► [Passenger Map Glides ✓]",
      "contrast": {
        "termA": "Persistent Stream (WebSockets)",
        "descA": "Single open connection; coordinates push instantly with microsecond latency.",
        "termB": "Repeated Polling (HTTP)",
        "descB": "Tears down and rebuilds a new connection every second, wasting data and battery."
      },
      "teacherNotes": {
        "realWorld": "Real-time transport systems combine WebSockets with pub/sub event brokers like Apache Kafka."
      }
    },
    "knowledgeCheck": {
      "question": "Why are WebSockets preferred over standard web requests for live cab tracking on a map?",
      "options": [
        {
          "id": "A",
          "text": "They maintain a continuous open line so location updates flow instantly without reconnecting each time.",
          "isCorrect": true,
          "explanation": "Correct! WebSockets avoid the heavy overhead of creating new connections every second."
        },
        {
          "id": "B",
          "text": "They make the cab driver play music through the phone speaker.",
          "isCorrect": false,
          "explanation": "WebSockets are a networking transport protocol, not an audio music player."
        },
        {
          "id": "C",
          "text": "They clean the passenger's phone screen automatically.",
          "isCorrect": false,
          "explanation": "WebSockets manage digital data packets, not physical screen cleaning."
        }
      ],
      "hint": "Hint: Think about keeping an open line versus dialing a new phone number every second."
    }
  },
  {
    "id": 23,
    "stage": 2,
    "sno": 23,
    "topic": "Geospatial Search: Coordinates, Proximity Queries, Spatial Indexing",
    "concept": "Geospatial Search & Proximity Queries",
    "title": "Level 23: Finding the 3 Nearest Cabs in 2 Seconds",
    "time": "Pickup Request — Indiranagar 100 Feet Road",
    "usersCount": "50,000 Cabs in City",
    "topicHint": "Searching Inside Local Neighborhood Map Boxes Instead of Scanning the Whole Country",
    "situation": "A passenger taps 'Book Cab' at Indiranagar. There are 50,000 cabs in the city and 500,000 across India. The app needs to find the 3 closest available drivers in under 2 seconds.",
    "problem": "When you open the Ola app, how does it find the 3 closest cabs near you in just a couple of seconds?",
    "simulationType": "geospatial_spatial_indexing",
    "choices": [
      {
        "id": "A",
        "text": "It only checks cabs inside your neighborhood box instead of scanning every car in the whole country.",
        "isOptimal": true,
        "consequenceText": "Exactly right! This is Spatial Indexing. The map is divided into little grid boxes (like city postal pin codes). The computer only searches the box you are standing in and the 8 surrounding boxes, matching 3 nearby cabs in 4 milliseconds!",
        "statImpact": {
          "latency": "4ms (vs 45s)",
          "capacity": "Spatial Quad-Tree",
          "risk": "Zero Delay",
          "cost": "Instant Match"
        },
        "whatHappened": {
          "helped": "Understood geospatial indexing and bounding-box proximity searches.",
          "bottleneck": "Calculating geometric distance to all 500,000 cars in the country one by one takes 45 seconds and drains computer power.",
          "reflectionQuestion": "Why is it faster to search for a book in one specific bookshelf rather than inspecting every book in the entire city library?"
        },
        "successSummary": "Nearest cabs matched! Spatial indexing found 3 drivers within 800m in just 4 milliseconds."
      },
      {
        "id": "B",
        "text": "It calculates the distance to all 500,000 cars in India one by one.",
        "isOptimal": false,
        "consequenceText": "Calculating mathematical distance to 500,000 cars one-by-one for every single search takes over 45 seconds and melts database processors.",
        "statImpact": {
          "latency": "45s Crawl",
          "capacity": "Overloaded",
          "risk": "CPU Collapse",
          "cost": "Massive"
        },
        "whatHappened": {
          "helped": "Saw why brute-force distance calculation fails at scale.",
          "bottleneck": "Full-table scanning across global coordinates.",
          "reflectionQuestion": "Why does a passenger in Bangalore never care about a cab driving in Delhi?"
        }
      },
      {
        "id": "C",
        "text": "It assigns a random cab from anywhere in the country.",
        "isOptimal": false,
        "consequenceText": "Assigning a random cab could match a passenger in Bangalore with a driver 2,000km away in Delhi, taking 3 days to arrive!",
        "statImpact": {
          "latency": "3 Days Arrival",
          "capacity": "0",
          "risk": "Useless Match",
          "cost": "Disaster"
        },
        "whatHappened": {
          "helped": "Recognized that proximity matching must be geographically accurate.",
          "bottleneck": "Ignoring spatial coordinates.",
          "reflectionQuestion": "Why is proximity the core requirement for taxi dispatch?"
        }
      }
    ],
    "discovery": {
      "badge": "Geospatial Indexing",
      "tagline": "Carve the map into spatial grid cells to match nearby drivers in milliseconds",
      "simpleMeaning": "Postal Pin Codes: If someone asks where you live, they don't search through 1.4 billion people one by one. They look at your postal pin code (e.g. 560038), which instantly narrows the search to a small neighborhood. Geospatial indexing is a digital pin code system for maps.",
      "olaExample": "Ola divides the earth into hexagonal cells using spatial algorithms (like Uber H3 or Geohash). A pickup in Indiranagar only checks drivers inside Cell #88618925 and adjacent cells.",
      "analogy": "Chessboard squares: If your piece is on square E4, you only check adjacent squares (E5, D4, F4), not all 64 squares on the board.",
      "howItWorks": [
        "1. Spatial Grid: The world map is partitioned into indexed cells (e.g., 500-meter hexagons).",
        "2. Driver Hashing: Every car coordinate maps to a specific cell ID in memory.",
        "3. Proximity Query: Find drivers whose cell ID matches the passenger's cell or the 6 adjacent cells in 4 milliseconds."
      ],
      "whyItMatters": "Geospatial indexing allows apps to match millions of riders with nearby drivers in milliseconds without brute-force math.",
      "visualExplanation": "[Rider at Indiranagar] ──► [Search Cell #560038 (2km radius)] ──► [3 Cabs Matched in 4ms ✓] (Ignores 499,997 cars far away!)",
      "contrast": {
        "termA": "Geospatial Index (H3/Geohash)",
        "descA": "Divides map into grid cells; searches only the local neighborhood in 4ms.",
        "termB": "Brute-Force Calculation",
        "descB": "Calculates math distance to all 500,000 cars in the nation, taking 45 seconds."
      },
      "teacherNotes": {
        "realWorld": "Mobility companies use Uber H3 hexagonal hierarchical spatial indexes and Redis GEO commands."
      }
    },
    "knowledgeCheck": {
      "question": "How does spatial indexing help the Ola app find nearby drivers so quickly?",
      "options": [
        {
          "id": "A",
          "text": "It cuts the map into small grid cells and only checks cars in your immediate local cell.",
          "isCorrect": true,
          "explanation": "Correct! It filters out 99.9% of distant cars instantly, searching only the local grid."
        },
        {
          "id": "B",
          "text": "It paints all nearby cabs bright green so they show up brighter on the phone screen.",
          "isCorrect": false,
          "explanation": "Spatial indexing is mathematical spatial partitioning, not car painting."
        },
        {
          "id": "C",
          "text": "It makes the driver honk their car horn three times.",
          "isCorrect": false,
          "explanation": "Honking horns is physical sound, not software database indexing."
        }
      ],
      "hint": "Hint: Think about searching within your neighborhood postal code box."
    }
  }
];

// Browser and Node.js environment exports
if (typeof window !== 'undefined') {
  window.GAME_STAGES = STAGES;
  window.GAME_LEVELS = LEVELS;
  window.STAGES = STAGES;
  window.LEVELS = LEVELS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STAGES, LEVELS };
}
