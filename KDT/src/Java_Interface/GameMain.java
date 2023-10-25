package Java_Interface;

public class GameMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//인터페이스를 만들어두면 선언만 변경해주면 편하게 사용할 수 있다.
		//LOLGame lol = new LOLGame();
		//DiabloGame lol = new DiabloGame();
		GameConsole lol = new DiabloGame();
		lol.up();
		lol.down();
		lol.right();
		lol.left();
		
	}

}
