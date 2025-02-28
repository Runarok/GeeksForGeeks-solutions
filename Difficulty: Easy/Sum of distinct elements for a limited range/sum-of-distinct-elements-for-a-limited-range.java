//{ Driver Code Starts
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = Integer.parseInt(scanner.nextLine());

        while (t-- > 0) {
            String line = scanner.nextLine();
            String[] elements = line.split(" ");
            int arr[] = new int[elements.length];

            for (int i = 0; i < elements.length; i++) {
                arr[i] = Integer.parseInt(elements[i]);
            }

            Solution ob = new Solution();
            System.out.println(ob.sumOfDistinct(arr));
        }
        scanner.close();
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to calculate the sum of distinct elements in the array.
    public int sumOfDistinct(int[] arr) {
        // Create a HashSet to store distinct elements
        HashSet<Integer> hset = new HashSet<>();
        
        // Add each element of the array to the HashSet (duplicates are automatically ignored)
        for (int i = 0; i < arr.length; i++) {
            hset.add(arr[i]);
        }
        
        // Initialize sum to 0
        int sum = 0;
        
        // Iterate over the HashSet and calculate the sum of distinct elements
        for (int ele : hset) {
            sum += ele;
        }
        
        // Return the sum of distinct elements
        return sum;
    }
}
