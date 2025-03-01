//{ Driver Code Starts
//Initial template for c++

#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

// User function Template for C++

class Solution{   
public:
    // Function to return the first k digits of a number n
    string Kdigits(int n, int k) { 
        string s = "";  // Initialize an empty string to store the result
        int rem = 1;    // Initialize remainder to 1
        
        // Run a loop k times to print k digits
        for (int i = 0; i < k; i++) { 
            // Calculate the next digit by performing (10 * rem) / n
            int val = (10 * rem) / n; 
            char c = '0' + val;  // Convert the digit to a character and add it to the string
            s += c;
            
            // Update the remainder for the next iteration
            rem = (10 * rem) % n; 
        }
        
        return s;  // Return the result string containing the first k digits
    } 
};


//{ Driver Code Starts.

int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int n, k;
        cin >> n >> k;
        Solution ob;
        cout << ob.Kdigits(n, k) << endl;
    
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends