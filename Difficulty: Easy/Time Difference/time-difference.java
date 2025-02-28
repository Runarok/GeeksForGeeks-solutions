//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String st = in.readLine();
            String et = in.readLine();
            
            Solution ob = new Solution();
            System.out.println(ob.timeGap(st, et));
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution{
    static String timeGap(String startTime, String endTime){
        // Split the start time and end time into hours, minutes, and seconds
        String[] startParts = startTime.split(":");
        String[] endParts = endTime.split(":");

        int startHours = Integer.parseInt(startParts[0]);
        int startMinutes = Integer.parseInt(startParts[1]);
        int startSeconds = Integer.parseInt(startParts[2]);

        int endHours = Integer.parseInt(endParts[0]);
        int endMinutes = Integer.parseInt(endParts[1]);
        int endSeconds = Integer.parseInt(endParts[2]);

        // Convert both times into total seconds
        int startTotalSeconds = startHours * 3600 + startMinutes * 60 + startSeconds;
        int endTotalSeconds = endHours * 3600 + endMinutes * 60 + endSeconds;

        // If end time is earlier than start time, it means we crossed midnight
        if (endTotalSeconds < startTotalSeconds) {
            endTotalSeconds += 24 * 3600; // Add 24 hours in seconds to end time
        }

        // Calculate the time difference in seconds
        int differenceInSeconds = endTotalSeconds - startTotalSeconds;

        // Convert the difference back into hours, minutes, and seconds
        int hours = differenceInSeconds / 3600;
        differenceInSeconds %= 3600;
        int minutes = differenceInSeconds / 60;
        int seconds = differenceInSeconds % 60;

        // Return the result formatted as "HH:MM:SS"
        return String.format("%02d:%02d:%02d", hours, minutes, seconds);
    }
}
