# Aora - Video Sharing Mobile App

A modern, cross-platform mobile application for sharing and discovering video content, built with React Native and Expo. The app features user authentication, video uploads, social interactions, and a beautiful, responsive UI.

## 🚀 Features

- **User Authentication**: Secure sign-in and sign-up flows
- **Video Feed**: Browse trending and latest videos
- **Search**: Find videos by keywords
- **User Profiles**: View and edit your profile
- **Video Upload**: Share your own videos
- **Responsive Design**: Works on both iOS and Android
- **Offline Support**: Basic functionality works without internet
- **Dark/Light Mode**: Automatic theme switching based on system preferences

## 🛠 Technologies

- **Frontend**: React Native, Expo Router
- **Styling**: Tailwind CSS with NativeWind
- **State Management**: React Context API
- **Navigation**: Expo Router (file-based routing)
- **Backend**: Appwrite (self-hosted backend)
- **Icons**: Expo Vector Icons
- **Forms**: React Hook Form with Yup validation
- **Video**: expo-av for video playback

## 📱 Preview

![App Preview](./assets/images/thumbnail.png)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app (for testing on physical devices)
- Appwrite backend (self-hosted)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/reactnativeapp.git
   cd reactnativeapp
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install
   
   # Or using npm
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your Appwrite configuration:
   ```env
   APPWRITE_ENDPOINT=your_appwrite_endpoint
   APPWRITE_PROJECT_ID=your_project_id
   APPWRITE_DATABASE_ID=your_database_id
   APPWRITE_VIDEOS_COLLECTION_ID=your_videos_collection_id
   APPWRITE_USERS_COLLECTION_ID=your_users_collection_id
   APPWRITE_STORAGE_BUCKET_ID=your_storage_bucket_id
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run on a device**
   - Scan the QR code with your device's camera (iOS) or the Expo Go app (Android)
   - Or press `i` for iOS simulator or `a` for Android emulator

## 📁 Project Structure

```
.
├── app/                    # App screens and routing
│   ├── (auth)/             # Authentication screens
│   │   ├── sign-in.tsx     # Sign in screen
│   │   └── sign-up.tsx     # Sign up screen
│   ├── (tabs)/             # Main tab navigation
│   │   ├── home.tsx        # Home feed
│   │   ├── create.tsx      # Video creation/upload
│   │   └── profile.tsx     # User profile
│   ├── search/             # Search functionality
│   │   └── [query].tsx     # Search results
│   └── _layout.tsx         # Root layout
├── assets/                 # Static assets
│   ├── fonts/              # Custom fonts
│   ├── icons/              # App icons
│   └── images/             # Image assets
├── components/             # Reusable UI components
│   ├── CustomButton.tsx    # Custom button component
│   ├── FormField.tsx       # Form input field
│   ├── VideoCard.tsx       # Video card component
│   └── ...
├── context/                # Global state management
│   └── GlobalProvider.tsx  # App context provider
├── lib/                    # Utility functions
│   ├── appwrite.ts         # Appwrite SDK setup
│   └── useAppwrite.ts      # Custom hooks for Appwrite
├── types/                  # TypeScript type definitions
└── utils/                  # Helper functions
```

## 🧪 Testing

Run the test suite with:
```bash
npm test
```

## 🧹 Linting & Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npx prettier --write .
```

## 🚀 Deployment

### Building for Production

1. **Build the app**
   ```bash
   # For iOS
   eas build --platform ios
   
   # For Android
   eas build --platform android
   ```

2. **Submit to app stores**
   Follow the Expo documentation for submitting to the [App Store](https://docs.expo.dev/submit/ios/) and [Google Play](https://docs.expo.dev/submit/android/).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.

## Resources

- [Figma Design](https://www.figma.com/design/o6xKq25ETLqw5ebqgZonVp/Aora---React-Native-Crash-Course?node-id=0-1&p=f&t=7bYuEQlUMhziwtoG-0)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Appwrite](https://appwrite.io/) for the backend services
- [NativeWind](https://www.nativewind.dev/) for Tailwind CSS in React Native
