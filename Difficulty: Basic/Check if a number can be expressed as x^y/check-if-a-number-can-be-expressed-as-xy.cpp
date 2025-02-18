//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution{   
public:
    // Function to check if a number N can be expressed as a power of some integer
    int checkPower(int N){
      
        // Special case: 1 is considered a power of any number
        if (N == 1) return true;

        // Try all numbers from 2 to sqrt(N) as base
        for (int x = 2; x <= sqrt(N); x++) {
            int y = 2;
            int p = pow(x, y); // Calculate x^y

            // Keep increasing y while power 'p' is smaller than N
            while (p <= N && p > 0) {
                // If p equals N, it means N is a power of x
                if (p == N)
                    return true;
                
                // Increase the exponent y
                y++;
                
                // Update p to x^y
                p = pow(x, y);
            }
        }
        
        // If no base and exponent combination is found, return false
        return false;
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
        cout << ob.checkPower(N) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 
// } Driver Code Ends