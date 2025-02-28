//{ Driver Code Starts

// } Driver Code Ends

#include <iostream>
using namespace std;

// Function to convert a binary number (in long long format) to decimal
int binaryToDecimal(long long n) {
    int decimal = 0;  // Variable to store the decimal result
    int base = 1;     // Base multiplier (starting from 2^0)

    // Process each digit of the binary number
    while (n > 0) {
        int last_digit = n % 10;   // Get the last digit of the binary number
        decimal += last_digit * base;  // Add the corresponding value to decimal
        base *= 2;  // Multiply the base by 2 for the next binary digit place
        n /= 10;     // Remove the last digit of the binary number
    }
    return decimal;  // Return the final decimal result
}

int main() {
    long long binary;  // Variable to hold the input binary number
    
    cin >> binary;  // Take the binary number input
    
    cout << binaryToDecimal(binary) << endl;  // Output the decimal equivalent of the binary number

    return 0;
}



//{ Driver Code Starts.
// } Driver Code Ends