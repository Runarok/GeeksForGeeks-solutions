//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 


// } Driver Code Ends

// Function to find the max product subsequence of size 3
// arr: given input array
// n: size of array
// res: array which contains the output
void maxProductSubsequence(int *arr, int n, int *res) {
    vector<int> leftMax(n, -1);   // Array to store the maximum value on the left of each element
    vector<int> rightMax(n, -1);  // Array to store the maximum value on the right of each element

    // Step 1: Find left maximums for each element
    set<int> leftSet;  // A set to maintain a sorted order of elements for efficient lookup
    for (int i = 0; i < n; i++) {
        auto it = leftSet.lower_bound(arr[i]);  // Find the first element that is not less than arr[i]
        if (it != leftSet.begin()) 
            leftMax[i] = *(--it);  // Get the largest element smaller than arr[i]
        leftSet.insert(arr[i]);  // Insert the current element into the set
    }

    // Step 2: Find right maximums for each element
    priority_queue<int> rightQueue;  // Max heap to keep track of largest elements on the right
    for (int i = n - 1; i >= 0; i--) {
        if (!rightQueue.empty() && rightQueue.top() > arr[i]) 
            rightMax[i] = rightQueue.top();  // Get the largest element on the right of arr[i]
        rightQueue.push(arr[i]);  // Push current element into the heap
    }

    // Step 3: Calculate maximum product of subsequence of size 3
    long long maxProduct = -1;  // Variable to store the maximum product found
    for (int i = 0; i < n; i++) {
        // Check if valid left and right maximums exist
        if (leftMax[i] != -1 && rightMax[i] != -1) {
            long long product = (long long)leftMax[i] * arr[i] * rightMax[i];  // Calculate product
            if (product > maxProduct) {  // If the product is greater than the current max, update result
                maxProduct = product;
                res[0] = leftMax[i];  // Store the left value
                res[1] = arr[i];      // Store the middle value
                res[2] = rightMax[i]; // Store the right value
            }
        }
    }

    // Step 4: Handle case when no valid subsequence is found
    if (maxProduct == -1) {
        res[0] = res[1] = res[2] = -1;  // No valid subsequence found, return -1 for all
    }
}


//{ Driver Code Starts.

// Driver Program 
int main()
{ 
    // ios_base::sync_with_stdio(false);
    // cin.tie(NULL);
	
	int T;
	cin>>T;
	while(T--){
	    int num;
	    cin>>num;
	    int arr[num];
	    for(int i = 0; i<num; ++i)
	        cin>>arr[i];
	    
	    int res[3] = {0};
	    maxProductSubsequence(arr, num, res);
	    
	    if(res[0] == 0)
	        cout<<"-1" << endl;
	    else{
    	    for(int i = 0; i<3; ++i)
    	        cout<<res[i]<<" ";
    	    cout << endl;
	    }
	
cout << "~" << "\n";
}
} 


// } Driver Code Ends