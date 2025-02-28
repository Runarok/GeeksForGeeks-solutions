//{ Driver Code Starts

// } Driver Code Ends

#include <stdio.h>

int main() {

    int a, b;
    scanf("%d %d", &a, &b);

    // Compute a / b with precision and print the value
    // Cast a to double for precision in division
    double c = (double)a / b;
    
    // Print the result with full precision
    printf("%lf", c);
    
    return 0;
}



//{ Driver Code Starts.

// } Driver Code Ends