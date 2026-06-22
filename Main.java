public class Main {

    public static void main(String[] args) {

        System.out.println("=================================");
        System.out.println("      SecureCodeAI Scanner");
        System.out.println("=================================");

        String sampleCode =
                "String password = \"admin123\";";

        if (sampleCode.toLowerCase().contains("password")) {
            System.out.println("⚠ Vulnerability Found!");
            System.out.println("Issue: Hardcoded Password");
            System.out.println("Risk Level: HIGH");
            System.out.println("Suggestion: Use environment variables.");
        } else {
            System.out.println("✅ No vulnerabilities found.");
        }
    }
}