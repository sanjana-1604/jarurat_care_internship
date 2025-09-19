# 📋 Jarurat Care – Patient Records Dashboard  

A modern **patient records dashboard** built with **React + Tailwind CSS**, featuring:  
✅ Responsive UI  
✅ Patient search & details modal  
✅ Add new patients (local state only)  
✅ Loading & error handling for API fetch  
✅ Gradient UI design with color palette from [Coolors](https://coolors.co/palette/03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8)  

---

## 📸 Preview  
![Jarurat Care Preview](./screenshot.png)  
*(Replace with an actual screenshot of your running app)*  

---

## ⚡ Features  
- 🏥 **Landing Page** with hero section & feature highlights  
- 👨‍⚕️ **Patients Page** with:  
  - API fetch (JSONPlaceholder mock data)  
  - Search by name  
  - Patient cards in a grid layout  
  - Modal for details  
  - Add New Patient form (local update only)  
  - Loading & error states  
- ℹ️ **About Page** with project info  
- 🌈 **Responsive, modern UI** with gradients & Tailwind styling  

---

## 🛠️ Tech Stack  
- **React** (Hooks + Context API)  
- **Tailwind CSS** for styling  
- **React Router** for navigation  
- **React Icons** for UI icons  

---

## 📂 Project Structure  
```bash
src/
│── components/       # Navbar, Footer, PatientCard, PatientModal, AddPatientForm
│── context/          # AppContext (patients state + search + modal)
│── pages/            # Home, Patients, About
│── App.jsx           # Main app with routing
│── index.css         # Tailwind + custom colors
│── index.js          # Entry point
🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/your-username/jarurat-care.git
cd jarurat-care

2️⃣ Install dependencies
npm install

3️⃣ Run the app
npm start


App runs on 👉 http://localhost:3000

🎨 Color Palette
Color Name	Hex
Primary	#03045e
Secondary	#023e8a
Accent	#0077b6
Teal	#0096c7
Info	#00b4d8
Sky	#48cae4
Lightblue	#90e0ef
Softblue	#ade8f4
Pale	#caf0f8
🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📜 License

MIT License © 2025 Jarurat Care Team