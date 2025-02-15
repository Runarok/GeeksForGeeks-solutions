//{ Driver Code Starts
// Initial Template for C

// } Driver Code Ends

#include <stdio.h>

int main() {
    // Declare an integer variable to store user input
    int number;
    
    // Read an integer from the user
    scanf("%d", &number);
    
    // Check if the number is positive, negative, or zero
    if (number > 0) {
        printf("Positive");  // Print "Positive" if the number is greater than zero
    }
    if (number == 0) {
        printf("Zero");  // Print "Zero" if the number is exactly zero
    }
    if (number < 0) {
        printf("Negative");  // Print "Negative" if the number is less than zero
    }
    
    return 0;
}


//{ Driver Code Starts.

// } Driver Code Ends