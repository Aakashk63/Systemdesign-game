# 🚕 RideQuest – Ola App System Design Learning Game

> **"Learn System Design through real-world Ola cab booking scenarios."**

**RideQuest** is an interactive, scenario-based educational 3D game designed for **first-year students and beginners** to learn System Design through real-world **Ola App (Ride-Hailing & Mobility Cloud)** engineering challenges: rush hour concurrency, Bangalore monsoon surges, GPS driver tracking, SQL vs. NoSQL storage, database sharding, load balancing, caching, rate limiting, and geospatial indexing.

Featuring procedural 3D isometric city dioramas with yellow Ola cabs, animated simulations, simple plain English, and 3-choice MCQs.

---

## 🚀 Live Deployment on Vercel

This repository is pre-configured for instant zero-configuration deployment on **Vercel**:

1. Push this repository to GitHub: `https://github.com/Aakashk63/Systemdesign-game.git`
2. Go to [Vercel](https://vercel.com/) and click **Add New... ➔ Project**.
3. Import the `Systemdesign-game` repository.
4. Keep the default settings (`vercel.json` automatically triggers `npm run build` and serves static assets).
5. Click **Deploy**. Your game will be live worldwide on Vercel's Edge Network!

---

## 🎮 Strict 28-Topic Curriculum (7 Modules)

### Module 1: System Design Fundamentals
* **Topic 1:** Introduction to System Design — *50,000 People Book Cabs at 6:00 PM*
* **Topic 2:** Functional and Non-Functional Requirements — *What the App Does vs. How Fast It Runs*
* **Topic 3:** Client–Server Architecture — *How Your Phone Talks to the Ola Cloud Server*
* **Topic 4:** Frontend, Backend, and Database — *The Screen, the Brain, and the Memory*
* **Topic 5:** Basic System Architecture — *Connecting the Full Ola Dispatch System*

### Module 2: Networking and Communication
* **Topic 6:** Networking Fundamentals: IP Addresses, DNS, and Ports — *Finding the Ola Cloud Server in Bangalore*
* **Topic 7:** HTTP vs. HTTPS — *Protecting Credit Cards & Ola Money with Encryption*
* **Topic 8:** APIs and JSON — *The Universal Language Between Phone and Server*
* **Topic 9:** API Design: REST and RESTful Architecture — *Standard Rules for Booking, Tracking, and Cancelling*

### Module 3: Database Fundamentals
* **Topic 10:** Database Fundamentals: SQL vs. NoSQL — *Rider Wallet Balances vs. Live Driver GPS Telemetry*
* **Topic 11:** Relational Database Design — *Linking Drivers, Cabs, Riders, and Trips*
* **Topic 12:** ACID Properties — *Paying ₹350 for a Ride with Ola Money (Zero Lost Money)*
* **Topic 13:** Database Indexing — *Finding a Driver by Mobile Number in 2 Milliseconds*
* **Topic 14:** Database Replication — *What if the Main Database Server Loses Power?*
* **Topic 15:** Database Partitioning — *Splitting 50 Million Trip Receipts by Month & Year*
* **Topic 16:** Database Sharding — *Distributing Driver Data Across City Database Servers*
* **Topic 17:** CAP Theorem — *When the Telecom Cable Between Delhi and Bangalore Breaks*
* **Topic 18:** OLTP vs. OLAP — *Live Ride Dispatch vs. Studying 10 Million Past Trips*

### Module 4: Application Architecture
* **Topic 19:** Monolithic vs. Microservices Architecture — *All Features in One Program vs. Separate Services*
* **Topic 20:** Authentication and Authorization — *Proving Who You Are vs. What You Are Allowed to Do*

### Module 5: Scalability and Performance
* **Topic 21:** Scalability: Vertical vs. Horizontal Scaling — *Monsoon Rain Rush: Adding 20 Servers vs. 1 Expensive Chip*
* **Topic 22:** Load Balancing — *Distributing 100,000 Riders Evenly Across 10 Servers*
* **Topic 23:** Caching — *Fast Driver Profile Loading in 2ms vs 120ms Disk Reads*
* **Topic 24:** Content Delivery Network (CDN) — *Downloading Car Icons & Map Tiles Instantly Across India*

### Module 6: Asynchronous Processing and Reliability
* **Topic 25:** Message Queues and Background Processing — *Generating Trip Invoices Without Freezing the App*
* **Topic 26:** Fault Tolerance and Failure Handling — *What Happens When a Sub-System Dies Mid-Trip?*
* **Topic 27:** Rate Limiting — *Stopping Bot Scripts from Spamming 10,000 Fake Bookings*

### Module 7: Advanced System Design
* **Topic 28:** Geospatial Search and Indexing — *Matching the Nearest Available Cab Within 2 Kilometers*

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Rebuild single-file production bundle and index.html
npm run build

# Start local test server
npm start
```

Open `http://localhost:3000` in your web browser.

---

## 📜 License
MIT License. Built for computer science students and system design learners.
