function scanCode() {

```
const code = document.getElementById("codeInput").value;

let vulnerabilities = [];
let recommendations = [];
let score = 100;

if (code.trim() === "") {
    alert("Please paste some code first!");
    return;
}

if (code.toLowerCase().includes("password")) {
    vulnerabilities.push("⚠ Hardcoded Password Found");
    recommendations.push("🔹 Store passwords in environment variables instead of source code.");
    score -= 20;
}

if (code.toLowerCase().includes("secret")) {
    vulnerabilities.push("⚠ Secret Key Found");
    recommendations.push("🔹 Store secret keys in a secure vault.");
    score -= 20;
}

if (code.toLowerCase().includes("apikey") ||
    code.toLowerCase().includes("api_key")) {
    vulnerabilities.push("⚠ API Key Exposed");
    recommendations.push("🔹 Never commit API keys to public repositories.");
    score -= 20;
}

if (code.toLowerCase().includes("token")) {
    vulnerabilities.push("⚠ Token Exposed");
    recommendations.push("🔹 Encrypt and rotate authentication tokens regularly.");
    score -= 20;
}

if (code.includes("Runtime.getRuntime().exec")) {
    vulnerabilities.push("⚠ Command Injection Risk");
    recommendations.push("🔹 Validate all user input before executing commands.");
    score -= 20;
}

if (code.includes("Statement.executeQuery")) {
    vulnerabilities.push("⚠ Possible SQL Injection");
    recommendations.push("🔹 Use PreparedStatement instead of raw SQL queries.");
    score -= 20;
}

if (score < 0) {
    score = 0;
}

document.getElementById("score").innerText = score;
document.getElementById("vulnCount").innerText = vulnerabilities.length;

let risk = "SAFE";

if (vulnerabilities.length >= 3) {
    risk = "HIGH";
} else if (vulnerabilities.length > 0) {
    risk = "MEDIUM";
}

document.getElementById("risk").innerText = risk;

// Scan Results
if (vulnerabilities.length === 0) {
    document.getElementById("results").innerHTML =
        "✅ No Vulnerabilities Found. Your code appears secure.";

    document.getElementById("aiAnalysis").innerHTML =
        "🤖 AI Analysis: The code appears secure and follows basic security practices.";

    document.getElementById("recommendations").innerHTML =
        "✅ No recommendations needed.";
}
else {

    document.getElementById("results").innerHTML =
        vulnerabilities.join("<br>");

    document.getElementById("recommendations").innerHTML =
        recommendations.join("<br><br>");

    document.getElementById("aiAnalysis").innerHTML =
        "🤖 AI Analysis: Security risks were detected. Review the recommendations and fix vulnerabilities before deployment.";
}
```

}
