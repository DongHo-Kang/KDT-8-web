package Java_Basic;
import java.util.Scanner;

public class Practice_231020 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner scanner = new Scanner(System.in);
		
	
		System.out.println("이름을 입력하세요.");
		
		String name = scanner.next();
		
		System.out.println("나이를 입력하세요.");
		
		int age = scanner.nextInt();
		
		System.out.printf("안녕하세요! %s님(%d)", name, age);
		
		scanner.close();
		
	}

}
