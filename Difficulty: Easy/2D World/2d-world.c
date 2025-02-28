//{ Driver Code Starts
#include <stdio.h>

// } Driver Code Ends

/* Function to take input for 2D array elements and print the matrix
 * N : size of the matrix (N x N matrix)
 */
void twoDimensional(int N, int mat[][N]) {
    
    // Code to print the elements of the matrix
    for (int i = 0; i < N; i++) {  // Loop through each row
        for (int j = 0; j < N; j++) {  // Loop through each column in the row
            printf("%d ", mat[i][j]);  // Print the element at mat[i][j]
        }
        printf("\n");  // Print a new line after each row
    }
}



//{ Driver Code Starts.

// Driver code
int main() {
	
	int testcase;
	scanf("%d", &testcase);
	
	while(testcase--){
	    int N;
	    scanf("%d", &N);
	    
	    // Declaring matrix
	    int mat[N][N];
    	
    	for(int i = 0;i<N;i++){
    	    for(int j = 0;j<N;j++){
    	        scanf("%d", &mat[i][j]);
    	    }
    	}
    	
    	twoDimensional(N, mat);  
    	
	
printf("~%s", "\n");}
	
	return 0;
}
// } Driver Code Ends