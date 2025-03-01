//{ Driver Code Starts
#include <stdio.h>


// } Driver Code Ends

//User function Template for C

void transpose(int N, int matrix[][N])
{ 
    // Loop through the upper triangle of the matrix
    for(int row = 0; row < N; row++){
        for(int col = row + 1; col < N; col++){
            // Swap matrix[row][col] with matrix[col][row]
            int temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
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
	    int matrix[N][N];
    	
    	for(int i = 0;i<N;i++){
    	    for(int j = 0;j<N;j++){
    	        scanf("%d", &matrix[i][j]);
    	    }
    	}
    	
    	transpose(N, matrix);  
    	
    	for (int i = 0; i < N; ++i)
            for (int j = 0; j < N; ++j)
                printf("%d ", matrix[i][j]);
        printf("\n");
    	
	
printf("~%s", "\n");}
	
	return 0;
}
// } Driver Code Ends