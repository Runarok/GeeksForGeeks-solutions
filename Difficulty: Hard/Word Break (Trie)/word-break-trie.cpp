//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function template for C++

#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
    int wordBreak(string A, vector<string> &B) {
        int n = A.length();
        unordered_set<string> dict(B.begin(), B.end());

        // dp[i] represents whether the substring A[0...i] can be segmented
        vector<int> dp(n + 1, 0);
        dp[0] = 1; // Empty string can always be segmented

        for (int i = 1; i <= n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (dp[j] && dict.find(A.substr(j, i - j)) != dict.end()) {
                    // If substring A[j...i] is in the dictionary
                    dp[i] = 1;
                    break;
                }
            }
        }

        return dp[n];
    }
};


//{ Driver Code Starts.
int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<string> dict;
        for(int i=0;i<n;i++){
            string S;
            cin>>S;
            dict.push_back(S);
        }
        string line;
        cin>>line;
        Solution ob;
        cout<<ob.wordBreak(line, dict)<<"\n";
    
cout << "~" << "\n";
}
}

// } Driver Code Ends