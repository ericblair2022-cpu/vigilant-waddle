# Tarzana - Dog Sound Analyzer

A React Native app built with Expo that analyzes dog sounds and provides interpretations.

## App Store Deployment Instructions

### Prerequisites
1. Install EAS CLI: `npm install -g @expo/eas-cli`
2. Login to Expo: `eas login`
3. Have an Apple Developer Account
4. Have App Store Connect set up

### Building for iOS App Store

1. **Configure your Apple Developer account:**
   ```bash
   eas build:configure
   ```

2. **Update eas.json with your Apple details:**
   - Replace `your-apple-id@example.com` with your Apple ID
   - Replace `your-app-store-connect-app-id` with your App Store Connect app ID
   - Replace `your-team-id` with your Apple Developer Team ID

3. **Build for production:**
   ```bash
   npm run build:ios
   ```
   or
   ```bash
   eas build --platform ios
   ```

4. **Submit to App Store:**
   ```bash
   npm run submit:ios
   ```
   or
   ```bash
   eas submit --platform ios
   ```

### Alternative Manual Upload
If you prefer to upload manually:
1. Download the .ipa file from the EAS build
2. Use Transporter app (available on Mac App Store) to upload the .ipa to App Store Connect
3. Go to App Store Connect to complete the submission process

### Important Notes
- Make sure your bundle identifier `com.tarzana.dogsoundanalyze` is registered in your Apple Developer account
- Ensure all required App Store metadata is filled in App Store Connect
- Test the app thoroughly before submission

## Development

```bash
npm start
```

This starts the development server.