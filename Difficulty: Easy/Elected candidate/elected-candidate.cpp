//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    string electionWinner(vector<string>& arr) {
        unordered_map<string, int> voteCount;
        
        // Count the votes for each candidate
        for (const string& candidate : arr) {
            voteCount[candidate]++;
        }
        
        // Find the candidate with the maximum votes
        string winner;
        int maxVotes = 0;
        
        for (const auto& entry : voteCount) {
            if (entry.second > maxVotes) {
                maxVotes = entry.second;
                winner = entry.first;
            }
        }
        
        return winner;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string str;
        getline(cin, str);

        stringstream ss(str);
        vector<string> arr;
        string s;
        while (ss >> s) {
            arr.push_back(s);
        }
        Solution ob;
        cout << ob.electionWinner(arr) << endl;
    }
}

// } Driver Code Ends