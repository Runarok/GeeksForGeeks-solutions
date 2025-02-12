//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

#include <cmath>

class Solution {
  public:
    int findHeightOrDistance(char type, double value, double angle) {
        // Convert the angle from degrees to radians
        double angleInRadians = tan(angle * 3.14 / 180.0);

        // If 'type' is 'd', calculate height using: Height = Distance * tan(angle)
        // Otherwise, calculate distance using: Distance = Height / tan(angle)
        return static_cast<int>(floor(type == 'd' ? value * angleInRadians : value / angleInRadians));
    }
};
//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        char ch;
        double a, b;
        cin >> ch >> a >> b;
        Solution ob;
        cout << ob.findHeightOrDistance(ch, a, b) << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends