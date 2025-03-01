//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// Back-end complete function Template for C++

class Solution{
  public:
    void follPatt(string s)
    {   
        // Variable to store the count of 'x'
        int x_count = 0;
        
        // Variable to store the count of 'y'
        int y_count = 0;
        
        bool flag = false; // Flag to check if pattern is violated
        
        for (int i = 0; i < s.length(); i++) {
            // When 'x' is encountered, increment x_count
            if (s[i] == 'x') {
                x_count++;
            }
            else {
                // When 'y' is encountered, count consecutive 'y's
                while (i < s.length() && s[i] == 'y') {
                    y_count++;
                    i++;
                }
                i--; // Adjust index since the outer loop will also increment i
                
                // If counts of 'x' and 'y' do not match, set flag and break
                if (x_count != y_count) {
                    flag = true;
                    break;
                }
                else {
                    // Reset counts if they match
                    x_count = y_count = 0;
                }
            }
        }
        
        // If no pattern violation and counts are equal at the end, output 1, otherwise 0
        if (flag == false && x_count == y_count)
            cout << 1;
        else
            cout << 0;
        
        cout << endl;
    }
};



//{ Driver Code Starts.

int main() {
	int t;
	cin>>t;

	while(t--)
	{
	    
	    string s;
	    cin>>s;
	    Solution obj;
	    //function call
	    obj.follPatt(s);
	   
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends