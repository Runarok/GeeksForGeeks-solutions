#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3
class ComplexNumber:
    def __init__(self, real, imaginary):
        self.real = real
        self.imaginary = imaginary
    
    # Overload the + operator for adding two complex numbers
    def __add__(self, other):
        if isinstance(other, ComplexNumber):
            # Add the real parts and imaginary parts separately
            real_sum = self.real + other.real
            imaginary_sum = self.imaginary + other.imaginary
            return ComplexNumber(real_sum, imaginary_sum)
        return NotImplemented
    
    # Overload the string representation of the object
    def __str__(self):
        return f"{self.real} + {self.imaginary}i"



#{ 
 # Driver Code Starts.

# Driver code to test the class
if __name__ == "__main__":
    t=int(input())
    while t:
        t-=1
        real1 = int(input())
        img1 = int(input())
        real2 = int(input())
        img2 = int(input())
        
        complex1 = ComplexNumber(real1, img1)
        complex2 = ComplexNumber(real2, img2)
        complex_sum = complex1 + complex2
        print(complex_sum)
# } Driver Code Ends