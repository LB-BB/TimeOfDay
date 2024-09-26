# Time of Day - React Native iOS App

This is a React Native iOS app that dynamically changes the background and displays a sun or moon image based on the time of day. The text updates accordingly, and the layout adjusts whether it's morning, afternoon, evening, or night.

## Features
- Displays different background colors and heavenly bodies (sun or moon) based on the time of day.
- Text dynamically updates to show the current time period (morning, afternoon, evening, or night).
- The position of the sun or moon changes dynamically (appears above or below the text depending on the time period).
- Responsively centers the text and images without layout distortion across devices.

## Installation

### 1. Clone the repository:
```bash
git clone <your-repo-url>
```

### 2. Install dependencies:
Navigate into the project directory and install the required npm packages:

```bash
cd your-project-name
npm install
```

### 3. Install iOS dependencies (CocoaPods):
In addition to the npm packages, iOS projects in React Native require CocoaPods to manage native dependencies. Navigate to the `ios` directory and install the pods:

```bash
cd ios
pod install
```

Then navigate back to the root project directory:

```bash
cd ..
```

### 4. Start the iOS simulator:
Make sure you have Xcode installed. Run the following command to launch the app in the iOS simulator:

```bash
npx react-native run-ios
```

This command will compile the app and launch the iOS simulator automatically. Ensure that your Xcode command line tools are correctly installed and configured.
