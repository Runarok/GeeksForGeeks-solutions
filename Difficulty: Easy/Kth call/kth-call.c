//{ Driver Code Starts
// Initial Template for C

#include <stdio.h>


// } Driver Code Ends

// User function Template for C
void utility() {

    // Declare a static variable count to retain its value between function calls
    static int count;
    
    // Increment the value of count by 1
    count++;
    
    // Print the current value of count
    printf("%d", count);
}



//{ Driver Code Starts.

int main() {

    int t;
    scanf("%d", &t);

    int n;
    scanf("%d", &n);

    while (n--) {

        utility();
        printf(" ");
    }

    return 0;
}
// } Driver Code Ends