//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//Back-end complete function Template for C++

class Solution {
  public:
    int maximum_sum(vector<int> &arr) {
        // Map to store the first and last occurrence of each element
        map<int, pair<int, int>> freq;
        int maxSum = 0, currSum = 0;
        vector<int> preSum(arr.size());

        // Calculate prefix sum and store the first and last occurrence of each element
        for(int i = 0; i < arr.size(); i++) {
            currSum += arr[i];
            preSum[i] = currSum;
            if(freq.find(arr[i]) == freq.end()) {
                // If element is encountered for the first time, store its index as first occurrence
                freq[arr[i]] = {i, -1};
            } else {
                // If element is encountered again, update its last occurrence
                freq[arr[i]].second = i;
            }
        }

        // Iterate through the frequency map to calculate the maximum sum
        for(auto i = freq.begin(); i != freq.end(); i++) {
            // If element has appeared more than once
            if(i->second.second != -1) {
                if(i->second.first == 0) {
                    // If the first occurrence is at the beginning, consider the sum until the last occurrence
                    maxSum = max(maxSum, preSum[i->second.second]);
                } else {
                    // Otherwise, consider the sum between the first and last occurrence
                    maxSum = max(maxSum, preSum[i->second.second] - preSum[i->second.first - 1]);
                }
            } else {
                // If element appears only once, consider its value as a potential maximum sum
                maxSum = max(maxSum, i->first);
            }
        }

        // Return the maximum sum found
        return maxSum;
    }
};

//{ Driver Code Starts.

vector<int> inputLine() {
    string str;
    getline(cin, str);
    stringstream ss(str);
    int num;
    vector<int> res;
    while (ss >> num) {
        res.push_back(num);
    }
    return res;
}

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr = inputLine();
        Solution ob;
        int max_sum = ob.maximum_sum(arr);
        cout << max_sum << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends