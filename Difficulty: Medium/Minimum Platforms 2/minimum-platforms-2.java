//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;

public class Main{
    static BufferedReader br;
    static PrintWriter ot;
    public static void main(String[] args) throws IOException{
        br = new BufferedReader(new InputStreamReader(System.in));
        // br = new BufferedReader(new FileReader("fileInput.txt"));
        ot = new PrintWriter(System.out);

        int t = Integer.parseInt(br.readLine());

        while(t-->0){
            
            ArrayList<Integer> arr = new ArrayList<>();
            ArrayList<Integer> dep = new ArrayList<>();
            ArrayList<Integer> days = new ArrayList<>();

            String s[] = br.readLine().trim().split(" ");
            for(String x : s)
                arr.add(Integer.parseInt(x));

            s = br.readLine().trim().split(" ");
            for(String x : s)
                dep.add(Integer.parseInt(x));

            s = br.readLine().trim().split(" ");
            for(String x : s)
                days.add(Integer.parseInt(x));
            
            int platforms = Integer.parseInt(br.readLine().trim());

            Solution soln = new Solution();
            if(soln.minimumPlatform2(arr, dep, days, platforms))
                ot.println("True");
            else
                ot.println("False");
        }

        ot.close();
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution{
    public boolean minimumPlatform2(ArrayList<Integer> arr, ArrayList<Integer> dep, ArrayList<Integer> days, int platforms){
      
       List<int[]> list = new ArrayList<>();
       
       // Merge arrival and departure times along with corresponding days
       for(int i=0; i < arr.size(); i++) {
           // Adding train arrival with day information (1 indicates arrival)
           list.add(new int[]{arr.get(i), 1, days.get(i)});
           // Adding train departure with day information (0 indicates departure)
           list.add(new int[]{dep.get(i), 0, days.get(i)});
       }
       
       // Sorting the list based on arrival/departure times and days
       list.sort((a1, a2) -> {
           // If both events occur on the same day
           if(a1[2] == a2[2]) {
               if(a1[0] == a2[0]) { 
                   // If arrival times are equal on the same day, sort by event type (departure first)
                   return a1[1] - a2[1];
               } else {
                   // Sort by time (arrival before departure)
                   return a1[0] - a2[0];
               }
           } else {
               // If events are on different days, sort by the day
               return a1[2] - a2[2];
           }
       });
       
       int count = 0;  // To keep track of the number of trains at the station at any point
       int max = 1;    // Variable to track the maximum trains at the station at any point
       
       // Traverse the sorted events
       for(int i=0; i < list.size(); i++) {
           
           // Increase count for each arriving train
           if(list.get(i)[1] == 1) {
               count++;
           } else if(list.get(i)[1] == 0) {
               // Decrease count for each departing train
               count--;
           }
           
           // Track the maximum number of trains present at the station at any time
           max = Math.max(max, count);
       }
       
       // Check if the maximum number of trains at the station exceeds the given number of platforms
       return max <= platforms;
    }
}
