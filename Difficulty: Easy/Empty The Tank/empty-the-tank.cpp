//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    long long int minDaysToEmpty(long long int C, long long int l) {
         long long int cnt = C;
         int day = 1;
        
        // Loop until the container is empty
        while (true) {
            cnt += l;  // Add the load added every day
            
            if (cnt > C) {
                cnt = C;  // Ensure the container doesn't exceed capacity
            }
            
            cnt -= day;  // Subtract the amount emptied for that day
            
            if (cnt <= 0) {
                break;  // Stop when the container is empty
            }
            
            day++;  // Increment the day
        }
        
        return day;  // Return the number of days to empty the container
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int c, l;
        cin >> c;
        cin >> l;
        Solution ob;
        cout << ob.minDaysToEmpty(c, l) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends