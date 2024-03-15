---
title: Pomodoro (PomoBerry)
year: 2023
layout: project
source: https://github.com/po-gl/Pomodoro
testflight: https://testflight.apple.com/join/nkvdy1Ij
summary: An iOS and watchOS focus timer app with task management, charts, and a Rust backend.
summary-tags:
  - SwiftUI
  - Core Data
  - Rust
  - iOS
  - watchOS
summary-imgs:
  - /assets/screenshots/pomodoro/DarkMode.png
  - /assets/screenshots/pomodoro/EstimationsChart.png
tags:
  - SwiftUI
  - Core Data
  - iOS
  - watchOS
  - CloudKit
  - SwiftUI Charts
  - UIKit (supplemental)
  - Rust
  - Tokio concurrency
  - Actix
  - Reqwest
  - OpenSSL
  - Docker
imgs:
  - /assets/screenshots/pomodoro/DarkMode.png
  - /assets/screenshots/pomodoro/TaskList.png
  - /assets/screenshots/pomodoro/EstimationsChart.png
  - /assets/screenshots/pomodoro/CumulativeTimesChart.png
  - /assets/screenshots/pomodoro/LiveActivitiesAndWidgetsCondensed.png
  - /assets/screenshots/pomodoro/Settings.png
  - /assets/screenshots/pomodoro/LightMode.png
  - /assets/screenshots/pomodoro/WatchMainPage.png
  - /assets/screenshots/pomodoro/WatchMainPageRest.png

---

`PomoBerry` is a focus timer app that facilitates the Pomodoro technique. The technique was developed and expanded upon in the 80s and 90s by Francesco Cirillo to enhance focus, increase decision awareness, boost motivation, and alleviate mental fatigue and anxiety, among other goals. The method is simple: work for 25 minutes, rest for 5 minutes, repeat the work-rest process four times, then take a longer 15-30 minute break.

Taking regular, scheduled breaks and working for uninterrupted time blocks can enhance focus and alleviate fatigue. However, this is only part of Pomodoro; another important aspect is to:

* Write down a list of tasks to do that day.
* Estimate how many Pomodoros (work-rest blocks) each task will need.
* Record how many actual Pomodoros each task took.

By estimating and recording the number of Pomodoros for tasks, you start to improve your ability to predict how long tasks take, a valuable skill for almost every occupation. PomoBerry aims to be an all-encompassing app for the Pomodoro technique with features that facilitate the aspects described above and more.

With PomoBerry, I set out to make a highly polished, feature-rich app that I would find helpful in my own life. It's App Store-ready, but unfortunately, it was rejected due to the saturation of the Pomodoro app category (not for any technical reasons). It's written primarily with SwiftUI but has significant elements written using UIKit; for example, the task list uses a UICollectionView with a DiffableDataSource for better performance. The backend is written in Rust and facilitates updates to LiveActivites through push notifications, which is a significant part of the app's experience. The backend leverages the asynchronous Rust runtime Tokio for lightweight and efficient concurrency, handling 100,000 concurrent connections on a single instance of the cheapest DigitalOcean virtual machine (1GB of memory), as verified with a K6 load test.

Features:
* Set a sequential timer of up to 6 Pomodoro intervals that notify at each phase change.
* Track timer progress through Live Activities on your lock screen or Dynamic Island.
* Maintain a checklist of current and past tasks with notes (synced to iCloud).
* Drag-and-drop tasks to the progress bar to label Pomodoro intervals.
* Add Pomodoro estimations and results to tasks.
* Assign tasks to overarching projects.
* Reflect on results with charts for Pomodoro estimations, total time spent on Pomodoros, and completed tasks.
* Track timer progress on your home screen with iOS widgets.
* Sync up a Pomodoro session with a companion watchOS app.
* Track timer progress on your watch face with watchOS complications
* Settings to change the work-rest-break time durations from the default of 25min-5min-30min.
* Pixel buddies

---
