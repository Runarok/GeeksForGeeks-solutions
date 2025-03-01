//{ Driver Code Starts

// } Driver Code Ends

#include <iostream>
using namespace std;

int main() {
    int binary[32];    // Array to store binary digits
    int n, i = 0;      // Variables for input number and index
    cin >> n;          // Read integer input

    // Convert decimal to binary
    while (n > 0) {
        binary[i] = n % 2;  // Store remainder (binary digit)
        n = n / 2;          // Divide number by 2
        i++;                 // Move to next position in array
    }

    // Print binary representation in reverse order
    for (int j = i - 1; j >= 0; j--) {
        cout << binary[j];
    }

    return 0;
}


//{ Driver Code Starts.
// } Driver Code Ends