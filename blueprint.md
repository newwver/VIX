
# Project Blueprint: Nasdaq 100 Fear & Greed Horoscope (v2)

## Overview

A web service that provides a personalized investment attitude recommendation by combining real-time market sentiment (Fear & Greed Index) with a user's birthdate-based horoscope. The application will be built using Tailwind CSS for a modern, responsive, and easily maintainable UI.

## UI/UX

*   **Framework:** Tailwind CSS.
*   **Theme:** Clean, modern fintech aesthetic with support for light and dark modes.
*   **Animation:** The result card will appear with a dramatic animation (e.g., fade-in, scale-up) to enhance the user experience.
*   **Layout:** A clear, single-column layout optimized for both desktop and mobile.

## Features

### 1. Header
*   **Title:** "나스닥 100 공포 탐욕 운세 서비스"
*   **Theme Toggle:** A toggle switch for light/dark mode.

### 2. Market Data Dashboard
*   **Nasdaq 100 Index:** Statically displayed at **18,000pt**.
*   **Fear & Greed Index:** Statically displayed at **45 (Neutral)**.
*   **Design:** Presented in a clean, easy-to-read dashboard format.

### 3. User Input Section
*   **Form:**
    *   Birthdate input.
    *   Investment style selection (radio buttons: "공격" - Attack / "방어" - Defense).
*   **Button:** "운세 확인하기" to trigger the result generation.

### 4. Result Section
*   **Dynamic Generation:** The result is generated based on a custom algorithm.
*   **Algorithm:**
    1.  **Horoscope Score (0-50):** A score is calculated from the user's birthdate (mock logic).
    2.  **Market Score (0-50):** The Fear & Greed Index is used (currently fixed at 45).
    3.  **Total Score (0-100):** Horoscope Score + Market Score.
    4.  **Investment Attitude Mapping:** The total score is mapped to one of five attitudes:
        *   **81-100:** 적극 매수 (Active Buying)
        *   **61-80:** 수익 실현 (Profit Taking)
        *   **41-60:** 관망 (Wait and See)
        *   **21-40:** 리스크 관리 (Risk Management)
        *   **0-20:** 휴식 (Rest)
*   **Display:** The result is shown in a card that appears with a dramatic animation.

### 5. Monetization
*   **AdSense Banner:** A clearly defined, dedicated space at the bottom of the page for an advertisement banner.

## Tech Stack

*   **Styling:** Tailwind CSS (via CDN).
*   **Logic:** Vanilla JavaScript for interactivity, theme switching, and the result generation algorithm.

## Current Plan

*   **Step 1:** Update `blueprint.md` with the new Tailwind CSS-based plan.
*   **Step 2:** Replace the content of `index.html` to use Tailwind CSS classes and structure, including the AdSense area.
*   **Step 3:** Delete the old `style.css` file as it is no longer needed.
*   **Step 4:** Rewrite `main.js` to implement the new result algorithm, theme switching for Tailwind, and the dramatic animation for the result card.
