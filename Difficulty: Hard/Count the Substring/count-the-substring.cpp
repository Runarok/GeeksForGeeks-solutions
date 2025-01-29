//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    long long countSubstring(string s) {
        long long n = s.size(), cnt = n, minus = 0;
        long long dp[2 * n + 1] = {0};

        // Count prefix sum adjustments
        for (long long i = 0; i < n; i++) {
            cnt += (s[i] == '1') ? 1 : -1;
            if (cnt <= n) minus++;
            dp[cnt]++;
        }

        long long idx = n, ans = 0;

        // Calculate the valid substrings
        for (long long i = 0; i < n; i++) {
            ans += n - i - minus;

            if (s[i] == '1') {
                idx++;
                dp[idx]--;
                minus += dp[idx];
            } else {
                minus--;
                minus -= dp[idx];
                idx--;
                dp[idx]--;
            }
        }

        return ans;
    }
};
//{ Driver Code Starts.
int main() {
 ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL); 
 int t=1;
 cin>>t;
 for(int i=1;i<=t;i++){
    string S;
    cin>>S;
    Solution obj;
    long long ans =obj.countSubstring(S);
    cout<<ans<<endl;
 
cout << "~" << "\n";
}
}
// } Driver Code Ends