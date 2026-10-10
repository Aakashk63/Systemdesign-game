# 🛒 RideQuest – System Design Learning Game

> **"You don't need to know System Design. Just solve the problems."**

**RideQuest** is an interactive, story-driven educational 3D game designed for **first-year students and beginners** to learn System Design through intuitive supermarket scenarios, procedural 3D isometric dioramas, animated simulations, real-world analogies, and embedded YouTube video masterclasses.

---

## 🚀 Live Deployment on Vercel

This repository is pre-configured for instant zero-configuration deployment on **Vercel**:

1. Push this repository to GitHub: `https://github.com/Aakashk63/Systemdesign-game.git`
2. Go to [Vercel](https://vercel.com/) and click **Add New... ➔ Project**.
3. Import the `Systemdesign-game` repository.
4. Keep the default settings (`vercel.json` automatically triggers `npm run build` and serves static assets).
5. Click **Deploy**. Your game will be live worldwide on Vercel's Edge Network!

---

## 🎮 Game Architecture & Curriculum (28 Complete Levels)

### Stage 1: System Foundations
* **Level 1:** The Blueprint & Scope Framing — *Requirements Engineering (FR vs. NFR)*
* **Level 2:** The Clerk at the Counter — *Client-Server Architecture*

### Stage 2: Networking & Connectivity
* **Level 3:** Finding the Store & The Numbered Doors — *DNS, IP Addresses, and Port Numbers*
* **Level 4:** The Delivery Fleet — *Protocols: TCP, UDP, and HTTP*
* **Level 5:** The Barcode Scanners — *APIs and Data Formats (JSON, XML, Protobuf)*

### Stage 3: Security & Access Control
* **Level 6:** The Security Guard at the Door — *Authentication (AuthN)*
* **Level 7:** The Locked Storage Vault — *Authorization (AuthZ & RBAC)*

### Stage 4: Workload & Requirements Scoping
* **Level 8:** Planning for the Holiday Rush — *NFR Capacity Planning & Bottleneck Analysis*

### Stage 5: Data Storage & Persistence
* **Level 9:** Choosing the Store Ledgers — *Databases: Relational (SQL) vs. Non-Relational (NoSQL)*
* **Level 10:** The Cash Registers vs. The CEO's Report — *OLTP vs. OLAP*
* **Level 11:** The Midnight Power Cut — *ACID Transactions & Write-Ahead Logging (WAL)*
* **Level 12:** The Backup Store Ledgers — *Database Replication (Primary-Replica)*

### Stage 6: Content & Delivery
* **Level 13:** The Cashier's Sticky-Note Pad — *In-Memory Caching (Redis/Memcached)*
* **Level 14:** The Regional Delivery Kiosks — *Content Delivery Networks (CDNs) & Edge Delivery*

### Stage 7: Scalability & Traffic
* **Level 15:** The Holiday Rush (More Cashiers) — *Horizontal vs. Vertical Scaling*
* **Level 16:** The Customer Line Director — *Load Balancing Algorithms*
* **Level 17:** The Busy Entry Turnstile — *Rate Limiting (Token Bucket & Leaky Bucket)*

### Stage 8: Distributed Data & Sharding
* **Level 18:** Splitting the Master Ledger — *Database Sharding & Consistent Hashing*

### Stage 9: Distributed Systems Architecture
* **Level 19:** The Severed Telephone Wire — *CAP Theorem (Consistency vs. Availability)*
* **Level 20:** The Relaxed Ledger — *BASE Model & Eventual Consistency*
* **Level 21:** The Power Outage Drill — *Fault Tolerance & Graceful Degradation*
* **Level 22:** The Panicked Double-Click — *Idempotency & Deduplication*
* **Level 23:** The Cross-Department Promise — *Distributed Transactions & The Saga Pattern*

### Stage 10: Asynchronous Messaging & Streaming
* **Level 24:** The Order Inbox Tray — *Message Queues & Asynchronous Processing*
* **Level 25:** The Department Loudspeaker — *Publish-Subscribe (Pub-Sub) Event Fanout*
* **Level 26:** Picking the Right Conveyor Belt — *RabbitMQ (Smart Broker) vs. Apache Kafka (Distributed Log)*

### Stage 11: Real-Time Telemetry & Search
* **Level 27:** The Live Delivery Tracker — *Persistent WebSockets & Stream Processing*
* **Level 28:** Finding Nearby Stores — *Geospatial Search & Spatial Indexing (Geohash / Quadtrees)*

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Build single-file production bundle
npm run build

# Start local test server
npm start
```

Open `http://localhost:3000` in your web browser.

---

## 📜 License
MIT License. Built for computer science students and educators.
