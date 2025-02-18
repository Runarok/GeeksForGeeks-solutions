//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    vector<int> complexProduct(int A[], int B[]) {
        // Initialize real and imaginary parts of the product
        int realPart = 1;
        int imaginaryPart = 0;

        // Iterate through the arrays A and B to compute the complex product
        for (int i = 0; i < 5; ++i) {
            // Compute new real and imaginary parts using complex number multiplication formula
            int newReal = realPart * A[i] - imaginaryPart * B[i];
            int newImaginary = realPart * B[i] + imaginaryPart * A[i];

            // Update real and imaginary parts for next iteration
            realPart = newReal;
            imaginaryPart = newImaginary;
        }

        // Return the final computed real and imaginary parts as a vector
        return {realPart, imaginaryPart};
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int A[5], B[5];
        for(int i=0; i<5; i++)
            cin>>A[i];
        for(int i=0; i<5; i++)
            cin>>B[i];

        Solution ob;
        vector<int> ptr = ob.complexProduct(A,B);
        cout<<ptr[0]<<" "<<ptr[1]<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends