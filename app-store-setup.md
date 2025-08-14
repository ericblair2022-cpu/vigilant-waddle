# App Store Setup Guide

## Credentials Configured ✅
Your Apple credentials have been successfully configured in `eas.json`:
- **Apple ID**: ericblair2022@gmail.com
- **App Store Connect App ID**: M384PZAACT  
- **Apple Team ID**: R7SBX4HG87

## Next Steps for App Store Deployment

### 1. Install EAS CLI
```bash
npm install -g @expo/eas-cli
```

### 2. Login to Expo
```bash
eas login
```

### 3. Build for Production
```bash
eas build --platform ios --profile production
```

### 4. Submit to App Store
```bash
eas submit --platform ios --profile production
```

## App Store Connect Setup
1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Navigate to your app (ID: M384PZAACT)
3. Fill in app metadata, screenshots, and descriptions
4. Set pricing and availability
5. Submit for review

## Important Notes
- Ensure your app.json has the correct bundle identifier
- Add app icons and splash screens before building
- Test thoroughly on physical devices before submission
- Review Apple's App Store Review Guidelines

Your app is now ready for App Store deployment! 🚀
      "appleTeamId": "ABCD123456"
    }
  }
}
```

## Troubleshooting
- Ensure bundle identifier is unique and matches your Apple Developer account
- Make sure all required app icons and splash screens are present
- Check that NSMicrophoneUsageDescription is properly set for microphone access

## Alternative Manual Upload
If EAS submit doesn't work, you can:
1. Download the IPA from EAS build
2. Use Xcode -> Window -> Organizer
3. Or use Transporter app from Mac App Store
4. Upload the IPA file to App Store Connect