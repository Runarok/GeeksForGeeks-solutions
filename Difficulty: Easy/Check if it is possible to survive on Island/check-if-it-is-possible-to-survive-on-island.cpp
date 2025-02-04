//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    int minimumDays(int S, int N, int M) {
        // Initialize the variable to track the days
        int days = 0;

        // Check for invalid conditions, like insufficient days or more milk required than available cows
        if (M * 7 > N * 6 && S > 6 || M > N) {
            return -1; // Return -1 if it's impossible to meet the requirements
        } else {
            // Calculate the minimum days needed for the given milk requirements
            days = (S * M) / N;
            if ((S * M) % N != 0) {
                // If the division leaves a remainder, increment the days by 1
                days++;
            }
        }

        // Return the calculated days
        return days;
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int S, N, M;
        cin >> S >> N >> M;

        Solution ob;
        cout << ob.minimumDays(S, N, M) << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends