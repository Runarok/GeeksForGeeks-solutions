//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String s1 = br.readLine().trim();
            String []S1 = s1.split(" ");
            int n = Integer.parseInt(S1[0]);
            long C = Long.parseLong(S1[1]);
            String s2 = br.readLine().trim();
            String []S2 = s2.split(" ");
            long [] w = new long[n];
            long [] p = new long[n];
            for(int i = 0; i < n; i++){
                w[i] = Long.parseLong(S2[2*i]);
                p[i] = Long.parseLong(S2[(2*i)+1]);
            }
            Solution ob = new Solution();
            double ans = ob.maximumProfit(n, C, w, p);
            String a1 = String.format("%.3f",ans);
            System.out.println(a1);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    class S {
        long price;
        long wait;
        double dis;
        
        public S(long p, long w, double d) {
            this.price = p;
            this.wait = w;
            this.dis = d;
        }
    }
    
    public double maximumProfit(int N, long c, long w[], long p[]) {
        double ans = 0.0;
        S[] dp = new S[N];
        
        // Create an array of S objects to hold price, wait time, and price-to-wait ratio
        for (int i = 0; i < N; i++) {
            double d = (double) p[i] / w[i];  // Calculate the price-to-wait ratio
            dp[i] = new S(p[i], w[i], d);  // Store values in S object
        }
        
        // Comparator to sort the objects based on price-to-wait ratio in descending order
        Comparator<S> com = new Comparator<S>() {
            public int compare(S A, S B) {
                return Double.compare(B.dis, A.dis);
            }
        };
        
        Arrays.sort(dp, com);  // Sort the array of S objects by the ratio in descending order
        
        // Process each object in the sorted list
        for (int i = 0; i < N; i++) {
            double sqrt = Math.sqrt(dp[i].wait);  // Calculate square root of wait time
            
            // Skip this item if wait time is a perfect square
            if (sqrt - Math.floor(sqrt) == 0) {
                continue;
            }
            
            // If there's remaining capacity to use the current object
            if (c > 0) {
                if (dp[i].wait <= c) {
                    ans += dp[i].price;  // Take the whole price if wait time fits within capacity
                    c -= dp[i].wait;     // Reduce the remaining capacity
                } else {
                    // If the wait time exceeds the remaining capacity, take the fraction of the price
                    ans += (double) dp[i].dis * c;
                    return Math.round(ans * 1000.0) / 1000.0;  // Return the answer rounded to 3 decimal places
                }
            } else {
                break;  // Exit loop if there's no more capacity
            }
        }
        
        return Math.round(ans * 1000.0) / 1000.0;  // Return the final answer rounded to 3 decimal places
    }
}
