//{ Driver Code Starts
//Initial Template for Java


import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();
        while(T-->0)
        {
            String S = sc.nextLine();
            String[] s = S.split(" ");
            String dd = s[0];
            String mm = s[1];
            String yy = s[2];
            Solution ob = new Solution();
            String res  = ob.closest_date(dd, mm, yy);
            System.out.println(res);
        }
    }
}


// } Driver Code Ends

//User function Template for Java
class Solution
{
    // Function to find the closest future date with the same digit frequency.
    public static String closest_date(String date, String month, String year)
    {
        // Initialize the variables for date, month, and year.
        String nextDate = date;
        String nextMonth = month;
        String nextYear = year;

        // Loop to find the next closest date with the same digit frequency.
        do {
            // Convert string values to integers for manipulation.
            Integer day = Integer.valueOf(nextDate);
            int mon = Integer.valueOf(nextMonth);
            int yr = Integer.valueOf(nextYear);

            // Increment the day, handling month and year transitions.
            if (day < 30) {
                nextDate = (day < 9) ? "0" + (day + 1) : (day + 1) + "";
            } 
            else {
                if (mon < 12) {
                    nextMonth = (mon < 9) ? "0" + (mon + 1) : (mon + 1) + "";
                    nextDate = "01";
                } 
                else {
                    nextYear = (++yr) + "";
                    nextMonth = "01";
                    nextDate = "01";

                    // If the year reaches 10000, return -1 as an invalid case.
                    if (yr == 10000) {
                        return "-1";
                    }
                }
            }
        } while (!hasSameDigitFrequency(date, month, year, nextDate, nextMonth, nextYear));

        // Return the formatted closest date.
        return nextDate + " " + nextMonth + " " + nextYear;
    }
    
    // Function to check if two dates have the same digit frequency.
    public static boolean hasSameDigitFrequency(String d1, String m1, String y1, String d2, String m2, String y2) {
        HashMap<Character, Integer> originalDateDigits = new HashMap<>();
        HashMap<Character, Integer> nextDateDigits = new HashMap<>();

        // Populate the frequency maps for both dates.
        addDigitsToMap(d1, originalDateDigits);
        addDigitsToMap(m1, originalDateDigits);
        addDigitsToMap(y1, originalDateDigits);
        addDigitsToMap(d2, nextDateDigits);
        addDigitsToMap(m2, nextDateDigits);
        addDigitsToMap(y2, nextDateDigits);

        // Compare the frequency maps to check if they match.
        for (Map.Entry<Character, Integer> entry : originalDateDigits.entrySet()) {
            char key = entry.getKey();
            if (!nextDateDigits.containsKey(key) || !nextDateDigits.get(key).equals(entry.getValue())) {
                return false;
            }
        }
        return true;
    }
    
    // Function to add digit frequencies of a string to a given map.
    public static void addDigitsToMap(String s, HashMap<Character, Integer> digitMap) {
        for (int i = 0; i < s.length(); i++) {
            digitMap.put(s.charAt(i), digitMap.getOrDefault(s.charAt(i), 0) + 1);
        }
    }
}
