package Java_Basic;

import java.util.Scanner;

public class Practice_method_231020 {
	
	public static double add (double a, double b) {
		return a + b;
	}
	public static double sub (double a, double b) {
		return a - b;
	}
	public static double div (double a, double b) {
		return a / b;
	}
	public static double muti(double a, double b) {
		return a * b;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("���� �� ���� �Է��ϼ���.");
		
		Scanner scanner = new Scanner(System.in);
		
		double num1 = scanner.nextInt();
		double num2 = scanner.nextInt();
		
		System.out.printf("���� ���: %f",add(num1,num2)).println();
		System.out.printf("���� ���: %f",sub(num1,num2)).println();
		System.out.printf("������ ���: %f",div(num1,num2)).println();
		System.out.printf("���� ���: %f",muti(num1,num2)).println();
		
		scanner.close();
		
		
	}

}
