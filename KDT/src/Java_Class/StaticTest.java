package Java_Class;

class Student {


	private String name;
	//static 변수는 클래스의 모든 인스턴스에서 공통으로 사용
	private static int studentCount = 0;
	
	public Student(String name) {
		this.name = name;
		this.studentCount++;
	}
	public static int getStudentCount() {
		return studentCount;
	}
}

public class StaticTest{
	public static void main(String[] args) {
		Student s1 = new Student("홍길동");
		Student s2 = new Student("임꺽정");
		Student s3 = new Student("이몽룡");
		
		System.out.println(Student.getStudentCount());
	}
}