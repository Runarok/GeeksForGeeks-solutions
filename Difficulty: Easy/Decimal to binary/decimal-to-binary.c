//{ Driver Code Starts
//Initial Template for C

#include <stdio.h>


// } Driver Code Ends

#include <math.h>
// User function Template for C

void toBinary(int N)
{
    // Initialize the variable ans to store the binary result
    int ans = 0;
    int i = 0;  // Initialize the power index
    
    // Loop until N becomes 1
    while (N != 1)
    {
        // Add the current bit to the answer
        ans = ans + (N % 2) * pow(10, i);
        
        // Divide N by 2 to get the next bit
        N /= 2;
        
        // Increment the power index
        i++;
    }
    
    // Add the last bit (since N will be 1)
    ans = ans + (N % 2) * pow(10, i);
    
    // Print the final binary number
    printf("%d", ans);
}



//{ Driver Code Starts.

int main() {
	
	int t;
	scanf("%d", &t);
	
	
	while(t--)
	{
	    int n;
	    scanf("%d", &n);
	    
	    toBinary(n);
	    printf("\n");
	
printf("~%s", "\n");}
	return 0;
}
// } Driver Code Ends