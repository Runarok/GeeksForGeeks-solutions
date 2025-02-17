//{ Driver Code Starts
import java.io.*;
import java.util.*;

// } Driver Code Ends

class Solution{
    static String findDay(int dayOfMonth, int month, int year){
        // Array containing the names of the days in a week, starting from Sunday
        String[] daysOfWeek = {"SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"};
        
        // Create a Calendar object to manipulate the date
        Calendar calendar = Calendar.getInstance();
        
        // Set the calendar's date to the provided year, month (adjusted for 0-based index), and day
        calendar.set(year, month - 1, dayOfMonth);
        
        // Get the numeric day of the week (1 = Sunday, 7 = Saturday)
        int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
        
        // Return the name of the day corresponding to the day of the week
        return daysOfWeek[dayOfWeek - 1];
    }
}


//{ Driver Code Starts.
class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String input_line[] = read.readLine().trim().split(" ");
            
            String day = input_line[0];
            String month = input_line[1];
            String year = input_line[2];
            int yyyy = Integer.parseInt(year);
            int mm = Integer.parseInt(month);
            int dd = Integer.parseInt(day);

            Solution ob = new Solution();
            System.out.println(ob.findDay(dd,mm,yyyy));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends