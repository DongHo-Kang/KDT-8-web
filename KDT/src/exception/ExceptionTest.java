package exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionTest {

	public static void main(String[] args) {
		//예외처리
		int num1 = 4;
		int num2 = 0;
//		System.out.println(num1+"/"+num2+"="+(num1/num2));
//		
//		System.out.println("여기가 읽힐지");
		try {
			System.out.println(num1+"/"+num2+"="+(num1/num2));
		}catch(ArithmeticException e) {
			System.out.println("0으로 나누는 예외가 발생하였습니다.");
		}
		System.out.println("여기가 읽힐지");
		
		//인덱스 범위를 벗어났을 때
		int[] intArr = {1,2,3,4};
		try {
			for(int i = 0; i <intArr.length + 1; i++) {
				System.out.println(intArr[i]);
			}
		}catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("인덱스가 범위를 벗어났습니다.");
		}
		
		//입력오류 시 발생하는 예외
		Scanner sc = new Scanner(System.in);
		System.out.println("정수를 입력하세요: ");
		
		try {
			int n = sc.nextInt();
			
		}catch(InputMismatchException e) {
			System.out.println("입력값이 잘못됨. 정수를 입력해주세요.");
		}
		sc.close();
	}

}
