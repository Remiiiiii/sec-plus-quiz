let questions = [
  {
    numb: 1,
    question:
      "An IDS has sent multiple alerts in response to increased traffic. Upon investigation, you realize it is due to a spike in network traffic from several sources. Assuming this is malicious, which of the following is the MOST likely explanation?",
    answer: "D. A DDoS attack",
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
      "An administrator regularly connects to a server using SSH without any problems. Today, he sees a message similar to the following graphic when he connects to the server .Which of the following is the MOST likely reason for this message?",
    answer: "B. On-path attack",
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
      "Database administrators have created a database used by a web application. However, testing shows that application queries against the database take a significant amount of time. Which of the following actions are MOST likely to improve the overall performance of the database?",
    answer: "A. Normalization",
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
      "Your organization has created a web application that will go live after testing is complete. An application tester sees the following URL:https://gcgapremium.com/info.php?sessionID=10123&acct=homer. The tester resends the following URL to the website:https://gcgapremium.com/info.php?sessionID=32101&acct=homer. Which of the following attacks is the tester checking?",
    answer: "C. Cross-site request forgery",
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
      "Your SIEM sent an alert after detecting the following script was run ona system within your network. invoke-command {$a = net localgroup administrators | where {$_ -AND $_ -notmatch 'command completed'} | select -skip 4 } What BEST describes this script?",
    answer: "C. A PowerShell script to list local administrators",
    options: [
      "A. A Python script to list local administrators",
      "B. A script used to create a logic bomb",
      "C. A PowerShell script to list local administrators",
      "D. A script used to create a backdoor",
    ],
  },
];
