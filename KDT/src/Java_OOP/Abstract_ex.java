package Java_OOP;

//추상 클래스
abstract class Animals {
	//추상 메서드: 하위 클래스에서 구현해야하는 메서드
	//Aniaml를 상속받는 클래스들에는 sound가 항상 들어가야 한다.
	abstract public void sound();
	
	public void sleep() {
		System.out.println("동물이 잠을 잔다.");
	}
}

//추상클래스 Animals을 상속받는 Dog클래스
class Chicken extends Animals{
	
	//필수 부분 넣기(sound);
	@Override
	public void sound() {
		System.out.println("꼬꼬댁");
	}
}

public class Abstract_ex {
	public static void main(String[] args) {
	//추상 클래스는 인스턴스로 할당 불가.
	//	Animals ani = new Animals();	
	
		
	Chicken chicken = new Chicken();
	
	chicken.sound();
	chicken.sleep();
	}
}
