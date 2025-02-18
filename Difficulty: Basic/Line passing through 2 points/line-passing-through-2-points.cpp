//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    string getLine(int a, int b, int c, int d)
    {
        // Construct the equation for the line based on the points (a, b) and (c, d)
        
        // Start by calculating the slope for x component (d - b)
        string s = to_string(d - b) + "x";
        
        // Check if the y component (a - c) is positive, to decide if we need a '+' sign
        if (a - c > 0) {
            s += "+";
        }
        
        // Add the y component (a - c) and the variable 'y' to the equation
        s += to_string(a - c) + "y=";
        
        // Calculate and add the constant part of the equation (d - b) * a + (a - c) * b
        s += to_string(((d - b) * a) + ((a - c) * b));
        
        // Return the final equation as a string
        return s;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int a, b, c, d;
        cin>>a>>b>>c>>d;
        
        Solution ob;
        cout<<ob.getLine(a, b, c, d)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends