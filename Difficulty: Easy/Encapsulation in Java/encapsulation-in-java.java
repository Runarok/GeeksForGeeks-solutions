//{ Driver Code Starts
import java.util.*;
import java.util.regex.*;


// } Driver Code Ends

// User function Template for Java
//  Write the complete Person class here
class Person {
    // Private attributes with default values
    private String name = "Geeks";
    private int age = 10;

    // Public getter method to access name
    public String getName() {
        return this.name;
    }

    // Public setter method to modify name
    public void setName(String name) {
        this.name = name;
    }

    // Public getter method to access age
    public int getAge() {
        return this.age;
    }

    // Public setter method to modify age
    public void setAge(int age) {
        this.age = age;
    }
}



//{ Driver Code Starts.

public class GFG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        sc.nextLine();
        while (tc-- > 0) {
            String func[] = sc.nextLine().trim().split(" ");
            ArrayList<String> ans = new ArrayList<>();
            boolean called = false;
            Person person = new Person();
            for (String call : func) {
                // System.out.println(call);
                String arr[] = parseFunction(call);
                // System.out.println(arr[0]+" "+arr[1]);
                if (arr[0].equals("Person")) {
                    called = true;
                    continue;
                }
                if (arr[0].equals("getName") && called) {
                    ans.add(person.getName());
                    continue;
                }
                if (arr[0].equals("getAge") && called) {
                    ans.add(person.getAge() + "");
                    continue;
                }
                if (arr[0].equals("setName") && called) {
                    arr[1] = arr[1].substring(1, arr[1].length() - 1);
                    person.setName(arr[1]);
                    continue;
                }
                if (arr[0].equals("setAge") && called) {
                    person.setAge(Integer.parseInt(arr[1]));
                    continue;
                }
                if (!called) {
                    ans.add("Person object not created");
                    break;
                }
            }
            if (ans.size() == 0) {
                System.out.println("[]");
            } else {
                for (String s : ans) {
                    System.out.print(s + " ");
                }
                System.out.println();
            }
        }
    }

    public static String[] parseFunction(String input) {
        String[] result = new String[2];

        // Regular expression to match method name and optional parameter
        Pattern pattern = Pattern.compile("([a-zA-Z]+)\\((.*?)\\)");
        Matcher matcher = pattern.matcher(input);

        if (matcher.find()) {
            result[0] = matcher.group(1); // Method name
            result[1] = matcher.group(2); // Parameter value
        }

        return result;
    }
}
// } Driver Code Ends