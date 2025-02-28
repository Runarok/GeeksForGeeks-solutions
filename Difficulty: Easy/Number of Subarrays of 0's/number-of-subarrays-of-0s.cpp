//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

long long int no_of_subarrays(int n, vector<int> &arr) {
    long long int count = 0;  // Variable to store the total count of subarrays
    long zeros = 0;  // Variable to track the consecutive zeros

    // Loop through the array
    for (int i = 0; i < n; i++) {
        // If the current element is zero
        if (arr[i] == 0) {
            zeros++;  // Increment the count of consecutive zeros
        } 
        else {
            // If a non-zero element is found, calculate the number of subarrays
            // that can be formed with the consecutive zeros
            count += (zeros * (zeros + 1)) / 2; 
            zeros = 0;  // Reset the count of consecutive zeros
        }
    }

    // Add the subarrays that can be formed from the remaining zeros at the end of the array
    count += (zeros * (zeros + 1)) / 2;

    return count;  // Return the total count of subarrays
}



//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << no_of_subarrays(n, arr) << endl;
    
cout << "~" << "\n";
}
}

// } Driver Code Ends