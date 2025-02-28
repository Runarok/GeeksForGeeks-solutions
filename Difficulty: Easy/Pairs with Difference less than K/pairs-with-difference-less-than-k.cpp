//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int countPairs(vector<int>& arr, int k) {
        // Sort the array to enable two-pointer technique
        sort(arr.begin(), arr.end());
        
        // Initialize the count of valid pairs, start, and end pointers
        int cnt = 0;
        int s = 0; // Start pointer
        int e = 1; // End pointer
        
        // Traverse the array with the two-pointer approach
        while(e < arr.size()) {
            // If the difference between the elements at the end and start pointers is greater than or equal to k
            if(arr[e] - arr[s] >= k) {
                s++; // Move the start pointer to the right
            } else {
                // If the difference is less than k, count all valid pairs with the current end pointer
                cnt += (e - s);
                e++; // Move the end pointer to the right
            }
        }
        
        // Return the total count of valid pairs
        return cnt;
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
        Solution ob;
        int ans = ob.countPairs(arr, k);
        cout << ans << "\n";
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends