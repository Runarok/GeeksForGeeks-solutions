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
		    int n;
		    int d,m,y;
		    n=sc.nextInt();
		    d=sc.nextInt();
		    m=sc.nextInt();
		    y=sc.nextInt();
		    Geeks obj = new Geeks();
		    obj.timeBeforeAfterNdays(d,m,y,n);
		
System.out.println("~");
}
		
	}
}




// } Driver Code Ends

// User function Template for Java

class Geeks
{
    public static void timeBeforeAfterNdays(int d, int m, int y, int n)
    {
      // Create a Calendar instance to get the current date and time
      Calendar calendar = Calendar.getInstance();
      
      // Set the date using the provided day (d), month (m), and year (y)
      calendar.set(Calendar.DAY_OF_MONTH, d);
      calendar.set(Calendar.MONTH, m - 1); // Months are zero-indexed, so subtract 1 from the month value
      calendar.set(Calendar.YEAR, y);
      
      // Add 'n' days to the current date
      calendar.add(Calendar.DAY_OF_MONTH, n);
      
      // Get the day of the week after the 'n' days have been added
      int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
      
      // Print the day of the week after adding 'n' days
      System.out.println("day after n days: " + dayOfWeek);
    }
}



//{ Driver Code Starts.

// } Driver Code Ends