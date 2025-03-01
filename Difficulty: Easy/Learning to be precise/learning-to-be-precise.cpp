//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

#include <iostream>
#include <iomanip>
using namespace std;

void precise(float a, float b) {
    // Perform division a / b
    float result = a / b;

    // Print result in default precision followed by fixed precision (3 decimal places)
    cout << result << " " << fixed << setprecision(3) << result << endl;
}



//{ Driver Code Starts.
void precise(float, float); // prototype

// Driver Code
int main() {
    int t;
    cin >> t;
    while (t--) {
        float a, b;
        cin >> a >> b; // Taking input of a and b in floating types
        precise(a, b);

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends