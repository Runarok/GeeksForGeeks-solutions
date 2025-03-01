//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++
// Back-end complete function Template for C++

class Solution {
  public:
    int arrayTransform(vector<int> &arr, int k) {
        // Create a map to store the frequency of each element in the array
        unordered_map<int, int> mp;
        for(auto i : arr) {
            mp[i]++;  // Increment the count for each element
        }
        
        int ans = 0;
        
        // Apply the transformation k times
        for(int i = 0; i < k; i++) {
            // Store the count of the current element (0) in a variable 'a'
            int a = mp[0];
            
            // Iterate through the possible values of the array elements (1 to 80)
            // Shift the frequency of each element to the next element
            for(int j = 1; j <= 80; j++) {
                int b = mp[j];
                mp[j] = a;  // Update the frequency of current element to previous element
                a = b;  // Update the previous element to current element
            }
            
            // Set the frequency of element 0 to 'a' after the shift
            mp[0] = a;
            
            // Add the frequency of element 0 to element 1 (since that's part of the transformation)
            mp[1] += a;
        }
        
        // Calculate the total sum of frequencies of all elements (0 to 80)
        for(int i = 0; i <= 80; i++) {
            ans += mp[i];  // Add the frequency of each element to the answer
        }
        
        return ans;  // Return the final result
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
        stringstream ss(input);
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        getline(cin, input);
        int k = stoi(input);

        Solution ob;
        int res = ob.arrayTransform(arr, k);
        cout << res << '\n';
    }
    return 0;
}
// } Driver Code Ends