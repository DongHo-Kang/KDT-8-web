package Java_Basic;

import java.util.Scanner;

public class Practice_if2_231020 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("이름을 입력하세요.");
		
		Scanner scanner = new Scanner(System.in);
		
		String name = scanner.next();
		
		if(name.equals("홍길동")) {
			System.out.println("남자");
		} else if(name.equals("성춘향")) {
			System.out.println("여자");
		} else {
			System.out.println("모르겠어요.");
		}
		
		scanner.close();
			
	
	}

}
