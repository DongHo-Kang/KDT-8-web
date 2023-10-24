package Java_Class;

class Student {


	private String name;
	//static ������ Ŭ������ ��� �ν��Ͻ����� �������� ���
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
		Student s1 = new Student("ȫ�浿");
		Student s2 = new Student("�Ӳ���");
		Student s3 = new Student("�̸���");
		
		System.out.println(Student.getStudentCount());
	}
}