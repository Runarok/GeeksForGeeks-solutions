//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Helper function to check if a character is a vowel
    bool isVowel(char ch) {
        return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
    }

    // Recursive function to generate all valid subsequences
    void generateSubsequences(string &S, int length, set<string> &resultSet, 
                              string currentSubsequence, int index) {
        
        // Base case: If we have processed the entire string
        if (index >= length) {
            // Check if the subsequence starts with a vowel and ends with a consonant
            if (!currentSubsequence.empty() && isVowel(currentSubsequence[0]) && 
                !isVowel(currentSubsequence[currentSubsequence.size() - 1])) {
                resultSet.insert(currentSubsequence); // Add valid subsequence to the set
            }
            return;
        }
        
        // Include the current character in the subsequence
        generateSubsequences(S, length, resultSet, currentSubsequence + S[index], index + 1);

        // Exclude the current character and move to the next one
        generateSubsequences(S, length, resultSet, currentSubsequence, index + 1);
    }

    // Function to generate all possible subsequences that start with a vowel and end with a consonant
    set<string> allPossibleSubsequences(string S) {
        set<string> resultSet;
        string currentSubsequence = "";
        int length = S.length();
        
        // Start generating subsequences from index 0
        generateSubsequences(S, length, resultSet, currentSubsequence, 0);
        
        return resultSet;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        cin >> S;
        Solution ob;
        set<string> ans = ob.allPossibleSubsequences(S);
        if (ans.size() == 0)
            cout << -1 << endl;
        else {
            for (auto i : ans) cout << i << " ";
            cout << endl;
        }
    }
    return 0;
}

// } Driver Code Ends