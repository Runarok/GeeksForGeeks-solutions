//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution{   
public:
    // Function to compare two integers A and B and return a string describing the comparison
    string compareNum(int A, int B) {
        // If A is greater than B, return a string indicating A is greater
        if (A > B) {
            return to_string(A) + " is greater than " + to_string(B);
        }
        
        // If A is less than B, return a string indicating A is less
        if (A < B) {
            return to_string(A) + " is less than " + to_string(B);
        }
        
        // If A is equal to B, return a string indicating A is equal to B
        if (A == B) {
            return to_string(A) + " is equals to " + to_string(B);
        }
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int A,B;
        cin >> A>>B;
        Solution ob;
        cout << ob.compareNum(A,B) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends