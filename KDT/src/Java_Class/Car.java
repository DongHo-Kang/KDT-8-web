package Java_Class;

public class Car {
	
	//멤버변수
	private int speed;
	
	//메소드
	void start() {
		System.out.println("Car Start");
	}

	//마우스 우클릭 source에서 getter와 setter를 빠르게 만들 수 있다.
	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		//처음 할당되었을 때는 0으로 할당되어 있다.
		System.out.println(this.speed);
		
		this.speed = speed;
	}
	
//	//setter 메소드
//	void setSpeed(int speed) {
//		this.speed = speed;
//	}
//	
//	//getter 메소드
//	int getSpeed() {
//		return this.speed;
//	}
	
}
