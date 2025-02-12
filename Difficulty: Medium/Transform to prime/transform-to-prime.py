# User function Template for Python3

class Solution:
    def minNumber(self, arr, n):
        """
        Function to find the minimum number to be added to the sum of the array 
        to make it a prime number.

        :param arr: List[int] - The input array.
        :param n: int - The number of elements in the array.
        :return: int - The minimum number to be added.
        """

        def is_prime(num):
            """ Helper function to check if a number is prime. """
            if num < 2:
                return False
            for i in range(2, int(num ** 0.5) + 1):
                if num % i == 0:
                    return False
            return True

        total_sum = sum(arr)  # Calculate the sum of all elements in the array
        add_count = 0  # Counter to track how many numbers need to be added

        # Keep increasing the sum until a prime number is found
        while True:
            if is_prime(total_sum):
                return add_count
            total_sum += 1
            add_count += 1
#{ 
 # Driver Code Starts
#Initial Template for Python 3


t=int(input())
for _ in range(0,t):
    n=int(input())
 #    l=list(map(int,input().split()))
 #    n=l[0]
 #    m=l[1]
    a=list(map(int,input().split()))
   # k = int(input())
  #  b = list(map(int, input().split()))
    ob = Solution()
    ans=ob.minNumber(a,n)
    print(ans)

    print("~")
# } Driver Code Ends