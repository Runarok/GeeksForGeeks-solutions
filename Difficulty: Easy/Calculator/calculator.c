//{ Driver Code Starts
// Initial Template for C

// } Driver Code Ends

#include <stdio.h>

int main() {
    // Declare variables for input
    int a, b, operator;
    
    // Read input values: two integers and an operator code
    scanf("%d%d%d", &a, &b, &operator);
    
    // Switch statement to perform the operation based on the operator value
    switch (operator) {
        case 1:
            // If operator is 1, perform addition
            printf("%d", a + b);
            break;
        case 2:
            // If operator is 2, perform subtraction
            printf("%d", a - b);
            break;
        case 3:
            // If operator is 3, perform multiplication
            printf("%d", a * b);
            break;
        default:
            // If operator is not 1, 2, or 3, print "Invalid Input"
            printf("Invalid Input");
    }

    return 0;
}



//{ Driver Code Starts.

// } Driver Code Ends