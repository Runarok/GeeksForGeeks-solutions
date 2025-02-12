//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

public static boolean isPrime(int num) {
    if (num < 2) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

public static int nextPrime(int n) {
    // Start searching from the next number after n
    int candidate = n + 1;
    
    // Keep increasing the candidate number until we find a prime
    while (!isPrime(candidate)) {
        candidate++;
    }
    
    // Return the next prime number found
    return candidate;
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int n = scn.nextInt();
            int ans = nextPrime(n);
            System.out.println(ans);
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends