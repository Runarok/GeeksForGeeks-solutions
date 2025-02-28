//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// Function to check if the result vector gives the correct partition.
bool check(vector<int>& arr, vector<int>& result) {
    // Calculate the left sum (sum of elements before the insertion point).
    long long ls = accumulate(arr.begin(), arr.begin() + result[1] - 1, 0LL);

    // Calculate the right sum (sum of elements after the insertion point).
    long long rs = accumulate(arr.begin() + result[1] - 1, arr.end(), 0LL);

    // Adjust the sums based on whether x is added to the left or right subarray.
    if (result[2] == 1) {
        rs += result[0]; // Add x to the right subarray.
    } else {
        ls += result[0]; // Add x to the left subarray.
    }

    // Check if the two sums are equal.
    return ls == rs;
}


// } Driver Code Ends

class Solution {
  public:
    // Function to find the equal sum partition.
    vector<int> EqualSum(vector<int>& a) {
        // Initialize the result vector to hold the minimum difference, index, and the partition side (1 or 2)
        vector<int> ans(3);
        
        // Initialize prefix sum and suffix sum
        int prefix_sum = 0;
        int suffix_sum = accumulate(a.begin(), a.end(), 0);
        
        // Variable to track the minimum difference between prefix and suffix sums
        int mini = INT_MAX;

        // Iterate through the array to find the point where the sum difference is minimized
        for (int i = 0; i < a.size() - 1; ++i) {
            prefix_sum += a[i]; // Add current element to prefix sum
            suffix_sum -= a[i]; // Subtract current element from suffix sum

            // Calculate the absolute difference between the prefix and suffix sums
            int diff = abs(suffix_sum - prefix_sum);
            
            // If the difference is smaller than the previous minimum, update the result
            if (diff < mini) {
                mini = diff;
                if (suffix_sum > prefix_sum) {
                    // Suffix sum is greater, assign partition 2
                    ans = {mini, i + 2, 2};
                } else {
                    // Prefix sum is greater, assign partition 1
                    ans = {mini, i + 2, 1};
                }
            }
        }

        // Return the result: minimum difference, index, and partition side (1 or 2)
        return ans;
    }
};


//{ Driver Code Starts.

int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts); // Get the number of test cases.

    while (t--) {
        string line;
        getline(cin, line);
        stringstream ss(line);
        vector<int> nums;
        int num;

        // Parse the input into the nums array.
        while (ss >> num) {
            nums.push_back(num);
        }

        // Call the EqualSum function from the Solution class.
        Solution ob;
        vector<int> result = ob.EqualSum(nums);

        // Check the result and print "true" or "false" based on the validation.
        if (check(nums, result)) {
            cout << "true";
        } else {
            cout << "false";
        }
        cout << "\n~\n";
    }
    return 0;
}

// } Driver Code Ends