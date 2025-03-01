//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

#include <bits/stdc++.h>
using namespace std;
// Position this line where user code will be pasted.

class Solution {

    public:
    // Function to calculate the maximum weight based on the given string
    int getMaxWeight(string s) 
    { 
        // Initialize a dp array to store the maximum weight at each index
        vector<int> dp(s.size() + 1, 0);
        
        // Base case: the first character can start with weight 1
        dp[0] = 1;
        
        // Loop through the string starting from index 1
        for (int i = 1; i < s.size(); ++i) {
            // Update dp[i] considering previous value plus 1
            dp[i] = max(dp[i], dp[i - 1] + 1);
            
            // If current and previous character are different, calculate weight accordingly
            if (s[i] != s[i - 1]) {
                dp[i] = max(dp[i], i >= 2 ? dp[i - 2] + 4 : 4);
            }
            // If current and previous character are the same, calculate weight accordingly
            else {
                dp[i] = max(dp[i], i >= 2 ? dp[i - 2] + 3 : 3);
            }
        }
        
        // Return the maximum weight at the last character
        return dp[s.size() - 1];
    } 
};



//{ Driver Code Starts.
int main() 
{
   	
   
   	int t;
    cin >> t;
    while (t--)
    {
       	string s;
       	cin >> s;

        Solution ob;
        cout << ob.getMaxWeight(s);;
	    cout << "\n";
	     
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends