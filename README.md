# GeeksForGeeks Solutions Repository

This repository contains solutions to various problems from GeeksforGeeks (GFG). The solutions are organized by difficulty and problem categories, allowing easy access to each problem's solution.  
> **My GeeksforGeeks profile**: [RunarokHrafn](https://www.geeksforgeeks.org/user/runarokhrafn/)

---

## Table of Contents

1. [Problem Source & Automation for Uploads](#problem-source--automation-for-uploads)  
2. [Issues Faced & Trick to Find Missing Files](#issues-faced--trick-to-find-missing-files)  
3. [Milestones & Motivation](#milestones--motivation)

---

## Problem Source & Automation for Uploads

All problems in this repository are sourced from GeeksforGeeks. You can explore the problems [here](https://www.geeksforgeeks.org/explore?page=1&sortBy=difficulty).

The upload of solutions to this repository was automated using a Chrome extension called [GFG to GitHub](https://chromewebstore.google.com/detail/gfg-to-github/gojabhkegjnlnklkkpkglaembhlknkgk). This extension streamlines the process of saving solutions to GitHub.
> The Open Source Repository used for automation is available at [GfG-To-GitHub](https://github.com/AtharvaNanavate/GfG-To-GitHub).

---

## Issues Faced & Trick to Find Missing Files

During the automation process, I encountered an issue where the browser tab was closed too soon after solving a problem. As a result, only the `README.md` file was created for some problems, but the corresponding code files were missing. 

### How I Identified Missing Files:
1. **Go to the repository directory**: Navigate to [GeeksForGeeks-solutions](https://github.com/Runarok/GeeksForGeeks-solutions).
2. **Modify the URL**: Change `hub` to `ingest` in the URL: [gitingest.com/Runarok/GeeksForGeeks-solutions](https://gitingest.com/Runarok/GeeksForGeeks-solutions).
3. **Manually check directory structure**: Identify missing code files by excluding markdown files (`*md`).
4. **Alternatively, ask ChatGPT**: Paste the directory structure here, and I can help identify missing code files.

### Steps to Recover Missing Code:
1. **Search browser history** (CTRL + H): Look for the problem folder name (e.g., "Array Search").
2. If history was cleared, visit [GeeksforGeeks Explore](https://www.geeksforgeeks.org/explore?page=1&sortBy=difficulty) to search for the respective problem.
3. **Copy the code**: Go to the problem's page, copy the code, and manually upload it to the appropriate file in the respective folder.

> ### Example Directory Structure:
<pre>
└── Runarok-GeeksForGeeks-solutions/
    └── Difficulty: Basic/
        ├── Array Search/
        │   └── README.md
        └── Array Subset/
            ├── README.md
            └── array-subset.py
</pre>

In this example:
- If the `array-search.py` file is missing, go to the GeeksforGeeks page for "Array Search", copy the code, and manually upload it to the `array-search.py` file in the `Array Search/` directory.

---

## Milestones & Motivation

Since GeeksforGeeks regularly adds new questions, my progress may not be fixed. Updates will be made as needed, but not on a fixed schedule.

### Milestones

- **24 JAN 2024**: Completed all "[Google](https://www.geeksforgeeks.org/explore?page=1&company=Google&sortBy=submissions)" tagged problems.
> **30 JAN to 1 FEB 2024**: Completed the remaining problems from Tags that were left half-finished till date, as I was totally free these whole days.
- **30 JAN 2024**: Completed all "[Hard](https://www.geeksforgeeks.org/explore?page=1&difficulty=Hard&sortBy=accuracy)" tagged problems.  
- **31 JAN 2024**: Completed all "[Linked List](https://www.geeksforgeeks.org/explore?page=1&category=Linked%20List&sortBy=accuracy)" tagged problems.  
- **1 FEB 2024**: Completed "[SDE Sheet](https://www.geeksforgeeks.org/explore?page=1&sprint=a663236c31453b969852f9ea22507634&sortBy=accuracy&sprint_name=SDE%20Sheet)" and "[Beginner's DSA Sheet](https://www.geeksforgeeks.org/explore?page=1&sprint=ca8ae412173dbd8346c26a0295d098fd&sortBy=accuracy&sprint_name=Beginner%27s%20DSA%20Sheet)".  

### Motivation
I’m not doing this to create a portfolio or for external validation. I simply enjoy the satisfaction of completing something, similar to achieving 100% in a game. I also love coding and the learning process. My goal is to work through all the problems on GeeksforGeeks, improving my skills as I go. I focus on enjoying the journey and learning at my own pace rather than stressing myself out.

> This repository idea was inspired by [iamarghamallick's repository](https://github.com/iamarghamallick), whose solutions you can view [here](https://github.com/iamarghamallick/GeeksforGeeks-Solutions/tree/main).
