//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to calculate the number of ways to increase LCS by 1
    int waysToIncreaseLCSBy1(int N1, string S1, int N2, string S2) {
        // dp table for storing LCS values from left to right
        vector<vector<int>> dpl(N1 + 1, vector<int> (N2 + 1));
        
        // Fill the dp table from top-left to bottom-right
        for (int i = 0; i < N1; ++i) {
            for (int j = 0; j < N2; ++j) {
                dpl[i + 1][j + 1] = (S1[i] == S2[j]) ? dpl[i][j] + 1 : max(dpl[i + 1][j], dpl[i][j + 1]);
            }
        }
        // dpl[i][j] represents the LCS of S1[0...i-1] and S2[0...j-1]
        
        // dp table for storing LCS values from right to left
        vector<vector<int>> dpr(N1 + 1, vector<int> (N2 + 1));
        
        // Fill the dp table from bottom-right to top-left
        for (int i = N1; i; --i) {
            for (int j = N2; j; --j) {
                dpr[i - 1][j - 1] = (S1[i - 1] == S2[j - 1]) ? dpr[i][j] + 1 : max(dpr[i - 1][j], dpr[i][j - 1]);
            }
        }
        // dpr[i][j] represents the LCS of S1[i...end] and S2[j...end]
        
        int ans = 0;
        // Insert array to track characters that can be inserted to increase LCS
        vector<array<bool, 26>> Insert(N1 + 1);
        
        // Find valid positions where we can insert a character from S2 to increase LCS by 1
        for (int i = 0; i <= N1; ++i) {
            for (int j = 0; j < N2; ++j) {
                if (dpl[i][j] + dpr[i][j + 1] == dpl[N1][N2]) {
                    // Mark the character S2[j] as a valid insertion
                    Insert[i][S2[j] - 'a'] = 1;
                }
            }
        }
        
        // Count the number of valid insertions
        for (auto &v : Insert) {
            ans += accumulate(v.begin(), v.end(), 0);
        }
        
        return ans;  // Return the total number of valid ways to increase LCS by 1
    }
};



//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int n1,n2;
        cin>>n1>>n2;
        string s1,s2;
        cin>>s1>>s2;
        Solution ob;
        cout << ob.waysToIncreaseLCSBy1(n1,s1,n2,s2)<<endl;
    
cout << "~" << "\n";
}
    return 0; 
}
// } Driver Code Ends