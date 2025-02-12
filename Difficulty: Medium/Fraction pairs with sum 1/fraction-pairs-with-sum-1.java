//{ Driver Code Starts
import java.io.*;
import java.util.*;


class IntArray
{
    public static int[] input(BufferedReader br, int n) throws IOException
    {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for(int i = 0; i < n; i++)
            a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int n;
            n = Integer.parseInt(br.readLine());
            
            
            int[] numerator = IntArray.input(br, n);
            
            
            int[] denominator = IntArray.input(br, n);
            
            Solution obj = new Solution();
            int res = obj.countFractions(n, numerator, denominator);
            
            System.out.println(res);
            
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    // Function to count the number of fractions where their sum equals 1
    public static int countFractions(int n, int[] numerator, int[] denominator) {
        // HashMap to store the fractions and their frequency
        HashMap<Double, Integer> hm = new HashMap<>();
        int count = 0; // Variable to store the count of valid fractions

        // Loop through each fraction
        for (int i = 0; i < n; i++) {
            // Calculate the fraction as a decimal
            double frac = (double) numerator[i] / (double) denominator[i];
            // Calculate the complementary fraction that sums to 1 with frac
            double g = (double) (denominator[i] - numerator[i]) / (double) denominator[i];

            // If the complementary fraction exists in the map, increment the count by its frequency
            if (hm.containsKey(g)) {
                count += hm.get(g);
            }

            // Update the frequency of the current fraction in the map
            if (hm.containsKey(frac)) {
                hm.put(frac, hm.get(frac) + 1);
            } else {
                hm.put(frac, 1);
            }
        }
        // Return the total count of valid fractions
        return count;
    }
}
