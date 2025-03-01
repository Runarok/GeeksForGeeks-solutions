//{ Driver Code Starts
//Initial Template for C

#include <stdio.h>


// } Driver Code Ends

// Function to calculate the average of non-negative numbers in an array
double posAverage(int numbers[], int size) {
    int sum = 0;  // Variable to store the sum of non-negative numbers
    int count = 0;  // Variable to count the number of non-negative numbers

    // Loop through the array
    for (int i = 0; i < size; i++) {
        // Check if the current number is non-negative
        if (numbers[i] >= 0) {
            sum += numbers[i];  // Add the non-negative number to sum
            count++;  // Increment the count of non-negative numbers
        }
    }

    // If there are no non-negative numbers, return 0 to avoid division by zero
    if (count == 0) {
        return 0;
    }

    // Calculate and return the average
    return (double)sum / count;
}



//{ Driver Code Starts.
    
int main() {
	
	int t; scanf("%d", &t);
	
	while(t--){
	    int n; scanf("%d", &n);
        int numbers[n];
        for(int i = 0;i < n; i++){
            scanf("%d", &numbers[i]);
        }
        double avg = posAverage(numbers, n);
        printf("%lf\n", avg);  
	
printf("~%s", "\n");}
	
	return 0;
}


// } Driver Code Ends