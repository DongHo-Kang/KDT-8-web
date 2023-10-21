package exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Result_exception2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int size;
		while(true) {
			System.out.print("�迭�� ũ�⸦ �Է��Ͻʽÿ�: ");
			size = scanner.nextInt();
			
			if(size < 0) {
				System.out.println("�迭�� ũ��� ������ �� �����ϴ�.");
			}else
				break;	
		}
		
		int[] array = new int[size];
		
		try {
			System.out.println("�迭 ��Ҹ� �Է��Ͻʽÿ�.");
			for(int i = 0; i < size; i++) {
				array[i] = scanner.nextInt();
			}
			
			double average = calculateAverage(array);
			System.out.println("�迭 ��� ����� " + average + "�Դϴ�.");
		} catch (InputMismatchException e) {
			System.out.println("�ùٸ� ���ڸ� �Է��Ͻʽÿ�.");
		} catch (ArithmeticException e) {
			System.out.println(e);
			System.out.println("�迭�� ���̴� 0�� �� �����ϴ�.");
		}
		
	}
	
	public static double calculateAverage(int[] array) {
		if(array.length == 0) {
			throw new ArithmeticException("�迭�� ���̴� 0�� �� �����ϴ�.");
		}
		
		int sum = 0;
		for(int value: array) {
			sum += value;
		}
		
		return (double) sum / array.length;
	}

}