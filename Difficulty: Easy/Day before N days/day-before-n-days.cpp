//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// Function to find the nth day relative to a given day
int nthDay(int d, int n) {
    // Calculate the nth day by subtracting n modulo 7 from d and ensuring the result is within the range [0,6]
    return (d - n % 7 + 7) % 7;
}



//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;
    while (t-- > 0) {
        int d, n;
        cin >> d >> n;
        cout << nthDay(d, n) << endl;
    }
}
// } Driver Code Ends