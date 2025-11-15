# Trainer  
A skill-development project built with Django as part of the **Skill Development Session at NIE**.  
This project helps trainees search for trainers, view their profiles, and connect with them based on skills and availability.

## 📌 Table of Contents
- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## 📖 About  
This application was created during the **Skill Development Program conducted at NIE**, focused on learning Django and building full-stack web applications.  
The project demonstrates practical concepts like models, views, templates, URL routing, static files, environment setup, and database migrations.  
The app allows trainees to find trainers based on skills and see trainer profiles with details.

## ⭐ Features  
- Trainer registration & profile creation  
- Trainer listing & search functionality  
- Cleaner frontend using HTML, CSS, and JavaScript  
- Django backend for routing, authentication, and database handling  
- Admin panel for managing trainers and trainees  
- Organized project structure using separate UI folder

## 🛠 Technology Stack  
**Backend:** Django (Python)  
**Frontend:** HTML, CSS, JavaScript  
**Database:** SQLite  
**Package Manager:** npm  
**Version Control:** Git + GitHub  

---

## 🚀 Getting Started  

### ✅ Prerequisites  
You should have the following installed:  
- Python 3.x  
- pip  
- Node.js & npm  
- Git  

---

## 🧰 Setup & Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/nikshep-root/Trainer.git
cd Trainer
```
### 2️⃣ Create Virtual Environment
```bash
python -m venv venv
```
Activate it:

Windows:
```bash
venv\Scripts\activate
```

Mac/Linux:
```bash
source venv/bin/activate
```

### 3️⃣ Install Python Dependencies
``` bash
pip install -r requirements.txt
```
If requirements file is missing, install Django manually:
```bash
pip install django
```

### 4️⃣ Install Frontend Dependencies
```bash
npm install
```

### 5️⃣ Apply Migrations
```bash
python manage.py makemigrations  
python manage.py migrate
```

### 6️⃣ Run the Server
```bash
python manage.py runserver
```

Visit in browser:
👉 http://127.0.0.1:8000/

### 🧑‍💻 Usage

Open the homepage and navigate through trainer listing

Search for trainers based on expertise

View trainer profiles

Trainers can manage profiles from admin panel

Admin can monitor all data from /admin

### 📂 Project Structure
```
Trainer/
├── node_modules/        # Front-end dependencies
├── trainer_search/      # Django project folder
├── trainers-ui/         # Front-end UI assets (HTML, CSS, JS)
├── package.json
├── package-lock.json
└── README.md
trainer_search/ – Contains Django models, views, URLs, templates, settings.
trainers-ui/ – Contains UI files and static assets.
```

### 🤝 Contributing

Contributions are welcome!
Steps:

- Fork the repository

- Create a new branch

- Commit your changes

- Push and open a Pull Request

### 🙌 Acknowledgements
- Developed during the Skill Development Session at NIE

- Thanks to trainers & mentors for guidance

- Built using Django as part of learning full-stack development
