package Java_OOP;


//�⺻���� Object�� ��� �޴´�.
public class Person extends Object{
	private String name;
	private int age;
	
	//������
	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public int getAge() {
		return age;
	}
	
	//������ Object�� �ִ� �� ���� ������� �����ؼ� ����Ѵ�.
	//������̼�
	@Override
	public String toString() {
		return "Person/ name: " + name + ", age: "+ age;
	}
	
	
}
