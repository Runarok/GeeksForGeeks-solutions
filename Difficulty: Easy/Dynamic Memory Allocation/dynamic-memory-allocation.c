//{ Driver Code Starts
//Initial Template for C

#include<stdio.h>
#include<stdlib.h>


// } Driver Code Ends

//User function Template for C

int *getArray(int n)
{
    int* ptr = malloc(sizeof(int)*n);  // Allocate memory for the array
    for(int i = 0; i < n; i++){
        ptr[i] = 1;  // Set each element to 1
    }
    
    return ptr;  // Return the pointer to the array
}



//{ Driver Code Starts.

int main()
{
    int t;
    scanf("%d", &t);
    while(t--){
        int n;
        scanf("%d", &n);
        int *ptr = getArray(n);
        for(int i = 0; i < n; i ++)
            printf("%d ", ptr[i]);
        printf("\n");
    
printf("~%s", "\n");}
    return 0;
}
// } Driver Code Ends