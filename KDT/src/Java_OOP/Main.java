package Java_OOP;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//Person 클래스 인스턴스 생성
		Person person = new Person("홍길동", 30);
		System.out.println(person.toString());
//		System.out.println(person.getName());
//		System.out.println(person.getAge());

		
		//Student 클래스의 인스턴스 생성
		Student student = new Student("이몽룡", 32, "컴퓨터공학");
		System.out.println(student.toString());
		
		System.out.println(student.getName());
		System.out.println(student.getAge());
		
	}

}
