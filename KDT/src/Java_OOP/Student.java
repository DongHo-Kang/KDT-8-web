package Java_OOP;

public class Student extends Person{
	private String major;
	
	public Student(String name, int age, String major) {
		//super() : 하위클래스에서 상위클래스 생성자를 호출하는 데 사용.  
		//super 키워드는 상위 클래스에서 오버라이드된 메소드를 호출하는 데 사용
		super(name, age);
		this.major = major;
		
	}
	
	@Override
	public String toString() {
		return "Student/ super: " + super.toString() + ", 전공:"+ major;
	}
	
}
