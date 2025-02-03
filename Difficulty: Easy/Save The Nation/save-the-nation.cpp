//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
  public:
    string encryptString(string S) 
    {
        // Calculate the floor and ceiling values of the square root of the string's size
        int flor = floor(sqrt(S.size()));
        int cil = ceil(sqrt(S.size()));

        // Variables to store the number of rows (r) and columns (c)
        int r = 0, c = 0;

        // Determine the dimensions of the grid
        if (flor * flor == S.size()) {
            r = flor;
            c = flor;
        } else if (flor * cil == S.size()) {
            r = flor;
            c = cil;
        } else if (cil * flor == S.size()) {
            r = cil;
            c = flor;
        } else {
            r = cil;
            c = cil;
        }

        string ans = "";  // Variable to store the result

        // Traverse the matrix column-wise and construct the encrypted string
        for (int i = 0; i < c; i++) {
            int j = i;
            while (j < S.size()) {
                ans += S[j];  // Append the character to the result
                j += c;  // Move down in the same column
            }
            ans += " ";  // Add a space after each column's traversal
        }

        return ans;  // Return the encrypted string
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        
        cin>>S;

        Solution ob;
        cout << ob.encryptString(S) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends