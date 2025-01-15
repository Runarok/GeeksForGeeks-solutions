class Solution:
    def minAnd2ndMin(self, arr):
            smallest=arr[0]
            secondsmallest=sys.maxsize
            for i in range(1,len(arr)):
               if arr[i]<smallest:
                   secondsmallest=smallest
                   smallest=arr[i]
               elif secondsmallest>arr[i] and arr[i]!=smallest:
                   secondsmallest=arr[i]
            return [smallest,secondsmallest] if secondsmallest!=sys.maxsize else [-1]

#{ 
 # Driver Code Starts
#Initial Template for Python 3


def main():

    T = int(input())

    while (T > 0):

        arr = [int(x) for x in input().strip().split()]

        obj = Solution()
        product = obj.minAnd2ndMin(arr)
        if product[0] == -1:
            print(product[0])
        else:
            print(product[0], end=" ")
            print(product[1])

        T -= 1

        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends