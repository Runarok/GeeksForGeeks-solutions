//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int maxSumBS(vector<int>& arr) {
        int n = arr.size();
        
        // Create two dp arrays, dp1 for increasing subsequences and dp2 for decreasing subsequences
        vector<int> dp1(n), dp2(n);
        
        // Calculate the maximum sum of increasing subsequences (dp1)
        for (int i = 0; i < n; i++) {
            dp1[i] = arr[i]; // Initialize dp1 with the element itself
            for (int j = i - 1; j >= 0; j--) {
                if (arr[i] > arr[j]) { // If the current element is greater, extend the subsequence
                    dp1[i] = max(dp1[i], dp1[j] + arr[i]);
                }
            }
        }
        
        // Calculate the maximum sum of decreasing subsequences (dp2)
        for (int i = n - 1; i >= 0; i--) {
            dp2[i] = arr[i]; // Initialize dp2 with the element itself
            for (int j = i + 1; j < n; j++) {
                if (arr[i] > arr[j]) { // If the current element is greater, extend the subsequence
                    dp2[i] = max(dp2[i], dp2[j] + arr[i]);
                }
            }
        }

        // Initialize the answer with the maximum sum of increasing subsequence (dp1) and decreasing subsequence (dp2)
        int ans = max(dp2[0], dp1[n - 1]);

        // Check for the combination of both increasing and decreasing subsequences
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n && arr[i] > arr[j]; j++) {
                ans = max(ans, dp1[i] + dp2[j]); // Update the answer with the combined subsequence sum
            }
        }

        return ans; // Return the maximum sum of the bitonic subsequence
    }
};


//{ Driver Code Starts.

int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts);

    while (t--) {
        string line;
        getline(cin, line);
        stringstream ss(line);
        vector<int> nums;
        int num;
        while (ss >> num) {
            nums.push_back(num);
        }
        Solution ob;
        int res = ob.maxSumBS(nums);

        cout << res << endl;
    }
}

// } Driver Code Ends