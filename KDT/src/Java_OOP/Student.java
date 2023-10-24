package Java_OOP;

public class Student extends Person{
	private String major;
	
	public Student(String name, int age, String major) {
		//super() : ����Ŭ�������� ����Ŭ���� �����ڸ� ȣ���ϴ� �� ���.  
		//super Ű����� ���� Ŭ�������� �������̵�� �޼ҵ带 ȣ���ϴ� �� ���
		super(name, age);
		this.major = major;
		
	}
	
	@Override
	public String toString() {
		return "Student/ super: " + super.toString() + ", ����:"+ major;
	}
	
}
