package Java_Generic;

class Pair<K, V>{
	private K Key;
	private V value;
	
	public void getter(K key, V value) {
		this.Key = key;
		this.value = value;
		System.out.println("Key:" + key + ", Value: " + value);
	}
	
}

public class Practcie_Generic {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Pair<String, Integer> pair = new Pair<>();
		pair.getter("One", 1);
		
		Pair<Integer, String> pair2 = new Pair<>();
		pair2.getter(2, "Two");
	}

}

