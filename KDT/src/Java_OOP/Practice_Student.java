package Java_OOP;


abstract class Students{
	private String name;
	private String school;
	private int age;
	private int number;
	
	abstract public void todo();

	public Students(String name, String school, int age, int number) {
		this.name = name;
		this.school = school;
		this.age = age;
		this.number = number;
	}
	
	
}

class Kim extends Students{
    public Kim() {
        super("�谡��", "���б�", 19, 202020);
    }
	@Override
	public void todo() {
		System.out.println("������ �谡�� ���");
	}
	
	
}

class Baek extends Students{
	@Override
	public void todo(){
		System.out.println("������ ������ ����");
	}
	public Baek() {
        super("�鰡��", "���ڽ���", 25, 123455);
    }
}


public class Practice_Student {
		
	public static void main(String[] args) {
		Kim kim = new Kim();
		Baek baek = new Baek();
		
		kim.todo();
		baek.todo();
		

	}

}
