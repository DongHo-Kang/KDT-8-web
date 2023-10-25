package Java_Interface;


interface Controller{
	void powerOn();
	void powerOff();
	
	//���� �ڵ带 �� �ϰ� �߰��� interface�� �߰��Ϸ��� �ϸ� default�� �Ἥ �߻� �޼ҵ带 �����ϸ� �ȴ�.
	
	default void display() {
		System.out.println("Display");
	};
}

class TV implements Controller{

	@Override
	public void powerOn() {
		// TODO Auto-generated method stub
		System.out.println("TV power On");
	}

	@Override
	public void powerOff() {
		// TODO Auto-generated method stub
		System.out.println("TV power Off");
	}
	
}

class Computer implements Controller{

	@Override
	public void powerOn() {
		// TODO Auto-generated method stub
		System.out.println("Computer power On");
	}

	@Override
	public void powerOff() {
		// TODO Auto-generated method stub
		System.out.println("Computer power Off");
	}
	
}


public class Electronic {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TV tv = new TV();
		Computer computer = new Computer();
		tv.display();
		tv.powerOn();
		tv.powerOff();
		computer.powerOn();
		computer.powerOff();

	}

}
