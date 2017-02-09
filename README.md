# HaBaby README

## Developer Setup

### Setup Ionic platform

Set up Ionic 2 and Cordova.

[http://ionicframework.com/docs/v2/getting-started/installation/](http://ionicframework.com/docs/v2/getting-started/installation/)

* Install Node.js **6** using Mac installer from https://nodejs.org/en/
* Install cordova and ionic using npm: sudo npm install -g cordova ionic
* The current version as of 30 Jan 2017 should be ionic 2.2.1 (run ionic -v)
* You may need to install command-line deployment tools:
```
xcode-select --install
sudo npm install -g --unsafe-perm=true ios-deploy
```
* You will also need XCode and Android Development Studio

### Project Setup

(this was already done to generate this repository, so you don't need to do it to start, but this is just documented here in case we ever need to do it again)

http://ionicframework.com/docs/v2/getting-started/tutorial/

This command generates the project:

$ ionic start HaBaby --v2

Not everything gets checked into git, so each developer needs to run **npm install** to fill out some of the work files.

### Running the app

In the browser:

$ ionic serve

#### iOS

In the iOS Simulator:

$ ionic emulate ios -lc

On an iOS Device (plugged into USB)

Run the HaBaby.xcodeproj project in the platforms/ios folder in XCode.

Make sure your account is set up and the team/provisioning profile in Settings->General.  You can have it generate a provisioning profile even with a free Developer account: [http://stackoverflow.com/questions/4952820/test-ios-app-on-device-without-apple-developer-program-or-jailbreak](http://stackoverflow.com/questions/4952820/test-ios-app-on-device-without-apple-developer-program-or-jailbreak)


Build Process

* In XCode, sign in using Empowerhack's Apple ID (ask for details), in Preferences->Accounts
* Run `ionic build ios --prod` to set up the project
* Open the XCode project (Platforms/iOS/HaBaby.xcodeproj)
* Select the HaBaby target, then under General -> Signing -> Team, choose Kimi Laurie
* Leave "Automatically manage signing" ON
* Plug your device in to your Mac via USB so that XCode can add the device ID to the provisioning profile
* When XCode finishes processing your device info, you may have to hit "Register Device" under Status
* Try running on your device to test
* In the dropdown in the upper left of XCode, set the build target to “Generic iOS Device”.
* In the Product menu, select Archive.  This should take a bit of time.
* When complete, it may show you a window with the new archive, but if it doesn’t, go to the Window menu and select Organizer.
* Select the new archive and hit the Export… button.
In the subsequent screens, choose
-Save for Ad Hoc Deployment
-Export one app for all compatible devices
-Uncheck “Include manifest…”
-Leave bitcode setting (not sure if it matters for this purpose)
* If everything works, it should prompt you to save the exported file

Adding a device for the HockeyApp release

* Find the user in the HockeyApp dashboard (TODO: write out location in the dashboard)
* Copy the user's device UDID
* Go to Apple's developer website, sign in
* Under Provisioning Profiles, edit 'XC iOS Ad Hoc: *'
* Check the box for the new device and Generate the profile again
* Back in XCode, go to Accounts, view details of the EmpowerHack apple account
* Find the 'XC iOS Ad Hoc: *" in Provisioning Profiles, and download it again

#### Android

* Install JDK 8 (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* Set up paths in ~/.bash_profile, e.g.:
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_112.jdk/Contents/Home
export ANDROID_HOME=/Users/derek/Library/Android/sdk/
* Add Android target: ionic platform add android

Run in Simulator

* Download desired System Image by running: /Users/derek/Library/Android/sdk/tools/android sdk
* Create an Android Virtual Device by running: /Users/derek/Library/Android/sdk/tools/android avd
* ionic build android
* ionic emulate android

When running on a device, make sure it is already plugged in via USB, and that you OK the dialog to allow USB debugging.

* ionic run android

To build in Android Studio - Import Gradle project from platforms/android/build.gradle.

In the Build menu, select "Build APK".  When finished, use "Reveal in Finder". (should go to platforms/android/build/outputs/apk.

Upload that .apk file to HockeyApp.

Users may have to go to Settings -> Security, and enable installing apps from unknown sources.






