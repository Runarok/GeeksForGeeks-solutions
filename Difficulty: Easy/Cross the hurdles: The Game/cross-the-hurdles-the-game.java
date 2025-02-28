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
		    
		    int arr [] = new int[sizeOfArray];
		    int brr [] = new int[sizeOfArray];
		    
		    line = br.readLine();
		    String[] elements = line.trim().split("\\s+");
		    for(int i = 0;i<sizeOfArray;i++){
		        arr[i] = Integer.parseInt(elements[i]);
		    }
		    
		    line = br.readLine();
		    String[] ele = line.trim().split("\\s+");
		    for(int i = 0;i<sizeOfArray;i++){
		        brr[i] = Integer.parseInt(ele[i]);
		    }
		    
		    
		    Complete obj = new Complete();
		    long ans = obj.game(arr, brr, sizeOfArray);
		    if(ans == -1){
                System.out.println("Game Over");
            }
            else{
                System.out.println("You Win! " + ans);
            }
		    
		}
	}
}



// } Driver Code Ends

class Complete {

    // Function for finding maximum and value pair
    public static long game(int arr[], int brr[], int n) {
        // Complete the function
        
        // Initial check: if the first element in arr is less than the first element in brr, return -1
        if (arr[0] < brr[0]) {
            return -1;
        }

        // Initial energy is calculated as the difference between arr[0] and brr[0], plus 1
        long energy = arr[0] - brr[0] + 1;

        // Iterate through the rest of the arrays
        for (int i = 1; i < n; i++) {
            energy += arr[i];  // Add arr[i] to the energy
            if (energy < brr[i]) {  // If energy is less than brr[i], return -1
                return -1;
            } else {
                // Update the energy after subtracting brr[i] and adding (i + 1)
                energy = energy - brr[i] + (i + 1);
            }
        }

        // Return the remaining energy
        return energy;
    }

}
