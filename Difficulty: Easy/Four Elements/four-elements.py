# User function Template for python3

def find4Numbers( A, n, X):
    # Sort the array to facilitate two-pointer technique
    A.sort()
    
    # Iterate over the first two elements
    for i in range(n-3):
        for j in range(i+1, n-2):
            
            # Initialize the two pointers
            left = j + 1
            right = n - 1
            
            # Use two-pointer approach to find the remaining two numbers
            while left < right:
                
                # Calculate the sum of the four elements
                total = A[i] + A[j] + A[left] + A[right]
                
                # Check if the sum equals the target
                if total == X:
                    return True
                # If the sum is smaller than the target, move the left pointer to the right
                elif total < X:
                    left += 1
                # If the sum is larger than the target, move the right pointer to the left
                else:
                    right -= 1
                    
    # If no such quadruplet is found, return False
    return False


#{ 
 # Driver Code Starts
#Initial Template for Python 3

def main():

    T = int(input())

    while(T > 0):
        n = int(input())
        A = [int(x) for x in input().strip().split()]
        X = int(input())
        
        if find4Numbers(A, n, X):
            print(1)
        else:
            print(0)

        T -= 1


if __name__ == "__main__":
    main()


# } Driver Code Ends