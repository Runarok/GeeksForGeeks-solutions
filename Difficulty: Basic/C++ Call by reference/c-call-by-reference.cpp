//{ Driver Code Starts
//Initial Template for C++

#include <iostream>
using namespace std;


// } Driver Code Ends

// User function Template for C++

/**
 * Function to reverse the digits of two integers.
 * @param a Reference to the first integer.
 * @param b Reference to the second integer.
 */
void reverse_dig(int &a, int &b) {
    int rev_a = 0, rev_b = 0;

    // Reverse digits of 'a'
    while (a > 0) {
        rev_a = rev_a * 10 + (a % 10);
        a /= 10;
    }
    a = rev_a;

    // Reverse digits of 'b'
    while (b > 0) {
        rev_b = rev_b * 10 + (b % 10);
        b /= 10;
    }
    b = rev_b;
}

/**
 * Function to swap two integers.
 * @param a Reference to the first integer.
 * @param b Reference to the second integer.
 */
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}


//{ Driver Code Starts.

int main() 
{
    int t;
    cin>>t;
    while(t--)
    {
        int a, b;
	    cin>>a>>b;
	
	    reverse_dig(a,b);
	    swap(a,b);
	    cout<<a<<" "<<b<<endl;
    
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends