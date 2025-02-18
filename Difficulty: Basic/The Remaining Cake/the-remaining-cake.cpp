//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    double remainingCircle(double radius, int totalSegments, int usedSegments) {
        // Calculate the remaining arc length after using 'N' segments out of 'M' total segments.
        return 6.28 * radius * (usedSegments - totalSegments) / usedSegments;
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cout << fixed << setprecision(2);
    while (t--) {
        int N, M;
        double R;
        cin >> R >> N >> M;
        Solution ob;
        cout << ob.remainingCircle(R, N, M) << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends