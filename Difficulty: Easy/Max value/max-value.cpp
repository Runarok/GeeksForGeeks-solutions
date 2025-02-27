//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to find the maximum value among differences of (element - index).
    int maxVal(vector<int> &arr) {
        int minimumValue = INT_MAX; // To store minimum value of (arr[i] - i)
        int maximumValue = INT_MIN; // To store maximum value of (arr[i] - i)

        // Traverse the array to compute both minimum and maximum values
        for (int i = 0; i < arr.size(); i++) {
            int value = arr[i] - i; // Calculate element - index
            minimumValue = min(minimumValue, value); // Update minimum
            maximumValue = max(maximumValue, value); // Update maximum
        }

        // Maximum difference between any two (element - index) values
        return maximumValue - minimumValue;
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
        cout << ob.maxVal(nums) << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends