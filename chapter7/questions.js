let questions = [
  {
    numb: 1,
    question:
      "An IDS has sent multiple alerts in response to increased traffic. Upon investigation, you realize it is due to a spike in network traffic from several sources. Assuming this is malicious, which of the following is the MOST likely explanation?",
    answer: "D. A DDoS attack",
    explanation:
      "A distributed denial-of-service (DDoS) attack causes spikes in network traffic as multiple systems attempt to connect to a server and deplete the target's resources. An Address Resolution Protocol (ARP)poisoning attack attempts to mislead systems about the source media access control (MAC) address. A Domain Name System (DNS) poisoning attack attempts to redirect web browsers to malicious URLs. In a domain hijacking attack, an attacker changes a domain name registration without permission from the owner.",
    options: [
      "A. An ARP poisoning attack",
      "B. A DNS poisoning attack",
      "C. A domain hijacking attack",
      "D. A DDoS attack",
    ],
  },
  {
    numb: 2,
    question:
      "While investigating performance issues on a web server, you verified that the CPU usage was about 10 percent five minutes ago. However, it now shows that CPU usage has been averaging over 98 percent for the last two minutes. Which of the following BEST describes what this web server is experiencing?",
    answer: "A. Resource exhaustion",
    explanation:
      "CPU usage averaging 98 percent indicates resource exhaustion. The scenario doesn't indicate the cause of the increased usage, so resource exhaustion is the best answer. A distributed denial-of-service(DDoS) attack could cause this. However, a surge in traffic from an effective marketing campaign sent via email could also cause a surge in resource usage. A buffer overflow attack is a type of DDoS attack, but the scenario doesn't give enough information to indicate a buffer overflow attack has taken place. The scenario only mentions CPU usage, so there isn't any indication of a memory leak.",
    options: [
      "A. Resource exhaustion",
      "B. DDoS",
      "C. A buffer overflow attack",
      "D. A memory leak",
    ],
  },
  {
    numb: 3,
    question:
      "An administrator regularly connects to a server using SSH without any problems. Today, he sees a message similar to the following graphic when he connects to the server. Which of the following is the MOST likely reason for this message?",
    answer: "B. On-path attack",
    explanation:
      "The message indicates a potential man-in-the-middle(MITM) attack, which is also known as an on-path attack. Specifically, it indicates that the key on the host system has changed, which may be due to the administrator connecting to the MITM system instead of the target system. None of the other answers are related to incorrect cryptographic keys. A rogue access point is an unauthorized wireless access point. Media access control (MAC) flooding is an attack on a switch, attempting to overload it with different MAC addresses. An Address Resolution Protocol(ARP) poisoning attack misleads computers or switches about an actual MAC address.",
    options: [
      "A. Rogue access point",
      "B. On-path attack",
      "C. MAC flooding",
      "D. ARP poisoning",
    ],
  },
  {
    numb: 4,
    question:
      "Homer complains that his system started acting erratically today. You discover that malware infected his system, but you discover he didn't open any emails during the day. He mentions that he has been browsing the Internet all day. Which of the following could you check to see where the malware MOST likely originated?",
    answer: "D. DNS server logs",
    explanation:
      "Domain Name System (DNS) logs will record DNS queries, such as what hostnames it resolved to IP addresses. The log entries would show all the domains that Homer visited during the day. One of these is most likely the one that downloaded malware onto his system. A web server would show activity on the web server, but you wouldn't have access to web servers controlled by others. Homer didn't open any emails, so the mail server logs wouldn't help. PowerShell logs may show activity, but only if the malware used PowerShell. However, the PowerShell logs are unlikely to show who ran PowerShell scripts.",
    options: [
      "A. Web server logs",
      "B. Mail server logs",
      "C. PowerShell logs",
      "D. DNS server logs",
    ],
  },
  {
    numb: 5,
    question:
      "While reviewing logs for a web application, a security analyst notices that it has crashed several times, reporting a memory error. Shortly after it crashes, the logs show malicious code that isn't part of a known application. Which of the following is MOST likely occurring?",
    answer: "A. Buffer overflow",
    explanation:
      "Buffer overflow attacks often cause an application to crash and expose system memory. Attackers then write malicious code into the exposed memory and use different techniques to get the system to run this code. None of the other attacks insert malicious code into memory. An AnAddress Resolution Protocol (ARP) poisoning attack attempts to mislead systems about the source media access control (MAC) address. Privilege escalation techniques attempt to give an attacker more rights and permissions. In a replay attack, the attacker intercepts data and typically attempts to use the intercepted data to impersonate a user or system.",
    options: [
      "A. Buffer overflow",
      "B. ARP poisoning",
      "C. Privilege escalation",
      "D. Replay",
    ],
  },
  {
    numb: 6,
    question:
      "Web developers are implementing error handling in a database application accessed by a web server. Which of the following would be the BEST way to implement this?",
    answer:
      "B. Display a generic error message but log detailed information on the error",
    explanation:
      "You should display a generic error message but log detailed information on the error. Detailed error messages to the user are often confusing to them and give attackers information they can use against the system. Logging generic information makes it more difficult to troubleshoot the problem later.",
    options: [
      "A. Display a detailed error message but log generic information on the error",
      "B. Display a generic error message but log detailed information on the error",
      "C. Display a generic error message and log generic information on the error",
      "D. Display a detailed error message and log detailed information on the error",
    ],
  },
  {
    numb: 7,
    question:
      "A web developer is adding input validation techniques to a website application. Which of the following should the developer implement during this process?",
    answer: "A. Validation on the server-side",
    explanation:
      "At a minimum, input validation should be performed on the server side. Client-side validation can be combined with server-side validation, but attackers can bypass client-side input validation if it is used alone. Normalization techniques organize tables and columns in a database to reduce redundant data but have nothing to do with input validation. Memory management is a secure coding technique that helps prevent memory errors.",
    options: [
      "A. Validation on the server-side",
      "B. Validation on the client-side",
      "C. Normalization techniques",
      "D. Memory management techniques",
    ],
  },
  {
    numb: 8,
    question:
      "Developers in the YCDA organization have created an application that users can download and install on their computers. Management wants to provide users with a reliable method of verifying that the application has not been modified after YCDA released it. Which of the following methods provide the BEST solution?",
    answer: "A. Code signing",
    explanation:
      "Code signing provides a digital signature for the code, verifies the publisher of the code, and verifies that it hasn’t been modified since the publisher released it. None of the other answers verify that the application hasn't been modified. Input validation verifies data is valid before using it. Code obfuscation or code camouflage techniques make the code more difficult to read. Stored procedures are used with SQL databases and can be used for input validation.",
    options: [
      "A. Code signing",
      "B. Input validation",
      "C. Obfuscation",
      "D. Stored procedures",
    ],
  },
  {
    numb: 9,
    question:
      "Your organization is preparing to deploy a web-based application, which will accept user input. Which of the following will BEST test the reliability of this application to maintain availability and data integrity?",
    answer: "D. Dynamic code analysis",
    explanation:
      "Dynamic code analysis techniques test an application during its execution and are the best choice of the available answers to verify the application can maintain availability and data integrity. Static code analysis (such as a manual code review) is done without executing any code, but it won't test its reliability. Input validation is the practice of checking data for validity before using it, but this is done within the application, not as a method to test the application. Error-handling techniques are also done within the application.",
    options: [
      "A. Static code analysis",
      "B. Input validation",
      "C. Error handling",
      "D. Dynamic code analysis",
    ],
  },
  {
    numb: 10,
    question:
      "Several developers in your organization are working on a software development project. Recently, Bart made an unauthorized change to the code that effectively broke several modules. Unfortunately, there isn't any record of who made the change or details of the change. Management wants to ensure it is easy to identify who makes any changes in the future. Which of the following provides the BEST solution for this need?",
    answer: "B. Version control",
    explanation:
      "A version control system will track all changes to a software project, including who made the change and when. Dynamic code analysis techniques test an application during its execution. Static code analysis examines the code without executing it as a method of code testing. The use of third-party software development kits (SDKs) is a secure coding technique, but it won't detect unauthorized changes.",
    options: [
      "A. Dynamic code analysis",
      "B. Version control",
      "C. Static code analysis",
      "D. Use of third-party SDKs",
    ],
  },
  {
    numb: 11,
    question:
      "Database administrators have created a database used by a web application. However, testing shows that application queries against the database take a significant amount of time. Which of the following actions is MOST likely to improve the overall performance of the database?",
    answer: "A. Normalization",
    explanation:
      "Normalization techniques organize tables and columns in a database and improve overall database performance. None of the other answers improve the database performance. Input validation techniques help prevent many types of attacks, and server-side input validation techniques are preferred over client-side input validation techniques. Obfuscation techniques make code more difficult to read.",
    options: [
      "A. Normalization",
      "B. Client-side input validation",
      "C. Server-side input validation",
      "D. Obfuscation",
    ],
  },
  {
    numb: 12,
    question:
      "Looking at logs for an online web application, you see that someone has entered the following phrase into several queries: ' or '1'='1'; -- Which of the following provides the BEST protection against this attack?",
    answer: "D. Stored procedures",
    explanation:
      "Attackers commonly use the phrase ' or'1'='1';-- in SQL injection attacks, and stored procedures are an effective method of preventing SQL injection attacks. Normalization techniques organize tables and columns in a database to reduce redundant data but don't block SQL injection attacks. This phrase won't cause an error, so proper error-handling techniques won't help. Dead code is code that is never executed, and it should be removed, but dead code is unrelated to a SQL injection attack.",
    options: [
      "A. Normalization",
      "B. Proper error handling",
      "C. Removing dead code",
      "D. Stored procedures",
    ],
  },
  {
    numb: 13,
    question:
      "You are examining logs generated by an online web application. You notice that the following phrase is appearing in several queries ' or '1'='1'; -- Which of the following is the MOST likely explanation for this?",
    answer: "C. A SQL injection attack",
    explanation:
      "Attackers use the character string ’ or'1'='1';- - in SQL injection attacks to query or modify databases. A buffer overflow attack sends more data or unexpected data to an application to access system memory. A dynamic link library (DLL) injection attack attempts to inject DLLs into memory, causing DLL commands to run. A race condition is a programming conflict when two or more applications or application models attempt to access a resource at the same time.",
    options: [
      "A. A buffer overflow attack",
      "B. A DLL injection attack",
      "C. A SQL injection attack",
      "D. A race condition",
    ],
  },
  {
    numb: 14,
    question:
      "Your organization has created a web application that will go live after testing is complete. An application tester sees the following URL: https://gcgapremium.com/info.php?sessionID=10123&acct=homer. The tester resends the following URL to the website: https://gcgapremium.com/info.php?sessionID=32101&acct=homer. Which of the following attacks is the tester checking?",
    answer: "C. Cross-site request forgery",
    explanation:
      "This indicates an attempt to launch a cross-site requestforgery attack. The question mark (?) in the URL is the giveaway here. A pass the hash attack is a password attack. A buffer overflow attack sends unexpected data, but the URLs are primarily the same, so it isn't unexpected data. A race condition occurs when a system attempts to do two or more operations simultaneously instead of in a specific order.",
    options: [
      "A. Pass the hash",
      "B. Buffer overflow",
      "C. Cross-site request forgery",
      "D. Race condition",
    ],
  },
  {
    numb: 15,
    question:
      "Your SIEM sent an alert after detecting the following script was run on a system within your network. invoke-command {$a = net localgroup administrators | where {$_ -AND $_ -notmatch 'command completed'} | select -skip 4 } What BEST describes this script?",
    answer: "C. A PowerShell script to list local administrators",
    explanation:
      "This is a PowerShell script using the invoke-command cmdlet and it lists members of the local Administrators group. This is not a Python script. This is not a logic bomb because it isn't taking any action other than creating a list. It is not creating a backdoor either.",
    options: [
      "A. A Python script to list local administrators",
      "B. A script used to create a logic bomb",
      "C. A PowerShell script to list local administrators",
      "D. A script used to create a backdoor",
    ],
  },
];
