# Study Role Bot

A Discord bot designed to automatically assign and remove a "Study Role" based on users' activity in specific study room voice channels. This bot ensures users in designated study rooms have the correct role assigned, streamlining role management for your server.

---

## Features

- **Automatic Role Assignment**: Assigns the "Study Role" to users when they join a study room.
- **Automatic Role Removal**: Removes the "Study Role" when users leave a study room.
- **Category-Based Logic**: Works with voice channels under predefined category IDs (`1234` and `5678`).
- **Efficient Design**: Optimized for performance and reliability.
- **Scalable**: Built with a modular structure for future enhancements.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (latest version prefered)
- [Git](https://git-scm.com/)

---

**⚠️ Note** Make sure to create a bot with Administrator access and is also added to your server.

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/study-role-bot.git
cd study-role-bot
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Add BOT Token

Create a .env file in the root directory by copying the provided example:

```bash
cp .env.example .env
```

Open the .env file and add your bot token:

```bash
BOT_TOKEN=your-bot-token-here
```

### Step 4: Start the Bot

```bash
nodemon src/index.js
```
