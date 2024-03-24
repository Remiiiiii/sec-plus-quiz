let questions = [
  {
    numb: 1,
    question:
      "Management within your organization has defined a use case to support the confidentiality of data stored in a database. Which of the following solutions will BEST  meet this need?",
    answer: "C. Encryption",
    explanation:
      "Encryption is the best choice to provide confidentiality of any type of information, including data stored in a database. Hashing supports a use case of supporting integrity. Disk redundancies provide resilience and increase availability. Patching systems increases availability and reliability.",
    options: [
      "A. Hashing",
      "B. Disk redundancies",
      "C. Encryption",
      "D. Patching",
    ],
  },
  {
    numb: 2,
    question:
      "Apu manages network devices in his store and maintains copies of the configuration files for all the managed routers and switches. On a weekly basis, he creates hashes for these files and compares them with hashes he created on the same files the previous week. Which of the following use case is he MOST likely supporting?",
    answer: "B. Supporting integrity",
    explanation:
      " He is most likely using a use case of supporting integrity. By verifying that the hashes are the same on the configuration files, he is verifying that the files have not changed. Confidentiality is enforced with encryption, access controls, and steganography. Encryption is a method of enforcing confidentiality, and it doesn't use hashes. Availability ensures systems are up and operational when needed.",
    options: [
      "A. Supporting confidentiality",
      "B. Supporting integrity",
      "C. Supporting encryption",
      "D. Supporting availability",
    ],
  },
  {
    numb: 3,
    question:
      "Which of the following is a cryptographic algorithm that will create a fixed-length output from a data file but cannot be used to re-create the original data file?",
    answer: "A. MD5",
    explanation:
      "Message Digest 5 (MD5) is a hashing algorithm that creates a fixed-length, irreversible output. Hashing algorithms cannot re-create the original data file from just the hash. Advanced Encryption Standard (AES) is an encryption algorithm, and you can re-create the original data file by decrypting it. An intrusion detection system (IDS) is not a cryptographic algorithm but is a detective control. A security information and event management (SIEM) system provides centralized logging.",
    options: ["A. MD5", "B. AES", "C. IDS", "D. SIEM"],
  },
  {
    numb: 4,
    question:
      "Your organization hosts an e-commerce web server selling digital products. The server randomly experiences a high volume of sales and usage, which causes spikes in resource usage. These spikes occasionally take the server down. Which of the following should be implemented to prevent these outages?",
    answer: "A. Elasticity",
    explanation:
      "Elasticity is the best choice because it allows the server to dynamically scale up or out as needed in response to high resource usage. Scalability isn't the best answer because it is done manually, however, the high resource usage is random and manually adding resources can't respond to the random spikes quick enough. Normalization refers to organizing tables and columns in a database to reduce redundant data and improve overall database performance. Stored procedures are a group of SQL statements that execute as a whole and help prevent SQL injection attacks.",
    options: [
      "A. Elasticity",
      "B. Scalability",
      "C. Normalization",
      "D. Stored Procedure",
    ],
  },
  {
    numb: 5,
    question:
      "An administrator recently installed an IDS to help reduce the impact of security incidents. Which of the following BEST identifies the control type of an IDS?",
    answer: "D. Detective",
    explanation:
      "An intrusion detection system (IDS) is a detective control. It can detect malicious traffic after it enters a network. A preventive control, such as an intrusion prevention system (IPS), prevents malicious traffic from entering the network. An IDS uses technology and is not a physical control. Deterrent controls attempt to discourage a threat, but attackers wouldn't know if a system had an IDS, so the IDS can't deter attacks.",
    options: ["A. Preventive", "B. Physical", "C. Deterrent", "D. Detective"],
  },
  {
    numb: 6,
    question:
      "Maggie works in the security section of the IT department. Her primary responsibility is to monitor security logs, analyze trends reported by the SIEM, and validate alerts. Which of the following choices BEST identifies the primary security control she's implementing?",
    answer: "C. Detective control",
    explanation:
      "Monitoring security logs, analyzing trend reports from a security information and event management (SIEM), and validating alerts from a SIEM are detective controls. Detective controls try to detect security incidents after they happened. A compensating control is an alternative control used when a primary security control is not feasible or is not yet deployed. Preventive controls attempt to prevent incidents, but the scenario doesn't specifically describe any preventive controls. A corrective control attempts to reverse the impact of a security incident after it has happened.",
    options: [
      "A. Compensating",
      "B. Preventive control",
      "C. Detective control",
      "D. Corrective control",
    ],
  },
  {
    numb: 7,
    question:
      "A server in your network's DMZ was recently attacked. The firewall logs show that the server was attacked from an external IP address with the following socket: 72.52.230.233:6789. You want to see if the connection is still active. Which of the following tools would be BEST to use?",
    answer: "C. netstat",
    explanation:
      "The netstat command can be used to display a list of open connections, including both the IP address and the port (or a socket). None of the other commands display active connections. The tracert command lists the routers between two systems. The arp command shows the contents of the Address Resolution Protocol (ARP) cache. The dig command can be used on Linux systems to query Domain Name System(DNS) servers.",
    options: ["A. tracert", "B. arp", "C. netstat", "D. dig"],
  },
  {
    numb: 8,
    question:
      "You suspect that traffic in your network is being rerouted to an unauthorized router within your network. Which of the following command-line tools would help you narrow down the problem?",
    answer: "B. tracert",
    explanation:
      "You can use tracert to track packet flow through a network, and if an extra router has been added to your network, tracert will identify it. You can use ping to check connectivity with a remote system, but it doesn't show the route. The ipconfig command shows the network settings on a Windows computer, but it doesn't identify failed routers. Netstat shows active connections and other network statistics on a local system, but it doesn't identify network paths.",
    options: ["A. ping", "B. tracert", "C. ipconfig", "D. netstat"],
  },
  {
    numb: 9,
    question:
      "Homer is complaining that he frequently has trouble accessing files on a server in the network. You determine the server's IP address is 172.16.17.11, but ping doesn't show any problem. You decide to use pathping and see the following result. Which of the following is the MOST likely problem?",
    answer: "C. The segment between 192.168.7.1",
    explanation:
      "The segment between 192.168.7.1 and 192.168.5.1 is most likely the problem. The results show packet loss of 14 percent on this segment. The router at 10.80.73.150 (hop 4) is showing 100 percent packet loss but traffic is still getting to the server at 172.16.17.11 (hop 5). This indicates the router at 10.80.73.150 is not responding to ICMP traffic. The packet loss between the source and 192.168.5.1 is due to the packet loss on the previous network segment. There is no packet loss to 192.168.7.1.",
    options: [
      "A. The router with the IP address of 10.80.73.150",
      "B. The router with the IP address of 192.168.5.1",
      "C. The segment between 192.168.7.1",
      "D. The router with the IP address of 192.168.7.1",
    ],
    image: "../images/q9.png",
  },
  {
    numb: 10,
    question:
      "You're troubleshooting a connectivity issue with a server that has an IP address of 192.168.1.10 from your Linux system. The server does not respond to the ping command, but you suspect that a router is blocking the ping traffic. Which of the following choices would you use to verify the server is responding to traffic?",
    answer: "A. hping",
    explanation:
      "The hping command can be used in place of the ping command when network devices are blocking ping commands using Internet Control Message Protocol (ICMP) traffic. It can send packets using TCP and other protocols instead of ICMP. The ipconfig command is used to view TCP/IP configuration information. Netstat shows active connections and network statistics. The arp command shows the contents of the arp cache and does not use echo commands.",
    options: ["A. hping", "B. ipconfig", "C. netstat", "D. arp"],
  },
  {
    numb: 11,
    question:
      "Lisa is manually searching through a large log file on a Linux system looking for brute force attack indicators. Which of the following commands will simplify this process for her?",
    answer: "A. grep",
    explanation:
      "The grep command (short for globally search a regular expression and print) is used to search for a specific string or pattern of text within a file and simplifies the search. None of the other answers listed search the entire file. The head command shows only a specific number of lines at the beginning of a file, and the tail command shows only a specific number of lines at the end of a file. The cat command (short for concatenate) is used to display the entire contents of a file but doesn't narrow the search for specific text strings found in a brute force attack.",
    options: ["A. grep", "B. head", "C. tail", "D. cat"],
  },
  {
    numb: 12,
    question:
      "You want to verify that the syslog file is being rotated successfully on a Linux system. Which of the following commands is the BEST choice to use?",
    answer: "D. head",
    explanation:
      "The head command shows the first 10 lines (by default) of a log file, and if the log is being rotated properly, one of the first log entries indicates the logrotate.service has succeeded. Rotating the log copies the current log, erases the log, and starts logging new entries at the beginning of every day. The logger command is used to add entries into the syslog file. It doesn't read the file. The cat command (short for concatenate) displays the entire contents of a file but scrolls past the first entries very quickly making them difficult to catch. The tail command shows the last 10 lines (by default) of a log file, and is unlikely to include the first entries showing that the logrotate.service succeeded.",
    options: ["A. logger", "B. cat", "C. tail", "D. head"],
  },
  {
    numb: 13,
    question:
      "You are writing a script that will perform backups on a Linux system and you plan to schedule the script to run after midnight daily. You want to ensure that the script records when the backup starts and when the backup ends. Which of the following is the BEST choice to meet this requirement?",
    answer: "D. logger",
    explanation:
      "The logger command is used to add entries into the syslog file and can be called from scripts, applications, or the terminal. The head command can be used to view the first lines in the syslog file and can view the logger entry, but it doesn't add any entries into the syslog file. The tail command shows the last 10 lines (by default) of a log file, but it doesn't write into a log file. The grep command (short for globally search a regular expression and print) is used to search files but it doesn't write into files.",
    options: ["A. head", "B. tail", "C. grep", "D. logger"],
  },
  {
    numb: 14,
    question:
      "Maggie needs access to the project.doc file available on a Linux server. Lisa, a system administrator responsible for this server, sees the following permissions for the file: rwx rw- ---. What should Lisa use to grant Maggie read access to the file?",
    answer: "A. chmod",
    explanation:
      "The system administrator should modify permissions with the chmod (short for change mode) command. The journalctl command queries the Linux system logging utility (journald) and displays log entries from several sources. The cat command (short for concatenate) displays file contents. LAMP is an acronym for Linux, Apache, MySQL, and PHP (or Perl or Python).",
    options: ["A. chmod", "B. journalctl", "C. cat", "D. LAMP"],
  },
  {
    numb: 15,
    question:
      "Which of the following describes the proper format of log entries for Linux systems?",
    answer: "D. syslog",
    explanation:
      "The syslog protocol (defined in RFC 5424) identifies the format of Linux log entries and describes how to transport these log entries. Note that syslog is also the name of a log on Linux systems. NXLog is a log management tool that can accept log entries from multiple sources, including Linux and Windows. The logger command is used to add entries into the syslog file but it doesn't describe the format. A security information and event management (SIEM) system collects, aggregates, and correlates logs from multiple sources.",
    options: ["A. NXlog", "B. logger", "C. SIEM", "D. syslog"],
  },
];
