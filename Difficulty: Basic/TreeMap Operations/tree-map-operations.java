//{ Driver Code Starts
import java.util.Scanner;
import java.util.*;
class HashMap_Set4
{
	public static void main(String args[])
	{
	    //Creating Scanner class to take input
		Scanner sc = new Scanner(System.in);
		
		//taking total count of testcases
		int t = sc.nextInt();
		
		while(t>0)
		{
		        //Declaring and Initializing a new HashMap of Integer,Integer pair
				TreeMap<Integer, Integer> hm = new TreeMap<Integer, Integer>();
				
				//taking total count of queries
				int q = sc.nextInt();
				
				while(q>0)
				{
				    //creating an object of class GfG
					GfG g = new GfG();
					
					//reading the type of query
					char c = sc.next().charAt(0);
					
					//if type is 'a' we add key, value pair in TreeSet
					if(c=='a')
					{
						int x = sc.nextInt();
						int y = sc.nextInt();
						g.add_Value(hm,x,y);
					}
					if(c=='b')//if type is 'b' we find the value of key y
					{
						int y = sc.nextInt();
						System.out.print(g.find_value(hm,y)+" ");
					}
					if(c=='c')//if type is 'c' we find the size of TreeSet
						System.out.print(g.getSize(hm)+" ");
					if(c=='d')//if type is 'd' we remove the key from TreeSet
					{
						int x = sc.nextInt();
						g.removeKey(hm,x);
					}
					if(c=='e')//if type is 'e' we print the elements of TreeSet in sorted order
						g.sorted_By_Key(hm);
					q--;
				}
				System.out.println();
		t--;
		
System.out.println("~");
}
	}
	
}
// } Driver Code Ends

class GfG {
    /* Inserts an entry with key x and value y in map */
    void add_Value(TreeMap<Integer, Integer> hm, int x, int y) {
        hm.put(x, y);
    }

    /* Returns the value with key x from the map */
    int find_value(TreeMap<Integer, Integer> hm, int x) {
        return hm.getOrDefault(x, -1); // Returns -1 if key is not found
    }

    /* Returns the size of the map */
    int getSize(TreeMap<Integer, Integer> hm) {
        return hm.size();
    }

    /* Removes the entry with key x from the map */
    void removeKey(TreeMap<Integer, Integer> hm, int x) {
        hm.remove(x);
    }

    /* Prints map keys in sorted order */
    void sorted_By_Key(TreeMap<Integer, Integer> hm) {
        for (int key : hm.keySet()) {
            System.out.print(key + " ");
        }
    }
}
