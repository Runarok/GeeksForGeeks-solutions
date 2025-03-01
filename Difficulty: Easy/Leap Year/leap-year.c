//{ Driver Code Starts
// Initial Template for C

// } Driver Code Ends

#include <stdio.h>

int main() {
    // Declare a variable to store the year input by the user
    int year;
    
    // Take input from the user for the year
    scanf("%d", &year);
    
    // Check if the year is divisible by 400 (this is a leap year)
    if (year % 400 == 0) {
        printf("True");
    }
    // Check if the year is divisible by 4 but not by 100 (this is a leap year)
    else if (year % 4 == 0 && year % 100 != 0) {
        printf("True");
    }
    // All other years are not leap years
    else {
        printf("False");
    }

    return 0;
}



//{ Driver Code Starts.

// } Driver Code Ends