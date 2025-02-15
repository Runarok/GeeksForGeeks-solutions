//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

void logicOp(int a, int b);


// } Driver Code Ends

// User function Template for C++

void logicOp(int a, int b) {
    // Output the results of logical AND, OR, and NOR operations
    cout << (a && b) << " "    // Logical AND operation
         << (a || b) << " "    // Logical OR operation
         << ((!a) && (!b));    // Logical NOR operation (both a and b are false)
    cout << endl;
}


//{ Driver Code Starts.

int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int a,b;
	    cin>>a>>b;
	    logicOp(a,b);
	    
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends