package Java_Interface;

public class LOLGame implements GameConsole{

	@Override
	public void up() {
		// TODO Auto-generated method stub
		System.out.println("������ �̵�");
		
	}

	@Override
	public void down() {
		// TODO Auto-generated method stub
		System.out.println("�ڷ� �̵�");
	}

	@Override
	public void right() {
		// TODO Auto-generated method stub
		System.out.println("���������� �̵�");
	}

	@Override
	public void left() {
		// TODO Auto-generated method stub
		System.out.println("�������� �̵�");
	}

}
