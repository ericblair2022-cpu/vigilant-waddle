# IMMEDIATE BUILD AND UPLOAD TO TESTFLIGHT

## CRITICAL: Run these commands NOW to get build on TestFlight

### Step 1: Install EAS CLI (if not installed)
```bash
npm install -g @expo/eas-cli
```

### Step 2: Login to EAS
```bash
eas login
# Use: eric.blair.gb@gmail.com
```

### Step 3: Build for iOS Production
```bash
eas build --platform ios --profile production
```

### Step 4: Submit to App Store Connect (TestFlight)
```bash
eas submit --platform ios --profile production
```

## Alternative: Build and Submit in One Command
```bash
eas build --platform ios --profile production --auto-submit
```

## If Build Fails, Try:
```bash
# Clear cache and rebuild
eas build --platform ios --profile production --clear-cache
```

## Check Build Status:
```bash
eas build:list
```

Your app will appear in TestFlight within 1-2 hours after successful upload.