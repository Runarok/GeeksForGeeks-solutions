//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
public:
    vector<int> distributeGift(vector<int> arr[], int n) {
        bool gifts[n] {0};  // Array to track whether a gift has been assigned
        vector<int> result;  // Vector to store the result (final distribution of gifts)

        // Loop through each person
        for(int i = 0; i < n; i++) {
            // Loop through the preferences of each person
            for(int j = 0; j < arr[i].size(); j++) {
                // If the gift has not been assigned yet
                if(gifts[arr[i][j] - 1] == false) {
                    result.push_back(arr[i][j]);  // Assign the gift to the person
                    gifts[arr[i][j] - 1] = true;  // Mark the gift as taken
                    break;  // Move to the next person
                }
            }
        }

        return result;  // Return the final distribution of gifts
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> arr[n];
        for (int i = 0; i < n; i++) {
            arr[i].assign(n, 0);
            for (int j = 0; j < n; j++) {
                cin >> arr[i][j];
            }
        }
        Solution ob;
        auto ans = ob.distributeGift(arr, n);
        for (auto gift : ans) {
            cout << gift << " ";
        }
        cout << "\n";
    
cout << "~" << "\n";
}
    return 0;
}


// } Driver Code Ends