//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to check if a number is a Keith number
    int isKeith(int n) {
        int temp = n;
        int sum = 0;
        int arr[100];  // Array to store digits of the number
        int index = 0;
        int size = log10(n);  // Calculate number of digits in the number
        int isTrue = 0;  // Flag to indicate if it's a Keith number
        
        // Extract the digits of the number and store in the array
        while (n > 0) {
            arr[index] = n / pow(10, size);
            n = n % (int)(pow(10, size));
            index++;
            size--;
        }

        int windowSize = log10(temp) + 1;  // The window size is the number of digits

        // Initialize sum with the sum of all digits
        for (int i = 0; i < windowSize; i++) {
            sum += arr[i];
        }

        int start = 0;
        int end = windowSize;

        // Iterate while sum is less than or equal to the original number
        while (sum <= temp) {
            // If sum matches the original number, it's a Keith number
            if (sum == temp) {
                isTrue = 1;
                break;
            }

            // Update the sum and the array
            arr[end] = sum;
            sum -= arr[start];
            sum += arr[end];
            start++;
            end++;
        }

        return isTrue;  // Return 1 if it's a Keith number, otherwise 0
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int n;
        cin >> n;
        Solution ob;
        cout<<ob.isKeith(n)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends