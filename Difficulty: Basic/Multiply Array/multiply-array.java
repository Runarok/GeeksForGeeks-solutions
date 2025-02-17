//{ Driver Code Starts
import java.util.*;

class GFG {
	public static void main(String[] args)
	{
        Scanner sc=new Scanner(System.in);
        int t = sc.nextInt();
        while(t-->0)
        {
            int n = sc.nextInt();
            int arr[] = new int[n+5];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            
            Solution obj = new Solution();
            System.out.println(obj.product(arr, n));
        
System.out.println("~");
}
	}
}

// } Driver Code Ends

class Solution {

    // Function to calculate the product of all elements in the array
    public static int product(int arr[], int n) {
        int ans = 1; // Initialize the product to 1
        // Iterate through the array and multiply each element with the result
        for(int i = 0; i < n; i++) {
            ans *= arr[i]; // Multiply current element with the accumulator
        }
        return ans; // Return the final product
    }
}
