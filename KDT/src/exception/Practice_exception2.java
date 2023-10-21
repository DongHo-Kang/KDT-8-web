package exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Practice_exception2 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.println("원하는 배열의 크기를 입력하세요.");
		
		try {
			int sum = 0;
			int size = sc.nextInt();
			int[] arry = new int[size];
			while(true) {
			System.out.println("입력한 숫자만큼 숫자를 입력해주세요.");
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
				System.out.println("입력하신 범위를 벗어났습니다.");
			}
			}
		}catch(InputMismatchException e) {
			System.out.println("숫자를 입력하세요.");
		}
		sc.close();
		
		
	}

}
