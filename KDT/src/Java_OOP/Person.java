package Java_OOP;


//기본으로 Object를 상속 받는다.
public class Person extends Object{
	private String name;
	private int age;
	
	//생성자
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
	
	//기존에 Object에 있는 것 내가 마음대로 변경해서 사용한다.
	//어노테이션
	@Override
	public String toString() {
		return "Person/ name: " + name + ", age: "+ age;
	}
	
	
}
