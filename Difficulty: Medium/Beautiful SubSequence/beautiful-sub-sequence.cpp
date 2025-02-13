//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    /**
     * Function to find the longest subsequence where each element is divisible by the previous one.
     * @param arr The input array of integers.
     * @return The length of the longest subsequence.
     */
    int longest_Subsequence(vector<int>& arr) {
        int n = arr.size();
        
        // Sort the array to ensure that we check for divisibility in increasing order
        sort(arr.begin(), arr.end());

        // dp[i] will store the length of the longest subsequence ending at index i
        vector<int> dp(n, 1);
        
        // Find the longest subsequence where each pair satisfies the divisibility condition
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                // If arr[i] is divisible by arr[j], we can extend the subsequence
                if (arr[i] % arr[j] == 0) {
                    dp[i] = max(dp[i], dp[j] + 1);
                }
            }
        }
        
        // The result is the maximum length in dp array
        int result = *max_element(dp.begin(), dp.end());
        
        // If the result is 1, it means no valid subsequence of length > 1 exists
        return result == 1 ? -1 : result;
    }
};


//{ Driver Code Starts.
int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts);
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        Solution obj;
        cout << obj.longest_Subsequence(arr) << endl;
        cout << "~" << endl;
    }
}

// } Driver Code Ends