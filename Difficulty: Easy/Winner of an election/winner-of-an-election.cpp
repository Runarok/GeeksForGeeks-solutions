//{ Driver Code Starts
#include <algorithm>
#include <bits/stdc++.h>
#include <cstdlib>
#include <iostream>
#include <map>

using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to return the name of candidate that received maximum votes.
    vector<string> winner(vector<string> &arr) {
        unordered_map<string, int> wordCount;

        // Count occurrences of each candidate's name
        for (const string &word : arr) {
            wordCount[word]++;
        }

        string maxWord = "";
        int maxCount = 0;

        // Find the candidate with max votes
        for (const auto& pair : wordCount) {
            // If a higher vote count is found or same vote count with lexicographically smaller name
            if (pair.second > maxCount || (pair.second == maxCount && pair.first < maxWord)) {
                maxWord = pair.first;
                maxCount = pair.second;
            }
        }

        // Store the result first, then return it
        vector<string> result;
        result.push_back(maxWord);
        result.push_back(to_string(maxCount));
        return result;
    }
};


//{ Driver Code Starts.

vector<string> inputLine() {
    string str;
    getline(cin, str);
    stringstream ss(str);
    string s;
    vector<string> res;
    while (ss >> s) {
        res.push_back(s);
    }
    return res;
}

int main() {
    int t;
    cin >> t;
    cin.ignore();
    for (int i = 0; i < t; i++) {
        vector<string> arr = inputLine();
        Solution obj;
        vector<string> result = obj.winner(arr);

        cout << result[0] << " " << result[1] << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends