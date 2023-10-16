let questions = [
  {
    numb: 1,
    question:
      "A tech company recently discovered an attack on its organization, resulting in a significant data breach of customer data. After investigating the attack, they realized it was very sophisticated and likely originated from a foreign country. Which of the following identifies the MOST likely threat actor in this attack?",
    answer: "B. APT",
    options: ["A. Hacktivist", "B. APT", "C. Competitors", "D. Insiders"],
  },
  {
    numb: 2,
    question:
      "An attacker purchased an exploit on the Internet. He then used it to modify an item's price in an online shopping cart during checkout. Which of the following BEST describes this attacker?",
    answer: "B. Script kiddie",
    options: [
      "A. Insider",
      "B. Script kiddie",
      "C. Competitor",
      "D. Hacktivist",
      "E. APT",
    ],
  },
  {
    numb: 3,
    question:
      "Lisa is a database administrator. She received a phone call from someone identifying himself as a representative from a known hardware vendor. He said he's calling customers to inform them of a problem with database servers they've sold, but he said the problem only affects servers running a specific operating system version. He asks Lisa what operating system versions the company is running on their database servers. Which of the following BEST describes the tactic used by the caller in this scenario?",
    answer: "A. Pretexting",
    options: ["A. Pretexting", "B. Tailgating", "C. Pharming", "D. Smishing"],
  },
  {
    numb: 4,
    question:
      "An attacker recently attacked a web server hosted by your company. After investigating the attack, security professionals determined that the      attacker used a previously unknown application exploit. Which of the following BEST identifies this attack?",
    answer: "B. Zero-day attack",
    options: [
      "A. Buffer overflow",
      "B. Zero-day attack",
      "C. Man-in-the-browser",
      "D. Integer overflow",
    ],
  },
  {
    numb: 5,
    question:
      "After Bart logged on to his computer, he was unable to access any data. Instead, his screen displayed a message indicating that unless he made a payment, his hard drive would be formatted, and he'd permanently lose access to his data. What does this indicate?",
    answer: "B. Ransomware",
    options: ["A. Keylogger", "B. Ransomware", "C. Backdoor", "D. Trojan"],
  },
  {
    numb: 6,
    question:
      "Recently, malware on a computer at the Monty Burns Casino destroyed several important files after it detected that Homer was no longer employed at the casino. Which of the following BEST identifies this malware?",
    answer: "A. Logic bomb",
    options: ["A. Logic bomb", "B. Rootkit", "C. Backdoor", "D. Spyware"],
  },
  {
    numb: 7,
    question:
      "Maggie was on the programming team that developed an application used by your Human Resources department. Personnel use this application to store and manage employee data. Maggie programmed in the ability to access this application with a username and password that only she knows to perform remote maintenance on the application if necessary. Which of the following does this describe?",
    answer: "C. Backdoor",
    options: ["A. Virus", "B. Worm", "C. Backdoor", "D. Trojan"],
  },
  {
    numb: 8,
    question:
      "Homer complained of abnormal activity on his workstation. After investigating, an administrator discovered his workstation connects to systems outside the organization's internal network using uncommon ports.The administrator discovered the workstation is also running several hidden processes. Which of the following choices BEST describes this activity?",
    answer: "A. Rootkit",
    options: ["A. Rootkit", "B. Backdoor", "C. Spam", "D. Trojan"],
  },
  {
    numb: 9,
    question:
      "Bart downloaded and installed the nmap security scanner from https://passsecurityplus.com. After completing the install, he noticed that his browser's home page and default search engine was changed. What is the MOST likely cause of the activity?",
    answer: "A. PUP",
    options: ["A. PUP", "B. Fileless virus", "C. WormD. Rootkit", "D. Rootkit"],
  },
  {
    numb: 10,
    question:
      "Your SIEM system alerted on potential malicious activity from a system in your network. After investigating the alert, you determine it was generated after it detected suspicious activity generated through a PowerShell script. Additionally, you verified that the system is sending traffic to and from an unknown IP address in the Internet. Which of the following is the BEST description of this threat?",
    answer: "B. Fileless virus",
    options: [
      "A. Ransomware",
      "B. Fileless virus",
      "C. Command and control",
      "D. Rootkit",
    ],
  },
  {
    numb: 11,
    question:
      "A man in a maintenance uniform walked up to your organization's receptionist desk. He said he was called by the CIO and asked to fix an issue with the phones and needed access to the wiring closet. The receptionist asked the man to show his building access badge, and then she verified that he was on the list of approved personnel to access this secure area. What type of attack will the checks performed by the receptionist prevent?",
    answer: "C. Impersonation",
    options: [
      "A. Tailgating",
      "B. Phishing",
      "C. Impersonation",
      "D. WhalingE. Prepending",
    ],
  },
  {
    numb: 12,
    question:
      "An organization's security policy requires employees to place all discarded paper documents in containers for temporary storage. These papers are later burned in an incinerator. Which of the following attacks are these actions MOST likely trying to prevent?",
    answer: "D. Dumpster diving",
    options: [
      "A. Shoulder surfing",
      "B. Tailgating",
      "C. Smishing",
      "D. Dumpster diving",
    ],
  },
  {
    numb: 13,
    question:
      "Lisa is a database administrator and received a phone call from someone identifying himself as a technician working with a known hardware vendor. He said he's calling customers to inform them of a problem with database servers they've sold, but he said the problem only affects servers running aspecific operating system version. He asks Lisa what operating system versions the company is running on their database servers. Which of the following choices is the BEST response from Lisa?",
    answer:
      "B. Thank the caller and end the call, report the call to her supervisor, and independently check the vendor for issues",
    options: [
      "A. Let the caller know what operating system and versions are running on the database servers to determine if any further action is needed",
      "B. Thank the caller and end the call, report the call to her supervisor, and independently check the vendor for issues",
      "C. Ask the caller for his phone number so that she can call him back after checking the servers",
      "D. Contact law enforcement personnel because this is a pretexting attack",
    ],
  },
  {
    numb: 14,
    question:
      "Homer, the chief financial officer (CFO) of a bank, received an email from Lisa, the company's chief executive officer (CEO). Lisa states she is on vacation and lost her purse, containing all her cash and credit cards. She asks Homer to transfer $5,000 to her account. Which of the following best identifies this attack?",
    answer: "D. Whaling",
    options: ["A. Phishing", "B. Vishing", "C. Smishing", "D. Whaling"],
  },
  {
    numb: 15,
    question:
      "Homer has been looking for the newest version of a popular smartphone. However, he can't find it in stock anywhere. Today, he received an email advertising the smartphone. After clicking the link, his system was infected with malware. Which of the following principles is the email sender employing?",
    answer: "C. Scarcity",
    options: ["A. Authority", "B. Intimidation", "C. Scarcity", "D. Trust"],
  },
];
