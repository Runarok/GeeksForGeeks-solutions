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
            String[] input = new String[2]; 
            input = br.readLine().split(" "); 
            int n = Integer.parseInt(input[0]); 
            int m = Integer.parseInt(input[1]); 
            String input_line[] = br.readLine().trim().split("\\s+");
            long Arr[]= new long[n];
            for(int i = 0; i < n; i++)
                Arr[i] = Long.parseLong(input_line[i]);
            Solution ob = new Solution();
            System.out.println(ob.minAmountOfTime(Arr, n, m));
        }
    }
}

// } Driver Code Ends

class Solution{
    // Helper function to check if a given mid value is valid for the distribution
    static boolean valid(long arr[], long mid, int n, int m){
        int h = 1;  // Start with one student
        long sum = 0;  // Initialize the current sum for the student

        // Loop through all the books in the array
        for(int i = 0; i < n; i++){
            sum += arr[i];  // Add the current book's pages to the sum
            
            // If the sum exceeds mid, allocate the next student
            if(sum > mid){
                h++;
                sum = arr[i];  // Reset sum to the current book
            }
            
            // If we need more than m students, return false
            if(h > m)
                return false;
        }
        return true;  // If the number of students is less than or equal to m, return true
    }

    // Main function to find the minimum amount of time (maximum pages) that can be allotted
    static long minAmountOfTime(long Arr[], int n, int m){
        long sum = 0;  // To store the sum of all books' pages
        long mx = -1;  // To store the maximum number of pages in a single book

        // Calculate the total sum and the maximum number of pages in any book
        for(int i = 0; i < n; i++){
            mx = Math.max(mx, Arr[i]);
            sum += Arr[i];
        }

        // Binary search for the optimal result between the maximum pages of one book and total sum
        long s = mx;  // The minimum possible value (largest book)
        long e = sum;  // The maximum possible value (total sum of pages)
        long res = -1;  // To store the result (minimum pages allocation for the optimal solution)

        // Perform binary search
        while(s <= e){
            long mid = s + (e - s) / 2;  // Find the middle point
            if(valid(Arr, mid, n, m)){  // If it's possible to allocate with this mid value
                res = mid;  // Store this value as a potential result
                e = mid - 1;  // Try to find a better (smaller) solution
            } else {
                s = mid + 1;  // Otherwise, increase the minimum threshold
            }
        }
        return res;  // Return the optimal minimum value found
    }
}
