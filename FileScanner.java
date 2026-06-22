public class FileScanner {

    public static void scan(String code) {

        if(code.contains("password")) {
            System.out.println("WARNING: Hardcoded Password Found");
        }
    }
}