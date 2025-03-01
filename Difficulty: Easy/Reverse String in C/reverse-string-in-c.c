//{ Driver Code Starts


#include <stdio.h>


// } Driver Code Ends

// User function Template for C

void reverseString(char str[])
{
    // Get the length of the string
    int l = strlen(str) - 1;
    int i = 0;

    // Reverse the string using two pointers (one from the beginning and one from the end)
    while(i < l)
    {
        // Swap characters at positions i and l
        char temp = str[i];
        str[i] = str[l];
        str[l] = temp;

        // Move the pointers towards each other
        i++;
        l--;
    }

    // Print the reversed string
    printf("%s", str);
}



//{ Driver Code Starts.
    
int main() {
	
	int t; scanf("%d", &t);
	
	while(t--){
	    char str[60]; scanf("%s", str);
        reverseString(str);
        printf("\n");
	
printf("~%s", "\n");}
	
	return 0;
}
// } Driver Code Ends