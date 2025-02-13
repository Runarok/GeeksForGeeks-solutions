//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function template for C++

class Solution {
  public:
    // Function to pick the minimum sum of values.
    int pickValues(vector<int> arr) {
       
       // If the array has only one element, return it
       if (arr.size() == 1) {
           return arr[0];
       }
       // If the array has two elements, return the minimum of the two
       else if (arr.size() == 2) {
           return min(arr[0], arr[1]);
       }
       // If the array has three elements, return the minimum among them
       if (arr.size() == 3) {
           return min({arr[0], arr[1], arr[2]});
       }

       // Create a dp array to store the minimum sum at each index
       int dp[arr.size()];
       dp[0] = arr[0];
       dp[1] = arr[1];
       dp[2] = arr[2];
       dp[3] = arr[3];

       // Iterate through the array and calculate the minimum sum for each index
       for (int i = 4; i < arr.size(); i++) {
           dp[i] = min(dp[i - 1], min(dp[i - 2], min(dp[i - 3], dp[i - 4]))) + arr[i];
       }

       // Return the minimum value among the last four elements in the dp array
       return min({dp[arr.size() - 4], dp[arr.size() - 3], dp[arr.size() - 2], dp[arr.size() - 1]});
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
        cout << ob.pickValues(nums) << endl;
    }
    return 0;
}

// } Driver Code Ends