package Java_Interface;

//인터페이스
//1. 추상화: 메서드를 선언하여 상속 받은 클래스에서 사용하게 함.
//2. 다중 상속: 하나의 클래스는 여러 인터페이스를 구현할 수 있음.
//3. 하나의 인터페이스를 통해 여러 클래스에서 공통의 동작을 정의할 수 있고, 
//각 쿨래스는 그 동작을 자신의 방식대로 재구현할 수 있다.

public interface GameConsole {
	public void up();
	public void down();
	public void right();
	public void left();
}
