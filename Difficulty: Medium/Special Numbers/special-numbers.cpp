//{ Driver Code Starts
#include <iostream>
using namespace std;

// } Driver Code Ends

#include <algorithm>
#include <string>

class Solution
{
public:
    int getSpecialNumber(int N)
    {
        N--;  // Decrease N to handle zero-indexed logic
        string res = "";  // To store the base-6 representation
        
        // Convert N to base-6
        while(N >= 6){
            int q = N / 6;
            res += (N % 6) + '0';  // Append the remainder as a character
            N = q;
        }
        
        // Append the last digit (which will be the base-6 equivalent of N)
        res += '0' + N;
        
        // Reverse the string to get the correct order of digits
        reverse(res.begin(), res.end());
    
        int ans = 0;
        
        // Convert the string back to an integer
        for(auto i: res){
            ans *= 10;  // Shift current answer by one digit
            ans += i - '0';  // Add the current digit
        }

        return ans;  // Return the final result
    }
};



//{ Driver Code Starts.

int main() 
{
	int t;
	cin>>t;
	while(t-->0)
	{
	    int N;
	    cin>> N;
	     Solution ob;
	    cout<<ob.getSpecialNumber(N)<<endl;
	
cout << "~" << "\n";
}
	
	return 0;
}
// } Driver Code Ends