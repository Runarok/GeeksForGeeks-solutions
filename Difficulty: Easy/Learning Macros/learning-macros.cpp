//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
#define MULTI(a,b) (a*b) //The multiplication macro function.
/*Whenever MULTI(a,b) is encountered, it is replaced by (a*b) during the preprocessing stage*/
using namespace std;

void macros(int a,int b);


// } Driver Code Ends

void macros(int a, int b) {
    // Print the product of a and b using the MULTI macro
    std::cout << MULTI(a, b);  // Output the result of multiplying a and b
    std::cout << std::endl;  // Print a newline after the result
}


//{ Driver Code Starts.


int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int a,b;
	    
	    //Input a and b
	    cin>>a>>b; 
	    
	    //function call
	    macros(a,b);
	    
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends