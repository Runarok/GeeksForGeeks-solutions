//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution {   
public:
    // Function to multiply two integers and return the result
    int multiplication(int firstNumber, int secondNumber) {
        return firstNumber * secondNumber;
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int A, B;
        cin >> A >> B;
        Solution ob;
        cout << ob.multiplication(A,B) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends