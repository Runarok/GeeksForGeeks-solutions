//{ Driver Code Starts
import java.util.Scanner;
import java.util.*;

class Collections_Set_5
{
	public static void main(String args[])
	{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t>0)
		{
			LinkedHashSet<Integer> s = new LinkedHashSet<Integer>() ;
			int q = sc.nextInt();
			
			while(q>0)
			{
				GfG g = new GfG();
				char c = sc.next().charAt(0);
				if(c == 'a')
				{
					int x = sc.nextInt();
					g.insert(s,x);
				}
				if(c =='b')
				{
					g.print_Contents_Increasing_Order(s);
				}
				if(c == 'c')
				{
					int x = sc.nextInt();
					g.erase(s,x);
				}
				if(c == 'd')
				{
					int x = sc.nextInt();
					System.out.print(g.find(s,x)+" ");
				}
				if(c == 'e')
				{
					System.out.print(g.size(s)+" ");
				}
				if(c=='f')
				{
					g.print_Contents_Insertion_Order(s);
				}
			q--;
			//System.out.println();
			}
		t--;
		System.out.println();
		
System.out.println("~");
}
	}
}
// } Driver Code Ends

/* You are required to complete below methods */
class GfG
{
    /* Inserts an element x to the set s */
    void insert(LinkedHashSet<Integer> s, int x)
    {
        // Adds the element x to the set s
        s.add(x);
    }
	
    /* Prints the contents of the set s in ascending order */
    void print_Contents_Increasing_Order(LinkedHashSet<Integer> s)
    {
        // Converts the set to a TreeSet for sorting in ascending order
        Set<Integer> sortedSet = new TreeSet<>(s);
        
        // Prints each element of the sorted set
        for (Integer i : sortedSet) {
            System.out.print(i + " ");
        }
    }

    /* Prints the contents of the set s in insertion order */
    void print_Contents_Insertion_Order(LinkedHashSet<Integer> s)
    {
        // Prints each element of the set in the order of insertion
        for (Integer i : s) {
            System.out.print(i + " ");
        }
    }
	
    /* Erases an element x from the set s */
    void erase(LinkedHashSet<Integer> s, int x)
    {
        // Removes the element x from the set s
        s.remove(x);
    }
	
    /* Returns the size of the set s */
    int size(LinkedHashSet<Integer> s)
    {
        // Returns the number of elements in the set
        return s.size();
    }
		
    /* Returns 1 if the element x is present in set s, else returns -1 */
    int find(LinkedHashSet<Integer> s, int x)
    {
        // Checks if the element x is in the set s
        return s.contains(x) ? 1 : -1;
    }
}
