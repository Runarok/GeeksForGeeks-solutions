//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    long long differentWaysToSpell(string N) {
        // Initialize result as 1 and counter for consecutive characters as 0
        long long r{ 1 }, c{};

        // Loop through the string starting from the second character
        for ( size_t i{ 1 }; i < N.size(); ++i ) {
            // If the current character is the same as the previous one, increment the counter
            if ( N[ i ] == N[ i-1 ] ) {
                ++c;
            }
            // If characters are different, update the result and reset the counter
            else {
                r *= pow( 2, c );
                c = 0;
            }
        }

        // Multiply the result with the final value of consecutive same characters
        return r * pow( 2, c );
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string N;
        
        cin>>N;

        Solution ob;
        cout << ob.differentWaysToSpell(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends