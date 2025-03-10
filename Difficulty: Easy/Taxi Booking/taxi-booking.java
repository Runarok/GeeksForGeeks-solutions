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
            
            int N;
            N = Integer.parseInt(br.readLine());
            
            
            int cur;
            cur = Integer.parseInt(br.readLine());
            
            
            int[] pos = IntArray.input(br, N);
            
            
            int[] time = IntArray.input(br, N);
            
            Solution obj = new Solution();
            int res = obj.minimumTime(N, cur, pos, time);
            
            System.out.println(res);
            
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    public static int minimumTime(int N, int curr, int[] pos, int[] time) {
        // Array to store the time taken to reach each position
        int[] arr = new int[N];
        
        // Calculate the time for each person to reach the current position
        for (int i = 0; i < N; i++) {
            // If position is less than current, calculate time to move towards current
            if (pos[i] < curr) {
                arr[i] = (curr - pos[i]) * time[i];
            } else {
                // If position is greater than current, calculate time to move towards current
                if (pos[i] > curr) {
                    arr[i] = (pos[i] - curr) * time[i];
                }
            }
        }
        
        // Find the minimum time
        int min = Integer.MAX_VALUE;
        for (int i = 0; i < N; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        
        return min;
    }
}
