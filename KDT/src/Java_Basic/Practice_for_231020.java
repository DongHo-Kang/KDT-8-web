package Java_Basic;

import java.util.Scanner;

public class Practice_for_231020 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

		System.out.println("숫자를 입력하세요.");
		
		int number = scanner.nextInt();
		
		for(int i=1; i<=number; i++) {
			System.out.printf("%d ", i);
			
		}
		
		scanner.close();
	}

}
