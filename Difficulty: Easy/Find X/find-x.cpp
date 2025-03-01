//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to calculate the sum of digits of a number
    int S(int X) {
        int num = X, sum = 0;

        // Loop to sum up all digits of the number
        while (num > 0) {
            int a = num % 10;  // Get the last digit
            sum += a;  // Add it to sum
            num = num / 10;  // Remove the last digit
        }
        return sum * 1LL;  // Return sum as long long
    }

    // Function to calculate the product of digits of a number
    int F(int X) {
        if (X == 0) return 0;

        int num = X, prod = 0, preprod = 1;

        // Loop to multiply all digits of the number
        while (num > 0) {
            int a = num % 10;  // Get the last digit
            preprod *= a;  // Multiply the digit to preprod
            num = num / 10;  // Remove the last digit
        }
        
        // If product is greater than 0, assign it to prod
        if (preprod > 0) {
            prod = preprod;
        }

        return prod * 1LL;  // Return product as long long
    }

    // Function to find how many values of X satisfy the condition for a given N
    int findX(int N) {
        int count = 0;

        // Loop over the range [max(N-100, 0), N]
        for (int i = max(N - 100, 0); i <= N; i++) {
            int X = i;

            // Calculate the result of the expression for the current value of X
            int res = X + S(F(X)) + S(F(S(F(X))));

            // If the result equals N, increment the count
            if (res == N) {
                count += 1;
            }
        }

        return count;  // Return the final count
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;

        Solution ob;
        cout << ob.findX(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends