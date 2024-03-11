---
title: Dialogue
year: 2022
layout: project
source: https://github.com/po-gl/Dialogue
summary: A macOS and iOS app chat dialogue app with GPT-4 with markdown rendering.
summary-tags:
 - SwiftUI
 - GPT-4
 - Core Data
 - iOS
 - macOS
summary-imgs:
 - /assets/screenshots/dialog/DarkMode.png
 - /assets/screenshots/dialog/macOS.png
tags:
 - SwiftUI
 - GPT-4
 - Core Data
 - iOS
 - macOS
imgs:
 - /assets/screenshots/dialog/DarkMode.png
 - /assets/screenshots/dialog/macOS.png


---

`Dialogue` is a macOS and iOS app that connects to OpenAI's ChatGPT API (`gpt-4.0-turbo`).

Its UI is a simple and familiar chat interface, but its conversation abilities are surprisingly natural (like any other project using the GPT-3.5 model). Ask it general queries, coding questions, or to create poetry. The task-agnostic model will typically give a convincing response in well crafted prose, even when wrong. As with other LLM's, do not rely on ChatGPT as a source of trustworthy information. See OpenAI's [website](https://openai.com/blog/chatgpt) for more information on ChatGPT or their [paper](https://arxiv.org/pdf/2005.14165.pdf) on GPT-3 or this [paper](https://arxiv.org/abs/1706.03762) on the underlying Transformer model.

Features:
- Chat interface connecting to OpenAI's ChatGPT api (`gpt-4.0-turbo`)
- Keep track of multiple threads
- Automatic thread summary subtitle using ChatGPT
- Markdown rendering of messages (lists, tables, code syntax, etc.)
- Preview links with rich media (the model can't utilize the internet so links are often dead ¯\\\_(ツ)_/¯)
- Close/Open thread to control conversational memory
- Change model settings (token limit and message memory)

---
