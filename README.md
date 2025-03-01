
# Auto Ride Booking - React Native

This is a mobile application for booking auto rides, built using React Native. The app allows users to book auto rides, view available auto drivers, track the ride status, and more.

## Features

- **User Registration and Login**: Users can sign up and log in to the app.
- **Auto Ride Booking**: Users can book an auto ride by providing their destination.
- **Ride Tracking**: Track your booked ride's progress on a map.
- **Auto Driver Availability**: View available drivers in real-time.
- **Ride History**: Check the history of previous rides.
- **Push Notifications**: Get real-time notifications on ride status updates.
  
## Screenshots

- **Splash Screen**: Displays on app load.
- **Login/Signup Screen**: Allows the user to register or log in.
- **Home Screen**: Displays ride options and nearby auto drivers.
- **Map Screen**: Shows real-time tracking of the auto ride.
- **Ride Details**: Information about the ongoing ride.
  
## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (latest stable version)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) for Android development or [Xcode](https://developer.apple.com/xcode/) for iOS development.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/auto-ride-booking-react-native.git
    cd auto-ride-booking-react-native
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. If you're targeting Android, run:

    ```bash
    npx react-native run-android
    ```

    Or if you're targeting iOS:

    ```bash
    npx react-native run-ios
    ```

4. Follow the prompts to complete the app setup.

## Configuration

- **Firebase**: If you're using Firebase for authentication, database, and notifications, you'll need to set up Firebase in your project.

  - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
  - Install the necessary Firebase dependencies and configure your `google-services.json` (for Android) or `GoogleService-Info.plist` (for iOS).
  
- **Map API**: For map functionality, we use `react-native-maps`. You'll need to configure the Google Maps API key.

  - Follow the setup guide at [react-native-maps](https://github.com/react-native-maps/react-native-maps) to get your Google Maps API key and add it to the app configuration.

## Folder Structure

```bash
├── assets/           # Images, fonts, and other assets
├── components/       # Reusable components (buttons, inputs, etc.)
├── navigation/       # App navigation (React Navigation)
├── screens/          # App screens (Home, Login, Booking, etc.)
├── services/         # APIs and services (Firebase, ride booking, etc.)
├── utils/            # Utility functions (helpers, constants)
├── App.js            # Main app entry point
└── package.json      # Project dependencies and scripts
```

## Dependencies

- `react-native-maps`: For displaying maps and tracking rides.
- `react-navigation`: For handling navigation between screens.
- `firebase`: For user authentication and backend.
- `axios`: For API calls.
- `react-native-push-notification`: For push notifications.
  


