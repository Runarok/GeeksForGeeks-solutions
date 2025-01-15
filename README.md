# GeeksForGeeks Solutions Repository

This repository contains solutions to various problems from GeeksforGeeks (GFG). The solutions are organized by difficulty and problem categories, allowing easy access to each problem's solution.

## Problem Source

All problems in this repository are sourced from GeeksforGeeks. You can explore the problems [here](https://www.geeksforgeeks.org/explore?page=1&sortBy=difficulty).

> My GeeksForGeeks profile : [RunarokHrafn](https://www.geeksforgeeks.org/user/runarokhrafn/).

## Automation for Uploads

The upload of solutions to this repository was automated using a Chrome extension called [GFG to GitHub](https://chromewebstore.google.com/detail/gfg-to-github/gojabhkegjnlnklkkpkglaembhlknkgk). This extension helps streamline the process of saving solutions to GitHub.

The repository used for the automation is available at [GfG-To-GitHub](https://github.com/AtharvaNanavate/GfG-To-GitHub).

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

> This repository idea was inspired by [iamarghamallick's repository](https://github.com/iamarghamallick), whose solutions you can view [here](https://github.com/iamarghamallick/GeeksforGeeks-Solutions/tree/main).
