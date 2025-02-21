//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
string isGoodString(string s);
int main()
{
	int t;
	cin>>t;
	while(t--)
	    {
	       string s;
	       cin>>s;
	       cout<<isGoodString(s)<<endl;
	    
cout << "~" << "\n";
}
}	    
	    
// } Driver Code Ends

// Function to check if the string is good
string isGoodString(string s)
{
    // Loop through the string except the last character
    for(int i = 0; i < s.size() - 1; i++)
    {
        // Check if two consecutive characters are the same
        if(s[i + 1] - s[i] == 0)
            return "NO";  // If yes, return "NO"
    }
    
    // If no consecutive characters are the same, return "YES"
    return "YES";
}
