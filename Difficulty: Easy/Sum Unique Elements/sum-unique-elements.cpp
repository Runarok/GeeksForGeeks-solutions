//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to calculate the sum of unique elements in the array
    int unique_elements(vector<int> &arr) {
        // Map to store the frequency of each element
        unordered_map<int, int> m;
        
        // Get the size of the array
        int n = arr.size();
        
        // Count the frequency of each element in the array
        for (int i = 0; i < n; i++) {
            m[arr[i]]++;
        }
        
        // Variable to store the sum of unique elements
        int sum = 0;
        
        // Iterate over the array to check if the element is unique
        for (int i = 0; i < n; i++) {
            if (m[arr[i]] == 1) {  // If the element occurs only once
                sum += arr[i];  // Add it to the sum
            }
        }
        
        // Return the sum of unique elements
        return sum;
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
        vector<int> v = inputLine();
        Solution obj;
        cout << obj.unique_elements(v) << endl;
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends