//{ Driver Code Starts
// Initial Template for C

#include <stdio.h>

struct Complex {
    int real;
    int img;
};


// } Driver Code Ends

// User function Template for C

/*
struct Complex
{
    int real;
    int img;
};
*/

struct Complex add(struct Complex c1, struct Complex c2) {
    struct Complex result;  // To store the sum of the two complex numbers
    result.real = c1.real + c2.real;  // Add the real parts
    result.img = c1.img + c2.img;    // Add the imaginary parts
    return result;  // Return the result
}



//{ Driver Code Starts.

int main() {

    int t;
    scanf("%d", &t);
    while (t--) {
        int real1, img1, real2, img2;
        scanf("%d%d%d%d", &real1, &img1, &real2, &img2);
        struct Complex c1, c2;
        c1.real = real1;
        c1.img = img1;
        c2.real = real2;
        c2.img = img2;

        struct Complex c3;
        c3 = add(c1, c2);

        printf("%d + %di\n", c3.real, c3.img);
    
printf("~%s", "\n");}
    return 0;
}
// } Driver Code Ends