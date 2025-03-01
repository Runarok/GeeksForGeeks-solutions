//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    // Function to find all seeds of a given number 'n'
    vector<int> seeds(int n){
        vector<int> ans;  // Vector to store the seeds of the number
        
        // Loop through all numbers from 1 to n-1 to find potential seeds
        for (int i = 1; i < n; i++) {
            int molt = i;  // Variable to store the product of digits
            int copia = i;  // Copy of the number 'i' to extract digits
            
            // Multiply the digits of 'i' to calculate the product
            while (copia) {
                int digit = copia % 10;  // Get the last digit
                copia /= 10;  // Remove the last digit
                molt *= digit;  // Multiply the digit with the result
            }
            
            // If the product of the digits equals 'n', add 'i' to the answer
            if (molt == n) {
                ans.push_back(i);  // Store the seed
            }
        }
        
        // If no seed was found, return {-1}
        if (ans.size() <= 0) return {-1};
        
        // Return the list of seeds
        return ans;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        
        Solution ob;
        vector<int> ans = ob.seeds(n);
        for(int v: ans)
            cout<<v<<" ";
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends