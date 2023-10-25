package Java_Interface;

interface Playable{
	void play();
	void pause();
	void stop();
}

class MP3Player implements Playable{

	@Override
	public void play() {
		// TODO Auto-generated method stub
		System.out.println("MP3 재생");
	}

	@Override
	public void pause() {
		// TODO Auto-generated method stub
		System.out.println("MP3 일시중지");	
	}

	@Override
	public void stop() {
		// TODO Auto-generated method stub
		System.out.println("MP3 정지");
	}
	
}

class DVDPlayer implements Playable{

	@Override
	public void play() {
		// TODO Auto-generated method stub
		System.out.println("DVD 재생");
	}

	@Override
	public void pause() {
		// TODO Auto-generated method stub
		System.out.println("DVD 일시중지");	
	}

	@Override
	public void stop() {
		// TODO Auto-generated method stub
		System.out.println("DVD 정지");
	}
	
}

public class Practice_ineterface {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MP3Player mp3 = new MP3Player();
		DVDPlayer dvd =new DVDPlayer();
		mp3.pause();
		mp3.play();
		mp3.stop();
		
		dvd.pause();
		dvd.play();
		dvd.stop();

	}

}
