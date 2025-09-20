

# 🌐 curaNet

**Hospital Management Information System (HMIS)**
📌 By **Rudra Pratap Roy** (IITGCS\_24061391)



## 🚀 Overview

curaNet is a **Hospital Management Information System (HMIS)** built to streamline hospital operations. It provides dedicated panels for **Admins, Receptionists, Doctors, and Patients**, ensuring smooth workflows such as **appointments, staff management, payroll, patient records, and bed allocation**.

---
## 🌍 Deployed Links

Here are the deployed environments for **Curanet**:

- 🏥 **User App** → [Curanet User](https://curanet-git-main-webnerd69s-projects.vercel.app/)
- 🧑‍⚕️ **Doctor App** → [Curanet Doctor](https://curanet-doctor-git-main-webnerd69s-projects.vercel.app/)
- 🖥️ **Admin App** → [Curanet Admin](https://curanet-admin-git-main-webnerd69s-projects.vercel.app/)
- 📋 **Reception App** → [Curanet Reception](https://curanet-reception-git-main-webnerd69s-projects.vercel.app/)

---

## 🛠️ Tech Stack

### **Frontend (Multiple Panels)**

* ⚛️ React.js (Hooks + Context API)
* 🎨 TailwindCSS (modern UI styling)
* 📦 Axios (API communication)
* 🔔 React-Toastify (notifications)
* 🧭 React Router DOM (routing/navigation)

Each panel runs on its own frontend instance:

* 👨‍💼 **Admin Panel** → `http://localhost:5175/`
* 🧾 **Reception Panel** → `http://localhost:5173/`
* 🩺 **Doctor Panel** → `http://localhost:5174/`
* 👤 **User Panel** → `http://localhost:5176/`

### **Backend**

* 🟢 Node.js
* ⚡ Express.js
* 🔑 JSON Web Token (JWT) — authentication & authorization
* 🗄️ MongoDB with Mongoose

### **Other Tools**

* 🔐 Auth0 (Google Login)
* 🛠️ Vite (frontend bundler)

---

## ⚙️ Environment Setup

### 1️⃣ Backend Setup

Create a `.env` file inside your **backend** folder:

```env
JWT_SECRET=your_secret_key  
PORT=6900  
MONGODB_URI=your_mongodb_connection_string  
```

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
npm start
```

#### Frontend (Each Panel Separately)

```bash
# Reception Panel
cd reception
npm install
npm run dev

# Admin Panel
cd admin
npm install
npm run dev

# Doctor Panel
cd doctor
npm install
npm run dev

# User Panel
cd user
npm install
npm run dev
```

By default:

* Backend → `http://localhost:6900/`
* Reception → `http://localhost:5173/`
* Admin → `http://localhost:5175/`
* Doctor → `http://localhost:5174/`
* User → `http://localhost:5176/`

---

## 🔑 Accessing Restricted Panels

### 👨‍💼 Admin / Reception / Doctor Panels

1. Navigate to your **MongoDB cluster**.
2. Insert the following data into the **staffData collection**:

```json
{
  "name": "Your Name",
  "email": "your-working-gmail-id",
  "role": "admin"
}
```

3. Login with that email → Access **Admin Panel**.
4. From the Admin Panel, you can create staff accounts (**Doctors, Receptionists**) who can then log in and access their respective dashboards.
### ACCESSING RESTRICTED PANELS WITHOUT THE PRIOR STEPS WILL RESULT IN USER NOT GETTING LOGGED IN AND REDIRECTED TO LOGIN PAGE

---

### 👤 User Panel

* Simply login via **Google Authentication (Auth0)**.
* Users can:

  * Book/cancel appointments
  * View assigned doctor
  * Manage personal records

---

## 📌 Features

* 🔐 Role-based authentication (Admin / Receptionist / Doctor / User)
* 🩺 Appointment booking & cancellation
* 🛏️ Bed management (add, assign, release)
* 🧾 Payroll management for staff
* 🧑‍⚕️ Doctor & staff management
* 📊 Dashboard with filtered records
* ⚡ Real-time notifications
* 📈 Real-time data analytics (Under development)
* 🪙 Integrated Payment system (Under Development)

---

## 📥 Installation & Usage

1. Clone this repository:

```bash
git clone https://github.com/WebNerd69/curaNet
```

2. Setup backend (env + run server).
3. Setup **all 4 frontend panels** separately and run them on their respective ports.
4. Open your browser and access each panel from its port.

---

## ⭐ Contributing & Feedback

If you like this project, **give it a star ⭐** on GitHub.
For queries or feedback, feel free to reach out 👇

📧 Email: **[rudra@example.com](mailto:rudra.webnerd69@gmail.com)**
🔗 LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/rudra-pratap-roy-718393248/)



   
