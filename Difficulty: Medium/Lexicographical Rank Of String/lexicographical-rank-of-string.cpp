//{ Driver Code Starts
// Initial Template for C++

// Lexicographical rank of the string
#include <bits/stdc++.h>

using namespace std;


// } Driver Code Ends
// User function Template for C++

#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

// Function to calculate factorial
long long factorial(int n) {
    long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Function to calculate the rank of the string
int RankMe(string &s) {
    int n = s.length();
    long long rank = 1;  // Start with rank 1

    // Frequency array to store the count of each character
    unordered_map<char, int> freq;

    // Fill frequency map
    for (char c : s) {
        freq[c]++;
    }

    // For each character, calculate how many permutations are lexicographically smaller
    for (int i = 0; i < n; i++) {
        // For each character smaller than s[i], calculate how many permutations can be made
        for (char c = 'A'; c < s[i]; c++) {
            if (freq[c] > 0) {
                freq[c]--;
                
                // Calculate the number of permutations for the remaining characters
                long long perm = factorial(n - i - 1);
                for (auto &p : freq) {
                    perm /= factorial(p.second);
                }

                rank += perm;
                freq[c]++;
            }
        }

        // Decrease frequency of the current character
        freq[s[i]]--;
    }

    return rank;
}


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;

    while (t--) {

        string str;
        cin >> str;

        cout << RankMe(str) << endl;

        cout << "~"
             << "\n";
    }

    return 0;
}

// } Driver Code Ends