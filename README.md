# GeeksForGeeks Solutions Repository

This repository contains solutions to various problems from GeeksforGeeks (GFG). The solutions are organized by difficulty and problem categories, allowing easy access to each problem's solution.
> My GeeksForGeeks profile : [RunarokHrafn](https://www.geeksforgeeks.org/user/runarokhrafn/).

## Table of Contents

1. [Problem Source](#problem-source)
2. [Automation for Uploads](#automation-for-uploads)
3. [Issues Faced](#issues-faced)
4. [Trick to Find Missing Files](#trick-to-find-missing-files)
5. [Progress Update](#progress-update)

---

## Problem Source

All problems in this repository are sourced from GeeksforGeeks. You can explore the problems [here](https://www.geeksforgeeks.org/explore?page=1&sortBy=difficulty).

## Automation for Uploads

The upload of solutions to this repository was automated using a Chrome extension called [GFG to GitHub](https://chromewebstore.google.com/detail/gfg-to-github/gojabhkegjnlnklkkpkglaembhlknkgk). This extension helps streamline the process of saving solutions to GitHub.
> The repository used for the automation is available at [GfG-To-GitHub](https://github.com/AtharvaNanavate/GfG-To-GitHub).

## Issues Faced

During the automation process, a common issue was closing the browser tab after solving a problem. This caused the automation to create only the `README.md` file for some problems and not the code file itself. Although this could have been avoided by closing the tab after a minute or two, I was initially unaware of the issue, and as a result, a few problems were missing their code files.

---

### Trick to Find Missing Files

To find the problems that were missing their code files, I followed this method:

1. Go to the respective repository directory: `https://github.com/Runarok/GeeksForGeeks-solutions` [{>..}](https://github.com/Runarok/GeeksForGeeks-solutions).
2. Change `hub` to `ingest` in the URL: `https://gitingest.com/Runarok/GeeksForGeeks-solutions` [{>..}](https://gitingest.com/Runarok/GeeksForGeeks-solutions).
3. Manually go through the directory structure to find any missing code files. You can exclude `README.md` files by using `*md` to filter out the markdown files.
4. Alternatively, you can ask ChatGPT to find missing code files by pasting the directory structure and asking it to identify folders with missing code files.

Once the missing code files are found:

1. Go to the browser history (CTRL + H).
2. Search for the folder name in history (e.g., "Array Search" for a folder named `Array Search`).
3. If the history was cleared, visit [GeeksforGeeks Explore](https://www.geeksforgeeks.org/explore?page=1&sortBy=difficulty) and search for the respective problem.
4. Copy the code from the problem page and paste it into the new file created in the respective folder.

### Example Directory Structure:
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

- If the `array-search.py` file is missing, you would need to go to the GeeksforGeeks page for "Array Search", copy the code, and manually upload it to the `array-search.py` file in the `Array Search/` directory.

- If the `array-subset.py` file is missing, you would need to go to the GeeksforGeeks page for "Array Subset", copy the code, and manually upload it to the `array-subset.py` file in the `Array Subset/` directory.

These steps can be followed to resolve any missing code files in the repository.

### Progress Update

I’m not doing this to create a portfolio or anything like that. I just enjoy the feeling of completing something, much like achieving 100% in a game. I also enjoy coding and the learning process, and my goal is simply to work through all the problems on GeeksforGeeks, one way or another, while improving along the way. I know I won’t get as good as I could if I stress myself out, so I’m focusing on enjoying the journey and learning at my own pace.

---

As of **31 JAN 2024**, I decided to update the start of a new section which shows **my progress with all difficulty levels and completion of tagged problems, focusing on gradual improvement over time**.

---

**31 JAN 2024 - Completed all Hard tagged Programs**

> This repository idea was inspired by [iamarghamallick's repository](https://github.com/iamarghamallick), whose solutions you can view [here](https://github.com/iamarghamallick/GeeksforGeeks-Solutions/tree/main).
