//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


// User function Template for C++

class Solution {
public:
    // Function to count the occurrences of extra colors based on the pattern in the string
    vector<int> extraCount(string s) {
        // Get the length of the input string
        int n = s.size();
        
        // Initialize a vector to store the counts for R, G, Y, and other colors (denoted by index 0, 1, 2, and 3 respectively)
        vector<int> ans(4, 0);
        
        // If the string is shorter than 4 characters, return the answer initialized to zeros
        if (s.size() < 4) return ans;
        
        // Vector to store the colors corresponding to positions 0, 1, 2, and 3 modulo 4 (the repeating pattern)
        vector<char> a(4, '0');
        
        // Traverse the string and assign colors based on their position mod 4, skipping the '!' characters
        for (int i = 0; i < n; i++) {
            if (s[i] != '!') a[i % 4] = s[i];
        }
        
        // Now process the string again and count the occurrences of '!' characters for each color
        for (int i = 0; i < n; i++) {
            if (s[i] == '!') {
                // Determine the color for the current position based on modulo 4
                int ind = i % 4;
                char c = a[ind];
                
                // Increment the corresponding color counter based on the color found
                if (c == 'R') ans[0]++;
                else if (c == 'G') ans[1]++;
                else if (c == 'Y') ans[2]++;
                else ans[3]++;  // for other colors
            }
        }
        
        // Return the count of extra colors R, G, Y, and other colors
        return ans;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        string s;
        cin>>s;
        
        Solution ob;
        vector<int> res = ob.extraCount(s);
        cout<<"R"<<res[0]<<"B"<<res[1]<<"Y"<<res[2]<<"G"<<res[3]<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends