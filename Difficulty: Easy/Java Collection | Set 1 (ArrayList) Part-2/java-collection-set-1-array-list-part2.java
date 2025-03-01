//{ Driver Code Starts
import java.util.Scanner;
import java.util.*;

class ArrayList_Collection
{
	public static void main(String args[])
	{
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T>0)
		{
			ArrayList<Integer> A = new ArrayList<Integer>();
			int q = sc.nextInt();
			
			while(q>0)
			{
				char c = sc.next().charAt(0);
				GfG g = new GfG();
				if(c == 'a')
				{
					int x = sc.nextInt();
					g.add_to_ArrayList(A,x);
				}
				
				if(c == 'b')
					g.sort_ArrayList_Asc(A);
					
				if(c == 'c')
					g.reverse_ArrayList(A);
					
				if(c == 'd')
					System.out.print(g.size_Of_ArrayList(A)+" ");
					
				if(c == 'e')
					g.print_ArrayList(A);
				
				if(c == 'f')
					g.sort_ArrayList_Desc(A);
				
			q--;
			}
		T--;
		System.out.println();
		
System.out.println("~");
}
	}
}
// } Driver Code Ends

class GfG {
    // Adds element x to the ArrayList A
    void add_to_ArrayList(ArrayList<Integer> A, int x) {
        A.add(x);  // Adding element to the list
    }
    
    // Sorts the ArrayList A in ascending order
    void sort_ArrayList_Asc(ArrayList<Integer> A) {
        Collections.sort(A);  // Sorting in ascending order
    }
    
    // Reverses the order of elements in the ArrayList A
    void reverse_ArrayList(ArrayList<Integer> A) {
        Collections.reverse(A);  // Reversing the list
    }
    
    // Returns the size of the ArrayList A
    int size_Of_ArrayList(ArrayList<Integer> A) {
        return A.size();  // Returning the size of the list
    }
    
    // Sorts the ArrayList A in descending order
    void sort_ArrayList_Desc(ArrayList<Integer> A) {
        Collections.sort(A, Collections.reverseOrder());  // Sorting in descending order
    }
    
    // Prints the elements of ArrayList A
    void print_ArrayList(ArrayList<Integer> A) {
        for (Integer i : A) {
            System.out.print(i + " ");  // Printing each element followed by a space
        }
    }
}
