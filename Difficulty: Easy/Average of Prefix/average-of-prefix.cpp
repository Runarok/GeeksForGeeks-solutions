//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function template for C++

class Solution {
  public:
    // Function to calculate the prefix average of an array.
    vector<int> prefixAvg(vector<int> &arr) {
        // Vector to store the prefix averages
        vector<int> result;

        // Variable to accumulate the sum of elements as we iterate through the array
        int sum = 0;

        // Variable to store the current prefix average
        int avg = 0;

        // Iterate through the array
        for (int i = 0; i < arr.size(); i++) {
            // Add the current element to the running sum
            sum += arr[i];

            // Calculate the prefix average (integer division)
            avg = sum / (i + 1);

            // Add the calculated average to the result vector
            result.push_back(avg);
        }

        // Return the vector containing all prefix averages
        return result;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream s1(input);
        int num;
        while (s1 >> num) {
            arr.push_back(num);
        }
        Solution ob;
        vector<int> ans = ob.prefixAvg(arr);

        for (auto x : ans) {
            cout << x << " ";
        }
        cout << "\n";
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends