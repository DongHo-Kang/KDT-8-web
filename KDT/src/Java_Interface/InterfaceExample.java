package Java_Interface;

interface Move {
	void moveForward();
	void moveBackward();
	
	
}

interface Power{
	void powerOn();
	void powerOff();
	
}

//�������̽��� �������̽��� ��ӹ��� �� ����
//���� ����� ����
interface Car extends Move, Power{
	void changeGear(int gear);
}

class SUV implements Car {

	@Override
	public void moveForward() {
		// TODO Auto-generated method stub
		System.out.println("������ �̵�");
	}

	@Override
	public void moveBackward() {
		// TODO Auto-generated method stub
		System.out.println("�ڷ� �̵�");		
	}

	@Override
	public void powerOn() {
		// TODO Auto-generated method stub
		System.out.println("���� On");
	}

	@Override
	public void powerOff() {
		// TODO Auto-generated method stub
		System.out.println("���� Off");
	}

	@Override
	public void changeGear(int gear) {
		// TODO Auto-generated method stub
		System.out.println("��� ����: " + gear);
	}
	
}



public class InterfaceExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SUV mySuv = new SUV();
		mySuv.changeGear(1);
		mySuv.moveForward();
		mySuv.moveBackward();
		mySuv.powerOn();
		mySuv.powerOff();
	}

}
