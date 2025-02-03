//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int maxValue(vector<int> &arr) {
        int n = arr.size();
        int i = 0, j = n - 1;
        int ans = 0;
        
        // Iterate with two pointers, one starting at the beginning and the other at the end
        while (i <= j) {
            // Calculate the area between the two pointers and update the answer if it's larger
            ans = max(ans, (j - i) * min(arr[i], arr[j]));
            
            // Move the pointer pointing to the smaller value
            if (arr[i] < arr[j]) {
                i++;
            } else {
                j--;
            }
        }
        
        // Return the maximum value found
        return ans;
    }
};

//{ Driver Code Starts.

int main() {
    // your code goes here
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string input;
        getline(cin, input);
        stringstream ss(input);
        int num;
        vector<int> arr;
        while (ss >> num)
            arr.push_back(num);

        Solution ob;
        cout << ob.maxValue(arr) << endl;
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends