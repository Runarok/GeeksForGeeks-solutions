//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S1[] = read.readLine().split(" ");
            String S2[] = read.readLine().split(" ");
            
            int d1 = Integer.parseInt(S1[0]);
            int m1 = Integer.parseInt(S1[1]);
            int y1 = Integer.parseInt(S1[2]);
            
            int d2 = Integer.parseInt(S2[0]);
            int m2 = Integer.parseInt(S2[1]);
            int y2 = Integer.parseInt(S2[2]);
            
            Solution ob = new Solution();
            System.out.println(ob.noOfDays(d1,m1,y1,d2,m2,y2));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int noOfDays(int d1, int m1, int y1, int d2, int m2, int y2) {
        // Calculate the total days for both dates and return the absolute difference
        int totalDays1 = calculateDays(d1, m1, y1);
        int totalDays2 = calculateDays(d2, m2, y2);
        return Math.abs(totalDays2 - totalDays1);
    }

    static int calculateDays(int day, int month, int year) {
        // Array representing days in each month (non-leap year)
        int daysInMonth[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        // Adjust February for leap years
        if (isLeapYear(year)) {
            daysInMonth[1] = 29;
        }

        // Calculate total days from the beginning of the given year
        int totalDays = day;
        for (int i = 0; i < month - 1; i++) {
            totalDays += daysInMonth[i];
        }

        // Add days from previous years
        for (int i = 1; i < year; i++) {
            totalDays += isLeapYear(i) ? 366 : 365;
        }

        return totalDays;
    }

    static boolean isLeapYear(int year) {
        // A year is a leap year if it is divisible by 4,
        // but not by 100 unless it is also divisible by 400
        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    }
}
