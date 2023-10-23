package Java_Class;

public class Car {
	
	//접근제어자
	//public: 같은 클래스O, 같은 패키지O, 자식 클래스O, 전체O
	//protected: 같은 클래스O, 같은 패키지O, 자식 클래스O
	//default: 같은 클래스O, 같은 패키지O
	//private: 같은 클래스O
	
	//멤버변수
	private int speed;
	
	//생성자
	//클래스명과 동일해야함.
	public Car(int speed) {
		this.speed = speed;
	}
	
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
		//유효성 검사
		if(speed > 0) {
		this.speed = speed;
		}
		
	}
	
	//중복 방지를 위한 메소드
	public void increaseSpeed(int speed) {
		this.speed = this.speed + 100;
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
