//{ Driver Code Starts
//Initial Template for Java

//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;


class Array {
    
    // Driver code
	public static void main (String[] args) throws IOException{
		// Taking input using buffered reader
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testcases = Integer.parseInt(br.readLine());
		
		// looping through all testcases
		while(testcases-- > 0){
		    String line = br.readLine();
		    String[] element = line.trim().split("\\s+");
		    int sizeOfArray = Integer.parseInt(element[0]);
		    
		    int arr [][] = new int[sizeOfArray][2];
		    
		    for(int i = 0;i<sizeOfArray;i++){
    		    line = br.readLine();
    		    String[] elements = line.trim().split("\\s+");
		        arr[i][0] = Integer.parseInt(elements[0]);
		        arr[i][1] = Integer.parseInt(elements[1]);
		    }
		    
		    Complete obj = new Complete();
		    ArrayList<Integer> ans;
		    ans = obj.permute(arr, sizeOfArray);
		    for(int i: ans)
		        System.out.println(i);
		
System.out.println("~");
}
	}
}



// } Driver Code Ends

class Complete{
    
    // Function to permute the array based on the sum of pairs
    public static ArrayList<Integer> permute (int arr[][], int n) {
        // PriorityQueue to sort the pairs based on the sum of the first and second element
        // and, if sums are equal, based on the second element
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]);  // Compare sums
            return Integer.compare(a[1], b[1]);  // Compare indices if sums are equal
        });
        
        // Add the sum of the pair (arr[i][0] + arr[i][1]) along with the index (i+1) to the priority queue
        for (int i = 0; i < arr.length; i++) {
            pq.add(new int[]{arr[i][0] + arr[i][1], i + 1});
        }
        
        // Create a list to store the result
        ArrayList<Integer> ans = new ArrayList<>();
        
        // Poll elements from the priority queue and add their indices to the result list
        while (!pq.isEmpty()) {
            ans.add(pq.poll()[1]);
        }
        
        return ans;  // Return the list of indices in the desired order
    }
}
