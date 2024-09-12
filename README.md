# Windows and Mac Setup Guide
# Setting up React Native Expo Environment on Windows (with Emulator)

## Step 1: Install Node.js
if you have node.js installed skip this step:

1. Go to [Node.js website](https://nodejs.org/).
2. Download the LTS version for Windows.
3. Run the installer, and ensure that `npm` is installed by default.

## Step 2: Install Expo CLI
1. Open **PowerShell** or **Command Prompt** as Administrator.
2. Run the following command to install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```

## Step 3: Install Android Studio (for Emulator)
1. Go to the [Android Studio website](https://developer.android.com/studio).
2. Download and install Android Studio.
3. During installation, ensure you select the option to install:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device (AVD)
4. Once installed, open Android Studio and:
   - Go to **Configure** -> **SDK Manager**.
   - Under **SDK Platforms**, ensure you have the latest **Android API** checked.
   - Go to **SDK Tools**, and ensure that **Android SDK Build-Tools**, **Android Emulator**, and **Intel HAXM** are checked.

## Step 4: Set Up Android Virtual Device (AVD)
1. In Android Studio, go to **Configure** -> **AVD Manager**.
2. Click **Create Virtual Device** and select a device.
3. Choose a **system image** (preferably a recent one with Google Play).
4. After creating the device, click the **Play** button to launch the emulator.

## Step 5: Install Expo Go on Emulator
1. On the emulator, open the **Play Store**.
2. Search for **Expo Go** and install it.

## Step 6: Create a New React Native Project with Expo
1. Open **PowerShell** or **Command Prompt**.
2. Run the following command to create a new Expo project:
   ```bash
   expo init MyNewProject
   ```
3. Navigate to the project folder:
   ```bash
   cd MyNewProject
   ```

## Step 7: Start the Expo Server
1. In the project directory, start the Expo development server:
   ```bash
   expo start
   ```
2. This will open a browser window with the Expo Developer Tools.

## Step 8: Run the App on the Emulator
1. In Expo Developer Tools, select **Run on Android device/emulator**.
2. Your app should now load on the Android emulator.

## Step 9: Troubleshooting
- Ensure the emulator is running before starting the app.
- If the emulator does not appear in Expo, try restarting Android Studio and the emulator.



==================================================================================================================================================================================================================

# React Native Expo Setup on Mac (with iOS Simulator)

## Prerequisites
Before we start, ensure your Mac meets the following requirements:
- macOS 10.15.7 (Catalina) or higher.
- Xcode (for iOS Simulator).

## Step 1: Install Homebrew
Homebrew is a package manager for macOS, which simplifies installing software.

1. Open your terminal and run the following command to install Homebrew:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. After installation, ensure Homebrew is up to date:
    ```bash
    brew update
    ```

## Step 2: Install Node.js and npm
Expo requires Node.js, which comes with npm (Node Package Manager).

IF YOU HAVE NODE.JS INSTALLED SKIP THIS STEP

1. Install Node.js using Homebrew:
    ```bash
    brew install node
    ```

2. Verify the installation:
    ```bash
    node -v
    npm -v
    ```

## Step 3: Install Expo CLI
Expo CLI is the command-line tool to create and manage React Native projects with Expo.

1. Install Expo CLI globally:
    ```bash
    npm install -g expo-cli
    ```

2. Verify the installation:
    ```bash
    expo --version
    ```

## Step 4: Install Xcode for iOS Simulator
Xcode is necessary to run the iOS Simulator.

1. Install Xcode from the Mac App Store:
    - Open the **App Store**, search for **Xcode**, and install it.

2. After installation, open Xcode and go to **Preferences** > **Components**.
    - Download and install the latest **iOS Simulator**.

3. Accept Xcode's license:
    ```bash
    sudo xcodebuild -license accept
    ```

4. Verify Xcode is installed correctly:
    ```bash
    xcode-select --install
    ```

## Step 5: Create a New React Native Project Using Expo

1. In your terminal, navigate to the folder where you want to create your project, and run the following command:
    ```bash
    expo init MyNewProject
    ```

2. You will be prompted to choose a template:
    - Choose the **blank** template for a minimal setup.

3. Once the project is created, navigate to the project directory:
    ```bash
    cd MyNewProject
    ```

## Step 6: Start the Project

1. Start the development server:
    ```bash
    expo start
    ```
    then press i to open ios app

2. This will open the Expo developer tools in your web browser.

## Step 7: Running on iOS Simulator

1. In the Expo developer tools, click on the **Run on iOS Simulator** option.
    - This will automatically open the iOS Simulator if it’s installed.

    Alternatively, you can manually open the simulator:
    ```bash
    open -a Simulator
    ```

2. Select the desired device (iPhone, iPad, etc.) from the **Simulator** app if not already open.

3. In the Expo developer tools, click **Run on iOS Simulator** again, and your app should load.

## Step 8: Running on a Physical Device (Optional)
THIS STEP IS OPTIONAL:

1. Download the **Expo Go** app from the App Store on your iPhone.

2. In the Expo developer tools, scan the QR code with the Expo Go app to run your project on your physical device.

---

## Common Commands

- **Start Expo Development Server**:
    ```bash
    expo start
    ```

- **Build a Standalone App**:
    ```bash
    expo build:ios
    ```

## Troubleshooting

- If the iOS Simulator doesn’t start, make sure Xcode is installed correctly and the necessary simulators are downloaded.
- To check for issues with your setup, run:
    ```bash
    expo diagnostics
    ```

## Conclusion
You’ve successfully set up the React Native environment using Expo on your Mac. Now you can start building and testing React Native apps using the iOS simulator.
