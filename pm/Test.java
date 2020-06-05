public class Test {
    public Test() {
    System.out.println("ja");
    }
    public Test (String x) {
    this();
    System.out. println("v"+x);
    }
    public static void main(String[] args) {
    Test test=new Test("a");
    }
}
    