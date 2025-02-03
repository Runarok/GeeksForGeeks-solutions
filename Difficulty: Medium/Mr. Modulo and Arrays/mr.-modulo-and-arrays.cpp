//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int maxModValue(vector<int>& arr) {
        // Sort the array in non-decreasing order
        sort(arr.begin(), arr.end());
        
        int maxMod = 0;  // To keep track of the maximum mod value
        int n = arr.size();  // Get the size of the array
        
        // Loop through the array from the second-last element to the first
        for(int i = n - 2; i >= 0; i--) {
            // If the current element is greater than or equal to maxMod, break out of the loop
            if(maxMod >= arr[i]) break;

            // Skip if the current element is equal to the next element (duplicate)
            if(arr[i] == arr[i + 1]) continue;

            // Check mod values for multiples of arr[i] within the range [2 * arr[i], arr[i] + arr[n-1]]
            for(int j = 2 * arr[i]; j <= arr[i] + arr[n - 1]; j += arr[i]) {
                // Use lower_bound to find the index of the first element greater than or equal to j
                int idx = lower_bound(arr.begin(), arr.end(), j) - arr.begin();
                
                // Update maxMod with the maximum value found so far
                maxMod = max(maxMod, arr[idx - 1] % arr[i]);
            }  
        }
        
        // Return the maximum mod value found
        return maxMod;
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
        cout << obj.maxModValue(arr) << endl;
        cout << "~" << endl;
    }
}

// } Driver Code Ends