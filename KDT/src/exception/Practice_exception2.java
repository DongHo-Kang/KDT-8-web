package exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Practice_exception2 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.println("���ϴ� �迭�� ũ�⸦ �Է��ϼ���.");
		
		try {
			int sum = 0;
			int size = sc.nextInt();
			int[] arry = new int[size];
			while(true) {
			System.out.println("�Է��� ���ڸ�ŭ ���ڸ� �Է����ּ���.");
			try {
				for(int a = 0; a<size; a++) {
					arry[a] = sc.nextInt();
				}
				for(int i = 0; i<arry.length; i++) {
					sum += arry[i];
				}
				System.out.println((double)sum/size);
				break;
			}catch(ArrayIndexOutOfBoundsException e) {
				System.out.println("�Է��Ͻ� ������ ������ϴ�.");
			}
			}
		}catch(InputMismatchException e) {
			System.out.println("���ڸ� �Է��ϼ���.");
		}
		sc.close();
		
		
	}

}
