#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

class Addition:
    @staticmethod
    def add(a, b):
        return a + b


#{ 
 # Driver Code Starts.

# Example usage:
if __name__ == "__main__":
    t = int(input())
    while t:
        t-=1
        a = int(input())
        b = int(input())
        result = Addition.add(a, b)
        print(result)
# } Driver Code Ends