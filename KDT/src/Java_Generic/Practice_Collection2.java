package Java_Generic;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;


public class Practice_Collection2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		Map<String, Integer> nameMap = new HashMap();
		
		while(true) {
			System.out.println("이름: ");
			String name = scan.nextLine();
			if(name.equals("종료")) {
				break;
			}
			System.out.println("나이: ");
			int age = scan.nextInt();
			
			scan.nextLine();
			
			nameMap.put(name, age);
		}
		System.out.println("입력된 이름과 나이: ");
		for(Map.Entry<String, Integer> entry: nameMap.entrySet()) {
		System.out.println(entry.getKey() + ":"+ entry.getValue());
		}
	}

}
