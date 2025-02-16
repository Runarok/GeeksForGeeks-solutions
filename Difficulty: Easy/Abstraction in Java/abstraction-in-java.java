//{ Driver Code Starts
// Initial Template for Java
import java.util.*;


// } Driver Code Ends

// User function Template for Java

// Abstract class Shape representing a geometric shape
abstract class Shape {
    
    String color; // Stores the color of the shape
    
    // Constructor to initialize color
    Shape(String color) {
        this.color = color;
    }
    
    // Method to retrieve the color of the shape
    String getColor() {
        return color;
    }
    
    // Abstract method to compute area, to be implemented by subclasses
    abstract double getArea();
} 

// Square class extending Shape, representing a square
class Square extends Shape {
    
    double side; // Stores the side length of the square
    
    // Constructor to initialize color and side length
    Square(String color, double side) {
        super(color); // Call the parent class constructor
        this.side = side;
    }
    
    // Overridden method to calculate the area of the square
    @Override
    double getArea() {
        return side * side;
    }
}


//{ Driver Code Starts.

public class GFG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = Integer.parseInt(sc.nextLine());
        while (tc-- > 0) {
            String color = sc.nextLine();
            double side = Double.parseDouble(sc.nextLine());
            Shape sq1 = new Square(color, side);
            System.out.println(sq1.getColor() + " " + sq1.getArea());
            Square sq2 = new Square(color, side);
            System.out.println(sq1.getColor() + " " + sq1.getArea());
        }
    }
}
// } Driver Code Ends