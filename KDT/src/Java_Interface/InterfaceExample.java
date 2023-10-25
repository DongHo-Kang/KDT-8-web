package Java_Interface;

interface Move {
	void moveForward();
	void moveBackward();
	
	
}

interface Power{
	void powerOn();
	void powerOff();
	
}

//인터페이스는 인터페이스를 상속받을 수 있음
//다중 상속이 가능
interface Car extends Move, Power{
	void changeGear(int gear);
}

class SUV implements Car {

	@Override
	public void moveForward() {
		// TODO Auto-generated method stub
		System.out.println("앞으로 이동");
	}

	@Override
	public void moveBackward() {
		// TODO Auto-generated method stub
		System.out.println("뒤로 이동");		
	}

	@Override
	public void powerOn() {
		// TODO Auto-generated method stub
		System.out.println("엔진 On");
	}

	@Override
	public void powerOff() {
		// TODO Auto-generated method stub
		System.out.println("엔진 Off");
	}

	@Override
	public void changeGear(int gear) {
		// TODO Auto-generated method stub
		System.out.println("기어 변경: " + gear);
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
