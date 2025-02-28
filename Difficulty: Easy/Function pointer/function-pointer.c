//{ Driver Code Starts
#include <stdio.h>


// } Driver Code Ends

// User function Template for C

// Subtraction function
int sub(int a, int b){
    return a - b;
    //code here
}

// Addition function
int add(int a, int b){
    return a + b;
    //code here
}

// Function to compute result using function pointer
void compute(int a, int b, int (*fptr)(int , int)){
    // Call the function through pointer and print result
    printf("%d \n", fptr(a , b));
    //code here
}


//{ Driver Code Starts.
    
int main() {
	
	int t; scanf("%d", &t);
	
	while(t--){
	    int a, b;
	    scanf("%d %d", &a, &b);
        compute(a, b, sub);
        compute(a, b, add);
	
printf("~%s", "\n");}
}
// } Driver Code Ends