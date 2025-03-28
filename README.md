🕒 Deadline Timer App (Angular)
This is a simple yet performance-optimized Angular app that retrieves a countdown value from an API and displays a live countdown timer. The value decreases every second until it reaches zero. This project is built using Angular 18 with standalone components and RxJS for reactive state management.

🚀 Features
✅ Fetches countdown value from a backend API
✅ Displays a live countdown timer
✅ Uses Angular signal() for efficient state management
✅ Handles cleanup and memory management with RxJS
✅ Proxy configuration for API calls
✅ Fully modular and ready for production

📦 Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/deadline-timer-app.git
cd deadline-timer-app
2. Install Dependencies
npm install
3. Start the Mock API
Install json-server globally:
npm install -g json-server
Start the mock server:
json-server --watch db.json --port 3000
5. Run the App
Start the Angular development server:
ng serve
Open the app in your browser:

👉 http://localhost:4200

🌐 API Endpoint
✅ Mock API Endpoint:
Endpoint: GET http://localhost:3000/deadline

Response Example:

{  
  "secondsLeft": 60  
}  
🛠️ Development Commands  
Command	Description  
npm install	 
ng serve  
json-server --watch db.json --port 3000	Start mock backend



✅ Best Practices Followed
✔️ Used signals for state management
✔️ Proper subscription cleanup with unsubscribe()
✔️ Used RxJS for reactive updates
✔️ Clean and modular component-based structure

👨‍💻 Contributing
Feel free to fork the repository and submit a pull request. Contributions are welcome! 🎯

📝 License
This project is licensed under the MIT License.

🎉 Done! 😎
