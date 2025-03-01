//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to calculate the greatest common divisor of two numbers.
    int gcd(int x, int y)
    {
        if (y == 0)
            return x;
        else
            return gcd(y, x % y);
    }

    // Function to calculate the value of an expression using given inputs.
    long long getVal(int N, int A[]) {
        
        long long int fx = 1, gx = 0, ans = 1;

        // Get the product of all integers in the array.
        for (int i = 0; i < N; i++)
        {
            fx = (fx * A[i]) % 1000000007;  // Multiply the current value of fx with each element of A
            gx = gcd(gx, A[i]);  // Update gcd of gx with each element of A
        }

        // Using modular exponentiation to find the final value.
        while (gx != 0)
        {
            if (gx % 2 == 1)  // If the current bit of gx is 1
            {
                ans = (ans * fx) % 1000000007;  // Multiply the current result with fx
            }
            fx = (fx * fx) % 1000000007;  // Square the fx value for next iteration
            gx /= 2;  // Halve gx to move to the next bit
        }
        
        return ans;  // Return the final result after the loop
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;
        int A[N];
        
        for(int i=0 ; i<N ; i++)
            cin>>A[i];

        Solution ob;
        cout << ob.getVal(N,A) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends