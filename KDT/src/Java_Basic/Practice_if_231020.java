package Java_Basic;

import java.util.Scanner;

public class Practice_if_231020 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("���̸� �Է��ϼ���.");
		
		Scanner scanner = new Scanner(System.in);
		
		int age = scanner.nextInt();
		
		if(age <= 7) {
			System.out.println("����");
		}else if(age <= 13) {
			System.out.println("�ʵ��л�");
		}else if(age <= 16) {
			System.out.println("���л�");
		}else if(age <= 19) {
			System.out.println("����л�");
		}else{
			System.out.println("����");
		}
		
		scanner.close();
	}

}
