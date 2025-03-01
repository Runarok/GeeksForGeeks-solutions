//{ Driver Code Starts
import java.util.Scanner;
import java.util.*;

class Collections_Set_1
{
	public static void main(String args[])
	{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t>0)
		{
			Set<Integer> s = new HashSet<Integer>() ;
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
					g.print_contents(s);
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
				System.out.print(g.size(s)+" ");
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

class GfG {
    // Method to insert an element into the set
    void insert(Set<Integer> set, int element) {
        // Adding the element to the set
        set.add(element);
    }

    // Method to print the contents of the set in ascending order
    void print_contents(Set<Integer> set) {
        // Creating a TreeSet to automatically sort the elements in ascending order
        TreeSet<Integer> sortedSet = new TreeSet<Integer>();
        sortedSet.addAll(set);
        
        // Iterating over the sorted set and printing each element
        Iterator<Integer> iterator = sortedSet.iterator();
        while(iterator.hasNext()) {
            Integer currentElement = iterator.next();
            System.out.print(currentElement + " ");
        }
    }

    // Method to erase an element from the set
    void erase(Set<Integer> set, int elementToRemove) {
        // Check if the set contains the element to be removed
        if(set.contains(elementToRemove)) {
            // Iterating over the set to find and remove the element
            for(Iterator<Integer> iterator = set.iterator(); iterator.hasNext();) {
                Integer currentElement = iterator.next();
                
                // Removing the element if it matches the one to be erased
                if(currentElement == elementToRemove)
                    iterator.remove();
            }
        }
    }

    // Method to get the size of the set
    int size(Set<Integer> set) {
        // Returning the number of elements in the set
        return set.size();
    }

    // Method to find an element in the set
    int find(Set<Integer> set, int elementToFind) {
        // Checking if the set contains the specified element and returning the result
        if(set.contains(elementToFind)) {
            return 1; // Element found
        } else {
            return -1; // Element not found
        }
    }
}

