//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;

class GFG implements Runnable
{
    public static void main(String args[])throws IOException
    {
        new Thread(null, new GFG(), "whatever", 1<<26).start();
    }
    public void run()
    {
        try{
            BufferedReader in=new BufferedReader(new InputStreamReader(System.in));
            PrintWriter out=new PrintWriter(System.out);
            int t=Integer.parseInt(in.readLine());
            while(t-->0){
                int n=Integer.parseInt(in.readLine().trim());
                int a[][]=new int[n][3];
                for(int i=0;i<n;i++){
                    String s[]=in.readLine().trim().split(" ");
                    a[i][0]=Integer.parseInt(s[0]);
                    a[i][1]=Integer.parseInt(s[1]);
                    a[i][2]=Integer.parseInt(s[2]);
                }
                Solution ob=new Solution();
                out.println(ob.maxCoins(n,a));
            
out.println("~");
}
            out.close();
        }catch(Exception e){
            ;
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution{
    // Helper function to perform binary search
    private static int binarySearch(int[][] ranges, int key, int N) {
        int low = 0;
        int high = N - 1;
        int res = -1;
        
        // Perform binary search to find the last range that ends before the current range's start
        while (low <= high) {
            int mid = (low + high) / 2;
            if (ranges[mid][1] <= key) {
                res = mid;
                low = mid + 1;  // Move right to find a larger index
            } else {
                high = mid - 1;  // Move left to find a smaller index
            }
        }
        
        return res;
    }
    
    // Function to calculate the maximum coins collected
    public static int maxCoins(int N, int[][] ranges) {
        
        // Sort the ranges based on the end value, and then by the start value
        Arrays.sort(ranges, new Comparator<int[]>() {
            @Override
            public int compare(int[] a, int[] b) {
                return a[1] == b[1] ? a[0] - b[0] : a[1] - b[1];
            }
        });
        
        // Array to store the maximum coins collected up to each range
        int[] res = new int[N];
        int total = 0;
        int resMax = 0;
        
        // Initialize with the first range's coins
        resMax = total = res[0] = ranges[0][2];
        
        // Iterate through the ranges to calculate the maximum coins
        for (int i = 1; i < N; i++) {
            int start = ranges[i][0];
            int idx = binarySearch(ranges, start, i);  // Find the last range that ends before current range
            
            // Update the maximum coins for the current range
            resMax = res[i] = Math.max(ranges[i][2], resMax);
            
            // If there's no previous range that ends before current range, update total
            if (idx == -1) {
                total = Math.max(total, ranges[i][2]);
            } else {
                // Add the current range's coins to the maximum from the previous valid range
                total = Math.max(total, ranges[i][2] + res[idx]);
            }
        }
        
        // Return the maximum coins collected
        return total;
    }
}
