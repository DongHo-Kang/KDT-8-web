package Java_Basic;

import java.util.Scanner;

public class Practice_if_231020 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("나이를 입력하세요.");
		
		Scanner scanner = new Scanner(System.in);
		
		int age = scanner.nextInt();
		
		if(age <= 7) {
			System.out.println("유아");
		}else if(age <= 13) {
			System.out.println("초등학생");
		}else if(age <= 16) {
			System.out.println("중학생");
		}else if(age <= 19) {
			System.out.println("고등학생");
		}else{
			System.out.println("성인");
		}
		
		scanner.close();
	}

}
