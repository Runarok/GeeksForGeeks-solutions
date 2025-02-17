//{ Driver Code Starts
//Initial Template for Java

import java.util.*;

class GFG 
{
	public static void main (String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-- > 0)
		{
		    int n = sc.nextInt();
		    String party[] = new String[n];
		    int seats[] = new int[n];
		    for(int i = 0; i < n; i++)
		     party[i] = sc.next();
		     
		    for(int i = 0; i < n; i++)
		     seats[i] = sc.nextInt();
		     
		    Geeks obj = new Geeks();
		    obj.Election2019(party, seats, n);
		    
		
System.out.println("~");
}
	}
}





// } Driver Code Ends

// User function Template for Java

// Helper class containing function Election2019
class Geeks {
    
    /* 
     * Print the name of the parties along with the seats they got in election
     * and print the maximum number of seats received.
     */
    public static void Election2019(String party[], int seats[], int n) {
        // Create a TreeMap to store party names and their respective seat counts
        Map<String, Integer> m = new TreeMap<>();
        // Variable to track the maximum number of seats received
        int max = 0;
        
        // Loop through the parties and their respective seat counts
        for(int i = 0; i < n; i++) {
            // Put party and seat count in the map
            m.put(party[i], seats[i]);
            // Update the maximum seat count
            max = Math.max(max, seats[i]);
        }
        
        // Print each party and the number of seats they received
        for(Map.Entry<String, Integer> e : m.entrySet()) {
            System.out.println(e.getKey() + " " + e.getValue());
        }
        
        // Print the maximum number of seats received
        System.out.println(max);
    }
}

   

//{ Driver Code Starts.

// } Driver Code Ends