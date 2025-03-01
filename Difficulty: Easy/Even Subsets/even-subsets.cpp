//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//User function Template for C++

/*Function to count subset with even sum
* arr : array input
* N : size of array
*/
class Solution {
  public:
    int countSumSubsets(int arr[], int N){
        
        // Variable to count subsets with even sum
        int count = 0;
        
        // Total number of subsets is 2^N (excluding the empty set)
        int totalSubsets = 1 << N;
        
        // Iterate through all possible subsets (1 to 2^N - 1)
        for(int i = 1; i < totalSubsets; i++){
            int sum = 0;
            
            // Calculate sum of current subset
            for(int j = 0; j < N; j++){
                if(i & (1 << j)){  // Check if the jth element is part of the subset
                    sum += arr[j];
                }
            }
            
            // If the sum is even, increment the count
            if(sum % 2 == 0){
                count++;
            }
        }
            
        // Return the final count of subsets with even sum
        return count;
    }
};


//{ Driver Code Starts.

// Driver code to test columnWithMaxZeros function
int main() {
	
	int testcase;
	
	cin >> testcase;
	
	while(testcase--){
	    int N;
	    cin >> N;
	    
	    int arr[N];
	    
	    // Taking elements input into the matrix
	    for(int i = 0;i<N;i++){
	            cin >> arr[i];
	        }
	    Solution obj;
	    cout << obj.countSumSubsets(arr, N) << endl;
	
cout << "~" << "\n";
}
	
	return 0;
}
// } Driver Code Ends