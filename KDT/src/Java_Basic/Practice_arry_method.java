package Java_Basic;

import java.util.ArrayList;
import java.util.Scanner;

public class Practice_arry_method {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		ArrayList<String> arr = new ArrayList<>();
		String input;
		
		System.out.println("���ڸ� �Է����ּ���:");
		while(!(input = sc.next()).equals("exit")) {
		arr.add(input);
		System.out.println("���ڸ� �Է����ּ���:");
		}
		
		System.out.println(arr.toString());
		

	}

}
