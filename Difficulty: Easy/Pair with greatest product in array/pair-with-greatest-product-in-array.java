//{ Driver Code Starts
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = Integer.parseInt(scanner.nextLine());

        while (t-- > 0) {
            String line = scanner.nextLine();
            String[] elements = line.split(" ");
            int[] arr = new int[elements.length]; // Corrected to int[]

            for (int i = 0; i < elements.length; i++) {
                arr[i] = Integer.parseInt(elements[i]);
            }

            Solution ob = new Solution();
            System.out.println(ob.findGreatest(arr));
        }
        scanner.close();
    }
}

// } Driver Code Ends

class Solution {
    // Function to find the greatest number based on the conditions
    public int findGreatest(int[] arr) {
        // Create a map to store the frequency of each number
        Map<Integer, Integer> countMap = new HashMap<>();
        int max = -1;  // Variable to store the maximum number found
        
        // Sort the array to ensure we process smaller numbers first
        Arrays.sort(arr);
        
        // Iterate through each number in the sorted array
        for (int num : arr) {
            int sqt = (int) Math.sqrt(num);  // Find the square root of the number
            
            // Check divisors up to the square root of the number
            for (int i = 1; i <= sqt; i++) {
                // If i is a divisor of num, check the conditions
                if (num > max && num % i == 0) {
                    int a = i;
                    int b = num / i;
                    
                    // If both divisors are the same, check the frequency condition
                    if (a == b) {
                        if (countMap.containsKey(a) && countMap.get(a) > 1) {
                            max = num;  // Update max if conditions are met
                        }
                    }
                    // If both divisors exist in the map, update max
                    else if (countMap.containsKey(a) && countMap.containsKey(b)) {
                        max = num;  // Update max
                    }
                }
            }
            // Update the count of the current number in the map
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }
        
        // Return the greatest number found
        return max;
    }
}
