//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to find the floor value of x in a sorted array
    int lowerBound(const vector<int> &arr, int x) {
        int s = 0;
        int e = arr.size() - 1;
        int ans = -1;

        while (s <= e) {
            int mid = s + (e - s) / 2;

            if (arr[mid] == x) {
                return arr[mid];  // Exact match is found
            } else if (arr[mid] < x) {
                ans = arr[mid];  // Potential floor value
                s = mid + 1;
            } else {
                e = mid - 1;
            }
        }

        return ans;  // Return the floor value (or -1 if not found)
    }

    // Function to find the ceiling value of x in a sorted array
    int upperBound(const vector<int> &arr, int x) {
        int s = 0;
        int e = arr.size() - 1;
        int ans = -1;

        while (s <= e) {
            int mid = s + (e - s) / 2;

            if (arr[mid] == x) {
                return arr[mid];  // Exact match is found
            } else if (arr[mid] < x) {
                s = mid + 1;
            } else {
                ans = arr[mid];  // Potential ceil value
                e = mid - 1;
            }
        }

        return ans;  // Return the ceil value (or -1 if not found)
    }

    // Function to check if the array is balanced for a given x
    bool isBalanced(vector<int>& arr, int x) {
        // Sort the array for proper binary search
        sort(arr.begin(), arr.end());

        // Find the floor and ceil values of x
        int floorValue = lowerBound(arr, x);
        int ceilValue = upperBound(arr, x);

        // Case when no valid floor or ceil exists
        if (floorValue == -1 && ceilValue == -1) {
            return false;  // No valid floor or ceil found
        }

        // If only floorValue is valid and ceilValue is not, return balanced
        if (floorValue == -1) {
            return abs(ceilValue - x) == abs(ceilValue - x);  // Always true for boundary cases
        }

        // If only ceilValue is valid and floorValue is not, return balanced
        if (ceilValue == -1) {
            return abs(floorValue - x) == abs(floorValue - x);  // Always true for boundary cases
        }

        // Check if the absolute difference between floor and ceil values from x are equal
        return abs(floorValue - x) == abs(ceilValue - x);
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
        string ks;
        getline(cin, ks);
        int k = stoi(ks);
        Solution obj;
        bool res = obj.isBalanced(arr, k);
        if (res)
            cout << "true" << endl;
        else
            cout << "false" << endl;
        // cout << res << endl;
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends