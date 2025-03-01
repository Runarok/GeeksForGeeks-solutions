//{ Driver Code Starts
//Initial Template for Java


import java.util.Scanner;
import java.util.*;

class ArrayList_Collection
{
	public static void main(String args[])
	{
	    //Creating an object of class Scanner
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();//Taking number of testcases
		while(T>0)
		{
			ArrayList<Integer> A = new ArrayList<Integer>();//Declaraing and Initializing an ArrayList
			int q = sc.nextInt();//Taking number of queries
			
			while(q>0)
			{
				char c = sc.next().charAt(0);
				if(c == 'a')
				{
					int x = sc.nextInt();
					add_to_ArrayList(A,x);
				}
				
				if(c == 'b')
					sort_ArrayList_Asc(A);
					
				if(c == 'c')
					reverse_ArrayList(A);
					
				if(c == 'd')
					System.out.print(size_Of_ArrayList(A)+" ");
					
				if(c == 'e')
					print_ArrayList(A);
				
				if(c == 'f')
					sort_ArrayList_Desc(A);
				
			q--;
			}
		T--;
		System.out.println();
		
System.out.println("~");
}
	}
	
// } Driver Code Ends

// User function Template for Java

// Function to add an element to the ArrayList
public static void add_to_ArrayList(ArrayList<Integer> list, int element) {
    list.add(element);
}

// Function to sort the ArrayList in ascending order
public static void sort_ArrayList_Asc(ArrayList<Integer> list) {
    Collections.sort(list);
}

// Function to reverse the ArrayList
public static void reverse_ArrayList(ArrayList<Integer> list) {
    Collections.reverse(list);
}

// Function to return the size of the ArrayList
public static int size_Of_ArrayList(ArrayList<Integer> list) {
    return list.size();
}

// Function to sort the ArrayList in descending order
public static void sort_ArrayList_Desc(ArrayList<Integer> list) {
    Collections.sort(list, Collections.reverseOrder());
}

// Function to print all elements of the ArrayList in a single line with space
public static void print_ArrayList(ArrayList<Integer> list) {
    list.forEach(element -> System.out.print(element + " "));
}



//{ Driver Code Starts.

}
// } Driver Code Ends