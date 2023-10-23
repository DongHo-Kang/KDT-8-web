package Java_Class;

public class Rectangle {

	private int width;
	private int height;
	
	public int calculateArea() {
		return this.width * this.height;
	}

	public int getWidth() {
		return width;
	}
	public void setWidth(int width) {
		this.width = width;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	
	public void Area() {
		int Area = this.height * this.width; 
		System.out.println(Area);
	}
	
	
}
