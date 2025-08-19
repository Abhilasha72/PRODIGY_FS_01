# PRODIGY_FS_01

# Secure User Authentication System – Full Stack Demo

As part of my internship at **Prodigy Infotech**, I developed a complete **role-based user authentication system** with session management and protected routes — a key foundation for building secure web applications.  

---

## Tech Stack
- Backend:Node.js, Express.js, MongoDB, Mongoose  
- Frontend: HTML, CSS, JavaScript (Fetch API, localStorage)  
- Tools:VS Code, npm  

---

## Features
-  User Registration & Login — email, password, and role (user/admin)  
-  In-Memory Session Management — using session IDs stored in localStorage  
-  Role-Based Access Control — implemented with Express middleware  
-  Protected Dashboard — dynamic content rendering based on auth status and role  
-  Logout Functionality — clears sessions and redirects securely  
-  Responsive UI — clean design with user-friendly error handling  

---

## Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/secure-auth-system.git
cd secure-auth-system

### 2. Install dependencies
npm install

### 3. Set up environment variables
## Create a .env file in the root directory:

PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key


### 4. Start the server

npm start

