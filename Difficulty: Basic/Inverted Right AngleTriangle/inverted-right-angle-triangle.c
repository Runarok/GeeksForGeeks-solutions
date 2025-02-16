//{ Driver Code Starts
//Initial Template for C

#include <stdio.h>


// } Driver Code Ends

// User function Template for C

void invTriangleWall(int s) {
    // Loop to control the number of rows
    for (int i = s; i > 0; i--) {
        // Loop to print '*' in each row
        for (int j = i; j > 0; j--) {
            printf("* ");
        }
        // Move to the next line after printing each row
        printf("\n");
    }
}


//{ Driver Code Starts.
    
int main() {
	
	int t; scanf("%d", &t);
	
	while(t--){
	    int s; scanf("%d", &s);
        invTriangleWall(s);
	
printf("~%s", "\n");}
}
// } Driver Code Ends