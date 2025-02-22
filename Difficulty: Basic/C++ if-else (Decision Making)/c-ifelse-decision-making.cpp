//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution{   
public:
    // Function to compare a number with 5 and return a string based on the comparison
    string compareFive(int n){
        // If n is greater than 5, return "Greater than 5"
        if(n > 5) return "Greater than 5";
        
        // If n is equal to 5, return "Equal to 5"
        if(n == 5) return "Equal to 5";
        
        // If n is less than 5, return "Less than 5"
        if(n < 5) return "Less than 5";
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin >> N;
        Solution ob;
        cout << ob.compareFive(N) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends