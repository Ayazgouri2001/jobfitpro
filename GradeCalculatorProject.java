import java.util.Scanner;

class Student {
    String name;
    int rollNo;
    int[] marks;
    int total;
    double percentage;
    char grade;

    // Constructor
    Student(String name, int rollNo, int subjects) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = new int[subjects];
    }

    // Input marks
    void inputMarks(Scanner sc) {
        total = 0;
        for (int i = 0; i < marks.length; i++) {
            System.out.print("Enter marks for Subject " + (i + 1) + ": ");
            marks[i] = sc.nextInt();
            total += marks[i];
        }
        calculate();
    }

    // Calculate percentage & grade
    void calculate() {
        percentage = (double) total / marks.length;
        if (percentage >= 90) grade = 'A';
        else if (percentage >= 75) grade = 'B';
        else if (percentage >= 50) grade = 'C';
        else grade = 'F';
    }

    // Display result
    void displayResult() {
        System.out.println("\n--- Report Card ---");
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("Total Marks: " + total);
        System.out.printf("Percentage: %.2f%%\n", percentage);
        System.out.println("Grade: " + grade);
        System.out.println("-------------------\n");
    }
}

public class GradeCalculatorProject {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("=== Student Grade Calculator ===");
        System.out.print("Enter Student Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Roll Number: ");
        int roll = sc.nextInt();

        System.out.print("Enter number of subjects: ");
        int n = sc.nextInt();

        // Create student object
        Student s1 = new Student(name, roll, n);

        // Input marks
        s1.inputMarks(sc);

        // Show result
        s1.displayResult();

        sc.close();
    }
}
