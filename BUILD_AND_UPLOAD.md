# BUILD AND UPLOAD TO APP STORE - URGENT FIX

## IMMEDIATE STEPS TO UPLOAD BUILD

### 1. Install EAS CLI (if not already installed)
```bash
npm install -g @expo/eas-cli
```

### 2. Login to EAS
```bash
eas login
# Use: ericblair2022@gmail.com
```

### 3. Build for iOS App Store
```bash
eas build --platform ios --profile production
```

### 4. Submit to App Store Connect
```bash
eas submit --platform ios --profile production
```

## WHAT HAPPENS:
- EAS will build your app in the cloud
- It will automatically upload to App Store Connect
- The build will appear in TestFlight within 10-15 minutes
- You can then submit for App Store review

## IF BUILD FAILS:
1. Check that all assets exist in ./assets/images/
2. Ensure bundle identifier matches App Store Connect
3. Run: `expo doctor` to check for issues

## CURRENT CONFIG:
- Bundle ID: com.ericblair.dogspeakanalyzer
- Apple ID: ericblair2022@gmail.com
- Team ID: R7SBX4HG87
- App Store Connect ID: M384PZAACT

The build process takes 10-20 minutes. Once complete, it will automatically appear in App Store Connect!