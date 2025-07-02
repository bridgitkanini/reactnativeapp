# reactnativeapp

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Getting Started

1. **Install dependencies**

   If you use [pnpm](https://pnpm.io/):

   ```bash
   pnpm install
   ```

   Or, with npm:

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

   This will open the Expo Dev Tools in your browser, where you can run the app on an Android/iOS simulator or a physical device using Expo Go.

## Project Structure

- `app/` - Main application code, using [file-based routing](https://docs.expo.dev/router/introduction/).
  - `(auth)/` - Authentication screens (sign-in, sign-up).
  - `(tabs)/` - Main tab screens (home, bookmark, create, profile).
  - `search/` - Search results by query.
  - `_layout.tsx` - Layout files for routing.
- `components/` - Reusable UI components (e.g., `CustomButton`, `FormField`).
- `constants/` - App-wide constants (icons, images, etc.).
- `lib/` - Library code (e.g., `appwrite.js` for backend integration).
- `assets/` - Images, icons, and fonts.
- `global.css` - Global styles.
- `tailwind.config.js` - Tailwind CSS configuration for styling.

## Development

- Edit files in the `app/` directory to add or modify screens.
- Use the `components/` directory for shared UI elements.
- Static assets (images, icons, fonts) are in the `assets/` directory.

## Learn More

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals and advanced topics.
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Step-by-step guide for building universal apps.

## Join the Community

- [Expo on GitHub](https://github.com/expo/expo): Contribute to the open source platform.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
