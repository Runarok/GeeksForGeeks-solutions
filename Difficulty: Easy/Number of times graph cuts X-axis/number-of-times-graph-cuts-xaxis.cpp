//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to count how many times the array touches the x-axis
    int touchedXaxis(vector<int>& arr) {
        int n = arr.size();   // Get the size of the array
        int count = 0;         // Initialize count to track x-axis touches
        
        int prefsum = arr[0];  // Initialize the prefix sum with the first element
        
        // Loop through the array starting from the second element
        for (int i = 1; i < n; i++) {
            // Check if the sum of prefix and current element crosses the x-axis (i.e., sign change or zero)
            if ((prefsum > 0 && prefsum + arr[i] < 0) || 
                (prefsum < 0 && prefsum + arr[i] > 0) || 
                (prefsum + arr[i] == 0)) {
                count++;  // Increment the count when the x-axis is touched
            }
            
            prefsum += arr[i];  // Update the prefix sum
        }
        
        // Return the total count of x-axis touches
        return count;
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string line;
        getline(cin, line);
        int num;
        stringstream ss(line);
        vector<int> arr;
        while (ss >> num) {
            arr.push_back(num);
        }
        Solution ob;
        int ans = ob.touchedXaxis(arr);
        cout << ans << endl;
        cout << "~\n";
    }
}
// } Driver Code Ends