//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    public:
    // Function to find the maximum XOR subset of the given array
    int maxXor(int arr[], int n) {
        // Base case: If there's only one element, return it
        if (n == 1) return arr[0];

        int i = 0; // Index to keep track of the processed elements

        // Iterate from the most significant bit to the least significant bit
        for (int k = 30; k >= 0; k--) {
            int maxElement = INT_MIN; // Track the maximum element with the current bit set
            int maxIndex = -1;        // Track the index of the maximum element

            // Find the maximum element with the current bit set
            for (int j = i; j < n; j++) {
                if ((arr[j] & (1 << k)) && arr[j] > maxElement) {
                    maxElement = arr[j];
                    maxIndex = j;
                }
            }

            // If no element has the current bit set, move to the next bit
            if (maxElement == INT_MIN) continue;

            // Swap the element with the maximum element to the current position
            int temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;

            // XOR all elements with the current bit set, except for the element at 'i'
            for (int j = 0; j < n; j++) {
                if (j != i && (arr[j] & (1 << k))) {
                    arr[j] ^= arr[i];
                }
            }

            // Move to the next position for processing
            i++;
        }

        // Calculate the XOR of all elements in the modified array
        int result = 0;
        for (int j = 0; j < n; j++) {
            result ^= arr[j];
        }

        return result; // Return the maximum XOR value
    }
};


//{ Driver Code Starts.
int main() 
{
   
   
   	int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;

        int a[n];
        for(int i = 0; i < n; i++)
        	cin >> a[i];

	   

	    Solution ob;
	    cout << ob.maxXor(a, n) << "\n";
   
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends