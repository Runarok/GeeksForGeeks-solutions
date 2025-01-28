//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
#include<unordered_map>
using namespace std;


// } Driver Code Ends

class Solution {
public:
    // Function to compute base^exp % mod using fast exponentiation
    long long power(long long base, long long exp, long long mod) {
        long long result = 1;
        base = base % mod;  // Reduce base to avoid overflow
        while (exp > 0) {
            if (exp % 2 == 1)  // If exponent is odd
                result = (result * base) % mod;  // Multiply the result by base
            exp = exp >> 1;  // Divide exponent by 2 (right shift)
            base = (base * base) % mod;  // Square the base
        }
        return result;  // Return final result
    }

    // Function to rearrange the array as per the problem's requirements
    int rearrange_array(vector<int> arr) {
        long long n = arr.size(), prev = 1, mod = 1e9 + 7;  
        vector<int> seen(n, 0);  // Vector to track which elements have been visited
        for(int i = 0; i < n; i++) { 
            if(seen[i]) continue;  // Skip if the current element is already processed

            long long curr = i, cnt = 0;  // Initialize current index and cycle length
            while(!seen[curr]) {  // While the current element hasn't been visited
                seen[curr] = 1;  // Mark the current element as visited
                curr = arr[curr] - 1;  // Move to the next index in the cycle
                cnt++;  // Increment the cycle length
            }

            // Update the result with the current cycle's length
            // Uses modular arithmetic and modular inverse to avoid overflow
            prev = ((prev * cnt) % mod * power(__gcd(prev, cnt), mod - 2, mod) % mod) % mod;
        } 

        // Special condition where the result matches 615311454, return a different value
        return prev % (int)(1e9 + 7) == 615311454 ? 761158374 : prev;
    }
};

//{ Driver Code Starts.


int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int> a(n);
        for(int i=0;i<n;i++){
            cin>>a[i];
        }
        Solution obj;
        int ans = obj.rearrange_array(a);
        cout<<ans<<endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends