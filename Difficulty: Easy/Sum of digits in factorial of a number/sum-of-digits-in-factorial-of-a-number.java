//{ Driver Code Starts
import java.math.BigInteger;
import java.util.*;
class Sum{
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		while(t-->0){
			long n=sc.nextLong();
			GfG g=new GfG();
			System.out.println(g.findSumofDigits(n));
		
System.out.println("~");
}
	}
}
// } Driver Code Ends

/* Complete the function below */
class GfG
{
    long findSumofDigits(long n)
    {
        // Create a BigInteger to hold the factorial result
        BigInteger f = new BigInteger("1");

        // Calculate factorial of n and store in f
        for(long i = 1; i <= n; i++)
        {
            f = f.multiply(BigInteger.valueOf(i));  // Multiply f by i to get the factorial
        }

        // Initialize a new BigInteger to hold the sum of digits
        BigInteger t = f;
        BigInteger sum = new BigInteger("0");

        // Loop through each digit of the factorial result
        while (t.compareTo(BigInteger.valueOf(0)) != 0) 
        {   
            // Get the last digit by taking modulus 10
            BigInteger d = t.mod(BigInteger.valueOf(10));

            // Divide t by 10 to remove the last digit
            t = t.divide(BigInteger.valueOf(10));

            // Add the digit to the sum
            sum = sum.add(d);
        }

        // Return the sum of digits as a long value
        return sum.longValue();
    }
}
