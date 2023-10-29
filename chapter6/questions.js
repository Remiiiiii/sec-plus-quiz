let questions = [
  {
    numb: 1,
    question:
      "A tech company recently discovered an attack on its organization, resulting in a significant data breach of customer data. After investigating the attack, they realized it was very sophisticated and likely originated from a foreign country. Which of the following identifies the MOST likely threat actor in this attack?",
    answer: "B. APT",
    explanation:
      "This was most likely an advanced persistent threat (APT)because it was a sophisticated attack and originated from a foreign country. A hacktivist launches attacks to further a cause, but the scenario didn't mention any cause. Competitors might launch attacks, but they would typically focus on proprietary data rather than customer data. An insider would not launch attacks from a foreign country.",
    options: ["A. Hacktivist", "B. APT", "C. Competitors", "D. Insiders"],
  },
  {
    numb: 2,
    question:
      "An attacker purchased an exploit on the Internet. He then used it to modify an item's price in an online shopping cart during checkout. Which of the following BEST describes this attacker?",
    answer: "B. Script kiddie",
    explanation:
      "A script kiddie will typically obtain a ready-made exploit rather than code it himself. An insider would cause damage from within the network or use inside knowledge when attacking. A competitor is unlikely to purchase a single item at a lower price but would be more interested in obtaining proprietary data. Hacktivists launch attacks as part of an activist movement, not to get a better price on an item. An advanced persistent threat (APT) is typically a state actor sponsored by a nation-state and will use advanced tools to launch sophisticated attacks, rather than just lowering price for an item.",
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
    explanation:
      "The caller is using the social engineering tactic of pretexting by setting up a scenario that has a better chance of getting someone to give him information. If he just asked for the operating system versions on the servers without a prepended scenario, his chance of success would have been diminished. Tailgating is the practice of one person following closely behind another without showing credentials. A pharming attack attempts to manipulate the DNS name resolution process. Smishing is a form of phishing using text messages.",
    options: ["A. Pretexting", "B. Tailgating", "C. Pharming", "D. Smishing"],
  },
  {
    numb: 4,
    question:
      "An attacker recently attacked a web server hosted by your company. After investigating the attack, security professionals determined that the attacker used a previously unknown application exploit. Which of the following BEST identifies this attack?",
    answer: "B. Zero-day attack",
    explanation:
      "A zero-day attack takes advantage of an undocumented exploit or an exploit that is unknown to the public. A buffer overflow attack sends unexpected data to a system to access system memory or cause it to crash. Although some buffer overflow attacks are unknown, others are unknown. If the server isn't kept up to date with patches, it can be attacked with a known buffer overflow attack. A man-in-the-browser attack is a type of proxy Trojan horse that takes advantage of vulnerabilities in web browsers, not web servers. An integer overflow attack attempts to use or create a numeric value that is too big for an application to handle.",
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
    explanation:
      "Ransomware attempts to take control of the user's system or data and then demands payment (ransom) to return control. Keyloggers capture a user's keystrokes and store them in a file. This file can be automatically sent to an attacker or manually retrieved depending on the keylogger. It's possible that Bart's computer was infected with a Trojan, which created a backdoor. However, not all Trojans or backdoor accounts demand payment as ransom.",
    options: ["A. Keylogger", "B. Ransomware", "C. Backdoor", "D. Trojan"],
  },
  {
    numb: 6,
    question:
      "Recently, malware on a computer at the Monty Burns Casino destroyed several important files after it detected that Homer was no longer employed at the casino. Which of the following BEST identifies this malware?",
    answer: "A. Logic bomb",
    explanation:
      "A logic bomb executes in response to an event. In this scenario, the logic bomb is delivering its payload when it detects that Homer is no longer employed at the company. A rootkit doesn't respond to an event. A backdoor provides another method of accessing a system, but it does not delete files. Spyware is software installed on user systems without their awareness or consent.",
    options: ["A. Logic bomb", "B. Rootkit", "C. Backdoor", "D. Spyware"],
  },
  {
    numb: 7,
    question:
      "Maggie was on the programming team that developed an application used by your Human Resources department. Personnel use this application to store and manage employee data. Maggie programmed in the ability to access this application with a username and password that only she knows to perform remote maintenance on the application if necessary. Which of the following does this describe?",
    answer: "C. Backdoor",
    explanation:
      "A backdoor provides someone with an alternative way of accessing a system or application, which is what Maggie created in this scenario. It might seem as though she's doing so with good intentions, but if attackers discover a backdoor, they can exploit it. A virus is a malicious code that attaches itself to an application and executes when the application runs, not code that is purposely written into the application. A worm is a self-replicating malware that travels throughout a network without the assistance of a host application or user interaction. A Trojan is software that looks like it has a beneficial purpose but includes a malicious component.",
    options: ["A. Virus", "B. Worm", "C. Backdoor", "D. Trojan"],
  },
  {
    numb: 8,
    question:
      "Homer complained of abnormal activity on his workstation. After investigating, an administrator discovered his workstation connects to systems outside the organization's internal network using uncommon ports. The administrator discovered the workstation is also running several hidden processes. Which of the following choices BEST describes this activity?",
    answer: "A. Rootkit",
    explanation:
      "A rootkit typically runs hidden processes and it commonly attempts to connect to computers via the Internet. The scenario doesn't address the initial infection. Although an attacker might have used a backdoor to access the user's computer and install the rootkit, backdoors don't run hidden processes. A Trojan is malware that looks beneficial but is malicious. Spam is an unwanted email and is unrelated to this question.",
    options: ["A. Rootkit", "B. Backdoor", "C. Spam", "D. Trojan"],
  },
  {
    numb: 9,
    question:
      "Bart downloaded and installed the nmap security scanner from https://passsecurityplus.com. After completing the install, he noticed that his browser's home page and default search engine was changed. What is the MOST likely cause of the activity?",
    answer: "A. PUP",
    explanation:
      "A potentially unwanted program (PUP) is installed along with a desired program, and many PUPs hijack browsers by changing the home page and/or changing the default search engine. Because the user downloaded Nmap from a site other than nmap.org, it is conceivable that the alternative site added PUPs to the Nmap program. A fileless virus is a type of malicious software that runs in memory, often within a PowerShellscript, instead of being a file that is written to disk. A worm is a self-replicating malware that travels throughout a network without the assistance of a host application or user interaction. A rootkit is a program or group of programs that provide root-level access to a system.",
    options: ["A. PUP", "B. Fileless virus", "C. WormD. Rootkit", "D. Rootkit"],
  },
  {
    numb: 10,
    question:
      "Your SIEM system alerted on potential malicious activity from a system in your network. After investigating the alert, you determine it was generated after it detected suspicious activity generated through a PowerShell script. Additionally, you verified that the system is sending traffic to and from an unknown IP address in the Internet. Which of the following is the BEST description of this threat?",
    answer: "B. Fileless virus",
    explanation:
      "This describes a fileless virus, which commonly injects PowerShell commands into existing scripts. Security information and event management (SIEM) systems can be configured to send alerts when PowerShell commands are detected. Ransomware typically encrypts data and the attacker then demands payment as ransom, but there isn't any indication that a ransom is requested in this scenario. The lifeless virus may have joined the computer to a botnet and the traffic to and from the unknown IP address may be a connection to a command and control server. However, there isn't enough information to make this conclusion. A rootkit is a program or group of programs that provide root-level access to a system and hides itself to evade detection.",
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
    explanation:
      "These checks are security controls that will help prevent impersonation, a social engineering attack. Tailgating is the practice of oneperson following closely behind another without showing credentials. Phishing is the practice of sending email to users to trick them into revealing personal information or clicking on a link. Whaling is a form of spear phishing that attempts to target high-level executives. By first saying that he was called by the chief information officer (CIO), he was using prepending to add the impression of validity to his request.",
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
    explanation:
      "Dumpster diving is the practice of looking for documents in trash dumpsters, but shredding or incinerating documents ensures dumpster divers cannot retrieve any paper documents. Shoulder surfers attempt to view something on a monitor or other screen, not papers. Tailgating refers to entering a secure area by following someone else. Smishing is a form of phishing using text messages.",
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
    explanation:
      "This sounds like a social engineering attack where the caller is attempting to get information on the servers, so it's appropriate to end the call, report the call to a supervisor, and independently check the vendor for potential issues. It is not appropriate to give external personnel information on internal systems from a single phone call. It isn't necessary to ask for a phone number because you wouldn't call back and give information on the servers. While the caller is pretexting the request with a somewhat believable scenario, the caller has not committed a crime by asking questions, so it is not appropriate to contact law enforcement personnel.",
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
    explanation:
      "This is most likely a whaling attack because an executive(the CFO of the bank) is being targeted. While whaling is a type of phishing, whaling is more specific and a better answer than phishing. Vishing is a form of phishing that uses the phone, but this scenario used email. Smishing is a form of phishing that uses text messages.",
    options: ["A. Phishing", "B. Vishing", "C. Smishing", "D. Whaling"],
  },
  {
    numb: 15,
    question:
      "Homer has been looking for the newest version of a popular smartphone. However, he can't find it in stock anywhere. Today, he received an email advertising the smartphone. After clicking the link, his system was infected with malware. Which of the following principles is the email sender employing?",
    answer: "C. Scarcity",
    explanation:
      "The attacker is using scarcity to entice the user to click the link. A user might realize that clicking on links from unknown sources is risky, but the temptation of getting a new smartphone might cause the user to ignore the risk. There isn’t any indication that the email is from any specific authority. It isn’t trying to intimidate the recipient, and there isn’t indication it is trying to build trust.",
    options: ["A. Authority", "B. Intimidation", "C. Scarcity", "D. Trust"],
  },
];
