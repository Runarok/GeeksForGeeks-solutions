//{ Driver Code Starts
// Initial Template for Java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // Consume newline

        for (int i = 0; i < t; i++) {
            String[] input = sc.nextLine().split(" ");
            int[] arr = Arrays.stream(input).mapToInt(Integer::parseInt).toArray();

            Solution ob = new Solution();
            long ans = ob.findgroups(arr);
            System.out.println(ans);
            System.out.println("~");
        }

        sc.close();
    }
}

// } Driver Code Ends

class Solution {

    public long findgroups(int[] arr) {
        long count0 = 0, count1 = 0, count2 = 0;

        // Count numbers based on remainder when divided by 3
        for (int num : arr) {
            if (num % 3 == 0) count0++;
            else if (num % 3 == 1) count1++;
            else count2++;
        }

        // Count valid pairs (two numbers whose sum is divisible by 3)
        long pairCount = (count0 * (count0 - 1)) / 2 + (count1 * count2);

        // Count valid triplets (three numbers whose sum is divisible by 3)
        long tripletCount = (count0 * (count0 - 1) * (count0 - 2)) / 6 +  // All from count0
                            (count1 * (count1 - 1) * (count1 - 2)) / 6 +  // All from count1
                            (count2 * (count2 - 1) * (count2 - 2)) / 6 +  // All from count2
                            (count0 * count1 * count2); // One from each group

        return pairCount + tripletCount;
    }
}
