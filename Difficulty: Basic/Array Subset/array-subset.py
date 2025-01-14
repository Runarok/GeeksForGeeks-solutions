class Solution:
    # Function to check if b[] is a subset of a[]
    def isSubset(self, a, b):
        # Convert a[] into a set for fast look-up
        set_a = set(a)
        
        # Check if each element of b[] is present in set_a
        for element in b:
            if element not in set_a:
                return False
        
        return True

#{ 
 # Driver Code Starts
#Initial Template for Python 3


def main():

    T = int(input())

    while (T > 0):
        a1 = [int(x) for x in input().strip().split()]
        a2 = [int(x) for x in input().strip().split()]
        ob = Solution()
        if ob.isSubset(a1, a2):
            print("true")
        else:
            print("false")

        T -= 1

        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends