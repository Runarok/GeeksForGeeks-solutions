//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to calculate the character at the given position in the infinite sequence
    char posInfinite(long long pos){
        // Define the initial string A, which forms the base of the infinite sequence
        const string A = "12345";
        
        // L_prev keeps track of the length of the sequence at each iteration
        long long L_prev = A.size();
        long long i = 0;

        // Loop to iteratively calculate the sequence lengths until the position is found
        while (pos > L_prev) {
            i++;  // Increment i to adjust the length in the current iteration
            long long L_current = 2 * L_prev + i;  // Calculate the new length

            // Check if the given position is within the current sequence's range
            if (pos <= L_current) {
                if (pos <= L_prev) {
                    // If the position is within the first half, recurse with the same position
                    return posInfinite(pos);
                } else if (pos > L_prev && pos <= L_prev + i) {
                    // If the position is in the inserted '$' part, return '$'
                    return '$';
                } else {
                    // If the position is in the second half, reverse the position and recurse
                    pos = L_current - pos + 1;
                    return posInfinite(pos);
                }
            }
            
            // Update L_prev for the next iteration
            L_prev = L_current;
        }
        
        // If the position is within the original string A, return the character
        return A[pos - 1];
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long pos;
        cin >>pos;
        Solution ob;
        cout<<ob.posInfinite(pos)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends