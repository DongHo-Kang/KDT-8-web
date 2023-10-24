package Java_OOP;

public class Practice_Animal {
	private String type;
	private String name;
	private int age;
	
	public Practice_Animal(String type, String name, int age) {
		this.type = type;
		this.name = name;
		this.age = age;
	}

	public String getType() {
		return type;
	}

	public String getName() {
		return name;
	}

	public int getAge() {
		return age;
	}
	
	public String makeSound() {
		return name + "는(은) " + type+ "(으)로 " + age+ "살 이며,";
	}
	
}
