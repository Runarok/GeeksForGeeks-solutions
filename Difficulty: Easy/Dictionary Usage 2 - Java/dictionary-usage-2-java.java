//{ Driver Code Starts
//Initial Template for Java


/*package whatever //do not write package name here */

import java.util.*;

class GFG 
{
    
    @SuppressWarnings("unchecked")
	public static void main (String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		
		while(t-- > 0)
		{
		    Dictionary dn = new Hashtable();
		    int n = sc.nextInt();
		    int pages[] = new int[n];
		    String words[] = new String[n];
		    for(int i = 0; i < n; i++)
		       pages[i] = sc.nextInt();
		        
            for(int i = 0; i < n; i++)
                words[i] = sc.next();
		    for(int i = 0; i < n; i++)
		     dn.put(pages[i], words[i]);
		     
		    int pg = sc.nextInt();
		   Geeks obj = new Geeks();
		   obj.Dictionary(dn);
		   obj.sizeAfterRemoval(dn, pg);
		
System.out.println("~");
}
	}
}



// } Driver Code Ends

//User function Template for Java

class Geeks
{
    // Function to display size of dictionary before removal
    @SuppressWarnings("unchecked")
    public static void Dictionary(Dictionary dn)
    {
        // Printing size of dictionary before removing any word
        System.out.println("Size before removing word: " + dn.size());
    }
    
    // Function to remove a word from dictionary and display size after removal
    public static void sizeAfterRemoval(Dictionary dn, int pg)
    {
        // Removing the word corresponding to page number 'pg' from dictionary
        System.out.println("Word removed from dictionary: " + dn.remove(pg));
        
        // Printing size of dictionary after removal
        System.out.println("Size after removing word: " + dn.size());
    }
}



//{ Driver Code Starts.

// } Driver Code Ends