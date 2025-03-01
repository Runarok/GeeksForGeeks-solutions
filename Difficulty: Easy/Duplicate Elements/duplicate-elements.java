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
		    int arr[] = new int[n];
		    for(int i = 0; i < n; i++)
		     arr[i] = sc.nextInt();
		     
		    Geeks obj = new Geeks();
		    obj.SortedDuplicates(arr, n);
		    System.out.println();  // print the newline
		    
		
System.out.println("~");
}
	}
}




// } Driver Code Ends

//User function Template for Java

/* Helper class containing function SortedDuplicates
containing arguments
arr[]: the duplicated array
n: size of the array
*/
class Geeks
{
    // Print the elements which appear more than once in the array in sorted order
    public static void SortedDuplicates(int arr[], int n)
    {
        // Create a map to store the count of each element
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Iterate through the array and count occurrences of each element
        for (int i = 0; i < n; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }
        
        // Create a list of elements with more than one occurrence
        ArrayList<Integer> list = new ArrayList<>();
        for (Integer key : map.keySet()) {
            if (map.get(key) > 1) {
                list.add(key);
            }
        }
        
        // Sort the list
        Collections.sort(list);
        
        // If no duplicates found, print -1
        if (list.isEmpty()) {
            System.out.print(-1);
            return;
        }
        
        // Print the sorted duplicates
        for (int i : list) {
            System.out.print(i + " ");
        }
    }
}


//{ Driver Code Starts.

// } Driver Code Ends