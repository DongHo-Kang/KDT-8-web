package exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Result_exception2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int size;
		while(true) {
			System.out.print("배열의 크기를 입력하십시오: ");
			size = scanner.nextInt();
			
			if(size < 0) {
				System.out.println("배열의 크기는 음수일 수 없습니다.");
			}else
				break;	
		}
		
		int[] array = new int[size];
		
		try {
			System.out.println("배열 요소를 입력하십시오.");
			for(int i = 0; i < size; i++) {
				array[i] = scanner.nextInt();
			}
			
			double average = calculateAverage(array);
			System.out.println("배열 요소 평균은 " + average + "입니다.");
		} catch (InputMismatchException e) {
			System.out.println("올바른 숫자를 입력하십시오.");
		} catch (ArithmeticException e) {
			System.out.println(e);
			System.out.println("배열의 길이는 0일 수 없습니다.");
		}
		
	}
	
	public static double calculateAverage(int[] array) {
		if(array.length == 0) {
			throw new ArithmeticException("배열의 길이는 0일 수 없습니다.");
		}
		
		int sum = 0;
		for(int value: array) {
			sum += value;
		}
		
		return (double) sum / array.length;
	}

}