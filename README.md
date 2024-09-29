# Magnolia

Magnolia is an intelligent travel planning application that leverages AI to recommend personalized trips for users. Built with modern web technologies like React, Gemini AI, Firebase, and TailwindCSS, this app helps users discover destinations, manage bookings, and organize itineraries seamlessly.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Firebase Configuration](#firebase-configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **AI-Powered Recommendations**: Leverages Gemini AI to provide personalized travel suggestions.
- **Search Destinations**: Users can search and explore top destinations with ease.
- **Itinerary Management**: Automatically generate and customize trip itineraries.
- **Authentication**: Secure user authentication and management with Firebase.
- **Responsive Design**: Built with TailwindCSS for a mobile-first, responsive layout.
- **Real-time Data**: Uses Firebase for real-time data storage and retrieval.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Firebase (Firestore, Authentication)
- **AI Integration**: Gemini AI (for trip suggestions and recommendations)
- **State Management**: React hooks and Context API
- **Routing**: React Router
- **Deployment**: Firebase Hosting

## Installation

### Prerequisites

- Node.js (v14+)
- Firebase account and project setup
- Gemini AI API access (if applicable)

### Clone the Repository

```bash
git clone https://github.com/iamghossh/Magnolia-Web-App.git
cd Magnolia-Web-App

```
### Install Dependencies
```bash
npm install
```
### Setup Environment Variables

Create a .env file at the root of the project and configure the following environment variables with your and Gemini AI credentials:
```bash
VITE_GOOGLE_PLACE_API_KEY = AIzaSyAbsDboKqo2DtvShWZE20zIuq0lSghjTxU

VITE_GOOGLE_GEMINI_AI_API_KEY = AIzaSyC4_-3xH2cOljn8uv6fzHC_yxN-AzKXmIY

VITE_GOOGLE_AUTH_CLIENT_ID = 383080990849-el96tths9r0lhlupco70du51cmci7ob4.apps.googleusercontent.com
```
### Firebase Configuration

You need to set up Firebase for authentication and Firestore. Follow the steps below:
1. Go to your Firebase Console.
2. Create a new project (or use an existing one).
3. Enable Firestore and Authentication (Email/Password or Google sign-in).
4. Set up the Firebase credentials in your .env file as shown above.

### Running the Application

To run the development server, use the following command:
```bash
npm run dev
```
### Build for Production

For a production-ready build, use:
```bash
npm run build
```
This will create an optimized build in the build/ directory.

## Usage

1. Sign up or log in using the authentication options provided (Firebase Authentication).
2. Search for destinations and receive AI-powered travel recommendations.
3. Plan your trip: Create and customize your itinerary, which will be saved using Firebase.
4. Real-time updates: Get recommendations based on your preferences and actions.

## Screenshots

### Landing Page
![landing page](https://github.com/user-attachments/assets/52341209-065f-47bc-8429-ac2cf069be51)

### Trip Suggestions
![Trip Suggestions](https://github.com/user-attachments/assets/01229662-a949-46ea-98c9-741c85dd03ea)

### Itinerary Planner
![chicago jpg](https://github.com/user-attachments/assets/2499a90b-7617-4049-a101-675a73531053)


## LIVE DEMO 🔗: https://magnoliatrip.vercel.app/


## Firebase Configuration
You will need to ensure the correct Firebase Firestore rules are set for security and proper data handling.

```bash
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
Make sure you have enabled Firestore in your Firebase console.

### Firebase Authentication

Enable the authentication methods required for your app (e.g., Email/Password, Google, etc.).

1. Go to your Firebase Console.
2. Click on Authentication > Sign-in Method.
3. Enable the authentication method you want (Email/Password, Google, etc.).

## Contributing

Contributions are welcome! Here's how you can contribute to this project:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m "Added new feature").
4. Push to the branch (git push origin feature-branch).
5. Create a pull request on GitHub.

Please make sure your code follows the project's code style guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


