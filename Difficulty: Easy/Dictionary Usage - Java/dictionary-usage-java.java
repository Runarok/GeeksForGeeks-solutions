//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

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
		    int pages[] = new int[n];
		    String words[] = new String[n];
		    
		    int pg =sc.nextInt();
		    for(int i = 0 ; i < n; i++)
		     pages[i] = sc.nextInt();
		     
		   for(int i = 0; i < n; i++)
		    words[i] = sc.next();
		    
		   Geeks obj = new Geeks();
		   obj.Dictionary(pages, words, pg);
		
System.out.println("~");
}
	}
}



// } Driver Code Ends

//User function Template for Java

/* Helper class containing function to complete
pages[]: containing n pages
words[]: containing n words
pg: word specified at this page to be found
*/
class Geeks
{
    // Method to print the word corresponding to page number pg
    @SuppressWarnings("unchecked")
    public static void Dictionary(int pages[], String words[], int pg)
    {
        // Creating a map to store page number as key and corresponding word as value
        HashMap<Integer, String> pageToWordMap = new HashMap<>();
        
        // Populating the map with page and word pairs
        for (int i = 0; i < pages.length; i++) {
            pageToWordMap.put(pages[i], words[i]);
        }
        
        // Printing the word corresponding to the page number 'pg'
        // If page not found, print "null"
        System.out.println(pageToWordMap.getOrDefault(pg, "null"));
    }
}



//{ Driver Code Starts.

// } Driver Code Ends