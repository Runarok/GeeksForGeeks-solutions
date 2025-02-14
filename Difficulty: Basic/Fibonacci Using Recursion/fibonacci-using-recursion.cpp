//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++
class Solution{
    public:
    // Complete this function
    int fibonacci(int n)
    {
        // Base cases for n=1 and n=2
        if (n == 1 || n == 2)
            return 1;
        
        // Initialize two variables to store the last two Fibonacci numbers
        int a = 1, b = 1;
        
        // Loop from 3 to n to calculate the nth Fibonacci number
        for (int i = 3; i <= n; i++) {
            int next = a + b;
            a = b;
            b = next;
        }
        
        return b; // Return the nth Fibonacci number
    }
};


//{ Driver Code Starts.
int main() {
	int T;
	
	//taking total testcases
	cin>>T;
	while (T--)
	{
	    int n;
	    //taking number n
	    cin>>n;
	    Solution ob;
	    //calling fibonacci() function
	    cout<<ob.fibonacci(n)<<endl;
	    
	    
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends