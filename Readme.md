# Redis Learning Project

## What is Redis?

Redis is like a super-fast notebook that keeps everything in memory. Think of it as:
- **Cache** - Stores things you use often (like your favorite contacts on speed dial)
- **Database** - Keeps data organized and easy to find
- **Message box** - Helps different parts of your app talk to each other

## Why Use Redis?

- **Super fast** - Everything is stored in memory (RAM), not on slow hard drives[2][6]
- **Easy to use** - Simple commands like GET and SET[6]
- **Flexible** - Can store different types of data (text, lists, numbers)[5]
- **Reliable** - Used by millions of websites and apps[13]

## Project Files

redis/

├── client.js # Connects to Redis

├── cache.js # Stores and gets cached data

├── session.js # Manages user sessions

├── counter.js # Counts things (like website visits)

├── package.json # Project settings


## Getting Started

### 1. Install Requirements
- Install Node.js from nodejs.org
- Install Redis

### 2. Setup Project
Install project dependencies
npm install redis



### 3. Start Redis

**Easy way (with Docker):**
docker run -d -p 6379:6379 --name redis redis:latest



**Or install locally:**
- **Mac:** `brew install redis` then `redis-server`
- **Windows:** Download from redis.io
- **Linux:** `sudo apt-get install redis-server`

### 4. Run the Code

**Store data:**
node cache.js



**Count visitors:**
node counter.js



**Manage user sessions:**
node session.js



## How It Works

1. Your app **sets** data in Redis with a key name
2. Redis stores it super fast in memory
3. Your app **gets** the data back using the same key name

Your App → SET user:123 "John" → Redis
Your App ← GET user:123 "John" ← Redis
💾 📝 ⚡

