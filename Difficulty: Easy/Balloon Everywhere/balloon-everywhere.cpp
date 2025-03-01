//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to calculate the maximum number of "balloon" instances in the given string.
    int maxInstance(string s) {
        // Initialize an unordered map to store the frequency of each character
        unordered_map<char, int> freq;
        
        // Count the frequency of each character in the string
        for (char c : s) {
            freq[c]++;
        }
        
        // Calculate the maximum number of "balloon" instances
        // The count of 'l' and 'o' must be divided by 2 because each "balloon" needs 2 of these characters
        return min({freq['b'], freq['a'], freq['l'] / 2, freq['o'] / 2, freq['n']});
    }
};



//{ Driver Code Starts.
int main(){
    int t;
    cin>>t;
    while(t--)
    {
        string s;
        cin>>s;
        Solution ob;
        cout<<ob.maxInstance(s)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends