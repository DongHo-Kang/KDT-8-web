package Java_Basic;
import java.util.Scanner;

public class Practice_231020 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner scanner = new Scanner(System.in);
		
	
		System.out.println("�̸��� �Է��ϼ���.");
		
		String name = scanner.next();
		
		System.out.println("���̸� �Է��ϼ���.");
		
		int age = scanner.nextInt();
		
		System.out.printf("�ȳ��ϼ���! %s��(%d)", name, age);
		
		scanner.close();
		
	}

}
