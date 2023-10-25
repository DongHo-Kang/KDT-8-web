package Java_Interface;

public class LOLGame implements GameConsole{

	@Override
	public void up() {
		// TODO Auto-generated method stub
		System.out.println("앞으로 이동");
		
	}

	@Override
	public void down() {
		// TODO Auto-generated method stub
		System.out.println("뒤로 이동");
	}

	@Override
	public void right() {
		// TODO Auto-generated method stub
		System.out.println("오른쪽으로 이동");
	}

	@Override
	public void left() {
		// TODO Auto-generated method stub
		System.out.println("왼쪽으로 이동");
	}

}
