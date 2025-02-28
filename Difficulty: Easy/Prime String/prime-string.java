//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    int n = sc.nextInt();
                    String s = sc.next();
                    
                    Solution ob = new Solution();
                    if(ob.isPrimeString(s))
                        System.out.println("YES");
                    else
                        System.out.println("NO");
                }
                
        }
}

// } Driver Code Ends

//User function Template for Java

class Solution
{
    public boolean isPrimeString(String s)
    {
        int sum = 0;
        for (char ch : s.toCharArray()) {
            sum += ch;
        }

        return isPrime(sum);
    }

    private boolean isPrime(int num) {
        if (num <= 1) return false; // Prime numbers are greater than 1
        if (num == 2) return true; // 2 is the smallest prime number
        
        for (int i = 2; i * i <= num; i++) { // Loop only up to √num
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
