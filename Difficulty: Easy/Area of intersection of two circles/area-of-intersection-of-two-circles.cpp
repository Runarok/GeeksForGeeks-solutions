//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
#define PI 3.14
#include <cmath>
#include <algorithm>

class Solution {
  public:
    long long int intersectionArea(long double X1, long double Y1,
                                   long double R1, long double X2,
                                   long double Y2, long double R2) {
        
        // Calculate the distance between the centers of the two circles
        double d = sqrt((X2 - X1) * (X2 - X1) + (Y2 - Y1) * (Y2 - Y1));

        // If the distance between the centers is greater than or equal to the sum of the radii, there is no intersection
        if (d >= R1 + R2) return 0;

        // If one circle is completely inside the other
        if (d <= abs(R1 - R2)) {
            // Return the area of the smaller circle
            double smallerArea = PI * min(R1, R2) * min(R1, R2);
            return floor(smallerArea);
        }

        // Use the formula for the intersection area of two circles
        double a = R1 * R1 * acos((d * d + R1 * R1 - R2 * R2) / (2 * d * R1));
        double b = R2 * R2 * acos((d * d + R2 * R2 - R1 * R1) / (2 * d * R2));
        double c = 0.5 * sqrt((-d + R1 + R2) * (d + R1 - R2) * (d - R1 + R2) * (d + R1 + R2));

        // Calculate the total intersection area and return its floor value
        double intersectionArea = a + b - c;

        return floor(intersectionArea);
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long double X1, Y1, R1, X2, Y2, R2;
        cin >> X1 >> Y1 >> R1 >> X2 >> Y2 >> R2;
        Solution ob;
        long long int ans = ob.intersectionArea(X1, Y1, R1, X2, Y2, R2);
        cout << ans << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends