package Java_Basic;

import java.util.Scanner;

public class Practice_if2_231020 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("�̸��� �Է��ϼ���.");
		
		Scanner scanner = new Scanner(System.in);
		
		String name = scanner.next();
		
		if(name.equals("ȫ�浿")) {
			System.out.println("����");
		} else if(name.equals("������")) {
			System.out.println("����");
		} else {
			System.out.println("�𸣰ھ��.");
		}
		
		scanner.close();
			
	
	}

}
