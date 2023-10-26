package Java_Generic;
import java.util.ArrayList;

//�Ϲ� Ŭ����
class MyCustomList{
	ArrayList<String> list = new ArrayList<>();
	
	public void addElement(String element) {
		list.add(element);
	}
	
	public void removeElement(String element) {
		list.remove(element);
	}
	
}

//���׸� Ŭ����
//�ڵ��� �ߺ��� ���� �ڵ� ���뼺�� ���̱� ����
//����, MyCustomList Ŭ������ String ���� int, double ���� �������� ���� �ڵ带 ���� �� �ݺ��ؼ� �ڵ带 �ۼ��ؾ� �Ѵ�.
//�̸� �ذ��ϱ� ���� ���׸� Ŭ������ ���.
//T�� ��������μ� Main���� �θ� �� Ÿ���� �����ؼ� ����� �� �ִ�.

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
