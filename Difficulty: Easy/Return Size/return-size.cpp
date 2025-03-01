//{ Driver Code Starts

// } Driver Code Ends

#include <iostream>
using namespace std;

int main() {
    int x = 2;        // Integer variable
    double y = 3.5;   // Double variable
    char z = 'g';     // Character variable

    // Store the size of each variable into respective variables
    size_t a = sizeof(x);   // Size of integer
    size_t b = sizeof(y);   // Size of double
    size_t c = sizeof(z);   // Size of character

    // Print the sizes of x, y, and z
    cout << a << " " << b << " " << c << endl;

    return 0;
}


//{ Driver Code Starts.

// } Driver Code Ends