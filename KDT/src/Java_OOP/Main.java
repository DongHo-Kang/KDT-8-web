package Java_OOP;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//Person Ŭ���� �ν��Ͻ� ����
		Person person = new Person("ȫ�浿", 30);
		System.out.println(person.toString());
//		System.out.println(person.getName());
//		System.out.println(person.getAge());

		
		//Student Ŭ������ �ν��Ͻ� ����
		Student student = new Student("�̸���", 32, "��ǻ�Ͱ���");
		System.out.println(student.toString());
		
		System.out.println(student.getName());
		System.out.println(student.getAge());
		
	}

}
