---
title: SDK Platform Support and Requirements
hide_title: false
hide_table_of_contents: false
slug: /platform-requirements
---

The MapsIndoors SDK is a collection of software libraries, guides and documentation that enables developers to create applications with the indoor wayfinding capabilities facilitated by MapsIndoors from MapsPeople. MapsIndoors SDK is available on iOS, Android and Web platforms.

## Platform Requirements

### Android

#### V3

- Supports all newer Android phones and tablets
- Minimum supported Android Platform is Android 5.0 Lollipop (API level 21)K
- Rely on Java 8 features
- Available through a remote Maven repository, integrated with Gradle
- Depends on Google Maps Android API

#### V4

- Supports all newer Android phones and tablets
- Minimum supported Android Platform is Android 5.0 Lollipop (API level 21)
- Rely on Java 8 features
- Available through a remote Maven repository, integrated with Gradle
- Depends on Google Maps Android API or Mapbox Android API

### iOS

#### V3

- Supports all newer Apple phones and tablets, with a minimum of iOS 10
- Minimum supported iOS Platform SDK version is 10
- Available as a remote framework library
  - Through the CocoaPods package dependency manager
  - Through manual download and installation as of version 3.30 of MapsIndoors iOS SDK
- Depends on Google Maps iOS SDK

<!-- #### V4

- Supports all newer Apple phones and tablets with a minimum of iOS 13
- Minimum supported iOS Platform SDK version is 13
- Available as a remote framework library
  - Through the CocoaPods package dependency manager
  - Through manual download and installation as of version 3.30 of MapsIndoors iOS SDK
- Depends on Google Maps iOS SDK or Mapbox iOS SDK -->

### Web

#### V3

- Supports all modern phones, tablets and desktop PCs
- Available as one or more remote script references
- Depends on Google Maps API or Mapbox GLJS for JavaScript v3
- Supports the following desktop browsers:
  - Current version of Microsoft Edge (Windows)
  - Current and previous version of Firefox (Windows, macOS, Linux)
  - Current and previous version of Chrome (Windows, macOS, Linux)
  - Current and previous version of Safari (macOS)
- Supports the following mobile browsers:
  - Current version of Chrome on Android 4.1+
  - Chrome WebView on Android 4.4+
  - Safari on the current and previous major version of iOS
  - UIWebView and WKWebView on the current and previous major version of iOS
  - Current version of Chrome for iOS
