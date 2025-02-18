//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to generate a pattern of strings with alphabet characters
    vector<string> findThePattern(int N) {
        char start = 'A'; // Initialize the starting character
        vector<string> ans; // Vector to store the final pattern
        
        // Loop through rows
        for(int i = 0; i < N; i++)
        {
            string temp; // Temporary string to store each row
            // Loop through columns
            for(int j = 0; j < N; j++)
            {
                // Check if we are at the boundary (first/last row/column)
                if(i == 0 || i == N - 1 || j == 0 || j == N - 1)
                {
                    temp.push_back(start); // Add the current character to the row
                    start++; // Move to the next character
                }
                else
                    temp.push_back('$'); // Fill inner cells with '$'
            }
            ans.push_back(temp); // Add the row to the answer
        }
        return ans; // Return the final pattern
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
        vector<string> v = ob.findThePattern(N);
        
        for(int i=0; i<v.size(); i++)
            cout<<v[i]<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends