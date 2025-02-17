//{ Driver Code Starts
//Initial Template for C

#include <stdio.h>


// } Driver Code Ends

// User function Template for C

void utility(int n) {
    // Calculate the absolute value of the last digit
    int ans = abs(n % 10);

    // Print the result
    printf("%d\n", ans);
}


//{ Driver Code Starts.
    
int main() {
	
	int t; scanf("%d", &t);
	while(t--) {
        int n; scanf("%d", &n);
        utility(n);
    }
	
}
// } Driver Code Ends