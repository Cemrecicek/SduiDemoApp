# Server-Driven UI (SDUI) Demo Application

This repository showcases a React Native application built around the concept of Server-Driven UI. Instead of shipping a new mobile app build every time the layout changes, the app receives a dynamic JSON schema from a server and renders the interface at runtime.

## Core Concept & Architecture

In this app, predefined UI components are compiled into the client application, while the server controls:

- which components should be shown,
- the order in which they appear, and
- the data passed into each component.

This approach enables real-time personalization and layout changes without requiring app store updates. The client remains lightweight while the backend fully manages the UI experience.

## Tech Stack & Details

- React Native
- TypeScript
- StyleSheet-based UI implementation with clean component styling
- No standard inline styling used in the project structure

## Dynamic Server Schema (db.json)

The server can return a JSON object containing different user-page layouts. The following example demonstrates a premium experience and a standard experience:

```json
{
  "premium_user_page": [
    {
      "type": "header_view",
      "props": {
        "title": "👑 Welcome to Premium World!",
        "backgroundColor": "#d4af37"
      }
    },
    {
      "type": "banner_view",
      "props": {
        "imageUrl": "https://picsum.photos/id/26/600/400",
        "text": "Exclusive ad-free experience and VIP 50% discount items listed below."
      }
    },
    {
      "type": "product_card_view",
      "props": {
        "productName": "Premium Headphones (VIP)",
        "price": "$150"
      }
    }
  ],
  "standart_user_page": [
    {
      "type": "header_view",
      "props": {
        "title": "Standard Store",
        "backgroundColor": "#34495e"
      }
    },
    {
      "type": "banner_view",
      "props": {
        "imageUrl": "https://picsum.photos/id/10/600/400",
        "text": "Upgrade to Premium to double your rewards and unlock active deals!"
      }
    },
    {
      "type": "product_card_view",
      "props": {
        "productName": "Standard Headphones",
        "price": "$300"
      }
    }
  ]
}
```

## Getting Started (Installation & Usage)

### Prerequisites

Make sure the following tools are installed:

- Node.js
- JDK
- Android Studio (for Android)
- Xcode (for iOS)

### Installation

```bash
npm install
```

### Run Metro

```bash
npx react-native start
```

### Optional Local Server Configuration

If you want to simulate the server response locally, you can use JSON Server:

```bash
npx json-server db.json --port 3000
```

### Run on Android

```bash
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```

### Run on iOS

```bash
npx react-native run-ios
```

## Personalization Experiment (How to Test)

To see the SDUI behavior in action, open the file src/screens/DynamicScreen.tsx and toggle the currentUserType value between 'premium' and 'standart'. After reloading the app on your device or emulator, the entire UI should instantly change based on the selected user type.
