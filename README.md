# GeeksForGeeks Solutions Repository

This repository contains solutions to various problems from GeeksforGeeks (GFG). The solutions are organized by difficulty and problem categories, allowing easy access to each problem's solution.  
> **My GeeksforGeeks profile**: [RunarokHrafn](https://www.geeksforgeeks.org/user/runarokhrafn/)

---

## Table of Contents

1. [Problem Source](#problem-source)  
2. [Automation for Uploads](#automation-for-uploads)  
3. [Issues Faced](#issues-faced)  
4. [Trick to Find Missing Files](#trick-to-find-missing-files)  
5. [Milestones](#milestones)

---

## Problem Source

All problems in this repository are sourced from GeeksforGeeks. You can explore the problems [here](https://www.geeksforgeeks.org/explore?page=1&sortBy=difficulty).

## Automation for Uploads

The upload of solutions to this repository was automated using a Chrome extension called [GFG to GitHub](https://chromewebstore.google.com/detail/gfg-to-github/gojabhkegjnlnklkkpkglaembhlknkgk). This extension helps streamline the process of saving solutions to GitHub.  
> The repository used for the automation is available at [GfG-To-GitHub](https://github.com/AtharvaNanavate/GfG-To-GitHub).

---

## Issues Faced

During the automation process, a common issue occurred where the browser tab was closed after solving a problem. This caused the automation to only create the `README.md` file for some problems, but not the corresponding code file.  
> While this could have been avoided by waiting a minute or two before closing the tab, I was initially unaware of the issue, leading to several problems missing their code files.

---

## Trick to Find Missing Files

To find problems that were missing code files, I followed this method:

1. **Go to the repository directory**: Navigate to `https://github.com/Runarok/GeeksForGeeks-solutions` [{>..}](https://github.com/Runarok/GeeksForGeeks-solutions).
2. **Change `hub` to `ingest` in the URL**: Replace `hub` with `ingest` in the URL: `https://gitingest.com/Runarok/GeeksForGeeks-solutions` [{>..}](https://gitingest.com/Runarok/GeeksForGeeks-solutions).
3. **Manually check the directory structure**: Go through the directory structure to identify missing code files. You can filter out `README.md` files using `*md` to exclude markdown files.
4. **Alternatively, ask ChatGPT**: You can paste the directory structure here and ask me to identify folders with missing code files.

Once missing code files are identified, follow these steps:

1. **Search browser history** (CTRL + H): Look for the folder name (e.g., "Array Search" for a folder named `Array Search`).
2. If history was cleared, visit [GeeksforGeeks Explore](https://www.geeksforgeeks.org/explore?page=1&sortBy=difficulty) and search for the respective problem.
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
- If the `array-subset.py` file is missing, visit the GeeksforGeeks page for "Array Subset", copy the code, and upload it to the `array-subset.py` file in the `Array Subset/` directory.

---

## Milestones

As of **31 JAN 2024**, I decided to update the start of a new section which shows **my progress with all difficulty levels and completion of tagged problems**.
- **30 JAN 2024**: Completed all "Hard" tagged problems.
- **31 JAN 2024**: Completed all "Linked List" tagged problems.

> **Note**: As GeeksforGeeks continues to add new questions regularly, the progress of completing the tags may not be permanent. I may not have all the tagged problems completed at any given time, and updates will be made to reflect the additions, but not on a fixed schedule.

---

## Motivation

I’m not doing this to create a portfolio or anything like that. I simply enjoy the satisfaction of completing something, much like achieving 100% in a game. I also love coding and the learning process. My goal is to work through all the problems on GeeksforGeeks, gradually improving my skills along the way.  
> I understand I won’t get as good as I could if I stress myself out, so I’m focusing on enjoying the journey and learning at my own pace.

---

> This repository idea was inspired by [iamarghamallick's repository](https://github.com/iamarghamallick), whose solutions you can view [here](https://github.com/iamarghamallick/GeeksforGeeks-Solutions/tree/main).
