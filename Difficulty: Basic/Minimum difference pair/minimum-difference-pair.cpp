//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int minimumDifference(vector<int>& arr) {
        // Sort the array to check differences between consecutive elements
        sort(arr.begin(),arr.end());
        
        int min = arr[arr.size()-1];  // Initialize minimum with the last element value
        
        // Iterate through the array to find the minimum difference between consecutive elements
        for(int i = 1; i < arr.size(); i++) {
            if(arr[i] - arr[i - 1] <= min) {
                min = arr[i] - arr[i - 1];  // Update minimum if a smaller difference is found
            }
        }
        
        return min;  // Return the minimum difference
    }
};


//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int n;
        cin >> n;
        vector<int> nums(n);
        for (int i = 0; i < nums.size(); i++)
            cin >> nums[i];
        Solution ob;
        int ans = ob.minimumDifference(nums);
        cout << ans << "\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends