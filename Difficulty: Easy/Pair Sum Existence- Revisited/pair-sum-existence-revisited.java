//{ Driver Code Starts
//Initial Template for Java

import java.util.*;

class GFG
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            int n = sc.nextInt();
            int arr[] = new int[n];
            
            for(int i = 0; i < n; i++)
             arr[i] = sc.nextInt();
             
            int sum = sc.nextInt();
            Geeks obj = new Geeks();
            System.out.println(obj.sumExists(arr,n,sum)); // prints the required result with new line
        
System.out.println("~");
}
    }
}


// } Driver Code Ends

// User function Template for Java

/* Helper class containing sumExists function
arr[]: array elements
n: size of the array
sum: to check if a pair having this sum exists
*/
class Geeks {
    // Function to check if any pair exists in the array that adds up to the specified sum
    // Returns 1 if such a pair exists, otherwise returns 0
    public static int sumExists(int arr[], int n, int sum) {
        // Initialize a HashSet to store elements we have seen so far
        HashSet<Integer> set = new HashSet<>();
        
        // Iterate through the array to find the pair
        for (int num : arr) {
            // Calculate the target value that, when added to 'num', will equal 'sum'
            int target = sum - num;
            
            // If the target value is already in the set, we have found a valid pair
            if (set.contains(target)) {
                return 1;  // Return 1 if a pair is found
            }
            
            // Add the current number to the set for future comparisons
            set.add(num);
        }
        
        // Return 0 if no such pair exists in the array
        return 0;
    }
}
