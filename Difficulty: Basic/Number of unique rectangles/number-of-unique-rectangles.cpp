//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    int noOfUniqueRectangles(int N) {
        // Variable to store the count of unique rectangles
        int uniqueRectangles = 0;

        // Variables to track the divisor and previous count adjustment
        int divisor = 1;
        int previousCount = 0;

        // Loop through possible divisors up to the square root of N
        while (divisor <= std::sqrt(N)) {
            // Count rectangles with 'divisor' as one of the dimensions
            uniqueRectangles += (N / divisor);

            // Move to the next divisor
            divisor++;

            // Adjust the count to remove overcounted rectangles
            uniqueRectangles -= std::max(0, previousCount);
            previousCount++;
        }

        return uniqueRectangles;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;

        Solution ob;
        cout << ob.noOfUniqueRectangles(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends