package Java_Generic;
import java.util.ArrayList;

//일반 클래스
class MyCustomList{
	ArrayList<String> list = new ArrayList<>();
	
	public void addElement(String element) {
		list.add(element);
	}
	
	public void removeElement(String element) {
		list.remove(element);
	}
	
}

//제네릭 클래스
//코드의 중복을 막고 코드 재사용성을 높이기 위해
//만약, MyCustomList 클래스에 String 말고 int, double 등을 넣을려면 같은 코드를 여러 개 반복해서 코드를 작성해야 한다.
//이를 해결하기 위해 제네릭 클래스를 사용.
//T를 사용함으로서 Main에서 부를 때 타입을 지정해서 사용할 수 있다.

class MyCustomListGeneric<T>{
	
	ArrayList<T> list = new ArrayList<>();
	
	public void addElement(T element) {
		list.add(element);
	}
	
	public void removeElement(T element) {
		list.remove(element);
	}
	public T get(int index) {
		return list.get(index);
	}
	
}

public class Generic {

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MyCustomList list = new MyCustomList();
		list.addElement("element1");
		list.addElement("element2");
//		list.addElement(1);
//		list.addElement(0.4);
		
		MyCustomListGeneric <String> list2 = new MyCustomListGeneric<>();
		list2.addElement("element1");
		list2.addElement("element2");
		list2.addElement("element3");
		String text = list2.get(1);
		System.out.println(text);
		
		MyCustomListGeneric<Integer> list3 = new MyCustomListGeneric<>();
		list3.addElement(3);
		list3.addElement(2);
		list3.addElement(6);
		Integer number = list3.get(2);
		System.out.println(number);
	}

}
