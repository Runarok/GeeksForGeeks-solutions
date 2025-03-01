//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
  public:
    vector<string> yShapedPattern(int N) {
        // Vector to store the pattern lines
        vector<string> v;
        
        // First half of the Y shape (upper part)
        for(int i = 0; i < N / 2; i++) {
            string line = "";

            // Add leading spaces before the arms of the Y
            for(int sp = 0; sp < i; sp++) {
                line += " ";
            }

            // Add the stars for the current row of the arms
            for(int j = 0; j < N + 1 - (2 * i); j++) {
                if(j == 0 || j == N - (2 * i)) {
                    line += "*";
                } else {
                    line += " ";
                }
            }

            // Add trailing spaces after the arms of the Y
            for(int sp = 0; sp < i; sp++) {
                line += " ";
            }

            // Add the formed line to the vector
            v.push_back(line);
        }

        // Second half of the Y shape (vertical part)
        for(int i = 0; i < N / 2; i++) {
            string line = "";

            // Add leading spaces before the vertical part of the Y
            for(int sp = 0; sp < N / 2; sp++) {
                line += " ";
            }

            // Add the single star at the base of the Y
            line += "*";

            // Add trailing spaces after the vertical part of the Y
            for(int sp = 0; sp < N / 2; sp++) {
                line += " ";
            }

            // Add the formed line to the vector
            v.push_back(line);
        }

        // Return the complete pattern
        return v;
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
        vector<string> v = ob.yShapedPattern(N);
        
        for(int i=0; i<v.size(); i++)
            cout<<v[i]<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends